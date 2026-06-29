import { fastImageUrl } from "../imageSource";

type RichContent = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  image?: { url?: string; alt?: string; type?: "image" | "video" };
};

type RichStyle = {
  backgroundColor?: string;
  textColor?: string;
  bodyColor?: string;
  maxWidth?: string;
  paddingY?: string;
};

function asContent(value: unknown): RichContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as RichContent : {};
}

function asStyle(value: unknown): RichStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as RichStyle : {};
}

export default function RichContentBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);

  return (
    <section
      className="px-6 md:px-[4.5rem]"
      style={{
        backgroundColor: s.backgroundColor || "#f8f5ed",
        paddingTop: s.paddingY || "5rem",
        paddingBottom: s.paddingY || "5rem",
      }}
    >
      <div className="mx-auto grid lg:grid-cols-[1fr_0.45fr] gap-10 items-start" style={{ maxWidth: s.maxWidth || "72rem" }}>
        <div>
          {c.eyebrow && (
            <p className="mb-4 font-sans text-sm font-bold uppercase tracking-wide" style={{ color: s.textColor || "#000000" }}>
              {c.eyebrow}
            </p>
          )}
          {c.heading && (
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] mb-6" style={{ color: s.textColor || "#000000" }}>
              {c.heading}
            </h2>
          )}
          <div
            className="cms-rich-content font-sans text-base leading-[1.75]"
            style={{ color: s.bodyColor || "#4b5563" }}
            dangerouslySetInnerHTML={{ __html: c.body || "" }}
          />
        </div>
        <aside className="hidden lg:block rounded-[1rem] overflow-hidden bg-white border border-black/5 sticky top-24">
          <div className="relative aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fastImageUrl(c.image?.url || "/amyersnapa-attachments/iStock-2243799864.jpg")}
              alt={c.image?.alt || "California business owners working with biz.legal"}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="p-5">
            <p className="font-sans text-[0.75rem] font-bold uppercase text-green-800 mb-2">
              biz.legal approach
            </p>
            <p className="font-serif text-[1.35rem] leading-[1.2] text-black">
              Legal structure, filing details, and business next steps kept in one clear path.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
