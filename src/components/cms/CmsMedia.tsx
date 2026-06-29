import Image from "next/image";
import type { CmsImage } from "./types";
import { fastImageUrl } from "./imageSource";

export function CmsMedia({
  image,
  className,
  fill,
  sizes,
  width,
  height,
  priority,
}: {
  image?: CmsImage;
  className?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  if (!image?.url) return null;
  const src = fastImageUrl(image.url);
  if (image.type === "video") {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  if (fill) {
    return (
      <Image
        src={src}
        alt={image.alt || ""}
        fill
        sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
        className={className}
        priority={priority}
        loading={priority ? undefined : "eager"}
        unoptimized
      />
    );
  }
  return (
    <Image
      src={src}
      alt={image.alt || ""}
      width={width || 1600}
      height={height || 1200}
      className={className}
      priority={priority}
      loading={priority ? undefined : "eager"}
      unoptimized
    />
  );
}
