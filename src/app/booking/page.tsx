"use client";

import { useEffect, useState } from "react";
import PageShell from "@/components/PageShell";

type Slot = {
  id: number;
  startsAt: string;
  endsAt: string;
  timezone: string;
};

export default function BookingPage() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlotId, setSelectedSlotId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", notes: "" });

  useEffect(() => {
    fetch("/api/bookings/availability")
      .then((res) => res.json())
      .then((data) => {
        setSlots(data.slots || []);
        if (data.slots?.[0]) setSelectedSlotId(data.slots[0].id);
      });
  }, []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!selectedSlotId) return;
    setLoading(true);
    const res = await fetch("/api/bookings/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, slotId: selectedSlotId }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    setLoading(false);
  }

  return (
    <PageShell
      cmsSlug="booking"
      label="Book a call"
      title="Reserve a consultation slot"
      description="Choose the next available time and pay the flat $25 non-refundable booking fee to hold your call."
    >
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={submit} className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
            <section className="bg-white rounded-[1rem] p-5">
              <h2 className="font-serif text-[1.5rem] mb-4">Available slots</h2>
              <div className="space-y-2">
                {slots.map((slot) => (
                  <label key={slot.id} className={`block rounded-lg border p-3 cursor-pointer ${selectedSlotId === slot.id ? "border-green-800 bg-green-50" : "border-gray-200"}`}>
                    <input type="radio" name="slot" className="sr-only" checked={selectedSlotId === slot.id} onChange={() => setSelectedSlotId(slot.id)} />
                    <span className="font-sans text-sm text-black">{new Date(slot.startsAt).toLocaleString()}</span>
                    <span className="block font-sans text-xs text-gray-500">{slot.timezone}</span>
                  </label>
                ))}
                {!slots.length && <p className="text-sm text-gray-500">No slots are available yet. Please check back soon.</p>}
              </div>
            </section>

            <section className="bg-white rounded-[1rem] p-5 space-y-4">
              <h2 className="font-serif text-[1.5rem]">Your details</h2>
              <Input label="Name" value={form.name} onChange={(name) => setForm({ ...form, name })} required />
              <Input label="Email" type="email" value={form.email} onChange={(email) => setForm({ ...form, email })} required />
              <Input label="Phone" value={form.phone} onChange={(phone) => setForm({ ...form, phone })} />
              <Input label="Service needed" value={form.service} onChange={(service) => setForm({ ...form, service })} />
              <label className="block">
                <span className="block font-sans font-bold text-sm text-black mb-1.5">Notes</span>
                <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black" />
              </label>
              <button disabled={loading || !selectedSlotId} className="w-full bg-green-800 text-white rounded-full py-3 font-sans font-medium disabled:opacity-50">
                {loading ? "Opening checkout..." : "Pay $25 and book"}
              </button>
            </section>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block font-sans font-bold text-sm text-black mb-1.5">{label}</span>
      <input type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black" />
    </label>
  );
}
