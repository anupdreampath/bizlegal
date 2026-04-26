import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-green-800 py-[4rem] md:py-[6rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="max-w-[42.5rem]">
          <h2 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white mb-6">
            Don&apos;t DIY. We&apos;ll D-I-F-Y.
          </h2>
          <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mb-10">
            Real California lawyers. The speed of an online platform. A
            fraction of the cost. Tell us about your business and we&apos;ll
            handle the rest — no payment required to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/questionnaire"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-green-800 bg-white rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            >
              Get Started
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white border border-white/40 rounded-full hover:border-white transition-colors duration-200 cursor-pointer"
            >
              More Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
