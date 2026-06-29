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
    default: "biz.legal | We Form Your LLC For You",
    template: "%s | biz.legal",
  },
  description:
    "California LLC formation handled by lawyers with professional filing, attorney-drafted documents, fast delivery, and no guesswork.",
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
    title: "biz.legal | We Form Your LLC For You",
    description:
      "Lawyer-led California LLC formation for restaurants, retail, technology, construction, consulting, real estate, healthcare, e-commerce, cleaning, home services, transportation, and professional services.",
    url: "https://biz.legal",
    images: [
      {
        url: "/amyersnapa-attachments/optimized/iStock-2238258267-1600.jpg",
        width: 1600,
        height: 1067,
        alt: "Small business owner reviewing LLC formation documents with biz.legal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "biz.legal | We Form Your LLC For You",
    description:
      "We form your California LLC for you with attorney-drafted documents, professional filing, and fast delivery.",
    images: ["/amyersnapa-attachments/optimized/iStock-2238258267-1600.jpg"],
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
