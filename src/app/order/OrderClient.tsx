"use client";

import { useState } from "react";
import Link from "next/link";

const offerItems = [
  {
    title: "Attorney Strategy Consultation",
    value: "$250 Value",
    body: "Meet directly with a licensed California attorney to:",
    points: [
      "Confirm an LLC is the right entity for your business.",
      "Review your business plan.",
      "Discuss your proposed business name.",
      "Ask legal questions before filing anything.",
    ],
    note: "One conversation today can prevent expensive mistakes tomorrow.",
  },
  {
    title: "Professional California LLC Formation",
    value: "$500 Value",
    body:
      "Your LLC is professionally prepared by experienced California paralegals and reviewed by a licensed California attorney before filing.",
    points: ["No guessing.", "No DIY mistakes.", "No wondering whether you missed something important."],
  },
  {
    title: "Custom Attorney-Drafted Operating Agreement",
    value: "$2,000 Value",
    body:
      "This isn't a fill-in-the-blank template. Your Operating Agreement is custom drafted based on your attorney consultation and tailored to your ownership structure, management preferences, and long-term business goals.",
    points: [],
    note: "This is often the single most important legal document your business will ever have.",
  },
  {
    title: "EIN & Statement of Information Preparation",
    value: "$250 Value",
    body:
      "We'll help ensure your company is properly established from the beginning by preparing the necessary post-formation filings and assisting with obtaining your EIN.",
    points: [],
  },
  {
    title: "Complete Bank-Ready LLC Package",
    value: "$150 Value",
    body:
      "Receive an organized set of finalized documents ready to take directly to your bank, accountant, investors, or business partners.",
    points: ["Everything professionally assembled.", "Nothing left for you to figure out."],
  },
  {
    title: "One Year of Registered Agent Service",
    value: "$100 Value",
    body: "Included at no additional charge.",
    points: [],
  },
  {
    title: "First-Year Attorney Business Review",
    value: "$500 Value",
    body:
      "Businesses evolve. A year after formation, meet again with a licensed California attorney to review your business and identify any recommended legal updates before small issues become expensive problems.",
    points: [],
  },
  {
    title: "Quarterly Legal Check-Ins",
    value: "$150 Value",
    body:
      "We're not interested in disappearing after your LLC is filed. You'll receive periodic check-ins from our legal team to help keep your business legally healthy as it grows.",
    points: [],
  },
];

const valueRows = [
  ["Attorney Consultation", "$250"],
  ["LLC Formation", "$500"],
  ["Custom Operating Agreement", "$2,000"],
  ["EIN & Statement of Information", "$250"],
  ["Bank-Ready Document Package", "$150"],
  ["Registered Agent (1 Year)", "$100"],
  ["Annual Attorney Review", "$500"],
  ["Quarterly Check-Ins", "$150"],
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
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(23rem,31rem)] gap-[3rem] lg:gap-[5rem] items-start">
          <div className="min-w-0">
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
              Stop Paying Thousands at a Traditional Law Firm... Or Risk Your Business With a Generic Online Filing Service.
            </h2>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-8">
              <strong className="text-black">Build Your Business on the Right Foundation.</strong> When you form your LLC with Biz.Legal, you&apos;re not buying paperwork. You&apos;re hiring a California legal team to help you make the right decisions before your business ever opens its doors.
            </p>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-8">
              Every consultation, recommendation, document, and confirmation is handled by licensed California attorneys and experienced California paralegals - never an overseas call center, salesperson, or automated questionnaire.
            </p>

            <div className="bg-green-800 rounded-[1rem] p-6 md:p-8">
              <p className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.08em] text-white/70 mb-3">
                Offer stack
              </p>
              <p className="font-sans text-[1rem] font-bold text-white mb-4">
                Here&apos;s Everything Included
              </p>
              <div className="space-y-3 mb-8">
                {offerItems.map((item, index) => (
                  <details
                    key={item.title}
                    open={index === 0}
                    className="group rounded-[0.75rem] border border-white/15 bg-white/[0.06] text-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4">
                      <span className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[0.8rem] font-bold text-green-800">
                          ✓
                        </span>
                        <span>
                          <span className="block font-sans text-[0.98rem] font-bold leading-[1.25] text-white">
                            {item.title}
                          </span>
                          <span className="mt-1 block font-sans text-[0.82rem] font-bold text-white/75">
                            {item.value}
                          </span>
                        </span>
                      </span>
                      <span className="font-sans text-[1.4rem] leading-none text-white/75 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pl-[3.25rem]">
                      <p className="font-sans text-[0.92rem] leading-[1.6] text-white/80">{item.body}</p>
                      {item.points.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {item.points.map((point) => (
                            <li key={point} className="font-sans text-[0.88rem] leading-[1.45] text-white/75">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.note && (
                        <p className="mt-3 font-sans text-[0.9rem] font-medium leading-[1.55] text-white">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>

              <p className="font-sans text-[1rem] font-bold text-white mb-4">
                Total Professional Legal Value
              </p>
              <div className="divide-y divide-white/15">
                {valueRows.map(([service, value]) => (
                  <div key={service} className="flex items-start justify-between gap-4 py-3">
                    <span className="font-sans text-[0.9rem] text-white/75 leading-[1.4]">{service}</span>
                    <span className="font-sans text-[0.95rem] font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/25 flex items-end justify-between gap-4">
                <span className="font-serif text-[1.5rem] text-white leading-[1.1]">Total Value</span>
                <span className="font-serif text-[2rem] text-white leading-none">$3,900</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[1rem] p-8 md:p-10 lg:sticky lg:top-[7.5rem]">
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
                href="/questionnaire"
                className="inline-flex items-center px-6 py-2.5 text-sm font-sans font-medium text-green-800 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors"
              >
                More Information
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[4rem] grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
          <div>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-5">
              Why Business Owners Choose Biz.Legal
            </h2>
            <div className="font-sans text-[1rem] text-gray-600 leading-[1.7] space-y-4">
              <p>Most online filing companies sell documents.</p>
              <p>Traditional law firms often charge thousands of dollars in hourly fees.</p>
              <p>Biz.Legal gives you the best of both worlds:</p>
              <ul className="space-y-2">
                <li>• Licensed California attorneys guiding every important decision.</li>
                <li>• Experienced California paralegals preparing your documents.</li>
                <li>• A custom legal package tailored to your business.</li>
                <li>• Flat-fee pricing with no surprise invoices.</li>
                <li>• Ongoing support after your company is formed.</li>
              </ul>
            </div>
          </div>
          <div className="bg-ivory-200 rounded-[1rem] p-8">
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-5">
              Form Your Business With Confidence
            </h2>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.7]">
              Your LLC is more than paperwork - it&apos;s the legal foundation of everything you&apos;re building. Don&apos;t trust that foundation to an algorithm or a generic template. Build it with experienced California legal professionals who help you get it right the first time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
