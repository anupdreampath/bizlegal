"use client";

import { Field, getByPath, setByPath } from "@/lib/cms/schemas";
import CloudinaryUploader from "./CloudinaryUploader";

export default function FieldEditor({
  field,
  data,
  onChange,
}: {
  field: Field;
  data: any;
  onChange: (next: any) => void;
}) {
  const value = getByPath(data, field.key);
  const set = (v: any) => onChange(setByPath(data, field.key, v));

  switch (field.type) {
    case "text":
    case "url":
      return (
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-zinc-400">{field.label}</label>
          <input
            value={value || ""}
            onChange={(e) => set(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>
      );
    case "textarea":
      return (
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-zinc-400">{field.label}</label>
          <textarea
            value={value || ""}
            onChange={(e) => set(e.target.value)}
            rows={3}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 leading-snug"
          />
        </div>
      );
    case "color":
      return (
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-zinc-400">{field.label}</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={(typeof value === "string" && value.startsWith("#")) ? value : "#000000"}
              onChange={(e) => set(e.target.value)}
              className="h-9 w-12 rounded border border-zinc-800 bg-zinc-950"
            />
            <input
              value={value || ""}
              onChange={(e) => set(e.target.value)}
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-emerald-500"
              placeholder="#000000 or rgba(...)"
            />
          </div>
        </div>
      );
    case "select":
      return (
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-zinc-400">{field.label}</label>
          <select
            value={value || ""}
            onChange={(e) => set(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
          >
            {(field.options || []).map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      );
    case "boolean":
      return (
        <label className="flex items-center gap-2 text-sm py-2">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => set(e.target.checked)}
            className="h-4 w-4 accent-emerald-500"
          />
          <span>{field.label}</span>
        </label>
      );
    case "number":
      return (
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-zinc-400">{field.label}</label>
          <input
            type="number"
            value={value ?? ""}
            onChange={(e) => set(Number(e.target.value))}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>
      );
    case "image":
      return (
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-zinc-400">{field.label}</label>
          <CloudinaryUploader
            value={value || { url: "", alt: "", type: "image" }}
            onChange={(v) => set(v)}
            accept="any"
          />
        </div>
      );
    case "repeater": {
      const items: any[] = Array.isArray(value) ? value : [];
      const isPrimitive = field.itemSchema?.length === 1 && field.itemSchema[0].key === "_value";
      const blank = isPrimitive ? "" : Object.fromEntries((field.itemSchema || []).map((f) => [f.key.split(".")[0], ""]));
      return (
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-wider text-zinc-400">{field.label}</label>
          {items.map((it, idx) => (
            <div key={idx} className="border border-zinc-800 rounded-lg p-3 bg-zinc-950 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">Item {idx + 1}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      if (idx === 0) return;
                      const next = [...items];
                      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
                      set(next);
                    }}
                    className="text-zinc-400 hover:text-zinc-100 px-2 text-xs"
                  >↑</button>
                  <button
                    onClick={() => {
                      if (idx === items.length - 1) return;
                      const next = [...items];
                      [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
                      set(next);
                    }}
                    className="text-zinc-400 hover:text-zinc-100 px-2 text-xs"
                  >↓</button>
                  <button
                    onClick={() => set(items.filter((_, j) => j !== idx))}
                    className="text-red-400 hover:text-red-300 px-2 text-xs"
                  >✕</button>
                </div>
              </div>
              {(field.itemSchema || []).map((sf) => (
                <FieldEditor
                  key={sf.key}
                  field={sf}
                  data={it}
                  onChange={(nd) => set(items.map((x, j) => (j === idx ? nd : x)))}
                />
              ))}
            </div>
          ))}
          <button
            onClick={() => set([...items, isPrimitive ? "" : { ...blank }])}
            className="text-emerald-400 hover:text-emerald-300 text-sm"
          >
            + Add item
          </button>
        </div>
      );
    }
    default:
      return null;
  }
}
