"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
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

  return (
    <PageShell
      cmsSlug="contact"
      label="Contact"
      title="Talk to a real California lawyer"
      description="Questions about LLC formation, registered agent service, or ongoing compliance? Our attorneys are here to help."
      heroImage="https://images.unsplash.com/photo-1766066014237-00645c74e9c6?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Smiling biz.legal client services representative wearing a headset"
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[64rem] mx-auto px-6">
          {submitted ? (
            <div className="bg-green-100 rounded-[1rem] p-10 text-center">
              <h2 className="font-serif text-[1.875rem] text-black mb-3">Message sent</h2>
              <p className="font-sans text-[1rem] text-gray-600">Thank you for reaching out. Our team will respond within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <Input label="Full name" value={form.name} onChange={update("name")} />
              <Input label="Email" type="email" value={form.email} onChange={update("email")} />
              <Input label="Phone (optional)" type="tel" value={form.phone} onChange={update("phone")} />
              <label className="block">
                <span className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">Subject</span>
                <select value={form.subject} onChange={update("subject")} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black">
                  <option value="">Select a topic...</option>
                  <option value="llc-formation">LLC Formation</option>
                  <option value="llc-management">LLC Management</option>
                  <option value="compliance">Compliance Question</option>
                  <option value="existing-client">Existing Client Support</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="block">
                <span className="block font-sans font-bold text-[0.9rem] text-black mb-1.5">Message</span>
                <textarea value={form.message} onChange={update("message")} rows={6} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black resize-none" />
              </label>
              <button type="submit" className="px-8 py-3.5 font-sans font-medium text-white bg-green-800 rounded-full">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
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
      <input type={type} value={value} onChange={onChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.95rem] text-black" />
    </label>
  );
}
