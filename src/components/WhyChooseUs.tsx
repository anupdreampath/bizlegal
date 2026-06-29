import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Lawyers, Not a DIY Site",
      description:
        "DIY websites can't give legal advice. We can. Every formation is reviewed by a real California attorney before it's filed.",
    },
    {
      title: "Tech-Speed Service",
      description:
        "We've built our process on the same online efficiencies as the DIY platforms — without the guesswork. Faster, with real expertise behind it.",
    },
    {
      title: "A Fraction of the Cost",
      description:
        "Traditional law firms are expensive. We deliver attorney-grade formation and advice at a fraction of the price.",
    },
    {
      title: "1 Year of Legal Support",
      description:
        "Every formation includes a free year of attorney legal support and a free year of registered agent service — so you're covered as you grow.",
    },
  ];

  return (
    <section id="about" className="bg-ivory-100 py-[4rem] md:py-[6rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid md:grid-cols-2 gap-[3rem] md:gap-[5rem] items-start">
          {/* Left — attorney office photo */}
          <div>
            <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
              <Image
                src="/amyersnapa-attachments/iStock-2218831325.jpg"
                alt="biz.legal team reviewing business formation details with California entrepreneurs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — content */}
          <div>
            {/* Section label */}
            <div className="border-t-2 border-black pt-6 mb-[2rem]">
              <p className="text-[1rem] font-sans font-bold text-black uppercase">
                Why biz.legal
              </p>
            </div>

            <h2 className="font-serif text-[2.75rem] md:text-[3.25rem] leading-[1.05] text-black mb-[2.5rem]">
              The ease of DIY. The expertise of a law firm. A fraction of the cost.
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
