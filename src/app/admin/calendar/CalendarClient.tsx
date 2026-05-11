"use client";

import { useEffect, useState } from "react";

type Slot = {
  id: number;
  startsAt: string;
  endsAt: string;
  timezone: string;
  status: string;
};

export default function CalendarClient() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [startsAt, setStartsAt] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(30);

  async function load() {
    const res = await fetch("/api/admin/calendar");
    const data = await res.json();
    setSlots(data.slots || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function addSlot(event: React.FormEvent) {
    event.preventDefault();
    await fetch("/api/admin/calendar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startsAt, durationMinutes }),
    });
    setStartsAt("");
    await load();
  }

  async function setStatus(id: number, status: string) {
    await fetch(`/api/admin/calendar/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await load();
  }

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Calendar</h1>
        <p className="text-sm text-zinc-400 mt-1">Create consultation slots. Booked slots are removed from public availability.</p>
      </div>

      <form onSubmit={addSlot} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-wrap gap-3 items-end">
        <label className="space-y-1">
          <span className="text-xs uppercase tracking-wider text-zinc-500">Start time</span>
          <input
            type="datetime-local"
            value={startsAt}
            onChange={(e) => setStartsAt(e.target.value)}
            required
            className="block bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm"
          />
        </label>
        <label className="space-y-1">
          <span className="text-xs uppercase tracking-wider text-zinc-500">Minutes</span>
          <input
            type="number"
            value={durationMinutes}
            min={15}
            step={15}
            onChange={(e) => setDurationMinutes(Number(e.target.value))}
            className="block w-28 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm"
          />
        </label>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-lg text-sm">
          Add slot
        </button>
      </form>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 px-4 py-3 border-b border-zinc-800 text-xs uppercase tracking-wider text-zinc-500">
          <span>Starts</span>
          <span>Ends</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
        <div className="divide-y divide-zinc-800">
          {slots.map((slot) => (
            <div key={slot.id} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 px-4 py-4 text-sm items-center">
              <span>{new Date(slot.startsAt).toLocaleString()}</span>
              <span className="text-zinc-400">{new Date(slot.endsAt).toLocaleString()}</span>
              <span><span className="rounded-full bg-zinc-800 px-2 py-1 text-xs">{slot.status}</span></span>
              <div className="flex gap-2">
                <button onClick={() => setStatus(slot.id, "available")} className="text-emerald-400 hover:text-emerald-300">Available</button>
                <button onClick={() => setStatus(slot.id, "blocked")} className="text-red-400 hover:text-red-300">Block</button>
              </div>
            </div>
          ))}
          {!slots.length && <p className="p-6 text-sm text-zinc-500">No upcoming slots.</p>}
        </div>
      </div>
    </div>
  );
}
