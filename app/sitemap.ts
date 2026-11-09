import type { MetadataRoute } from "next";
import { publishedProjects } from "@/content/projects";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
export default function sitemap(): MetadataRoute.Sitemap {
  if (!baseUrl) return [];
  const pages = ["", "/work", "/services", "/about", "/process", "/contact"];
  return [...pages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() })), ...publishedProjects.map((project) => ({ url: `${baseUrl}/work/${project.slug}`, lastModified: new Date() }))];
}
