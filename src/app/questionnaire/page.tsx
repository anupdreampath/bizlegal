"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Target,
  Users,
  FileText,
  Send,
} from "lucide-react";

/* ───────── step definitions ───────── */
const steps = [
  { id: 1, label: "Business Info", icon: Building2 },
  { id: 2, label: "LLC Purpose", icon: Target },
  { id: 3, label: "Members", icon: Users },
  { id: 4, label: "Company Profile", icon: FileText },
  { id: 5, label: "Review & Submit", icon: Send },
];

type FormData = {
  /* Step 1 */
  businessName: string;
  businessType: string;
  industry: string;
  stateOfFormation: string;
  hasExistingBusiness: string;
  /* Step 2 */
  llcPurpose: string;
  mainMotivation: string;
  businessActivities: string;
  revenueExpectation: string;
  /* Step 3 */
  numberOfMembers: string;
  memberNames: string;
  managementStructure: string;
  /* Step 4 */
  businessAddress: string;
  phone: string;
  email: string;
  website: string;
  additionalNotes: string;
};

const initialData: FormData = {
  businessName: "",
  businessType: "",
  industry: "",
  stateOfFormation: "California",
  hasExistingBusiness: "",
  llcPurpose: "",
  mainMotivation: "",
  businessActivities: "",
  revenueExpectation: "",
  numberOfMembers: "",
  memberNames: "",
  managementStructure: "",
  businessAddress: "",
  phone: "",
  email: "",
  website: "",
  additionalNotes: "",
};

/* ───────── reusable field components ───────── */
function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-sans font-bold text-black mb-1.5"
    >
      {children}
    </label>
  );
}

function Input({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black placeholder:text-gray-400/50 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-colors"
    />
  );
}

function Select({
  id,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-colors cursor-pointer appearance-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237A7A7A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 12px center",
      }}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

function Textarea({
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black placeholder:text-gray-400/50 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-colors resize-none"
    />
  );
}

function RadioGroup({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string; description?: string }[];
}) {
  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-start gap-3 p-4 border rounded-[0.7rem] cursor-pointer transition-all duration-200 ${
            value === opt.value
              ? "border-green-800 bg-green-800/5"
              : "border-gray-200 hover:border-green-800/30"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="mt-0.5 accent-green-800"
          />
          <div>
            <span className="font-sans font-bold text-sm text-black">
              {opt.label}
            </span>
            {opt.description && (
              <p className="text-xs font-sans text-gray-400 mt-0.5">
                {opt.description}
              </p>
            )}
          </div>
        </label>
      ))}
    </div>
  );
}

