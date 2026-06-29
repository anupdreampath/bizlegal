"use client";

import PageShell from "@/components/PageShell";
import Link from "next/link";
import { Accordion, Takeaway, ImagePlaceholder } from "@/components/Interactive";

export default function ContinuingLegalSupportPage() {
  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2218831325.jpg"
      heroAlt="Attorney on phone providing continuing legal support to California business owners"
      label="Services"
      title="Continuing Legal Support"
      description="Most law firms and legal websites sell you on formation, and leave you high and dry to figure the rest out on your own. We want to support your success and provide continuing legal advice and support on an ongoing basis after your formation."
    >
      {/* Section 1 — Why Continuing Support Matters */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Formation is just the beginning
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Most law firms and legal websites sell you on formation, and leave you
                  high and dry to figure the rest out on your own. We want to support your
                  success and provide continuing legal advice and support on an ongoing
                  basis after your formation.
                </p>
                <p>
                  Running a business means facing new legal questions every month. Should
                  you sign that lease? Hire that employee? Enter into that partnership?
                  Having a law firm you can call — one that already knows your business —
                  gives you confidence to make the right decisions.
                </p>
              </div>

              <Takeaway>
                A business without ongoing legal support is like a car without maintenance — eventually, something breaks. Our continuing support keeps your business running smoothly.
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
                  penalties, interest, and filing fees — which can easily
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

            <div className="space-y-6">
              <ImagePlaceholder label="Attorney providing phone consultation for ongoing legal support" aspect="3/2" src="/amyersnapa-attachments/iStock-2218831325.jpg" />

              <div className="bg-green-800 rounded-[1rem] p-8">
                <h3 className="font-serif text-[1.5rem] text-white mb-3">Let&apos;s get started</h3>
                <p className="font-sans text-[0.95rem] text-white/70 leading-[1.6] mb-5">
                  Ready to protect and support your business with ongoing legal counsel?
                </p>
                <Link href="/contact" className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What's Included */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4 max-w-[42.5rem]">
            What&apos;s included in continuing legal support
          </h2>
          <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-[3rem] max-w-[36rem]">
            Comprehensive legal support designed for small business owners who need more than just formation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Initial Legal Advice to Start Right",
                text: "We begin with a thorough review of your business goals, structure, and risks. Our attorneys provide tailored advice so you make informed decisions from day one.",
              },
              {
                title: "Professional Formation and Legal Drafting",
                text: "Attorney-drafted Operating Agreements, contracts, and organizational documents — not templates. Everything is customized to your specific business needs.",
              },
              {
                title: "Quarterly Lawyer Check-In Calls",
                text: "Lingering questions? Unusual issues arise? Your dedicated attorney checks in quarterly to review your business status and address any concerns before they become problems.",
              },
              {
                title: "Registered Agent Services",
                text: "We serve as your California registered agent, receiving all legal and state documents on your behalf and forwarding them promptly through your secure portal.",
              },
              {
                title: "Additional Services Available on Request",
                text: "Lease drafting and review, contract drafting and review, employment agreements, labor and wage issues, business changes, sales, or dissolution.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[1rem] p-6">
                <h3 className="font-serif text-[1.25rem] leading-[1.2] text-black mb-3">{item.title}</h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-[3rem] text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
            >
              Let&apos;s Get Started
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
