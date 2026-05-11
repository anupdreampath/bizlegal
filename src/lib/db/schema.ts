import {
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
  integer,
  boolean,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

export const pages = pgTable(
  "pages",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    metaDescription: text("meta_description"),
    published: boolean("published").notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => ({
    slugIdx: uniqueIndex("pages_slug_idx").on(t.slug),
  }),
);

export const blocks = pgTable("blocks", {
  id: serial("id").primaryKey(),
  pageId: integer("page_id")
    .notNull()
    .references(() => pages.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  position: integer("position").notNull().default(0),
  content: jsonb("content").notNull().default({}),
  style: jsonb("style").notNull().default({}),
  visible: boolean("visible").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const themeSettings = pgTable("theme_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: jsonb("value").notNull().default({}),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  publicId: text("public_id").notNull(),
  url: text("url").notNull(),
  resourceType: text("resource_type").notNull().default("image"),
  alt: text("alt"),
  width: integer("width"),
  height: integer("height"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const visitorSessions = pgTable(
  "visitor_sessions",
  {
    id: serial("id").primaryKey(),
    visitorId: text("visitor_id").notNull(),
    startedAt: timestamp("started_at").notNull().defaultNow(),
    lastSeenAt: timestamp("last_seen_at").notNull().defaultNow(),
    landingPage: text("landing_page"),
    referrer: text("referrer"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    ipAddress: text("ip_address"),
    country: text("country"),
    region: text("region"),
    city: text("city"),
    timezone: text("timezone"),
    userAgent: text("user_agent"),
    deviceType: text("device_type"),
    browser: text("browser"),
    os: text("os"),
  },
  (t) => ({
    visitorIdx: index("visitor_sessions_visitor_idx").on(t.visitorId),
    startedIdx: index("visitor_sessions_started_idx").on(t.startedAt),
  }),
);

export const pageViews = pgTable(
  "page_views",
  {
    id: serial("id").primaryKey(),
    sessionId: integer("session_id").references(() => visitorSessions.id, { onDelete: "cascade" }),
    visitorId: text("visitor_id").notNull(),
    path: text("path").notNull(),
    title: text("title"),
    referrer: text("referrer"),
    startedAt: timestamp("started_at").notNull().defaultNow(),
    endedAt: timestamp("ended_at"),
    durationSeconds: integer("duration_seconds").notNull().default(0),
    maxScrollDepth: integer("max_scroll_depth").notNull().default(0),
    viewportWidth: integer("viewport_width"),
    viewportHeight: integer("viewport_height"),
  },
  (t) => ({
    pathIdx: index("page_views_path_idx").on(t.path),
    startedIdx: index("page_views_started_idx").on(t.startedAt),
  }),
);

export const analyticsEvents = pgTable(
  "analytics_events",
  {
    id: serial("id").primaryKey(),
    sessionId: integer("session_id").references(() => visitorSessions.id, { onDelete: "cascade" }),
    pageViewId: integer("page_view_id").references(() => pageViews.id, { onDelete: "cascade" }),
    visitorId: text("visitor_id").notNull(),
    eventType: text("event_type").notNull(),
    path: text("path"),
    target: text("target"),
    metadata: jsonb("metadata").notNull().default({}),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => ({
    eventTypeIdx: index("analytics_events_type_idx").on(t.eventType),
    createdIdx: index("analytics_events_created_idx").on(t.createdAt),
  }),
);

export const heatmapEvents = pgTable(
  "heatmap_events",
  {
    id: serial("id").primaryKey(),
    sessionId: integer("session_id").references(() => visitorSessions.id, { onDelete: "cascade" }),
    pageViewId: integer("page_view_id").references(() => pageViews.id, { onDelete: "cascade" }),
    visitorId: text("visitor_id").notNull(),
    path: text("path").notNull(),
    eventType: text("event_type").notNull(),
    x: integer("x").notNull(),
    y: integer("y").notNull(),
    viewportWidth: integer("viewport_width"),
    viewportHeight: integer("viewport_height"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => ({
    heatmapPathIdx: index("heatmap_events_path_idx").on(t.path),
    heatmapCreatedIdx: index("heatmap_events_created_idx").on(t.createdAt),
  }),
);

export const leads = pgTable(
  "leads",
  {
    id: serial("id").primaryKey(),
    sessionId: integer("session_id").references(() => visitorSessions.id, { onDelete: "set null" }),
    visitorId: text("visitor_id"),
    source: text("source").notNull().default("website"),
    status: text("status").notNull().default("new"),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    company: text("company"),
    service: text("service"),
    message: text("message"),
    metadata: jsonb("metadata").notNull().default({}),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => ({
    leadEmailIdx: index("leads_email_idx").on(t.email),
    leadCreatedIdx: index("leads_created_idx").on(t.createdAt),
  }),
);

export const callSlots = pgTable(
  "call_slots",
  {
    id: serial("id").primaryKey(),
    startsAt: timestamp("starts_at").notNull(),
    endsAt: timestamp("ends_at").notNull(),
    timezone: text("timezone").notNull().default("America/Los_Angeles"),
    status: text("status").notNull().default("available"),
    capacity: integer("capacity").notNull().default(1),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => ({
    callSlotStartIdx: index("call_slots_starts_idx").on(t.startsAt),
  }),
);

export const callBookings = pgTable(
  "call_bookings",
  {
    id: serial("id").primaryKey(),
    leadId: integer("lead_id").references(() => leads.id, { onDelete: "set null" }),
    slotId: integer("slot_id").references(() => callSlots.id, { onDelete: "set null" }),
    sessionId: integer("session_id").references(() => visitorSessions.id, { onDelete: "set null" }),
    visitorId: text("visitor_id"),
    status: text("status").notNull().default("pending_payment"),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    startsAt: timestamp("starts_at").notNull(),
    endsAt: timestamp("ends_at").notNull(),
    timezone: text("timezone").notNull().default("America/Los_Angeles"),
    notes: text("notes"),
    stripeCheckoutSessionId: text("stripe_checkout_session_id"),
    stripePaymentIntentId: text("stripe_payment_intent_id"),
    feeCents: integer("fee_cents").notNull().default(2500),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => ({
    bookingEmailIdx: index("call_bookings_email_idx").on(t.email),
    bookingStartIdx: index("call_bookings_starts_idx").on(t.startsAt),
  }),
);

export const payments = pgTable(
  "payments",
  {
    id: serial("id").primaryKey(),
    bookingId: integer("booking_id").references(() => callBookings.id, { onDelete: "set null" }),
    leadId: integer("lead_id").references(() => leads.id, { onDelete: "set null" }),
    provider: text("provider").notNull().default("stripe"),
    providerSessionId: text("provider_session_id"),
    providerPaymentIntentId: text("provider_payment_intent_id"),
    status: text("status").notNull().default("pending"),
    amountCents: integer("amount_cents").notNull(),
    currency: text("currency").notNull().default("usd"),
    description: text("description"),
    rawPayload: jsonb("raw_payload").notNull().default({}),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => ({
    paymentStatusIdx: index("payments_status_idx").on(t.status),
    paymentCreatedIdx: index("payments_created_idx").on(t.createdAt),
  }),
);

export type Page = typeof pages.$inferSelect;
export type Block = typeof blocks.$inferSelect;
export type ThemeSetting = typeof themeSettings.$inferSelect;
export type Media = typeof media.$inferSelect;
export type VisitorSession = typeof visitorSessions.$inferSelect;
export type PageView = typeof pageViews.$inferSelect;
export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type HeatmapEvent = typeof heatmapEvents.$inferSelect;
export type Lead = typeof leads.$inferSelect;
export type CallSlot = typeof callSlots.$inferSelect;
export type CallBooking = typeof callBookings.$inferSelect;
export type Payment = typeof payments.$inferSelect;
