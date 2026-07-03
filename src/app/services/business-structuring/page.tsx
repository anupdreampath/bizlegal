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

export default function BusinessStructuringPage() {
  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2243799864.jpg"
      heroAlt="Four professionals in a business meeting — California business structuring consultation"
      label="Business Structuring"
      title="Structure your LLC for maximum protection and flexibility"
      description="The way your LLC is structured determines your liability protection, tax burden, management authority, and exit options. We help you get it right from the start."
      heroVariant="mobileHomepage"
    >
      {/* ── 01 Why Structure Matters ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="01" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Two LLCs can look identical on paper and have completely different outcomes
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Most LLC formation services treat every business the same: fill out
                  a form, file with the state, done. But the legal and financial
                  structure of your LLC &mdash; how it&apos;s owned, managed, taxed, and
                  governed &mdash; is what actually determines whether your personal assets
                  are protected, how much you pay in taxes, and what happens when
                  things change.
                </p>
                <p>
                  A single-member LLC taxed as a disregarded entity faces completely
                  different self-employment tax obligations than one that elects
                  S-Corporation status. A multi-member LLC with a poorly drafted
                  Operating Agreement can devolve into costly disputes when members
                  disagree on direction, distributions, or exits.
                </p>
                <p>
                  Business structuring is not just about choosing &ldquo;LLC&rdquo; on a
                  form. It&apos;s about designing the internal architecture of your
                  business entity &mdash; the ownership percentages, management hierarchy,
                  tax elections, capital requirements, distribution rules, transfer
                  restrictions, and dissolution procedures that govern how your LLC
                  operates, protects you, and adapts as your business evolves.
                </p>
              </div>

              <Takeaway>
                At Biz Legal, structuring is where we add the most value. We don&apos;t
                use templates. We analyze your specific situation &mdash; your business
                type, number of owners, revenue expectations, asset exposure, growth
                plans, and exit timeline &mdash; and design a structure that optimizes
                for protection, tax efficiency, and operational flexibility.
              </Takeaway>

              <Accordion title="Why can't I just use a template Operating Agreement?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Template documents cover only the most generic scenarios. They don&apos;t
                  account for your specific ownership split, management preferences, tax
                  elections, distribution priorities, or exit plans. A poorly drafted
                  Operating Agreement can leave you exposed to veil-piercing challenges,
                  member disputes, and unnecessary tax burdens.
                </p>
              </Accordion>
              <Accordion title="What makes LLC structure different from formation?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Formation is the act of filing articles with the state. Structure is
                  everything that determines how the LLC actually works: who owns what,
                  who makes decisions, how profits flow, what happens during disputes, and
                  how members can enter or exit. Formation takes an hour; structuring
                  takes careful analysis and custom drafting.
                </p>
              </Accordion>
              <Accordion title="Can poor structure cost me money?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Absolutely. An LLC without the right tax election can overpay
                  self-employment taxes by $5,000&ndash;$20,000+ per year. Without proper
                  capitalization and separation, a court can pierce the veil and hold you
                  personally liable for business debts. Without clear exit provisions,
                  a departing member dispute can cost tens of thousands in legal fees.
                </p>
              </Accordion>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="Watch: Why LLC Structure Matters More Than Formation" duration="4 min" variant="green" />
              <div className="grid grid-cols-2 gap-4">
                <StatCard number="$15K+" label="Average tax savings with proper election" />
                <StatCard number="100%" label="Custom-drafted Operating Agreements" />
                <StatCard number="0" label="Template documents used" />
                <StatCard number="10+" label="Years of CA structuring experience" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 What We Do ── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadge number="02" />
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            Six dimensions of LLC structuring, tailored to your business
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[3rem] max-w-[36rem]">
            Every structuring engagement covers these core areas. The specific
            recommendations depend on your business type, ownership, and goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Ownership & Member Structure",
                text: "The foundation of your LLC is who owns it and in what proportions. We help determine ownership percentages based on capital contributions and sweat equity, define capital accounts, establish dilution provisions, and create a clear framework for admitting new members or buying out existing ones.",
                includes: [
                  "Ownership percentage analysis",
                  "Capital contribution schedules",
                  "Sweat equity valuation frameworks",
                  "Member admission procedures",
                  "Anti-dilution provisions",
                  "Buyout and redemption terms",
                ],
              },
              {
                title: "Tax Classification Election",
                text: "LLCs can elect to be taxed as an S-Corporation or C-Corporation. The S-Corp election is particularly powerful for LLC owners earning over $60K\u2013$80K annually: only your 'reasonable salary' is subject to payroll taxes. We analyze your projected income to determine the right election.",
                includes: [
                  "Default vs. elective tax analysis",
                  "S-Corp election cost/benefit modeling",
                  "Reasonable salary determination",
                  "Payroll tax savings projection",
                  "IRS Form 2553 / 8832 preparation",
                  "California FTB election coordination",
                ],
              },
              {
                title: "Management Authority & Governance",
                text: "California LLCs are either member-managed or manager-managed. The choice affects who can sign contracts, open bank accounts, and make binding commitments. We draft detailed governance provisions covering decision authority, spending limits, and dispute resolution.",
                includes: [
                  "Member-managed vs. manager-managed analysis",
                  "Decision authority matrices",
                  "Spending and contract authority limits",
                  "Voting thresholds by decision type",
                  "Manager appointment and removal procedures",
                  "Reporting and transparency requirements",
                ],
              },
              {
                title: "Asset Protection Design",
                text: "The liability protection an LLC provides is not automatic \u2014 it must be maintained through proper structure and behavior. California courts can 'pierce the veil' if the LLC is treated as an alter ego. We structure your LLC to withstand veil-piercing challenges.",
                includes: [
                  "Capitalization adequacy analysis",
                  "Asset separation procedures",
                  "Formality requirements checklist",
                  "Insurance coverage recommendations",
                  "Commingling prevention protocols",
                  "Veil-piercing risk assessment",
                ],
              },
              {
                title: "Distribution & Profit Allocation",
                text: "How profits and losses flow through your LLC has direct tax implications for every member. We draft distribution provisions that match your business reality: guaranteed payments, preferred returns, tiered waterfalls, tax distribution requirements, and reserve policies.",
                includes: [
                  "Custom profit/loss allocation formulas",
                  "Guaranteed payment structures",
                  "Preferred return provisions",
                  "Distribution waterfall design",
                  "Tax distribution requirements",
                  "Cash reserve policies",
                ],
              },
              {
                title: "Succession & Exit Planning",
                text: "Every LLC eventually faces a change in membership. Without clear transfer and exit provisions, these events can trigger costly disputes or forced dissolutions. We build comprehensive exit architecture including right of first refusal, buy-sell agreements, and divorce protection.",
                includes: [
                  "Buy-sell agreement drafting",
                  "Valuation method selection",
                  "Right of first refusal provisions",
                  "Death/disability triggered buyouts",
                  "Divorce protection (transfer restrictions)",
                  "Dissolution and wind-up procedures",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[1rem] p-6 md:p-8">
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
                        <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                        <span className="font-sans text-[0.85rem] text-gray-600">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Entity Comparison ── */}
      <section className="bg-green-800 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadgeLight number="03" />
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4 max-w-[42.5rem]">
            Is an LLC the right structure? Here&apos;s how it compares.
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.6] mb-[2rem] max-w-[36rem]">
            An LLC is the right choice for most California businesses, but not
            all. Here&apos;s an honest comparison.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              {
                structure: "LLC (default taxation)",
                best: "Most small businesses, freelancers, consultants, real estate investors, and partnerships with fewer than 10 members.",
                pros: "Liability protection, pass-through taxation, flexible management, no board requirements, easy to add/remove members, minimal compliance burden.",
                cons: "California\u2019s $800 annual franchise tax applies regardless of income. Self-employment tax on all net income (unless S-Corp election). Less attractive to VC investors than C-Corps.",
                verdict: "The default choice for the vast majority of California businesses. Simple, protective, flexible.",
              },
              {
                structure: "LLC with S-Corp election",
                best: "LLC owners earning $60,000+ annually in net income who want to reduce self-employment tax.",
                pros: "Same liability protection as standard LLC. Only \u2018reasonable salary\u2019 is subject to payroll taxes \u2014 distributions are not. Can save $5,000\u2013$20,000+ per year in self-employment taxes at higher income levels.",
                cons: "Requires running payroll (additional compliance and cost). Must pay yourself a \u2018reasonable salary\u2019 \u2014 the IRS scrutinizes this. Additional tax filing requirements (Form 1120S). California imposes a 1.5% tax on S-Corp net income.",
                verdict: "Worth evaluating once net income exceeds $60K\u2013$80K. We model the exact breakeven for your situation.",
              },
              {
                structure: "C-Corporation",
                best: "Businesses planning to raise venture capital, issue stock options to employees, or eventually go public.",
                pros: "Preferred by institutional investors and VCs. Can issue multiple classes of stock. Stock options for employee compensation. Corporate tax rate (21% federal) may be favorable for retained earnings.",
                cons: "Double taxation \u2014 corporate income is taxed at the entity level, then dividends are taxed again on shareholders\u2019 personal returns. Rigid governance requirements. Higher compliance costs. California\u2019s $800 minimum franchise tax plus 8.84% corporate income tax.",
                verdict: "Only recommended if you\u2019re raising institutional capital or planning an IPO. Overkill for most businesses.",
              },
              {
                structure: "Sole Proprietorship",
                best: "Very low-risk, low-revenue activities where simplicity is the top priority and liability protection isn\u2019t a concern.",
                pros: "No formation cost or filing required. Simplest tax filing (Schedule C). No annual franchise tax. No compliance obligations beyond basic business license.",
                cons: "Zero liability protection \u2014 your personal assets are fully exposed to business debts and lawsuits. No separation between you and the business. Difficult to raise capital or bring in partners. Cannot transfer the business as an entity.",
                verdict: "Not recommended for any business with meaningful revenue, assets, or liability exposure. The $800/year franchise tax is worth the protection.",
              },
            ].map((entity) => (
              <div key={entity.structure} className="bg-green-500 rounded-[1rem] p-6 md:p-8">
                <h3 className="font-serif text-[1.5rem] text-white mb-4">{entity.structure}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-[0.8rem] font-bold text-white uppercase tracking-wider mb-2">Best For</p>
                    <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">{entity.best}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[0.8rem] font-bold text-white uppercase tracking-wider mb-2">Advantages</p>
                    <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">{entity.pros}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[0.8rem] font-bold text-white uppercase tracking-wider mb-2">Drawbacks</p>
                    <p className="font-sans text-[0.9rem] text-white/75 leading-[1.6]">{entity.cons}</p>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-sans text-[0.8rem] font-bold text-white uppercase tracking-wider mb-2">Our Take</p>
                    <p className="font-sans text-[0.9rem] text-white font-bold leading-[1.6]">{entity.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <VideoPlaceholder label="Watch: How to Choose the Right Entity Structure" duration="5 min" variant="dark" />
        </div>
      </section>

      {/* ── 04 Who Benefits ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="04" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Structuring guidance is especially valuable when&hellip;
              </h2>
              <ImagePlaceholder label="Business strategy consultation with California founders" aspect="4/3" src="/amyersnapa-attachments/iStock-2241575917.jpg" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "You\u2019re bringing in partners",
                  text: "Multi-member LLCs need clear rules about ownership, management authority, distributions, and exits. Without them, disagreements become lawsuits. A properly structured Operating Agreement prevents conflicts before they start.",
                },
                {
                  title: "You earn over $60K+ net",
                  text: "At this income level, the S-Corp election can save thousands in self-employment taxes \u2014 but only if structured correctly. We model the exact numbers for your situation and handle the election if it makes sense.",
                },
                {
                  title: "You own real estate",
                  text: "Each property should typically be held in a separate LLC to isolate liability. We design holding structures, parent-subsidiary arrangements, and management agreements that protect your entire portfolio.",
                },
                {
                  title: "You\u2019re converting from sole prop",
                  text: "Transitioning from a sole proprietorship to an LLC involves more than filing articles. We handle asset transfers, contract assignments, license updates, and EIN transitions to ensure continuity.",
                },
                {
                  title: "You have significant personal assets",
                  text: "If you own a home, retirement accounts, or other valuable personal assets, proper LLC structure is your best defense against business creditors. We design structures that maximize the legal barrier between business and personal.",
                },
                {
                  title: "You\u2019re planning for growth or exit",
                  text: "Whether you want to bring in investors, sell the business, or pass it to the next generation, the structure you set up today determines your options tomorrow. We build in flexibility for future scenarios.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-ivory-200 rounded-[1rem] p-6">
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

      {/* ── 05 FAQ ── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="05" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Common questions about LLC structure
              </h2>

              <div className="bg-white rounded-[1rem] p-6 mb-8">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="font-serif text-[1.125rem] leading-[1.3] text-black mb-4">
                  &ldquo;Biz Legal saved us from a partnership disaster. Our original
                  Operating Agreement was a template that didn&apos;t address what
                  happens if a partner wants out. They restructured everything &mdash;
                  clear buyout terms, valuation method, payment schedule. Worth every
                  penny.&rdquo;
                </blockquote>
                <p className="font-sans text-[0.85rem] font-bold text-black">Kevin O.</p>
                <p className="font-sans text-[0.8rem] text-gray-600">
                  Co-founder, Westside Media LLC
                </p>
              </div>

              <VideoPlaceholder label="Watch: Structuring FAQ with Our Legal Team" duration="3 min" variant="blue" />
            </div>

            <div>
              <Accordion title="I already formed my LLC \u2014 can you restructure it?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Absolutely. Most of our structuring work is for existing LLCs that
                  were formed quickly without proper planning. We can amend your
                  Articles of Organization, draft or rewrite your Operating Agreement,
                  file tax election changes, update your member/manager structure, and
                  redesign your governance provisions &mdash; all without dissolving and
                  reforming the LLC. The state filing for an amendment is $30 (Form
                  LLC-2). Internal changes like Operating Agreement updates don&apos;t
                  require a state filing at all.
                </p>
              </Accordion>
              <Accordion title="How do I know if the S-Corp election is right for me?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  The S-Corp election reduces self-employment taxes by allowing you to
                  split income between a &ldquo;reasonable salary&rdquo; (subject to payroll
                  tax) and distributions (not subject to payroll tax). It typically
                  becomes beneficial when net income exceeds $60,000&ndash;$80,000 per
                  year. However, it adds payroll compliance costs ($1,000&ndash;$3,000/year),
                  requires quarterly payroll filings, and the IRS scrutinizes whether
                  your salary is &ldquo;reasonable.&rdquo; We run a detailed cost-benefit
                  analysis using your actual numbers before recommending it.
                </p>
              </Accordion>
              <Accordion title="What should a good Operating Agreement include?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  At minimum: member names and ownership percentages, capital
                  contributions, profit/loss allocation, distribution rules, management
                  authority, voting procedures, transfer restrictions, buyout provisions
                  (death, disability, divorce, voluntary withdrawal), dispute resolution,
                  and dissolution procedures. For multi-member LLCs, it should also
                  address deadlock resolution, non-compete provisions, capital call
                  procedures, and what constitutes a breach. A comprehensive Operating
                  Agreement is typically 15&ndash;30 pages &mdash; anything less is likely
                  missing critical provisions.
                </p>
              </Accordion>
              <Accordion title="What is 'piercing the corporate veil' and how do I prevent it?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Veil piercing is when a court disregards the LLC&apos;s legal separation
                  and holds members personally liable for business debts. California
                  courts consider factors like: commingling personal and business funds,
                  inadequate capitalization, failure to observe LLC formalities, using
                  the LLC for personal expenses, and misrepresenting the LLC&apos;s
                  financial condition. Prevention requires maintaining a separate
                  business bank account, keeping adequate capital in the LLC, holding
                  regular member meetings (even if informal), maintaining accurate
                  records, and using the LLC name consistently in all business dealings.
                </p>
              </Accordion>
              <Accordion title="How should I structure an LLC for real estate?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  For real estate investors, we typically recommend a separate LLC for
                  each property to isolate liability &mdash; so a lawsuit or claim related
                  to one property doesn&apos;t threaten your others. For investors with
                  multiple properties, we may recommend a holding company LLC that owns
                  the individual property LLCs, providing centralized management while
                  maintaining liability separation. Tax treatment, financing
                  considerations, and 1031 exchange planning all factor into the
                  optimal structure.
                </p>
              </Accordion>
              <Accordion title="Can I change my LLC's tax classification later?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Yes, but with limitations. You can elect S-Corp status by filing Form
                  2553 with the IRS (must be filed by March 15 for current-year
                  effectiveness, or within 75 days of formation for new LLCs). You can
                  revoke an S-Corp election, but you can&apos;t re-elect S-Corp status for
                  5 years after revocation. C-Corp elections (Form 8832) can be changed
                  once every 60 months. We handle all election filings and coordinate
                  with the California FTB, which has its own rules for recognizing
                  federal elections.
                </p>
              </Accordion>
              <Accordion title="How long does a structuring engagement take?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  For new LLCs being formed with structuring, the entire process
                  typically takes 2&ndash;3 weeks from initial questionnaire to completed
                  formation and documents. For existing LLCs being restructured, it
                  depends on complexity: a simple Operating Agreement rewrite takes
                  1&ndash;2 weeks, while a full restructuring involving tax elections,
                  member changes, and governance overhaul may take 3&ndash;4 weeks. We
                  don&apos;t rush structuring decisions &mdash; getting it right is more
                  important than getting it fast.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 CTA ── */}
      <section className="bg-green-800 py-[4rem] md:py-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-center">
            <div>
              <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-white mb-5">
                Let&apos;s structure your LLC the right way
              </h2>
              <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
                Tell us about your business and we&apos;ll design a structure that
                maximizes protection, minimizes taxes, and adapts as you grow.
                No payment required to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/questionnaire"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Start Your Request
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <ImagePlaceholder label="LLC structuring consultation for a small business owner" aspect="4/3" src="/amyersnapa-attachments/iStock-2238258267.jpg" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
