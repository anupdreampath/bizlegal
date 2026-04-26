import Link from "next/link";

const footerLinks = {
  services: [
    { label: "LLC Formation", href: "/services/llc-formation" },
    { label: "LLC Management", href: "/services/llc-management" },
    { label: "Registered Agent", href: "/services/registered-agent" },
    { label: "Compliance", href: "/services/compliance" },
    { label: "Business Structuring", href: "/services/business-structuring" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "LLC Guide", href: "/resources/llc-guide" },
    { label: "California Business Law", href: "/resources/california-business-law" },
    { label: "Tax Requirements", href: "/resources/tax-requirements" },
    { label: "Blog", href: "/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ivory-100 border-t border-gray-200">
      {/* Main footer */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-[4rem] md:py-[5rem]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-5">
              <span className="font-serif text-[1.5rem] text-black">
                biz<span className="text-green-800">.</span>legal
              </span>
            </Link>
            <p className="font-sans text-[0.95rem] text-gray-600 leading-[1.6] max-w-[20rem] mb-8">
              The ease of an online service. The expertise of a law firm. A
              fraction of the cost. We&apos;ll form your California LLC, fast
              &amp; easy.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <p className="font-sans text-[0.9rem] text-gray-600">
                (833) 555-0123
              </p>
              <p className="font-sans text-[0.9rem] text-gray-600">
                hello@biz.legal
              </p>
              <p className="font-sans text-[0.9rem] text-gray-600">
                California, USA
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div>
            <p className="font-sans font-bold text-[0.85rem] text-black uppercase tracking-wider mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[0.9rem] text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans font-bold text-[0.85rem] text-black uppercase tracking-wider mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[0.9rem] text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans font-bold text-[0.85rem] text-black uppercase tracking-wider mb-5">
              Resources
            </p>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[0.9rem] text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[0.8rem] text-gray-400">
              &copy; {new Date().getFullYear()} biz.legal. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="font-sans text-[0.8rem] text-gray-400 hover:text-black transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="font-sans text-[0.8rem] text-gray-400 hover:text-black transition-colors cursor-pointer"
              >
                Terms of Use
              </a>
              <a
                href="/cookies"
                className="font-sans text-[0.8rem] text-gray-400 hover:text-black transition-colors cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
