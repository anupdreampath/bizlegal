import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";

async function upsertPage(db: any, pages: any, slug: string, title: string) {
  const existing = await db.select().from(pages).where(eq(pages.slug, slug)).limit(1);
  if (existing.length) return existing[0].id;
  const inserted = await db.insert(pages).values({ slug, title, metaDescription: title }).returning({ id: pages.id });
  return inserted[0].id;
}

async function replaceSingleBlock(db: any, blocks: any, pageId: number, type: string, content: unknown, style: unknown) {
  const existing = await db.select().from(blocks).where(eq(blocks.pageId, pageId));
  const current = existing.find((block: any) => block.type === type);
  if (current) {
    await db.update(blocks).set({ content, style, position: 0, visible: true, updatedAt: new Date() }).where(eq(blocks.id, current.id));
  } else {
    await db.insert(blocks).values({ pageId, type, position: 0, content, style, visible: true });
  }
  for (const block of existing.filter((item: any) => item.type !== type)) {
    await db.update(blocks).set({ position: 1, visible: false, updatedAt: new Date() }).where(eq(blocks.id, block.id));
  }
}

async function main() {
  const [{ db }, { blocks, pages }] = await Promise.all([
    import("../src/lib/db/client"),
    import("../src/lib/db/schema"),
  ]);

  const authStyle = { backgroundColor: "#f8f5ed", panelBackgroundColor: "#166534", textColor: "#000000", bodyColor: "#4b5563", accentColor: "#166534" };

  await replaceSingleBlock(
    db,
    blocks,
    await upsertPage(db, pages, "login", "Login"),
    "authForm",
    {
      mode: "login",
      logoText: "Biz Legal",
      panelHeading: "Manage your LLC with confidence",
      panelBody: "Access your documents, track filings, and stay on top of compliance - all from your secure client portal.",
      heading: "Welcome back",
      body: "Sign in to access your LLC dashboard",
      submitText: "Sign In",
      alternateText: "Don't have an account?",
      alternateLabel: "Create one here",
      alternateHref: "/signup",
      demoHeading: "Demo Account",
      demoButton: "Auto-fill",
      fields: { email: "Email address", password: "Password", forgotPassword: "Forgot password?" },
      benefits: ["Secure document storage & access", "Real-time filing status updates", "Compliance deadline reminders", "Direct communication with your specialist"],
      badges: ["SOC 2 Compliant", "256-bit Encryption", "CA Bar Approved"],
    },
    authStyle,
  );

  await replaceSingleBlock(
    db,
    blocks,
    await upsertPage(db, pages, "signup", "Sign Up"),
    "authForm",
    {
      mode: "signup",
      logoText: "Biz Legal",
      panelHeading: "Your LLC journey starts here",
      panelBody: "Create your account to track your LLC formation, access documents, and manage your business compliance.",
      heading: "Create your account",
      body: "Set up your client portal to manage your LLC",
      submitText: "Create Account",
      alternateText: "Already have an account?",
      alternateLabel: "Sign in",
      alternateHref: "/login",
      fields: { firstName: "First name", lastName: "Last name", email: "Email address", phone: "Phone number", password: "Password", confirmPassword: "Confirm password" },
      benefits: ["Secure document storage & access", "Real-time filing status updates", "Compliance deadline reminders", "Direct communication with your specialist"],
      badges: ["SOC 2 Compliant", "256-bit Encryption", "CA Bar Approved"],
    },
    authStyle,
  );

  const statusStyle = { backgroundColor: "#f8f5ed", textColor: "#000000", bodyColor: "#4b5563", ctaBg: "#166534", ctaColor: "#ffffff" };
  await replaceSingleBlock(db, blocks, await upsertPage(db, pages, "booking-success", "Booking Success"), "statusPage", { heading: "Your call is booked", body: "Payment was received and your consultation slot is reserved.", cta: { label: "Return home", href: "/" } }, statusStyle);
  await replaceSingleBlock(db, blocks, await upsertPage(db, pages, "booking-cancelled", "Booking Cancelled"), "statusPage", { heading: "Booking not completed", body: "Your slot is not confirmed until the $25 booking fee is paid.", cta: { label: "Choose another slot", href: "/booking" } }, statusStyle);

  console.log("Seeded auth and status pages.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
