"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Eye, EyeOff, Monitor, Plus, Smartphone, Trash2 } from "lucide-react";
import FieldEditor from "@/components/admin/FieldEditor";
import { SCHEMAS } from "@/lib/cms/schemas";

type DeviceMode = "desktop" | "mobile";
type JsonObject = Record<string, unknown>;

type Block = {
  id: number;
  pageId: number;
  type: string;
  position: number;
  content: JsonObject;
  style: JsonObject;
  visible: boolean;
};

type Page = {
  id: number;
  slug: string;
  title: string;
  metaDescription: string | null;
};

const PUBLIC_URL_FOR_SLUG = (slug: string) => {
  if (slug === "home") return "/";
  if (slug.startsWith("services-")) return `/services/${slug.replace("services-", "")}`;
  if (slug.startsWith("resources-")) return `/resources/${slug.replace("resources-", "")}`;
  return `/${slug}`;
};

function isObject(value: unknown): value is JsonObject {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function withoutResponsive(data: unknown) {
  if (!isObject(data)) return {};
  const base = { ...data };
  delete base._responsive;
  return base;
}

function getDeviceData(data: unknown, device: DeviceMode) {
  const base = withoutResponsive(data);
  if (device === "desktop") return base;
  const source = isObject(data) ? data : {};
  const responsive = isObject(source._responsive) ? source._responsive : {};
  const override = isObject(responsive[device]) ? responsive[device] : {};
  return { ...base, ...override };
}

function setDeviceData(data: unknown, device: DeviceMode, nextData: unknown) {
  const nextValues = isObject(nextData) ? nextData : {};
  const base = withoutResponsive(data);
  const source = isObject(data) ? data : {};
  if (device === "desktop") {
    const responsive = isObject(source._responsive) ? source._responsive : {};
    return Object.keys(responsive).length ? { ...nextValues, _responsive: responsive } : nextValues;
  }
  const responsive = isObject(source._responsive) ? source._responsive : {};
  return {
    ...base,
    _responsive: {
      ...responsive,
      [device]: nextValues,
    },
  };
}

function getDeviceVisibility(block: Block, device: DeviceMode) {
  const style = isObject(block.style) ? block.style : {};
  const visibility = isObject(style._visibility) ? style._visibility : {};
  const visible = visibility[device];
  return typeof visible === "boolean" ? visible : block.visible;
}

function setDeviceVisibility(style: unknown, device: DeviceMode, visible: boolean) {
  const base = isObject(style) ? style : {};
  const visibility = isObject(base._visibility) ? base._visibility : {};
  return {
    ...base,
    _visibility: {
      ...visibility,
      [device]: visible,
    },
  };
}

export default function EditorClient({ slug }: { slug: string }) {
  const [pages, setPages] = useState<Page[]>([]);
  const [page, setPage] = useState<Page | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [tab, setTab] = useState<"content" | "style">("content");
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [showAdd, setShowAdd] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [saving, setSaving] = useState(false);

  const reloadPreview = useCallback(() => setIframeKey((k) => k + 1), []);

  async function load() {
    const res = await fetch(`/api/admin/pages/${slug}`);
    if (!res.ok) return;
    const data = (await res.json()) as { page: Page; blocks: Block[] };
    setPage(data.page);
    setBlocks(data.blocks);
    if (data.blocks.length && selectedId == null) setSelectedId(data.blocks[0].id);
  }

  async function loadPages() {
    const res = await fetch("/api/admin/pages");
    if (!res.ok) return;
    const data = (await res.json()) as { pages?: Page[] };
    setPages(data.pages || []);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    loadPages();
  }, []);

  const selected = useMemo(() => blocks.find((b) => b.id === selectedId) || null, [blocks, selectedId]);
  const schema = selected ? SCHEMAS[selected.type] : null;
  const selectedVisible = selected ? getDeviceVisibility(selected, device) : false;
  const selectedContent = selected ? getDeviceData(selected.content, device) : {};
  const selectedStyle = selected ? getDeviceData(selected.style, device) : {};

  function patchSelected(patch: Partial<Block>) {
    if (!selected) return;
    setBlocks((prev) => prev.map((b) => (b.id === selected.id ? { ...b, ...patch } : b)));
  }

  function patchSelectedDeviceData(kind: "content" | "style", next: unknown) {
    if (!selected) return;
    const current = kind === "content" ? selected.content : selected.style;
    patchSelected({ [kind]: setDeviceData(current, device, next) } as Partial<Block>);
  }

  async function saveSelected() {
    if (!selected) return;
    setSaving(true);
    await fetch(`/api/admin/blocks/${selected.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: selected.content,
        style: selected.style,
        visible: selected.visible,
      }),
    });
    setSaving(false);
    reloadPreview();
  }

  async function toggleVisibility(b: Block) {
    const next = !getDeviceVisibility(b, device);
    const nextStyle = setDeviceVisibility(b.style, device, next);
    setBlocks((prev) => prev.map((x) => (x.id === b.id ? { ...x, style: nextStyle } : x)));
    await fetch(`/api/admin/blocks/${b.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ style: nextStyle }),
    });
    reloadPreview();
  }

  async function deleteBlock(b: Block) {
    if (!confirm(`Delete this ${SCHEMAS[b.type]?.label || b.type} section?`)) return;
    setBlocks((prev) => prev.filter((x) => x.id !== b.id));
    if (selectedId === b.id) setSelectedId(null);
    await fetch(`/api/admin/blocks/${b.id}`, { method: "DELETE" });
    reloadPreview();
  }

  async function moveBlock(b: Block, dir: -1 | 1) {
    const idx = blocks.findIndex((x) => x.id === b.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= blocks.length) return;
    const next = [...blocks];
    [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
    setBlocks(next);
    await fetch(`/api/admin/blocks`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: next.map((b) => b.id) }),
    });
    reloadPreview();
  }

  async function addBlock(type: string) {
    if (!page) return;
    const def = SCHEMAS[type]?.defaults || {};
    const res = await fetch(`/api/admin/blocks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pageId: page.id,
        type,
        content: def.content || {},
        style: def.style || {},
      }),
    });
    const data = await res.json();
    setBlocks((prev) => [...prev, data.block]);
    setSelectedId(data.block.id);
    setShowAdd(false);
    reloadPreview();
  }

  function changePage(nextSlug: string) {
    if (!nextSlug || nextSlug === slug) return;
    window.location.href = `/admin/editor/${nextSlug}`;
  }

  return (
    <div className="h-screen grid grid-cols-[280px_1fr_380px] bg-zinc-950">
      {/* Left: section list */}
      <aside className="border-r border-zinc-800 overflow-y-auto">
        <div className="p-4 border-b border-zinc-800 space-y-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">Visual editor</p>
            <p className="font-medium text-sm">{page?.title || slug}</p>
          </div>
          <div className="grid grid-cols-2 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={`flex items-center justify-center gap-2 rounded-md px-2 py-2 text-xs font-medium transition ${device === "desktop" ? "bg-emerald-500 text-black" : "text-zinc-400 hover:text-zinc-100"}`}
            >
              <Monitor className="h-4 w-4" />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={`flex items-center justify-center gap-2 rounded-md px-2 py-2 text-xs font-medium transition ${device === "mobile" ? "bg-emerald-500 text-black" : "text-zinc-400 hover:text-zinc-100"}`}
            >
              <Smartphone className="h-4 w-4" />
              Mobile
            </button>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="admin-page-select" className="text-xs text-zinc-500">
              Page
            </label>
            <select
              id="admin-page-select"
              value={slug}
              onChange={(event) => changePage(event.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500"
            >
              {pages.length ? (
                pages.map((p) => (
                  <option key={p.id} value={p.slug}>
                    {p.slug === "home" ? "Home" : p.title}
                  </option>
                ))
              ) : (
                <option value={slug}>{page?.title || slug}</option>
              )}
            </select>
          </div>
        </div>
        <div className="p-3 space-y-1">
          {blocks.map((b) => {
            const isSel = b.id === selectedId;
            const isVisible = getDeviceVisibility(b, device);
            return (
              <div
                key={b.id}
                className={`group rounded-lg border ${isSel ? "border-emerald-500 bg-zinc-900" : "border-zinc-800 hover:border-zinc-700 bg-zinc-900/40"} transition`}
              >
                <button
                  onClick={() => setSelectedId(b.id)}
                  className="w-full text-left px-3 py-2.5"
                >
                  <p className={`text-sm ${isVisible ? "text-zinc-100" : "text-zinc-500"}`}>
                    {SCHEMAS[b.type]?.label || b.type}
                  </p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-wider text-zinc-600">
                    {isVisible ? `Visible on ${device}` : `Hidden on ${device}`}
                  </p>
                </button>
                <div className="flex items-center justify-between border-t border-zinc-800 px-2 py-1.5">
                  <div className="flex items-center gap-0.5">
                    <button onClick={() => moveBlock(b, -1)} className="text-zinc-500 hover:text-zinc-100 p-1.5" title="Move up" aria-label="Move up">
                      <ArrowUp className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => moveBlock(b, 1)} className="text-zinc-500 hover:text-zinc-100 p-1.5" title="Move down" aria-label="Move down">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleVisibility(b)}
                      className="text-zinc-500 hover:text-zinc-100 p-1.5"
                      title={isVisible ? `Hide on ${device}` : `Show on ${device}`}
                      aria-label={isVisible ? `Hide on ${device}` : `Show on ${device}`}
                    >
                      {isVisible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                    </button>
                    <button
                      onClick={() => deleteBlock(b)}
                      className="text-zinc-500 hover:text-red-400 p-1.5"
                      title="Delete section"
                      aria-label="Delete section"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => setShowAdd(true)}
            className="w-full mt-3 border border-dashed border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 text-zinc-400 rounded-lg py-3 text-sm transition flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add section
          </button>
        </div>
      </aside>

      {/* Center: iframe preview */}
      <div className="overflow-hidden bg-zinc-100 relative">
        <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-zinc-300 bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur">
          {device === "desktop" ? "Desktop preview" : "Mobile preview"}
        </div>
        <div className="h-full w-full overflow-auto p-0 md:p-6 flex justify-center">
          <iframe
            key={`${device}-${iframeKey}`}
            src={`${PUBLIC_URL_FOR_SLUG(slug)}?preview=1&v=${iframeKey}`}
            className={`h-full border-0 bg-white shadow-2xl transition-all duration-200 ${device === "mobile" ? "w-[390px] max-w-full rounded-[2rem]" : "w-full rounded-none md:rounded-xl"}`}
          />
        </div>
      </div>

      {/* Right: field panel */}
      <aside className="border-l border-zinc-800 overflow-y-auto">
        {selected && schema ? (
          <>
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-950 z-10">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Editing section</p>
                <p className="font-medium text-sm">{schema.label}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {device === "desktop" ? "Desktop edits" : "Mobile edits"} · {selectedVisible ? "visible" : "hidden"}
                </p>
              </div>
              <button
                onClick={saveSelected}
                disabled={saving}
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-lg text-sm disabled:opacity-50"
              >
                {saving ? "Saving…" : "Save"}
              </button>
            </div>
            <div className="border-b border-zinc-800 p-3 sticky top-[5.4rem] bg-zinc-950 z-10">
              <div className="grid grid-cols-2 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
                <button
                  type="button"
                  onClick={() => setDevice("desktop")}
                  className={`flex items-center justify-center gap-2 rounded-md px-2 py-2 text-xs font-medium transition ${device === "desktop" ? "bg-emerald-500 text-black" : "text-zinc-400 hover:text-zinc-100"}`}
                >
                  <Monitor className="h-4 w-4" />
                  Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setDevice("mobile")}
                  className={`flex items-center justify-center gap-2 rounded-md px-2 py-2 text-xs font-medium transition ${device === "mobile" ? "bg-emerald-500 text-black" : "text-zinc-400 hover:text-zinc-100"}`}
                >
                  <Smartphone className="h-4 w-4" />
                  Mobile
                </button>
              </div>
              {device === "mobile" && (
                <p className="mt-2 text-xs leading-snug text-zinc-500">
                  Mobile starts from desktop values and saves its own overrides for this section.
                </p>
              )}
            </div>
            <div className="border-b border-zinc-800 grid grid-cols-2 text-sm sticky top-[10.35rem] bg-zinc-950 z-10">
              <button
                onClick={() => setTab("content")}
                className={`py-3 ${tab === "content" ? "text-emerald-400 border-b-2 border-emerald-400" : "text-zinc-400"}`}
              >
                Content
              </button>
              <button
                onClick={() => setTab("style")}
                className={`py-3 ${tab === "style" ? "text-emerald-400 border-b-2 border-emerald-400" : "text-zinc-400"}`}
              >
                Style
              </button>
            </div>
            <div className="p-4 space-y-4">
              {(tab === "content" ? schema.content : schema.style).map((field) => (
                <FieldEditor
                  key={field.key}
                  field={field}
                  data={tab === "content" ? selectedContent : selectedStyle}
                  onChange={(next) => patchSelectedDeviceData(tab, next)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="p-8 text-zinc-500 text-sm">Select a section to edit.</div>
        )}
      </aside>

      {showAdd && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6" onClick={() => setShowAdd(false)}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4">Add section</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(SCHEMAS).map(([type, sc]) => (
                <button
                  key={type}
                  onClick={() => addBlock(type)}
                  className="border border-zinc-800 hover:border-emerald-500 rounded-lg p-3 text-left text-sm bg-zinc-950 transition"
                >
                  {sc.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
