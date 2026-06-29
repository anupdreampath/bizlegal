import Link from "next/link";

type StatusContent = { heading?: string; body?: string; cta?: { label?: string; href?: string } };
type StatusStyle = { backgroundColor?: string; textColor?: string; bodyColor?: string; ctaBg?: string; ctaColor?: string };

function asContent(value: unknown): StatusContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as StatusContent : {};
}

function asStyle(value: unknown): StatusStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as StatusStyle : {};
}

export default function StatusPageBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);
  return (
    <section className="min-h-screen pt-[9rem] pb-[6rem] px-6" style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-[3rem] leading-tight mb-4" style={{ color: s.textColor || "#000000" }}>{c.heading}</h1>
        <p className="font-sans text-base mb-6" style={{ color: s.bodyColor || "#4b5563" }}>{c.body}</p>
        {c.cta?.label && (
          <Link href={c.cta.href || "/"} className="inline-flex rounded-full px-6 py-3 font-sans" style={{ backgroundColor: s.ctaBg || "#166534", color: s.ctaColor || "#ffffff" }}>
            {c.cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
