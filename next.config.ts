import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to ./out — no server, no database.
  output: "export",
  // GitHub Pages serves the site under /portfolio; set in the deploy workflow.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
