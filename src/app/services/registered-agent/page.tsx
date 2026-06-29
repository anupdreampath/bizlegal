"use client";

import PageShell from "@/components/PageShell";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/Interactive";

export default function RegisteredAgentPage() {
  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2241575917.jpg"
      heroAlt="Professional registered agent service for California LLCs"
      label="Registered Agent"
      title="Professional registered agent service for California LLCs"
      description="California law requires every LLC to have a registered agent. We provide reliable, professional representation so you never miss a legal document or state notice."
    >
      {/* ── Section 2: What We Handle ── */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            Every document your LLC receives, professionally managed
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[3rem] max-w-[36rem]">
            As your registered agent, we receive, process, and forward all legal and state documents served on your LLC.
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
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-white mb-4 max-w-[42.5rem]">
            Why most business owners choose a professional registered agent
          </h2>
          <p className="font-sans text-[1rem] text-white/70 leading-[1.6] mb-[3rem] max-w-[36rem]">
            Side-by-side, the advantages of professional representation are clear.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Professional Agent card */}
            <div className="bg-white rounded-[1rem] p-6 md:p-8">
              <p className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider mb-4">
                Professional Agent
              </p>
              <div className="space-y-3">
                {[
                  "Our address on all public filings — your home stays private",
                  "Always available during business hours to accept documents",
                  "Documents scanned and uploaded to your portal within hours",
                  "Phone alert for time-sensitive legal documents",
                  "Compliance tracking and deadline reminders included",
                  "No risk of missing service while you're traveling or away",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-800 mt-0.5 font-bold text-[0.85rem]">&#x2713;</span>
                    <span className="font-sans text-[0.85rem] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Self as Agent card */}
            <div className="bg-green-500 rounded-[1rem] p-6 md:p-8">
              <p className="font-sans text-[0.8rem] font-bold text-white/70 uppercase tracking-wider mb-4">
                You as Your Own Agent
              </p>
              <div className="space-y-3">
                {[
                  "Your personal address appears on all public state filings",
                  "You must be physically present during business hours every day",
                  "No backup if you're sick, traveling, or simply not home",
                  "Missed service of process = default judgment against your LLC",
                  "No compliance tracking or deadline reminders",
                  "Process servers and unwanted visitors at your door",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-white/60 mt-0.5 font-bold text-[0.85rem]">&#x2715;</span>
                    <span className="font-sans text-[0.85rem] text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[1rem] p-6 md:p-8 max-w-[42.5rem]">
            <h3 className="font-serif text-[1.5rem] text-black mb-3">
              Included with every LLC formation
            </h3>
            <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] mb-5">
              When you form your LLC through biz.legal, registered agent service is included at no extra charge for the first year. For existing LLCs, we offer standalone registered agent service with all the features above.
            </p>
            <Link
              href="/order"
              className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-white bg-green-800 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works ── */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                How registered agent service works
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-6">
                Simple, reliable, and always on. From document receipt to your notification, every step is handled with precision.
              </p>

              <div className="space-y-5">
                {[
                  { step: "01", title: "Document received at our California office", text: "A lawsuit, subpoena, or state notice is delivered to our address during business hours. We sign for it, timestamp it, and begin processing immediately." },
                  { step: "02", title: "Scanned and uploaded to your portal", text: "Within hours, the document is scanned at high resolution, categorized by type, and uploaded to your secure client portal with a clear subject line." },
                  { step: "03", title: "You are notified immediately", text: "You receive an email notification with a direct link to the document. For time-sensitive legal documents, we also call you directly to ensure you see it." },
                  { step: "04", title: "Track and respond on your timeline", text: "Your full document history is always available in the portal. Download, forward, or print anytime. We can also mail physical copies on request." },
                ].map((s) => (
                  <div key={s.step} className="bg-white rounded-[1rem] p-5 flex gap-4">
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
              <ImagePlaceholder
                label="Registered agent document processing workflow"
                aspect="3/2"
                src="/amyersnapa-attachments/iStock-2239904274.jpg"
              />
              <ImagePlaceholder
                label="Secure client portal for document access"
                aspect="3/2"
                src="/amyersnapa-attachments/iStock-2243642331.jpg"
              />
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
                Included with LLC formation or available standalone for existing California LLCs. Never miss a legal document again.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
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

            <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
              <img
                src="/amyersnapa-attachments/iStock-2241575917.jpg"
                alt="Business owner confident with registered agent protection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
