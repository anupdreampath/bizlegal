import Link from "next/link";
import type { CSSProperties } from "react";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";
import { CmsMedia } from "../CmsMedia";

export default function HeroBlock({ content, style, blockId }: any) {
  const s = style || {};
  const proofItems = content.proofItems || [
    "Attorney-reviewed",
    "California filings",
    "Custom documents",
  ];
  return (
    <section
      data-block-id={blockId}
      data-block-type="hero"
      className="cms-hero-section"
      style={{
        backgroundColor: s.backgroundColor || "#f8f5ed",
        "--hero-padding-y": s.paddingY || "9rem",
      } as CSSProperties}
    >
      <div className="max-w-[90rem] mx-auto px-5 md:px-[4.5rem]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-12 lg:gap-3 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 mb-6">
              <BadgeCheck className="w-4 h-4" style={{ color: s.primaryCtaBg || "#166534" }} />
              <span className="font-sans font-bold uppercase text-[0.8rem]" style={{ color: s.textColor || "#000" }}>
                {content.eyebrow || "Attorney-guided LLC support"}
              </span>
            </div>
            <h1
              data-field="heading"
              className={`hidden md:block font-serif leading-[1.05] mb-6 ${s.uppercase ? "uppercase" : ""}`}
              style={{
                color: s.textColor || "#000",
                fontSize: "clamp(2.1rem, 10vw, " + (s.headingSize || "4.75rem") + ")",
              }}
            >
              {content.heading}
            </h1>
            <p
              data-field="body"
              className="hidden sm:block font-sans leading-[1.6] max-w-[34rem] mb-6 md:mb-10 sm:mx-auto lg:mx-0"
              style={{
                color: s.bodyColor || "#4b5563",
                fontSize: `clamp(1rem, 4vw, ${s.bodySize || "1.125rem"})`,
              }}
            >
              {content.body}
            </p>
            <div className="flex flex-row flex-nowrap justify-center lg:justify-start gap-2 sm:gap-3">
              {content.primaryCta?.label && (
                <Link
                  href={content.primaryCta.href || "#"}
                  className="inline-flex flex-1 sm:flex-none items-center justify-center px-4 sm:px-8 py-3.5 text-sm sm:text-base font-sans font-medium rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: s.primaryCtaBg || "#166534",
                    color: s.primaryCtaColor || "#fff",
                  }}
                >
                  {content.primaryCta.label}
                </Link>
              )}
              {content.secondaryCta?.label && (
                <Link
                  href={content.secondaryCta.href || "#"}
                  className="inline-flex flex-1 sm:flex-none items-center justify-center px-4 sm:px-8 py-3.5 text-sm sm:text-base font-sans font-medium rounded-full transition-colors duration-200 border"
                  style={{
                    borderColor: s.secondaryCtaBorder || "#000",
                    color: s.secondaryCtaColor || "#000",
                  }}
                >
                  {content.secondaryCta.label}
                </Link>
              )}
            </div>
            <div className="hidden md:grid md:grid-cols-3 gap-3 mt-8 max-w-[42rem]">
              {proofItems.map((item: string) => (
                <div key={item} className="flex items-center gap-2 rounded-[0.7rem] bg-white/70 border border-black/5 px-3 py-3">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" style={{ color: s.primaryCtaBg || "#166534" }} />
                  <span className="font-sans text-[0.8rem] font-bold" style={{ color: s.textColor || "#000" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative justify-self-center lg:justify-self-end w-full max-w-[21.5rem] sm:max-w-[22rem] lg:max-w-[28rem]">
            <div className="relative rounded-[1.25rem] lg:rounded-[1rem] overflow-hidden shadow-[0_1.25rem_3rem_rgba(0,0,0,0.14)] lg:shadow-none">
              <div className="md:hidden absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm">
                <BadgeCheck className="w-3.5 h-3.5" style={{ color: s.primaryCtaBg || "#166534" }} />
                <span className="font-sans text-[0.68rem] font-bold uppercase tracking-wide text-black">
                  Lawyer-led LLC formation
                </span>
              </div>
              <div className="md:hidden absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-4 pb-4 pt-16">
                <h1
                  data-field="heading"
                  className={`font-serif text-[2.25rem] leading-[0.98] text-white drop-shadow-sm ${s.uppercase ? "uppercase" : ""}`}
                >
                  {content.heading}
                </h1>
              </div>
              <CmsMedia
                image={content.image}
                className="block w-full h-auto object-contain"
                width={1600}
                height={1200}
                priority
              />
            </div>
            <div className="hidden md:block absolute left-3 right-3 bottom-3 md:left-4 md:right-4 md:bottom-4 rounded-[0.8rem] bg-white/95 p-3 md:p-4 shadow-lg">
              <div className="hidden sm:flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <p className="font-serif text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] leading-[1.2] text-black">
                Trusted by founders who want speed without legal guesswork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
