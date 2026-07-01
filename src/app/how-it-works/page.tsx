import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Order Your California LLC Formation — biz.legal",
  description:
    "Form your California LLC with attorney-drafted documents, attorney-guided decisions, professional filing, and fast delivery. The can't-refuse offer from biz.legal.",
};

const packageItems = [
  "Legal Advice from the Start ($300 value)",
  "State Filings ($500 value)",
  "Customized Operating Agreement ($2000 value)",
  "Federal Filings ($250 value)",
  "Organizational Package (LLC Handbook, e-Binder, templates, Compliance Calendar)",
  "1 Year of Law Firm Support (Registered Agent + Quarterly Lawyer Calls)",
];

export default function SalesPage() {
  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2243799864.jpg"
      heroAlt="Business owner ready to form a California LLC with biz.legal"
      label="Order Now"
      title="Start Now, Get Protected"
      description="Attorney-drafted documents, attorney-guided decisions, professional filing, fast delivery, and no guesswork."
      heroVariant="mobileHomepage"
    >
      {/* Irresistible Offer */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                The LLC Formation Package
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-8">
                Everything you need to form your California LLC the right way — done by real lawyers, not a DIY website. No hidden fees. No upsells. Just professional legal service with the efficiency of a tech platform.
              </p>

              <div className="space-y-4 mb-8">
                {packageItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-green-800 font-bold text-[1rem]">&#x2713;</span>
                    <span className="font-sans text-[1rem] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/order"
                  className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  I&apos;m Ready!
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 border-2 border-green-800 hover:bg-green-800 hover:text-white rounded-full transition-colors duration-200 cursor-pointer"
                >
                  More Information
                </Link>
              </div>
            </div>

            <div className="bg-green-800 rounded-[1rem] p-8 md:p-10">
              <p className="font-sans text-[0.8rem] font-bold text-white/60 uppercase tracking-wider mb-4">
                Can&apos;t-Refuse Offer
              </p>
              <p className="font-serif text-[3rem] md:text-[4rem] text-white leading-[1]">
                $750
              </p>
              <p className="font-sans text-[1rem] text-white/70 mt-2 mb-6">
                Complete LLC Formation Package
              </p>
              <div className="border-t border-white/20 pt-6 space-y-3">
                <p className="font-sans text-[0.9rem] text-white/80">
                  <strong className="text-white">Attorney consultation included</strong> — Talk to a real California lawyer before you commit.
                </p>
                <p className="font-sans text-[0.9rem] text-white/80">
                  <strong className="text-white">Done for you</strong> — We file everything, draft every document, and deliver to your portal.
                </p>
                <p className="font-sans text-[0.9rem] text-white/80">
                  <strong className="text-white">1 year of support</strong> — Registered agent and quarterly lawyer check-ins included.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center w-full px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Order Your LLC Formation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative: Learn More / Lead Intake */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-center">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4">
                Not ready yet? That&apos;s okay.
              </h2>
              <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] mb-6">
                Starting a business is a big decision. If you have questions, want to talk through your options, or just need more information, we&apos;re here to help — no pressure, no obligation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free consultation with a California attorney",
                  "Learn if an LLC is right for your business",
                  "Understand what documents you actually need",
                  "Get a clear timeline and pricing breakdown",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-800 font-bold">&#x2713;</span>
                    <span className="font-sans text-[0.95rem] text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-[1rem] p-8">
              <h3 className="font-serif text-[1.5rem] text-black mb-4">
                Why business owners choose biz.legal
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-sans font-bold text-[0.9rem] text-black mb-1">Lawyers, not a DIY Site</p>
                  <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.5]">
                    DIY websites can&apos;t give legal advice and they leave you guessing. Mistakes are easy to make. We do the work for you, in California, by real lawyers, paralegals and legal assistants.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold text-[0.9rem] text-black mb-1">Tech-Speed Service</p>
                  <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.5]">
                    Faster than a law firm, easier than DIY, with real expertise and lawyers to make sure it&apos;s done right, and done for you.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold text-[0.9rem] text-black mb-1">Done For You</p>
                  <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.5]">
                    You have work to do and a business to run. We handle the legal complexity so you can focus on what you do best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
