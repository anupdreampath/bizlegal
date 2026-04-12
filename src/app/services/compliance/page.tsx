"use client";

import PageShell from "@/components/PageShell";
import Link from "next/link";
import { Star } from "lucide-react";
import {
  Accordion,
  Takeaway,
  ImagePlaceholder,
  VideoPlaceholder,
  StatCard,
  ChapterBadge,
  ChapterBadgeLight,
} from "@/components/Interactive";

export default function CompliancePage() {
  return (
    <PageShell
      label="Services"
      title="Legal Compliance"
      description="California has some of the most complex business regulations in the country. We keep your LLC compliant with all of them — so you never face penalties, suspension, or worse."
    >
      {/* ───── Section 1: Why Compliance Matters (ivory-100, 2-col) ───── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="01" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                California doesn&apos;t forgive non-compliance — it punishes it
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  California is one of the most heavily regulated states for
                  business entities. Your LLC faces overlapping requirements from
                  the Secretary of State, the Franchise Tax Board (FTB), the EDD,
                  the CDTFA, city and county licensing agencies, and — since
                  2024 — federal BOI reporting under the Corporate Transparency
                  Act. Each agency operates on its own calendar, enforces its own
                  penalties, and expects you to know every rule.
                </p>
                <p>
                  &ldquo;Compliance&rdquo; means your LLC has met every filing
                  deadline, paid every fee and tax, holds valid licenses, and has
                  fulfilled all disclosure obligations. It means your LLC is in
                  &ldquo;good standing&rdquo; — a status that affects bank
                  accounts, loans, contracts, government bids, and lawsuits.
                </p>
                <p>
                  We monitor every obligation your California LLC faces, send
                  advance alerts before deadlines, prepare and file required
                  documents, and conduct annual reviews. You focus on your
                  business. We make sure the state has no reason to come after it.
                </p>
              </div>

              <Takeaway>
                A late Statement of Information triggers a $250 penalty. Unpaid
                franchise tax accrues 5% the first month, 0.5% each month after,
                plus interest. After 60 days the FTB can suspend your LLC —
                meaning you legally cannot transact business or defend yourself in
                court.
              </Takeaway>

              <div className="mt-6 space-y-0">
                <Accordion title="What happens when the FTB suspends your LLC?">
                  <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                    When the FTB suspends your LLC, you lose the legal right to
                    conduct business in California. You cannot enforce contracts in
                    court, file or defend lawsuits, maintain your business bank
                    account (banks often freeze accounts of suspended entities),
                    obtain new licenses, or sell the business. Franchise taxes,
                    penalties, and interest keep accruing while suspended. Revivor
                    requires filing all delinquent returns, paying all back taxes
                    with penalties and interest, and requesting a Certificate of
                    Revivor — often totaling $3,000 to $10,000+.
                  </p>
                </Accordion>
                <Accordion title="How does veil piercing threaten LLC owners?">
                  <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                    If you commingle personal and business finances, fail to
                    maintain separate books, or don&apos;t observe corporate
                    formalities, a court can &ldquo;pierce the veil&rdquo; and
                    hold you personally liable for LLC debts and judgments.
                    California courts apply the alter ego doctrine aggressively.
                    Maintaining compliance — proper filings, separate accounts,
                    and a current operating agreement — is your best defense.
                  </p>
                </Accordion>
                <Accordion title="Can non-compliance affect your bank accounts?">
                  <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                    Yes. Banks routinely verify LLC status with the Secretary of
                    State. If your LLC has been suspended or forfeited, banks can
                    freeze or close your business account. You also cannot open
                    new accounts, apply for loans, or sign commercial leases
                    without a Certificate of Good Standing — which a
                    non-compliant LLC cannot obtain.
                  </p>
                </Accordion>
              </div>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="Watch: Why California LLC Compliance Matters" duration="3 min" variant="green" />

              <div className="grid grid-cols-2 gap-4">
                <StatCard number="$250+" label="Penalty for late SOI filing" />
                <StatCard number="$800/yr" label="Minimum franchise tax owed" />
                <StatCard number="60 days" label="Until FTB suspends your LLC" />
                <StatCard number="100%" label="Compliance rate for our clients" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 2: What's Included (ivory-200) ───── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadge number="02" />
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            Six pillars of ongoing compliance for your California LLC
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[3rem] max-w-[36rem]">
            Every obligation your LLC faces — state, federal, and local — is
            tracked, managed, and fulfilled on your behalf.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Regulatory Monitoring */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <h3 className="font-serif text-[1.5rem] leading-[1.2] text-black mb-3">
                Regulatory Monitoring
              </h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
                We track legislative changes, FTB and Secretary of State
                regulatory updates, and local ordinance amendments. When
                something changes that requires action, we notify you with a
                plain-English explanation before any deadline arrives.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-sans text-[0.8rem] font-bold text-black uppercase tracking-wider mb-3">
                  Includes
                </p>
                <div className="space-y-2">
                  {[
                    "Legislative tracking for LLC-relevant bills",
                    "FTB and Secretary of State regulatory alerts",
                    "Local ordinance change monitoring",
                    "Plain-English impact summaries",
                    "Proactive action plans when laws change",
                    "Industry-specific regulatory tracking",
                  ].map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                      <span className="font-sans text-[0.85rem] text-gray-600">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* License & Permit Guidance */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <h3 className="font-serif text-[1.5rem] leading-[1.2] text-black mb-3">
                License &amp; Permit Guidance
              </h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
                Your LLC may need city business licenses, zoning permits, a
                CDTFA seller&apos;s permit, professional licenses, health
                permits, or a home occupation permit. Operating without a
                required license can trigger fines of $500 to $10,000 per
                violation.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-sans text-[0.8rem] font-bold text-black uppercase tracking-wider mb-3">
                  Includes
                </p>
                <div className="space-y-2">
                  {[
                    "City and county business license identification",
                    "CDTFA seller's permit guidance",
                    "Professional license requirement review",
                    "Zoning and home occupation permit checks",
                    "Renewal date tracking and alerts",
                    "Application assistance and filing support",
                  ].map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                      <span className="font-sans text-[0.85rem] text-gray-600">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOI Reporting */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <h3 className="font-serif text-[1.5rem] leading-[1.2] text-black mb-3">
                BOI Reporting (CTA)
              </h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
                The Corporate Transparency Act requires most LLCs to file
                Beneficial Ownership Information reports with FinCEN. Failure to
                comply can result in civil penalties of $591 per day and criminal
                penalties up to $10,000 and two years imprisonment.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-sans text-[0.8rem] font-bold text-black uppercase tracking-wider mb-3">
                  Includes
                </p>
                <div className="space-y-2">
                  {[
                    "Initial BOI report preparation and filing",
                    "Beneficial owner identification analysis",
                    "Company applicant reporting",
                    "Updated reports when ownership changes",
                    "Corrected reports if errors are discovered",
                    "FinCEN ID application assistance",
                  ].map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                      <span className="font-sans text-[0.85rem] text-gray-600">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Annual Compliance Review */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <h3 className="font-serif text-[1.5rem] leading-[1.2] text-black mb-3">
                Annual Compliance Review
              </h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
                Each year we audit your LLC&apos;s compliance across every
                dimension — state filings, tax obligations, license validity,
                registered agent status, operating agreement currency, and
                federal reporting. You receive a written compliance report card
                with a prioritized action plan.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-sans text-[0.8rem] font-bold text-black uppercase tracking-wider mb-3">
                  Includes
                </p>
                <div className="space-y-2">
                  {[
                    "Secretary of State filing status verification",
                    "FTB tax payment and penalty review",
                    "Business license and permit validity check",
                    "Operating agreement currency assessment",
                    "BOI report accuracy review",
                    "Written compliance report card with action plan",
                  ].map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                      <span className="font-sans text-[0.85rem] text-gray-600">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Good Standing Certificates */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <h3 className="font-serif text-[1.5rem] leading-[1.2] text-black mb-3">
                Good Standing Certificates
              </h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
                A Certificate of Status confirms your LLC exists and is
                authorized to transact business. Banks, lenders, landlords, and
                government agencies require it. Standard processing is $5 for
                plain, $10 for certified copies — typically 3 to 5 business
                days.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-sans text-[0.8rem] font-bold text-black uppercase tracking-wider mb-3">
                  Includes
                </p>
                <div className="space-y-2">
                  {[
                    "Certificate of Status requests on demand",
                    "Standard and certified copy options",
                    "Bank and lender submission support",
                    "Foreign qualification certificate packages",
                    "Expedited processing when available",
                    "Digital and physical copy delivery",
                  ].map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                      <span className="font-sans text-[0.85rem] text-gray-600">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Multi-State Compliance */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <h3 className="font-serif text-[1.5rem] leading-[1.2] text-black mb-3">
                Multi-State Compliance
              </h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
                If your LLC does business in other states, you may need to
                register as a foreign LLC. Each state has its own fees, annual
                reports, and tax obligations. Failing to register can result in
                fines, inability to enforce contracts, and personal liability.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-sans text-[0.8rem] font-bold text-black uppercase tracking-wider mb-3">
                  Includes
                </p>
                <div className="space-y-2">
                  {[
                    "Multi-state nexus analysis",
                    "Foreign qualification filings in all 50 states",
                    "Out-of-state registered agent coordination",
                    "State-specific annual report tracking",
                    "Foreign state tax registration guidance",
                    "Withdrawal filings when no longer doing business",
                  ].map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                      <span className="font-sans text-[0.85rem] text-gray-600">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 3: Compliance Calendar (ivory-100, 2-col) ───── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="03" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Every deadline your California LLC faces, mapped out
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-6">
                Missing any of these deadlines triggers penalties, interest, or
                worse. We track every one and send you advance reminders at 60,
                30, and 7 days before each due date.
              </p>
              <ImagePlaceholder label="Compliance Calendar Dashboard" aspect="16/9" src="/images/services/compliance-calendar.svg" />
            </div>

            <div className="space-y-4">
              {[
                {
                  deadline: "Within 90 days of formation",
                  filing: "Initial Statement of Information",
                  form: "Form LLC-12",
                  fee: "$20",
                  consequence: "$250 penalty; Secretary of State may suspend LLC if unfiled",
                },
                {
                  deadline: "By 15th day of 4th month after formation",
                  filing: "First-year franchise tax payment",
                  form: "Form 3522",
                  fee: "$800 minimum",
                  consequence: "5% penalty + 0.5%/month + interest; FTB suspension after 60 days",
                },
                {
                  deadline: "January 1 - March 15 annually",
                  filing: "Annual LLC tax return (multi-member)",
                  form: "Form 568",
                  fee: "Varies",
                  consequence: "Late filing penalty of $18/member/month; FTB assessment of tax",
                },
                {
                  deadline: "April 15 annually",
                  filing: "Annual franchise tax ($800 minimum)",
                  form: "Form 3522",
                  fee: "$800+",
                  consequence: "5% immediate penalty, 0.5%/month after, plus interest accrual",
                },
                {
                  deadline: "April 15 annually",
                  filing: "Federal income tax return",
                  form: "IRS Form 1065 or 1040 Schedule C",
                  fee: "N/A",
                  consequence: "IRS penalty of $220/partner/month (2024); failure-to-file 5%/month up to 25%",
                },
                {
                  deadline: "June 15 annually",
                  filing: "Estimated LLC fee (gross income > $250,000)",
                  form: "Form 3536",
                  fee: "$900 - $11,790",
                  consequence: "10% penalty on unpaid amount; interest at current FTB rate",
                },
                {
                  deadline: "Every 2 years (anniversary month)",
                  filing: "Biennial Statement of Information",
                  form: "Form LLC-12",
                  fee: "$20",
                  consequence: "$250 penalty; continued failure leads to suspension and forfeiture",
                },
                {
                  deadline: "Within 30 days of formation (2025+)",
                  filing: "BOI report (Corporate Transparency Act)",
                  form: "FinCEN BOI Report",
                  fee: "$0",
                  consequence: "Civil penalty up to $591/day; criminal penalty up to $10,000 and 2 years",
                },
                {
                  deadline: "Within 30 days of ownership change",
                  filing: "Updated BOI report",
                  form: "FinCEN BOI Update",
                  fee: "$0",
                  consequence: "Same penalties as initial report — $591/day civil, criminal exposure",
                },
                {
                  deadline: "Varies by city/county",
                  filing: "Business license renewal",
                  form: "Varies",
                  fee: "$50 - $500+",
                  consequence: "Fines up to $1,000/day; business closure orders",
                },
                {
                  deadline: "Varies by permit type",
                  filing: "Seller's permit renewal / special permits",
                  form: "CDTFA",
                  fee: "Varies",
                  consequence: "Revocation of permit; inability to collect or remit sales tax",
                },
                {
                  deadline: "Ongoing / event-driven",
                  filing: "Operating Agreement amendments",
                  form: "Internal document",
                  fee: "$0",
                  consequence: "Outdated agreements may not hold up in court; loss of liability protection",
                },
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-[1rem] p-5">
                  <p className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider mb-1">
                    {row.deadline}
                  </p>
                  <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                    {row.filing}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                    <span className="font-sans text-[0.85rem] text-gray-500">
                      {row.form}
                    </span>
                    <span className="font-sans text-[0.85rem] text-gray-500">
                      Fee: {row.fee}
                    </span>
                  </div>
                  <p className="font-sans text-[0.85rem] text-red-700 leading-[1.5]">
                    {row.consequence}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 4: Common Violations (purple-900) ───── */}
      <section className="bg-purple-900 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadgeLight number="04" />
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4 max-w-[42.5rem]">
            Mistakes California LLC owners actually make — and what they cost
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.6] mb-[3rem] max-w-[36rem]">
            These aren&apos;t hypotheticals. We see these violations regularly
            from LLC owners who come to us after getting hit with penalties.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div className="bg-purple-700 rounded-[1rem] p-6">
              <h3 className="font-sans font-bold text-[1rem] text-white mb-2">
                Forgetting the Statement of Information
              </h3>
              <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">
                California requires Form LLC-12 within 90 days of formation and
                every two years thereafter. The Secretary of State assesses a
                $250 penalty for late filing and will eventually suspend and
                forfeit your LLC. We&apos;ve seen owners discover their LLC was
                forfeited years later when trying to sell the business or apply
                for a loan.
              </p>
            </div>

            <div className="bg-purple-700 rounded-[1rem] p-6">
              <h3 className="font-sans font-bold text-[1rem] text-white mb-2">
                Not paying the $800 franchise tax
              </h3>
              <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">
                Every California LLC owes a minimum $800 annual franchise tax —
                even with zero revenue. The FTB adds a 5% penalty immediately,
                then 0.5% per month, plus interest (currently 7%). After about
                60 days of delinquency, the FTB suspends your LLC — you cannot
                legally conduct business, enforce contracts, or file lawsuits.
              </p>
            </div>

            <div className="bg-purple-700 rounded-[1rem] p-6">
              <h3 className="font-sans font-bold text-[1rem] text-white mb-2">
                Ignoring BOI reporting requirements
              </h3>
              <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">
                FinCEN requires most LLCs to report beneficial owners who own
                25%+ or exercise substantial control. Penalties are among the
                harshest: up to $591 per day in civil fines and criminal
                penalties of up to $10,000 and two years in prison. There are 23
                exemptions, but most small LLCs don&apos;t qualify for any.
              </p>
            </div>

            <div className="bg-purple-700 rounded-[1rem] p-6">
              <h3 className="font-sans font-bold text-[1rem] text-white mb-2">
                Operating without required licenses
              </h3>
              <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">
                Cities and counties require separate business licenses with
                annual renewal. Industries like construction (CSLB), food
                service, childcare, real estate (DRE), and professional services
                have their own licensing boards. Fines range from $500 to
                $10,000 per violation, and some industries face criminal
                prosecution.
              </p>
            </div>

            <div className="bg-purple-700 rounded-[1rem] p-6">
              <h3 className="font-sans font-bold text-[1rem] text-white mb-2">
                Commingling personal and business finances
              </h3>
              <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">
                If a court determines you treated your LLC&apos;s bank account
                as your personal account — paying personal expenses, failing to
                maintain separate books — they can &ldquo;pierce the
                veil&rdquo; and hold you personally liable for LLC debts.
                California courts apply the alter ego doctrine aggressively.
              </p>
            </div>

            <div className="bg-purple-700 rounded-[1rem] p-6">
              <h3 className="font-sans font-bold text-[1rem] text-white mb-2">
                Missing the LLC fee for high-income LLCs
              </h3>
              <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">
                Beyond the $800 franchise tax, California imposes a graduated
                LLC fee on total income of $250,000+: from $900 to $11,790,
                payable by June 15 using Form 3536. Many owners only budget for
                the $800 and are blindsided. Failure to pay results in a 10%
                penalty plus interest.
              </p>
            </div>
          </div>

          <VideoPlaceholder label="Watch: Real Compliance Horror Stories from CA LLC Owners" duration="4 min" variant="red" />
        </div>
      </section>

      {/* ───── Section 5: Who Needs Help (ivory-200, 2-col) ───── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="05" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Compliance isn&apos;t just for big companies — it&apos;s for
                every LLC owner who wants to stay protected
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-6">
                Whether you just formed your LLC or have been operating for
                years, compliance gaps can appear at any stage. Here are the
                business owners who benefit most from professional compliance
                management.
              </p>
              <ImagePlaceholder label="Business Owners Managing Compliance" aspect="4/3" src="/images/services/document-review.svg" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                  First-time LLC owners
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  You formed your LLC but aren&apos;t sure what comes next. Our
                  compliance service gives you a complete roadmap from day one,
                  so nothing falls through the cracks during the critical first
                  year.
                </p>
              </div>

              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                  Solo entrepreneurs
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  You&apos;re running every aspect of your business yourself.
                  Compliance tracking is the last thing on your list. We take it
                  off your plate — you get alerts only when you need to sign or
                  pay.
                </p>
              </div>

              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                  Real estate investors
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Each property in a separate LLC means multiplied filings:
                  separate SOIs, franchise taxes, and BOI reports for each
                  entity. Missing a deadline on one compromises your entire
                  portfolio strategy.
                </p>
              </div>

              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                  LLCs operating informally
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  You formed your LLC but never filed the SOI, missed franchise
                  taxes, or didn&apos;t know about BOI. You may already have
                  penalties accruing. We audit, identify deficiencies, and create
                  a remediation plan.
                </p>
              </div>

              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                  Multi-state businesses
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Your CA LLC has operations in other states. Foreign LLC
                  registration triggers a second set of annual reports, taxes,
                  and deadlines. We handle multi-state compliance so you
                  don&apos;t learn every state&apos;s rules individually.
                </p>
              </div>

              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                  Regulated industries
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Construction, healthcare, food service, cannabis, childcare —
                  these industries have licensing requirements beyond standard
                  LLC filings. A lapsed license means you can&apos;t legally
                  operate and fines are severe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 6: FAQ (ivory-100, 2-col) ───── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="06" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Common questions about California LLC compliance
              </h2>

              {/* Testimonial */}
              <div className="bg-ivory-200 rounded-[1rem] p-6 mt-8 mb-8">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black text-black"
                    />
                  ))}
                </div>
                <blockquote className="font-serif text-[1.125rem] leading-[1.3] text-black mb-4">
                  &ldquo;I had no idea my LLC had been suspended by the FTB for
                  two years. Biz Legal identified every delinquent filing,
                  negotiated penalty abatement where possible, and got me back
                  into good standing. I would have lost my business without
                  them.&rdquo;
                </blockquote>
                <p className="font-sans text-[0.85rem] font-bold text-black">
                  David T.
                </p>
                <p className="font-sans text-[0.8rem] text-gray-600">
                  Owner, Bay Area Renovation Group LLC
                </p>
              </div>

              <VideoPlaceholder label="Watch: Compliance Q&A with Our Legal Team" duration="3 min" variant="dark" />
            </div>

            <div className="space-y-0">
              <Accordion title="What happens if my California LLC gets suspended?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  When the FTB suspends your LLC, you lose the legal right to
                  conduct business in California. You cannot enforce contracts,
                  file or defend lawsuits, maintain your bank account, obtain new
                  licenses, or sell the business. Franchise taxes, penalties, and
                  interest keep accruing. To revive your LLC, file all delinquent
                  returns, pay all back taxes with penalties and interest, and
                  request a Certificate of Revivor — often totaling $3,000 to
                  $10,000+.
                </p>
              </Accordion>

              <Accordion title="Do I need to file a Statement of Information even if inactive?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Yes. As long as your LLC exists with the Secretary of State,
                  you must file Form LLC-12 within 90 days of formation and
                  every two years thereafter. The only way to stop this
                  obligation is to dissolve your LLC by filing a Certificate of
                  Cancellation (Form LLC-4/7). Similarly, the $800 annual
                  franchise tax is owed every year your LLC exists, even with no
                  income. If you&apos;re not using your LLC, it&apos;s often
                  better to formally dissolve it.
                </p>
              </Accordion>

              <Accordion title="What is the difference between the $800 franchise tax and the LLC fee?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  They are two separate obligations. The $800 minimum franchise
                  tax (Form 3522) is owed regardless of income, due April 15.
                  The LLC fee (Form 3536) is an additional charge based on total
                  California-source income: $900 for $250K-$499K; $2,500 for
                  $500K-$999K; $6,000 for $1M-$4.99M; and $11,790 for $5M+.
                  The LLC fee is due June 15 for calendar-year LLCs. Both are
                  paid to the FTB with separate deadlines and penalties.
                </p>
              </Accordion>

              <Accordion title="Does my single-member LLC need to file a BOI report?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Almost certainly yes. The Corporate Transparency Act applies
                  regardless of member count. The 23 exemptions primarily cover
                  large operating companies (500+ employees and $5M+ revenue),
                  regulated entities like banks, and certain inactive entities. A
                  typical single-member LLC must file identifying its beneficial
                  owner with full legal name, date of birth, residential address,
                  and an identifying document. Filing is done online through
                  FinCEN&apos;s BOI E-Filing portal at no cost.
                </p>
              </Accordion>

              <Accordion title="How do I know if my LLC needs to register in another state?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  You likely need to foreign-qualify if your LLC has a physical
                  office, warehouse, or retail location in another state; employs
                  workers there; holds real property; or generates revenue above
                  that state&apos;s economic nexus threshold. Each state defines
                  &ldquo;doing business&rdquo; differently. California considers
                  any LLC with California-source income above $500,000 to be
                  doing business here. We perform multi-state nexus analysis and
                  handle foreign qualification filings.
                </p>
              </Accordion>

              <Accordion title="Can I fix compliance problems from prior years?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Yes. If suspended by the FTB, we file delinquent returns, pay
                  back taxes with penalties, and request a Certificate of
                  Revivor. If forfeited by the Secretary of State, we file an
                  Application for Revivor, pay outstanding fees, and restore your
                  entity. For missed BOI filings, FinCEN considers voluntary late
                  filings as a mitigating factor. Acting sooner reduces total
                  penalties — many of California&apos;s penalties accrue daily
                  or monthly.
                </p>
              </Accordion>

              <Accordion title="What does your compliance service cost, and when does it start?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  We provide a clear fee quote after reviewing your LLC&apos;s
                  status and compliance needs — scope varies by industry, number
                  of entities, multi-state presence, and remediation needs. No
                  hidden fees. Service begins immediately upon engagement: initial
                  audit within the first week, monitoring and deadline tracking
                  set up right away, and your first compliance status report
                  within 30 days. Urgent filings are prioritized immediately.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Section 7: CTA (green-800, 2-col) ───── */}
      <section className="bg-green-800 py-[4rem] md:py-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-center">
            <div>
              <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-white mb-5">
                Stop worrying about compliance. Let us handle it.
              </h2>
              <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
                Submit a free request and we&apos;ll conduct an initial
                compliance review of your California LLC — no payment, no
                commitment. If there are issues, we&apos;ll tell you exactly
                what they are and what it takes to fix them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/questionnaire"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Start Your Compliance Review
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <ImagePlaceholder label="Compliance Team at Work" aspect="4/3" src="/images/services/compliance-team.svg" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
