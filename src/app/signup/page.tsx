"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", form);
  };

  const passwordChecks = [
    { label: "At least 8 characters", pass: form.password.length >= 8 },
    { label: "Contains a number", pass: /\d/.test(form.password) },
    { label: "Contains uppercase letter", pass: /[A-Z]/.test(form.password) },
  ];

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.9rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-colors";

  return (
    <div className="min-h-screen bg-ivory-100 flex">
      {/* Left — branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-green-800 relative flex-col justify-between p-12">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative">
          <Link href="/" className="block mb-16">
            <span className="font-serif text-[1.5rem] text-white">
              Biz Legal
            </span>
          </Link>

          <h1 className="font-serif text-[2.5rem] leading-[1.1] text-white mb-5">
            Your LLC journey starts here
          </h1>
          <p className="font-sans text-[1rem] text-white/60 leading-[1.6] max-w-md mb-10">
            Create your account to track your LLC formation, access documents,
            and manage your business compliance.
          </p>

          {/* Benefits */}
          <div className="space-y-4">
            {[
              "Secure document storage & access",
              "Real-time filing status updates",
              "Compliance deadline reminders",
              "Direct communication with your specialist",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0" />
                <span className="font-sans text-[0.95rem] text-white/70">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center gap-8 pt-6 border-t border-white/10">
          {["SOC 2 Compliant", "256-bit Encryption", "CA Bar Approved"].map(
            (badge) => (
              <span
                key={badge}
                className="text-[0.75rem] font-sans font-medium text-white/30"
              >
                {badge}
              </span>
            )
          )}
        </div>
      </div>

      {/* Right — signup form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 text-center">
            <Link href="/" className="inline-block">
              <span className="font-serif text-[1.5rem] text-black">
                Biz Legal
              </span>
            </Link>
          </div>

          <h2 className="font-serif text-[2rem] text-black mb-2">
            Create your account
          </h2>
          <p className="font-sans text-[0.95rem] text-gray-600 mb-8">
            Set up your client portal to manage your LLC
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-sans font-bold text-[0.85rem] text-black mb-1.5">
                  First name
                </label>
                <input id="firstName" type="text" value={form.firstName} onChange={update("firstName")} placeholder="John" autoComplete="given-name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-sans font-bold text-[0.85rem] text-black mb-1.5">
                  Last name
                </label>
                <input id="lastName" type="text" value={form.lastName} onChange={update("lastName")} placeholder="Doe" autoComplete="family-name" className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-sans font-bold text-[0.85rem] text-black mb-1.5">
                Email address
              </label>
              <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" autoComplete="email" className={inputClass} />
            </div>

            <div>
              <label htmlFor="phone" className="block font-sans font-bold text-[0.85rem] text-black mb-1.5">
                Phone number
              </label>
              <input id="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="(555) 123-4567" autoComplete="tel" className={inputClass} />
            </div>

            <div>
              <label htmlFor="password" className="block font-sans font-bold text-[0.85rem] text-black mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={update("password")}
                  placeholder="Create a secure password"
                  autoComplete="new-password"
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black cursor-pointer transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {form.password && (
                <div className="mt-2 space-y-1">
                  {passwordChecks.map((check) => (
                    <div key={check.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${check.pass ? "bg-green-800" : "bg-gray-200"}`}>
                        {check.pass && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <span className={`font-sans text-[0.75rem] ${check.pass ? "text-green-800" : "text-gray-400"}`}>
                        {check.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block font-sans font-bold text-[0.85rem] text-black mb-1.5">
                Confirm password
              </label>
              <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={update("confirmPassword")} placeholder="Re-enter your password" autoComplete="new-password" className={inputClass} />
            </div>

            <div className="pt-1">
              <p className="font-sans text-[0.75rem] text-gray-400 leading-relaxed">
                By creating an account, you agree to our{" "}
                <a href="/terms" className="text-green-800 hover:opacity-60 cursor-pointer">Terms of Use</a>
                {" "}and{" "}
                <a href="/privacy" className="text-green-800 hover:opacity-60 cursor-pointer">Privacy Policy</a>.
              </p>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 font-sans font-bold text-[0.95rem] text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center font-sans text-[0.9rem] text-gray-600 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-green-800 hover:opacity-60 transition-opacity cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
