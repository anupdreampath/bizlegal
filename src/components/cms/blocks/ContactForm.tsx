"use client";

import { useState } from "react";
import { CmsMedia } from "../CmsMedia";

type ContactInfo = { title?: string; value?: string; note?: string };
type SubjectOption = { value?: string; label?: string };
type ContactContent = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  image?: { url?: string; alt?: string; type?: "image" | "video" };
  infoEyebrow?: string;
  formEyebrow?: string;
  successHeading?: string;
  successBody?: string;
  contacts?: ContactInfo[];
  fields?: Record<string, string>;
  subjectOptions?: SubjectOption[];
};
type ContactStyle = {
  heroBackgroundColor?: string;
  pageBackgroundColor?: string;
  textColor?: string;
  heroTextColor?: string;
  bodyColor?: string;
  accentColor?: string;
};

function asContent(value: unknown): ContactContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as ContactContent : {};
}

function asStyle(value: unknown): ContactStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as ContactStyle : {};
}

export default function ContactFormBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);
  const fields = c.fields || {};
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "contact",
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.subject,
        message: form.message,
      }),
    });
    setSubmitted(true);
  }

  const accent = s.accentColor || "#166534";
  const text = s.textColor || "#000000";
  const body = s.bodyColor || "#4b5563";

  return (
    <>
      <section className="pt-24 pb-10 md:pt-[9rem] md:pb-[5rem]" style={{ backgroundColor: s.heroBackgroundColor || "#166534" }}>
        <div className="max-w-[90rem] mx-auto px-5 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-5 md:gap-12 lg:gap-10 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="hidden md:block border-t-2 pt-6 mb-6" style={{ borderColor: s.heroTextColor || "#ffffff" }}>
                <p className="text-[1rem] font-sans font-bold uppercase" style={{ color: s.heroTextColor || "#ffffff" }}>
                  {c.eyebrow || "Contact"}
                </p>
              </div>
              <h1 className="hidden md:block font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] max-w-[50rem]" style={{ color: s.heroTextColor || "#ffffff" }}>
                {c.heading}
              </h1>
              {c.body && (
                <p className="hidden sm:block font-sans text-[1rem] md:text-[1.125rem] leading-[1.6] mt-5 max-w-[36rem] sm:mx-auto lg:mx-0" style={{ color: `${s.heroTextColor || "#ffffff"}b3` }}>
                  {c.body}
                </p>
              )}
            </div>
            {c.image?.url && (
              <div className="md:hidden order-1 relative justify-self-center w-full max-w-[21.5rem] sm:max-w-[22rem]">
                <div className="relative rounded-[1.25rem] lg:rounded-[1rem] overflow-hidden shadow-[0_1.25rem_3rem_rgba(0,0,0,0.14)] lg:shadow-none">
                  <div className="md:hidden absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm">
                    <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wide text-black">
                      {c.eyebrow || "Contact"}
                    </span>
                  </div>
                  <div className="md:hidden absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-4 pb-4 pt-16">
                    <h1 className="font-serif text-[2.25rem] leading-[0.98] text-white drop-shadow-sm">
                      {c.heading}
                    </h1>
                  </div>
                  <CmsMedia image={{ url: c.image.url, alt: c.image.alt, type: c.image.type }} className="block w-full h-auto object-contain" width={1600} height={1200} priority />
                </div>
              </div>
            )}
            {c.image?.url && (
              <div className="hidden md:block relative aspect-[4/3] rounded-[1rem] overflow-hidden">
                <CmsMedia image={{ url: c.image.url, alt: c.image.alt, type: c.image.type }} fill className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-[4rem] md:py-[6rem]" style={{ backgroundColor: s.pageBackgroundColor || "#f8f5ed" }}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-[3rem] lg:gap-[5rem]">
            <div>
              <div className="border-t-2 border-black pt-6 mb-8">
                <p className="text-[1rem] font-sans font-bold uppercase" style={{ color: text }}>{c.infoEyebrow || "Contact Information"}</p>
              </div>
              <div className="space-y-8">
                {(c.contacts || []).map((item) => (
                  <div key={`${item.title}-${item.value}`}>
                    <h3 className="font-sans font-bold text-[1rem] mb-1" style={{ color: text }}>{item.title}</h3>
                    <p className="font-sans text-[1rem]" style={{ color: body }}>{item.value}</p>
                    {item.note && <p className="font-sans text-[0.85rem] mt-1" style={{ color: body }}>{item.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="border-t-2 border-black pt-6 mb-8">
                <p className="text-[1rem] font-sans font-bold uppercase" style={{ color: text }}>{c.formEyebrow || "Send a Message"}</p>
              </div>
              {submitted ? (
                <div className="rounded-[1rem] p-10 text-center" style={{ backgroundColor: `${accent}1a` }}>
                  <h3 className="font-serif text-[1.875rem] mb-3" style={{ color: text }}>{c.successHeading || "Message sent"}</h3>
                  <p className="font-sans text-[1rem]" style={{ color: body }}>{c.successBody}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input label={fields.name || "Full name"} value={form.name} onChange={update("name")} />
                    <Input label={fields.email || "Email"} type="email" value={form.email} onChange={update("email")} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input label={fields.phone || "Phone"} type="tel" value={form.phone} onChange={update("phone")} />
                    <label className="block">
                      <span className="block font-sans font-bold text-[0.9rem] mb-1.5" style={{ color: text }}>{fields.subject || "Subject"}</span>
                      <select value={form.subject} onChange={update("subject")} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black focus:outline-none">
                        <option value="">Select a topic...</option>
                        {(c.subjectOptions || []).map((option) => (
                          <option key={option.value || option.label} value={option.value || option.label}>{option.label || option.value}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className="block font-sans font-bold text-[0.9rem] mb-1.5" style={{ color: text }}>{fields.message || "Message"}</span>
                    <textarea value={form.message} onChange={update("message")} rows={6} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black focus:outline-none resize-none" />
                  </label>
                  <button type="submit" className="w-full sm:w-auto px-8 py-3.5 font-sans font-medium text-white rounded-full transition-colors" style={{ backgroundColor: accent }}>
                    {fields.submit || "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">{label}</span>
      <input type={type} value={value} onChange={onChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black focus:outline-none" />
    </label>
  );
}
