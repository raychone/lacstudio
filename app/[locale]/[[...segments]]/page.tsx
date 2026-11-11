import { notFound } from "next/navigation";
import { PortfolioApp } from "@/components/portfolio/portfolio-app";
import { PortfolioStructuredData } from "@/components/portfolio/structured-data";
import { isLocale, locales, type Locale } from "@/content/i18n/config";
import { isLocaleReady } from "@/content/i18n/portfolio";
import { localizeProject } from "@/content/i18n/project-content";
import { publicProjectBySlug } from "@/content/projects";
import { localizedMetadata } from "@/lib/i18n-metadata";

type RouteParams = { locale: string; segments?: string[] };

function resolveRoute(locale: Locale, segments: string[] = []) {
  if (!isLocaleReady(locale)) return null;
  if (!segments.length) return { page: "home" as const, pathname: "/" };
  if (segments.length === 1 && ["work", "services", "about", "process", "contact", "privacy", "legal"].includes(segments[0])) return { page: segments[0] as "work" | "services" | "about" | "process" | "contact" | "privacy" | "legal", pathname: `/${segments[0]}` };
  if (segments.length === 2 && segments[0] === "work") {
    const project = publicProjectBySlug(segments[1]);
    return project ? { page: "case-study" as const, pathname: `/work/${project.slug}`, project } : null;
  }
  return null;
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }) {
  const { locale: input, segments } = await params;
  if (!isLocale(input) || !isLocaleReady(input)) return { robots: { index: false, follow: false } };
  const route = resolveRoute(input, segments);
  if (!route) return { robots: { index: false, follow: false } };
  const metadata = route.page === "case-study" && route.project
    ? localizedMetadata(input, "work", route.pathname, (() => {
      const project = localizeProject(route.project, input);
      return { title: project.title, description: project.summary };
    })())
    : localizedMetadata(input, route.page, route.pathname);
  if (route.page === "privacy" || route.page === "legal") {
    return { ...metadata, robots: { index: false, follow: false } };
  }
  return metadata;
}

export default async function LocalizedPortfolioRoute({ params }: { params: Promise<RouteParams> }) {
  const { locale: input, segments } = await params;
  if (!isLocale(input)) notFound();
  const route = resolveRoute(input, segments);
  if (!route) notFound();
  const project = "project" in route ? route.project : undefined;
  return <><PortfolioStructuredData locale={input} page={route.page} pathname={route.pathname} project={project} /><PortfolioApp page={route.page} project={project} locale={input} /></>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
