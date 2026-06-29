import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";

const opts = (items: string[]) => items.map((label) => ({ value: label, label }));

const content = {
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
        { id: "businessName", label: "Proposed Business Name", type: "text", required: true, placeholder: "e.g., Pacific Coast Ventures LLC", help: "We'll check name availability with the CA Secretary of State" },
        { id: "businessType", label: "Type of Business", type: "select", required: true, placeholder: "Select business type...", options: opts(["Single-Member LLC", "Multi-Member LLC", "Series LLC", "Professional LLC (PLLC)", "Not sure yet"]) },
        { id: "industry", label: "Industry / Sector", type: "select", required: true, placeholder: "Select your industry...", options: opts(["Technology / Software", "Real Estate / Property", "Consulting / Professional Services", "Healthcare / Medical", "E-Commerce / Retail", "Food & Beverage", "Construction / Contracting", "Creative / Media / Entertainment", "Finance / Accounting", "Other"]) },
        {
          id: "hasExistingBusiness",
          label: "Do you have an existing business?",
          type: "radio",
          options: [
            { value: "no", label: "No, this is a new venture", description: "Starting fresh with a new LLC" },
            { value: "sole-prop", label: "Yes, I have a sole proprietorship", description: "Converting an existing business to an LLC" },
            { value: "other-entity", label: "Yes, I have another business entity", description: "Restructuring or creating an additional entity" },
          ],
        },
      ],
    },
    {
      label: "LLC Purpose",
      heading: "Purpose & motivation for your LLC",
      body: "Help us understand your goals so we can structure your LLC optimally.",
      fields: [
        {
          id: "llcPurpose",
          label: "What is the primary purpose of this LLC?",
          type: "radio",
          required: true,
          options: [
            { value: "new-business", label: "Start a new business", description: "Launching a new product or service" },
            { value: "asset-protection", label: "Asset protection", description: "Protecting personal assets from business liabilities" },
            { value: "real-estate", label: "Real estate investment", description: "Holding and managing real estate properties" },
            { value: "freelance", label: "Freelance / consulting", description: "Operating as an independent contractor or consultant" },
            { value: "holding-company", label: "Holding company", description: "Managing ownership of other businesses or investments" },
            { value: "other", label: "Other", description: "Describe in the notes below" },
          ],
        },
        { id: "mainMotivation", label: "What is your main motivation for forming an LLC?", type: "select", required: true, placeholder: "Select your primary motivation...", options: opts(["Liability protection", "Tax benefits", "Business credibility", "Raising investment", "Government contracts", "Partnership structure", "Multiple reasons"]) },
        { id: "businessActivities", label: "Describe the main activities of your business", type: "textarea", required: true, placeholder: "Tell us what your company will do - products, services, target market, etc." },
        { id: "revenueExpectation", label: "Expected annual revenue", type: "select", placeholder: "Select expected revenue range...", options: opts(["Under $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "$500,000 - $1,000,000", "Over $1,000,000", "Not sure yet"]) },
      ],
    },
    {
      label: "Members",
      heading: "LLC members & management",
      body: "Tell us about the people involved in your LLC.",
      fields: [
        { id: "numberOfMembers", label: "Number of LLC members", type: "select", required: true, placeholder: "How many members will the LLC have?", options: opts(["1 (Single-member)", "2", "3-5", "6-10", "More than 10"]) },
        { id: "memberNames", label: "Member name(s)", type: "textarea", required: true, placeholder: "List all member names and ownership percentages." },
        {
          id: "managementStructure",
          label: "Management structure",
          type: "radio",
          required: true,
          options: [
            { value: "member-managed", label: "Member-Managed", description: "All members participate in day-to-day operations and decisions" },
            { value: "manager-managed", label: "Manager-Managed", description: "One or more designated managers handle operations; some members are passive investors" },
            { value: "not-sure", label: "Not sure", description: "We'll recommend the best structure for your situation" },
          ],
        },
      ],
    },
    {
      label: "Company Profile",
      heading: "Your contact information",
      body: "How should we reach you to discuss your LLC request?",
      fields: [
        { id: "businessAddress", label: "Business address (or intended address)", type: "text", required: true, placeholder: "Street address, City, CA ZIP" },
        { id: "phone", label: "Phone number", type: "tel", required: true, placeholder: "(555) 123-4567" },
        { id: "email", label: "Email address", type: "email", required: true, placeholder: "you@example.com" },
        { id: "website", label: "Website (optional)", type: "text", placeholder: "https://yourwebsite.com" },
        { id: "additionalNotes", label: "Additional notes or questions", type: "textarea", placeholder: "Anything else you'd like us to know about your LLC needs?" },
      ],
    },
    { label: "Review & Submit", heading: "Review your request", body: "Please verify your information before submitting.", fields: [] },
  ],
};

const style = {
  backgroundColor: "#f8f5ed",
  cardBackgroundColor: "#ffffff",
  textColor: "#000000",
  bodyColor: "#6b7280",
  accentColor: "#166534",
  borderColor: "#e5e7eb",
};

async function main() {
  const [{ db }, { blocks, pages }] = await Promise.all([
    import("../src/lib/db/client"),
    import("../src/lib/db/schema"),
  ]);

  const existing = await db.select().from(pages).where(eq(pages.slug, "questionnaire")).limit(1);
  let pageId: number;

  if (existing.length) {
    pageId = existing[0].id;
    await db
      .update(pages)
      .set({
        title: "Questionnaire - Start Your LLC Request",
        metaDescription: "Editable guided LLC intake quiz and questionnaire.",
        updatedAt: new Date(),
      })
      .where(eq(pages.slug, "questionnaire"));
  } else {
    const inserted = await db
      .insert(pages)
      .values({
        slug: "questionnaire",
        title: "Questionnaire - Start Your LLC Request",
        metaDescription: "Editable guided LLC intake quiz and questionnaire.",
      })
      .returning({ id: pages.id });
    pageId = inserted[0].id;
  }

  const existingBlocks = await db.select().from(blocks).where(eq(blocks.pageId, pageId));
  const quiz = existingBlocks.find((block) => block.type === "questionnaire");

  if (quiz) {
    await db.update(blocks).set({ content, style, visible: true, updatedAt: new Date() }).where(eq(blocks.id, quiz.id));
  } else {
    await db.insert(blocks).values({
      pageId,
      type: "questionnaire",
      position: existingBlocks.length,
      content,
      style,
      visible: true,
    });
  }

  console.log(JSON.stringify({ pageId, quizBlock: quiz?.id || "inserted" }));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
