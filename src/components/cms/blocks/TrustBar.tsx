"use client";

export default function TrustBarBlock({ content, style, blockId }: any) {
  const s = style || {};
  const items = content.items || [];
  const marqueeItems = [...items, ...items];
  return (
    <section
      data-block-id={blockId}
      data-block-type="trustBar"
      className="py-[3rem] md:py-[4rem]"
      style={{ backgroundColor: s.backgroundColor || "#efeadc" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <p
          className="text-base font-sans font-bold uppercase text-center mb-5"
          style={{ color: s.labelColor || "#000" }}
        >
          {content.label}
        </p>
        <div className="border-t-2 mb-8" style={{ borderColor: s.lineColor || "#000" }} />
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {marqueeItems.map((name: string, i: number) => (
            <div key={`${name}-${i}`} className="flex-shrink-0 flex items-center justify-center px-10 md:px-14">
              <span
                className="font-serif whitespace-nowrap"
                style={{ color: s.textColor || "#6b7280", fontSize: s.fontSize || "1.75rem" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
