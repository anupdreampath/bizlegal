import { config } from "dotenv";
config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { pages, blocks, themeSettings } from "../src/lib/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function upsertPage(slug: string, title: string, metaDescription: string) {
  const existing = await db.select().from(pages).where(eq(pages.slug, slug));
  if (existing.length) {
    await db
      .update(pages)
      .set({ title, metaDescription, updatedAt: new Date() })
      .where(eq(pages.slug, slug));
    return existing[0].id;
  }
  const inserted = await db
    .insert(pages)
    .values({ slug, title, metaDescription })
    .returning({ id: pages.id });
  return inserted[0].id;
}

async function replaceBlocks(
  pageId: number,
  list: Array<{ type: string; content: any; style?: any }>,
) {
  await db.delete(blocks).where(eq(blocks.pageId, pageId));
  for (let i = 0; i < list.length; i++) {
    const b = list[i];
    await db.insert(blocks).values({
      pageId,
      type: b.type,
      position: i,
      content: b.content,
      style: b.style ?? {},
    });
  }
}

async function upsertTheme(key: string, value: any) {
  const existing = await db.select().from(themeSettings).where(eq(themeSettings.key, key));
  if (existing.length) {
    await db.update(themeSettings).set({ value, updatedAt: new Date() }).where(eq(themeSettings.key, key));
  } else {
    await db.insert(themeSettings).values({ key, value });
  }
}

const cmsPages = [
  {
    slug: "about",
    path: "/about",
    title: "About biz.legal — Real California Lawyers, Online Speed",
    label: "About",
    heading: "A law firm with the speed of an online platform",
    body:
      "biz.legal is run by lawyers, but built like a tech company, so California business owners get real legal advice without the traditional law firm bill.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "how-it-works",
    path: "/how-it-works",
    title: "How It Works — California LLC Formation Process",
    label: "How It Works",
    heading: "From questionnaire to filed LLC, we handle the details",
    body:
      "Tell us about your business, get attorney review, approve your plan, and receive your completed formation documents through your secure portal.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "reviews",
    path: "/reviews",
    title: "Reviews — California Business Owners Trust biz.legal",
    label: "Reviews",
    heading: "Trusted by California entrepreneurs",
    body:
      "Business owners choose biz.legal for attorney-guided LLC formation, responsive support, and clear next steps.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "blog",
    path: "/blog",
    title: "Blog — California LLC Resources",
    label: "Blog",
    heading: "Practical guidance for California business owners",
    body:
      "Read plain-English articles on LLC formation, registered agents, operating agreements, compliance, and business law basics.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "faq",
    path: "/faq",
    title: "FAQ — California LLC Formation Questions",
    label: "FAQ",
    heading: "Frequently asked questions",
    body:
      "Answers to common questions about California LLC formation, timelines, fees, registered agents, and attorney support.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "careers",
    path: "/careers",
    title: "Careers — Join biz.legal",
    label: "Careers",
    heading: "Build legal services for modern entrepreneurs",
    body:
      "Join a team combining legal expertise with online efficiency for California business owners.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "services-llc-formation",
    path: "/services/llc-formation",
    title: "LLC Formation — California LLCs Done Right",
    label: "LLC Formation",
    heading: "Form your California LLC the right way, the first time",
    body:
      "We handle every detail of your LLC formation so you can launch with confidence. Attorney-reviewed documents, fast filing, zero guesswork.",
    image:
      "https://images.unsplash.com/photo-1769038947088-62455c949efc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "services-llc-management",
    path: "/services/llc-management",
    title: "LLC Management — Ongoing California Compliance",
    label: "LLC Management",
    heading: "Keep your LLC compliant after formation",
    body:
      "We help manage filings, deadlines, records, and legal upkeep so your California LLC stays in good standing.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "services-registered-agent",
    path: "/services/registered-agent",
    title: "Registered Agent — California Registered Agent Service",
    label: "Registered Agent",
    heading: "Reliable registered agent service for your California LLC",
    body:
      "Meet California requirements with a physical registered agent address, document handling, and timely notifications.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "services-compliance",
    path: "/services/compliance",
    title: "Compliance — California LLC Deadlines and Filings",
    label: "Compliance",
    heading: "Stay ahead of California LLC compliance",
    body:
      "We track recurring filings, franchise tax deadlines, statements of information, and other obligations for your business.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "services-business-structuring",
    path: "/services/business-structuring",
    title: "Business Structuring — Choose the Right Entity",
    label: "Business Structuring",
    heading: "Choose the business structure that fits your goals",
    body:
      "Get attorney guidance on LLCs, corporations, ownership, tax considerations, and California-specific requirements.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "resources-llc-guide",
    path: "/resources/llc-guide",
    title: "California LLC Guide — Start and Maintain Your LLC",
    label: "LLC Guide",
    heading: "A practical guide to California LLCs",
    body:
      "Learn the core steps, costs, documents, deadlines, and legal decisions involved in forming and running a California LLC.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "resources-tax-requirements",
    path: "/resources/tax-requirements",
    title: "California LLC Tax Requirements",
    label: "Tax Requirements",
    heading: "Understand California LLC tax obligations",
    body:
      "Review franchise tax basics, estimated taxes, federal tax IDs, and the common tax decisions California LLC owners face.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "resources-california-business-law",
    path: "/resources/california-business-law",
    title: "California Business Law Resources",
    label: "Business Law",
    heading: "Business law basics for California entrepreneurs",
    body:
      "Explore California-specific legal topics that affect entity formation, operations, compliance, contracts, and liability protection.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80",
  },
];

