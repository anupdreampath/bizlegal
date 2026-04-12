import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Submit your request",
    description:
      "Complete our guided questionnaire about your business goals, LLC needs, and company structure. No payment required.",
  },
  {
    number: "02",
    title: "Expert review",
    description:
      "Our team reviews your submission and prepares a customized LLC formation or management plan tailored to your situation.",
  },
  {
    number: "03",
    title: "Document preparation",
    description:
      "We prepare all necessary legal documents — Articles of Organization, Operating Agreement, and required state filings.",
  },
  {
    number: "04",
    title: "Formation & launch",
    description:
      "We file with the California Secretary of State and deliver all documents through your secure client portal.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ivory-200 py-[4rem] md:py-[6rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        {/* Section label */}
        <div className="border-t-2 border-black pt-6 mb-[2rem]">
          <p className="text-[1rem] md:text-[1.125rem] font-sans font-bold text-black uppercase">
            How It Works
          </p>
        </div>

        {/* Heading */}
        <div className="max-w-[42.5rem] mb-[3rem] md:mb-[4rem]">
          <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-black">
            Your path to a California LLC in four steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1.75rem] md:gap-[1.5rem]">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-black pt-6">
              <span className="text-[0.85rem] font-sans font-bold text-gray-400 uppercase tracking-wider">
                Step {step.number}
              </span>
              <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.15] text-black mt-3 mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[3rem] md:mt-[4rem]">
          <Link
            href="/questionnaire"
            className="inline-flex items-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
          >
            Start the Process
          </Link>
          <p className="text-[0.9rem] font-sans text-gray-600 mt-3">
            No payment required to submit your request.
          </p>
        </div>
      </div>
    </section>
  );
}
