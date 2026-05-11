"use client";

import { useEffect, useState } from "react";
import CloudinaryUploader from "@/components/admin/CloudinaryUploader";

export default function ThemePage() {
  const [theme, setTheme] = useState<any>(null);
  const [saving, setSaving] = useState<string | null>(null);

  async function load() {
    const res = await fetch("/api/admin/theme");
    const data = await res.json();
    setTheme(data.theme);
  }
  useEffect(() => {
    load();
  }, []);

  async function save(key: string, value: any) {
    setSaving(key);
    await fetch("/api/admin/theme", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value }),
    });
    setSaving(null);
  }

  if (!theme) return <div className="p-8 text-zinc-400">Loading…</div>;

  const brand = theme.brand || {};
  const header = theme.header || {};
  const footer = theme.footer || {};

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-10">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Theme</h1>
        <p className="text-sm text-zinc-400">Brand, logo, colors, fonts, header & footer.</p>
      </div>

      <Section title="Brand">
        <Row label="Logo text">
          <Input value={brand.logoText} onChange={(v) => setTheme({ ...theme, brand: { ...brand, logoText: v } })} />
        </Row>
        <Row label="Logo image">
          <CloudinaryUploader
            value={header.logoUrl}
            onChange={(url) => setTheme({ ...theme, header: { ...header, logoUrl: url } })}
            accept="image"
          />
        </Row>
        <Row label="Logo accent dot color">
          <ColorInput value={brand.logoAccentColor} onChange={(v) => setTheme({ ...theme, brand: { ...brand, logoAccentColor: v } })} />
        </Row>
        <Row label="Primary color">
          <ColorInput value={brand.primaryColor} onChange={(v) => setTheme({ ...theme, brand: { ...brand, primaryColor: v } })} />
        </Row>
        <Row label="Primary hover color">
          <ColorInput value={brand.primaryHoverColor} onChange={(v) => setTheme({ ...theme, brand: { ...brand, primaryHoverColor: v } })} />
        </Row>
        <Row label="Background color">
          <ColorInput value={brand.backgroundColor} onChange={(v) => setTheme({ ...theme, brand: { ...brand, backgroundColor: v } })} />
        </Row>
        <Row label="Text color">
          <ColorInput value={brand.textColor} onChange={(v) => setTheme({ ...theme, brand: { ...brand, textColor: v } })} />
        </Row>
        <Row label="Serif font">
          <FontSelect value={brand.fontSerif} onChange={(v) => setTheme({ ...theme, brand: { ...brand, fontSerif: v } })} kind="serif" />
        </Row>
        <Row label="Sans font">
          <FontSelect value={brand.fontSans} onChange={(v) => setTheme({ ...theme, brand: { ...brand, fontSans: v } })} kind="sans" />
        </Row>
        <SaveButton saving={saving === "brand"} onClick={() => save("brand", brand)} />
      </Section>

      <Section title="Header">
        <Row label="CTA label">
          <Input value={header.ctaLabel} onChange={(v) => setTheme({ ...theme, header: { ...header, ctaLabel: v } })} />
        </Row>
        <Row label="CTA URL">
          <Input value={header.ctaHref} onChange={(v) => setTheme({ ...theme, header: { ...header, ctaHref: v } })} />
        </Row>
        <Row label="Nav links">
          <RepeaterLinks
            value={header.links || []}
            onChange={(v) => setTheme({ ...theme, header: { ...header, links: v } })}
          />
        </Row>
        <SaveButton saving={saving === "header"} onClick={() => save("header", header)} />
      </Section>

      <Section title="Footer">
        <Row label="Tagline">
          <Textarea value={footer.tagline} onChange={(v) => setTheme({ ...theme, footer: { ...footer, tagline: v } })} />
        </Row>
        <Row label="Phone">
          <Input value={footer.phone} onChange={(v) => setTheme({ ...theme, footer: { ...footer, phone: v } })} />
        </Row>
        <Row label="Email">
          <Input value={footer.email} onChange={(v) => setTheme({ ...theme, footer: { ...footer, email: v } })} />
        </Row>
        <Row label="Location">
          <Input value={footer.location} onChange={(v) => setTheme({ ...theme, footer: { ...footer, location: v } })} />
        </Row>
        <SaveButton saving={saving === "footer"} onClick={() => save("footer", footer)} />
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-zinc-800 rounded-xl bg-zinc-900 p-6 space-y-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[180px_1fr] items-start gap-4 py-2">
      <label className="text-sm text-zinc-400 pt-2">{label}</label>
      <div>{children}</div>
    </div>
  );
}
function Input({ value, onChange }: { value: any; onChange: (v: string) => void }) {
  return (
    <input
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
    />
  );
}
function Textarea({ value, onChange }: { value: any; onChange: (v: string) => void }) {
  return (
    <textarea
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      rows={3}
      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
    />
  );
}
function ColorInput({ value, onChange }: { value: any; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-2">
      <input type="color" value={value || "#000000"} onChange={(e) => onChange(e.target.value)} className="h-9 w-12 rounded border border-zinc-800 bg-zinc-950" />
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-emerald-500"
      />
    </div>
  );
}
function SaveButton({ saving, onClick }: any) {
  return (
    <button
      onClick={onClick}
      disabled={saving}
      className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-lg text-sm disabled:opacity-50"
    >
      {saving ? "Saving…" : "Save"}
    </button>
  );
}

const FONTS = [
  "Inter", "DM Sans", "Roboto", "Open Sans", "Lato", "Poppins", "Montserrat", "Source Sans 3",
  "Playfair Display", "DM Serif Display", "Merriweather", "Lora", "EB Garamond", "Crimson Pro",
  "Cormorant Garamond", "Libre Baskerville", "Cardo",
];
function FontSelect({ value, onChange }: { value: string; onChange: (v: string) => void; kind?: string }) {
  return (
    <select
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
    >
      {FONTS.map((f) => (
        <option key={f} value={f}>{f}</option>
      ))}
    </select>
  );
}

function RepeaterLinks({ value, onChange }: { value: { label: string; href: string }[]; onChange: (v: any[]) => void }) {
  return (
    <div className="space-y-2">
      {value.map((l, i) => (
        <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2">
          <Input value={l.label} onChange={(v: string) => onChange(value.map((x, j) => (i === j ? { ...x, label: v } : x)))} />
          <Input value={l.href} onChange={(v: string) => onChange(value.map((x, j) => (i === j ? { ...x, href: v } : x)))} />
          <button onClick={() => onChange(value.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-300 px-2 text-sm">Remove</button>
        </div>
      ))}
      <button onClick={() => onChange([...value, { label: "", href: "" }])} className="text-emerald-400 hover:text-emerald-300 text-sm">+ Add link</button>
    </div>
  );
}
