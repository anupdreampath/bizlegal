export const headerRevision = {
  logoUrl: "",
  logoAlt: "biz.legal",
  links: [
    { label: "Services", href: "/services/llc-formation" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaLabel: "Order Your LLC Formation",
  ctaHref: "/order",
};

export const footerRevision = {
  tagline:
    "California LLC formation handled by lawyers, built with the speed of an online platform.",
  phone: "(833) 555-0123",
  email: "hello@biz.legal",
  location: "California, USA",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "Services", href: "/services/llc-formation" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const image = (url: string, alt: string) => ({ url, alt, type: "image" });

export const homeRevisionBlocks = [
  {
    type: "hero",
    content: {
      eyebrow: "Lawyer-led California LLC formation",
      heading: "WE FORM YOUR LLC FOR YOU",
      body:
        "Don't cheap out with DIY services or waste money on expensive law firms. You don't have to compromise, we're your LLC formation solution.",
      primaryCta: { label: "I'm Ready!", href: "/order" },
      secondaryCta: { label: "More Information", href: "/contact" },
      proofItems: ["Attorney-drafted documents", "Professional filing", "Fast delivery"],
      image: image(
        "/amyersnapa-attachments/iStock-2238258267.jpg",
        "Business owner reviewing LLC formation documents with an advisor",
      ),
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
      primaryCtaBg: "#166534",
      primaryCtaColor: "#ffffff",
      secondaryCtaBorder: "#166534",
      secondaryCtaColor: "#166534",
    },
  },
  {
    type: "trustBar",
    content: {
      label: "Business types we help form",
      items: [
        "Restaurants",
        "Retail",
        "Technology",
        "Construction",
        "Consulting",
        "Real Estate",
        "Healthcare",
        "E-commerce",
        "Cleaning & Janitorial",
        "Home Services",
        "Transportation",
        "Professional Services",
      ],
    },
    style: {
      backgroundColor: "#efeadc",
      labelColor: "#000000",
      lineColor: "#000000",
      textColor: "#6b7280",
      fontSize: "1.75rem",
    },
  },
  {
    type: "comparison",
    content: {
      eyebrow: "What You Need",
      heading: "The legal foundation matters before the paperwork starts",
      body:
        "A California LLC is not just a filing. You need to know the entity fits your business, that the state paperwork is right, and that your documents protect how your company will actually operate.",
      leftTitle: "What You Need",
      leftItems: [
        "A clear decision that an LLC fits your business and risk profile.",
        "State filings prepared without missing names, agents, addresses, or required statements.",
        "Ownership, management, and operating documents that do more than sit in a folder.",
        "A path for questions after formation, instead of being left alone with a receipt.",
      ],
      rightTitle: "What We Do For You",
      rightItems: [
        "Review your LLC decision before filing.",
        "Prepare and submit your California state filings.",
        "Draft and deliver your operating documents and organizational package.",
        "Support you after formation with practical next steps.",
      ],
      image: image(
        "/amyersnapa-attachments/iStock-2243799864.jpg",
        "California business owner learning which businesses need an LLC",
      ),
      mediaEyebrow: "Video guide",
      mediaTitle: "Which businesses need an LLC?",
      cta: { label: "Help Me Decide", href: "/contact" },
    },
    style: {
      backgroundColor: "#f8f5ed",
      textColor: "#000000",
      bodyColor: "#4b5563",
      accentColor: "#166534",
      panelColor: "#166534",
      ctaBg: "#166534",
      ctaColor: "#ffffff",
    },
  },
  {
    type: "services",
    content: {
      eyebrow: "What We Do",
      heading: "We do the LLC formation work for you",
      cards: [
        {
          title: "Decide if an LLC fits your needs",
          description:
            "Not every business should be an LLC. We help you think through liability, ownership, state requirements, and whether another structure may make more sense.",
          image: image(
            "/amyersnapa-attachments/iStock-2218831325.jpg",
            "Business owner deciding whether an LLC fits their needs",
          ),
          cta: { label: "Help Me Decide", href: "/contact" },
        },
        {
          title: "State Filings",
          description:
            "We prepare and submit the California formation filings so you are not guessing through state forms, registered agent details, and launch requirements.",
          image: image(
            "/amyersnapa-attachments/iStock-2243642331.jpg",
            "California LLC state filing documents",
          ),
          cta: { label: "I'm Ready!", href: "/order" },
        },
        {
          title: "Document drafting and delivery",
          description:
            "Your operating agreement and organizational documents are drafted for your business and delivered in a package you can use with banks, partners, and vendors.",
          image: image(
            "/amyersnapa-attachments/iStock-2241575917.jpg",
            "Completed LLC documents ready for delivery",
          ),
          cta: { label: "I'm Ready!", href: "/order" },
        },
        {
          title: "Ongoing support",
          description:
            "After formation, we can support registered agent needs, legal questions, contracts, leases, employment issues, and business changes as you grow.",
          image: image(
            "/amyersnapa-attachments/iStock-2161275481.jpg",
            "Business owner receiving ongoing legal support",
          ),
          cta: { label: "More Services", href: "/services/llc-management" },
        },
      ],
    },
    style: {
      backgroundColor: "#166534",
      textColor: "#ffffff",
      bodyColor: "rgba(255,255,255,0.78)",
      cardBackgroundColor: "#f8f5ed",
      cardTextColor: "#000000",
      ctaBg: "#166534",
      ctaColor: "#ffffff",
      headingSize: "4.75rem",
    },
  },
  {
    type: "whyChooseUs",
    content: {
      eyebrow: "Why biz.legal",
      heading:
        "The ease of DIY.\nThe expertise of a law firm.\nA fraction of the cost.",
      image: image(
        "/amyersnapa-attachments/iStock-2187548708.jpg",
        "California small business team working with biz.legal",
      ),
      features: [
        {
          title: "Lawyers, not a DIY Site",
          description:
            "DIY websites can't give legal advice and they leave you guessing. Mistakes are easy to make. We do the work for you, in California, by real lawyers, paralegals and legal assistants.",
        },
        {
          title: "Tech-Speed Service",
          description:
            "Faster than a law firm, easier than DIY, with real expertise and lawyers to make sure it's done right, and done for you.",
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
    type: "videoCta",
    content: {
      eyebrow: "Video",
      heading: "Which businesses need an LLC?",
      body:
        "A short decision guide for owners who want liability protection, a professional structure, and a better way to separate personal assets from business risk.",
      image: image(
        "/amyersnapa-attachments/iStock-2243799864.jpg",
        "Video poster for which businesses need an LLC",
      ),
      cta: { label: "More Information", href: "/contact" },
    },
    style: {
      backgroundColor: "#efeadc",
      textColor: "#000000",
      bodyColor: "#4b5563",
      ctaBg: "#166534",
      ctaColor: "#ffffff",
    },
  },
  {
    type: "process",
    content: {
      eyebrow: "Our Easy System",
      heading: "Three steps from decision to delivery",
      steps: [
        {
          number: "01",
          title: "Decide you're ready",
          description:
            "If you want help deciding whether an LLC is right for you, start with the intake form and we will route you into the right next step.",
        },
        {
          number: "02",
          title: "Lawyers Do The Work",
          description:
            "Once you are ready, our legal team prepares the filings and documents instead of leaving you to work through a DIY checklist.",
        },
        {
          number: "03",
          title: "Delivery",
          description:
            "Your completed filing confirmations and organizational documents are delivered so you can open accounts, work with vendors, and move forward.",
        },
      ],
      cta: { label: "Help Me Decide", href: "/contact" },
      ctaSubtext: "Ready now? Use the order page to begin the $750 formation offer.",
    },
    style: {
      backgroundColor: "#efeadc",
      textColor: "#000000",
      bodyColor: "#4b5563",
      mutedColor: "#6b7280",
      ctaBg: "#166534",
      ctaColor: "#ffffff",
    },
  },
  {
    type: "industryGrid",
    content: {
      eyebrow: "Who We Help",
      heading: "California LLCs for every industry allowed",
      body:
        "biz.legal forms California LLCs for every industry allowed to operate as an LLC, from local service companies to professional firms and online sellers.",
      cta: { label: "Ask About Your Industry", href: "/contact" },
      items: [
        {
          name: "Restaurants",
          description: "Food service, hospitality, and local operators.",
          href: "/industries/restaurants",
          image: image("/amyersnapa-attachments/iStock-2238258267.jpg", "Restaurant business owner"),
        },
        {
          name: "Retail",
          description: "Shops, boutiques, inventory businesses, and sellers.",
          href: "/industries/retail",
          image: image("/amyersnapa-attachments/iStock-2187548708.jpg", "Retail business owner"),
        },
        {
          name: "Technology",
          description: "Software, apps, digital products, and tech services.",
          href: "/industries/technology",
          image: image("/amyersnapa-attachments/iStock-2243799864.jpg", "Technology founder"),
        },
        {
          name: "Construction",
          description: "Contractors, builders, trades, and field teams.",
          href: "/industries/construction",
          image: image("/amyersnapa-attachments/iStock-2161275481.jpg", "Construction business owner"),
        },
        {
          name: "Consulting",
          description: "Independent advisors and professional operators.",
          href: "/industries/consulting",
          image: image("/amyersnapa-attachments/iStock-2218831325.jpg", "Consulting professional"),
        },
        {
          name: "Real Estate",
          description: "Property, investor, and real estate service companies.",
          href: "/industries/real-estate",
          image: image("/amyersnapa-attachments/iStock-2243642331.jpg", "Real estate business owner"),
        },
        {
          name: "Healthcare",
          description: "Wellness, care, and health-adjacent businesses.",
          href: "/industries/healthcare",
          image: image("/amyersnapa-attachments/iStock-2239904274.jpg", "Healthcare business owner"),
        },
        {
          name: "E-commerce",
          description: "Online stores, marketplaces, and fulfillment brands.",
          href: "/industries/ecommerce",
          image: image("/amyersnapa-attachments/iStock-2241575917.jpg", "E-commerce business owner"),
        },
        {
          name: "Cleaning & Janitorial",
          description: "Residential, office, and commercial cleaning services.",
          href: "/industries/cleaning-janitorial",
          image: image("/amyersnapa-attachments/iStock-2161275481.jpg", "Cleaning and janitorial service owner"),
        },
        {
          name: "Home Services",
          description: "Repair, maintenance, landscaping, and local service teams.",
          href: "/industries/home-services",
          image: image("/amyersnapa-attachments/iStock-2243642331.jpg", "Home services business owner"),
        },
        {
          name: "Transportation",
          description: "Drivers, logistics, delivery, and vehicle-based businesses.",
          href: "/industries/transportation",
          image: image("/amyersnapa-attachments/iStock-2238258267.jpg", "Transportation business owner"),
        },
        {
          name: "Professional Services",
          description: "Skilled service firms that need credibility and protection.",
          href: "/industries/professional-services",
          image: image("/amyersnapa-attachments/iStock-2218831325.jpg", "Professional services owner"),
        },
      ],
    },
    style: {
      backgroundColor: "#f8f5ed",
      textColor: "#000000",
      bodyColor: "#4b5563",
      ctaBg: "#166534",
      ctaColor: "#ffffff",
    },
  },
  {
    type: "faq",
    content: {
      eyebrow: "FAQ",
      heading: "Frequently asked questions",
      body: "Three answers for owners deciding whether to move now.",
      image: image(
        "/amyersnapa-attachments/iStock-2241575917.jpg",
        "Business owner reviewing LLC questions",
      ),
      items: [
        {
          question: "How long does it take to form an LLC in California",
          answer:
            "Whether an LLC is formed by a person, a DIY service, or a law firm, the state filing process is the same. But old fashioned law firms can get bogged down in work queues, emergencies, and other excuses. We provide one step better: The service of the law firm, but with the efficiency in delivery of the online platform. The faster you form your LLC, the sooner you can begin to benefit from it.",
          cta: { label: "Start Now", href: "/order" },
        },
        {
          question: "What do I need?",
          answer:
            "As a business owner, you need to know that your legal entity is formed the right way from the start - otherwise, it could become a liability trap that you don't even know is waiting for you. This is not the appropriate place to wing it and hope for the best, but we know you can't afford the time and burden of the traditional law firms, you have work to do and a business to run. We offer that solution for you - high service, done for you, at a reasonable price, fast.",
        },
        {
          question: "How do I know if an LLC is right for me, should I form a Corporation instead?",
          answer:
            "This can be a complicated question. LLCs are a great option for many business owners, but not the only option. If you aren't sure whether an LLC is appropriate for your needs, we offer a low cost intake call, which is applied to the cost of your LLC formation if you decide to move forward. If an LLC isn't right for you, we offer additional services not promoted on this website, including Corporation formations.",
        },
      ],
    },
    style: {
      backgroundColor: "#efeadc",
      textColor: "#000000",
      bodyColor: "#4b5563",
      ctaBg: "#166534",
      ctaColor: "#ffffff",
    },
  },
  {
    type: "ctaBanner",
    content: {
      heading: "Start Now, Get Protected",
      body:
        "Order your California LLC formation for $750 or request more information so the team can route you into the right intake flow.",
      primaryCta: { label: "Order Your LLC Formation", href: "/order" },
      secondaryCta: { label: "More Information", href: "/contact" },
    },
    style: {
      backgroundColor: "#166534",
      textColor: "#ffffff",
      bodyColor: "rgba(255,255,255,0.78)",
      primaryCtaBg: "#ffffff",
      primaryCtaColor: "#166534",
      secondaryCtaBorder: "rgba(255,255,255,0.5)",
      secondaryCtaColor: "#ffffff",
    },
  },
];
