import Link from "next/link";

export default function CmsFooter({ theme }: { theme: any }) {
  const brand = theme?.brand || {};
  const f = theme?.footer || {};
  const logoText = brand.logoText || "biz.legal";
  const accent = brand.logoAccentColor || "#166534";

  return (
    <footer className="bg-[#f8f5ed] border-t border-gray-200">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-[4rem] md:py-[5rem]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-5">
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
            </Link>
            <p className="font-sans text-sm text-gray-600 leading-[1.6] max-w-[20rem] mb-8">
              {f.tagline}
            </p>
            <div className="space-y-2">
              {f.phone && <p className="font-sans text-sm text-gray-600">{f.phone}</p>}
              {f.email && <p className="font-sans text-sm text-gray-600">{f.email}</p>}
              {f.location && <p className="font-sans text-sm text-gray-600">{f.location}</p>}
            </div>
          </div>
          {(f.columns || []).map((col: any, i: number) => (
            <div key={i}>
              <p className="font-sans font-bold text-sm text-black uppercase tracking-wider mb-5">{col.title}</p>
              <ul className="space-y-3">
                {(col.links || []).map((l: any) => (
                  <li key={l.href}>
                    <a href={l.href} className="font-sans text-sm text-gray-600 hover:text-black transition-colors">
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-gray-400">
              © {new Date().getFullYear()} {logoText}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {(f.legal || []).map((l: any) => (
                <a key={l.href} href={l.href} className="font-sans text-xs text-gray-400 hover:text-black transition-colors">
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
