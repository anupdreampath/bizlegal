"use client";

import PageShell from "@/components/PageShell";
import Link from "next/link";
import { Accordion, Takeaway, ImagePlaceholder } from "@/components/Interactive";

export default function LLCFormationPage() {
  const offerItems = [
    {
      title: "Attorney Strategy Consultation",
      value: "$250 Value",
      points: [
        "Confirm an LLC is the right entity for your business.",
        "Review your business plan and proposed business name.",
        "Ask legal questions before anything is filed.",
      ],
      text: "One conversation today can prevent expensive mistakes tomorrow.",
    },
    {
      title: "Professional California LLC Formation",
      value: "$500 Value",
      points: [
        "Prepared by experienced California paralegals.",
        "Reviewed by a licensed California attorney before filing.",
        "Handled professionally so you are not guessing.",
      ],
      text: "No DIY mistakes. No wondering whether you missed something important.",
    },
    {
      title: "Custom Attorney-Drafted Operating Agreement",
      value: "$2,000 Value",
      points: [
        "Drafted around your attorney consultation.",
        "Tailored to your ownership structure and management preferences.",
        "Built around your long-term business goals.",
      ],
      text: "This is often the single most important legal document your business will ever have.",
    },
    {
      title: "EIN & Statement of Information Preparation",
      value: "$250 Value",
      points: [
        "Post-formation filings prepared for a clean launch.",
        "Assistance obtaining your EIN.",
        "Details organized so your company is established correctly from the beginning.",
      ],
      text: "We help keep the early administrative work from becoming your first compliance problem.",
    },
    {
      title: "Complete Bank-Ready LLC Package",
      value: "$150 Value",
      points: [
        "Finalized documents organized in one package.",
        "Ready for your bank, accountant, investors, or business partners.",
        "Professionally assembled so nothing is left for you to figure out.",
      ],
      text: "You receive a clean legal package you can actually use.",
    },
    {
      title: "One Year of Registered Agent Service",
      value: "$100 Value",
      points: [
        "Included at no additional charge.",
        "California registered agent support for your first year.",
        "Legal and state notices routed through a professional team.",
      ],
      text: "Your LLC starts with the required registered agent coverage already in place.",
    },
    {
      title: "First-Year Attorney Business Review",
      value: "$500 Value",
      points: [
        "Meet again with a licensed California attorney after formation.",
        "Review how your business has evolved.",
        "Identify recommended legal updates before small issues become expensive problems.",
      ],
      text: "Your legal setup should keep up with the way your business actually grows.",
    },
    {
      title: "Quarterly Legal Check-Ins",
      value: "$150 Value",
      points: [
        "Periodic check-ins from the legal team.",
        "Practical reminders as your business grows.",
        "Ongoing support instead of disappearing after filing.",
      ],
      text: "We stay connected so your business can stay legally healthy.",
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

  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2238258267.jpg"
      heroAlt="Small business owner reviewing LLC formation documents with biz.legal"
      label="LLC Formation"
      title="Build your business on the right foundation"
      description="Stop paying thousands at a traditional law firm, and do not risk your business with a generic online filing service. Form your LLC with a California legal team that helps you make the right decisions before your business opens its doors."
    >
      {/* Section 1 — Why It Matters */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Your LLC is the foundation of everything
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Forming an LLC isn&apos;t just paperwork — it&apos;s the legal boundary
                  between your personal assets and your business liabilities. A
                  properly formed California LLC protects your home, savings,
                  and personal property from business debts, lawsuits, and
                  creditor claims.
                </p>
                <p>
                  But the details matter. An improperly filed Articles of
                  Organization can delay your formation by weeks. A generic
                  Operating Agreement downloaded from the internet may not hold
                  up in court. Missing your Initial Statement of Information
                  deadline can trigger penalties before your business even opens.
                </p>
              </div>

              <Takeaway>
                A properly formed LLC is the legal wall between your personal assets and your business liabilities. Getting it right from day one is not optional — it&apos;s foundational. Use a professional, don&apos;t do it yourself.
              </Takeaway>

              <Accordion title="What happens if my LLC is formed incorrectly?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Common formation errors include choosing a name too similar to an existing entity (causing rejection and delays), using a PO box for your registered agent (not allowed — must be a physical CA address), selecting the wrong management structure, or filing without an Operating Agreement. These errors can delay your launch, expose you to penalties, or weaken your liability protection if challenged in court.
                </p>
              </Accordion>
              <Accordion title="Can I form my LLC myself?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  You could probably pull out your own tooth if you had a cavity, but most dentists wouldn&apos;t recommend it. The same logic applies to legal work. It&apos;s a sophisticated profession and if you aren&apos;t trained in it, why take the risk? Errors in any of your foundational or governing documents create legal vulnerabilities and potentially disastrous tax or liability consequences. Our service guarantees attorney-drafted documents and attorney-guided decisions — so you know it&apos;s done right.
                </p>
              </Accordion>
              <Accordion title="How long does formation take?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Whether an LLC is formed by a person, a DIY service, or a law firm, the state filing process is the same. But old fashioned law firms can get bogged down in work queues, emergencies, and other excuses. We provide one step better: The service of the law firm, but with the efficiency in delivery of the online platform. The faster you form your LLC, the sooner you can begin to benefit from it.
                </p>
              </Accordion>
            </div>

            <div className="space-y-6">
              <ImagePlaceholder label="California business owner planning a formation timeline" aspect="3/2" src="/amyersnapa-attachments/iStock-2243799864.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What's Included */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-[1fr_24rem] gap-[3rem] lg:gap-[5rem] items-start">
            <div>
              <p className="font-sans font-bold text-[0.8rem] uppercase tracking-wider text-green-800 mb-4">
                Here&apos;s everything included
              </p>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
                When you form your LLC with Biz.Legal, you&apos;re not buying paperwork.
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-[2.5rem] max-w-[46rem]">
                You&apos;re hiring a California legal team to help you make the right decisions before your business ever opens its doors. Every consultation, recommendation, document, and confirmation is handled by licensed California attorneys and experienced California paralegals, never an overseas call center, salesperson, or automated questionnaire.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {offerItems.map((item) => (
                  <div key={item.title} className="bg-white rounded-[0.5rem] p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-serif text-[1.25rem] leading-[1.2] text-black">{item.title}</h3>
                      <span className="shrink-0 font-sans text-[0.75rem] font-bold text-green-800 bg-green-100 rounded-full px-3 py-1">
                        {item.value}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2 font-sans text-[0.88rem] text-gray-600 leading-[1.5]">
                          <span className="text-green-800 font-bold">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-sans text-[0.9rem] text-black leading-[1.6]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-green-800 rounded-[0.5rem] p-6 lg:sticky lg:top-24">
              <p className="font-sans font-bold text-[0.8rem] uppercase tracking-wider text-white/60 mb-3">
                Total professional legal value
              </p>
              <div className="divide-y divide-white/15">
                {valueRows.map(([service, value]) => (
                  <div key={service} className="flex items-start justify-between gap-4 py-3">
                    <span className="font-sans text-[0.85rem] text-white/75 leading-[1.4]">{service}</span>
                    <span className="font-sans text-[0.9rem] font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/25 flex items-end justify-between gap-4">
                <span className="font-serif text-[1.5rem] text-white leading-[1.1]">Total Value</span>
                <span className="font-serif text-[2rem] text-white leading-none">$3,900</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 3 — How the Formation Process Works */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Why business owners choose Biz.Legal
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-6">
                Most online filing companies sell documents. Traditional law firms often charge thousands of dollars in hourly fees. Biz.Legal gives you the best of both worlds: attorney guidance, professional document preparation, flat-fee pricing, and ongoing support after your company is formed.
              </p>

              <div className="space-y-5">
                {[
                  { step: "01", title: "Licensed California attorneys guide every important decision." },
                  { step: "02", title: "Experienced California paralegals prepare your documents." },
                  { step: "03", title: "Your package is tailored to your business, not pulled from a generic template." },
                  { step: "04", title: "Flat-fee pricing keeps you away from surprise invoices." },
                  { step: "05", title: "Ongoing support continues after your company is formed." },
                ].map((s) => (
                  <div key={s.step} className="bg-ivory-200 rounded-[1rem] p-5 flex gap-4">
                    <span className="font-serif text-[1.5rem] text-green-800 flex-shrink-0 w-8">{s.step}</span>
                    <div>
                      <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">{s.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <ImagePlaceholder label="Attorney consultation for California LLC formation" aspect="3/2" src="/amyersnapa-attachments/iStock-2218831325.jpg" />

              <div className="bg-green-800 rounded-[1rem] p-8">
                <h3 className="font-serif text-[1.5rem] text-white mb-3">Form your business with confidence</h3>
                <p className="font-sans text-[0.95rem] text-white/70 leading-[1.6] mb-5">
                  Your LLC is more than paperwork. It is the legal foundation of everything you are building.
                </p>
                <Link href="/order" className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Who should be forming an LLC */}
      <section className="bg-green-800 py-[4rem] md:py-[5.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-6">
                Who should be forming an LLC
              </h2>
              <p className="font-sans text-[1rem] text-white/60 leading-[1.6] mb-8">
                Whether you&apos;re launching your first business or structuring your fifth investment, an LLC provides the foundation you need.
              </p>
              <p className="font-sans text-[1rem] text-white/60 leading-[1.6] mb-8">
                If you fit within any of these categories, start here.
              </p>
              <Link href="/order" className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                Start Here
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Starting a new business", text: "Launching a product, service, or consultancy and need liability protection from day one." },
                { title: "Freelancing or consulting", text: "Earning significant income independently and want tax flexibility plus professional credibility." },
                { title: "Real estate investing", text: "Buying rentals or flipping properties — each property in its own LLC for liability isolation." },
                { title: "Converting from sole prop", text: "Growing revenue makes personal liability protection essential. We handle the transition." },
                { title: "Partnering with others", text: "Need clear ownership, management, and profit-sharing rules in a formal structure." },
                { title: "Protecting personal assets", text: "Want a legal boundary between business activities and your home, savings, and family property." },
              ].map((item) => (
                <div key={item.title} className="bg-green-500 rounded-[1rem] p-5">
                  <h3 className="font-sans font-bold text-[0.9rem] text-white mb-1">{item.title}</h3>
                  <p className="font-sans text-[0.8rem] text-white/65 leading-[1.5]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Comparison */}
      <section className="bg-purple-900 py-[4rem] md:py-[5.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4 max-w-[42.5rem]">
            Why most California business owners choose an LLC
          </h2>
          <p className="font-sans text-[1rem] text-white/60 leading-[1.6] mb-[2.5rem] max-w-[36rem]">
            How an LLC compares to other structures on the factors that matter most.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "LLC", verdict: "Most popular", color: "bg-green-100 text-green-800", itemColor: "text-gray-600", dotColor: "text-green-800", items: ["Liability protection", "Pass-through taxation", "Flexible tax elections", "Simple management", "Easy to add owners", "Low compliance burden"] },
              { name: "Sole Prop", verdict: "Highest risk", color: "bg-red-100 text-red-800", itemColor: "text-red-700", dotColor: "text-red-800", items: ["Highest risk", "No liability protection", "Simplest tax filing", "$0 formation cost", "No franchise tax", "No compliance", "Personal assets at risk"] },
              { name: "S-Corp Election", verdict: "More burden, more limitations", color: "bg-red-100 text-red-800", itemColor: "text-red-700", dotColor: "text-red-800", items: ["Same LLC protection", "Payroll tax savings", "Must run payroll", "Reasonable salary required", "CA 1.5% S-Corp tax", "Higher compliance cost"] },
              { name: "C-Corporation", verdict: "Typically for VC, rare to use", color: "bg-red-100 text-red-800", itemColor: "text-red-700", dotColor: "text-red-800", items: ["Double taxation", "Board of directors required", "Shareholder meetings", "Best for raising capital", "Stock options possible", "Highest compliance"] },
            ].map((entity) => (
              <div key={entity.name} className={`${entity.color} rounded-[1rem] p-6`}>
                <h3 className="font-serif text-[1.25rem] mb-1">{entity.name}</h3>
                <p className={`font-sans text-[0.7rem] font-bold uppercase tracking-wider mb-4 ${entity.name === "LLC" ? "text-green-800/60" : "text-red-800/60"}`}>{entity.verdict}</p>
                <div className="space-y-2">
                  {entity.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className={`mt-0.5 text-[0.75rem] ${entity.dotColor}`}>&#x2022;</span>
                      <span className={`font-sans text-[0.8rem] leading-[1.4] ${entity.itemColor}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 py-[4rem] md:py-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-center">
            <div>
              <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-white mb-5">
                Build it right the first time
              </h2>
              <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
                Do not trust your foundation to an algorithm or a generic template. Build it with experienced California legal professionals who help you get it right from the first filing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/order" className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                  Start Here
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer">
                  Talk to a Lawyer
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
              <img
                src="/amyersnapa-attachments/iStock-2241575917.jpg"
                alt="Business owner celebrating LLC formation completion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
