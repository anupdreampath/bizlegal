import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      label="About"
      title="California's trusted LLC partner"
      description="We've helped thousands of entrepreneurs and business owners form and manage their California LLCs with confidence."
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
                  Biz Legal was founded with a simple mission: make LLC
                  formation and management accessible, affordable, and
                  stress-free for every California entrepreneur.
                </p>
                <p>
                  We saw too many business owners overwhelmed by
                  paperwork, confused by compliance requirements, or paying
                  excessive fees for services that should be straightforward.
                  So we built a better way — combining legal expertise with
                  modern technology to deliver an experience that&apos;s as
                  polished as the businesses we help create.
                </p>
                <p>
                  Every document we prepare is reviewed by experienced
                  business attorneys who understand California&apos;s regulatory
                  landscape. Every filing is tracked, every deadline is
                  monitored, and every client has direct access to their
                  dedicated specialist.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-ivory-200 rounded-[1rem] flex items-center justify-center">
                <p className="text-[0.9rem] font-sans text-gray-400">Team Photo Placeholder</p>
              </div>
              <div className="aspect-[3/2] bg-ivory-200 rounded-[1rem] flex items-center justify-center">
                <p className="text-[0.9rem] font-sans text-gray-400">Office Photo Placeholder</p>
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
