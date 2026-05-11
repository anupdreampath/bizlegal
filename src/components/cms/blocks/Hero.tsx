import Link from "next/link";
import { CmsMedia } from "../CmsMedia";

export default function HeroBlock({ content, style, blockId }: any) {
  const s = style || {};
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
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div>
            {content.eyebrow && (
              <p className="font-sans font-bold uppercase text-sm mb-4" style={{ color: s.textColor }}>
                {content.eyebrow}
              </p>
            )}
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
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[1rem] overflow-hidden">
              <CmsMedia
                image={content.image}
                className="w-full h-full object-cover"
                width={1600}
                height={1200}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
