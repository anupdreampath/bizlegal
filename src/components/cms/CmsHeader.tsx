import Link from "next/link";
import Image from "next/image";

type ThemeMap = Record<string, unknown>;
type LinkItem = { label?: string; href?: string };

function asRecord(value: unknown): ThemeMap {
  return value && typeof value === "object" && !Array.isArray(value) ? value as ThemeMap : {};
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asLinks(value: unknown): LinkItem[] {
  return Array.isArray(value) ? value.filter((item): item is LinkItem => !!item && typeof item === "object") : [];
}

const defaultLinks: LinkItem[] = [
  { label: "Services", href: "/services/llc-formation" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function CmsHeader({ theme }: { theme: unknown }) {
  const source = asRecord(theme);
  const brand = asRecord(source.brand);
  const header = asRecord(source.header);
  const logoText = asString(brand.logoText, "biz.legal");
  const accent = asString(brand.logoAccentColor, "#166534");
  const links = asLinks(header.links);
  const navLinks = links.length ? links : defaultLinks;
  const logoUrl = asString(header.logoUrl);
  const ctaLabel = asString(header.ctaLabel, "Order Your LLC Formation");
  const ctaHref = asString(header.ctaHref, "/order");

  const backgroundColor = asString(header.backgroundColor, "rgba(248,245,237,0.85)");
  const textColor = asString(header.textColor, asString(brand.textColor, "#000000"));
  const ctaBackground = asString(header.ctaBackgroundColor, asString(brand.primaryColor, "#166534"));
  const ctaTextColor = asString(header.ctaTextColor, "#ffffff");

  return (
    <header
      data-cms-global="header"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur"
      style={{ backgroundColor }}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {logoUrl ? (
            <Image src={logoUrl} alt={asString(header.logoAlt, logoText)} width={140} height={32} unoptimized />
          ) : (
            <span className="font-serif text-[1.5rem]" style={{ color: textColor }}>
              {logoText.includes(".") ? (
                <>
                  {logoText.split(".")[0]}
                  <span style={{ color: accent }}>.</span>
                  {logoText.split(".").slice(1).join(".")}
                </>
              ) : (
                logoText
              )}
            </span>
          )}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href || "#"} className="text-sm hover:opacity-60 transition-opacity" style={{ color: textColor }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href={ctaHref}
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-full transition-colors"
          style={{ backgroundColor: ctaBackground, color: ctaTextColor }}
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
