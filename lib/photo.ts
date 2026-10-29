import fs from "node:fs";
import path from "node:path";
import type { Photo } from "@/content/types";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the deploy base path (GitHub Pages serves under /<repo-name>). */
export const asset = (p: string) => `${basePath}${p}`;

/** Only returns the photo if its file exists in /public, so missing photos never render broken. */
export function available(photo?: Photo): Photo | undefined {
  if (!photo) return undefined;
  return fs.existsSync(path.join(process.cwd(), "public", photo.src)) ? photo : undefined;
}
