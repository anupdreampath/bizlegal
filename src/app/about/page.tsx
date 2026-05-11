import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "About biz.legal — Real California Lawyers, Online Speed",
  description:
    "biz.legal is a law firm built for California entrepreneurs. We combine attorney-grade LLC formation with online efficiency at a fraction of traditional firm cost.",
};

export default function AboutPage() {
  return (
    <PageShell
      cmsSlug="about"
heroImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Modern California law firm hallway — biz.legal attorney offices"
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
                  DIY formation websites can&apos;t give legal advice. Traditional
                  law firms are too expensive. biz.legal was built to be the
                  best of both — an online platform run by California lawyers,
                  delivering real legal counsel at a fraction of traditional
                  firm cost.
                </p>
                <p>
                  Our team has leveraged the efficiencies of tech companies to
                  give entrepreneurs reliable legal advice at the speed of a
                  DIY service — taking out the guesswork, so clients can be
                  confident their entity is the right choice for their
                  business and formed the right way for their protection.
                </p>
                <p>
                  Every document we prepare is reviewed by experienced
                  California business attorneys. Every filing is tracked,
                  every deadline monitored, and every client has direct
                  access to a real lawyer.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
                  alt="Modern California law firm hallway — biz.legal attorney offices"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-[1rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80"
                  alt="Shelves of legal books in a California law firm — biz.legal legal library"
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
              { number: "10+", label: "Years of experience" },
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
