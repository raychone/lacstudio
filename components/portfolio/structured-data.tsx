import { localizePath, type Locale } from "@/content/i18n/config";
import { getPortfolioCopy } from "@/content/i18n/portfolio";
import { localizeProject } from "@/content/i18n/project-content";
import { localizeServices } from "@/content/i18n/service-content";
import type { PublicProject } from "@/content/projects";

type PortfolioPage = "home" | "work" | "services" | "pricing" | "about" | "process" | "contact" | "privacy" | "legal" | "case-study";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

const personJobTitles: Record<Locale, string> = {
  en: "Independent software developer",
  fr: "Développeur logiciel indépendant",
  ro: "Dezvoltator software independent",
  es: "Desarrollador de software independiente",
};

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : undefined;
}

function compact(value: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined));
}

function platformNames(project: PublicProject) {
  const platforms = project.platforms.flatMap((platform) => {
    if (platform === "Web") return ["Web browser"];
    if (platform === "Android") return ["Android"];
    if (platform === "Desktop") return ["Desktop"];
    return [];
  });
  return [...new Set(platforms)];
}

export function PortfolioStructuredData({ locale, page, pathname, project }: { locale: Locale; page: PortfolioPage; pathname: string; project?: PublicProject }) {
  if (page === "privacy" || page === "legal") return null;

  const copy = getPortfolioCopy(locale);
  const localPath = localizePath(locale, pathname);
  const pageUrl = absoluteUrl(localPath);
  const personId = absoluteUrl("/#andrei-lucaciu");
  const websiteId = absoluteUrl("/#website");
  const person = compact({
    "@type": "Person",
    "@id": personId,
    name: "Lucaciu Andrei Codrin",
    jobTitle: personJobTitles[locale],
    email: "mailto:contact@lacstudio.ro",
    url: absoluteUrl(localizePath(locale, "/about")),
    description: copy.about.lead,
  });
  const graph: Record<string, unknown>[] = [person];

  if (page === "home") {
    graph.push(compact({
      "@type": "WebSite",
      "@id": websiteId,
      name: "LAC STUDIO",
      url: pageUrl,
      inLanguage: locale,
      description: copy.home.schemaDescription,
      publisher: personId ? { "@id": personId } : undefined,
    }));
  }

  if (page === "services") {
    for (const [name, description] of localizeServices(locale)) {
      graph.push(compact({
        "@type": "Service",
        name,
        description,
        inLanguage: locale,
        provider: personId ? { "@id": personId } : person,
      }));
    }
  }

  if (page === "case-study" && project) {
    const localizedProject = localizeProject(project, locale);
    graph.push(compact({
      "@type": "SoftwareApplication",
      name: localizedProject.title,
      description: localizedProject.longDescription ?? localizedProject.summary,
      applicationCategory: localizedProject.category,
      operatingSystem: platformNames(localizedProject).join(", ") || undefined,
      inLanguage: locale,
      url: pageUrl,
      author: personId ? { "@id": personId } : person,
    }));
  }

  if (page !== "home") {
    const labels: Record<Exclude<PortfolioPage, "home" | "case-study">, string> = {
      work: copy.navigation.work,
      services: copy.navigation.services,
      pricing: copy.navigation.pricing,
      about: copy.navigation.about,
      process: copy.navigation.process,
      contact: copy.metadata.pages.contact.title,
      privacy: copy.metadata.pages.privacy.title,
      legal: copy.metadata.pages.legal.title,
    };
    const crumbName = page === "case-study" && project ? localizeProject(project, locale).title : labels[page];
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        compact({ "@type": "ListItem", position: 1, name: "LAC STUDIO", item: absoluteUrl(localizePath(locale, "/")) }),
        compact({ "@type": "ListItem", position: 2, name: crumbName, item: pageUrl }),
      ],
    });
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}