async function seedSimpleCmsPage(page: (typeof cmsPages)[number]) {
  const pageId = await upsertPage(page.slug, page.title, page.body);
  await replaceBlocks(pageId, [
    {
      type: "hero",
      content: {
        eyebrow: page.label,
        heading: page.heading,
        body: page.body,
        primaryCta: { label: "Get Started", href: "/questionnaire" },
        secondaryCta: { label: "Contact Us", href: "/contact" },
        image: { url: page.image, alt: page.heading, type: "image" },
      },
      style: {
        backgroundColor: "#166534",
        textColor: "#ffffff",
        bodyColor: "rgba(255,255,255,0.75)",
        headingSize: "4.75rem",
        bodySize: "1.125rem",
        paddingY: "9rem",
        align: "left",
        uppercase: false,
        primaryCtaBg: "#ffffff",
        primaryCtaColor: "#166534",
        secondaryCtaBorder: "#ffffff",
        secondaryCtaColor: "#ffffff",
      },
    },
  ]);
}

async function main() {
  await upsertTheme("brand", {
    logoText: "biz.legal",
    logoAccentColor: "#166534",
    primaryColor: "#166534",
    primaryHoverColor: "#22c55e",
    accentColor: "#15803d",
    backgroundColor: "#f8f5ed",
    textColor: "#000000",
    mutedTextColor: "#4b5563",
    fontSerif: "Playfair Display",
    fontSans: "Inter",
  });

  await upsertTheme("header", {
    logoUrl: "",
    logoAlt: "biz.legal",
    links: [
      { label: "Services", href: "/services/llc-formation" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
    ],
    ctaLabel: "Get Started",
    ctaHref: "/questionnaire",
  });

  await upsertTheme("footer", {
    tagline:
      "The ease of an online service. The expertise of a law firm. A fraction of the cost. We'll form your California LLC, fast & easy.",
    phone: "(833) 555-0123",
    email: "hello@biz.legal",
    location: "California, USA",
    columns: [
      {
        title: "Services",
        links: [
          { label: "LLC Formation", href: "/services/llc-formation" },
          { label: "LLC Management", href: "/services/llc-management" },
          { label: "Registered Agent", href: "/services/registered-agent" },
          { label: "Compliance", href: "/services/compliance" },
          { label: "Business Structuring", href: "/services/business-structuring" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "How It Works", href: "/how-it-works" },
          { label: "Reviews", href: "/reviews" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "LLC Guide", href: "/resources/llc-guide" },
          { label: "California Business Law", href: "/resources/california-business-law" },
          { label: "Tax Requirements", href: "/resources/tax-requirements" },
          { label: "Blog", href: "/blog" },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  });

  const homeId = await upsertPage(
    "home",
    "biz.legal — California LLC Formation, Done by Lawyers",
    "Real California lawyers form your LLC, fast and easy. The ease of DIY, the expertise of a law firm, a fraction of the cost.",
  );

  await replaceBlocks(homeId, [
    {
      type: "hero",
      content: {
        eyebrow: "",
        heading: "We'll form your California LLC, fast & easy",
        body:
          "You need to know your business is formed right, right from the start. If you DIY with traditional online services, you're guessing. We're full service and run by lawyers. Get real legal advice and service at the speed and efficiency of our online platform. Don't DIY — we'll D-I-F-Y (Do It For You)!",
        primaryCta: { label: "Get Started", href: "/questionnaire" },
        secondaryCta: { label: "More Information", href: "/how-it-works" },
        image: {
          url: "https://images.unsplash.com/photo-1502285745115-13e43e3faad4?auto=format&fit=crop&w=1600&q=80",
          alt: "Golden Gate Bridge in San Francisco, California — symbolizing California LLC formation by biz.legal",
          type: "image",
        },
      },
      style: {
        backgroundColor: "#f8f5ed",
        textColor: "#000000",
        bodyColor: "#4b5563",
        headingSize: "4.75rem",
        bodySize: "1.125rem",
        paddingY: "9rem",
        align: "left",
        uppercase: true,
      },
    },
    {
      type: "trustBar",
      content: {
        label: "Businesses Served",
        items: [
          "Restaurants",
          "Retail",
          "Ecommerce",
          "Consulting",
          "Beauty",
          "The Trades",
          "Childcare",
          "Specialty Services",
          "And many others",
        ],
      },
      style: {
        backgroundColor: "#efeadc",
        textColor: "#6b7280",
      },
    },
    {
      type: "services",
      content: {
        eyebrow: "What We Do",
        heading: "We form your business the right way from the start",
        cards: [
          {
            title: "Is an LLC Right for You?",
            description:
              "LLCs are great for many businesses, but not all. Do you need an entity? Is your business allowed to operate as an LLC? Are you considering California, Delaware, or other domicile states?",
            cta: { label: "Get Started", href: "/questionnaire" },
          },
          {
            title: "LLC Formation",
            description:
              "Our full service team handles all state filings, document drafting, and other essential registrations, so you don't have to guess how. Take out the guesswork and leave the legal work to the professionals.",
            cta: { label: "Get Started", href: "/questionnaire" },
          },
          {
            title: "Registered Agent",
            description:
              "Every business is required to have a registered agent, and we include that service for free for your first year.",
            cta: { label: "Get Started", href: "/questionnaire" },
          },
          {
            title: "Legal Support",
            description:
              "After you form your business and as you grow, you're probably going to have some questions. Your LLC formation includes 1 year of attorney legal support*.",
            cta: { label: "Get Started", href: "/questionnaire" },
          },
        ],
      },
      style: {
        backgroundColor: "#166534",
        textColor: "#ffffff",
        cardBackgroundColor: "#22c55e",
        cardTextColor: "#ffffff",
        headingSize: "4.75rem",
      },
    },
    {
      type: "whyChooseUs",
      content: {
        eyebrow: "Why biz.legal",
        heading: "The ease of DIY. The expertise of a law firm. A fraction of the cost.",
        image: {
          url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80",
          alt: "California law firm shelves of legal books — biz.legal attorneys reviewing LLC formations",
          type: "image",
        },
        features: [
          {
            title: "Lawyers, Not a DIY Site",
            description:
              "DIY websites can't give legal advice. We can. Every formation is reviewed by a real California attorney before it's filed.",
          },
          {
            title: "Tech-Speed Service",
            description:
              "We've built our process on the same online efficiencies as the DIY platforms — without the guesswork. Faster, with real expertise behind it.",
          },
          {
            title: "A Fraction of the Cost",
            description:
              "Traditional law firms are expensive. We deliver attorney-grade formation and advice at a fraction of the price.",
          },
          {
            title: "1 Year of Legal Support",
            description:
              "Every formation includes a free year of attorney legal support and a free year of registered agent service — so you're covered as you grow.",
          },
        ],
      },
      style: {
        backgroundColor: "#f8f5ed",
        textColor: "#000000",
        bodyColor: "#4b5563",
      },
    },
    {
      type: "process",
      content: {
        eyebrow: "Our Easy System",
        heading: "Our guaranteed process in 4 easy steps",
        steps: [
          {
            number: "01",
            title: "Decide you're ready",
            description:
              "If you're ready for us to form your LLC, we're here for you. If you're not sure if an LLC is right for you, or have other questions, schedule a call with one of our lawyers to guide you. It's easy and affordable.",
          },
          {
            number: "02",
            title: "Lawyer review",
            description:
              "Unlike the DIY websites, we have real California lawyers on staff who will personally review your LLC and ensure it's the best fit for you. A consultation phone call with a lawyer is included in your entity formation fee.",
          },
          {
            number: "03",
            title: "Document preparation",
            description:
              "Our documents are expertly drafted by attorneys and customized for your business. We do it all for you, and file everything you need with the appropriate agencies. No guesswork, no uncertainty, no problems for you.",
          },
          {
            number: "04",
            title: "Delivery",
            description:
              "Through our secure portal, all of your LLC documents are delivered seamlessly to you, ready to take to the bank, your landlord, or your partners — and jump-start your business.",
          },
        ],
        cta: { label: "Start the Process", href: "/questionnaire" },
        ctaSubtext: "No payment required to submit your request.",
      },
      style: {
        backgroundColor: "#efeadc",
        textColor: "#000000",
      },
    },
    {
      type: "testimonials",
      content: {
        eyebrow: "Reviews",
        heading: "Trusted by California business owners",
        stats: [
          { number: "5,000+", label: "LLCs formed" },
          { number: "98%", label: "Satisfaction rate" },
          { number: "10+", label: "Years experience" },
          { number: "4.9/5", label: "Average rating" },
        ],
        items: [
          {
            name: "Sarah Martinez",
            role: "Founder, Martinez Design Co.",
            quote:
              "The entire LLC formation process was seamless. They handled everything from filing to compliance, and I was up and running within days. Couldn't recommend them more.",
            rating: 5,
            color: "#166534",
          },
          {
            name: "James Chen",
            role: "CEO, Pacific Tech Solutions",
            quote:
              "Their expertise in California business law gave me confidence that my LLC was structured properly from day one. The team was responsive and knowledgeable throughout.",
            rating: 5,
            color: "#b45309",
          },
          {
            name: "Amanda Foster",
            role: "Owner, Coastal Wellness Studio",
            quote:
              "I was overwhelmed by the paperwork until I found biz.legal. They made forming my LLC straightforward and stress-free. The ongoing compliance support is a huge bonus.",
            rating: 5,
            color: "#075985",
          },
          {
            name: "David Park",
            role: "Managing Partner, Park & Associates",
            quote:
              "The ongoing management services are invaluable. They keep my LLC compliant and handle all the annual filings. One less thing to worry about as a business owner.",
            rating: 5,
            color: "#6b21a8",
          },
        ],
      },
      style: {
        backgroundColor: "#f8f5ed",
        textColor: "#000000",
      },
    },
    {
      type: "faq",
      content: {
        eyebrow: "FAQ",
        heading: "Frequently asked questions",
        body: "Find answers to common questions about California LLC formation and management.",
        image: {
          url: "https://images.unsplash.com/photo-1764173039051-987d1639b9d5?auto=format&fit=crop&w=1400&q=80",
          alt: "Smiling California business owner after forming an LLC with biz.legal",
          type: "image",
        },
        items: [
          {
            question: "How long does it take to form an LLC in California?",
            answer:
              "Standard processing with the California Secretary of State typically takes 5-7 business days. We also offer expedited options that can have your LLC formed in as little as 24 hours.",
          },
          {
            question: "What documents are included with LLC formation?",
            answer:
              "Articles of Organization filing, customized Operating Agreement, EIN/Tax ID acquisition, Initial Statement of Information, and a complete organizational binder.",
          },
          {
            question: "Do I need to be a California resident?",
            answer:
              "No. You will need a registered agent with a physical California address — we provide that service.",
          },
          {
            question: "How much does it cost to maintain a California LLC?",
            answer:
              "California requires an annual Franchise Tax of $800 plus a biennial Statement of Information filing fee of $20. Our management services handle these.",
          },
          {
            question: "Do you charge for the initial consultation?",
            answer:
              "No. Submitting a request is free. Our team will review and reach out with a customized plan.",
          },
        ],
      },
      style: {
        backgroundColor: "#efeadc",
        textColor: "#000000",
      },
    },
    {
      type: "ctaBanner",
      content: {
        heading: "Don't DIY. We'll D-I-F-Y.",
        body:
          "Real California lawyers. The speed of an online platform. A fraction of the cost. Tell us about your business and we'll handle the rest — no payment required to start.",
        primaryCta: { label: "Get Started", href: "/questionnaire" },
        secondaryCta: { label: "More Information", href: "/how-it-works" },
      },
      style: {
        backgroundColor: "#166534",
        textColor: "#ffffff",
        bodyColor: "rgba(255,255,255,0.7)",
      },
    },
  ]);

  for (const page of cmsPages) {
    await seedSimpleCmsPage(page);
  }

  console.log("✓ Seed complete");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
