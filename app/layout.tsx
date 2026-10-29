import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site as c } from "@/content/site";

const shareImage = { url: "/images/portrait.jpg", width: 678, height: 452, alt: c.hero.photo?.alt ?? c.hero.name };

export const metadata: Metadata = {
  metadataBase: new URL(c.site.url),
  title: c.site.title,
  description: c.site.description,
  // Resolves against metadataBase, so it includes the /Otto-Oivanen-/ path.
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
  authors: [{ name: c.hero.name, url: c.site.url }],
  openGraph: {
    type: "profile",
    firstName: "Otto",
    lastName: "Oivanen",
    siteName: c.hero.name,
    locale: "en_US",
    title: c.site.title,
    description: c.site.description,
    url: "./",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", title: c.site.title, description: c.site.description, images: [shareImage] },
};

export const viewport: Viewport = { themeColor: "#0b0b0c", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
