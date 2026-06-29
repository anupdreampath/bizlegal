"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeOff,
  FileText,
  LayoutTemplate,
  Monitor,
  Paintbrush,
  Plus,
  RefreshCw,
  Save,
  Smartphone,
  Trash2,
} from "lucide-react";
import FieldEditor from "@/components/admin/FieldEditor";
import { SCHEMAS, THEME_SCHEMAS } from "@/lib/cms/schemas";

type DeviceMode = "desktop" | "mobile";
type JsonObject = Record<string, unknown>;
type SaveState = "saved" | "saving" | "error";
type SelectedTarget =
  | { kind: "block"; id: number }
  | { kind: "theme"; key: "brand" | "header" | "footer" }
  | { kind: "page" };

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
  published?: boolean;
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

function statusLabel(status: SaveState) {
  if (status === "saving") return "Autosaving";
  if (status === "error") return "Save failed";
  return "Saved";
}

export default function EditorClient({ slug }: { slug: string }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [page, setPage] = useState<Page | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [theme, setTheme] = useState<Record<string, unknown>>({});
  const [selected, setSelected] = useState<SelectedTarget>({ kind: "theme", key: "header" });
  const [tab, setTab] = useState<"content" | "style">("content");
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [showAdd, setShowAdd] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [status, setStatus] = useState<SaveState>("saved");
  const [dirtyBlockId, setDirtyBlockId] = useState<number | null>(null);
  const [dirtyThemeKey, setDirtyThemeKey] = useState<string | null>(null);
  const [dirtyPage, setDirtyPage] = useState(false);

  const reloadPreview = useCallback(() => setIframeKey((k) => k + 1), []);

  async function load() {
    const [pageRes, pagesRes, themeRes] = await Promise.all([
      fetch(`/api/admin/pages/${slug}`),
      fetch("/api/admin/pages"),
      fetch("/api/admin/theme"),
    ]);

    if (pageRes.ok) {
      const data = (await pageRes.json()) as { page: Page; blocks: Block[] };
      setPage(data.page);
      setBlocks(data.blocks);
      if (data.blocks.length) setSelected({ kind: "block", id: data.blocks[0].id });
    }

    if (pagesRes.ok) {
      const data = (await pagesRes.json()) as { pages?: Page[] };
      setPages(data.pages || []);
    }

    if (themeRes.ok) {
      const data = (await themeRes.json()) as { theme?: Record<string, unknown> };
      setTheme(data.theme || {});
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const selectedBlock = useMemo(
    () => (selected.kind === "block" ? blocks.find((b) => b.id === selected.id) || null : null),
    [blocks, selected],
  );
  const selectedSchema = selectedBlock ? SCHEMAS[selectedBlock.type] : null;
  const selectedVisible = selectedBlock ? getDeviceVisibility(selectedBlock, device) : false;
  const selectedContent = selectedBlock ? getDeviceData(selectedBlock.content, device) : {};
  const selectedStyle = selectedBlock ? getDeviceData(selectedBlock.style, device) : {};
  const selectedThemeSchema = selected.kind === "theme" ? THEME_SCHEMAS[selected.key] : null;

  const saveBlock = useCallback(
    async (block: Block) => {
      setStatus("saving");
      const res = await fetch(`/api/admin/blocks/${block.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: block.content,
          style: block.style,
          visible: block.visible,
        }),
      });
      setStatus(res.ok ? "saved" : "error");
      if (res.ok) reloadPreview();
    },
    [reloadPreview],
  );

  const saveTheme = useCallback(
    async (key: string, value: unknown) => {
      setStatus("saving");
      const res = await fetch("/api/admin/theme", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });
      setStatus(res.ok ? "saved" : "error");
      if (res.ok) reloadPreview();
    },
    [reloadPreview],
  );

  const savePage = useCallback(async (nextPage: Page) => {
    setStatus("saving");
    const res = await fetch(`/api/admin/pages/${nextPage.slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: nextPage.title,
        metaDescription: nextPage.metaDescription || "",
        published: nextPage.published ?? true,
      }),
    });
    setStatus(res.ok ? "saved" : "error");
  }, []);

  useEffect(() => {
    if (!dirtyBlockId) return;
    const block = blocks.find((b) => b.id === dirtyBlockId);
    if (!block) return;
    const timeout = window.setTimeout(() => {
      setDirtyBlockId(null);
      saveBlock(block);
    }, 650);
    return () => window.clearTimeout(timeout);
  }, [blocks, dirtyBlockId, saveBlock]);

  useEffect(() => {
    if (!dirtyThemeKey) return;
    const value = theme[dirtyThemeKey];
    const timeout = window.setTimeout(() => {
      setDirtyThemeKey(null);
      saveTheme(dirtyThemeKey, value);
    }, 650);
    return () => window.clearTimeout(timeout);
  }, [dirtyThemeKey, saveTheme, theme]);

  useEffect(() => {
    if (!dirtyPage || !page) return;
    const timeout = window.setTimeout(() => {
      setDirtyPage(false);
      savePage(page);
    }, 650);
    return () => window.clearTimeout(timeout);
  }, [dirtyPage, page, savePage]);

  const syncPreviewSelection = useCallback(() => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    doc.querySelectorAll("[data-cms-selected]").forEach((el) => el.removeAttribute("data-cms-selected"));
    if (selected.kind === "block") {
      doc.querySelector(`[data-cms-block-id="${selected.id}"]`)?.setAttribute("data-cms-selected", "true");
    }
    if (selected.kind === "theme") {
      doc.querySelector(`[data-cms-global="${selected.key}"]`)?.setAttribute("data-cms-selected", "true");
    }
  }, [selected]);

  useEffect(() => {
    syncPreviewSelection();
  }, [syncPreviewSelection, iframeKey]);

  function wirePreview() {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    const oldStyle = doc.getElementById("cms-editor-preview-style");
    oldStyle?.remove();
    const style = doc.createElement("style");
    style.id = "cms-editor-preview-style";
    style.textContent = `
      [data-cms-block-id], [data-cms-global] { cursor: pointer !important; outline: 0 solid transparent; outline-offset: -3px; transition: outline-color .12s ease, box-shadow .12s ease; }
      [data-cms-block-id]:hover, [data-cms-global]:hover { outline: 2px solid rgba(16,185,129,.7) !important; }
      [data-cms-selected="true"] { outline: 3px solid #10b981 !important; box-shadow: inset 0 0 0 9999px rgba(16,185,129,.035) !important; }
    `;
    doc.head.appendChild(style);
    doc.addEventListener(
      "click",
      (event) => {
        const target = event.target as HTMLElement | null;
        const global = target?.closest("[data-cms-global]") as HTMLElement | null;
        const block = target?.closest("[data-cms-block-id]") as HTMLElement | null;
        if (!global && !block) return;
        event.preventDefault();
        event.stopPropagation();
        if (global?.dataset.cmsGlobal === "header" || global?.dataset.cmsGlobal === "footer") {
          setSelected({ kind: "theme", key: global.dataset.cmsGlobal });
        } else if (block?.dataset.cmsBlockId) {
          setSelected({ kind: "block", id: Number(block.dataset.cmsBlockId) });
        }
      },
      true,
    );
    syncPreviewSelection();
  }

  function patchSelectedBlock(patch: Partial<Block>) {
    if (!selectedBlock) return;
    setStatus("saving");
    setDirtyBlockId(selectedBlock.id);
    setBlocks((prev) => prev.map((b) => (b.id === selectedBlock.id ? { ...b, ...patch } : b)));
  }

  function patchSelectedDeviceData(kind: "content" | "style", next: unknown) {
    if (!selectedBlock) return;
    const current = kind === "content" ? selectedBlock.content : selectedBlock.style;
    patchSelectedBlock({ [kind]: setDeviceData(current, device, next) } as Partial<Block>);
  }

  function patchTheme(key: string, next: unknown) {
    setStatus("saving");
    setDirtyThemeKey(key);
    setTheme((prev) => ({ ...prev, [key]: next }));
  }

  function patchPage(key: string, value: unknown) {
    if (!page) return;
    setStatus("saving");
    setDirtyPage(true);
    setPage({ ...page, [key]: value });
  }

  async function saveNow() {
    if (selected.kind === "block" && selectedBlock) {
      setDirtyBlockId(null);
      await saveBlock(selectedBlock);
    } else if (selected.kind === "theme") {
      setDirtyThemeKey(null);
      await saveTheme(selected.key, theme[selected.key] || {});
    } else if (page) {
      setDirtyPage(false);
      await savePage(page);
    }
  }

  async function toggleVisibility(b: Block) {
    const next = !getDeviceVisibility(b, device);
    const nextStyle = setDeviceVisibility(b.style, device, next);
    setBlocks((prev) => prev.map((x) => (x.id === b.id ? { ...x, style: nextStyle } : x)));
    await saveBlock({ ...b, style: nextStyle });
  }

  async function deleteBlock(b: Block) {
    if (!confirm(`Delete this ${SCHEMAS[b.type]?.label || b.type} section?`)) return;
    setBlocks((prev) => prev.filter((x) => x.id !== b.id));
    if (selected.kind === "block" && selected.id === b.id) setSelected({ kind: "page" });
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
    setStatus("saving");
    const res = await fetch("/api/admin/blocks", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: next.map((block) => block.id) }),
    });
    setStatus(res.ok ? "saved" : "error");
    reloadPreview();
  }

  async function addBlock(type: string) {
    if (!page) return;
    const def = SCHEMAS[type]?.defaults || {};
    setStatus("saving");
    const res = await fetch("/api/admin/blocks", {
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
    setSelected({ kind: "block", id: data.block.id });
    setShowAdd(false);
    setStatus(res.ok ? "saved" : "error");
    reloadPreview();
  }

  function changePage(nextSlug: string) {
    if (!nextSlug || nextSlug === slug) return;
    window.location.href = `/admin/editor/${nextSlug}`;
  }

  const inspectorTitle =
    selected.kind === "block"
      ? selectedSchema?.label || "Section"
      : selected.kind === "theme"
        ? selectedThemeSchema?.label || "Theme"
        : "Page settings";

  const inspectorPanel = (
    <div className="border-b border-zinc-800 bg-zinc-950">
      <div className="p-4 border-b border-zinc-800 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">Inspector</p>
          <p className="font-medium text-sm">{inspectorTitle}</p>
          {selected.kind === "block" && (
            <p className="mt-1 text-xs text-zinc-500">
              {device === "desktop" ? "Desktop edits" : "Mobile overrides"} · {selectedVisible ? "visible" : "hidden"}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={saveNow}
          disabled={status === "saving"}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-3 py-2 rounded-lg text-sm disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          Save
        </button>
      </div>

      <div className="max-h-[46vh] overflow-y-auto">
        {selected.kind === "block" && selectedBlock && selectedSchema && (
          <>
            <div className="border-b border-zinc-800 p-3 sticky top-0 bg-zinc-950 z-10">
              <div className="grid grid-cols-2 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
                <button
                  type="button"
                  onClick={() => setTab("content")}
                  className={`rounded-md py-2 text-xs font-medium ${tab === "content" ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:text-zinc-100"}`}
                >
                  Content
                </button>
                <button
                  type="button"
                  onClick={() => setTab("style")}
                  className={`rounded-md py-2 text-xs font-medium ${tab === "style" ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:text-zinc-100"}`}
                >
                  Style
                </button>
              </div>
              {device === "mobile" && (
                <p className="mt-2 text-xs leading-snug text-zinc-500">
                  Mobile starts from desktop values and stores overrides for this section.
                </p>
              )}
            </div>
            <div className="p-4 space-y-4">
              {(tab === "content" ? selectedSchema.content : selectedSchema.style).map((field) => (
                <FieldEditor
                  key={field.key}
                  field={field}
                  data={tab === "content" ? selectedContent : selectedStyle}
                  onChange={(next) => patchSelectedDeviceData(tab, next)}
                />
              ))}
            </div>
          </>
        )}

        {selected.kind === "theme" && selectedThemeSchema && (
          <div className="p-4 space-y-4">
            {selectedThemeSchema.fields.map((field) => (
              <FieldEditor
                key={field.key}
                field={field}
                data={theme[selected.key] || {}}
                onChange={(next) => patchTheme(selected.key, next)}
              />
            ))}
          </div>
        )}

        {selected.kind === "page" && page && (
          <div className="p-4 space-y-4">
            <FieldEditor
              field={{ key: "title", label: "Page title", type: "text" }}
              data={page}
              onChange={(next) => {
                setStatus("saving");
                setDirtyPage(true);
                setPage(next as Page);
              }}
            />
            <FieldEditor
              field={{ key: "metaDescription", label: "Meta description", type: "textarea" }}
              data={page}
              onChange={(next) => {
                setStatus("saving");
                setDirtyPage(true);
                setPage(next as Page);
              }}
            />
            <label className="flex items-center gap-2 text-sm py-2">
              <input
                type="checkbox"
                checked={page.published ?? true}
                onChange={(event) => patchPage("published", event.target.checked)}
                className="h-4 w-4 accent-emerald-500"
              />
              Published
            </label>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-screen grid grid-cols-[22rem_minmax(0,1fr)] bg-zinc-950 text-zinc-100">
      <aside className="border-r border-zinc-800 flex min-h-0 flex-col">
        <div className="p-4 border-b border-zinc-800 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Visual editor</p>
              <p className="font-medium text-sm">{page?.title || slug}</p>
            </div>
            <div className={`rounded-full px-2 py-1 text-[0.68rem] font-medium ${status === "error" ? "bg-red-500/15 text-red-300" : status === "saving" ? "bg-amber-500/15 text-amber-300" : "bg-emerald-500/15 text-emerald-300"}`}>
              {statusLabel(status)}
            </div>
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

        {inspectorPanel}

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="p-3 border-b border-zinc-800">
            <p className="px-2 pb-2 text-[0.68rem] uppercase tracking-wider text-zinc-600">Global</p>
            <button
              type="button"
              onClick={() => setSelected({ kind: "page" })}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition flex items-center gap-2 ${selected.kind === "page" ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"}`}
            >
              <FileText className="h-4 w-4" />
              Page SEO
            </button>
            {(["brand", "header", "footer"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelected({ kind: "theme", key })}
                className={`mt-1 w-full rounded-lg px-3 py-2 text-left text-sm transition flex items-center gap-2 ${selected.kind === "theme" && selected.key === key ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"}`}
              >
                {key === "brand" ? <Paintbrush className="h-4 w-4" /> : <LayoutTemplate className="h-4 w-4" />}
                {THEME_SCHEMAS[key].label}
              </button>
            ))}
          </div>

          <div className="p-3 space-y-1">
            <p className="px-2 pb-2 text-[0.68rem] uppercase tracking-wider text-zinc-600">Sections</p>
            {blocks.map((b) => {
              const isSel = selected.kind === "block" && b.id === selected.id;
              const isVisible = getDeviceVisibility(b, device);
              return (
                <div
                  key={b.id}
                  className={`group rounded-lg border ${isSel ? "border-emerald-500 bg-zinc-900" : "border-zinc-800 hover:border-zinc-700 bg-zinc-900/40"} transition`}
                >
                  <button type="button" onClick={() => setSelected({ kind: "block", id: b.id })} className="w-full text-left px-3 py-2.5">
                    <p className={`text-sm ${isVisible ? "text-zinc-100" : "text-zinc-500"}`}>
                      {SCHEMAS[b.type]?.label || b.type}
                    </p>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-wider text-zinc-600">
                      {isVisible ? `Visible on ${device}` : `Hidden on ${device}`}
                    </p>
                  </button>
                  <div className="flex items-center justify-between border-t border-zinc-800 px-2 py-1.5">
                    <div className="flex items-center gap-0.5">
                      <button type="button" onClick={() => moveBlock(b, -1)} className="text-zinc-500 hover:text-zinc-100 p-1.5" title="Move up" aria-label="Move up">
                        <ArrowUp className="h-3.5 w-3.5" />
                      </button>
                      <button type="button" onClick={() => moveBlock(b, 1)} className="text-zinc-500 hover:text-zinc-100 p-1.5" title="Move down" aria-label="Move down">
                        <ArrowDown className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => toggleVisibility(b)}
                        className="text-zinc-500 hover:text-zinc-100 p-1.5"
                        title={isVisible ? `Hide on ${device}` : `Show on ${device}`}
                        aria-label={isVisible ? `Hide on ${device}` : `Show on ${device}`}
                      >
                        {isVisible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                      </button>
                      <button type="button" onClick={() => deleteBlock(b)} className="text-zinc-500 hover:text-red-400 p-1.5" title="Delete section" aria-label="Delete section">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => setShowAdd(true)}
              className="w-full mt-3 border border-dashed border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 text-zinc-400 rounded-lg py-3 text-sm transition flex items-center justify-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add section
            </button>
          </div>
        </div>
      </aside>

      <div className="overflow-hidden bg-zinc-100 relative">
        <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2 flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur">
          {device === "desktop" ? <Monitor className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
          {device === "desktop" ? "Desktop preview" : "Mobile preview"}
        </div>
        <button
          type="button"
          onClick={reloadPreview}
          className="absolute top-4 right-4 z-10 rounded-full border border-zinc-300 bg-white/90 p-2 text-zinc-700 shadow-sm backdrop-blur hover:bg-white"
          title="Refresh preview"
          aria-label="Refresh preview"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
        <div
          className={`absolute inset-0 overflow-auto ${
            device === "mobile" ? "flex justify-center p-0 md:p-6" : "block p-0"
          }`}
        >
          <iframe
            ref={iframeRef}
            key={`${device}-${iframeKey}`}
            onLoad={wirePreview}
            src={`${PUBLIC_URL_FOR_SLUG(slug)}?preview=1&editor=1&v=${iframeKey}`}
            className={`block h-full border-0 bg-white transition-all duration-200 ${
              device === "mobile"
                ? "w-[390px] max-w-full rounded-[2rem] shadow-2xl"
                : "absolute inset-0 w-full min-w-0 rounded-none"
            }`}
          />
        </div>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6" onClick={() => setShowAdd(false)}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-2xl w-full" onClick={(event) => event.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4">Add reusable section</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {Object.entries(SCHEMAS).map(([type, schema]) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => addBlock(type)}
                  className="border border-zinc-800 hover:border-emerald-500 rounded-lg p-3 text-left text-sm bg-zinc-950 transition"
                >
                  {schema.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
