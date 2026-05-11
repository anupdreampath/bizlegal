import { db } from "@/lib/db/client";
import { callBookings, leads } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const rows = await db
    .select({
      lead: leads,
      booking: callBookings,
    })
    .from(leads)
    .leftJoin(callBookings, eq(callBookings.leadId, leads.id))
    .orderBy(desc(leads.createdAt))
    .limit(100);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Leads</h1>
        <p className="text-sm text-zinc-400 mt-1">People who submitted details or started a paid call booking.</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-4 px-4 py-3 border-b border-zinc-800 text-xs uppercase tracking-wider text-zinc-500">
          <span>Lead</span>
          <span>Source</span>
          <span>Status</span>
          <span>Booking</span>
          <span>Created</span>
        </div>
        <div className="divide-y divide-zinc-800">
          {rows.map(({ lead, booking }) => (
            <div key={`${lead.id}-${booking?.id || "lead"}`} className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-4 px-4 py-4 text-sm">
              <div>
                <p className="font-medium">{lead.name}</p>
                <p className="text-zinc-400">{lead.email}</p>
                {lead.phone && <p className="text-zinc-500">{lead.phone}</p>}
              </div>
              <span className="text-zinc-300">{lead.source}</span>
              <span>
                <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-200">{lead.status}</span>
              </span>
              <span className="text-zinc-400">
                {booking ? (
                  <>
                    <span className="block text-zinc-200">{booking.status}</span>
                    <span>{new Date(booking.startsAt).toLocaleString()}</span>
                  </>
                ) : (
                  "No booking"
                )}
              </span>
              <span className="text-zinc-500">{new Date(lead.createdAt).toLocaleString()}</span>
            </div>
          ))}
          {!rows.length && <p className="p-6 text-sm text-zinc-500">No leads yet.</p>}
        </div>
      </div>
    </div>
  );
}
