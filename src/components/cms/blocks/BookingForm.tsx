"use client";

import { useEffect, useState } from "react";

type Slot = { id: number; startsAt: string; endsAt: string; timezone: string };
type BookingContent = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  slotsHeading?: string;
  detailsHeading?: string;
  noSlotsText?: string;
  loadingText?: string;
  submitText?: string;
  fields?: Record<string, string>;
};
type BookingStyle = {
  backgroundColor?: string;
  cardBackgroundColor?: string;
  textColor?: string;
  bodyColor?: string;
  accentColor?: string;
};

function asContent(value: unknown): BookingContent {
  return value && typeof value === "object" && !Array.isArray(value) ? value as BookingContent : {};
}

function asStyle(value: unknown): BookingStyle {
  return value && typeof value === "object" && !Array.isArray(value) ? value as BookingStyle : {};
}

export default function BookingFormBlock({ content, style }: { blockId: number; content: unknown; style: unknown }) {
  const c = asContent(content);
  const s = asStyle(style);
  const fields = c.fields || {};
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlotId, setSelectedSlotId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", notes: "" });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/bookings/availability")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setSlots(data.slots || []);
        if (data.slots?.[0]) setSelectedSlotId(data.slots[0].id);
      });
    return () => {
      cancelled = true;
    };
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

  const accent = s.accentColor || "#166534";
  const text = s.textColor || "#000000";
  const body = s.bodyColor || "#4b5563";

  return (
    <section className="pt-[8rem] pb-[5rem]" style={{ backgroundColor: s.backgroundColor || "#f8f5ed" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <p className="font-sans font-bold uppercase mb-3" style={{ color: accent }}>{c.eyebrow || "Book a call"}</p>
          <h1 className="font-serif text-[2.75rem] md:text-[4rem] leading-[1.05]" style={{ color: text }}>{c.heading}</h1>
          {c.body && <p className="font-sans mt-4 max-w-2xl" style={{ color: body }}>{c.body}</p>}
        </div>

        <form onSubmit={submit} className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <section className="rounded-[1rem] p-5" style={{ backgroundColor: s.cardBackgroundColor || "#ffffff" }}>
            <h2 className="font-serif text-[1.5rem] mb-4" style={{ color: text }}>{c.slotsHeading || "Available slots"}</h2>
            <div className="space-y-2">
              {slots.map((slot) => (
                <label key={slot.id} className="block rounded-lg border p-3 cursor-pointer" style={{ borderColor: selectedSlotId === slot.id ? accent : "#e5e7eb", backgroundColor: selectedSlotId === slot.id ? `${accent}0d` : "#ffffff" }}>
                  <input type="radio" name="slot" className="sr-only" checked={selectedSlotId === slot.id} onChange={() => setSelectedSlotId(slot.id)} />
                  <span className="font-sans text-sm" style={{ color: text }}>{new Date(slot.startsAt).toLocaleString()}</span>
                  <span className="block font-sans text-xs" style={{ color: body }}>{slot.timezone}</span>
                </label>
              ))}
              {!slots.length && <p className="text-sm" style={{ color: body }}>{c.noSlotsText || "No slots are available yet. Please check back soon."}</p>}
            </div>
          </section>

          <section className="rounded-[1rem] p-5 space-y-4" style={{ backgroundColor: s.cardBackgroundColor || "#ffffff" }}>
            <h2 className="font-serif text-[1.5rem]" style={{ color: text }}>{c.detailsHeading || "Your details"}</h2>
            <Input label={fields.name || "Name"} value={form.name} onChange={(name) => setForm({ ...form, name })} required />
            <Input label={fields.email || "Email"} type="email" value={form.email} onChange={(email) => setForm({ ...form, email })} required />
            <Input label={fields.phone || "Phone"} value={form.phone} onChange={(phone) => setForm({ ...form, phone })} />
            <Input label={fields.service || "Service needed"} value={form.service} onChange={(service) => setForm({ ...form, service })} />
            <label className="block">
              <span className="block font-sans font-bold text-sm mb-1.5" style={{ color: text }}>{fields.notes || "Notes"}</span>
              <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black focus:outline-none" />
            </label>
            <button disabled={loading || !selectedSlotId} className="w-full text-white rounded-full py-3 font-sans font-medium disabled:opacity-50" style={{ backgroundColor: accent }}>
              {loading ? c.loadingText || "Opening checkout..." : c.submitText || "Pay $25 and book"}
            </button>
          </section>
        </form>
      </div>
    </section>
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
      <input type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-sm text-black focus:outline-none" />
    </label>
  );
}
