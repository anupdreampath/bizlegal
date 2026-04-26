"use client";

import PageShell from "@/components/PageShell";
import Link from "next/link";
import { Star } from "lucide-react";
import { Accordion, Takeaway, ImagePlaceholder, VideoPlaceholder, StatCard, ChapterBadge, ChapterBadgeLight } from "@/components/Interactive";

export default function LLCFormationPage() {
  return (
    <PageShell
      heroImage="https://images.unsplash.com/photo-1769038947088-62455c949efc?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Person signing an LLC formation document — California LLC formation by biz.legal"
      label="LLC Formation"
      title="Form your California LLC the right way — the first time"
      description="We handle every detail of your LLC formation so you can launch with confidence. Attorney-reviewed documents, fast filing, zero guesswork."
    >
      {/* Section 1 — Why It Matters */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="01" />
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
                A properly formed LLC is the legal wall between your personal assets and your business liabilities. Getting it right from day one is not optional — it&apos;s foundational.
              </Takeaway>

              <Accordion title="What happens if my LLC is formed incorrectly?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Common formation errors include choosing a name too similar to an existing entity (causing rejection and delays), using a PO box for your registered agent (not allowed — must be a physical CA address), selecting the wrong management structure, or filing without an Operating Agreement. These errors can delay your launch, expose you to penalties, or weaken your liability protection if challenged in court.
                </p>
              </Accordion>
              <Accordion title="Can I form my LLC myself?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Yes, you can file directly with the Secretary of State. But the Articles of Organization are just one piece. You also need a properly drafted Operating Agreement (which the state doesn&apos;t provide), an EIN application, a Statement of Information filing, and organizational documents. Errors in any of these create legal vulnerabilities. Our service ensures everything is done correctly and reviewed by an attorney.
                </p>
              </Accordion>
              <Accordion title="How long does formation take?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Standard processing by the Secretary of State takes 5–7 business days. Expedited processing (24–48 hours) is available for an additional fee. After the Articles are approved, we obtain your EIN (1–2 days) and deliver your complete document package. Total: approximately 7–10 business days standard, or 3–5 days expedited.
                </p>
              </Accordion>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="Video: Why LLC Formation Matters (3 min)" duration="3 min" variant="green" />
              <div className="grid grid-cols-2 gap-4">
                <StatCard number="5,000+" label="LLCs formed in California" />
                <StatCard number="5–7 days" label="Standard filing time" />
                <StatCard number="24hr" label="Expedited option available" />
                <StatCard number="100%" label="Attorney-reviewed documents" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What's Included */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadge number="02" />
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            Everything included in your formation package
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[2.5rem] max-w-[36rem]">
            Nothing is left out, nothing is an upsell. Every document and filing your California LLC needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Name Search & Reservation",
                text: "We search the CA Secretary of State's database to confirm your name is available and meets all naming requirements. Optional 60-day reservation ($10).",
                includes: ["Database availability search", "Naming compliance review", "Alternative suggestions", "60-day reservation option"],
              },
              {
                title: "Articles of Organization",
                text: "We prepare and file Form LLC-1 with the Secretary of State — the document that legally creates your LLC. Filing fee: $70.",
                includes: ["Form LLC-1 preparation", "Business purpose statement", "Management structure designation", "Stamped filed copy"],
              },
              {
                title: "Custom Operating Agreement",
                text: "A comprehensive Operating Agreement drafted for your specific business — not a template. Covers ownership, management, distributions, exits, and disputes.",
                includes: ["Ownership structure & percentages", "Management authority & voting", "Profit/loss distribution", "Exit & buyout provisions"],
              },
              {
                title: "EIN / Federal Tax ID",
                text: "We apply to the IRS on your behalf. Your EIN is required for bank accounts, tax filing, hiring, and business credit. No IRS fee.",
                includes: ["IRS Form SS-4 preparation", "EIN application submission", "Confirmation letter", "Typically 1–2 business days"],
              },
              {
                title: "Statement of Information",
                text: "We file Form LLC-12 within your 90-day deadline. Reports your members, address, and registered agent to the Secretary of State. Fee: $20.",
                includes: ["Form LLC-12 preparation", "Manager/member info", "Deadline tracking", "Filing confirmation"],
              },
              {
                title: "Organizational Package",
                text: "Complete founding documents that banks, investors, and partners often request. Demonstrates your LLC is properly structured from day one.",
                includes: ["Organizational resolutions", "Membership certificates", "Compliance calendar", "Meeting minutes template"],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[1rem] p-6">
                <h3 className="font-serif text-[1.25rem] leading-[1.2] text-black mb-3">{item.title}</h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6] mb-4">{item.text}</p>
                <div className="space-y-2">
                  {item.includes.map((inc) => (
                    <div key={inc} className="flex items-start gap-2">
                      <span className="text-green-800 mt-0.5 font-bold text-[0.8rem]">&#x2713;</span>
                      <span className="font-sans text-[0.8rem] text-gray-600">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Process with visuals */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="03" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                How the formation process works
              </h2>

              <div className="space-y-5">
                {[
                  { step: "01", title: "Tell us about your business", text: "Complete our guided questionnaire — business name, type, industry, members, and goals. Takes about 10 minutes. No payment, no commitment." },
                  { step: "02", title: "We review & plan", text: "Our team reviews your submission within 1–2 business days. We verify name availability, assess your needs, and prepare a customized formation plan with clear pricing." },
                  { step: "03", title: "Documents are prepared", text: "Once you approve, we draft your Articles of Organization, Operating Agreement, and all supporting documents. Every document is reviewed by an attorney." },
                  { step: "04", title: "Filed & delivered", text: "We file with the Secretary of State, obtain your EIN, and deliver all documents through your secure client portal." },
                ].map((s) => (
                  <div key={s.step} className="bg-ivory-200 rounded-[1rem] p-5 flex gap-4">
                    <span className="font-serif text-[1.5rem] text-green-800 flex-shrink-0 w-8">{s.step}</span>
                    <div>
                      <h3 className="font-sans font-bold text-[1rem] text-black mb-1">{s.title}</h3>
                      <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="Video: Formation Process Walkthrough (4 min)" duration="4 min" variant="dark" />
              <ImagePlaceholder label="Infographic: Formation Timeline" aspect="3/2" src="https://images.unsplash.com/photo-1775363949849-cdc2167914a4?auto=format&fit=crop&w=1400&q=80" />

              <div className="bg-green-800 rounded-[1rem] p-8">
                <h3 className="font-serif text-[1.5rem] text-white mb-3">Start for free</h3>
                <p className="font-sans text-[0.95rem] text-white/70 leading-[1.6] mb-5">
                  No upfront payment. Complete our questionnaire and we&apos;ll prepare your custom formation plan.
                </p>
                <Link href="/questionnaire" className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Who It's For */}
      <section className="bg-green-800 py-[4rem] md:py-[5.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadgeLight number="04" />
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-6">
                LLC formation is right for you if&hellip;
              </h2>
              <p className="font-sans text-[1rem] text-white/60 leading-[1.6] mb-8">
                Whether you&apos;re launching your first business or structuring your fifth investment, an LLC provides the foundation you need.
              </p>
              <VideoPlaceholder label="Video: Who Should Form an LLC? (3 min)" duration="3 min" variant="blue" />
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

      {/* Section 5 — Costs & Timeline */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="05" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Transparent pricing, no hidden fees
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.7] mb-6">
                Before any work begins, you&apos;ll receive a clear breakdown of our service fee and all state fees. No surprise charges, no mandatory add-ons.
              </p>

              <Takeaway>
                California state fees are set by law. Our service fee covers everything in the formation package — name search, all documents, all filings, EIN, and your complete organizational package.
              </Takeaway>

              <ImagePlaceholder label="Image: Fee Breakdown Comparison Chart" aspect="16/9" src="https://images.unsplash.com/photo-1772588627342-5ec373e236d8?auto=format&fit=crop&w=1400&q=80" />
            </div>

            <div className="space-y-6">
              <div className="bg-ivory-200 rounded-[1rem] p-6">
                <h3 className="font-serif text-[1.25rem] text-black mb-4">State fees (required by California)</h3>
                {[
                  { label: "Articles of Organization", value: "$70", note: "One-time — Secretary of State" },
                  { label: "Statement of Information", value: "$20", note: "Due within 90 days, then every 2 years" },
                  { label: "Annual Franchise Tax", value: "$800/yr", note: "First due by 4th month after formation" },
                  { label: "Name Reservation (optional)", value: "$10", note: "Holds your name for 60 days" },
                ].map((row) => (
                  <div key={row.label} className="border-b border-gray-200 pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between mb-0.5">
                      <span className="font-sans text-[0.9rem] font-bold text-black">{row.label}</span>
                      <span className="font-sans text-[0.9rem] font-bold text-green-800">{row.value}</span>
                    </div>
                    <p className="font-sans text-[0.75rem] text-gray-400">{row.note}</p>
                  </div>
                ))}
              </div>

              <div className="bg-ivory-200 rounded-[1rem] p-6">
                <h3 className="font-serif text-[1.25rem] text-black mb-4">Timeline</h3>
                {[
                  { label: "Standard formation", value: "5–7 business days" },
                  { label: "Expedited formation", value: "24–48 hours" },
                  { label: "EIN acquisition", value: "1–2 business days" },
                  { label: "Full document delivery", value: "7–10 business days total" },
                ].map((row) => (
                  <div key={row.label} className="border-b border-gray-200 pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between">
                      <span className="font-sans text-[0.9rem] text-black">{row.label}</span>
                      <span className="font-sans text-[0.9rem] font-bold text-green-800">{row.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Comparison */}
      <section className="bg-purple-900 py-[4rem] md:py-[5.5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadgeLight number="06" />
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4 max-w-[42.5rem]">
            Why most California business owners choose an LLC
          </h2>
          <p className="font-sans text-[1rem] text-white/60 leading-[1.6] mb-[2.5rem] max-w-[36rem]">
            How an LLC compares to other structures on the factors that matter most.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "LLC", verdict: "Recommended", color: "bg-white text-green-800", items: ["Liability protection", "Pass-through taxation", "Flexible tax elections", "Simple management", "Easy to add owners", "Low compliance burden"] },
              { name: "Sole Prop", verdict: "Not recommended", color: "bg-purple-700 text-white", items: ["No liability protection", "Simplest tax filing", "$0 formation cost", "No franchise tax", "No compliance", "Personal assets at risk"] },
              { name: "S-Corp Election", verdict: "Consider at $60K+", color: "bg-purple-700 text-white", items: ["Same LLC protection", "Payroll tax savings", "Must run payroll", "Reasonable salary required", "CA 1.5% S-Corp tax", "Higher compliance cost"] },
              { name: "C-Corporation", verdict: "Only for VC", color: "bg-purple-700 text-white", items: ["Double taxation", "Board of directors required", "Shareholder meetings", "Best for raising capital", "Stock options possible", "Highest compliance"] },
            ].map((entity) => (
              <div key={entity.name} className={`${entity.color} rounded-[1rem] p-6`}>
                <h3 className="font-serif text-[1.25rem] mb-1">{entity.name}</h3>
                <p className={`font-sans text-[0.7rem] font-bold uppercase tracking-wider mb-4 ${entity.name === "LLC" ? "text-green-800/60" : "text-white/50"}`}>{entity.verdict}</p>
                <div className="space-y-2">
                  {entity.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className={`mt-0.5 text-[0.75rem] ${entity.name === "LLC" ? "text-green-800" : "text-white/40"}`}>&#x2022;</span>
                      <span className={`font-sans text-[0.8rem] leading-[1.4] ${entity.name === "LLC" ? "text-gray-600" : "text-white/70"}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ + Testimonial */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="07" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Common questions about formation
              </h2>

              {/* Testimonial */}
              <div className="bg-ivory-200 rounded-[1rem] p-6 mt-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
                </div>
                <blockquote className="font-serif text-[1.125rem] leading-[1.3] text-black mb-4">
                  &ldquo;I researched DIY filing but the complexity of the Operating Agreement alone convinced me to use Biz Legal. Best decision I made for my business.&rdquo;
                </blockquote>
                <p className="font-sans text-[0.85rem] font-bold text-black">Sarah M.</p>
                <p className="font-sans text-[0.8rem] text-gray-600">Founder, Martinez Design Co.</p>
              </div>

              <VideoPlaceholder label="Video: Client Testimonials (2 min)" duration="2 min" variant="teal" />
            </div>

            <div>
              <Accordion title="Do I need to be a California resident?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  No. Anyone can form a California LLC regardless of where they live. However, your LLC must have a registered agent with a physical address in California. If you&apos;re not located in California, we provide registered agent service so you have a CA address on file.
                </p>
              </Accordion>
              <Accordion title="What's the difference between member-managed and manager-managed?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  In a member-managed LLC (the default), all members participate in day-to-day management. In a manager-managed LLC, designated managers run the business while other members are passive investors. Manager-managed is common when you have investors who don&apos;t want operational involvement.
                </p>
              </Accordion>
              <Accordion title="Do I need an Operating Agreement if I'm the only member?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Strongly recommended. Without one, California&apos;s default rules govern your LLC. A single-member Operating Agreement also reinforces the legal separation between you and your LLC — critical for maintaining liability protection if challenged in court.
                </p>
              </Accordion>
              <Accordion title="What is the $800 franchise tax?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  California charges every LLC an annual minimum franchise tax of $800, regardless of income. First payment is due by the 15th day of the 4th month after formation. After that, it&apos;s due every April 15. Failure to pay results in penalties, interest, and eventual LLC suspension.
                </p>
              </Accordion>
              <Accordion title="Can I change my LLC name or structure later?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Yes. You can amend your Articles of Organization by filing Form LLC-2 ($30). Changes to ownership or internal rules are made by updating your Operating Agreement, which doesn&apos;t require a state filing. We handle all amendments.
                </p>
              </Accordion>
              <Accordion title="What if my name is already taken?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  We check name availability before filing. If your first choice is taken, we&apos;ll suggest alternatives that are distinguishable from existing entities. You can also reserve an available name for 60 days ($10) while you finalize your plans.
                </p>
              </Accordion>
              <Accordion title="Do you handle everything or do I need to do anything?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  We handle everything — name search, all document preparation, all filings, EIN acquisition, and delivery. You complete the questionnaire (about 10 minutes), review and approve your formation plan, and sign your Operating Agreement. That&apos;s it.
                </p>
              </Accordion>
            </div>
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
                Submit a free request — no payment, no commitment. Tell us about your business and we&apos;ll prepare a customized formation plan with clear pricing.
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
              <ImagePlaceholder label="Image: Happy Business Owner" aspect="4/3" src="https://images.unsplash.com/photo-1764173039051-987d1639b9d5?auto=format&fit=crop&w=1400&q=80" />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
