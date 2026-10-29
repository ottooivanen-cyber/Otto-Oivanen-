import type { Photo } from "@/content/types";
import { asset } from "@/lib/photo";

export function Figure({
  photo,
  className = "",
  priority = false,
  aspect = "aspect-[4/5]",
}: {
  photo: Photo;
  className?: string;
  priority?: boolean;
  aspect?: string;
}) {
  return (
    <figure className={className}>
      <img
        src={asset(photo.src)}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`${aspect} w-full rounded-2xl object-cover`}
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
      {photo.credit && <figcaption className="mt-2 text-xs text-faint">Photo: {photo.credit}</figcaption>}
    </figure>
  );
}
