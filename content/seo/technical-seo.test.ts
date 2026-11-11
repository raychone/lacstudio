import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");
const route = source("../../app/[locale]/[[...segments]]/page.tsx");
const metadata = source("../../lib/i18n-metadata.ts");
const sitemap = source("../../app/sitemap.ts");
const robots = source("../../app/robots.ts");
const layout = source("../../app/layout.tsx");
const structuredData = source("../../components/portfolio/structured-data.tsx");
const portfolioApp = source("../../components/portfolio/portfolio-app.tsx");
const llms = source("../../public/llms.txt");

assert.match(route, /localizeProject\(route\.project, input\)/, "case-study metadata is localized before rendering");
assert.match(route, /<PortfolioStructuredData /, "structured data is rendered by the server route");
assert.match(metadata, /canonical: canonicalPath/, "each route has a locale-specific canonical path");
assert.match(metadata, /"x-default": localizePath\(defaultLocale, pathname\)/, "hreflang exposes the English x-default");
assert.match(metadata, /twitter:\s*\{/, "Twitter card metadata is supplied for localized pages");
assert.match(sitemap, /const pages = \[""/, "sitemap has explicit indexable page entries");
assert.doesNotMatch(sitemap, /"\/privacy"|"\/legal"/, "noindex legal and privacy pages are excluded from the sitemap");
assert.match(sitemap, /"x-default"/, "sitemap has x-default alternates");
assert.match(robots, /"\/lab"/, "robots excludes the private design lab");
assert.match(robots, /"\/privacy"/, "robots excludes privacy pages");
assert.match(robots, /"\/legal"/, "robots excludes legal pages");
assert.match(layout, /<html lang=\{locale\}>/, "document language follows the resolved locale");

for (const type of ["Person", "WebSite", "Service", "BreadcrumbList", "SoftwareApplication"]) {
  assert.match(structuredData, new RegExp(`@type\\": \\"${type}`), `${type} structured data is available where factually relevant`);
}
assert.doesNotMatch(structuredData, /aggregateRating|reviewCount|priceRange|telephone|address/, "structured data does not make unsupported business claims");
assert.ok((portfolioApp.match(/headingLevel="h1"/g) ?? []).length >= 8, "every primary public page renders one semantic H1");
assert.match(llms, /independent software development practice/i, "llms.txt provides factual studio context");
assert.match(llms, /codrin\.lucaciu@gmail\.com/i, "llms.txt provides the public direct contact channel");
assert.doesNotMatch(llms, /guarantee (?:search |seo |ranking)|ranking promise/i, "llms.txt makes no discoverability promises");

console.log("Technical SEO contracts passed.");
