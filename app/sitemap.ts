import type { MetadataRoute } from "next";
import { publishedProjects } from "@/content/projects";
import { defaultLocale, locales, localizePath } from "@/content/i18n/config";
import { isLocaleReady } from "@/content/i18n/portfolio";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
export default function sitemap(): MetadataRoute.Sitemap {
  if (!baseUrl) return [];
  const pages = ["", "/work", "/services", "/about", "/process", "/contact"];
  const publicLocales = locales.filter(isLocaleReady);
  return publicLocales.flatMap((locale) => [
    ...pages.map((path) => ({ url: `${baseUrl}${localizePath(locale, path)}`, lastModified: new Date(), alternates: { languages: { [locale]: `${baseUrl}${localizePath(locale, path)}`, "x-default": `${baseUrl}${localizePath(defaultLocale, path)}` } } })),
    ...publishedProjects.map((project) => ({ url: `${baseUrl}${localizePath(locale, `/work/${project.slug}`)}`, lastModified: new Date() })),
  ]);
}
