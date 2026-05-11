"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import FieldEditor from "@/components/admin/FieldEditor";
import { SCHEMAS } from "@/lib/cms/schemas";

type Block = {
  id: number;
  pageId: number;
  type: string;
  position: number;
  content: any;
  style: any;
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

export default function EditorClient({ slug }: { slug: string }) {
  const [pages, setPages] = useState<Page[]>([]);
  const [page, setPage] = useState<Page | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [tab, setTab] = useState<"content" | "style">("content");
  const [showAdd, setShowAdd] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [saving, setSaving] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const reloadPreview = useCallback(() => setIframeKey((k) => k + 1), []);

  async function load() {
    const res = await fetch(`/api/admin/pages/${slug}`);
    if (!res.ok) return;
    const data = await res.json();
    setPage(data.page);
    setBlocks(data.blocks);
    if (data.blocks.length && selectedId == null) setSelectedId(data.blocks[0].id);
  }

  async function loadPages() {
    const res = await fetch("/api/admin/pages");
    if (!res.ok) return;
    const data = await res.json();
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

  function patchSelected(patch: Partial<Block>) {
    if (!selected) return;
    setBlocks((prev) => prev.map((b) => (b.id === selected.id ? { ...b, ...patch } : b)));
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
    const next = !b.visible;
    setBlocks((prev) => prev.map((x) => (x.id === b.id ? { ...x, visible: next } : x)));
    await fetch(`/api/admin/blocks/${b.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visible: next }),
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
    <div className="h-screen grid grid-cols-[280px_1fr_360px] bg-zinc-950">
      {/* Left: section list */}
      <aside className="border-r border-zinc-800 overflow-y-auto">
        <div className="p-4 border-b border-zinc-800 space-y-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">Visual editor</p>
            <p className="font-medium text-sm">{page?.title || slug}</p>
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
            return (
              <div
                key={b.id}
                className={`group rounded-lg border ${isSel ? "border-emerald-500 bg-zinc-900" : "border-zinc-800 hover:border-zinc-700 bg-zinc-900/40"} transition`}
              >
                <button
                  onClick={() => setSelectedId(b.id)}
                  className="w-full text-left px-3 py-2.5"
                >
                  <p className={`text-sm ${b.visible ? "text-zinc-100" : "text-zinc-500"}`}>
                    {SCHEMAS[b.type]?.label || b.type}
                  </p>
                </button>
                <div className="flex items-center justify-between border-t border-zinc-800 px-2 py-1.5">
                  <div className="flex items-center gap-0.5">
                    <button onClick={() => moveBlock(b, -1)} className="text-zinc-500 hover:text-zinc-100 px-1.5 text-xs" title="Move up">↑</button>
                    <button onClick={() => moveBlock(b, 1)} className="text-zinc-500 hover:text-zinc-100 px-1.5 text-xs" title="Move down">↓</button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleVisibility(b)}
                      className="text-zinc-500 hover:text-zinc-100 text-xs px-1.5"
                      title={b.visible ? "Hide section" : "Show section"}
                    >
                      {b.visible ? "👁" : "⊘"}
                    </button>
                    <button
                      onClick={() => deleteBlock(b)}
                      className="text-zinc-500 hover:text-red-400 text-xs px-1.5"
                      title="Delete section"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => setShowAdd(true)}
            className="w-full mt-3 border border-dashed border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 text-zinc-400 rounded-lg py-3 text-sm transition"
          >
            + Add section
          </button>
        </div>
      </aside>

      {/* Center: iframe preview */}
      <div className="overflow-hidden bg-zinc-100 relative">
        <iframe
          key={iframeKey}
          ref={iframeRef}
          src={`${PUBLIC_URL_FOR_SLUG(slug)}?preview=1&v=${iframeKey}`}
          className="w-full h-full border-0 bg-white"
        />
      </div>

      {/* Right: field panel */}
      <aside className="border-l border-zinc-800 overflow-y-auto">
        {selected && schema ? (
          <>
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-950 z-10">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Editing section</p>
                <p className="font-medium text-sm">{schema.label}</p>
              </div>
              <button
                onClick={saveSelected}
                disabled={saving}
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-lg text-sm disabled:opacity-50"
              >
                {saving ? "Saving…" : "Save"}
              </button>
            </div>
            <div className="border-b border-zinc-800 grid grid-cols-2 text-sm sticky top-[4.5rem] bg-zinc-950 z-10">
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
                  data={tab === "content" ? selected.content : selected.style}
                  onChange={(next) =>
                    patchSelected(tab === "content" ? { content: next } : { style: next })
                  }
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
