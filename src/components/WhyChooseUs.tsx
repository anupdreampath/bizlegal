export default function WhyChooseUs() {
  const features = [
    {
      title: "California Specialists",
      description:
        "We focus exclusively on California LLCs — giving us unmatched expertise in state-specific requirements, tax obligations, and regulatory compliance.",
    },
    {
      title: "Attorney-Guided Process",
      description:
        "Every document is reviewed by experienced business attorneys who understand California's legal landscape and your specific needs.",
    },
    {
      title: "Fast Formation",
      description:
        "Standard formation in 5-7 business days with expedited options available. We file with the Secretary of State and handle every detail.",
    },
    {
      title: "Ongoing Support",
      description:
        "We don't just form your LLC — we help you maintain it with proactive compliance monitoring, annual filings, and dedicated support.",
    },
  ];

  return (
    <section id="about" className="bg-ivory-100 py-[4rem] md:py-[6rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid md:grid-cols-2 gap-[3rem] md:gap-[5rem] items-start">
          {/* Left — team illustration */}
          <div>
            <div className="aspect-[4/3] rounded-[1rem] overflow-hidden">
              <img
                src="/images/team-office.svg"
                alt="Biz Legal team collaborating on LLC formation documents"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — content */}
          <div>
            {/* Section label */}
            <div className="border-t-2 border-black pt-6 mb-[2rem]">
              <p className="text-[1rem] font-sans font-bold text-black uppercase">
                Why Biz Legal
              </p>
            </div>

            <h2 className="font-serif text-[2.75rem] md:text-[3.25rem] leading-[1.05] text-black mb-[2.5rem]">
              The trusted authority in California LLC services
            </h2>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="border-t border-gray-200 pt-6"
                >
                  <h3 className="font-sans text-[1rem] font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[1rem] text-gray-600 leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
