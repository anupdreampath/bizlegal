"use client";

import PageShell from "@/components/PageShell";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Inline helper components                                          */
/* ------------------------------------------------------------------ */

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left font-sans text-[1rem] font-semibold text-black cursor-pointer"
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-4 font-sans text-[0.95rem] text-gray-600 leading-[1.7]">
          {children}
        </div>
      )}
    </div>
  );
}

function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-100 border-l-4 border-green-800 rounded-r-[0.75rem] p-5 mt-6">
      <p className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider mb-2">
        Key Takeaway
      </p>
      <div className="font-sans text-[0.95rem] text-gray-700 leading-[1.6]">
        {children}
      </div>
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

function ImagePlaceholder({
  label,
  aspect = "4/3",
  src,
}: {
  label: string;
  aspect?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div className="rounded-[1rem] overflow-hidden" style={{ aspectRatio: aspect }}>
        <img src={src} alt={label} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className="bg-gradient-to-br from-green-800 to-green-900 rounded-[1rem] flex flex-col items-center justify-center gap-3 p-6 relative overflow-hidden"
      style={{ aspectRatio: aspect }}
    >
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <span className="relative font-sans text-[0.85rem] text-white/50 text-center px-4">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const chapters = [
  { num: "01", label: "RULLCA Overview" },
  { num: "02", label: "Formation" },
  { num: "03", label: "Franchise Tax" },
  { num: "04", label: "SOS Filings" },
  { num: "05", label: "Liability Protection" },
  { num: "06", label: "Management" },
  { num: "07", label: "Operating Agreement" },
  { num: "08", label: "Licenses & Permits" },
  { num: "09", label: "Employment Law" },
  { num: "10", label: "Foreign LLCs" },
  { num: "11", label: "Dissolution" },
  { num: "12", label: "Recent Changes" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function CaliforniaBusinessLawPage() {
  return (
    <PageShell
      label="Resources"
      title="California business law for LLCs"
      description="A comprehensive legal reference covering the California statutes, regulations, filing requirements, and compliance obligations that govern Limited Liability Companies."
    >
      {/* ============================================================ */}
      {/*  Chapter Nav — ivory-200                                     */}
      {/* ============================================================ */}
      <section className="bg-ivory-200 py-6">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {chapters.map((ch) => (
              <a
                key={ch.num}
                href={`#chapter-${ch.num}`}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white font-sans text-[0.85rem] text-gray-600 hover:bg-green-800 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <span className="font-bold text-gray-400">{ch.num}</span>
                {ch.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  01 — RULLCA Overview — ivory-100                            */}
      {/* ============================================================ */}
      <section id="chapter-01" className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-4 mb-6">
                <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 01
                </span>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-6">
                The law that governs California LLCs
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  The California Revised Uniform Limited Liability Company Act
                  (RULLCA), codified at Corporations Code Sections 17701.01
                  through 17713.13, is the comprehensive statute governing every
                  LLC formed or registered in California. RULLCA took effect on
                  January 1, 2014, replacing the Beverly-Killea Limited Liability
                  Company Act of 1994 (former Corporations Code Title 2.5,
                  Sections 17000&ndash;17705).
                </p>
                <p>
                  All California LLCs &mdash; including those formed under the
                  prior act &mdash; became subject to RULLCA automatically, with
                  no requirement to re-file or amend organizational documents. The
                  transition was driven by a recognition that Beverly-Killea had
                  become outdated and inconsistent with the Revised Uniform
                  Limited Liability Company Act (Re-ULLCA) drafted by the Uniform
                  Law Commission in 2006.
                </p>
                <p>
                  Key changes included a new default framework for
                  member-managed LLCs (Section 17704.07), modernized fiduciary
                  duty standards (Sections 17704.09 and 17704.10), clearer rules
                  for transferability of membership interests (Section 17705.02),
                  and an explicit statutory framework for judicial and nonjudicial
                  dissolution. RULLCA also introduced a statutory conversion
                  framework (Sections 17710.01&ndash;17710.07) allowing LLCs to
                  convert to and from other entity types without dissolution and
                  re-formation.
                </p>
              </div>

              <Takeaway>
                RULLCA gives primacy to the Operating Agreement (Section
                17701.10). It can modify or override nearly all default
                provisions, making it the single most important legal document
                for any California LLC. For a broader overview of the LLC
                structure, see our{" "}
                <Link
                  href="/resources/llc-guide"
                  className="text-green-800 hover:opacity-60 transition-opacity cursor-pointer font-semibold"
                >
                  Complete Guide to California LLCs
                </Link>
                .
              </Takeaway>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[1rem] p-6">
                  <p className="font-serif text-[2.5rem] text-green-800 leading-none">
                    2014
                  </p>
                  <p className="font-sans text-[0.85rem] text-gray-500 mt-2">
                    Year RULLCA took effect
                  </p>
                </div>
                <div className="bg-white rounded-[1rem] p-6">
                  <p className="font-serif text-[1.5rem] text-green-800 leading-tight">
                    17701.01&ndash;17713.13
                  </p>
                  <p className="font-sans text-[0.85rem] text-gray-500 mt-2">
                    Corp. Code sections covered
                  </p>
                </div>
                <div className="bg-white rounded-[1rem] p-6">
                  <p className="font-serif text-[2.5rem] text-green-800 leading-none">
                    1994
                  </p>
                  <p className="font-sans text-[0.85rem] text-gray-500 mt-2">
                    Beverly-Killea Act origin
                  </p>
                </div>
                <div className="bg-white rounded-[1rem] p-6">
                  <p className="font-serif text-[2.5rem] text-green-800 leading-none">
                    2006
                  </p>
                  <p className="font-sans text-[0.85rem] text-gray-500 mt-2">
                    Uniform Law Commission Re-ULLCA
                  </p>
                </div>
              </div>
              <ImagePlaceholder
                label="California Business Law Illustration"
                aspect="16/9"
                src="/images/services/ca-business-law.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  02 — Formation Requirements — ivory-200                     */}
      {/* ============================================================ */}
      <section id="chapter-02" className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-4 mb-6">
                <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 02
                </span>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-6">
                Formation requirements under California law
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  A California LLC is formed by filing Articles of Organization
                  (Form LLC-1) with the California Secretary of State, as
                  required by Corporations Code Section 17702.01. The LLC comes
                  into legal existence on the date the Secretary of State files
                  the articles &mdash; not the date you submit them.
                </p>
                <p>
                  The Articles must include: the LLC&apos;s name (containing
                  &ldquo;Limited Liability Company,&rdquo; &ldquo;LLC,&rdquo; or
                  &ldquo;L.L.C.&rdquo; per Section 17701.08); the street address
                  of the LLC&apos;s designated office in California; the name
                  and address of the agent for service of process; and a
                  statement indicating whether the LLC is member-managed or
                  manager-managed.
                </p>
                <p>
                  Before filing, confirm name availability through the Secretary
                  of State&apos;s California Business Search database. You may
                  reserve a name for 60 days via Form LLC-NR ($10 fee).
                  California does not require an Operating Agreement for
                  formation, but RULLCA&apos;s default rules apply in its
                  absence &mdash; and those defaults may not match your
                  intentions.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/services/llc-formation"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Start Your LLC Formation
                </Link>
              </div>
            </div>

            {/* Right — Step cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  step: "Step 1",
                  title: "Choose & Reserve Name",
                  detail:
                    "Search CA Business database. Reserve with Form LLC-NR ($10 fee, 60-day hold).",
                },
                {
                  step: "Step 2",
                  title: "File Articles of Organization",
                  detail:
                    "Submit Form LLC-1 to the Secretary of State. Filing fee: $70.",
                },
                {
                  step: "Step 3",
                  title: "Select Processing Speed",
                  detail:
                    "Standard: 5-7 business days. Same-day: $350. Four-hour: $750 (Sacramento office only).",
                },
                {
                  step: "Step 4",
                  title: "Designate Agent for Service",
                  detail:
                    "Must be a California resident individual or registered corporate agent.",
                },
                {
                  step: "Step 5",
                  title: "Draft Operating Agreement",
                  detail:
                    "Not filed with the state, but strongly recommended before the LLC begins business.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-[1rem] p-6 flex gap-4"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-green-800 text-white font-sans text-[0.8rem] font-bold flex items-center justify-center">
                    {item.step.replace("Step ", "")}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-black text-[1rem]">
                      {item.title}
                    </p>
                    <p className="font-sans text-[0.9rem] text-gray-500 mt-1 leading-[1.5]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  03 — Franchise Tax Board — green-800                        */}
      {/* ============================================================ */}
      <section id="chapter-03" className="bg-green-800 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-white pt-4 mb-6">
            <span className="font-sans text-[0.8rem] font-bold text-white/60 uppercase tracking-wider">
              Chapter 03
            </span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-white mb-4">
            Franchise Tax Board obligations
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.7] max-w-[40rem] mb-10">
            Every California LLC &mdash; regardless of income, activity, or
            profitability &mdash; must pay an annual minimum franchise tax of
            $800 to the FTB (Revenue and Taxation Code Section 17941). This tax
            applies from the date of formation and is owed every year the LLC
            exists.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="bg-green-500 rounded-[1rem] p-6">
              <p className="font-serif text-[2rem] text-white leading-none mb-2">
                $800
              </p>
              <p className="font-sans font-bold text-white text-[0.9rem] mb-3">
                Annual Franchise Tax
              </p>
              <p className="font-sans text-[0.85rem] text-white/80 leading-[1.5]">
                Due by the 15th day of the 4th month after formation (first
                year) and April 15 each subsequent year. New LLCs may qualify
                for a first-year exemption under Section 17941(d).
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-500 rounded-[1rem] p-6">
              <p className="font-serif text-[2rem] text-white leading-none mb-2">
                $900&ndash;$11,790
              </p>
              <p className="font-sans font-bold text-white text-[0.9rem] mb-3">
                LLC Fee Schedule
              </p>
              <div className="space-y-1.5 font-sans text-[0.85rem] text-white/80 leading-[1.5]">
                <p>$250K&ndash;$499K gross: $900</p>
                <p>$500K&ndash;$999K gross: $2,500</p>
                <p>$1M&ndash;$4.99M gross: $6,000</p>
                <p>$5M+ gross: $11,790</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-green-500 rounded-[1rem] p-6">
              <p className="font-serif text-[2rem] text-white leading-none mb-2">
                10%
              </p>
              <p className="font-sans font-bold text-white text-[0.9rem] mb-3">
                Underpayment Penalty
              </p>
              <p className="font-sans text-[0.85rem] text-white/80 leading-[1.5]">
                Estimated fee (Form FTB 3536) due June 15. If underpaid, 10%
                penalty on the shortfall. Late payment adds 5% plus 0.5% per
                month on unpaid tax.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-green-500 rounded-[1rem] p-6">
              <p className="font-serif text-[2rem] text-white leading-none mb-2">
                $30
              </p>
              <p className="font-sans font-bold text-white text-[0.9rem] mb-3">
                Suspension &amp; Revivor
              </p>
              <p className="font-sans text-[0.85rem] text-white/80 leading-[1.5]">
                Non-payment triggers suspension: no lawsuits, no filings,
                voidable contracts. Revival requires all back taxes, fees,
                penalties, interest, plus a $30 revivor fee. See our{" "}
                <Link
                  href="/resources/tax-requirements"
                  className="text-white underline hover:opacity-80 transition-opacity"
                >
                  Tax Requirements guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  04 — Secretary of State Filings — ivory-100                 */}
      {/* ============================================================ */}
      <section id="chapter-04" className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-4 mb-6">
            <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
              Chapter 04
            </span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-4">
            Secretary of State filings
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] max-w-[42rem] mb-10">
            After formation, California LLCs have ongoing filing obligations
            with the Secretary of State. Failure to file triggers a $250 FTB
            penalty and can lead to administrative suspension. We track all
            deadlines through our{" "}
            <Link
              href="/services/compliance"
              className="text-green-800 hover:opacity-60 transition-opacity cursor-pointer font-semibold"
            >
              Compliance service
            </Link>
            .
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                form: "LLC-1",
                title: "Articles of Organization",
                fee: "$70",
                deadline: "At formation",
                detail:
                  "Creates the LLC. Must include name, designated office, agent for service, and management structure.",
              },
              {
                form: "LLC-12",
                title: "Statement of Information",
                fee: "$20",
                deadline: "Within 90 days, then every 2 years",
                detail:
                  "Discloses principal office, agent, manager/member names and addresses, and type of business. Public record.",
              },
              {
                form: "LLC-2",
                title: "Certificate of Amendment",
                fee: "$30",
                deadline: "As needed",
                detail:
                  "Amends Articles of Organization (name change, management structure switch, etc.).",
              },
              {
                form: "LLC-10",
                title: "Restated Articles",
                fee: "$30",
                deadline: "As needed",
                detail:
                  "Consolidates all prior amendments into a single updated document.",
              },
              {
                form: "LLC-4/7",
                title: "Short Form Cancellation",
                fee: "$0",
                deadline: "Upon dissolution",
                detail:
                  "Filed to dissolve the LLC when no debts or assets remain after winding up.",
              },
              {
                form: "LLC-4/8",
                title: "Certificate of Cancellation",
                fee: "$0",
                deadline: "Upon dissolution",
                detail:
                  "Long form cancellation for LLCs with remaining obligations. Final Form 568 also required.",
              },
            ].map((item) => (
              <div key={item.form} className="bg-white rounded-[1rem] p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory-200 font-sans text-[0.8rem] font-bold text-gray-600">
                    {item.form}
                  </span>
                  <span className="font-sans text-[0.85rem] font-bold text-green-800">
                    {item.fee}
                  </span>
                </div>
                <p className="font-sans font-semibold text-black text-[1rem] mb-1">
                  {item.title}
                </p>
                <p className="font-sans text-[0.8rem] text-green-800 mb-3">
                  {item.deadline}
                </p>
                <p className="font-sans text-[0.9rem] text-gray-500 leading-[1.5]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  05 — Liability Protection & Veil Piercing — ivory-200       */}
      {/* ============================================================ */}
      <section id="chapter-05" className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-4 mb-6">
                <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 05
                </span>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-6">
                Liability protection &amp; veil piercing
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Corporations Code Section 17703.04(a) provides the
                  foundational liability shield: a member shall not be
                  personally liable for any debt, obligation, or liability of
                  the LLC solely by reason of being a member. Creditors
                  generally cannot reach members&apos; personal assets &mdash;
                  homes, bank accounts, vehicles, investments &mdash; to
                  satisfy business debts.
                </p>
                <p>
                  However, California courts can &ldquo;pierce the LLC
                  veil&rdquo; under the alter ego doctrine. Section
                  17703.04(b) preserves this power. Courts apply the same
                  framework developed for corporations, as confirmed in{" "}
                  <em>Curci Investments, LLC v. Baldwin</em> (2017) 14
                  Cal.App.5th 214 and{" "}
                  <em>Postal Instant Press, Inc. v. Kaswa Corp.</em> (2008)
                  162 Cal.App.4th 1510.
                </p>
                <p>
                  The liability shield also does not protect against: personal
                  guarantees on leases or loans; a member&apos;s own tortious
                  conduct; unpaid employment taxes (trust fund recovery
                  penalty); or professional malpractice for licensed
                  professionals.
                </p>
              </div>

              {/* Accordion items */}
              <div className="mt-8">
                <Accordion title="Commingling of funds">
                  Mixing personal and business finances by using the LLC&apos;s
                  accounts for personal expenses or paying business costs from
                  personal accounts. Maintaining strict separation of funds is
                  essential to preserving the liability shield.
                </Accordion>
                <Accordion title="Inadequate capitalization">
                  Failing to fund the LLC with sufficient capital to cover its
                  reasonably foreseeable liabilities. Courts look at whether the
                  LLC was adequately funded from inception relative to the risks
                  of its business activities.
                </Accordion>
                <Accordion title="Failure to observe formalities">
                  Not using the LLC name in business dealings, not maintaining
                  separate records, or not distinguishing between the
                  member&apos;s personal affairs and the LLC&apos;s business.
                </Accordion>
                <Accordion title="Use of entity as a mere shell">
                  Treating the LLC as an alter ego or instrumentality of the
                  member rather than a separate entity. Courts look for whether
                  the entity has its own legitimate identity and purpose.
                </Accordion>
                <Accordion title="Fraud or injustice">
                  Using the LLC to perpetrate a fraud or where adhering to the
                  separate entity fiction would sanction an inequitable result.
                  This is the ultimate test courts apply.
                </Accordion>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6">
              <ImagePlaceholder
                label="Liability Protection Diagram"
                aspect="4/3"
                src="/images/resources/veil-piercing.svg"
              />
              <VideoPlaceholder label="Understanding Veil Piercing in California" duration="4 min" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  06 — Management Structure — ivory-100                       */}
      {/* ============================================================ */}
      <section id="chapter-06" className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-4 mb-6">
                <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 06
                </span>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-6">
                Management structure options
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  RULLCA provides two management structures: member-managed and
                  manager-managed. Under Section 17704.07(a), if the Articles
                  of Organization do not designate the LLC as manager-managed,
                  it is member-managed by default. This distinction affects who
                  can bind the LLC, the allocation of fiduciary duties, and
                  day-to-day governance.
                </p>
                <p>
                  The <strong>duty of loyalty</strong> (Section 17704.09)
                  requires accounting for benefits from LLC business, refraining
                  from adverse dealings, and refraining from competing with the
                  LLC. The <strong>duty of care</strong> (Section 17704.09(c))
                  requires refraining from grossly negligent, reckless, or
                  intentionally harmful conduct. The Operating Agreement can
                  modify the duty of loyalty if not manifestly unreasonable,
                  but cannot eliminate the duty of care or good faith obligation
                  (Section 17701.10(d)).
                </p>
              </div>
            </div>

            {/* Right — Comparison card */}
            <div>
              <div className="bg-white rounded-[1rem] overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Member-Managed */}
                  <div className="p-6 border-r border-gray-100">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-sans text-[0.8rem] font-bold mb-4">
                      Default
                    </div>
                    <p className="font-sans font-bold text-black text-[1.1rem] mb-4">
                      Member-Managed
                    </p>
                    <ul className="space-y-3">
                      {[
                        "All members have equal management rights",
                        "Every member can bind the LLC",
                        "Majority vote for ordinary decisions",
                        "Unanimous consent for extraordinary actions",
                        "All members owe fiduciary duties",
                        "Best for small, hands-on teams",
                      ].map((item) => (
                        <li
                          key={item}
                          className="font-sans text-[0.85rem] text-gray-600 leading-[1.5] flex gap-2"
                        >
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-green-800" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Manager-Managed */}
                  <div className="p-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-ivory-200 text-gray-600 font-sans text-[0.8rem] font-bold mb-4">
                      Opt-in
                    </div>
                    <p className="font-sans font-bold text-black text-[1.1rem] mb-4">
                      Manager-Managed
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Management vested in designated managers",
                        "Managers may or may not be members",
                        "Non-manager members cannot bind LLC",
                        "Non-manager members owe no fiduciary duties",
                        "Only managers owe duties of loyalty and care",
                        "Best for passive investor structures",
                      ].map((item) => (
                        <li
                          key={item}
                          className="font-sans text-[0.85rem] text-gray-600 leading-[1.5] flex gap-2"
                        >
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gray-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  07 — Operating Agreement — purple-900                       */}
      {/* ============================================================ */}
      <section id="chapter-07" className="bg-purple-900 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div>
              <div className="border-t-2 border-white pt-4 mb-6">
                <span className="font-sans text-[0.8rem] font-bold text-white/60 uppercase tracking-wider">
                  Chapter 07
                </span>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-white mb-6">
                Operating Agreement under RULLCA
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-white/80 leading-[1.7]">
                <p>
                  Under Section 17701.10(a), the Operating Agreement is defined
                  broadly as the agreement &mdash; whether oral, implied, in a
                  record, or any combination &mdash; of all the members of an
                  LLC. It does not need to be written or signed to be
                  enforceable, though a written agreement is strongly
                  recommended.
                </p>
                <p>
                  The Operating Agreement can govern virtually every aspect of
                  internal affairs: profit/loss allocation, distribution
                  rights, voting procedures, transfer restrictions, capital
                  contributions, dispute resolution, indemnification, buy-sell
                  provisions, non-compete covenants, and dissolution triggers.
                </p>
                <p>
                  Without an Operating Agreement, RULLCA defaults fill every
                  gap &mdash; and may produce unintended outcomes. For example,
                  profits and losses split equally regardless of capital
                  contributions (Section 17704.04), and any member can seek
                  judicial dissolution at any time (Section 17707.01).
                </p>
              </div>

              {/* Non-waivable provisions cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    title: "Good faith & fair dealing",
                    desc: "Cannot be eliminated. Standards may be prescribed if not manifestly unreasonable.",
                  },
                  {
                    title: "Court-decreed dissolution",
                    desc: "The power of a court to dissolve the LLC cannot be overridden.",
                  },
                  {
                    title: "Judicial remedies",
                    desc: "A member's right to seek judicial remedies cannot be waived.",
                  },
                  {
                    title: "Third-party rights",
                    desc: "Certain third-party rights cannot be adversely affected by the agreement.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-purple-700 rounded-[1rem] p-5"
                  >
                    <p className="font-sans font-semibold text-white text-[0.95rem] mb-2">
                      {item.title}
                    </p>
                    <p className="font-sans text-[0.85rem] text-white/70 leading-[1.5]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 justify-center">
              <VideoPlaceholder label="Why Your LLC Needs an Operating Agreement" duration="3 min" variant="green" />
              <div className="bg-purple-700 rounded-[1rem] p-6">
                <p className="font-sans font-bold text-white text-[0.9rem] uppercase tracking-wider mb-3">
                  Section 17701.10(d) &mdash; Non-Waivable Provisions
                </p>
                <p className="font-sans text-[0.95rem] text-white/80 leading-[1.6]">
                  The fiduciary duties of loyalty and care can be modified
                  within limits but not eliminated. Even single-member LLCs
                  benefit from a written Operating Agreement, as it documents
                  separateness and strengthens liability protection against
                  alter ego claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  08 — Business Licenses & Permits — ivory-100                */}
      {/* ============================================================ */}
      <section id="chapter-08" className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-4 mb-6">
            <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
              Chapter 08
            </span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-4">
            Business licenses &amp; permits
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] max-w-[42rem] mb-10">
            Forming an LLC creates the legal entity but does not grant the right
            to conduct business. Most LLCs need additional licenses and permits
            at the city, county, state, and sometimes federal level.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                agency: "CDTFA",
                title: "Seller's Permit",
                who: "Any LLC selling or leasing tangible personal property in California",
                how: "Apply through CDTFA. Authorizes collection of sales/use tax (7.25%–10%+ depending on locality).",
              },
              {
                agency: "CSLB",
                title: "Contractor's License",
                who: "LLCs performing construction work valued at $500 or more (labor + materials)",
                how: "Apply through the Contractors State License Board. Exam and insurance requirements.",
              },
              {
                agency: "ABC",
                title: "Alcohol License",
                who: "LLCs manufacturing, selling, or serving alcoholic beverages",
                how: "Apply through the Department of Alcoholic Beverage Control. Multiple license types by activity.",
              },
              {
                agency: "CDPH",
                title: "Health & Food Permits",
                who: "Healthcare facilities, food processing, and environmental health operations",
                how: "Apply through the Department of Public Health. Inspections required. Ongoing compliance.",
              },
              {
                agency: "City / County",
                title: "Business License",
                who: "Virtually all LLCs — nearly every CA jurisdiction requires one",
                how: "Fees vary from $50 to several hundred dollars annually, based on gross receipts or employee count.",
              },
              {
                agency: "DCA",
                title: "Professional Licenses",
                who: "40+ professions: real estate, accountants, cosmetologists, automotive repair, and more",
                how: "Apply through the Department of Consumer Affairs. Specific board for each profession.",
              },
            ].map((item) => (
              <div key={item.agency} className="bg-white rounded-[1rem] p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory-200 font-sans text-[0.75rem] font-bold text-gray-600 mb-4">
                  {item.agency}
                </span>
                <p className="font-sans font-semibold text-black text-[1rem] mb-2">
                  {item.title}
                </p>
                <p className="font-sans text-[0.85rem] text-gray-500 leading-[1.5] mb-3">
                  <span className="font-semibold text-gray-700">
                    Who needs it:
                  </span>{" "}
                  {item.who}
                </p>
                <p className="font-sans text-[0.85rem] text-gray-500 leading-[1.5]">
                  <span className="font-semibold text-gray-700">
                    How to get it:
                  </span>{" "}
                  {item.how}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  09 — Employment Law — ivory-200                             */}
      {/* ============================================================ */}
      <section id="chapter-09" className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div>
              <div className="border-t-2 border-black pt-4 mb-6">
                <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
                  Chapter 09
                </span>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-6">
                Employment law for LLC owners
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-6">
                California has some of the most extensive and
                employee-protective labor laws in the nation. Any LLC with
                employees or independent contractors must navigate significant
                regulatory obligations. Non-compliance can result in
                substantial penalties, lawsuits, and personal liability.
              </p>

              <Accordion title="AB 5 — Worker Classification">
                <p>
                  Assembly Bill 5 (Labor Code Section 2775) requires most
                  workers be classified as employees via the &ldquo;ABC
                  test.&rdquo; A worker is an employee unless (A) free from
                  control and direction, (B) performs work outside the hiring
                  entity&apos;s usual course of business, and (C) is
                  independently established in that trade. Misclassification
                  triggers $5,000&ndash;$25,000 per violation plus back wages,
                  benefits, and tax liability.
                </p>
              </Accordion>
              <Accordion title="Minimum Wage & Overtime">
                <p>
                  California&apos;s minimum wage is $16.00/hr (as of Jan 1,
                  2024) for all employers. Some cities have higher local
                  minimums (San Francisco, Los Angeles, Santa Monica). Overtime
                  is 1.5x for hours beyond 8/day or 40/week, and 2x for hours
                  beyond 12/day. California does not allow comp time for
                  private-sector employees.
                </p>
              </Accordion>
              <Accordion title="Cal/OSHA — Workplace Safety">
                <p>
                  All employers must maintain an Injury and Illness Prevention
                  Program (IIPP) per Labor Code Section 6401.7. Cal/OSHA
                  penalties range from $18,000 for serious violations to over
                  $156,000 for willful or repeat violations.
                </p>
              </Accordion>
              <Accordion title="FEHA — Anti-Discrimination">
                <p>
                  The Fair Employment and Housing Act (Government Code Section
                  12940) prohibits discrimination based on race, religion,
                  color, national origin, disability, sex, gender identity,
                  sexual orientation, age (40+), marital status, and more.
                  Applies to employers with 5+ employees. Violations carry
                  uncapped compensatory and punitive damages.
                </p>
              </Accordion>
              <Accordion title="Workers' Compensation">
                <p>
                  All employers must carry workers&apos; comp insurance with no
                  exceptions based on size (Labor Code Section 3700). Failure
                  is a criminal misdemeanor with fines up to $100,000 and/or
                  imprisonment. The LLC can be assessed up to $100,000 by the
                  Division of Labor Standards Enforcement.
                </p>
              </Accordion>
            </div>

            {/* Right — Stat cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  stat: "$16.00/hr",
                  label: "State minimum wage (2024)",
                },
                {
                  stat: "$20.00/hr",
                  label: "Fast food worker minimum (AB 1228)",
                },
                {
                  stat: "$25.00/hr",
                  label: "Healthcare worker minimum (SB 525, phased)",
                },
                {
                  stat: "$5K–$25K",
                  label: "Misclassification penalty per violation",
                },
                {
                  stat: "$100K",
                  label: "Max workers' comp non-compliance fine",
                },
                {
                  stat: "$156K+",
                  label: "Cal/OSHA willful violation penalty",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-[1rem] p-5 flex items-center gap-5"
                >
                  <p className="font-serif text-[1.75rem] text-green-800 leading-none shrink-0 min-w-[6rem]">
                    {item.stat}
                  </p>
                  <p className="font-sans text-[0.9rem] text-gray-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  10 — Foreign LLC Registration — ivory-100                   */}
      {/* ============================================================ */}
      <section id="chapter-10" className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-4 mb-6">
            <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
              Chapter 10
            </span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-6">
            Foreign LLC registration
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
              <p>
                An LLC formed in another state or country that &ldquo;transacts
                intrastate business&rdquo; in California must register as a
                foreign LLC (Corporations Code Section 17708.02). Registration
                requires filing Form LLC-5 with a $70 fee.
              </p>
              <p>
                RULLCA defines &ldquo;transacting intrastate business&rdquo;
                broadly. Activities that generally trigger registration
                include: maintaining an office or warehouse in California,
                having CA employees, soliciting orders accepted in CA, entering
                into contracts performed in CA, and owning or leasing CA real
                property for business use.
              </p>
              <p>
                Section 17708.03 lists activities that do <em>not</em>{" "}
                constitute transacting business: maintaining a bank account,
                holding meetings, owning property through an agent, selling
                through independent contractors, or isolated transactions
                completed within 180 days.
              </p>

              <Takeaway>
                An unregistered foreign LLC cannot maintain or defend lawsuits
                in California courts (Section 17708.07) and faces a $20/day
                penalty for each day it transacts business without
                registration. Foreign LLCs are subject to the same $800 annual
                franchise tax, LLC fee schedule, and Statement of Information
                requirements as domestic LLCs.
              </Takeaway>
            </div>

            <div>
              <div className="bg-white rounded-[1rem] p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-ivory-200 font-sans text-[0.8rem] font-bold text-gray-600 mb-4">
                  LLC-5
                </span>
                <p className="font-sans font-semibold text-black text-[1.1rem] mb-2">
                  Application to Register
                </p>
                <p className="font-sans text-[0.85rem] text-green-800 font-bold mb-4">
                  $70 filing fee
                </p>
                <div className="space-y-2 font-sans text-[0.85rem] text-gray-500 leading-[1.5]">
                  <p>Same $800/yr franchise tax as domestic LLCs</p>
                  <p>Same LLC fee schedule on CA-source income</p>
                  <p>Same Statement of Information (LLC-12) requirements</p>
                  <p>Must designate a CA agent for service of process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  11 — Dissolution — ivory-200                                */}
      {/* ============================================================ */}
      <section id="chapter-11" className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-4 mb-6">
            <span className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
              Chapter 11
            </span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-4">
            Dissolution &amp; winding up
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] max-w-[42rem] mb-10">
            California law provides several paths to dissolve an LLC. After
            dissolution, the LLC must wind up affairs under Section 17707.05
            and file a Certificate of Cancellation (no fee).
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {/* Voluntary */}
            <div className="bg-white rounded-[1rem] p-6">
              <p className="font-sans font-bold text-black text-[1.1rem] mb-3">
                Voluntary Dissolution
              </p>
              <p className="font-sans text-[0.85rem] text-gray-500 leading-[1.5] mb-4">
                Under Section 17707.01, by consent of all or a majority of
                members (per the Operating Agreement), or by consent of members
                owning a majority of current profit interests.
              </p>
              <div className="space-y-2">
                {[
                  "Trigger event in Operating Agreement",
                  "Member vote or written consent",
                  "Complete existing obligations",
                  "Liquidate & distribute assets",
                  "File Form LLC-4/7 or LLC-4/8",
                  "File final Form 568 with FTB",
                ].map((step) => (
                  <p
                    key={step}
                    className="font-sans text-[0.8rem] text-gray-600 flex gap-2"
                  >
                    <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-green-800" />
                    {step}
                  </p>
                ))}
              </div>
            </div>

            {/* Judicial */}
            <div className="bg-white rounded-[1rem] p-6">
              <p className="font-sans font-bold text-black text-[1.1rem] mb-3">
                Judicial Dissolution
              </p>
              <p className="font-sans text-[0.85rem] text-gray-500 leading-[1.5] mb-4">
                Under Section 17707.03, a court may dissolve an LLC on
                application by a member or transferee when certain conditions
                are met.
              </p>
              <div className="space-y-2">
                {[
                  "Not practicable to carry on business",
                  "Illegal or fraudulent management",
                  "Assets being misapplied or wasted",
                  "Members are deadlocked",
                  "Court may appoint a receiver",
                  "Broad judicial discretion in remedies",
                ].map((step) => (
                  <p
                    key={step}
                    className="font-sans text-[0.8rem] text-gray-600 flex gap-2"
                  >
                    <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-green-800" />
                    {step}
                  </p>
                ))}
              </div>
            </div>

            {/* Administrative */}
            <div className="bg-white rounded-[1rem] p-6">
              <p className="font-sans font-bold text-black text-[1.1rem] mb-3">
                Administrative Dissolution
              </p>
              <p className="font-sans text-[0.85rem] text-gray-500 leading-[1.5] mb-4">
                Occurs when the FTB or Secretary of State suspends the LLC for
                failure to pay taxes or file required statements.
              </p>
              <div className="space-y-2">
                {[
                  "FTB or SOS suspends the entity",
                  "LLC loses right to conduct business",
                  "Cannot maintain or defend lawsuits",
                  "Prolonged suspension effectively terminates",
                  "Revival requires full payment of arrears",
                  "Applicable revivor fees must be paid",
                ].map((step) => (
                  <p
                    key={step}
                    className="font-sans text-[0.8rem] text-gray-600 flex gap-2"
                  >
                    <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-green-800" />
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  12 — Recent Changes — green-800                             */}
      {/* ============================================================ */}
      <section id="chapter-12" className="bg-green-800 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-white pt-4 mb-6">
            <span className="font-sans text-[0.8rem] font-bold text-white/60 uppercase tracking-wider">
              Chapter 12
            </span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-white mb-4">
            Recent legislative changes
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.7] max-w-[42rem] mb-10">
            California business law is not static. The Legislature regularly
            enacts bills affecting LLC formation, taxation, and compliance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "First-Year Tax Exemption",
                desc: "Revenue and Taxation Code Section 17941(d) exempts new LLCs from the $800 minimum franchise tax during their first taxable year. Originally enacted in 2021 and extended through subsequent action. Verify current status for your formation year.",
              },
              {
                title: "BOI Reporting (Federal CTA)",
                desc: "The Corporate Transparency Act requires most LLCs to file Beneficial Ownership Information reports with FinCEN. Enforcement timelines have faced legal challenges. Civil penalties of up to $591/day and criminal penalties of up to $10,000 and two years imprisonment.",
              },
              {
                title: "AB 1780 — SOI Updates",
                desc: "Expanded Statement of Information disclosure requirements and updated Form LLC-12. Always use the most current version when filing — outdated forms may be rejected.",
              },
              {
                title: "Expanded Cal/OSHA Rules",
                desc: "New requirements for heat illness prevention (Labor Code Section 6720+), workplace violence prevention plans (SB 553, effective July 1, 2024), and indoor air quality standards.",
              },
              {
                title: "Industry-Specific Minimum Wages",
                desc: "AB 1228 established a $20/hr minimum for certain fast food employees (April 1, 2024). SB 525 phases healthcare facility employee minimum wage to $25/hr. Verify your industry and location.",
              },
              {
                title: "Annual Wage Adjustments",
                desc: "California's statewide minimum wage is subject to annual adjustment. Many cities and counties impose higher local minimums. LLC employers must verify the applicable rate for their industry and location.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-green-500 rounded-[1rem] p-6">
                <p className="font-sans font-bold text-white text-[1rem] mb-3">
                  {item.title}
                </p>
                <p className="font-sans text-[0.85rem] text-white/80 leading-[1.5]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA — green-800                                             */}
      {/* ============================================================ */}
      <section className="bg-green-800 border-t border-green-700 py-[4rem] md:py-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="max-w-[42.5rem]">
            <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-white mb-5">
              Need help navigating California LLC law?
            </h2>
            <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
              Whether you&apos;re forming a new LLC, bringing an out-of-state
              LLC into California, or managing ongoing compliance, our team
              handles the legal filings so you can focus on your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/questionnaire"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Get Started
              </Link>
              <Link
                href="/services/compliance"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                Compliance Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Disclaimer — ivory-100                                      */}
      {/* ============================================================ */}
      <section className="bg-ivory-100 py-[2.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <p className="font-sans text-[0.8rem] text-gray-400 leading-[1.6] max-w-[48rem]">
            <span className="font-semibold text-gray-500">Disclaimer:</span>{" "}
            This article is for informational purposes only and does not
            constitute legal advice. California business law is complex, subject
            to frequent amendment, and its application depends on specific facts
            and circumstances. Nothing in this article creates an
            attorney-client relationship. Consult with a licensed California
            attorney for advice specific to your situation before making business
            or legal decisions.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
