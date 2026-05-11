"use client";

import { CldUploadWidget } from "next-cloudinary";

type Value = string | { url: string; alt?: string; type?: "image" | "video" } | undefined;

export default function CloudinaryUploader({
  value,
  onChange,
  accept = "any",
}: {
  value?: Value;
  onChange: (val: any) => void;
  accept?: "image" | "video" | "any";
}) {
  const url = typeof value === "string" ? value : value?.url || "";
  const alt = typeof value === "object" ? value?.alt || "" : "";
  const type = typeof value === "object" ? value?.type || "image" : "image";

  const sources: any =
    accept === "image" ? ["local", "url", "camera"] : ["local", "url", "camera", "video_link"];

  return (
    <div className="space-y-2">
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        options={{
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          sources,
          resourceType: accept === "any" ? "auto" : accept,
          multiple: false,
          maxFiles: 1,
        }}
        onSuccess={(result: any) => {
          const info = result?.info;
          if (!info?.secure_url) return;
          const newVal = {
            url: info.secure_url,
            alt: alt,
            type: info.resource_type === "video" ? "video" : "image",
          };
          if (typeof value === "string") {
            onChange(info.secure_url);
          } else {
            onChange(newVal);
          }
        }}
      >
        {({ open }) => (
          <div className="flex items-center gap-2">
            {url && type === "video" && (
              <video src={url} className="h-16 w-24 rounded object-cover bg-zinc-800" muted />
            )}
            {url && type !== "video" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={url} alt="" className="h-16 w-24 rounded object-cover bg-zinc-800" />
            )}
            <button
              type="button"
              onClick={() => open()}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-2 rounded-lg text-sm border border-zinc-700"
            >
              {url ? "Replace media" : "Upload from device"}
            </button>
            {url && (
              <button
                type="button"
                onClick={() => onChange(typeof value === "string" ? "" : { url: "", alt: "" })}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Remove
              </button>
            )}
          </div>
        )}
      </CldUploadWidget>

      {typeof value === "object" && url && (
        <input
          value={alt}
          placeholder="Alt text (for SEO & accessibility)"
          onChange={(e) => onChange({ url, alt: e.target.value, type })}
          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
        />
      )}
    </div>
  );
}
