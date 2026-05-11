import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biz.legal"),
  title: {
    default: "biz.legal | California LLC Formation, Done For You",
    template: "%s | biz.legal",
  },
  description:
    "biz.legal forms your California LLC fast and easy. Real California lawyers, the speed of an online platform, at a fraction of traditional law firm cost. Don't DIY — we'll D-I-F-Y.",
  keywords: [
    "California LLC formation",
    "form an LLC in California",
    "California registered agent",
    "California business attorney",
    "LLC lawyer",
    "biz.legal",
  ],
  openGraph: {
    type: "website",
    siteName: "biz.legal",
    title: "biz.legal | California LLC Formation, Done For You",
    description:
      "Real California lawyers form your LLC at the speed and price of an online service. Restaurants, retail, ecommerce, consulting, beauty, the trades, childcare, and more.",
    url: "https://biz.legal",
    images: [
      {
        url: "https://images.unsplash.com/photo-1502285745115-13e43e3faad4?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 1067,
        alt: "Golden Gate Bridge — California LLC formation by biz.legal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "biz.legal | California LLC Formation, Done For You",
    description:
      "We'll form your California LLC, fast & easy. Real lawyers. Online speed. A fraction of the cost.",
    images: [
      "https://images.unsplash.com/photo-1502285745115-13e43e3faad4?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <AnalyticsTracker />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
