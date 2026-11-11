import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { localizePath, type Locale } from "./config.ts";
import { resolvePortfolioContent } from "./portfolio.ts";

const expectedHomeLead: Record<Locale, string> = {
  en: "From idea to",
  fr: "De l'idée au",
  ro: "De la idee la",
  es: "De la idea a un",
};

for (const locale of ["en", "fr", "ro", "es"] as const) {
  const rendered = resolvePortfolioContent(locale);
  assert.equal(rendered.locale, locale, `${locale}: resolver retains the requested locale`);
  assert.equal(rendered.copy.home.titleLead, expectedHomeLead[locale], `${locale}: home uses the locale's visible hero heading`);
  assert.ok(rendered.copy.work.galleryTitle.trim(), `${locale}: work uses visible locale content`);
  assert.ok(rendered.copy.services.title.trim(), `${locale}: services uses visible locale content`);
  assert.ok(rendered.copy.about.title.trim(), `${locale}: about uses visible locale content`);
  assert.ok(rendered.copy.process.title.trim(), `${locale}: process uses visible locale content`);
  assert.ok(rendered.copy.contact.title.trim(), `${locale}: contact uses visible locale content`);
  assert.ok(rendered.copy.legal.privacyTitle.trim() && rendered.copy.legal.legalTitle.trim(), `${locale}: legal routes use locale content`);
  assert.ok(rendered.copy.notFound.title.trim(), `${locale}: 404 uses locale content`);
  assert.ok(rendered.copy.caseStudy.workflowTitle.trim(), `${locale}: case studies use locale content`);
  assert.ok(rendered.pages.services.cta.trim() && rendered.pages.about.intro[0].trim() && rendered.pages.process.stages[0].title.trim() && rendered.pages.contact.description.trim(), `${locale}: page-specific content is resolved with the shared locale`);
}

const english = resolvePortfolioContent("en");
const spanish = resolvePortfolioContent("es");
assert.notEqual(spanish.copy.metadata.pages.home.title, english.copy.metadata.pages.home.title, "Spanish metadata does not inherit English");
assert.notEqual(spanish.copy.home.titleLead, english.copy.home.titleLead, "Spanish hero does not inherit English");
assert.notEqual(spanish.copy.work.galleryTitle, english.copy.work.galleryTitle, "Spanish work page does not inherit English");
assert.notEqual(spanish.copy.work.faq[0][0], english.copy.work.faq[0][0], "Spanish interactive work content does not inherit English");
assert.equal(spanish.copy.navigation.work, "Proyectos", "Spanish shared navigation is resolved");
assert.equal(spanish.copy.footer.contact, "Contacto", "Spanish footer is resolved");
assert.equal(spanish.pages.contact.description, "Descripción del proyecto", "Spanish form content is resolved");
assert.equal(localizePath("es", "/work/medichelp?design=nocturne"), "/es/work/medichelp?design=nocturne", "language switching preserves case study and design query");
assert.equal(localizePath("es", "/fr/process?design=playground"), "/es/process?design=playground", "language switching preserves the equivalent page and design query");

const appSource = readFileSync(new URL("../../components/portfolio/portfolio-app.tsx", import.meta.url), "utf8");
assert.match(appSource, /const content = resolvePortfolioContent\(locale\)/, "PortfolioApp uses the shared public-content resolver");
assert.match(appSource, /PortfolioLocaleContext\.Provider value=\{content\}/, "resolved locale content reaches the rendered portfolio context");
assert.match(appSource, /window\.location\.assign\(url\)/, "language selection performs a complete locale navigation");
assert.match(appSource, /const query = useSearchParams\(\)\.toString\(\)/, "language selection preserves the query string");

console.log("Rendered locale regression tests passed.");
