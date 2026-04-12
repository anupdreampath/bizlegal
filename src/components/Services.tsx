import Link from "next/link";

const services = [
  {
    title: "LLC Formation",
    description:
      "Complete California LLC formation — Articles of Organization, Operating Agreement, EIN acquisition, and state filing handled for you.",
  },
  {
    title: "LLC Management",
    description:
      "Ongoing compliance services to keep your LLC in good standing. Annual filings, franchise tax, and record maintenance.",
  },
  {
    title: "Registered Agent",
    description:
      "Professional registered agent service ensuring you never miss critical legal documents or state correspondence.",
  },
  {
    title: "Business Structuring",
    description:
      "Expert guidance on structuring your LLC for maximum legal protection, tax efficiency, and operational flexibility.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-green-800 py-[4rem] md:py-[5.5rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        {/* Section label */}
        <div className="border-t-2 border-white pt-6 mb-[3rem] md:mb-[4rem]">
          <p className="text-[1rem] md:text-[1.125rem] font-sans font-bold text-white uppercase">
            Our Services
          </p>
        </div>

        {/* Heading */}
        <div className="max-w-[42.5rem] mb-[3rem] md:mb-[4rem]">
          <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white">
            Everything you need to start and run your California LLC
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-green-500 rounded-[0.7rem] md:rounded-[1rem] p-[1.5rem] pb-[2.5rem] md:p-[2rem] md:pb-[3rem]"
            >
              <h3 className="font-serif text-[1.875rem] md:text-[2.25rem] leading-[1.1] text-white mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/80 leading-[1.5] mb-8">
                {service.description}
              </p>
              <Link
                href="/questionnaire"
                className="inline-flex items-center px-7 py-3 text-[0.95rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