/* ───────── main component ───────── */
export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 5));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    // In production, this would POST to your API
    console.log("Submitted:", form);
    setSubmitted(true);
  };

  /* ── success state ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-ivory-100 flex items-center justify-center px-4">
        <div className="max-w-md text-center animate-fade-in-up">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-800/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-800" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-black mb-4">
            Request Submitted
          </h1>
          <p className="font-sans text-gray-600 mb-8 leading-relaxed">
            Thank you for submitting your LLC request. Our team will review
            your information and reach out within 1-2 business days with a
            customized plan.
          </p>
          <div className="space-y-3">
            <Link
              href="/signup"
              className="block w-full py-3 font-sans font-bold text-white bg-green-800 hover:bg-green-800-light rounded-[0.7rem] transition-colors cursor-pointer text-center"
            >
              Create Your Account
            </Link>
            <Link
              href="/"
              className="block w-full py-3 font-sans font-medium text-black border border-gray-200 hover:bg-ivory-100 rounded-[0.7rem] transition-colors cursor-pointer text-center"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-100">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-black" strokeWidth={1.5} />
            <span className="font-serif text-lg font-bold text-black">
              Biz Legal
            </span>
          </Link>
          <span className="text-sm font-sans text-gray-400">
            Step {currentStep} of 5
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isDone = step.id < currentStep;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isDone
                        ? "bg-green-800 text-white"
                        : isActive
                          ? "bg-green-800 text-white"
                          : "bg-white border border-gray-200 text-gray-400"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs font-sans font-medium hidden sm:block ${
                      isActive ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-full bg-border rounded-full h-1.5">
            <div
              className="bg-green-800 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-sm">
          {/* Step 1: Business Info */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl font-bold text-black mb-2">
                Tell us about your business
              </h2>
              <p className="font-sans text-sm text-gray-400 mb-8">
                Basic information about the business you want to form or
                manage as an LLC.
              </p>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="businessName">
                    Proposed Business Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="businessName"
                    value={form.businessName}
                    onChange={update("businessName")}
                    placeholder="e.g., Pacific Coast Ventures LLC"
                  />
                  <p className="text-xs font-sans text-gray-400 mt-1">
                    We&apos;ll check name availability with the CA Secretary of State
                  </p>
                </div>
                <div>
                  <Label htmlFor="businessType">
                    Type of Business <span className="text-red-600">*</span>
                  </Label>
                  <Select
                    id="businessType"
                    value={form.businessType}
                    onChange={update("businessType")}
                    placeholder="Select business type..."
                    options={[
                      "Single-Member LLC",
                      "Multi-Member LLC",
                      "Series LLC",
                      "Professional LLC (PLLC)",
                      "Not sure yet",
                    ]}
                  />
                </div>
                <div>
                  <Label htmlFor="industry">
                    Industry / Sector <span className="text-red-600">*</span>
                  </Label>
                  <Select
                    id="industry"
                    value={form.industry}
                    onChange={update("industry")}
                    placeholder="Select your industry..."
                    options={[
                      "Technology / Software",
                      "Real Estate / Property",
                      "Consulting / Professional Services",
                      "Healthcare / Medical",
                      "E-Commerce / Retail",
                      "Food & Beverage",
                      "Construction / Contracting",
                      "Creative / Media / Entertainment",
                      "Finance / Accounting",
                      "Other",
                    ]}
                  />
                </div>
                <div>
                  <Label htmlFor="hasExistingBusiness">
                    Do you have an existing business?
                  </Label>
                  <RadioGroup
                    name="hasExistingBusiness"
                    value={form.hasExistingBusiness}
                    onChange={update("hasExistingBusiness")}
                    options={[
                      {
                        value: "no",
                        label: "No, this is a new venture",
                        description: "Starting fresh with a new LLC",
                      },
                      {
                        value: "sole-prop",
                        label: "Yes, I have a sole proprietorship",
                        description:
                          "Converting an existing business to an LLC",
                      },
                      {
                        value: "other-entity",
                        label: "Yes, I have another business entity",
                        description:
                          "Restructuring or creating an additional entity",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: LLC Purpose & Motivation */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl font-bold text-black mb-2">
                Purpose & motivation for your LLC
              </h2>
              <p className="font-sans text-sm text-gray-400 mb-8">
                Help us understand your goals so we can structure your LLC
                optimally.
              </p>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="llcPurpose">
                    What is the primary purpose of this LLC?{" "}
                    <span className="text-red-600">*</span>
                  </Label>
                  <RadioGroup
                    name="llcPurpose"
                    value={form.llcPurpose}
                    onChange={update("llcPurpose")}
                    options={[
                      {
                        value: "new-business",
                        label: "Start a new business",
                        description:
                          "Launching a new product or service",
                      },
                      {
                        value: "asset-protection",
                        label: "Asset protection",
                        description:
                          "Protecting personal assets from business liabilities",
                      },
                      {
                        value: "real-estate",
                        label: "Real estate investment",
                        description:
                          "Holding and managing real estate properties",
                      },
                      {
                        value: "freelance",
                        label: "Freelance / consulting",
                        description:
                          "Operating as an independent contractor or consultant",
                      },
                      {
                        value: "holding-company",
                        label: "Holding company",
                        description:
                          "Managing ownership of other businesses or investments",
                      },
                      {
                        value: "other",
                        label: "Other",
                        description: "Describe in the notes below",
                      },
                    ]}
                  />
                </div>
                <div>
                  <Label htmlFor="mainMotivation">
                    What is your main motivation for forming an LLC?{" "}
                    <span className="text-red-600">*</span>
                  </Label>
                  <Select
                    id="mainMotivation"
                    value={form.mainMotivation}
                    onChange={update("mainMotivation")}
                    placeholder="Select your primary motivation..."
                    options={[
                      "Liability protection",
                      "Tax benefits",
                      "Business credibility",
                      "Raising investment",
                      "Government contracts",
                      "Partnership structure",
                      "Multiple reasons",
                    ]}
                  />
                </div>
                <div>
                  <Label htmlFor="businessActivities">
                    Describe the main activities of your business{" "}
                    <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="businessActivities"
                    value={form.businessActivities}
                    onChange={update("businessActivities")}
                    placeholder="Tell us what your company will do — products, services, target market, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="revenueExpectation">
                    Expected annual revenue
                  </Label>
                  <Select
                    id="revenueExpectation"
                    value={form.revenueExpectation}
                    onChange={update("revenueExpectation")}
                    placeholder="Select expected revenue range..."
                    options={[
                      "Under $50,000",
                      "$50,000 – $100,000",
                      "$100,000 – $500,000",
                      "$500,000 – $1,000,000",
                      "Over $1,000,000",
                      "Not sure yet",
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Members */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl font-bold text-black mb-2">
                LLC members & management
              </h2>
              <p className="font-sans text-sm text-gray-400 mb-8">
                Tell us about the people involved in your LLC.
              </p>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="numberOfMembers">
                    Number of LLC members <span className="text-red-600">*</span>
                  </Label>
                  <Select
                    id="numberOfMembers"
                    value={form.numberOfMembers}
                    onChange={update("numberOfMembers")}
                    placeholder="How many members will the LLC have?"
                    options={["1 (Single-member)", "2", "3-5", "6-10", "More than 10"]}
                  />
                </div>
                <div>
                  <Label htmlFor="memberNames">
                    Member name(s) <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="memberNames"
                    value={form.memberNames}
                    onChange={update("memberNames")}
                    placeholder="List all member names and their ownership percentages (e.g., John Smith — 60%, Jane Doe — 40%)"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="managementStructure">
                    Management structure <span className="text-red-600">*</span>
                  </Label>
                  <RadioGroup
                    name="managementStructure"
                    value={form.managementStructure}
                    onChange={update("managementStructure")}
                    options={[
                      {
                        value: "member-managed",
                        label: "Member-Managed",
                        description:
                          "All members participate in day-to-day operations and decisions",
                      },
                      {
                        value: "manager-managed",
                        label: "Manager-Managed",
                        description:
                          "One or more designated managers handle operations; some members are passive investors",
                      },
                      {
                        value: "not-sure",
                        label: "Not sure",
                        description:
                          "We'll recommend the best structure for your situation",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Company Profile / Contact */}
          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl font-bold text-black mb-2">
                Your contact information
              </h2>
              <p className="font-sans text-sm text-gray-400 mb-8">
                How should we reach you to discuss your LLC request?
              </p>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="businessAddress">
                    Business address (or intended address){" "}
                    <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="businessAddress"
                    value={form.businessAddress}
                    onChange={update("businessAddress")}
                    placeholder="Street address, City, CA ZIP"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="phone">
                      Phone number <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">
                      Email address <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="website">
                    Website (optional)
                  </Label>
                  <Input
                    id="website"
                    value={form.website}
                    onChange={update("website")}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div>
                  <Label htmlFor="additionalNotes">
                    Additional notes or questions
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    value={form.additionalNotes}
                    onChange={update("additionalNotes")}
                    placeholder="Anything else you'd like us to know about your LLC needs?"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl font-bold text-black mb-2">
                Review your request
              </h2>
              <p className="font-sans text-sm text-gray-400 mb-8">
                Please verify your information before submitting.
              </p>

              <div className="space-y-6">
                {/* Summary sections */}
                {[
                  {
                    title: "Business Information",
                    fields: [
                      ["Business Name", form.businessName],
                      ["Business Type", form.businessType],
                      ["Industry", form.industry],
                      ["Existing Business", form.hasExistingBusiness || "Not specified"],
                    ],
                  },
                  {
                    title: "LLC Purpose",
                    fields: [
                      ["Purpose", form.llcPurpose],
                      ["Motivation", form.mainMotivation],
                      ["Activities", form.businessActivities],
                      ["Revenue Expectation", form.revenueExpectation],
                    ],
                  },
                  {
                    title: "Members & Management",
                    fields: [
                      ["Number of Members", form.numberOfMembers],
                      ["Members", form.memberNames],
                      ["Management Structure", form.managementStructure],
                    ],
                  },
                  {
                    title: "Contact Information",
                    fields: [
                      ["Address", form.businessAddress],
                      ["Phone", form.phone],
                      ["Email", form.email],
                      ["Website", form.website || "Not provided"],
                    ],
                  },
                ].map((section) => (
                  <div
                    key={section.title}
                    className="bg-ivory-100 rounded-xl p-5 border border-gray-200"
                  >
                    <h3 className="font-sans font-bold text-black text-sm mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.fields.map(([label, value]) => (
                        <div
                          key={label}
                          className="flex justify-between text-sm"
                        >
                          <span className="font-sans text-gray-400">
                            {label}
                          </span>
                          <span className="font-sans text-black font-medium text-right max-w-[60%] break-words">
                            {value || "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {form.additionalNotes && (
                  <div className="bg-ivory-100 rounded-xl p-5 border border-gray-200">
                    <h3 className="font-sans font-bold text-black text-sm mb-2">
                      Additional Notes
                    </h3>
                    <p className="text-sm font-sans text-gray-600">
                      {form.additionalNotes}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 p-4 bg-ivory-100-200 rounded-[1rem]">
                <p className="text-xs font-sans text-gray-600 leading-relaxed">
                  By submitting this request, you agree to our{" "}
                  <a href="/terms" className="text-green-800 hover:underline cursor-pointer">Terms of Use</a>
                  {" "}and{" "}
                  <a href="/privacy" className="text-green-800 hover:underline cursor-pointer">Privacy Policy</a>.
                  No payment is required at this stage. Our team will review
                  your submission and contact you within 1-2 business days.
                </p>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
            {currentStep > 1 ? (
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 px-6 py-3 font-sans font-medium text-black border border-gray-200 hover:bg-ivory-100 rounded-[0.7rem] transition-colors duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 font-sans font-medium text-gray-400 hover:text-black transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
            )}

            {currentStep < 5 ? (
              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 px-8 py-3 font-sans font-bold text-white bg-green-800 hover:bg-green-800-light rounded-[0.7rem] transition-colors duration-200 cursor-pointer"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-8 py-3 font-sans font-bold text-black bg-green-800 hover:bg-green-800-light rounded-[0.7rem] transition-colors duration-200 cursor-pointer"
              >
                Submit Request
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
