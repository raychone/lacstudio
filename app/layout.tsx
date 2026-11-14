import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/content/i18n/config";
import "./globals.css";
import "../design-system/tokens/foundations.css";
import "../design-system/tokens/layout-contract.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: { default: "LAC STUDIO — Independent Software Development", template: "%s | LAC STUDIO" },
  description: "Independent software development for custom web applications, Android and desktop software, SaaS products and business systems.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "LAC STUDIO",
    title: "LAC STUDIO — Independent Software Development",
    description: "Custom web applications, mobile and desktop software, SaaS products and business systems—from idea to working product.",
  },
  icons: {
    icon: [
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/icon-512.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestedLocale = (await headers()).get("x-lac-locale");
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
