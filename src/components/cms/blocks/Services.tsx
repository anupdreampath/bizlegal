import Link from "next/link";

export default function ServicesBlock({ content, style, blockId }: any) {
  const s = style || {};
  return (
    <section
      data-block-id={blockId}
      data-block-type="services"
      className="py-[4rem] md:py-[5.5rem]"
      style={{ backgroundColor: s.backgroundColor || "#166534" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="border-t-2 pt-6 mb-[3rem] md:mb-[4rem]" style={{ borderColor: s.textColor || "#fff" }}>
          <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#fff" }}>
            {content.eyebrow}
          </p>
        </div>
        <div className="max-w-[42.5rem] mb-[3rem] md:mb-[4rem]">
          <h2
            className="font-serif leading-[1.05]"
            style={{
              color: s.textColor || "#fff",
              fontSize: "clamp(2.75rem, 5vw, " + (s.headingSize || "4.75rem") + ")",
            }}
          >
            {content.heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {(content.cards || []).map((card: any, idx: number) => (
            <div
              key={idx}
              className="rounded-[0.7rem] md:rounded-[1rem] p-[1.5rem] pb-[2.5rem] md:p-[2rem] md:pb-[3rem]"
              style={{ backgroundColor: s.cardBackgroundColor || "#22c55e" }}
            >
              <h3 className="font-serif text-[1.875rem] md:text-[2.25rem] leading-[1.1] mb-4" style={{ color: s.cardTextColor || "#fff" }}>
                {card.title}
              </h3>
              <p className="font-sans text-base md:text-[1.125rem] leading-[1.5] mb-8" style={{ color: s.cardTextColor || "rgba(255,255,255,0.85)" }}>
                {card.description}
              </p>
              {card.cta?.label && (
                <Link
                  href={card.cta.href || "#"}
                  className="inline-flex items-center px-7 py-3 text-sm font-sans font-medium rounded-full transition-opacity duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: s.ctaBg || "#fff",
                    color: s.ctaColor || "#166534",
                  }}
                >
                  {card.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
