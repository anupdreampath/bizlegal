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

export default function LLCGuidePage() {
  return (
    <PageShell
      heroImage="https://images.unsplash.com/photo-1769038947088-62455c949efc?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Person signing an LLC formation document — biz.legal California LLC guide"
      label="Resources"
      title="The complete guide to California LLCs"
      description="Everything you need to know about forming, managing, and maintaining a Limited Liability Company in California — from initial filing to ongoing compliance."
    >
      {/* Chapter nav */}
      <section className="bg-ivory-200 py-[2.5rem] overflow-x-auto">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="flex gap-3 min-w-max">
            {["What is an LLC?", "Why California?", "LLC vs Others", "Formation", "Operating Agreement", "Taxes", "Compliance"].map((ch) => (
              <span key={ch} className="px-4 py-2 bg-white rounded-full font-sans text-[0.85rem] font-medium text-black whitespace-nowrap">
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — What is an LLC? */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">Chapter 01</p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                What is an LLC?
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  A Limited Liability Company (LLC) is a business structure recognized under state law that creates a <strong>separate legal entity</strong> from its owners. In California, LLCs are governed by the California Revised Uniform Limited Liability Company Act (RULLCA), codified in Corporations Code Sections 17701.01 through 17713.13.
                </p>
                <p>
                  The &ldquo;limited liability&rdquo; in the name refers to the core benefit: members (owners) of an LLC are generally <strong>not personally responsible</strong> for the debts, obligations, or liabilities of the business. If your LLC is sued, creditors can go after the LLC&apos;s assets — but not your personal home, savings, retirement accounts, or other personal property.
                </p>
              </div>

              <Takeaway>
                An LLC creates a legal wall between your personal assets and your business liabilities. It&apos;s the simplest structure that provides real protection.
              </Takeaway>

              <Accordion title="How does an LLC differ from a sole proprietorship?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  A sole proprietorship is not a separate legal entity — it&apos;s just you doing business. There&apos;s zero liability protection: if the business is sued, your personal assets (home, savings, car) are fair game. An LLC creates a legal boundary that protects your personal assets. The tradeoff is a $70 filing fee, $800/year franchise tax, and modest ongoing compliance requirements.
                </p>
              </Accordion>
              <Accordion title="Can one person form an LLC?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Yes. A single-member LLC has one owner and is the most common type of LLC in California. It provides the same liability protection as a multi-member LLC. The IRS treats it as a &ldquo;disregarded entity&rdquo; by default, meaning income is reported on your personal tax return (Schedule C).
                </p>
              </Accordion>
              <Accordion title="Is an LLC the same as a corporation?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  No. Both provide liability protection, but LLCs are simpler — no board of directors, no shareholder meetings, no corporate minutes. LLCs also have more flexible tax treatment (you can choose to be taxed as a sole proprietor, partnership, S-Corp, or C-Corp). Corporations are typically better for businesses raising venture capital or planning an IPO.
                </p>
              </Accordion>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="Video: What is an LLC? (2 min)" duration="2 min" variant="green" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "#1", label: "Most popular business structure in the US" },
                  { number: "70%+", label: "Of new CA businesses choose LLC" },
                  { number: "$70", label: "California formation filing fee" },
                  { number: "2014", label: "Year RULLCA took effect in CA" },
                ].map((s) => (
                  <div key={s.label} className="bg-ivory-200 rounded-[1rem] p-5">
                    <p className="font-serif text-[1.5rem] text-black">{s.number}</p>
                    <p className="font-sans text-[0.75rem] text-gray-600 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <ImagePlaceholder label="Infographic: LLC Structure Diagram" aspect="4/3" src="https://images.unsplash.com/photo-1758518730083-4c12527b6742?auto=format&fit=crop&w=1400&q=80" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Why California */}
      <section className="bg-green-800 py-[4rem] md:py-[5.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <div className="border-t-2 border-white pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-white/50 uppercase tracking-wider">Chapter 02</p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-6">
                Why form an LLC in California?
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-white/70 leading-[1.7]">
                <p>
                  California is the world&apos;s fifth-largest economy with a GDP exceeding $3.6 trillion. If your business operates in California, serves California customers, or has any physical presence in the state, forming a California LLC is the most straightforward choice.
                </p>
                <p>
                  Some business owners consider forming in &ldquo;cheaper&rdquo; states like Wyoming or Delaware. But if you do business in California, you&apos;ll owe the $800 franchise tax regardless of where your LLC is formed — plus you&apos;ll pay registration fees in both states. For most CA businesses, forming in-state is both simpler and less expensive.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🛡️", title: "Liability Protection", text: "Personal assets shielded from business debts and lawsuits" },
                { icon: "📊", title: "Tax Flexibility", text: "Choose between 4 different tax classifications" },
                { icon: "⚡", title: "Simple Management", text: "No board of directors or shareholder meetings required" },
                { icon: "🏦", title: "Credibility", text: "Banks, vendors, and clients take LLCs more seriously" },
              ].map((card) => (
                <div key={card.title} className="bg-green-500 rounded-[1rem] p-5">
                  <p className="text-[1.5rem] mb-2">{card.icon}</p>
                  <h3 className="font-sans font-bold text-[0.9rem] text-white mb-1">{card.title}</h3>
                  <p className="font-sans text-[0.8rem] text-white/60 leading-[1.5]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — LLC vs Others */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-6 mb-6">
            <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">Chapter 03</p>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            LLC vs. other business structures
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[2.5rem] max-w-[36rem]">
            Click each structure to see how it compares to an LLC on the factors that matter most.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { name: "Sole Proprietorship", verdict: "Not recommended", verdictColor: "text-red-600", protection: "None", tax: "Schedule C", complexity: "Minimal", cost: "$0 formation", best: "Very low-risk side projects only", detail: "Zero liability protection — your personal home, savings, and property are fully exposed to business debts and lawsuits. The only advantage is simplicity. For any business with meaningful revenue, the $800/year franchise tax is a small price for the LLC's liability shield." },
              { name: "General Partnership", verdict: "Avoid", verdictColor: "text-red-600", protection: "None", tax: "Form 1065 + K-1s", complexity: "Low", cost: "$0 formation", best: "No scenario — use a multi-member LLC instead", detail: "Each partner is jointly and severally liable for ALL partnership debts and the actions of every other partner. A multi-member LLC provides the exact same tax treatment (partnership taxation) with full liability protection." },
              { name: "S-Corporation (election)", verdict: "Consider at $60K+ income", verdictColor: "text-green-800", protection: "Yes", tax: "Form 1120S + K-1s", complexity: "Medium", cost: "+$1K–$3K/yr payroll costs", best: "LLC owners earning $60K+ net who want to cut SE tax", detail: "Not a separate entity — it's a tax election you make on your LLC. Only your 'reasonable salary' is subject to payroll taxes; distributions are not. Can save $5K–$20K+/year at higher income levels. Adds payroll compliance and California's 1.5% S-Corp tax." },
              { name: "C-Corporation", verdict: "Only for VC-backed businesses", verdictColor: "text-gray-600", protection: "Yes", tax: "Form 1120 (double taxed)", complexity: "High", cost: "High compliance costs", best: "Raising venture capital, issuing stock options, planning IPO", detail: "Double taxation: corporate income taxed at 21% federal + 8.84% CA, then dividends taxed again on shareholders' returns. Requires board of directors, annual meetings, corporate minutes. Overkill for most small and mid-size businesses." },
            ].map((entity) => (
              <div key={entity.name} className="bg-ivory-200 rounded-[1rem] p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-[1.5rem] text-black">{entity.name}</h3>
                  <span className={`font-sans text-[0.75rem] font-bold uppercase tracking-wider ${entity.verdictColor}`}>{entity.verdict}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Liability Protection", value: entity.protection },
                    { label: "Tax Filing", value: entity.tax },
                    { label: "Complexity", value: entity.complexity },
                    { label: "Additional Cost", value: entity.cost },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className="font-sans text-[0.7rem] font-bold text-gray-400 uppercase tracking-wider">{row.label}</p>
                      <p className="font-sans text-[0.85rem] text-black font-medium">{row.value}</p>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6] mb-3">{entity.detail}</p>
                <p className="font-sans text-[0.8rem] font-bold text-black">Best for: <span className="font-normal text-gray-600">{entity.best}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Formation */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">Chapter 04</p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                How to form a California LLC
              </h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Choose your LLC name", text: "Must include 'LLC' or 'Limited Liability Company.' Must be distinguishable from existing entities in the CA Secretary of State database. Can be reserved for 60 days ($10 fee)." },
                  { step: "02", title: "File Articles of Organization", text: "File Form LLC-1 with the Secretary of State. Includes your LLC name, registered agent, management type, and business purpose. Filing fee: $70. Standard processing: 5–7 business days." },
                  { step: "03", title: "Draft an Operating Agreement", text: "Not legally required, but essential. Defines ownership, management, profit distribution, voting, transfer restrictions, and dissolution procedures. This is your LLC's constitution." },
                  { step: "04", title: "Obtain your EIN", text: "Apply to the IRS for an Employer Identification Number (Form SS-4). Needed for bank accounts, tax filing, and hiring. Free from the IRS, typically issued in 1–2 days." },
                  { step: "05", title: "File Statement of Information", text: "File Form LLC-12 within 90 days of formation ($20 fee). Reports your managers/members, business address, and registered agent to the Secretary of State." },
                ].map((s) => (
                  <div key={s.step} className="bg-white rounded-[1rem] p-5">
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-[1.5rem] text-green-800 flex-shrink-0 w-8">{s.step}</span>
                      <div>
                        <h3 className="font-sans font-bold text-[1rem] text-black mb-1">{s.title}</h3>
                        <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">{s.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="Video: LLC Formation Step-by-Step (5 min)" duration="5 min" variant="dark" />
              <ImagePlaceholder label="Infographic: Formation Timeline" aspect="3/2" src="https://images.unsplash.com/photo-1775363949849-cdc2167914a4?auto=format&fit=crop&w=1400&q=80" />

              <div className="bg-green-800 rounded-[1rem] p-8">
                <h3 className="font-serif text-[1.5rem] text-white mb-3">Want us to handle it?</h3>
                <p className="font-sans text-[0.95rem] text-white/70 leading-[1.6] mb-5">
                  We manage the entire formation process — name search, all filings, Operating Agreement, EIN, and full document delivery.
                </p>
                <Link href="/services/llc-formation" className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Operating Agreement */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">Chapter 05</p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                The Operating Agreement — your LLC&apos;s most important document
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-6">
                California doesn&apos;t legally require an Operating Agreement, but operating without one means the state&apos;s default rules govern your LLC — and those defaults rarely match your actual intentions.
              </p>

              <Takeaway>
                A comprehensive Operating Agreement is typically 15–30 pages. Anything shorter is likely missing critical provisions. Templates from the internet often use language from other states&apos; laws.
              </Takeaway>
            </div>

            <ImagePlaceholder label="Image: Sample Operating Agreement" aspect="4/5" src="https://images.unsplash.com/photo-1769038947088-62455c949efc?auto=format&fit=crop&w=1400&q=80" />
          </div>

          {/* What it should cover */}
          <div className="mt-[3rem]">
            <p className="font-sans font-bold text-[0.85rem] text-black uppercase tracking-wider mb-5">What your Operating Agreement should cover</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Ownership", items: ["Member names & percentages", "Capital contributions", "Admission of new members", "Anti-dilution provisions"] },
                { title: "Management", items: ["Member vs manager-managed", "Decision authority", "Spending limits", "Hiring/firing power"] },
                { title: "Money", items: ["Profit/loss allocation", "Distribution schedules", "Tax distribution requirements", "Capital call procedures"] },
                { title: "Exit & Disputes", items: ["Transfer restrictions", "Buyout provisions & valuation", "Death/disability triggers", "Mediation vs arbitration"] },
              ].map((col) => (
                <div key={col.title} className="bg-ivory-200 rounded-[1rem] p-5">
                  <h4 className="font-sans font-bold text-[0.9rem] text-black mb-3">{col.title}</h4>
                  <div className="space-y-2">
                    {col.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-green-800 mt-0.5 font-bold text-[0.8rem]">&#x2713;</span>
                        <span className="font-sans text-[0.8rem] text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Taxes */}
      <section className="bg-purple-900 py-[4rem] md:py-[5.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-white pt-6 mb-6">
            <p className="text-[0.8rem] font-sans font-bold text-white/50 uppercase tracking-wider">Chapter 06</p>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4 max-w-[42.5rem]">
            California LLC taxes at a glance
          </h2>
          <p className="font-sans text-[1rem] text-white/60 leading-[1.6] mb-[2.5rem] max-w-[36rem]">
            Here&apos;s what every California LLC owes — no surprises.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { amount: "$800/yr", name: "Franchise Tax", detail: "Required for every LLC, regardless of income. Due April 15 annually. Paid to Franchise Tax Board.", form: "Form 3522" },
              { amount: "$0–$11,790/yr", name: "LLC Fee", detail: "Additional fee for LLCs with CA gross income over $250K. Based on revenue, not profit.", form: "Form 3536" },
              { amount: "1%–13.3%", name: "CA Income Tax", detail: "LLC income passes through to members and is taxed at personal rates — the highest in the nation.", form: "Form 568" },
              { amount: "15.3%", name: "Self-Employment Tax", detail: "Federal SE tax on active LLC members' net income. Can be reduced with S-Corp election.", form: "Schedule SE" },
            ].map((tax) => (
              <div key={tax.name} className="bg-purple-700 rounded-[1rem] p-6">
                <p className="font-serif text-[2rem] text-white mb-1">{tax.amount}</p>
                <h3 className="font-sans font-bold text-[0.95rem] text-white mb-2">{tax.name}</h3>
                <p className="font-sans text-[0.8rem] text-white/60 leading-[1.5] mb-3">{tax.detail}</p>
                <span className="font-sans text-[0.7rem] font-bold text-white/40 uppercase tracking-wider">{tax.form}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/resources/tax-requirements" className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-purple-900 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
              Read the Full Tax Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Compliance */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-[3rem] lg:gap-[5rem]">
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">Chapter 07</p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Ongoing compliance — what you owe California every year
              </h2>

              <div className="space-y-4">
                {[
                  { what: "Statement of Information", when: "Within 90 days, then every 2 years", fee: "$20", penalty: "$250 late penalty → dissolution" },
                  { what: "Franchise Tax", when: "April 15 annually", fee: "$800", penalty: "5% + 0.5%/month → LLC suspension" },
                  { what: "Form 568 (LLC Return)", when: "April 15 annually", fee: "N/A", penalty: "Late filing penalties" },
                  { what: "BOI Report (FinCEN)", when: "Within 90 days of formation", fee: "$0", penalty: "$591/day civil penalty" },
                  { what: "Registered Agent", when: "Ongoing — must always have one", fee: "Varies", penalty: "Default judgments possible" },
                  { what: "Business Licenses", when: "Varies by city/county", fee: "Varies", penalty: "Operating illegally; fines" },
                ].map((row) => (
                  <div key={row.what} className="bg-ivory-200 rounded-[1rem] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex-1">
                      <p className="font-sans text-[0.9rem] font-bold text-black">{row.what}</p>
                      <p className="font-sans text-[0.8rem] text-gray-600">{row.when}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-sans text-[0.9rem] font-bold text-green-800">{row.fee}</p>
                      <p className="font-sans text-[0.7rem] text-red-600">{row.penalty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Takeaway>
                Missing even one of these obligations can trigger penalties, suspension, or loss of liability protection. Our management services handle all of them automatically.
              </Takeaway>

              <Link href="/services/llc-management" className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-white bg-green-800 rounded-full hover:bg-green-600 transition-colors duration-200 cursor-pointer mt-4">
                Learn About LLC Management
              </Link>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="Video: Annual Compliance Checklist (3 min)" duration="3 min" variant="blue" />
              <ImagePlaceholder label="Infographic: Compliance Calendar" aspect="3/4" src="https://images.unsplash.com/photo-1775363949971-0e4919c66856?auto=format&fit=crop&w=1400&q=80" />
            </div>
          </div>
        </div>
      </section>

      {/* Asset Protection */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <div className="border-t-2 border-black pt-6 mb-6">
                <p className="text-[0.8rem] font-sans font-bold text-gray-400 uppercase tracking-wider">Chapter 08</p>
              </div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Asset protection & veil piercing — how to keep your protection intact
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-6">
                LLC liability protection is not absolute. Courts can &ldquo;pierce the veil&rdquo; and hold you personally liable if you treat the LLC as your personal piggy bank rather than a legitimate separate entity.
              </p>
            </div>

            <ImagePlaceholder label="Infographic: Veil Piercing Risk Factors" aspect="4/3" src="https://images.unsplash.com/photo-1767972159674-460283907c21?auto=format&fit=crop&w=1400&q=80" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {[
              { risk: "Commingling Funds", fix: "Keep a completely separate business bank account" },
              { risk: "Inadequate Capital", fix: "Fund the LLC with enough capital for its obligations" },
              { risk: "Skipping Formalities", fix: "Maintain records, use the LLC name on all documents" },
              { risk: "Personal Expenses", fix: "Never pay personal bills from the business account" },
              { risk: "No Operating Agreement", fix: "Have a comprehensive, signed Operating Agreement" },
            ].map((item) => (
              <div key={item.risk} className="bg-white rounded-[1rem] p-5">
                <p className="font-sans text-[0.75rem] font-bold text-red-600 uppercase tracking-wider mb-2">Risk</p>
                <h4 className="font-sans font-bold text-[0.9rem] text-black mb-3">{item.risk}</h4>
                <p className="font-sans text-[0.75rem] font-bold text-green-800 uppercase tracking-wider mb-1">Prevention</p>
                <p className="font-sans text-[0.8rem] text-gray-600 leading-[1.5]">{item.fix}</p>
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
                Ready to form your California LLC?
              </h2>
              <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
                Now that you understand how LLCs work, let us handle the
                formation. Submit a free request — no payment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/questionnaire" className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                  Start Your LLC
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer">
                  Talk to Our Team
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <VideoPlaceholder label="Video: Why Clients Choose Biz Legal (2 min)" duration="2 min" variant="teal" />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-ivory-100 py-[2rem]">
        <div className="max-w-[48rem] mx-auto px-6">
          <p className="font-sans text-[0.8rem] text-gray-400 leading-[1.6]">
            <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal or tax advice.
            California LLC law is complex and subject to change. Consult with a licensed attorney or tax professional for advice specific to your situation.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
