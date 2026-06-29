import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Link from "next/link";

const industries: Record<string, { name: string; summary: string; why: string }> = {
  restaurants: {
    name: "Restaurants",
    summary:
      "Restaurants operate in a high-liability environment — from food safety to slip-and-fall risks to vendor disputes. An LLC creates a legal barrier between your personal assets and the daily risks of running a food service business.",
    why:
      "In addition to general liability, restaurants face alcohol liability (if serving), employee disputes, health code violations, and delivery-related incidents. An LLC limits your personal exposure to these risks and makes your business more attractive to investors and landlords.",
  },
  retail: {
    name: "Retail",
    summary:
      "Retail businesses interact directly with the public, handle inventory, and manage physical storefronts — all of which create liability exposure. An LLC protects your personal assets from customer injuries, product liability claims, and lease disputes.",
    why:
      "Whether you run a brick-and-mortar shop or an online store, retail involves contracts with suppliers, customer transactions, and potential intellectual property issues. An LLC gives you the legal structure to manage these relationships professionally and protects your home and savings if a claim arises.",
  },
  technology: {
    name: "Technology",
    summary:
      "Tech companies may seem low-risk, but software bugs, data breaches, IP disputes, and client contractual issues can lead to significant liability. An LLC provides the legal foundation for equity arrangements, investor pitches, and professional contracts.",
    why:
      "Investors and enterprise clients expect to work with formal entities, not sole proprietors. An LLC gives you credibility, enables multi-founder equity splits, and protects your personal assets from client lawsuits or IP infringement claims.",
  },
  construction: {
    name: "Construction",
    summary:
      "Construction is one of the highest-liability industries in California. Property damage, worker injuries, and contract disputes are common. An LLC is essential to shield your personal assets from the inherent risks of building and renovation work.",
    why:
      "California contractors face strict licensing requirements and significant liability exposure. An LLC not only protects your personal assets but also provides a professional structure for subcontractor agreements, supplier contracts, and property owner relationships.",
  },
  consulting: {
    name: "Consulting",
    summary:
      "Consultants provide advice and professional services that clients rely on for important decisions. If a client suffers financial harm based on your advice, you could face a professional liability claim. An LLC creates a barrier between your personal and business liability.",
    why:
      "Even solo consultants benefit from an LLC. It adds credibility to your practice, enables you to open business bank accounts, and protects your personal assets if a client relationship turns litigious. Many corporate clients also require vendors to be formal entities.",
  },
  "real-estate": {
    name: "Real Estate",
    summary:
      "Real estate investors and agents deal with high-value transactions, tenant relationships, and property maintenance — all of which create liability. An LLC is the standard vehicle for holding investment properties and running real estate businesses in California.",
    why:
      "Savvy investors hold each property in a separate LLC to isolate liability. If one property has a lawsuit or debt issue, the others are protected. An LLC also provides tax flexibility and a professional structure for working with lenders, partners, and property managers.",
  },
  healthcare: {
    name: "Healthcare",
    summary:
      "Healthcare businesses — from medical practices to wellness startups — operate under strict regulations and high liability exposure. While malpractice insurance is essential, an LLC provides an additional layer of asset protection for business owners.",
    why:
      "California healthcare providers face HIPAA compliance, patient privacy laws, and professional board oversight. An LLC separates your personal assets from business liabilities and creates a professional structure for partnerships, equipment leases, and vendor contracts.",
  },
  ecommerce: {
    name: "E-commerce",
    summary:
      "Online sellers may not have a physical storefront, but they still face product liability, supplier disputes, chargebacks, and intellectual property claims. An LLC protects your personal assets from these digital-age business risks.",
    why:
      "E-commerce businesses often start as side hustles and grow quickly. Forming an LLC early establishes the legal foundation for scaling — from Amazon seller agreements to Shopify payment processing to supplier contracts. It also protects your personal credit if business debts arise.",
  },
  "cleaning-janitorial": {
    name: "Cleaning & Janitorial",
    summary:
      "Cleaning and janitorial services operate in client properties, handle chemicals and equipment, and employ workers who may be injured on the job. An LLC protects your personal assets from the unique liabilities of this hands-on industry.",
    why:
      "Whether you clean homes, offices, or industrial facilities, your business faces property damage claims, worker injuries, and client disputes. An LLC limits your personal exposure and gives you credibility when bidding on commercial contracts. Many businesses require vendors to be formal entities.",
  },
  "home-services": {
    name: "Home Services",
    summary:
      "Home service professionals — plumbers, electricians, HVAC technicians, landscapers — work inside client properties with tools and equipment. Accidental damage, worker injuries, and contract disputes are common. An LLC is essential protection.",
    why:
      "California homeowners are increasingly litigious, and one damaged floor or faulty repair can lead to a costly lawsuit. An LLC creates a legal wall between your business operations and your personal home, savings, and vehicles. It also helps you qualify for trade licenses and commercial insurance.",
  },
  transportation: {
    name: "Transportation",
    summary:
      "Transportation businesses — from rideshare operators to logistics companies — face accident liability, cargo damage claims, and regulatory compliance issues. An LLC provides critical asset protection in this high-risk industry.",
    why:
      "Vehicle accidents can result in six-figure or seven-figure judgments. If you operate under your own name, your personal assets are exposed. An LLC creates a liability barrier and may help with insurance qualification. For multi-vehicle operations, an LLC is practically mandatory.",
  },
  "professional-services": {
    name: "Professional Services",
    summary:
      "Attorneys, accountants, architects, and other professionals provide advice that clients rely upon. Professional liability claims can be devastating. An LLC creates a legal separation between your practice and your personal wealth.",
    why:
      "Even with professional liability insurance, an LLC adds an important layer of protection. It also provides a formal structure for bringing on partners, raising capital, and eventually selling your practice. Clients and referral sources often view formal entities as more credible.",
  },
};

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug];
  if (!industry) return notFound();

  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2243799864.jpg"
      heroAlt={`${industry.name} business owner forming a California LLC`}
      label="Industries"
      title={`LLC Formation for ${industry.name}`}
      description={`Form your California LLC with biz.legal — attorney-drafted documents, professional filing, and ongoing support for ${industry.name.toLowerCase()} businesses.`}
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            <div>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Why {industry.name} businesses need an LLC
              </h2>
              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>{industry.summary}</p>
                <p>{industry.why}</p>
              </div>

              <div className="mt-8 bg-green-800 rounded-[1rem] p-8">
                <h3 className="font-serif text-[1.5rem] text-white mb-3">
                  Start Now, Get Protected
                </h3>
                <p className="font-sans text-[0.95rem] text-white/70 leading-[1.6] mb-5">
                  Form your California LLC with attorney-drafted documents and professional filing for $750.
                </p>
                <Link
                  href="/order"
                  className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  Order Your LLC Formation
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-[1rem] p-8">
              <h3 className="font-serif text-[1.5rem] text-black mb-4">
                What&apos;s included
              </h3>
              <ul className="space-y-3">
                {[
                  "Legal Advice from the Start ($300 value)",
                  "State Filings ($500 value)",
                  "Customized Operating Agreement ($2000 value)",
                  "Federal Filings ($250 value)",
                  "Organizational Package",
                  "1 Year of Law Firm Support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-800 font-bold">&#x2713;</span>
                    <span className="font-sans text-[0.95rem] text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
