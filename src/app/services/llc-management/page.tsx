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

export default function LLCManagementPage() {
  return (
    <PageShell
      heroImage="https://images.unsplash.com/photo-1775363949971-0e4919c66856?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Tax day marked on a calendar — California LLC ongoing management and compliance"
      label="Services"
      title="LLC Management & Compliance"
      description="Keep your California LLC in good standing with our ongoing compliance monitoring, annual filings, and record maintenance. We handle the deadlines so you never face penalties, suspension, or loss of liability protection."
    >
      {/* ── 01 Why Management Matters ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            {/* Left column */}
            <div>
              <ChapterBadge number="01" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Forming your LLC was the first step. Keeping it alive is the real
                work.
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Most business owners assume that once their LLC is formed, the
                  hard part is over. In reality, California imposes ongoing
                  compliance obligations that begin immediately after formation
                  and continue every year for the life of your LLC. Missing even
                  one of these obligations can trigger a chain of consequences
                  that puts your entire business at risk.
                </p>
                <p>
                  When an LLC falls out of compliance in California, the
                  consequences are automatic and severe. The Franchise Tax Board
                  will suspend your LLC for failure to pay the annual $800
                  minimum franchise tax or for unfiled tax returns. The Secretary
                  of State can administratively dissolve your LLC for failure to
                  file your biennial Statement of Information. Once suspended,
                  your LLC cannot legally conduct business, enforce contracts,
                  file lawsuits, or defend itself in court.
                </p>
                <p>
                  Ongoing LLC management is not optional paperwork. It is the
                  legal infrastructure that keeps your liability protection
                  intact, your business operational, and your personal assets
                  shielded.
                </p>
              </div>

              <Takeaway>
                A suspended or non-compliant LLC may lose its liability
                protection &mdash; the very reason most owners formed an LLC in
                the first place. Courts have pierced the corporate veil of
                non-compliant LLCs, holding owners personally liable for business
                debts.
              </Takeaway>

              <Accordion title="What happens when your LLC is suspended?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  A suspended LLC cannot legally conduct business, enforce
                  contracts, file lawsuits, or defend itself in court. Banks may
                  freeze your business accounts. Vendors and partners may refuse
                  to do business with a suspended entity.
                </p>
              </Accordion>
              <Accordion title="How costly is reinstatement?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  Reinstating a suspended LLC requires paying all back taxes,
                  penalties, interest, and filing fees &mdash; which can easily
                  exceed several thousand dollars. What starts as a missed $800
                  franchise tax payment becomes $800 plus penalties plus interest
                  plus reinstatement fees, often exceeding $2,000 or more for a
                  single year of non-compliance.
                </p>
              </Accordion>
              <Accordion title="Can you lose your LLC name?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  Yes. While your LLC is suspended or dissolved, another entity
                  may file for and claim your LLC name in California. You could
                  also lose business licenses, permits, and the ability to obtain
                  loans during a period of non-compliance.
                </p>
              </Accordion>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <VideoPlaceholder label="Why LLC compliance matters in California" duration="3 min" variant="green" />

              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  number="60%"
                  label="of CA LLCs miss at least one deadline"
                />
                <StatCard
                  number="$800+"
                  label="minimum annual franchise tax"
                />
                <StatCard
                  number="$250"
                  label="penalty per late Statement of Info"
                />
                <StatCard
                  number="100%"
                  label="of deadlines tracked by our team"
                />
              </div>

              <div className="bg-ivory-200 rounded-[1rem] p-8">
                <h3 className="font-serif text-[1.5rem] text-black mb-5">
                  What happens without management?
                </h3>
                <div className="space-y-4">
                  {[
                    "LLC suspended by Franchise Tax Board for unpaid taxes",
                    "Late filing penalties of $250 or more per violation",
                    "Loss of personal liability protection (veil piercing)",
                    "Inability to file or defend lawsuits in California courts",
                    "Business bank accounts frozen or closed by financial institutions",
                    "Contracts become unenforceable during suspension period",
                    "Loss of your LLC name to another entity filing in California",
                    "Difficulty obtaining business licenses, permits, or loans",
                  ].map((risk) => (
                    <div
                      key={risk}
                      className="flex items-start gap-3 border-b border-gray-200 pb-3"
                    >
                      <span className="text-[0.9rem] text-red-600 mt-0.5">
                        &#x2715;
                      </span>
                      <span className="font-sans text-[0.9rem] text-gray-600">
                        {risk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 What's Included ── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadge number="02" />
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            Everything your California LLC needs to stay compliant, year after
            year
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[3rem] max-w-[36rem]">
            Our management package covers every recurring obligation California
            imposes on LLCs. No deadline is missed, no filing is forgotten, and
            no penalty is incurred on our watch.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Annual Statement of Information",
                text: "California requires every LLC to file a Statement of Information (Form LLC-12) with the Secretary of State every two years. Missing the deadline triggers a $250 penalty and can lead to administrative dissolution.",
                includes: [
                  "Biennial Form LLC-12 preparation and filing",
                  "Manager/member information verification",
                  "Business address and agent confirmation",
                  "Secretary of State filing ($20 fee included)",
                  "Filing confirmation and stamped copy delivery",
                  "Deadline monitoring with advance reminders",
                ],
              },
              {
                title: "Franchise Tax Management",
                text: "Every California LLC must pay an annual minimum franchise tax of $800 to the Franchise Tax Board. For LLCs with gross receipts above $250,000, an additional LLC fee applies ranging from $900 to $11,790.",
                includes: [
                  "Annual $800 minimum franchise tax tracking",
                  "LLC fee calculation for gross receipts over $250K",
                  "Form 3522 (estimated fee) preparation",
                  "Form 568 (annual return) coordination",
                  "Payment deadline monitoring and reminders",
                  "FTB correspondence monitoring and forwarding",
                ],
              },
              {
                title: "Compliance Calendar",
                text: "We build a personalized compliance calendar for your LLC tracking every relevant deadline based on your formation date, fiscal year, and specific business activities. Automated reminders at 90, 60, 30, and 7 days.",
                includes: [
                  "Personalized calendar based on your LLC's dates",
                  "Automated reminders at 90, 60, 30, and 7 days",
                  "Franchise Tax Board deadline tracking",
                  "Secretary of State filing window monitoring",
                  "Business license and permit renewal alerts",
                  "Year-end compliance review and planning",
                ],
              },
              {
                title: "Record Maintenance",
                text: "Maintaining proper records is a legal requirement that protects your liability shield. California courts can pierce the corporate veil if an LLC fails to maintain adequate records, holding owners personally liable.",
                includes: [
                  "Annual meeting minutes drafting",
                  "Membership interest ledger maintenance",
                  "Capital contribution and distribution tracking",
                  "Resolution documentation for major decisions",
                  "Secure digital record storage and portal access",
                  "Records organized for audit or legal review",
                ],
              },
              {
                title: "Registered Agent Service",
                text: "California law requires every LLC to maintain a registered agent with a physical street address in the state. If your agent cannot be reached, you may miss critical legal deadlines including lawsuit response deadlines.",
                includes: [
                  "California physical address on all public filings",
                  "Service of process acceptance and forwarding",
                  "State correspondence receipt and notification",
                  "Same-day scanning and portal upload",
                  "Email and SMS alerts for received documents",
                  "Privacy protection — your home address stays private",
                ],
              },
              {
                title: "Amendment Filing",
                text: "Changing your LLC name, adding or removing members, switching management structure, or updating your address all require formal amendments filed with the Secretary of State (Form LLC-2, $30 filing fee).",
                includes: [
                  "Articles of Organization amendments (Form LLC-2)",
                  "Operating Agreement updates and redrafting",
                  "Member addition or removal documentation",
                  "Management structure changes",
                  "Business address and agent updates",
                  "Secretary of State filing and confirmation",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[1rem] p-6 md:p-8"
              >
                <h3 className="font-serif text-[1.5rem] leading-[1.2] text-black mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
                  {item.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-sans text-[0.8rem] font-bold text-black uppercase tracking-wider mb-3">
                    Includes
                  </p>
                  <div className="space-y-2">
                    {item.includes.map((inc) => (
                      <div key={inc} className="flex items-start gap-2">
                        <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">
                          &#x2713;
                        </span>
                        <span className="font-sans text-[0.85rem] text-gray-600">
                          {inc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Cost of Non-Compliance ── */}
      <section className="bg-green-800 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] mb-[3rem]">
            <div>
              <ChapterBadgeLight number="03" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4">
                Real penalties California imposes on non-compliant LLCs
              </h2>
              <p className="font-sans text-[1rem] text-white/70 leading-[1.6]">
                California is one of the strictest states when it comes to LLC
                compliance enforcement. The Franchise Tax Board and Secretary of
                State actively monitor filings and will take action &mdash;
                often without additional warning beyond the original deadline.
              </p>
            </div>
            <VideoPlaceholder label="Video: How non-compliance penalties compound" duration="4 min" variant="red" />
          </div>

          {/* Penalty escalation — visual timeline */}
          <div className="space-y-0">
            {/* Stage 1 */}
            <div className="bg-green-500 rounded-t-[1rem] p-6 md:p-8 border-b border-white/10">
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
                <div>
                  <span className="inline-block font-sans text-[0.7rem] font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-3">
                    Stage 1 — Missed Payment
                  </span>
                  <p className="font-serif text-[2.5rem] md:text-[3rem] text-white leading-none">$1,000+</p>
                  <p className="font-sans text-[0.85rem] text-white/60 mt-1">per year of non-compliance</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[1.125rem] text-white mb-2">Late Franchise Tax Payment</h3>
                  <p className="font-sans text-[0.95rem] text-white/75 leading-[1.6] mb-4">
                    Every California LLC owes $800/year in franchise tax, due April 15 (first year: 15th day of the 4th month after formation). Miss it, and the Franchise Tax Board adds a <strong className="text-white">5% penalty per month</strong> the tax remains unpaid, capped at 25% ($200). Interest accrues on top at a variable FTB rate. A single year of missed franchise tax quickly exceeds $1,000 in combined tax, penalties, and interest.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-sans text-[0.75rem] font-bold bg-white/10 text-white/80 px-3 py-1.5 rounded-full">$800 base tax</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-white/10 text-white/80 px-3 py-1.5 rounded-full">+5%/month penalty</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-white/10 text-white/80 px-3 py-1.5 rounded-full">+variable interest</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-white/10 text-white/80 px-3 py-1.5 rounded-full">Form 3522</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-green-500 p-6 md:p-8 border-b border-white/10">
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
                <div>
                  <span className="inline-block font-sans text-[0.7rem] font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-3">
                    Stage 2 — Missed Filing
                  </span>
                  <p className="font-serif text-[2.5rem] md:text-[3rem] text-white leading-none">$250</p>
                  <p className="font-sans text-[0.85rem] text-white/60 mt-1">per delinquent filing</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[1.125rem] text-white mb-2">Late Statement of Information</h3>
                  <p className="font-sans text-[0.95rem] text-white/75 leading-[1.6] mb-4">
                    The Secretary of State requires Form LLC-12 every two years during your designated filing window. Miss the window, and a <strong className="text-white">$250 penalty</strong> is assessed immediately. If the filing remains delinquent, the Secretary of State begins proceedings to administratively dissolve or suspend your LLC — potentially terminating its legal existence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-sans text-[0.75rem] font-bold bg-white/10 text-white/80 px-3 py-1.5 rounded-full">$250 flat penalty</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-white/10 text-white/80 px-3 py-1.5 rounded-full">Every 2 years</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-white/10 text-white/80 px-3 py-1.5 rounded-full">Form LLC-12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-green-500 p-6 md:p-8 border-b border-white/10">
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
                <div>
                  <span className="inline-block font-sans text-[0.7rem] font-bold bg-red-500/40 text-white px-3 py-1 rounded-full mb-3">
                    Stage 3 — Suspension
                  </span>
                  <p className="font-serif text-[2.5rem] md:text-[3rem] text-white leading-none">Revoked</p>
                  <p className="font-sans text-[0.85rem] text-white/60 mt-1">all business powers</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[1.125rem] text-white mb-2">LLC Suspension by Franchise Tax Board</h3>
                  <p className="font-sans text-[0.95rem] text-white/75 leading-[1.6] mb-4">
                    Continued non-payment or non-filing triggers <strong className="text-white">full suspension</strong>. A suspended LLC cannot legally conduct business, enforce or defend contracts, file lawsuits, maintain name protection, or access business bank accounts. Reinstatement requires filing all delinquent returns, paying all back taxes + penalties + interest, plus a $30 reinstatement fee. Total cost often exceeds $2,000+ for a single year.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-sans text-[0.75rem] font-bold bg-red-500/30 text-white/90 px-3 py-1.5 rounded-full">Cannot transact business</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-red-500/30 text-white/90 px-3 py-1.5 rounded-full">Cannot sue or defend</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-red-500/30 text-white/90 px-3 py-1.5 rounded-full">Bank accounts frozen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-green-500 rounded-b-[1rem] p-6 md:p-8">
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
                <div>
                  <span className="inline-block font-sans text-[0.7rem] font-bold bg-red-600/50 text-white px-3 py-1 rounded-full mb-3">
                    Stage 4 — Dissolution
                  </span>
                  <p className="font-serif text-[2.5rem] md:text-[3rem] text-white leading-none">Gone</p>
                  <p className="font-sans text-[0.85rem] text-white/60 mt-1">LLC ceases to exist</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[1.125rem] text-white mb-2">Administrative Dissolution</h3>
                  <p className="font-sans text-[0.95rem] text-white/75 leading-[1.6] mb-4">
                    After 60+ days of suspension without resolution, the Secretary of State can <strong className="text-white">administratively dissolve</strong> your LLC — it ceases to exist as a legal entity. Reviving it requires filing a Certificate of Revival, paying all outstanding fees and penalties, and potentially re-filing formation documents from scratch. Your liability protection is gone during this entire period.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-sans text-[0.75rem] font-bold bg-red-600/40 text-white/90 px-3 py-1.5 rounded-full">LLC legally dead</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-red-600/40 text-white/90 px-3 py-1.5 rounded-full">Liability protection lost</span>
                    <span className="font-sans text-[0.75rem] font-bold bg-red-600/40 text-white/90 px-3 py-1.5 rounded-full">Must re-file to revive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional fee + summary row */}
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <div className="bg-green-500 rounded-[1rem] p-6 md:p-8">
              <span className="inline-block font-sans text-[0.7rem] font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-3">
                Additional — High Revenue LLCs
              </span>
              <h3 className="font-sans font-bold text-[1.125rem] text-white mb-2">LLC Fee for Gross Receipts</h3>
              <p className="font-sans text-[0.95rem] text-white/75 leading-[1.6] mb-5">
                LLCs with California gross receipts over $250,000 owe an additional annual fee on top of the $800 franchise tax. Late payment triggers the same 5%/month penalty structure.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { range: "$250K–$499K", fee: "$900" },
                  { range: "$500K–$999K", fee: "$2,500" },
                  { range: "$1M–$4.99M", fee: "$6,000" },
                  { range: "$5M+", fee: "$11,790" },
                ].map((tier) => (
                  <div key={tier.range} className="bg-white/10 rounded-lg p-3">
                    <p className="font-sans text-[0.75rem] text-white/50">{tier.range}</p>
                    <p className="font-serif text-[1.25rem] text-white">{tier.fee}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[1rem] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-[1.5rem] text-black mb-3">The compounding cost</h3>
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-6">
                  What starts as a missed $800 franchise tax payment escalates to <strong className="text-black">$800 + penalties + interest + reinstatement fees</strong> — often exceeding $2,000+ for a single year. And the non-financial consequences — loss of liability protection, inability to operate legally — can be far more costly than the fines.
                </p>
              </div>
              <Link
                href="/questionnaire"
                className="inline-flex items-center justify-center px-7 py-3 text-[0.95rem] font-sans font-medium text-white bg-green-800 rounded-full hover:bg-green-600 transition-colors duration-200 cursor-pointer w-fit"
              >
                Protect Your LLC Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Who Needs Management ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            {/* Left column */}
            <div>
              <ChapterBadge number="04" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Ongoing compliance management is essential if you
                are&hellip;
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-8">
                Whether you just formed your LLC or have been operating for
                years, professional management ensures your business stays
                protected and in good standing with the state of California.
              </p>
              <ImagePlaceholder
                label="Business owners reviewing compliance documents"
                aspect="16/9"
                src="https://images.unsplash.com/photo-1775363949971-0e4919c66856?auto=format&fit=crop&w=1400&q=80"
              />
            </div>

            {/* Right column — profile cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "A busy business owner",
                  text: "You're focused on running your business — serving clients, managing operations, growing revenue. You don't have time to track filing deadlines, prepare state forms, or monitor Franchise Tax Board correspondence. One missed deadline shouldn't put your entire business at risk.",
                },
                {
                  title: "A first-time LLC owner",
                  text: "You recently formed your LLC and aren't sure what ongoing obligations California requires. The compliance landscape is confusing — biennial filings, annual taxes, record maintenance — and the penalties for getting it wrong are steep.",
                },
                {
                  title: "A multi-member LLC",
                  text: "With multiple members, your LLC has additional record-keeping obligations — membership changes, capital contributions, distribution records, and updated Operating Agreements. Keeping all members informed and all records current requires systematic management.",
                },
                {
                  title: "An out-of-state owner",
                  text: "You live outside California but operate a California LLC. You need a registered agent in the state, and staying on top of California-specific tax deadlines and filing requirements from another state adds extra complexity.",
                },
                {
                  title: "A real estate investor",
                  text: "You hold one or more California properties in separate LLCs. Each LLC has its own compliance obligations — its own franchise tax, its own Statement of Information, its own records. Managing compliance across multiple entities without professional help is a recipe for missed deadlines.",
                },
                {
                  title: "A growing or changing business",
                  text: "Your business is adding members, changing its management structure, expanding to new locations, or evolving its operations. Each change triggers amendment requirements with the state. Professional management ensures every change is documented and filed correctly.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-ivory-200 rounded-[1rem] p-6"
                >
                  <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 How It Works ── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            {/* Left column — steps */}
            <div>
              <ChapterBadge number="05" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-[2.5rem]">
                Getting started with ongoing management takes four simple steps
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Submit your LLC details",
                    text: "Complete our questionnaire with your LLC information — formation date, EIN, current members, registered agent details, and any known compliance gaps. If you formed your LLC with us, we already have everything we need. Takes about 5 minutes.",
                  },
                  {
                    step: "02",
                    title: "We audit your compliance",
                    text: "Our team conducts a full compliance audit of your LLC within 1-2 business days. We check your standing with the Secretary of State, verify Franchise Tax Board status, review your filing history, and identify any delinquencies, upcoming deadlines, or record gaps.",
                  },
                  {
                    step: "03",
                    title: "Resolve any issues",
                    text: "If your LLC has outstanding compliance issues — missed filings, unpaid taxes, expired registrations — we create a remediation plan and handle everything needed to bring your LLC back into good standing before activating ongoing management.",
                  },
                  {
                    step: "04",
                    title: "Ongoing management begins",
                    text: "Once your LLC is in good standing, we activate your compliance calendar, set up registered agent service, and begin proactive management. Every filing, every tax payment, every record update is handled by our team. You receive notifications through your secure portal.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="bg-white rounded-[1rem] p-6 flex gap-5"
                  >
                    <span className="font-serif text-[2rem] text-green-800 leading-none shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-[1.25rem] leading-[1.2] text-black mb-2">
                        {s.title}
                      </h3>
                      <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — video + CTA */}
            <div className="space-y-6 lg:pt-[4.5rem]">
              <VideoPlaceholder label="How our compliance management process works" duration="3 min" variant="dark" />
              <div className="bg-green-800 rounded-[1rem] p-8">
                <h3 className="font-serif text-[1.5rem] text-white mb-3">
                  Ready to get started?
                </h3>
                <p className="font-sans text-[0.95rem] text-white/70 leading-[1.6] mb-6">
                  Submit a free compliance audit request &mdash; no payment, no
                  commitment. We&apos;ll review your LLC&apos;s current standing
                  and show you exactly what ongoing management looks like for
                  your business.
                </p>
                <Link
                  href="/questionnaire"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Start Your Compliance Audit
                </Link>
              </div>
              <ImagePlaceholder
                label="Client compliance dashboard preview"
                aspect="3/2"
                src="https://images.unsplash.com/photo-1758518730264-9235a1e5416b?auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 FAQ ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            {/* Left column */}
            <div>
              <ChapterBadge number="06" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-8">
                Common questions about ongoing LLC compliance
              </h2>

              <div className="bg-white rounded-[1rem] p-6 mb-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black text-black"
                    />
                  ))}
                </div>
                <blockquote className="font-serif text-[1.125rem] leading-[1.3] text-black mb-4">
                  &ldquo;I got a suspension notice from the FTB because I missed
                  my franchise tax deadline. Biz Legal got my LLC reinstated in
                  under two weeks and now handles everything. I haven&apos;t
                  thought about a deadline since.&rdquo;
                </blockquote>
                <p className="font-sans text-[0.85rem] font-bold text-black">
                  David R.
                </p>
                <p className="font-sans text-[0.8rem] text-gray-600">
                  Owner, Riverside Property Holdings LLC
                </p>
              </div>

              <VideoPlaceholder label="Client testimonials and success stories" duration="2 min" variant="teal" />
            </div>

            {/* Right column — accordions */}
            <div>
              <Accordion title="What ongoing filings does California require for an LLC?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  California requires two primary ongoing obligations: (1) An
                  annual minimum franchise tax of $800 paid to the Franchise Tax
                  Board every April 15, along with Form 568 (the LLC annual
                  return) and potentially Form 3522 (estimated LLC fee for
                  higher-revenue LLCs). (2) A Statement of Information (Form
                  LLC-12) filed with the Secretary of State every two years
                  during your designated filing period. Additionally, LLCs with
                  gross receipts above $250,000 owe an annual LLC fee ranging
                  from $900 to $11,790. Beyond these state requirements, your LLC
                  may have local business license renewals, industry-specific
                  permits, and federal tax obligations depending on your tax
                  election.
                </p>
              </Accordion>
              <Accordion title="My LLC has been suspended. Can you help reinstate it?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  Yes. LLC reinstatement is one of our most common services. To
                  reinstate a suspended California LLC, you must file all
                  delinquent tax returns, pay all outstanding franchise taxes,
                  penalties, and interest to the Franchise Tax Board, file any
                  delinquent Statements of Information with the Secretary of
                  State, and submit a reinstatement application. The process
                  typically takes 2-4 weeks depending on how many years of
                  delinquency need to be resolved. We handle the entire process
                  &mdash; calculating your total liability, preparing all
                  required filings, submitting payments, and confirming
                  reinstatement with both state agencies.
                </p>
              </Accordion>
              <Accordion title="Do single-member LLCs need management services?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  Absolutely. California imposes the same compliance obligations
                  on single-member LLCs as multi-member LLCs &mdash; the same
                  $800 annual franchise tax, the same biennial Statement of
                  Information, and the same consequences for non-compliance. In
                  fact, single-member LLCs face an additional risk: courts are
                  more willing to pierce the corporate veil of single-member LLCs
                  that fail to maintain proper records and observe LLC
                  formalities. Professional management helps demonstrate that
                  your LLC is a legitimate, separate entity &mdash; not just an
                  alter ego of the owner.
                </p>
              </Accordion>
              <Accordion title="What is the Statement of Information and when is it due?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  The Statement of Information (Form LLC-12) is a biennial
                  filing with the California Secretary of State that updates your
                  LLC&apos;s public record with current information:
                  manager/member names and addresses, the LLC&apos;s principal
                  business address, registered agent information, and a brief
                  description of business activities. Your initial filing is due
                  within 90 days of formation, and subsequent filings are due
                  every two years during a designated filing period based on your
                  original formation month. The filing fee is $20, and a $250
                  penalty applies for late filings.
                </p>
              </Accordion>
              <Accordion title="Can I handle LLC compliance myself instead of using a service?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  You can, but most business owners find it impractical.
                  California LLC compliance involves tracking multiple deadlines
                  across two separate state agencies (Secretary of State and
                  Franchise Tax Board), preparing and filing specific forms with
                  exact information, calculating variable tax obligations based
                  on gross receipts, maintaining corporate records that will
                  withstand legal scrutiny, and staying current with regulatory
                  changes that affect your obligations. A single missed deadline
                  can result in penalties that far exceed the cost of
                  professional management.
                </p>
              </Accordion>
              <Accordion title="What happens if I change my LLC's members or management structure?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  Any change to your LLC&apos;s members, managers, management
                  structure, name, or principal address requires updating your
                  state records. Changes to the Articles of Organization (such as
                  name changes or management structure changes) require filing an
                  Amendment (Form LLC-2) with the Secretary of State ($30 filing
                  fee). Changes to internal matters like membership percentages,
                  profit allocation, or voting rights require updating your
                  Operating Agreement &mdash; which doesn&apos;t require a state
                  filing but should be properly documented and signed by all
                  members.
                </p>
              </Accordion>
              <Accordion title="Is the registered agent service included with management?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
                  Yes. Our registered agent service is included at no additional
                  cost with our management package. This means we maintain a
                  professional California street address on your public filings,
                  accept all service of process and state correspondence on your
                  behalf, scan and upload documents to your secure portal within
                  one business day, and send you immediate email and SMS
                  notifications when documents are received. If you&apos;re
                  currently using another registered agent, we handle the
                  transition &mdash; filing the necessary change of agent form
                  with the Secretary of State and notifying your previous agent.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 Final CTA ── */}
      <section className="bg-green-800 py-[4rem] md:py-[5.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-center">
            <div>
              <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-white mb-5">
                Never miss a California LLC deadline again
              </h2>
              <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
                Submit a free compliance audit request &mdash; no payment, no
                commitment. We&apos;ll review your LLC&apos;s current standing,
                identify any issues, and show you exactly what ongoing management
                looks like for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/questionnaire"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Start Your Compliance Audit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              label="LLC compliance management team at work"
              aspect="4/3"
              src="https://images.unsplash.com/photo-1764173039051-987d1639b9d5?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
