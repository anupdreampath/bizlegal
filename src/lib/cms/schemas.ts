export type FieldType =
  | "text"
  | "textarea"
  | "color"
  | "select"
  | "boolean"
  | "image"
  | "url"
  | "number"
  | "repeater";

export type Field = {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  itemSchema?: Field[];
  description?: string;
};

export type BlockSchema = {
  label: string;
  defaults?: { content?: unknown; style?: unknown };
  content: Field[];
  style: Field[];
};

export type ThemeSchema = {
  label: string;
  fields: Field[];
};

const styleCommon: Field[] = [
  { key: "backgroundColor", label: "Background", type: "color" },
  { key: "textColor", label: "Heading / Text color", type: "color" },
  { key: "bodyColor", label: "Body color", type: "color" },
];

const linkFields: Field[] = [
  { key: "label", label: "Label", type: "text" },
  { key: "href", label: "URL", type: "url" },
];

export const SCHEMAS: Record<string, BlockSchema> = {
  hero: {
    label: "Hero",
    defaults: {
      content: {
        heading: "New hero heading",
        body: "Body copy goes here.",
        primaryCta: { label: "Get Started", href: "/questionnaire" },
        secondaryCta: { label: "Learn More", href: "/how-it-works" },
        image: { url: "", alt: "", type: "image" },
      },
      style: { backgroundColor: "#f8f5ed", textColor: "#000", bodyColor: "#4b5563", paddingY: "9rem", uppercase: true, align: "left", headingSize: "4.75rem", bodySize: "1.125rem" },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "primaryCta.label", label: "Primary CTA label", type: "text" },
      { key: "primaryCta.href", label: "Primary CTA URL", type: "url" },
      { key: "secondaryCta.label", label: "Secondary CTA label", type: "text" },
      { key: "secondaryCta.href", label: "Secondary CTA URL", type: "url" },
      { key: "image", label: "Image / Video", type: "image" },
    ],
    style: [
      ...styleCommon,
      { key: "headingSize", label: "Heading size (e.g. 4.75rem)", type: "text" },
      { key: "bodySize", label: "Body size (e.g. 1.125rem)", type: "text" },
      { key: "paddingY", label: "Vertical padding", type: "text" },
      { key: "align", label: "Text alignment", type: "select", options: ["left", "center", "right"] },
      { key: "uppercase", label: "Uppercase heading", type: "boolean" },
      { key: "primaryCtaBg", label: "Primary CTA bg", type: "color" },
      { key: "primaryCtaColor", label: "Primary CTA text", type: "color" },
      { key: "secondaryCtaBorder", label: "Secondary CTA border", type: "color" },
      { key: "secondaryCtaColor", label: "Secondary CTA text", type: "color" },
    ],
  },

  trustBar: {
    label: "Trust bar (industry marquee)",
    defaults: {
      content: { label: "Businesses Served", items: ["Restaurants", "Retail"] },
      style: { backgroundColor: "#efeadc", textColor: "#6b7280", labelColor: "#000", lineColor: "#000", fontSize: "1.75rem" },
    },
    content: [
      { key: "label", label: "Label", type: "text" },
      {
        key: "items",
        label: "Industries",
        type: "repeater",
        itemSchema: [{ key: "_value", label: "Name", type: "text" }],
      },
    ],
    style: [
      { key: "backgroundColor", label: "Background", type: "color" },
      { key: "labelColor", label: "Label color", type: "color" },
      { key: "lineColor", label: "Divider color", type: "color" },
      { key: "textColor", label: "Industry text color", type: "color" },
      { key: "fontSize", label: "Industry text size", type: "text" },
    ],
  },

  comparison: {
    label: "What you need / what we do",
    defaults: {
      content: {
        eyebrow: "What You Need",
        heading: "Know what matters before you file",
        body: "An LLC is more than a state form. You need the right decision, the right filings, and documents that match how your business actually works.",
        leftTitle: "What You Need",
        leftItems: ["Know whether an LLC fits your business", "File with the right state details", "Create ownership and management documents"],
        rightTitle: "What We Do For You",
        rightItems: ["Review fit before filing", "Handle state filings", "Draft and deliver custom documents"],
        image: { url: "", alt: "", type: "image" },
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
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "leftTitle", label: "Left column title", type: "text" },
      { key: "leftItems", label: "Left items", type: "repeater", itemSchema: [{ key: "_value", label: "Item", type: "textarea" }] },
      { key: "rightTitle", label: "Right column title", type: "text" },
      { key: "rightItems", label: "Right items", type: "repeater", itemSchema: [{ key: "_value", label: "Item", type: "textarea" }] },
      { key: "image", label: "Media image", type: "image" },
      { key: "mediaEyebrow", label: "Media eyebrow", type: "text" },
      { key: "mediaTitle", label: "Media title", type: "text" },
      { key: "cta.label", label: "Button label", type: "text" },
      { key: "cta.href", label: "Button URL", type: "url" },
    ],
    style: [
      ...styleCommon,
      { key: "accentColor", label: "Accent color", type: "color" },
      { key: "panelColor", label: "Right panel color", type: "color" },
      { key: "ctaBg", label: "Button background", type: "color" },
      { key: "ctaColor", label: "Button text", type: "color" },
    ],
  },

  services: {
    label: "Services / cards grid",
    defaults: {
      content: { eyebrow: "What We Do", heading: "Our services", cards: [] },
      style: { backgroundColor: "#166534", textColor: "#fff", cardBackgroundColor: "#22c55e", cardTextColor: "#fff" },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      {
        key: "cards",
        label: "Cards",
        type: "repeater",
        itemSchema: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "image", label: "Card image", type: "image" },
          { key: "cta.label", label: "Button label", type: "text" },
          { key: "cta.href", label: "Button URL", type: "url" },
        ],
      },
    ],
    style: [
      ...styleCommon,
      { key: "cardBackgroundColor", label: "Card background", type: "color" },
      { key: "cardTextColor", label: "Card text", type: "color" },
      { key: "ctaBg", label: "Button background", type: "color" },
      { key: "ctaColor", label: "Button text", type: "color" },
      { key: "headingSize", label: "Heading size", type: "text" },
    ],
  },

  whyChooseUs: {
    label: "Why choose us / image + features",
    defaults: {
      content: { eyebrow: "Why us", heading: "Heading", image: { url: "", alt: "" }, features: [] },
      style: { backgroundColor: "#f8f5ed", textColor: "#000", bodyColor: "#4b5563" },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "image", label: "Image / Video", type: "image" },
      {
        key: "features",
        label: "Features",
        type: "repeater",
        itemSchema: [
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
    style: styleCommon,
  },

  videoCta: {
    label: "Video CTA",
    defaults: {
      content: {
        eyebrow: "Video",
        heading: "Which businesses need an LLC?",
        body: "A quick guide to the risk, credibility, and ownership questions that usually determine whether an LLC makes sense.",
        image: { url: "", alt: "", type: "image" },
        cta: { label: "Help Me Decide", href: "/contact" },
      },
      style: {
        backgroundColor: "#efeadc",
        textColor: "#000000",
        bodyColor: "#4b5563",
        ctaBg: "#166534",
        ctaColor: "#ffffff",
      },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "image", label: "Video poster", type: "image" },
      { key: "cta.label", label: "Button label", type: "text" },
      { key: "cta.href", label: "Button URL", type: "url" },
    ],
    style: [
      ...styleCommon,
      { key: "ctaBg", label: "Button background", type: "color" },
      { key: "ctaColor", label: "Button text", type: "color" },
    ],
  },

  process: {
    label: "Process / steps",
    defaults: {
      content: { eyebrow: "How it works", heading: "Our process", steps: [], cta: { label: "", href: "" }, ctaSubtext: "" },
      style: { backgroundColor: "#efeadc", textColor: "#000", bodyColor: "#4b5563", mutedColor: "#9ca3af", ctaBg: "#166534", ctaColor: "#fff" },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      {
        key: "steps",
        label: "Steps",
        type: "repeater",
        itemSchema: [
          { key: "number", label: "Number", type: "text" },
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "cta.label", label: "Button label", type: "text" },
          { key: "cta.href", label: "Button URL", type: "url" },
        ],
      },
      { key: "cta.label", label: "CTA label", type: "text" },
      { key: "cta.href", label: "CTA URL", type: "url" },
      { key: "ctaSubtext", label: "CTA subtext", type: "text" },
    ],
    style: [
      ...styleCommon,
      { key: "mutedColor", label: "Muted color", type: "color" },
      { key: "ctaBg", label: "CTA bg", type: "color" },
      { key: "ctaColor", label: "CTA text", type: "color" },
    ],
  },

  testimonials: {
    label: "Testimonials",
    defaults: {
      content: { eyebrow: "Reviews", heading: "Reviews", stats: [], items: [] },
      style: { backgroundColor: "#f8f5ed", textColor: "#000", bodyColor: "#4b5563", cardBg: "#efeadc" },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      {
        key: "stats",
        label: "Stats",
        type: "repeater",
        itemSchema: [
          { key: "number", label: "Number", type: "text" },
          { key: "label", label: "Label", type: "text" },
        ],
      },
      {
        key: "items",
        label: "Reviews",
        type: "repeater",
        itemSchema: [
          { key: "name", label: "Name", type: "text" },
          { key: "role", label: "Role", type: "text" },
          { key: "quote", label: "Quote", type: "textarea" },
          { key: "rating", label: "Rating (1-5)", type: "number" },
          { key: "color", label: "Avatar color", type: "color" },
        ],
      },
    ],
    style: [...styleCommon, { key: "cardBg", label: "Card background", type: "color" }],
  },

  industryGrid: {
    label: "Industry grid",
    defaults: {
      content: {
        eyebrow: "Who We Help",
        heading: "California LLCs for the businesses people actually run",
        body: "biz.legal forms California LLCs for every industry allowed to operate as an LLC.",
        cta: { label: "Ask About Your Industry", href: "/contact" },
        items: [],
      },
      style: {
        backgroundColor: "#f8f5ed",
        textColor: "#000000",
        bodyColor: "#4b5563",
        ctaBg: "#166534",
        ctaColor: "#ffffff",
      },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "cta.label", label: "Button label", type: "text" },
      { key: "cta.href", label: "Button URL", type: "url" },
      {
        key: "items",
        label: "Industries",
        type: "repeater",
        itemSchema: [
          { key: "name", label: "Name", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "href", label: "URL", type: "url" },
          { key: "image", label: "Image", type: "image" },
        ],
      },
    ],
    style: [
      ...styleCommon,
      { key: "ctaBg", label: "Button background", type: "color" },
      { key: "ctaColor", label: "Button text", type: "color" },
    ],
  },

  faq: {
    label: "FAQ",
    defaults: {
      content: { eyebrow: "FAQ", heading: "Frequently asked questions", body: "", image: { url: "", alt: "" }, items: [] },
      style: { backgroundColor: "#efeadc", textColor: "#000", bodyColor: "#4b5563" },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "body", label: "Subheading body", type: "textarea" },
      { key: "image", label: "Image / Video", type: "image" },
      {
        key: "items",
        label: "Questions",
        type: "repeater",
        itemSchema: [
          { key: "question", label: "Question", type: "text" },
          { key: "answer", label: "Answer", type: "textarea" },
          { key: "cta.label", label: "Button label", type: "text" },
          { key: "cta.href", label: "Button URL", type: "url" },
        ],
      },
    ],
    style: [
      ...styleCommon,
      { key: "ctaBg", label: "FAQ button background", type: "color" },
      { key: "ctaColor", label: "FAQ button text", type: "color" },
    ],
  },

  ctaBanner: {
    label: "CTA banner",
    defaults: {
      content: {
        heading: "Ready to start?",
        body: "",
        primaryCta: { label: "Get Started", href: "/questionnaire" },
        secondaryCta: { label: "Learn More", href: "/how-it-works" },
      },
      style: { backgroundColor: "#166534", textColor: "#fff", bodyColor: "rgba(255,255,255,0.7)" },
    },
    content: [
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "primaryCta.label", label: "Primary CTA label", type: "text" },
      { key: "primaryCta.href", label: "Primary CTA URL", type: "url" },
      { key: "secondaryCta.label", label: "Secondary CTA label", type: "text" },
      { key: "secondaryCta.href", label: "Secondary CTA URL", type: "url" },
    ],
    style: [
      ...styleCommon,
      { key: "primaryCtaBg", label: "Primary CTA bg", type: "color" },
      { key: "primaryCtaColor", label: "Primary CTA text", type: "color" },
      { key: "secondaryCtaBorder", label: "Secondary CTA border", type: "color" },
      { key: "secondaryCtaColor", label: "Secondary CTA text", type: "color" },
    ],
  },

  richContent: {
    label: "Rich content / page body",
    defaults: {
      content: {
        eyebrow: "",
        heading: "Page content",
        body: "<p>Edit this page content.</p>",
      },
      style: {
        backgroundColor: "#f8f5ed",
        textColor: "#000000",
        bodyColor: "#4b5563",
        maxWidth: "56rem",
        paddingY: "5rem",
      },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      {
        key: "body",
        label: "Editable HTML body",
        type: "textarea",
        description: "Use simple HTML such as <h2>, <p>, <ul>, <li>, <strong>, and <a>.",
      },
    ],
    style: [
      { key: "backgroundColor", label: "Background", type: "color" },
      { key: "textColor", label: "Heading text", type: "color" },
      { key: "bodyColor", label: "Body text", type: "color" },
      { key: "maxWidth", label: "Content max width", type: "text" },
      { key: "paddingY", label: "Vertical padding", type: "text" },
    ],
  },

  contactForm: {
    label: "Contact page / form",
    defaults: {
      content: {
        eyebrow: "Contact",
        heading: "Talk to a real California lawyer",
        body: "Questions about LLC formation, registered agent service, or ongoing compliance? Our attorneys are here to help.",
        image: { url: "", alt: "", type: "image" },
        infoEyebrow: "Contact Information",
        formEyebrow: "Send a Message",
        successHeading: "Message sent",
        successBody: "Thank you for reaching out. Our team will respond within 1 business day.",
        contacts: [
          { title: "Phone", value: "(833) 555-0123", note: "Mon - Fri, 9:00 AM - 6:00 PM PT" },
          { title: "Email", value: "info@bizlegal.com", note: "We respond within 1 business day" },
          { title: "Office", value: "Los Angeles, California", note: "By appointment only" },
        ],
        fields: {
          name: "Full name",
          email: "Email",
          phone: "Phone (optional)",
          subject: "Subject",
          message: "Message",
          submit: "Send Message",
        },
        subjectOptions: [
          { value: "llc-formation", label: "LLC Formation" },
          { value: "llc-management", label: "LLC Management" },
          { value: "compliance", label: "Compliance Question" },
          { value: "existing-client", label: "Existing Client Support" },
          { value: "other", label: "Other" },
        ],
      },
      style: {
        heroBackgroundColor: "#166534",
        pageBackgroundColor: "#f8f5ed",
        textColor: "#000000",
        heroTextColor: "#ffffff",
        bodyColor: "#4b5563",
        accentColor: "#166534",
      },
    },
    content: [
      { key: "eyebrow", label: "Hero eyebrow", type: "text" },
      { key: "heading", label: "Hero heading", type: "textarea" },
      { key: "body", label: "Hero body", type: "textarea" },
      { key: "image", label: "Hero image", type: "image" },
      { key: "infoEyebrow", label: "Info heading", type: "text" },
      { key: "formEyebrow", label: "Form heading", type: "text" },
      { key: "successHeading", label: "Success heading", type: "text" },
      { key: "successBody", label: "Success body", type: "textarea" },
      { key: "fields.name", label: "Name label", type: "text" },
      { key: "fields.email", label: "Email label", type: "text" },
      { key: "fields.phone", label: "Phone label", type: "text" },
      { key: "fields.subject", label: "Subject label", type: "text" },
      { key: "fields.message", label: "Message label", type: "text" },
      { key: "fields.submit", label: "Submit button", type: "text" },
      {
        key: "contacts",
        label: "Contact info",
        type: "repeater",
        itemSchema: [
          { key: "title", label: "Title", type: "text" },
          { key: "value", label: "Value", type: "text" },
          { key: "note", label: "Note", type: "text" },
        ],
      },
      {
        key: "subjectOptions",
        label: "Subject options",
        type: "repeater",
        itemSchema: [
          { key: "value", label: "Value", type: "text" },
          { key: "label", label: "Label", type: "text" },
        ],
      },
    ],
    style: [
      { key: "heroBackgroundColor", label: "Hero background", type: "color" },
      { key: "pageBackgroundColor", label: "Page background", type: "color" },
      { key: "textColor", label: "Text color", type: "color" },
      { key: "heroTextColor", label: "Hero text", type: "color" },
      { key: "bodyColor", label: "Body text", type: "color" },
      { key: "accentColor", label: "Accent color", type: "color" },
    ],
  },

  bookingForm: {
    label: "Booking page / consultation form",
    defaults: {
      content: {
        eyebrow: "Book a call",
        heading: "Reserve a consultation slot",
        body: "Choose the next available time and pay the flat $25 non-refundable booking fee to hold your call.",
        slotsHeading: "Available slots",
        detailsHeading: "Your details",
        noSlotsText: "No slots are available yet. Please check back soon.",
        loadingText: "Opening checkout...",
        submitText: "Pay $25 and book",
        fields: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          service: "Service needed",
          notes: "Notes",
        },
      },
      style: {
        backgroundColor: "#f8f5ed",
        cardBackgroundColor: "#ffffff",
        textColor: "#000000",
        bodyColor: "#4b5563",
        accentColor: "#166534",
      },
    },
    content: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "slotsHeading", label: "Slots heading", type: "text" },
      { key: "detailsHeading", label: "Details heading", type: "text" },
      { key: "noSlotsText", label: "No slots text", type: "textarea" },
      { key: "loadingText", label: "Loading button text", type: "text" },
      { key: "submitText", label: "Submit button text", type: "text" },
      { key: "fields.name", label: "Name label", type: "text" },
      { key: "fields.email", label: "Email label", type: "text" },
      { key: "fields.phone", label: "Phone label", type: "text" },
      { key: "fields.service", label: "Service label", type: "text" },
      { key: "fields.notes", label: "Notes label", type: "text" },
    ],
    style: [
      { key: "backgroundColor", label: "Background", type: "color" },
      { key: "cardBackgroundColor", label: "Card background", type: "color" },
      { key: "textColor", label: "Text color", type: "color" },
      { key: "bodyColor", label: "Body text", type: "color" },
      { key: "accentColor", label: "Accent color", type: "color" },
    ],
  },

  authForm: {
    label: "Auth form / login signup",
    defaults: {
      content: {
        mode: "login",
        logoText: "Biz Legal",
        panelHeading: "Manage your LLC with confidence",
        panelBody: "Access your documents, track filings, and stay on top of compliance from your secure client portal.",
        heading: "Welcome back",
        body: "Sign in to access your LLC dashboard",
        submitText: "Sign In",
        alternateText: "Don't have an account?",
        alternateLabel: "Create one here",
        alternateHref: "/signup",
        demoHeading: "Demo Account",
        demoButton: "Auto-fill",
        fields: {
          firstName: "First name",
          lastName: "Last name",
          email: "Email address",
          phone: "Phone number",
          password: "Password",
          confirmPassword: "Confirm password",
          forgotPassword: "Forgot password?",
        },
        benefits: ["Secure document storage & access", "Real-time filing status updates", "Compliance deadline reminders"],
        badges: ["SOC 2 Compliant", "256-bit Encryption", "CA Bar Approved"],
      },
      style: { backgroundColor: "#f8f5ed", panelBackgroundColor: "#166534", textColor: "#000000", bodyColor: "#4b5563", accentColor: "#166534" },
    },
    content: [
      { key: "mode", label: "Mode", type: "select", options: ["login", "signup"] },
      { key: "logoText", label: "Logo text", type: "text" },
      { key: "panelHeading", label: "Left panel heading", type: "textarea" },
      { key: "panelBody", label: "Left panel body", type: "textarea" },
      { key: "heading", label: "Form heading", type: "text" },
      { key: "body", label: "Form body", type: "textarea" },
      { key: "submitText", label: "Submit button", type: "text" },
      { key: "alternateText", label: "Alternate text", type: "text" },
      { key: "alternateLabel", label: "Alternate link label", type: "text" },
      { key: "alternateHref", label: "Alternate link URL", type: "url" },
      { key: "demoHeading", label: "Demo heading", type: "text" },
      { key: "demoButton", label: "Demo button", type: "text" },
      { key: "fields.firstName", label: "First name label", type: "text" },
      { key: "fields.lastName", label: "Last name label", type: "text" },
      { key: "fields.email", label: "Email label", type: "text" },
      { key: "fields.phone", label: "Phone label", type: "text" },
      { key: "fields.password", label: "Password label", type: "text" },
      { key: "fields.confirmPassword", label: "Confirm password label", type: "text" },
      { key: "fields.forgotPassword", label: "Forgot password label", type: "text" },
      { key: "benefits", label: "Benefits", type: "repeater", itemSchema: [{ key: "_value", label: "Benefit", type: "text" }] },
      { key: "badges", label: "Badges", type: "repeater", itemSchema: [{ key: "_value", label: "Badge", type: "text" }] },
    ],
    style: [
      { key: "backgroundColor", label: "Background", type: "color" },
      { key: "panelBackgroundColor", label: "Panel background", type: "color" },
      { key: "textColor", label: "Text color", type: "color" },
      { key: "bodyColor", label: "Body text", type: "color" },
      { key: "accentColor", label: "Accent color", type: "color" },
    ],
  },

  statusPage: {
    label: "Status page",
    defaults: {
      content: { heading: "Status heading", body: "Status message.", cta: { label: "", href: "" } },
      style: { backgroundColor: "#f8f5ed", textColor: "#000000", bodyColor: "#4b5563", ctaBg: "#166534", ctaColor: "#ffffff" },
    },
    content: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "cta.label", label: "Button label", type: "text" },
      { key: "cta.href", label: "Button URL", type: "url" },
    ],
    style: [
      { key: "backgroundColor", label: "Background", type: "color" },
      { key: "textColor", label: "Text color", type: "color" },
      { key: "bodyColor", label: "Body text", type: "color" },
      { key: "ctaBg", label: "Button background", type: "color" },
      { key: "ctaColor", label: "Button text", type: "color" },
    ],
  },

  questionnaire: {
    label: "Questionnaire / quiz",
    defaults: {
      content: {
        logoText: "Biz Legal",
        successHeading: "Request Submitted",
        successBody:
          "Thank you for submitting your LLC request. Our team will review your information and reach out within 1-2 business days with a customized plan.",
        successPrimaryCta: { label: "Create Your Account", href: "/signup" },
        successSecondaryCta: { label: "Return Home", href: "/" },
        steps: [
          {
            label: "Business Info",
            heading: "Tell us about your business",
            body: "Basic information about the business you want to form or manage as an LLC.",
            fields: [
              {
                id: "businessName",
                label: "Proposed Business Name",
                type: "text",
                required: true,
                placeholder: "e.g., Pacific Coast Ventures LLC",
                help: "We'll check name availability with the CA Secretary of State",
              },
            ],
          },
        ],
      },
      style: {
        backgroundColor: "#f8f5ed",
        cardBackgroundColor: "#ffffff",
        textColor: "#000000",
        bodyColor: "#6b7280",
        accentColor: "#166534",
        borderColor: "#e5e7eb",
      },
    },
    content: [
      { key: "logoText", label: "Logo text", type: "text" },
      { key: "successHeading", label: "Success heading", type: "text" },
      { key: "successBody", label: "Success body", type: "textarea" },
      { key: "successPrimaryCta.label", label: "Success primary button", type: "text" },
      { key: "successPrimaryCta.href", label: "Success primary URL", type: "url" },
      { key: "successSecondaryCta.label", label: "Success secondary button", type: "text" },
      { key: "successSecondaryCta.href", label: "Success secondary URL", type: "url" },
      {
        key: "steps",
        label: "Quiz steps and questions",
        type: "repeater",
        itemSchema: [
          { key: "label", label: "Step label", type: "text" },
          { key: "heading", label: "Step heading", type: "textarea" },
          { key: "body", label: "Step body", type: "textarea" },
          {
            key: "fields",
            label: "Questions",
            type: "repeater",
            itemSchema: [
              { key: "id", label: "Field ID", type: "text", description: "Stable database key, e.g. businessName" },
              { key: "label", label: "Question label", type: "textarea" },
              { key: "type", label: "Question type", type: "select", options: ["text", "email", "tel", "textarea", "select", "radio"] },
              { key: "required", label: "Required", type: "boolean" },
              { key: "placeholder", label: "Placeholder", type: "text" },
              { key: "help", label: "Help text", type: "textarea" },
              {
                key: "options",
                label: "Options",
                type: "repeater",
                itemSchema: [
                  { key: "value", label: "Value", type: "text" },
                  { key: "label", label: "Label", type: "text" },
                  { key: "description", label: "Description", type: "textarea" },
                ],
              },
            ],
          },
        ],
      },
    ],
    style: [
      { key: "backgroundColor", label: "Page background", type: "color" },
      { key: "cardBackgroundColor", label: "Card background", type: "color" },
      { key: "textColor", label: "Text color", type: "color" },
      { key: "bodyColor", label: "Muted/body color", type: "color" },
      { key: "accentColor", label: "Accent color", type: "color" },
      { key: "borderColor", label: "Border color", type: "color" },
    ],
  },
};

