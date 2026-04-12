import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-ivory-100 pt-[7rem] pb-[4rem] md:pt-[9rem] md:pb-[5rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left text */}
          <div>
            <h1 className="font-serif text-[2.75rem] md:text-[3.75rem] xl:text-[4.75rem] leading-[1.05] text-black mb-6">
              Form your California LLC and make it count
            </h1>

            <p className="font-sans text-[1rem] md:text-[1.125rem] text-gray-600 leading-[1.6] max-w-[28rem] mb-10">
              Expert-guided LLC formation and management. We handle the
              paperwork so you can focus on building your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/questionnaire"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Start Your LLC
              </Link>
              <Link
                href="/questionnaire"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-black border border-black rounded-full hover:opacity-60 transition-opacity duration-200 cursor-pointer"
              >
                Submit a Request
              </Link>
            </div>
          </div>

          {/* Right — hero illustration */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-[1rem] overflow-hidden">
              <Image
                src="/images/hero-llc.svg"
                alt="California LLC formation process — Articles of Organization, EIN confirmation, and compliance tracking"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
