import type { Metadata } from "next";
import { getPortfolioCopy, isLocaleReady } from "@/content/i18n/portfolio";
import { defaultLocale, localeOgCodes, locales, localizePath, type Locale } from "@/content/i18n/config";

type LocalizedPage = keyof ReturnType<typeof getPortfolioCopy>["metadata"]["pages"];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function localizedMetadata(locale: Locale, page: LocalizedPage, pathname: string, override?: { title: string; description: string; image?: string }): Metadata {
  const copy = getPortfolioCopy(locale);
  const title = override ?? copy.metadata.pages[page];
  const canonicalPath = localizePath(locale, pathname);
  const languages = isLocaleReady(locale)
    ? Object.fromEntries(locales.filter(isLocaleReady).map((item) => [item, localizePath(item, pathname)]))
    : undefined;
  const image = override?.image ? (siteUrl ? `${siteUrl}${override.image}` : override.image) : undefined;

  return {
    title: title.title,
    description: title.description,
    alternates: {
      canonical: canonicalPath,
      languages: languages ? { ...languages, "x-default": localizePath(defaultLocale, pathname) } : undefined,
    },
    openGraph: {
      type: "website",
      title: title.title,
      description: title.description,
      locale: localeOgCodes[locale],
      url: siteUrl ? `${siteUrl}${canonicalPath}` : canonicalPath,
      images: image ? [{ url: image, alt: `${title.title} interface preview` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: title.title,
      description: title.description,
      images: image ? [image] : undefined,
    },
  };
}
