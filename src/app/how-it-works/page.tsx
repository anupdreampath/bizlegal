import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Our Easy System — Form Your California LLC in 4 Steps",
  description:
    "biz.legal's guaranteed 4-step process for forming your California LLC: decide, lawyer review, document preparation, and secure delivery.",
};

const steps = [
  { number: "01", title: "Decide you're ready", description: "If you're ready for us to form your LLC, we're here for you. If you're not sure if an LLC is right for you, or you have other questions, schedule a call with one of our lawyers to guide you. It's easy and affordable.", details: ["Free preliminary scoping", "Optional lawyer consult", "Choose your domicile (CA, DE, other)", "No payment to start"] },
  { number: "02", title: "Lawyer review", description: "Unlike DIY websites, we have real California lawyers on staff who personally review your LLC and ensure it's the best fit for you. A consultation phone call with a lawyer is included in your formation fee.", details: ["Direct call with a CA attorney", "Entity-fit review", "Tax & structuring guidance", "Custom recommendations"] },
  { number: "03", title: "Document preparation", description: "Our documents are expertly drafted by attorneys and customized to your business. We do it all for you and file everything you need with the appropriate agencies. No guesswork, no uncertainty, no problems for you.", details: ["Articles of Organization", "Custom Operating Agreement", "EIN application", "Initial Statement of Information"] },
  { number: "04", title: "Delivery", description: "Through our secure portal, all of your LLC documents are delivered seamlessly to you — ready to take to the bank, your landlord, your partners — to jump-start your business.", details: ["Secure client portal", "Bank-ready document set", "Free 1st-year registered agent", "1 year of attorney legal support*"] },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      cmsSlug="how-it-works"
heroImage="https://images.unsplash.com/photo-1758873268364-15bef4162221?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Two colleagues collaborating on a laptop — biz.legal LLC formation process"
      label="Our Easy System"
      title="Our guaranteed process in 4 easy steps"
      description="We've removed the guesswork: decide, talk to a lawyer, get attorney-drafted documents, and receive everything in your secure portal."
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="grid lg:grid-cols-2 gap-[2rem] lg:gap-[5rem] py-[3rem] border-t border-gray-200">
                <div>
                  <span className="text-[0.85rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                  <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mt-2 mb-4">
                    {step.title}
                  </h2>
                  <p className="font-sans text-[1rem] text-gray-600 leading-[1.6]">
                    {step.description}
                  </p>
                </div>
                <div className="bg-ivory-200 rounded-[1rem] p-6 md:p-8">
                  <p className="font-sans font-bold text-[0.9rem] text-black uppercase tracking-wider mb-4">
                    What&apos;s involved
                  </p>
                  <div className="space-y-3">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 border-b border-gray-200 pb-3">
                        <span className="text-green-800 font-bold">&#x2713;</span>
                        <span className="font-sans text-[0.95rem] text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-[3rem] mt-[1rem]">
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.1] text-black mb-4">
              After formation
            </h2>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6] max-w-[36rem] mb-8">
              Once your LLC is formed, all documents are delivered through your
              secure client portal. You can then opt into ongoing management
              services to keep your LLC compliant year after year.
            </p>
            <Link
              href="/questionnaire"
              className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
            >
              Start Your Request
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
