import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-ivory-100 pt-[7rem] pb-[4rem] md:pt-[9rem] md:pb-[5rem]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left text */}
          <div>
            <h1 className="font-serif text-[2.75rem] md:text-[3.75rem] xl:text-[4.75rem] leading-[1.05] text-black mb-6 uppercase">
              We&apos;ll form your California LLC, fast &amp; easy
            </h1>

            <p className="font-sans text-[1rem] md:text-[1.125rem] text-gray-600 leading-[1.6] max-w-[34rem] mb-10">
              You need to know your business is formed right, right from the
              start. If you DIY with traditional online services, you&apos;re
              guessing. We&apos;re full service and run by lawyers. Get real
              legal advice and service at the speed and efficiency of our
              online platform. Don&apos;t DIY — we&apos;ll D-I-F-Y (Do It For
              You)!
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/questionnaire"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Get Started
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[1rem] font-sans font-medium text-black border border-black rounded-full hover:opacity-60 transition-opacity duration-200 cursor-pointer"
              >
                More Information
              </Link>
            </div>
          </div>

          {/* Right — California hero photo */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-[1rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1502285745115-13e43e3faad4?auto=format&fit=crop&w=1600&q=80"
                alt="Golden Gate Bridge in San Francisco, California — symbolizing California LLC formation by biz.legal"
                width={1600}
                height={1200}
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
