import Link from "next/link";

type ThemeMap = Record<string, unknown>;
type LinkItem = { label?: string; href?: string };
type FooterColumn = { title?: string; links?: LinkItem[] };

function asRecord(value: unknown): ThemeMap {
  return value && typeof value === "object" && !Array.isArray(value) ? value as ThemeMap : {};
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asLinks(value: unknown): LinkItem[] {
  return Array.isArray(value) ? value.filter((item): item is LinkItem => !!item && typeof item === "object") : [];
}

function asColumns(value: unknown): FooterColumn[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is ThemeMap => !!item && typeof item === "object" && !Array.isArray(item))
    .map((item) => ({ title: asString(item.title), links: asLinks(item.links) }));
}

export default function CmsFooter({ theme }: { theme: unknown }) {
  const source = asRecord(theme);
  const brand = asRecord(source.brand);
  const f = asRecord(source.footer);
  const logoText = asString(brand.logoText, "biz.legal");
  const accent = asString(brand.logoAccentColor, "#166534");
  const backgroundColor = asString(f.backgroundColor, asString(brand.backgroundColor, "#f8f5ed"));
  const textColor = asString(f.textColor, asString(brand.textColor, "#000000"));
  const mutedColor = asString(f.mutedTextColor, asString(brand.mutedTextColor, "#4b5563"));

  return (
    <footer data-cms-global="footer" className="border-t border-gray-200" style={{ backgroundColor }}>
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-[4rem] md:py-[5rem]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-5">
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
            </Link>
            <p className="font-sans text-sm leading-[1.6] max-w-[20rem] mb-8" style={{ color: mutedColor }}>
              {asString(f.tagline)}
            </p>
            <div className="space-y-2">
              {asString(f.phone) && <p className="font-sans text-sm" style={{ color: mutedColor }}>{asString(f.phone)}</p>}
              {asString(f.email) && <p className="font-sans text-sm" style={{ color: mutedColor }}>{asString(f.email)}</p>}
              {asString(f.location) && <p className="font-sans text-sm" style={{ color: mutedColor }}>{asString(f.location)}</p>}
            </div>
          </div>
          {asColumns(f.columns).map((col, i) => (
            <div key={i}>
              <p className="font-sans font-bold text-sm uppercase tracking-wider mb-5" style={{ color: textColor }}>{col.title}</p>
              <ul className="space-y-3">
                {(col.links || []).map((l) => (
                  <li key={l.href}>
                    <a href={l.href || "#"} className="font-sans text-sm hover:opacity-70 transition-opacity" style={{ color: mutedColor }}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-6">
          <p className="font-sans text-xs text-center max-w-[50rem] mx-auto mb-4" style={{ color: mutedColor }}>
            biz.legal is a service of attorney Alexander Myers SBN 271474 and the law firm Myers, Jameson & Myers, LLP. More information about the firm can be found at <a href="https://mjmlaw.com" target="_blank" rel="noopener noreferrer" className="underline">mjmlaw.com</a>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs" style={{ color: mutedColor }}>
              © {new Date().getFullYear()} {logoText}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {asLinks(f.legal).map((l) => (
                <a key={l.href} href={l.href || "#"} className="font-sans text-xs hover:opacity-70 transition-opacity" style={{ color: mutedColor }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
