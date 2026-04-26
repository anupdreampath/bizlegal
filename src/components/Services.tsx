import Link from "next/link";

const services = [
  {
    title: "Is an LLC Right for You?",
    description:
      "LLCs are great for many businesses, but not all. Do you need an entity? Is your business allowed to operate as an LLC? Are you considering California, Delaware, or other domicile states?",
  },
  {
    title: "LLC Formation",
    description:
      "Our full service team handles all state filings, document drafting, and other essential registrations, so you don't have to guess how. Take out the guesswork and leave the legal work to the professionals.",
  },
  {
    title: "Registered Agent",
    description:
      "Every business is required to have a registered agent, and we include that service for free for your first year.",
  },
  {
    title: "Legal Support",
    description:
      "After you form your business and as you grow, you're probably going to have some questions. Your LLC formation includes 1 year of attorney legal support*.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-green-800 py-[4rem] md:py-[5.5rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        {/* Section label */}
        <div className="border-t-2 border-white pt-6 mb-[3rem] md:mb-[4rem]">
          <p className="text-[1rem] md:text-[1.125rem] font-sans font-bold text-white uppercase">
            What We Do
          </p>
        </div>

        {/* Heading */}
        <div className="max-w-[42.5rem] mb-[3rem] md:mb-[4rem]">
          <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white">
            We form your business the right way from the start
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
