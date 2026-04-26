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

export default function RegisteredAgentPage() {
  return (
    <PageShell
      heroImage="https://images.unsplash.com/photo-1686853298482-7f3fd1d5b279?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Row of business mailboxes — California LLC registered agent service"
      label="Registered Agent"
      title="Professional registered agent service for California LLCs"
      description="California law requires every LLC to have a registered agent. We provide reliable, professional representation so you never miss a legal document or state notice."
    >
      {/* ── Section 1: Why You Need One ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="01" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                It&apos;s not optional &mdash; California requires one for every
                LLC
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Under California Corporations Code Section 17701.13, every LLC
                  must designate an &ldquo;agent for service of process&rdquo;
                  &mdash; commonly called a registered agent. This is the person
                  or entity authorized to receive legal documents, lawsuits,
                  subpoenas, and official state correspondence on behalf of your
                  LLC. The agent must have a physical street address in
                  California (not a PO box) and must be available during normal
                  business hours.
                </p>
                <p>
                  You can serve as your own registered agent, but doing so means
                  your personal home address appears on your public filings with
                  the Secretary of State &mdash; visible to anyone who searches
                  the state database. It also means you must be physically
                  present at that address during business hours to accept legal
                  documents.
                </p>
                <p>
                  A professional registered agent service eliminates these risks.
                  Our California address appears on your public filings instead
                  of your personal address. We are always available during
                  business hours to accept documents. And every document received
                  is scanned, uploaded to your secure portal, and forwarded to
                  you within one business day.
                </p>
              </div>

              <Takeaway>
                If you&apos;re not home when a process server arrives, you could
                miss being served in a lawsuit and face a default judgment
                against your LLC. A professional agent eliminates that risk
                entirely.
              </Takeaway>

              <Accordion title="Why privacy matters for home-based owners">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  Beyond privacy and reliability, using a professional agent is
                  essential if you travel frequently, work from home and
                  don&apos;t want surprise process servers at your door, operate
                  your LLC from outside California, or simply want peace of mind
                  that your legal documents are handled professionally.
                </p>
              </Accordion>
              <Accordion title="What happens if you miss a service of process?">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  If you&apos;re not there when a process server arrives, you
                  could miss being served in a lawsuit and face a default
                  judgment against your LLC. A default judgment means the court
                  rules against you without you ever having the chance to present
                  your side, potentially resulting in financial penalties or loss
                  of assets.
                </p>
              </Accordion>
              <Accordion title="California address requirement explained">
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  California requires a physical in-state street address for your
                  registered agent &mdash; PO boxes are not accepted. If you
                  live outside California, you must use a professional agent
                  service to satisfy this requirement. Our office address is used
                  on all your filings.
                </p>
              </Accordion>
            </div>

            <div className="space-y-6">
              <VideoPlaceholder label="How registered agent service works (2 min)" duration="2 min" variant="green" />

              <div className="grid grid-cols-2 gap-4">
                <StatCard number="100%" label="Document acceptance rate" />
                <StatCard number="<24hr" label="Document forwarding time" />
                <StatCard number="M-F" label="Available every business day" />
                <StatCard number="0" label="Missed documents since founding" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: What We Handle ── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadge number="02" />

          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            Every document your LLC receives, professionally managed
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[3rem] max-w-[36rem]">
            As your registered agent, we receive, process, and forward all legal
            and state documents served on your LLC.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Service of Process",
                text: "When your LLC is named in a lawsuit, the plaintiff must formally deliver legal papers to your registered agent. This is called 'service of process' and includes complaints, summons, subpoenas, and court orders. We accept all service of process documents at our California office during business hours. Each document is timestamped, scanned to your portal, and forwarded by email within hours — giving you the maximum time to respond. Missing service of process can result in a default judgment against your LLC, which is why having a reliable agent is critical.",
                includes: [
                  "Lawsuit complaints and summons",
                  "Subpoenas and court orders",
                  "Demand letters",
                  "Government enforcement actions",
                  "Same-day timestamping and notification",
                  "Secure portal upload within hours",
                ],
              },
              {
                title: "State Correspondence",
                text: "The California Secretary of State, Franchise Tax Board, Employment Development Department, and other agencies send official notices to your registered agent address. These include filing reminders, tax notices, compliance warnings, and status change notifications. We receive all state correspondence, categorize it by urgency and type, upload it to your portal, and alert you of anything requiring action — especially time-sensitive notices with response deadlines.",
                includes: [
                  "Secretary of State notices",
                  "Franchise Tax Board correspondence",
                  "Filing deadline reminders",
                  "Compliance warning letters",
                  "Status change notifications",
                  "Agency inquiry responses",
                ],
              },
              {
                title: "Privacy Protection",
                text: "When you designate a registered agent, the agent's address — not your personal address — appears on your Articles of Organization, Statement of Information, and other public filings with the Secretary of State. This means your home address is not searchable in the state's public business database. For business owners who work from home, this is especially important: it keeps your residential address off public record and prevents process servers or unwanted visitors from showing up at your door.",
                includes: [
                  "Our address on all public filings",
                  "Home address stays off state records",
                  "No public database exposure",
                  "No surprise visitors at your residence",
                  "Works for home-based and remote businesses",
                  "Address updates handled if we relocate",
                ],
              },
              {
                title: "Annual Report & Compliance Tracking",
                text: "Beyond receiving documents, we proactively monitor your LLC's compliance status. We track your Statement of Information filing windows, franchise tax deadlines, and any upcoming state requirements. If a deadline is approaching and you haven't taken action, we send you advance reminders at 60 days, 30 days, and 7 days before the due date. This early-warning system prevents the late filings and missed deadlines that cause most LLC compliance issues.",
                includes: [
                  "60/30/7-day advance deadline alerts",
                  "Statement of Information tracking",
                  "Franchise tax due date monitoring",
                  "Filing status verification",
                  "Annual compliance status review",
                  "Proactive outreach for expiring requirements",
                ],
              },
              {
                title: "Document Forwarding & Portal Access",
                text: "Every document we receive on your LLC's behalf is handled through a consistent, secure process. Documents are timestamped upon receipt, scanned at high resolution, categorized by type (legal, tax, compliance, general), uploaded to your secure client portal, and forwarded to your email address on file. You can access your full document history anytime through the portal — searchable by date, type, or sender. No paper gets lost, no notice goes unread.",
                includes: [
                  "Same-day scanning and upload",
                  "Email notification for every document",
                  "Categorized document archive",
                  "Searchable portal history",
                  "Downloadable copies anytime",
                  "Physical document forwarding on request",
                ],
              },
              {
                title: "Agent Change & Transfer Support",
                text: "If you currently have a different registered agent and want to switch to Biz Legal, we handle the entire transfer process. We prepare and file the Change of Agent form (SI-550) with the Secretary of State, notify your previous agent, and begin receiving documents at our address immediately upon approval. The filing fee is $0 when submitted with a Statement of Information. If you're forming a new LLC, we're designated as your agent from day one — no transfer needed.",
                includes: [
                  "Form SI-550 preparation and filing",
                  "Previous agent notification",
                  "Seamless document transfer",
                  "No gap in coverage during switch",
                  "$0 additional filing fee with SOI",
                  "New LLCs: included from formation",
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

      {/* ── Section 3: Professional vs Self ── */}
      <section className="bg-green-800 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <ChapterBadgeLight number="03" />

          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4 max-w-[42.5rem]">
            Why most business owners choose a professional registered agent
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.6] mb-[3rem] max-w-[36rem]">
            Side-by-side, the advantages of professional representation are
            clear.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Professional Agent card */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <p className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider mb-4">
                Professional Agent
              </p>
              <div className="space-y-4">
                {[
                  {
                    feature: "Home address on public record",
                    value: "No -- our address is used",
                  },
                  {
                    feature: "Must be physically present",
                    value: "We handle availability",
                  },
                  {
                    feature: "Missed document risk",
                    value: "Near zero -- professional handling",
                  },
                  {
                    feature: "Legal expertise",
                    value: "We understand what each document means",
                  },
                  {
                    feature: "Compliance tracking",
                    value: "Proactive deadline monitoring",
                  },
                  {
                    feature: "Business hours coverage",
                    value: "Full M-F coverage guaranteed",
                  },
                  {
                    feature: "Out-of-state owners",
                    value: "Fully supported -- no CA address needed",
                  },
                  {
                    feature: "Process server visits",
                    value: "At our office, not your home",
                  },
                  {
                    feature: "Document organization",
                    value: "Scanned, categorized, archived",
                  },
                ].map((row) => (
                  <div key={row.feature} className="border-b border-gray-100 pb-3">
                    <p className="font-sans text-[0.8rem] font-bold text-gray-400 uppercase tracking-wider">
                      {row.feature}
                    </p>
                    <p className="font-sans text-[0.95rem] text-green-800 mt-1">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Self as Agent card */}
            <div className="bg-white/10 rounded-[1rem] p-6 md:p-8">
              <p className="font-sans text-[0.8rem] font-bold text-white/50 uppercase tracking-wider mb-4">
                Self as Agent
              </p>
              <div className="space-y-4">
                {[
                  {
                    feature: "Home address on public record",
                    value: "Yes -- your address is public",
                  },
                  {
                    feature: "Must be physically present",
                    value: "You must be at the address",
                  },
                  {
                    feature: "Missed document risk",
                    value: "High if you travel or are away",
                  },
                  {
                    feature: "Legal expertise",
                    value: "You must interpret yourself",
                  },
                  {
                    feature: "Compliance tracking",
                    value: "You track everything yourself",
                  },
                  {
                    feature: "Business hours coverage",
                    value: "Only when you're home/available",
                  },
                  {
                    feature: "Out-of-state owners",
                    value: "You must have a CA address",
                  },
                  {
                    feature: "Process server visits",
                    value:
                      "At your door, potentially in front of clients",
                  },
                  {
                    feature: "Document organization",
                    value: "You manage your own paper trail",
                  },
                ].map((row) => (
                  <div key={row.feature} className="border-b border-white/10 pb-3">
                    <p className="font-sans text-[0.8rem] font-bold text-white/40 uppercase tracking-wider">
                      {row.feature}
                    </p>
                    <p className="font-sans text-[0.95rem] text-white/70 mt-1">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <VideoPlaceholder label="Professional vs. self-represented: real client stories" duration="4 min" variant="dark" />
        </div>
      </section>

      {/* ── Section 4: Who Benefits ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="04" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
                A professional agent is especially valuable if you&hellip;
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    title: "Work from home",
                    text: "Keep your residential address off public filings and avoid process servers arriving at your front door during family time or client meetings.",
                  },
                  {
                    title: "Travel frequently",
                    text: "If you're not at your registered address when legal documents arrive, you could miss critical deadlines. We're always there, even when you're not.",
                  },
                  {
                    title: "Live outside California",
                    text: "California requires a physical in-state address for your agent. If you don't live in California, you need a professional agent -- there's no alternative.",
                  },
                  {
                    title: "Own multiple LLCs",
                    text: "If you have several LLCs (common for real estate investors), a single registered agent service covers all of them with centralized document management.",
                  },
                  {
                    title: "Value your privacy",
                    text: "Anyone can search the Secretary of State's database and see your registered agent address. Using our address keeps your personal information private.",
                  },
                  {
                    title: "Want peace of mind",
                    text: "Knowing that every legal document and state notice is professionally received, tracked, and forwarded means one less thing to worry about as a business owner.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-ivory-200 rounded-[1rem] p-5"
                  >
                    <h3 className="font-sans font-bold text-[1rem] text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[0.85rem] text-gray-600 leading-[1.6]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <ImagePlaceholder
                label="Business owner reviewing documents on a laptop"
                aspect="4/3"
                src="https://images.unsplash.com/photo-1758518730264-9235a1e5416b?auto=format&fit=crop&w=1400&q=80"
              />
              <ImagePlaceholder
                label="Secure client portal dashboard"
                aspect="16/9"
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: FAQ ── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-[3rem] lg:gap-[5rem]">
            <div>
              <ChapterBadge number="05" />
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4">
                Common questions about registered agents
              </h2>

              <div className="bg-white rounded-[1rem] p-6 mt-8">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black text-black"
                    />
                  ))}
                </div>
                <blockquote className="font-serif text-[1.125rem] leading-[1.3] text-black mb-4">
                  &ldquo;I got served with a frivolous lawsuit while on
                  vacation. Biz Legal received the papers, scanned them to my
                  portal, and called me the same day. I had two weeks to respond
                  and didn&apos;t miss a beat.&rdquo;
                </blockquote>
                <p className="font-sans text-[0.85rem] font-bold text-black">
                  Robert K.
                </p>
                <p className="font-sans text-[0.8rem] text-gray-600">
                  Real Estate Investor, 4 California LLCs
                </p>
              </div>

              <div className="mt-6">
                <VideoPlaceholder label="Client testimonial: how fast we respond" duration="2 min" variant="teal" />
              </div>
            </div>

            <div className="space-y-0">
              <Accordion title="What exactly is a registered agent?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  A registered agent (formally called an &ldquo;agent for
                  service of process&rdquo; in California) is a person or entity
                  designated to receive legal documents and official state mail
                  on behalf of your LLC. California law requires every LLC to
                  have one, and the agent must have a physical street address in
                  California &mdash; PO boxes are not accepted. The agent&apos;s
                  name and address appear on your public filings with the
                  Secretary of State.
                </p>
              </Accordion>
              <Accordion title="Can I be my own registered agent?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Yes, any member or manager of the LLC can serve as the
                  registered agent, as long as they have a physical California
                  address and are available during normal business hours.
                  However, this means your personal address appears on public
                  state records, and you must be physically present at that
                  address to accept legal documents. If you&apos;re not home
                  when a process server arrives, your LLC could face a default
                  judgment in a lawsuit.
                </p>
              </Accordion>
              <Accordion title="What happens if I don't have a registered agent?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  If your LLC does not have a valid registered agent on file, the
                  Secretary of State may suspend or revoke your LLC&apos;s
                  ability to transact business. Additionally, without a valid
                  agent, legal documents may be served by alternative means (such
                  as publication), and you may not receive actual notice of
                  lawsuits or government actions against your LLC &mdash;
                  resulting in default judgments.
                </p>
              </Accordion>
              <Accordion title="How quickly will I receive documents you accept on my behalf?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  All documents are timestamped upon receipt, scanned at high
                  resolution, and uploaded to your secure client portal within
                  hours. You also receive an email notification for every
                  document received. For time-sensitive legal documents like
                  lawsuits or subpoenas, we make a direct phone call in addition
                  to the portal upload and email. Physical originals can be
                  forwarded by mail on request.
                </p>
              </Accordion>
              <Accordion title="Can I switch my registered agent to Biz Legal from another service?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Yes. We prepare and file the Change of Agent form with the
                  Secretary of State. When combined with a Statement of
                  Information filing, the change costs $0 in additional state
                  fees. The transition is seamless &mdash; there&apos;s no gap in
                  coverage. We notify your previous agent and begin receiving
                  documents at our address as soon as the change is processed,
                  typically within 5-7 business days.
                </p>
              </Accordion>
              <Accordion title="Is registered agent service included with LLC formation?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Yes. When you form your LLC through Biz Legal, we serve as your
                  registered agent from day one &mdash; it&apos;s included in
                  your formation package at no additional charge for the first
                  year. For existing LLCs that only need registered agent service
                  (without full formation or management), we offer it as a
                  standalone service.
                </p>
              </Accordion>
              <Accordion title="What if I move to a different state?">
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  Your California LLC still needs a California registered agent
                  regardless of where you personally live. This is one of the
                  most common reasons business owners use a professional agent
                  &mdash; it provides a stable California address even if you
                  relocate. If you move, your agent address stays the same. You
                  just need to update your personal address on your LLC records,
                  which we handle as part of our service.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="bg-green-800 py-[4rem] md:py-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-center">
            <div>
              <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-white mb-5">
                Get professional registered agent service
              </h2>
              <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-8">
                Included with LLC formation or available standalone for existing
                California LLCs. Never miss a legal document again.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/questionnaire"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <ImagePlaceholder
              label="Team ready to handle your LLC documents"
              aspect="4/3"
              src="https://images.unsplash.com/photo-1764173039051-987d1639b9d5?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
