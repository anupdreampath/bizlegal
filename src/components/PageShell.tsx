"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";
import CmsPageRuntime from "./cms/CmsPageRuntime";
import CmsHeader from "./cms/CmsHeader";
import CmsFooter from "./cms/CmsFooter";
import { fastImageUrl } from "./cms/imageSource";

export default function PageShell({
  children,
  label,
  title,
  description,
  heroImage,
  heroAlt,
  cmsSlug,
  heroVariant = "default",
}: {
  children: React.ReactNode;
  label: string;
  title: string;
  description?: string;
  heroImage?: string;
  heroAlt?: string;
  cmsSlug?: string;
  heroVariant?: "default" | "homepage" | "mobileHomepage";
}) {
  const [theme, setTheme] = useState<Record<string, unknown>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/theme")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.theme) setTheme(data.theme);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const homeStyleFallback = (
    <>
      <section className="cms-hero-section bg-ivory-100">
        <div className="max-w-[90rem] mx-auto px-5 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-12 lg:gap-3 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 mb-6">
                <BadgeCheck className="w-4 h-4 text-green-800" />
                <p className="text-[0.8rem] font-sans font-bold text-black uppercase">
                  {label}
                </p>
              </div>
              <h1 className="hidden md:block font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-black max-w-[50rem]">
                {title}
              </h1>
              {description && (
                <p className="hidden sm:block font-sans text-[1rem] md:text-[1.125rem] text-gray-600 leading-[1.6] mt-5 mb-6 md:mb-10 max-w-[36rem] sm:mx-auto lg:mx-0">
                  {description}
                </p>
              )}
              <div className="flex flex-row flex-nowrap justify-center lg:justify-start gap-2 sm:gap-3">
                <a
                  href="/order"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center px-4 sm:px-8 py-3.5 text-sm sm:text-base font-sans font-medium text-white bg-green-800 rounded-full"
                >
                  I&apos;m Ready!
                </a>
                <a
                  href="/questionnaire"
                  className="inline-flex flex-1 sm:flex-none items-center justify-center px-4 sm:px-8 py-3.5 text-sm sm:text-base font-sans font-medium text-green-800 border border-green-800 rounded-full"
                >
                  More Information
                </a>
              </div>
              <div className="hidden md:grid md:grid-cols-3 gap-3 mt-8 max-w-[42rem]">
                {["16 years experience", "California business law", "Law firm support"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-[0.7rem] bg-white/70 border border-black/5 px-3 py-3">
                    <ShieldCheck className="w-4 h-4 text-green-800 flex-shrink-0" />
                    <span className="font-sans text-[0.8rem] font-bold text-black">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {heroImage && (
              <div className="order-1 lg:order-2 relative justify-self-center lg:justify-self-end w-full max-w-[21.5rem] sm:max-w-[22rem] lg:max-w-[28rem]">
                <div className="relative rounded-[1.25rem] lg:rounded-[1rem] overflow-hidden shadow-[0_1.25rem_3rem_rgba(0,0,0,0.14)] lg:shadow-none">
                  <div className="md:hidden absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm">
                    <BadgeCheck className="w-3.5 h-3.5 text-green-800" />
                    <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wide text-black">
                      {label}
                    </span>
                  </div>
                  <div className="md:hidden absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-4 pb-4 pt-16">
                    <h1 className="font-serif text-[2.1rem] leading-[0.98] text-white drop-shadow-sm">
                      {title}
                    </h1>
                  </div>
                  <Image
                    src={fastImageUrl(heroImage)}
                    alt={heroAlt || title}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 768px) 88vw, 28rem"
                    className="block w-full h-auto object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <div className="hidden md:block absolute left-4 right-4 bottom-4 rounded-[0.8rem] bg-white/95 p-4 shadow-lg">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="font-serif text-[1.25rem] leading-[1.2] text-black">
                    Real California lawyers, built for modern business owners.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {children}
    </>
  );

  const defaultFallback = (
    <>
      {/* Page hero */}
      <section className="hidden md:block bg-green-800 pt-[7rem] pb-[4rem] md:pt-[9rem] md:pb-[5rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className={heroImage ? "grid lg:grid-cols-2 gap-10 items-center" : ""}>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 mb-6">
                <BadgeCheck className="w-4 h-4 text-white" />
                <p className="text-[0.8rem] font-sans font-bold text-white uppercase">
                  {label}
                </p>
              </div>
              <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white max-w-[50rem]">
                {title}
              </h1>
              {description && (
                <p className="font-sans text-[1rem] md:text-[1.125rem] text-white/70 leading-[1.6] mt-5 max-w-[36rem]">
                  {description}
                </p>
              )}
              <div className="grid sm:grid-cols-3 gap-3 mt-8 max-w-[42rem]">
                {["Attorney-drafted documents", "Attorney-guided decisions", "Fast delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-[0.7rem] bg-white/10 border border-white/10 px-3 py-3">
                    <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="font-sans text-[0.8rem] font-bold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {heroImage && (
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
                  <Image
                    src={fastImageUrl(heroImage)}
                    alt={heroAlt || title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <div className="absolute left-4 right-4 bottom-4 rounded-[0.8rem] bg-white/95 p-4 shadow-lg">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="font-serif text-[1.25rem] leading-[1.2] text-black">
                    Practical formation support for founders who want it done right.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Page content */}
      {children}
    </>
  );

  const mobileHomeStyleFallback = (
    <>
      <div className="md:hidden">
        <section className="cms-hero-section bg-ivory-100">
          <div className="max-w-[90rem] mx-auto px-5">
            <div className="grid gap-5 items-center">
              {heroImage && (
                <div className="relative justify-self-center w-full max-w-[21.5rem]">
                  <div className="relative rounded-[1.25rem] overflow-hidden shadow-[0_1.25rem_3rem_rgba(0,0,0,0.14)]">
                    <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm">
                      <BadgeCheck className="w-3.5 h-3.5 text-green-800" />
                      <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wide text-black">
                        {label}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-4 pb-4 pt-16">
                      <h1 className="font-serif text-[2.1rem] leading-[0.98] text-white drop-shadow-sm">
                        {title}
                      </h1>
                    </div>
                    <Image
                      src={fastImageUrl(heroImage)}
                      alt={heroAlt || title}
                      width={1600}
                      height={1200}
                      sizes="88vw"
                      className="block w-full h-auto object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-row flex-nowrap justify-center gap-2">
                <a
                  href="/order"
                  className="inline-flex flex-1 items-center justify-center px-4 py-3.5 text-sm font-sans font-medium text-white bg-green-800 rounded-full"
                >
                  I&apos;m Ready!
                </a>
                <a
                  href="/questionnaire"
                  className="inline-flex flex-1 items-center justify-center px-4 py-3.5 text-sm font-sans font-medium text-green-800 border border-green-800 rounded-full"
                >
                  More Information
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="hidden md:block">
        <section className="bg-green-800 pt-[9rem] pb-[5rem]">
          <div className="max-w-[90rem] mx-auto px-[4.5rem]">
            <div className={heroImage ? "grid lg:grid-cols-2 gap-10 items-center" : ""}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 mb-6">
                  <BadgeCheck className="w-4 h-4 text-white" />
                  <p className="text-[0.8rem] font-sans font-bold text-white uppercase">
                    {label}
                  </p>
                </div>
                <h1 className="font-serif text-[3.5rem] xl:text-[4.75rem] leading-[1.05] text-white max-w-[50rem]">
                  {title}
                </h1>
                {description && (
                  <p className="font-sans text-[1.125rem] text-white/70 leading-[1.6] mt-5 max-w-[36rem]">
                    {description}
                  </p>
                )}
                <div className="grid grid-cols-3 gap-3 mt-8 max-w-[42rem]">
                  {["Attorney-drafted documents", "Attorney-guided decisions", "Fast delivery"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-[0.7rem] bg-white/10 border border-white/10 px-3 py-3">
                      <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="font-sans text-[0.8rem] font-bold text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {heroImage && (
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
                    <Image
                      src={fastImageUrl(heroImage)}
                      alt={heroAlt || title}
                      fill
                      sizes="50vw"
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="absolute left-4 right-4 bottom-4 rounded-[0.8rem] bg-white/95 p-4 shadow-lg">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-black text-black" />
                      ))}
                    </div>
                    <p className="font-serif text-[1.25rem] leading-[1.2] text-black">
                      Practical formation support for founders who want it done right.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      {children}
    </>
  );

  const fallback =
    heroVariant === "homepage"
      ? homeStyleFallback
      : heroVariant === "mobileHomepage"
        ? mobileHomeStyleFallback
        : (
          <>
            <div className="md:hidden">
              <section className="bg-green-800 pt-24 pb-10">
                <div className="max-w-[90rem] mx-auto px-5">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 mb-6">
                      <BadgeCheck className="w-4 h-4 text-white" />
                      <p className="text-[0.8rem] font-sans font-bold text-white uppercase">
                        {label}
                      </p>
                    </div>
                    <h1 className="font-serif text-[2.75rem] leading-[1.05] text-white max-w-[50rem]">
                      {title}
                    </h1>
                    {description && (
                      <p className="font-sans text-[1rem] text-white/70 leading-[1.6] mt-5 max-w-[36rem]">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              </section>
              {children}
            </div>
            <div className="hidden md:block">{defaultFallback}</div>
          </>
        );

  return (
    <>
      <CmsHeader theme={theme} />
      <main>
        <CmsPageRuntime slug={cmsSlug} fallback={fallback} />
      </main>
      <CmsFooter theme={theme} />
    </>
  );
}
