import Image from "next/image";
import type { CmsImage } from "./types";

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
  if (image.type === "video") {
    return (
      <video
        src={image.url}
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
        src={image.url}
        alt={image.alt || ""}
        fill
        sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
        className={className}
        priority={priority}
        unoptimized
      />
    );
  }
  return (
    <Image
      src={image.url}
      alt={image.alt || ""}
      width={width || 1600}
      height={height || 1200}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
