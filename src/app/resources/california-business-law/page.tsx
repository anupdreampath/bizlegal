import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Additional Legal Services — biz.legal",
  description:
    "Beyond LLC formation, biz.legal offers comprehensive business legal services including contracts, leases, employment agreements, and more.",
};

const services = [
  {
    title: "Lease Review",
    description:
      "Before you sign a commercial lease, have an experienced attorney review it. We identify hidden risks, unfair clauses, and negotiate terms that protect your business.",
  },
  {
    title: "Lease Drafting",
    description:
      "Need a lease for your property or business space? We draft clear, enforceable commercial leases tailored to your specific needs and compliant with California law.",
  },
  {
    title: "Contract Review",
    description:
      "Vendor agreements, partnership deals, service contracts — we review the fine print so you know exactly what you're signing and what risks you're taking on.",
  },
  {
    title: "Contract Drafting",
    description:
      "Custom contracts written by attorneys who understand your business. Clear terms, strong protections, and enforceable in California courts.",
  },
  {
    title: "Employment Contracts",
    description:
      "From offer letters to executive agreements, we draft employment contracts that protect your business while complying with California's complex labor laws.",
  },
  {
    title: "Employee Handbooks",
    description:
      "A properly drafted employee handbook sets expectations, reduces liability, and helps defend against wrongful termination claims. We create handbooks tailored to your business.",
  },
  {
    title: "Business Sales Representation",
    description:
      "Selling your business is one of the most important transactions you'll make. We guide you through due diligence, negotiations, and closing to protect your interests.",
  },
  {
    title: "Adding New Partners",
    description:
      "Bringing on a new partner or member? We draft buy-in agreements, update Operating Agreements, and ensure the transition protects all parties and the business.",
  },
  {
    title: "Dispute Resolution",
    description:
      "Business disputes can derail your company. We provide strategic counsel for negotiation, mediation, and litigation to resolve conflicts efficiently and protect your business.",
  },
];

export default function AdditionalServicesPage() {
  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2243642331.jpg"
      heroAlt="Business legal services beyond LLC formation"
      label="Services"
      title="Additional Legal Services"
      description="Your business needs more than formation — it needs ongoing legal support. We offer a full range of business legal services to protect and grow your company."
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="mb-[3rem] max-w-[42.5rem]">
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-4">
              Legal services for every stage of your business
            </h2>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6]">
              From lease negotiations to dispute resolution, our attorneys provide the strategic legal support your business needs to thrive in California.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-[1rem] p-6">
                <h3 className="font-serif text-[1.25rem] leading-[1.2] text-black mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-[0.9rem] text-gray-600 leading-[1.6]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[3rem] bg-green-800 rounded-[1rem] p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-center">
              <div>
                <h3 className="font-serif text-[2rem] text-white mb-4">
                  Need something else?
                </h3>
                <p className="font-sans text-[1rem] text-white/70 leading-[1.6] mb-6">
                  Every business is unique. If you have a legal need that isn&apos;t listed here, contact us. Chances are, we can help — or we&apos;ll connect you with someone who can.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
                <img
                  src="/amyersnapa-attachments/iStock-2218831325.jpg"
                  alt="Business attorney consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
