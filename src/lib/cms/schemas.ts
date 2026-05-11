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
  defaults?: { content?: any; style?: any };
  content: Field[];
  style: Field[];
};

const styleCommon: Field[] = [
  { key: "backgroundColor", label: "Background", type: "color" },
  { key: "textColor", label: "Heading / Text color", type: "color" },
  { key: "bodyColor", label: "Body color", type: "color" },
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
        ],
      },
    ],
    style: styleCommon,
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
};

export function getByPath(obj: any, path: string): any {
  if (path === "_value") return obj;
  return path.split(".").reduce((acc, k) => (acc == null ? undefined : acc[k]), obj);
}

export function setByPath(obj: any, path: string, value: any): any {
  if (path === "_value") return value;
  const parts = path.split(".");
  const next = { ...(obj || {}) };
  let cursor: any = next;
  for (let i = 0; i < parts.length - 1; i++) {
    cursor[parts[i]] = { ...(cursor[parts[i]] || {}) };
    cursor = cursor[parts[i]];
  }
  cursor[parts[parts.length - 1]] = value;
  return next;
}
