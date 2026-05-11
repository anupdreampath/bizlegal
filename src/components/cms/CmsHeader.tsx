import Link from "next/link";
import Image from "next/image";

export default function CmsHeader({ theme }: { theme: any }) {
  const brand = theme?.brand || {};
  const header = theme?.header || {};
  const logoText = brand.logoText || "biz.legal";
  const accent = brand.logoAccentColor || "#166534";
  const links = header.links || [];
  const logoUrl = header.logoUrl;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur" style={{ backgroundColor: "rgba(248,245,237,0.85)" }}>
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {logoUrl ? (
            <Image src={logoUrl} alt={header.logoAlt || logoText} width={140} height={32} unoptimized />
          ) : (
            <span className="font-serif text-[1.5rem] text-black">
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
          {links.map((l: any) => (
            <Link key={l.href} href={l.href} className="text-sm text-black hover:opacity-60 transition-opacity">
              {l.label}
            </Link>
          ))}
        </nav>
        {header.ctaLabel && (
          <Link
            href={header.ctaHref || "/questionnaire"}
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-full transition-colors"
            style={{ backgroundColor: brand.primaryColor || "#166534", color: "#fff" }}
          >
            {header.ctaLabel}
          </Link>
        )}
      </div>
    </header>
  );
}
