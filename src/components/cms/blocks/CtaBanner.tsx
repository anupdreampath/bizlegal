import Link from "next/link";

export default function CtaBannerBlock({ content, style, blockId }: any) {
  const s = style || {};
  return (
    <section
      data-block-id={blockId}
      data-block-type="ctaBanner"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#166534" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="max-w-[42.5rem]">
          <h2
            className="font-serif leading-[1.05] mb-6"
            style={{ color: s.textColor || "#fff", fontSize: "clamp(2.75rem, 5vw, 4.75rem)" }}
          >
            {content.heading}
          </h2>
          <p className="font-sans text-base md:text-[1.125rem] leading-[1.6] mb-10" style={{ color: s.bodyColor || "rgba(255,255,255,0.7)" }}>
            {content.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {content.primaryCta?.label && (
              <Link
                href={content.primaryCta.href || "#"}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-sans font-medium rounded-full transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundColor: s.primaryCtaBg || "#fff", color: s.primaryCtaColor || "#166534" }}
              >
                {content.primaryCta.label}
              </Link>
            )}
            {content.secondaryCta?.label && (
              <Link
                href={content.secondaryCta.href || "#"}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-sans font-medium rounded-full transition-colors duration-200 border"
                style={{ borderColor: s.secondaryCtaBorder || "rgba(255,255,255,0.4)", color: s.secondaryCtaColor || "#fff" }}
              >
                {content.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
