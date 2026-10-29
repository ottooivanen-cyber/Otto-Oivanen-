import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site as c } from "@/content/site";
import { asset } from "@/lib/photo";

export const metadata: Metadata = {
  metadataBase: new URL(c.site.url),
  title: c.site.title,
  description: c.site.description,
  openGraph: {
    type: "website",
    title: c.site.title,
    description: c.site.description,
    url: "/",
    images: [{ url: asset("/og.png"), width: 1200, height: 630, alt: c.site.title }],
  },
  twitter: { card: "summary_large_image", title: c.site.title, description: c.site.description },
};

export const viewport: Viewport = { themeColor: "#0b0b0c", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
