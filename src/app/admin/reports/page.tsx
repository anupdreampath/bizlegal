import { db } from "@/lib/db/client";
import { analyticsEvents, callBookings, heatmapEvents, leads, pageViews, visitorSessions } from "@/lib/db/schema";
import { desc, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function ReportsPage() {
  const [sessions, views, avgTime, topPages, cities, heatmap, events, recentVisitors, leadCount, bookingCount] =
    await Promise.all([
      db.select({ count: sql<number>`count(*)::int` }).from(visitorSessions),
      db.select({ count: sql<number>`count(*)::int` }).from(pageViews),
      db.select({ seconds: sql<number>`coalesce(avg(${pageViews.durationSeconds}), 0)::int` }).from(pageViews),
      db
        .select({
          path: pageViews.path,
          views: sql<number>`count(*)::int`,
          avgSeconds: sql<number>`coalesce(avg(${pageViews.durationSeconds}), 0)::int`,
          avgScroll: sql<number>`coalesce(avg(${pageViews.maxScrollDepth}), 0)::int`,
        })
        .from(pageViews)
        .groupBy(pageViews.path)
        .orderBy(sql`count(*) desc`)
        .limit(8),
      db
        .select({
          city: visitorSessions.city,
          region: visitorSessions.region,
          country: visitorSessions.country,
          visits: sql<number>`count(*)::int`,
        })
        .from(visitorSessions)
        .groupBy(visitorSessions.city, visitorSessions.region, visitorSessions.country)
        .orderBy(sql`count(*) desc`)
        .limit(8),
      db
        .select({
          path: heatmapEvents.path,
          clicks: sql<number>`count(*)::int`,
          avgX: sql<number>`avg(${heatmapEvents.x})::int`,
          avgY: sql<number>`avg(${heatmapEvents.y})::int`,
        })
        .from(heatmapEvents)
        .groupBy(heatmapEvents.path)
        .orderBy(sql`count(*) desc`)
        .limit(8),
      db
        .select({ eventType: analyticsEvents.eventType, count: sql<number>`count(*)::int` })
        .from(analyticsEvents)
        .groupBy(analyticsEvents.eventType)
        .orderBy(sql`count(*) desc`)
        .limit(8),
      db.select().from(visitorSessions).orderBy(desc(visitorSessions.startedAt)).limit(10),
      db.select({ count: sql<number>`count(*)::int` }).from(leads),
      db.select({ count: sql<number>`count(*)::int` }).from(callBookings),
    ]);

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Reports</h1>
        <p className="text-sm text-zinc-400 mt-1">Visitor behavior, page performance, locations, events, and heatmap summaries.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-3">
        <Metric label="Visitors" value={sessions[0]?.count || 0} />
        <Metric label="Page views" value={views[0]?.count || 0} />
        <Metric label="Avg. time" value={`${avgTime[0]?.seconds || 0}s`} />
        <Metric label="Leads" value={leadCount[0]?.count || 0} />
        <Metric label="Bookings" value={bookingCount[0]?.count || 0} />
      </div>

      <div className="grid xl:grid-cols-2 gap-6">
        <Panel title="Top Pages">
          <Table rows={topPages.map((p) => [p.path, `${p.views} views`, `${p.avgSeconds}s`, `${p.avgScroll}% scroll`])} />
        </Panel>
        <Panel title="City / State">
          <Table rows={cities.map((c) => [`${c.city || "Unknown"}, ${c.region || ""} ${c.country || ""}`, `${c.visits} visits`])} />
        </Panel>
        <Panel title="Heatmap Summary">
          <Table rows={heatmap.map((h) => [h.path, `${h.clicks} clicks`, `avg x:${h.avgX} y:${h.avgY}`])} />
        </Panel>
        <Panel title="Events">
          <Table rows={events.map((e) => [e.eventType, `${e.count}`])} />
        </Panel>
      </div>

      <Panel title="Recent Visitors">
        <Table
          rows={recentVisitors.map((v) => [
            v.visitorId.slice(0, 8),
            v.landingPage || "/",
            `${v.city || "Unknown"} ${v.region || ""}`,
            v.deviceType || "",
            new Date(v.startedAt).toLocaleString(),
          ])}
        />
      </Panel>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <p className="text-xs text-zinc-500 uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <h2 className="px-4 py-3 border-b border-zinc-800 font-medium">{title}</h2>
      {children}
    </section>
  );
}

function Table({ rows }: { rows: Array<Array<string | number>> }) {
  return (
    <div className="divide-y divide-zinc-800 text-sm">
      {rows.length ? rows.map((row, i) => (
        <div key={i} className="grid grid-cols-4 gap-3 px-4 py-3">
          {row.map((cell, j) => <span key={j} className={j === 0 ? "text-zinc-100 col-span-1" : "text-zinc-400"}>{cell}</span>)}
        </div>
      )) : <p className="px-4 py-6 text-zinc-500">No data yet.</p>}
    </div>
  );
}
