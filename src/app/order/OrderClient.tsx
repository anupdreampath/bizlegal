"use client";

import { useState } from "react";
import Link from "next/link";

const packageItems = [
  "Legal Advice from the Start ($300 value)",
  "State Filings ($500 value)",
  "Customized Operating Agreement ($2000 value)",
  "Federal Filings ($250 value)",
  "Organizational Package (LLC Handbook, e-Binder, templates, Compliance Calendar)",
  "1 Year of Law Firm Support (Registered Agent + Quarterly Lawyer Calls)",
];

export default function OrderClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [loading, setLoading] = useState(false);

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    const res = await fetch("/api/order/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    setLoading(false);
  }

  return (
    <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
          <div>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
              Complete LLC Formation Package
            </h2>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-8">
              Everything you need to form your California LLC the right way - done by real lawyers, not a DIY website. No hidden fees. No upsells. Just professional legal service with the efficiency of a tech platform.
            </p>

            <div className="space-y-4 mb-8">
              {packageItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-green-800 font-bold text-[1rem]">&#x2713;</span>
                  <span className="font-sans text-[1rem] text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-800 rounded-[1rem] p-8">
              <p className="font-sans text-[0.8rem] font-bold text-white/60 uppercase tracking-wider mb-4">
                Can&apos;t-Refuse Offer
              </p>
              <p className="font-serif text-[3rem] md:text-[4rem] text-white leading-[1]">
                $750
              </p>
              <p className="font-sans text-[1rem] text-white/70 mt-2 mb-6">
                Complete LLC Formation Package
              </p>
              <div className="border-t border-white/20 pt-6 space-y-3">
                <p className="font-sans text-[0.9rem] text-white/80">
                  <strong className="text-white">Attorney consultation included</strong> - Talk to a real California lawyer before you commit.
                </p>
                <p className="font-sans text-[0.9rem] text-white/80">
                  <strong className="text-white">Done for you</strong> - We file everything, draft every document, and deliver to your portal.
                </p>
                <p className="font-sans text-[0.9rem] text-white/80">
                  <strong className="text-white">1 year of support</strong> - Registered agent and quarterly lawyer check-ins included.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[1rem] p-8 md:p-10">
            <h3 className="font-serif text-[1.5rem] text-black mb-2">
              Start Your Order
            </h3>
            <p className="font-sans text-[0.95rem] text-gray-600 mb-6">
              Enter your details and complete payment securely through Stripe. We&apos;ll contact you within 1 business day to begin your formation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="block font-sans font-bold text-sm text-black mb-1.5">Full name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20"
                />
              </label>
              <label className="block">
                <span className="block font-sans font-bold text-sm text-black mb-1.5">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20"
                />
              </label>
              <label className="block">
                <span className="block font-sans font-bold text-sm text-black mb-1.5">Phone (optional)</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone")(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20"
                />
              </label>
              <label className="block">
                <span className="block font-sans font-bold text-sm text-black mb-1.5">Notes (optional)</span>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes")(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black resize-none focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 font-sans font-medium text-white bg-green-800 rounded-full hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {loading ? "Opening secure checkout..." : "Pay $750 and Start Formation"}
              </button>
              <p className="font-sans text-xs text-gray-500 text-center">
                Secure payment processed by Stripe. Your information is encrypted and never shared.
              </p>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="font-sans text-sm text-gray-600 mb-3">
                Not ready to order? Talk to a lawyer first.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-sm font-sans font-medium text-green-800 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors"
              >
                More Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
