import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Served at <site url>/sitemap.xml. Submit it in Google Search Console and Bing Webmaster Tools.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
