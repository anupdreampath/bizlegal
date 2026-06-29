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
}: {
  children: React.ReactNode;
  label: string;
  title: string;
  description?: string;
  heroImage?: string;
  heroAlt?: string;
  cmsSlug?: string;
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

  const fallback = (
    <>
      {/* Page hero */}
      <section className="bg-green-800 pt-[7rem] pb-[4rem] md:pt-[9rem] md:pb-[5rem]">
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
                {["Attorney-reviewed", "California focused", "Documents delivered"].map((item) => (
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
