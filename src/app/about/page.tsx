import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "About biz.legal — Real California Lawyers, Online Speed",
  description:
    "biz.legal is a legal tech platform founded by long time business attorney Alexander Myers. We combine attorney-grade LLC formation with online efficiency.",
};

export default function AboutPage() {
  return (
    <PageShell
      heroImage="/amyersnapa-attachments/iStock-2243799864.jpg"
      heroAlt="California business owners in a strategy session with biz.legal"
      label="About"
      title="A law firm with the speed of an online platform"
      description="biz.legal is run by lawyers, but built like a tech company — so California business owners get real legal advice without the traditional law firm bill."
    >
      {/* Story */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem] items-start">
            <div>
              <div className="border-t-2 border-black pt-6 mb-8">
                <p className="text-[1rem] font-sans font-bold text-black uppercase">
                  Our Story
                </p>
              </div>

              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Built for California business owners
              </h2>

              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Biz.legal is a legal tech platform founded by long time business attorney and small business owner/entrepreneur Alexander Myers. Having represented small and regional businesses for the past 16 years, Alex has helped countless business owners, investors, and entrepreneurs through every stage of their business life cycle.
                </p>
                <p>
                  He has formed and owns several other businesses of his own, and witnessed a gap in the business law market. Most business owners don&apos;t feel confident forming their own business entities online, but the price, timing, and intimidation of working with traditional law firms is not competitive in the modern world, and is unappealing to people who are busy working on their businesses, not trying to learn the ins and outs of business law to navigate a DIY legal website.
                </p>
                <p>
                  The system lacked a solution that provided the confidence of working with a law firm, but embraced the speed and efficiency of a tech solution. Biz.legal is intended to support the needs of small business owners, and provide a high level of service, support, and confidence that your business was started and operates the right way, right away.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
                <Image
                  src="/Alex%20Myers.jpeg"
                  alt="Alexander Myers, founder of biz.legal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[50%_35%]"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-[1rem] overflow-hidden">
                <Image
                  src="/amyersnapa-attachments/iStock-2218831325.jpg"
                  alt="biz.legal team advising California business owners"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-6 mb-[3rem]">
            <p className="text-[1rem] font-sans font-bold text-black uppercase">
              Our Values
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expertise", text: "Deep specialization in California LLC law — not a generalist filing service." },
              { title: "Transparency", text: "No hidden fees, no surprises. Every cost is communicated before work begins." },
              { title: "Responsiveness", text: "Direct access to your specialist. Questions answered within one business day." },
              { title: "Accuracy", text: "Every filing reviewed by licensed attorneys. Every document prepared with precision." },
            ].map((value) => (
              <div key={value.title} className="border-t border-black pt-6">
                <h3 className="font-serif text-[1.5rem] text-black mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 py-[4rem] md:py-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "LLCs formed" },
              { number: "98%", label: "Client satisfaction" },
              { number: "16", label: "Years of experience" },
              { number: "4.9/5", label: "Average rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-[2.5rem] md:text-[3rem] text-white">{stat.number}</p>
                <p className="font-sans text-[0.9rem] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
