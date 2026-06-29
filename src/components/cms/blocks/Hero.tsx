import Link from "next/link";
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
      style={{
        backgroundColor: s.backgroundColor || "#f8f5ed",
        paddingTop: s.paddingY || "9rem",
        paddingBottom: s.paddingY ? `calc(${s.paddingY} - 4rem)` : "5rem",
      }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 mb-6">
              <BadgeCheck className="w-4 h-4" style={{ color: s.primaryCtaBg || "#166534" }} />
              <span className="font-sans font-bold uppercase text-[0.8rem]" style={{ color: s.textColor || "#000" }}>
                {content.eyebrow || "Attorney-guided LLC support"}
              </span>
            </div>
            <h1
              data-field="heading"
              className={`font-serif leading-[1.05] mb-6 ${s.uppercase ? "uppercase" : ""}`}
              style={{
                color: s.textColor || "#000",
                fontSize: "clamp(2.75rem, 5vw, " + (s.headingSize || "4.75rem") + ")",
                textAlign: s.align || "left",
              }}
            >
              {content.heading}
            </h1>
            <p
              data-field="body"
              className="font-sans leading-[1.6] max-w-[34rem] mb-10"
              style={{
                color: s.bodyColor || "#4b5563",
                fontSize: s.bodySize || "1.125rem",
                textAlign: s.align || "left",
              }}
            >
              {content.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {content.primaryCta?.label && (
                <Link
                  href={content.primaryCta.href || "#"}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-sans font-medium rounded-full transition-colors duration-200"
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
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-sans font-medium rounded-full transition-colors duration-200 border"
                  style={{
                    borderColor: s.secondaryCtaBorder || "#000",
                    color: s.secondaryCtaColor || "#000",
                  }}
                >
                  {content.secondaryCta.label}
                </Link>
              )}
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-8 max-w-[42rem]">
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
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-[5/4] rounded-[1rem] overflow-hidden">
              <CmsMedia
                image={content.image}
                className="w-full h-full object-cover"
                width={1600}
                height={1200}
                priority
              />
            </div>
            <div className="absolute left-4 right-4 bottom-4 rounded-[0.8rem] bg-white/95 p-4 shadow-lg">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <p className="font-serif text-[1.25rem] leading-[1.2] text-black">
                Trusted by founders who want speed without legal guesswork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
