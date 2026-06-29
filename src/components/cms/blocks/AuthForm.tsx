"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

type AuthContent = {
  mode?: "login" | "signup";
  logoText?: string;
  panelHeading?: string;
  panelBody?: string;
  heading?: string;
  body?: string;
  submitText?: string;
  alternateText?: string;
  alternateLabel?: string;
  alternateHref?: string;
  demoHeading?: string;
  demoButton?: string;
  fields?: Record<string, string>;
  benefits?: string[];
  badges?: string[];
};
type AuthStyle = { backgroundColor?: string; panelBackgroundColor?: string; textColor?: string; bodyColor?: string; accentColor?: string };

function asContent(value: unknown): AuthContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as AuthContent : {};
}

function asStyle(value: unknown): AuthStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as AuthStyle : {};
}

export default function AuthFormBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);
  const fields = c.fields || {};
  const mode = c.mode || "login";
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    if (mode === "login") {
      if (!form.email || !form.password) return setError("Please enter your email and password.");
      if (login(form.email, form.password)) router.push("/dashboard");
      else setError("Invalid email or password. Try the demo credentials below.");
    }
  }

  function fillDemo() {
    setForm((prev) => ({ ...prev, email: "demo@bizlegal.com", password: "demo1234" }));
    setError("");
  }

  const accent = s.accentColor || "#166534";
  const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.9rem] text-black focus:outline-none";

  return (
    <section className="min-h-screen flex" style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}>
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12" style={{ backgroundColor: s.panelBackgroundColor || accent }}>
        <div>
          <Link href="/" className="block mb-16"><span className="font-serif text-[1.5rem] text-white">{c.logoText || "Biz Legal"}</span></Link>
          <h1 className="font-serif text-[2.5rem] leading-[1.1] text-white mb-5">{c.panelHeading}</h1>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.6] max-w-md mb-10">{c.panelBody}</p>
          <div className="space-y-4">
            {(c.benefits || []).map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-white/60" />
                <span className="font-sans text-[0.95rem] text-white/75">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8 pt-6 border-t border-white/10">
          {(c.badges || []).map((badge) => <span key={badge} className="text-[0.75rem] font-sans font-medium text-white/35">{badge}</span>)}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-10 text-center"><Link href="/" className="font-serif text-[1.5rem]" style={{ color: s.textColor || "#000000" }}>{c.logoText || "Biz Legal"}</Link></div>
          <h2 className="font-serif text-[2rem] mb-2" style={{ color: s.textColor || "#000000" }}>{c.heading}</h2>
          <p className="font-sans text-[0.95rem] mb-8" style={{ color: s.bodyColor || "#4b5563" }}>{c.body}</p>
          {error && <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-[0.7rem] mb-6"><AlertCircle className="w-4 h-4 text-red-600 mt-0.5" /><p className="font-sans text-[0.85rem] text-red-700">{error}</p></div>}
          <form onSubmit={submit} className="space-y-5">
            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-4">
                <Input label={fields.firstName || "First name"} value={form.firstName} onChange={(value) => setForm({ ...form, firstName: value })} className={inputClass} />
                <Input label={fields.lastName || "Last name"} value={form.lastName} onChange={(value) => setForm({ ...form, lastName: value })} className={inputClass} />
              </div>
            )}
            <Input label={fields.email || "Email address"} type="email" value={form.email} onChange={(value) => { setForm({ ...form, email: value }); setError(""); }} className={inputClass} />
            {mode === "signup" && <Input label={fields.phone || "Phone number"} type="tel" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} className={inputClass} />}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-sans font-bold text-[0.85rem] text-black">{fields.password || "Password"}</label>
                {mode === "login" && <a href="#" className="font-sans text-[0.8rem] font-medium" style={{ color: accent }}>{fields.forgotPassword || "Forgot password?"}</a>}
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={form.password} onChange={(event) => { setForm({ ...form, password: event.target.value }); setError(""); }} className={`${inputClass} pr-12`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
              </div>
            </div>
            {mode === "signup" && <Input label={fields.confirmPassword || "Confirm password"} type="password" value={form.confirmPassword} onChange={(value) => setForm({ ...form, confirmPassword: value })} className={inputClass} />}
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 font-sans font-bold text-[0.95rem] text-white rounded-full" style={{ backgroundColor: accent }}>{c.submitText || "Submit"}<ArrowRight className="w-4 h-4" /></button>
          </form>
          {mode === "login" && (
            <div className="mt-6 p-4 bg-ivory-200 rounded-[0.7rem]">
              <div className="flex items-center justify-between mb-2"><p className="font-sans text-[0.8rem] font-bold text-black">{c.demoHeading || "Demo Account"}</p><button onClick={fillDemo} className="font-sans text-[0.75rem] font-bold" style={{ color: accent }}>{c.demoButton || "Auto-fill"}</button></div>
              <p className="font-sans text-[0.8rem] text-gray-600">Email: demo@bizlegal.com</p>
              <p className="font-sans text-[0.8rem] text-gray-600">Password: demo1234</p>
            </div>
          )}
          <p className="text-center font-sans text-[0.9rem] text-gray-600 mt-8">{c.alternateText} <Link href={c.alternateHref || "/"} className="font-bold" style={{ color: accent }}>{c.alternateLabel}</Link></p>
        </div>
      </div>
    </section>
  );
}

function Input({ label, value, onChange, className, type = "text" }: { label: string; value: string; onChange: (value: string) => void; className: string; type?: string }) {
  return <label className="block"><span className="block font-sans font-bold text-[0.85rem] text-black mb-1.5">{label}</span><input type={type} value={value} onChange={(event) => onChange(event.target.value)} className={className} /></label>;
}
