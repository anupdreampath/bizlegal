import Link from "next/link";

export default function ProcessBlock({ content, style, blockId }: any) {
  const s = style || {};
  return (
    <section
      data-block-id={blockId}
      data-block-type="process"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#efeadc" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="border-t-2 pt-6 mb-[2rem]" style={{ borderColor: s.textColor || "#000" }}>
          <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>
            {content.eyebrow}
          </p>
        </div>
        <div className="max-w-[42.5rem] mb-[3rem] md:mb-[4rem]">
          <h2
            className="font-serif leading-[1.05]"
            style={{ color: s.textColor || "#000", fontSize: "clamp(2.75rem, 5vw, 4.75rem)" }}
          >
            {content.heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1.75rem] md:gap-[1.5rem]">
          {(content.steps || []).map((step: any, i: number) => (
            <div key={i} className="border-t pt-6" style={{ borderColor: s.textColor || "#000" }}>
              <span className="text-sm font-sans font-bold uppercase tracking-wider" style={{ color: s.mutedColor || "#9ca3af" }}>
                Step {step.number}
              </span>
              <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.15] mt-3 mb-3" style={{ color: s.textColor || "#000" }}>
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-[1.6]" style={{ color: s.bodyColor || "#4b5563" }}>
                {step.description}
              </p>
              {step.cta?.label && (
                <Link
                  href={step.cta.href || "#"}
                  className="inline-flex items-center mt-5 px-5 py-2.5 text-sm font-sans font-medium rounded-full transition-colors duration-200"
                  style={{ backgroundColor: s.ctaBg || "#166534", color: s.ctaColor || "#fff" }}
                >
                  {step.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        {content.cta?.label && (
          <div className="mt-[3rem] md:mt-[4rem]">
            <Link
              href={content.cta.href || "#"}
              className="inline-flex items-center px-8 py-3.5 text-base font-sans font-medium rounded-full transition-colors duration-200"
              style={{ backgroundColor: s.ctaBg || "#166534", color: s.ctaColor || "#fff" }}
            >
              {content.cta.label}
            </Link>
            {content.ctaSubtext && (
              <p className="text-sm font-sans mt-3" style={{ color: s.bodyColor || "#4b5563" }}>
                {content.ctaSubtext}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
