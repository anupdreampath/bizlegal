import { CmsMedia } from "../CmsMedia";

export default function WhyChooseUsBlock({ content, style, blockId }: any) {
  const s = style || {};
  return (
    <section
      data-block-id={blockId}
      data-block-type="whyChooseUs"
      className="py-[4rem] md:py-[6rem]"
      style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="grid md:grid-cols-2 gap-[3rem] md:gap-[5rem] items-start">
          <div>
            <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
              <CmsMedia image={content.image} fill className="object-cover" />
            </div>
          </div>
          <div>
            <div className="border-t-2 pt-6 mb-[2rem]" style={{ borderColor: s.textColor || "#000" }}>
              <p className="text-base font-sans font-bold uppercase" style={{ color: s.textColor || "#000" }}>
                {content.eyebrow}
              </p>
            </div>
            <h2
              className="font-serif leading-[1.05] mb-[2.5rem]"
              style={{ color: s.textColor || "#000", fontSize: "clamp(2.5rem, 4.5vw, 3.25rem)" }}
            >
              {content.heading}
            </h2>
            <div className="space-y-8">
              {(content.features || []).map((f: any, i: number) => (
                <div key={i} className="border-t border-gray-200 pt-6">
                  <h3 className="font-sans text-base font-bold mb-2" style={{ color: s.textColor || "#000" }}>
                    {f.title}
                  </h3>
                  <p className="font-sans text-base leading-[1.6]" style={{ color: s.bodyColor || "#4b5563" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
