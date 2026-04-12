"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Services",
    href: "/services/llc-formation",
    children: [
      { label: "LLC Formation", href: "/services/llc-formation" },
      { label: "LLC Management", href: "/services/llc-management" },
      { label: "Registered Agent", href: "/services/registered-agent" },
      { label: "Compliance", href: "/services/compliance" },
      { label: "Business Structuring", href: "/services/business-structuring" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "Learn",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "LLC Guide", href: "/resources/llc-guide" },
      { label: "Tax Requirements", href: "/resources/tax-requirements" },
      { label: "California Business Law", href: "/resources/california-business-law" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory-100/95 backdrop-blur-sm">
      <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
        <div className="flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
            <span className="font-serif text-[1.5rem] text-black">
              Biz Legal
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[1rem] font-sans font-medium text-black hover:opacity-60 transition-opacity duration-200 cursor-pointer"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="bg-white rounded-[1rem] shadow-lg py-3 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 text-[0.95rem] font-sans text-black hover:opacity-60 transition-opacity duration-200 cursor-pointer"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/login"
              className="text-[1rem] font-sans font-medium text-black hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            >
              Log In
            </Link>
            <Link
              href="/questionnaire"
              className="inline-flex items-center px-7 py-3 text-[1rem] font-sans font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-black cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ivory-100 border-t border-gray-200">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-[1.125rem] font-sans font-medium text-black cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-1.5 text-[1rem] font-sans text-gray-600 cursor-pointer"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                href="/login"
                className="block text-center py-3 text-[1rem] font-sans font-medium text-black border border-black rounded-full cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/questionnaire"
                className="block text-center py-3 text-[1rem] font-sans font-medium text-white bg-green-800 rounded-full cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