export const THEME_SCHEMAS: Record<string, ThemeSchema> = {
  brand: {
    label: "Brand & Theme",
    fields: [
      { key: "logoText", label: "Logo text", type: "text" },
      { key: "logoAccentColor", label: "Logo accent color", type: "color" },
      { key: "primaryColor", label: "Primary color", type: "color" },
      { key: "primaryHoverColor", label: "Primary hover color", type: "color" },
      { key: "accentColor", label: "Accent color", type: "color" },
      { key: "backgroundColor", label: "Site background", type: "color" },
      { key: "textColor", label: "Site text", type: "color" },
      { key: "mutedTextColor", label: "Muted text", type: "color" },
      {
        key: "fontSerif",
        label: "Heading font",
        type: "select",
        options: ["Playfair Display", "Georgia", "Cormorant Garamond", "Libre Baskerville", "Merriweather"],
      },
      {
        key: "fontSans",
        label: "Body font",
        type: "select",
        options: ["Inter", "Arial", "Helvetica", "Manrope", "Source Sans 3", "System UI"],
      },
    ],
  },
  header: {
    label: "Header, Menu & Buttons",
    fields: [
      { key: "logoUrl", label: "Logo image", type: "image" },
      { key: "logoAlt", label: "Logo alt text", type: "text" },
      { key: "backgroundColor", label: "Header background", type: "color" },
      { key: "textColor", label: "Menu text", type: "color" },
      { key: "ctaLabel", label: "Button label", type: "text" },
      { key: "ctaHref", label: "Button URL", type: "url" },
      { key: "ctaBackgroundColor", label: "Button background", type: "color" },
      { key: "ctaTextColor", label: "Button text", type: "color" },
      {
        key: "links",
        label: "Menu links",
        type: "repeater",
        itemSchema: linkFields,
      },
    ],
  },
  footer: {
    label: "Footer",
    fields: [
      { key: "backgroundColor", label: "Footer background", type: "color" },
      { key: "textColor", label: "Footer headings", type: "color" },
      { key: "mutedTextColor", label: "Footer text", type: "color" },
      { key: "tagline", label: "Tagline", type: "textarea" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "email", label: "Email", type: "text" },
      { key: "location", label: "Location", type: "text" },
      {
        key: "columns",
        label: "Footer columns",
        type: "repeater",
        itemSchema: [
          { key: "title", label: "Column title", type: "text" },
          { key: "links", label: "Links", type: "repeater", itemSchema: linkFields },
        ],
      },
      {
        key: "legal",
        label: "Legal links",
        type: "repeater",
        itemSchema: linkFields,
      },
    ],
  },
};

type JsonObject = Record<string, unknown>;

function isRecord(value: unknown): value is JsonObject {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

export function getByPath(obj: unknown, path: string): unknown {
  if (path === "_value") return obj;
  return path.split(".").reduce<unknown>((acc, key) => (isRecord(acc) ? acc[key] : undefined), obj);
}

export function setByPath(obj: unknown, path: string, value: unknown): unknown {
  if (path === "_value") return value;
  const parts = path.split(".");
  const next: JsonObject = { ...(isRecord(obj) ? obj : {}) };
  let cursor = next;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    cursor[part] = { ...(isRecord(cursor[part]) ? cursor[part] : {}) };
    cursor = cursor[part] as JsonObject;
  }
  cursor[parts[parts.length - 1]] = value;
  return next;
}
