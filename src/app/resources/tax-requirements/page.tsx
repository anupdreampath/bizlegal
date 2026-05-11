"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import Link from "next/link";
import { ChevronDown, Play } from "lucide-react";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-sans font-bold text-[1rem] text-black pr-6 group-hover:opacity-60 transition-opacity">{title}</span>
        <ChevronDown className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}

function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-100 border-l-4 border-green-800 rounded-r-[1rem] p-5 my-6">
      <p className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider mb-1">Key Takeaway</p>
      <p className="font-sans text-[0.95rem] text-gray-800 leading-[1.6]">{children}</p>
    </div>
  );
}

function ImagePlaceholder({ label, aspect = "4/3", src }: { label: string; aspect?: string; src?: string }) {
  if (src) {
    return (
      <div className="rounded-[1rem] overflow-hidden" style={{ aspectRatio: aspect }}>
        <img src={src} alt={label} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-[1rem] flex flex-col items-center justify-center gap-3 p-6 relative overflow-hidden" style={{ aspectRatio: aspect }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <p className="relative text-[0.85rem] font-sans text-white/50 text-center px-4">{label}</p>
    </div>
  );
}

function VideoPlaceholder({ label, duration, variant = "dark" }: { label: string; duration?: string; variant?: string }) {
  const gradients: Record<string, string> = { green: "from-green-800 to-green-900", dark: "from-gray-800 to-gray-900", blue: "from-sky-800 to-sky-900", red: "from-red-900 to-red-950", purple: "from-purple-800 to-purple-900", teal: "from-teal-800 to-teal-900" };
  const g = gradients[variant] || gradients.dark;
  return (
    <div className={`aspect-video bg-gradient-to-br ${g} rounded-[1rem] flex flex-col items-center justify-center gap-3 cursor-pointer group relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors"><Play className="w-6 h-6 text-white/80" /></div>
      <p className="relative text-[0.95rem] font-sans font-medium text-white/70 text-center px-8 leading-snug max-w-[20rem]">{label}</p>
      {duration && <span className="relative text-[0.75rem] font-sans text-white/35">{duration}</span>}
    </div>
  );
}

export default function TaxRequirementsPage() {
  return (
    <PageShell
      cmsSlug="resources-tax-requirements"
heroImage="https://images.unsplash.com/photo-1772588627483-d036793569e8?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Tax forms and calculator on a desk — California LLC tax requirements"
      label="Resources"
      title="California LLC tax requirements — the complete breakdown"
      description="Every tax, fee, filing, and deadline your California LLC faces at the federal and state level. Specific amounts, forms, due dates, and penalties."
    >
      {/* Chapter navigation bar */}
      <section className="bg-ivory-200 py-[2.5rem] overflow-x-auto">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="flex gap-3 min-w-max">
            {[
              "Franchise Tax",
              "LLC Fee",
              "Federal Tax",
              "S-Corp Election",
              "Self-Employment",
              "Form 568",
              "Sales Tax",
              "Employment Taxes",
              "Tax Calendar",
              "Strategies",
            ].map((ch) => (
              <span
                key={ch}
                className="px-4 py-2 bg-white rounded-full font-sans text-[0.85rem] font-medium text-black whitespace-nowrap"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 1 — Franchise Tax ($800) */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 01
                </p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Annual franchise tax ($800 minimum)
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Every California LLC must pay an annual minimum franchise tax of{" "}
                  <strong>$800</strong> to the Franchise Tax Board (FTB),
                  regardless of whether the LLC earned any income during the year.
                  This tax applies to active LLCs, inactive LLCs, and even LLCs
                  that operated at a loss. It is codified under Revenue and
                  Taxation Code Section 17941.
                </p>
                <p>
                  California previously offered a first-year franchise tax
                  exemption for new LLCs formed between 2021 and 2023. This
                  exemption has expired. New LLCs formed in 2024 and later are
                  subject to the full $800 franchise tax from their first year.
                  Always verify the current rules, as legislation can change.
                </p>
              </div>

              <Takeaway>
                The $800 franchise tax is owed every year your LLC exists in
                California — even if you earn nothing. In your first year, you may
                owe two $800 payments: one for the initial period and one prepaying
                the next tax year.
              </Takeaway>

              <Accordion title="When is it due?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  For newly formed LLCs, the first franchise tax payment is due by
                  the 15th day of the 4th month after your LLC&apos;s formation
                  date. For example, if your LLC is formed on January 15, your
                  first $800 payment is due by May 15. For subsequent years, the
                  franchise tax is due every April 15 — this is a prepayment for
                  the current tax year, not a payment for the prior year. This
                  means in your first year you may owe two $800 payments: one for
                  the initial period and one for the following tax year.
                </p>
              </Accordion>
              <Accordion title="How to pay">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Payment is made using FTB Form 3522 (LLC Tax Voucher). You can
                  pay online through the FTB&apos;s Web Pay system, by mail with a
                  check, or through electronic funds transfer. We recommend
                  setting up an annual reminder or using our management service to
                  ensure this payment is never missed.
                </p>
              </Accordion>
              <Accordion title="What if I don't pay?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  The FTB imposes a penalty of 5% of the unpaid tax plus an
                  additional 0.5% for each month (or part of a month) the tax
                  remains unpaid, up to a maximum of 25%. Interest also accrues
                  from the original due date. If the franchise tax remains unpaid
                  for an extended period, the FTB will suspend your LLC — meaning
                  it can no longer legally transact business, file lawsuits, or
                  defend itself in court in California.
                </p>
              </Accordion>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "$800", label: "Annual franchise tax — no exceptions" },
                  { number: "Apr 15", label: "Due date each year (prepayment)" },
                  { number: "5%", label: "Late-payment penalty base rate" },
                  { number: "25%", label: "Maximum penalty cap on unpaid tax" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-[1rem] p-5 flex flex-col justify-between"
                  >
                    <p className="font-serif text-[1.75rem] md:text-[2.25rem] text-black leading-[1.1] mb-2">
                      {stat.number}
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400 leading-[1.4]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <VideoPlaceholder label="Video: Understanding the $800 franchise tax (3 min)" duration="3 min" variant="green" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 2 — LLC Fee */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 02
                </p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                LLC fee (gross income over $250K)
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  In addition to the $800 franchise tax, California imposes an
                  annual LLC fee on LLCs with total income from California sources
                  exceeding $250,000. This fee is established under Revenue and
                  Taxation Code Section 17942. The estimated payment is due{" "}
                  <strong>June 15</strong> using FTB Form 3536, with the final fee
                  reconciled when you file your annual Form 568.
                </p>
                <p>
                  If you underestimate the fee by more than 10%, the FTB can
                  impose a penalty on the underpaid amount. The penalty structure
                  mirrors the franchise tax: 5% of the unpaid amount plus 0.5% per
                  month.
                </p>
              </div>

              <h3 className="font-sans font-bold text-[1rem] text-black mt-8 mb-4">
                LLC fee schedule (California-source gross income)
              </h3>
              <div className="space-y-3">
                {[
                  { range: "$0 -- $249,999", fee: "$0", color: "bg-white" },
                  { range: "$250K -- $499,999", fee: "$900", color: "bg-white" },
                  { range: "$500K -- $999,999", fee: "$2,500", color: "bg-white" },
                  { range: "$1M -- $4,999,999", fee: "$6,000", color: "bg-white" },
                  { range: "$5M and above", fee: "$11,790", color: "bg-white" },
                ].map((tier) => (
                  <div
                    key={tier.range}
                    className={`${tier.color} rounded-[1rem] px-5 py-4 flex items-center justify-between`}
                  >
                    <span className="font-sans text-[0.9rem] text-gray-600">
                      {tier.range}
                    </span>
                    <span className="font-serif text-[1.25rem] font-bold text-black">
                      {tier.fee}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[0.8rem] text-gray-400 mt-3">
                Each fee is <strong>in addition to</strong> the $800 annual
                franchise tax. Example: $600K gross income = $800 + $2,500 =
                $3,300 total.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <ImagePlaceholder label="Infographic: LLC fee tiers visualized" aspect="4/3" src="https://images.unsplash.com/photo-1772588627342-5ec373e236d8?auto=format&fit=crop&w=1400&q=80" />

              <Takeaway>
                The LLC fee is based on <strong>gross income</strong> (total
                revenue), not net income (profit). Even an unprofitable LLC with
                high revenue can owe a significant fee. This distinction catches
                many business owners off guard.
              </Takeaway>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 3 — Federal Tax Treatment */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-green-800 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-white/30 pt-6 mb-6">
            <p className="text-[0.8rem] font-sans font-bold text-white/50 uppercase tracking-wider">
              Chapter 03
            </p>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4">
            Federal income tax — pass-through taxation
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.7] max-w-[42rem] mb-10">
            By default, LLCs are &ldquo;pass-through&rdquo; entities for federal
            tax purposes. The LLC itself does not pay federal income tax.
            Instead, the LLC&apos;s income, deductions, and credits pass through
            to its members, who report them on their personal tax returns.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — Disregarded entity */}
            <div className="bg-green-500 rounded-[1rem] p-6 flex flex-col">
              <p className="font-sans text-[0.75rem] font-bold text-white/60 uppercase tracking-wider mb-3">
                Single-Member LLC
              </p>
              <h3 className="font-serif text-[1.5rem] text-white leading-[1.2] mb-3">
                Disregarded entity
              </h3>
              <p className="font-sans text-[0.9rem] text-white/80 leading-[1.6] mb-6 flex-1">
                All income and expenses reported on Schedule C of the
                owner&apos;s personal Form 1040. No separate federal return
                required. The member pays self-employment tax on all net
                business income.
              </p>
              <div className="border-t border-white/20 pt-4 space-y-2">
                <p className="font-sans text-[0.8rem] text-white/60">
                  <span className="text-white font-bold">Form:</span> Schedule C
                  (Form 1040)
                </p>
                <p className="font-sans text-[0.8rem] text-white/60">
                  <span className="text-white font-bold">Due:</span> April 15
                  (ext. October 15)
                </p>
              </div>
            </div>

            {/* Card 2 — Partnership */}
            <div className="bg-green-500 rounded-[1rem] p-6 flex flex-col">
              <p className="font-sans text-[0.75rem] font-bold text-white/60 uppercase tracking-wider mb-3">
                Multi-Member LLC
              </p>
              <h3 className="font-serif text-[1.5rem] text-white leading-[1.2] mb-3">
                Partnership
              </h3>
              <p className="font-sans text-[0.9rem] text-white/80 leading-[1.6] mb-6 flex-1">
                LLC files an informational Form 1065 and issues Schedule K-1 to
                each member showing their share of income, deductions, and
                credits. No entity-level federal tax. Late-filing penalty: $220
                per member per month, up to 12 months.
              </p>
              <div className="border-t border-white/20 pt-4 space-y-2">
                <p className="font-sans text-[0.8rem] text-white/60">
                  <span className="text-white font-bold">Form:</span> 1065 +
                  Schedule K-1
                </p>
                <p className="font-sans text-[0.8rem] text-white/60">
                  <span className="text-white font-bold">Due:</span> March 15
                  (ext. September 15)
                </p>
              </div>
            </div>

            {/* Card 3 — Elective */}
            <div className="bg-green-500 rounded-[1rem] p-6 flex flex-col">
              <p className="font-sans text-[0.75rem] font-bold text-white/60 uppercase tracking-wider mb-3">
                Elective Treatment
              </p>
              <h3 className="font-serif text-[1.5rem] text-white leading-[1.2] mb-3">
                S-Corp or C-Corp
              </h3>
              <p className="font-sans text-[0.9rem] text-white/80 leading-[1.6] mb-6 flex-1">
                LLCs can elect S-Corp taxation (Form 2553) to reduce
                self-employment tax, or C-Corp taxation (Form 8832) for a flat
                21% corporate rate. The legal structure stays the same — only the
                tax treatment changes.
              </p>
              <div className="border-t border-white/20 pt-4 space-y-2">
                <p className="font-sans text-[0.8rem] text-white/60">
                  <span className="text-white font-bold">S-Corp:</span> Form
                  1120S, due March 15
                </p>
                <p className="font-sans text-[0.8rem] text-white/60">
                  <span className="text-white font-bold">C-Corp:</span> Form
                  1120, due April 15
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 4 — S-Corp Election Deep Dive */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 04
                </p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                S-Corp election deep dive
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  LLCs can elect to be taxed as an S-Corporation by filing IRS
                  Form 2553. This doesn&apos;t change your legal structure — your
                  LLC remains an LLC under California law — but it changes how the
                  IRS treats your income for tax purposes. The primary benefit is
                  the potential reduction in self-employment taxes.
                </p>
                <p>
                  With S-Corp taxation, LLC members who actively work in the
                  business must pay themselves a &ldquo;reasonable salary.&rdquo;
                  This salary is subject to payroll taxes (Social Security at
                  12.4% and Medicare at 2.9%). However, any remaining profit
                  distributed as &ldquo;distributions&rdquo; is <em>not</em>{" "}
                  subject to self-employment tax — potentially saving thousands
                  annually.
                </p>
                <p>
                  <strong>Filing deadline:</strong> Form 2553 must be filed by
                  March 15 of the tax year for which the election is to be
                  effective. For new LLCs, it must be filed within 75 days of
                  formation. Once elected, S-Corp status remains until revoked —
                  and if revoked, the LLC cannot re-elect for 5 tax years.
                </p>
              </div>

              <Accordion title="When does it make sense?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  The S-Corp election is generally beneficial when net business
                  income exceeds $60,000-$80,000 per year. Below this threshold,
                  the additional costs of running payroll ($1,000-$3,000/year for
                  payroll processing, additional tax filings, and
                  California&apos;s 1.5% S-Corp tax) may offset the
                  self-employment tax savings.
                </p>
              </Accordion>
              <Accordion title="California considerations">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  California recognizes the federal S-Corp election but imposes an
                  additional 1.5% tax on S-Corp net income (minimum $800 — the
                  same as the LLC franchise tax). The LLC must also file
                  California Form 100S (S Corporation Tax Return) in addition to
                  the federal Form 1120S.
                </p>
              </Accordion>
              <Accordion title="Reasonable salary requirement">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  The IRS requires S-Corp members who provide services to pay
                  themselves a reasonable salary — compensation comparable to what
                  a similar position would earn in the open market. Setting your
                  salary too low to maximize tax-free distributions invites IRS
                  scrutiny and potential reclassification of distributions as
                  wages (plus penalties). We help determine an appropriate salary
                  based on your role, industry, and geographic area.
                </p>
              </Accordion>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* Comparison card */}
              <div className="bg-white rounded-[1rem] overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Without S-Corp */}
                  <div className="p-6 border-r border-gray-100">
                    <p className="font-sans text-[0.75rem] font-bold text-gray-400 uppercase tracking-wider mb-4">
                      Without S-Corp
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400 mb-1">
                      Net income
                    </p>
                    <p className="font-serif text-[1.5rem] text-black mb-4">
                      $200,000
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400 mb-1">
                      Subject to SE tax
                    </p>
                    <p className="font-serif text-[1.5rem] text-black mb-4">
                      $200,000
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400 mb-1">
                      Self-employment tax
                    </p>
                    <p className="font-serif text-[1.5rem] text-red-600">
                      ~$28,260
                    </p>
                  </div>

                  {/* With S-Corp */}
                  <div className="p-6 bg-green-50">
                    <p className="font-sans text-[0.75rem] font-bold text-green-800 uppercase tracking-wider mb-4">
                      With S-Corp
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400 mb-1">
                      Net income
                    </p>
                    <p className="font-serif text-[1.5rem] text-black mb-4">
                      $200,000
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400 mb-1">
                      Salary (subject to payroll tax)
                    </p>
                    <p className="font-serif text-[1.5rem] text-black mb-4">
                      $80,000
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400 mb-1">
                      Payroll tax on salary
                    </p>
                    <p className="font-serif text-[1.5rem] text-green-800">
                      ~$12,240
                    </p>
                  </div>
                </div>

                <div className="bg-green-800 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-[0.85rem] text-white/80">
                      Estimated annual savings
                    </p>
                    <p className="font-serif text-[1.5rem] text-white font-bold">
                      ~$16,020
                    </p>
                  </div>
                </div>
              </div>

              <VideoPlaceholder label="Video: Is the S-Corp election right for you? (4 min)" duration="4 min" variant="blue" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 5 — Self-Employment Tax */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 05
                </p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Self-employment tax
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  LLC members who actively participate in the business are subject
                  to federal self-employment tax on their share of the LLC&apos;s
                  net earnings. This is one of the most significant tax burdens
                  LLC owners face and is the primary motivation for the S-Corp
                  election.
                </p>
                <p>
                  <strong>Deduction:</strong> You can deduct 50% of your
                  self-employment tax as an adjustment to income on Form 1040,
                  which reduces your taxable income (but not the SE tax itself).
                  You can also deduct 100% of health insurance premiums paid for
                  yourself, your spouse, and dependents.
                </p>
                <p>
                  <strong>Passive members:</strong> In multi-member LLCs, members
                  who do not actively participate (passive investors) are
                  generally not subject to self-employment tax on their allocated
                  share. However, the IRS examines actual involvement, not just
                  titles. Consult a tax professional.
                </p>
              </div>
            </div>

            {/* Right — Visual breakdown */}
            <div>
              <div className="bg-white rounded-[1rem] p-6">
                <p className="font-sans text-[0.75rem] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  SE Tax Breakdown on $150K Net Income
                </p>
                <p className="font-serif text-[2.25rem] text-black mb-6">
                  $21,195
                </p>

                {/* Component bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-sans text-[0.85rem] text-gray-600">
                        Social Security (12.4%)
                      </p>
                      <p className="font-sans text-[0.85rem] font-bold text-black">
                        $18,600
                      </p>
                    </div>
                    <div className="w-full h-3 bg-ivory-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-800 rounded-full"
                        style={{ width: "88%" }}
                      />
                    </div>
                    <p className="font-sans text-[0.75rem] text-gray-400 mt-1">
                      On first $168,600 of net earnings (2024)
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-sans text-[0.85rem] text-gray-600">
                        Medicare (2.9%)
                      </p>
                      <p className="font-sans text-[0.85rem] font-bold text-black">
                        $4,350
                      </p>
                    </div>
                    <div className="w-full h-3 bg-ivory-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{ width: "21%" }}
                      />
                    </div>
                    <p className="font-sans text-[0.75rem] text-gray-400 mt-1">
                      On all net earnings — no cap
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-sans text-[0.85rem] text-gray-600">
                        Additional Medicare (0.9%)
                      </p>
                      <p className="font-sans text-[0.85rem] font-bold text-black">
                        $0
                      </p>
                    </div>
                    <div className="w-full h-3 bg-ivory-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-400 rounded-full"
                        style={{ width: "0%" }}
                      />
                    </div>
                    <p className="font-sans text-[0.75rem] text-gray-400 mt-1">
                      Only on earnings above $200K (single) / $250K (MFJ)
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="font-sans text-[0.85rem] text-gray-400">
                    This $21,195 is <strong>in addition to</strong> federal and
                    state income taxes on the same $150K.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 6 — California Form 568 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-6 mb-6">
            <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
              Chapter 06
            </p>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4">
            California Form 568
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] max-w-[42rem] mb-10">
            Every California LLC must file Form 568 (Limited Liability Company
            Return of Income) with the Franchise Tax Board annually, regardless
            of whether it earned income. Members report their share of
            California-source income on their personal Form 540 at rates ranging
            from 1% to 13.3%.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Due date",
                value: "April 15",
                detail: "7-month automatic extension available",
              },
              {
                label: "Who files",
                value: "All CA LLCs",
                detail:
                  "Regardless of income or activity level",
              },
              {
                label: "What it reports",
                value: "Income + fees",
                detail:
                  "$800 franchise tax and LLC fee paid through this form",
              },
              {
                label: "Non-resident members",
                value: "Withholding req'd",
                detail:
                  "LLC may need to withhold CA tax for non-resident members",
              },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-white rounded-[1rem] p-5 flex flex-col"
              >
                <p className="font-sans text-[0.75rem] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {fact.label}
                </p>
                <p className="font-serif text-[1.25rem] text-black mb-2">
                  {fact.value}
                </p>
                <p className="font-sans text-[0.8rem] text-gray-400 leading-[1.4]">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 7 — Sales & Use Tax */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-purple-900 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-white/30 pt-6 mb-6">
            <p className="text-[0.8rem] font-sans font-bold text-white/50 uppercase tracking-wider">
              Chapter 07
            </p>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4">
            Sales and use tax
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.7] max-w-[42rem] mb-10">
            If your LLC sells tangible personal property in California, you must
            register for a seller&apos;s permit with the CDTFA and collect sales
            tax. California&apos;s base rate is 7.25%, but local additions bring
            totals between 7.25% and 10.75%.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card — Taxable */}
            <div className="bg-purple-700 rounded-[1rem] p-6">
              <p className="font-sans text-[0.75rem] font-bold text-white/50 uppercase tracking-wider mb-3">
                Taxable
              </p>
              <ul className="space-y-2">
                {[
                  "Retail products",
                  "Manufactured goods",
                  "Certain digital products",
                  "Fabrication & repair services",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-sans text-[0.85rem] text-white/80 leading-[1.4]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card — Exempt */}
            <div className="bg-purple-700 rounded-[1rem] p-6">
              <p className="font-sans text-[0.75rem] font-bold text-white/50 uppercase tracking-wider mb-3">
                Exempt
              </p>
              <ul className="space-y-2">
                {[
                  "Consulting",
                  "Legal services",
                  "Accounting",
                  "Marketing services",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-sans text-[0.85rem] text-white/80 leading-[1.4]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card — Rate ranges */}
            <div className="bg-purple-700 rounded-[1rem] p-6">
              <p className="font-sans text-[0.75rem] font-bold text-white/50 uppercase tracking-wider mb-3">
                Rate Ranges
              </p>
              <p className="font-serif text-[2rem] text-white leading-[1.1] mb-2">
                7.25% -- 10.75%
              </p>
              <p className="font-sans text-[0.8rem] text-white/60 leading-[1.4]">
                Base rate 7.25% + local district taxes vary by city/county
              </p>
            </div>

            {/* Card — Filing & E-Commerce */}
            <div className="bg-purple-700 rounded-[1rem] p-6">
              <p className="font-sans text-[0.75rem] font-bold text-white/50 uppercase tracking-wider mb-3">
                Filing & E-Commerce
              </p>
              <ul className="space-y-2">
                {[
                  "Monthly: >$100K annual sales",
                  "Quarterly: mid-range",
                  "Annual: low volume",
                  "Economic nexus: $100K or 200 txns",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-sans text-[0.85rem] text-white/80 leading-[1.4]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-purple-700/50 rounded-[1rem] p-5 max-w-[42rem]">
            <p className="font-sans text-[0.85rem] text-white/70 leading-[1.6]">
              <strong className="text-white">Use tax reminder:</strong> If your
              LLC purchases goods from out-of-state vendors that don&apos;t
              charge California sales tax, you owe &ldquo;use tax&rdquo; at the
              same rate. This is self-reported on your sales tax return. The
              CDTFA actively audits for unreported use tax.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 8 — Employment Taxes */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 08
                </p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Employment taxes and payroll
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  If your LLC has employees (or elects S-Corp taxation, which
                  requires paying yourself a salary), you become subject to
                  federal and California employment taxes. You must register with
                  the California EDD and obtain a state employer account number.
                </p>
                <p>
                  <strong>Workers&apos; compensation:</strong> California
                  requires all employers to carry workers&apos; comp insurance
                  (Labor Code Section 3700). Failure to carry it is a criminal
                  offense — a misdemeanor punishable by a fine of up to $10,000,
                  imprisonment up to one year, or both.
                </p>
                <p>
                  <strong>Filing frequency:</strong> Federal payroll taxes (Form
                  941) and California payroll taxes (DE 9 and DE 9C) are filed
                  quarterly. Tax deposits may be required monthly or semi-weekly
                  depending on the amount owed. Annual reconciliation (W-2, W-3,
                  DE 7) is due January 31.
                </p>
              </div>
            </div>

            {/* Right — Payroll tax cards */}
            <div className="space-y-3">
              {[
                {
                  tax: "Social Security (FICA)",
                  rate: "12.4% total",
                  detail: "Split 6.2% employer + 6.2% employee on first $168,600",
                  who: "Split",
                },
                {
                  tax: "Medicare (FICA)",
                  rate: "2.9% total",
                  detail: "Split 1.45% employer + 1.45% employee on all wages",
                  who: "Split",
                },
                {
                  tax: "Additional Medicare",
                  rate: "0.9%",
                  detail: "Employee-only on wages over $200K",
                  who: "Employee",
                },
                {
                  tax: "Federal Unemployment (FUTA)",
                  rate: "0.6% effective",
                  detail: "Employer-only on first $7,000 (6.0% less state credit)",
                  who: "Employer",
                },
                {
                  tax: "CA State Disability (SDI)",
                  rate: "1.1%",
                  detail: "Employee-only on first $153,164 (2024)",
                  who: "Employee",
                },
                {
                  tax: "CA Unemployment (UI)",
                  rate: "1.5% -- 6.2%",
                  detail: "Employer-only on first $7,000 per employee",
                  who: "Employer",
                },
                {
                  tax: "CA Employment Training (ETT)",
                  rate: "0.1%",
                  detail: "Employer-only on first $7,000 per employee",
                  who: "Employer",
                },
              ].map((item) => (
                <div
                  key={item.tax}
                  className="bg-white rounded-[1rem] px-5 py-4 flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[0.85rem] font-bold text-black mb-0.5">
                      {item.tax}
                    </p>
                    <p className="font-sans text-[0.8rem] text-gray-400">
                      {item.detail}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-serif text-[1.125rem] font-bold text-green-800">
                      {item.rate}
                    </p>
                    <p className="font-sans text-[0.7rem] text-gray-400 uppercase tracking-wider">
                      {item.who}
                    </p>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-[1rem] px-5 py-4">
                <p className="font-sans text-[0.85rem] font-bold text-black mb-0.5">
                  Federal & CA Income Tax Withholding
                </p>
                <p className="font-sans text-[0.8rem] text-gray-400">
                  Employee-only. Based on W-4 / DE 4 and tax tables. You withhold
                  and remit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 9 — Complete Tax Calendar */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-6 mb-6">
            <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
              Chapter 09
            </p>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4">
            Complete tax deadline calendar
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] max-w-[42rem] mb-10">
            Every tax-related deadline a California LLC owner faces throughout
            the year. Dates assume a calendar-year LLC. Federal and California
            estimated payments, entity-level filings, and payroll deadlines — all
            in one timeline.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              {
                month: "January 15",
                items: [
                  "4th quarter estimated tax (federal & CA)",
                  "W-2s and DE 7 due by Jan 31",
                ],
              },
              {
                month: "March 15",
                items: [
                  "Form 1065 (partnership) due",
                  "Form 1120S (S-Corp) due",
                  "Schedule K-1s to all members",
                ],
              },
              {
                month: "April 15",
                items: [
                  "Form 1040 (personal return) due",
                  "CA Form 568 (LLC Return) due",
                  "$800 franchise tax (Form 3522)",
                  "1st quarter estimated tax",
                ],
              },
              {
                month: "June 15",
                items: [
                  "2nd quarter estimated tax",
                  "LLC fee estimate (Form 3536)",
                  "Q2 payroll return (941) by Jul 31",
                ],
              },
              {
                month: "September 15",
                items: [
                  "3rd quarter estimated (federal only)",
                  "Extended Form 1065 due",
                  "Extended Form 1120S due",
                ],
              },
              {
                month: "October 15",
                items: [
                  "Extended Form 1040 due",
                  "Extended Form 568 due",
                ],
              },
              {
                month: "December 31",
                items: [
                  "Last day for deductible expenses",
                  "Establish Solo 401(k) for this year",
                  "Year-end tax planning review",
                ],
              },
            ].map((period) => (
              <div key={period.month} className="bg-white rounded-[1rem] p-5">
                <p className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider mb-3">
                  {period.month}
                </p>
                <ul className="space-y-2">
                  {period.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-800 flex-shrink-0 mt-1.5" />
                      <span className="font-sans text-[0.8rem] text-gray-600 leading-[1.4]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-[1rem] p-5 max-w-[42rem]">
            <p className="font-sans text-[0.85rem] text-gray-600 leading-[1.6]">
              <strong>Estimated payments note:</strong> California uses a
              different allocation than federal — 30% due April 15, 40% due June
              15, 0% due September 15 (CA skips this), and 30% due January 15.
              The safe harbor: pay 100% of prior year or 90% of current year to
              avoid underpayment penalties.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Section 10 — Tax Strategies */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-6 mb-6">
            <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
              Chapter 10
            </p>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4">
            Tax planning strategies
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] max-w-[42rem] mb-10">
            While this guide is informational and not tax advice, here are
            strategies California LLC owners commonly discuss with their tax
            professionals.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "S-Corp election",
                description:
                  "Once net income exceeds $60K-$80K, the S-Corp election can save thousands by splitting income between salary (subject to payroll tax) and distributions (not subject). The breakeven depends on income level, payroll costs, and California's 1.5% S-Corp tax.",
              },
              {
                title: "Retirement plan contributions",
                description:
                  "SEP-IRAs (up to 25% of net SE income, max $69,000 for 2024), Solo 401(k) plans ($23,000 employee + 25% employer contribution), or SIMPLE IRAs. These reduce taxable income dollar-for-dollar.",
              },
              {
                title: "Health insurance deduction",
                description:
                  "Self-employed LLC members can deduct 100% of health insurance premiums for themselves, spouse, and dependents as an above-the-line deduction. Applies to medical, dental, and qualified long-term care insurance.",
              },
              {
                title: "Home office deduction",
                description:
                  "If you use a portion of your home regularly and exclusively for business, deduct a proportional share of home expenses or use the simplified method ($5/sq ft, max 300 sq ft = $1,500). Reduces both income tax and SE tax.",
              },
              {
                title: "Quarterly tax planning reviews",
                description:
                  "Don't wait until April. Quarterly reviews let you adjust estimated payments, accelerate or defer income and expenses, make timely retirement contributions, and avoid year-end surprises.",
              },
              {
                title: "Entity structure optimization",
                description:
                  "The optimal tax structure changes as you grow. A disregarded entity at $50K may benefit from S-Corp at $100K and might consider C-Corp when raising venture capital. Review annually with your advisors.",
              },
            ].map((strategy) => (
              <div
                key={strategy.title}
                className="bg-white rounded-[1rem] p-6"
              >
                <h3 className="font-sans font-bold text-[1rem] text-black mb-3">
                  {strategy.title}
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-green-800 py-[4rem] md:py-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="max-w-[42.5rem]">
            <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-white mb-5">
              Need help with LLC tax compliance?
            </h2>
            <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
              Our management services handle franchise tax payments, Form 568
              filing coordination, and deadline tracking so you never face a
              penalty.{" "}
              <Link
                href="/services/compliance"
                className="text-white hover:opacity-80 underline"
              >
                Learn about our compliance services
              </Link>
              .
            </p>
            <Link
              href="/questionnaire"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            >
              Start Your Request
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Disclaimer */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ivory-100 py-[3rem] md:py-[4rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <p className="font-sans text-[0.8rem] text-gray-400 leading-[1.6] max-w-[48rem]">
            <strong className="text-gray-500">Disclaimer:</strong> This guide is
            for informational purposes only and does not constitute tax advice.
            Tax laws change frequently, and the specific impact on your situation
            depends on your individual circumstances. Consult with a qualified
            tax professional (CPA or enrolled agent) before making tax decisions
            for your LLC. Dollar amounts and thresholds reflect current law as of
            the publication date and are subject to annual adjustments.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
