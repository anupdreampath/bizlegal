import PageShell from "@/components/PageShell";
import Link from "next/link";

const steps = [
  { number: "01", title: "Submit your request", description: "Complete our guided questionnaire about your business goals, LLC structure, and company details. There is no cost or commitment to submit a request — it simply tells our team what you need.", details: ["Business name and industry", "LLC type and purpose", "Member information", "Contact details"] },
  { number: "02", title: "Expert review", description: "Our team reviews your submission within 1-2 business days. We assess your needs, verify name availability, and prepare a customized plan including scope, timeline, and fees.", details: ["Name availability check", "Structure recommendation", "Fee breakdown", "Timeline estimate"] },
  { number: "03", title: "Document preparation", description: "Once you approve the plan, we prepare all legal documents. Every document is reviewed by an experienced business attorney before submission to ensure accuracy.", details: ["Articles of Organization", "Operating Agreement", "EIN application", "Initial Statement of Information"] },
  { number: "04", title: "Filing & formation", description: "We file your documents with the California Secretary of State and all required agencies. Standard processing takes 5-7 business days, with expedited options available.", details: ["Secretary of State filing", "IRS EIN registration", "State agency notifications", "Document delivery"] },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      label="How It Works"
      title="From questionnaire to California LLC in four steps"
      description="We've simplified the process so you can go from idea to legally formed LLC without the headache."
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="grid lg:grid-cols-2 gap-[2rem] lg:gap-[5rem] py-[3rem] border-t border-gray-200">
                <div>
                  <span className="text-[0.85rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                  <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mt-2 mb-4">
                    {step.title}
                  </h2>
                  <p className="font-sans text-[1rem] text-gray-600 leading-[1.6]">
                    {step.description}
                  </p>
                </div>
                <div className="bg-ivory-200 rounded-[1rem] p-6 md:p-8">
                  <p className="font-sans font-bold text-[0.9rem] text-black uppercase tracking-wider mb-4">
                    What&apos;s involved
                  </p>
                  <div className="space-y-3">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 border-b border-gray-200 pb-3">
                        <span className="text-green-800 font-bold">&#x2713;</span>
                        <span className="font-sans text-[0.95rem] text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-[3rem] mt-[1rem]">
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-4">
              After formation
            </h2>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] max-w-[36rem] mb-8">
              Once your LLC is formed, all documents are delivered through your
              secure client portal. You can then opt into ongoing management
              services to keep your LLC compliant year after year.
            </p>
            <Link
              href="/questionnaire"
              className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
            >
              Start Your Request
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
