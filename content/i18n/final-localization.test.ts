import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { locales, localizePath } from "./config.ts";
import { getPortfolioCopy, isLocaleReady, translationCatalog } from "./portfolio.ts";
import { pageCopy } from "./page-copy.ts";

const leafStrings = (value: unknown): string[] => {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(leafStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(leafStrings);
  return [];
};

const routePaths = ["/", "/work", "/services", "/process", "/about", "/contact", "/privacy", "/legal"];
const projectSlugs = ["medichelp", "dental-laboratory-management", "restaurant-saas", "gr-plus", "imperials-hotel", "bar-grill", "iwear"];
const english = getPortfolioCopy("en");
const projectTranslationSource = readFileSync(new URL("./project-content.ts", import.meta.url), "utf8");
const serviceTranslationSource = readFileSync(new URL("./service-content.ts", import.meta.url), "utf8");

for (const locale of locales) {
  assert.equal(isLocaleReady(locale), true, `${locale}: public locale is active`);

  const portfolio = getPortfolioCopy(locale);
  assert.ok(leafStrings(portfolio).every((value) => value.trim().length > 0), `${locale}: portfolio dictionary has no empty public values`);
  assert.ok(leafStrings(pageCopy[locale]).every((value) => value.trim().length > 0), `${locale}: page dictionary has no empty public values`);

  for (const path of routePaths) {
    assert.equal(localizePath(locale, path).startsWith(`/${locale}`), true, `${locale}: ${path} has an equivalent locale route`);
  }

  if (locale !== "en") {
    assert.match(projectTranslationSource, new RegExp(`\\b${locale}:\\s*\\{`), `${locale}: project translation catalogue exists`);
    assert.match(serviceTranslationSource, new RegExp(`\\b${locale}:\\s*\\[`), `${locale}: services translation catalogue exists`);
    for (const slug of projectSlugs) {
      assert.match(projectTranslationSource, new RegExp(`\\b[\"']?${slug}[\"']?\\s*:`), `${locale}: ${slug} has project content`);
      assert.equal(localizePath(locale, `/work/${slug}?design=nocturne`), `/${locale}/work/${slug}?design=nocturne`, `${locale}: ${slug} preserves design query`);
    }
  }

  for (const metadata of Object.values(portfolio.metadata.pages)) {
    assert.ok(metadata.title.trim() && metadata.description.trim(), `${locale}: localized page metadata is present`);
  }
}

for (const locale of ["fr", "ro", "es"] as const) {
  const copy = getPortfolioCopy(locale);
  assert.notEqual(copy.legal.privacyTitle, english.legal.privacyTitle, `${locale}: privacy title is localized`);
  assert.notEqual(copy.legal.legalTitle, english.legal.legalTitle, `${locale}: legal title is localized`);
  assert.notEqual(copy.notFound.title, english.notFound.title, `${locale}: 404 title is localized`);
  assert.equal(copy.legal.privacyParagraphs.length, english.legal.privacyParagraphs.length, `${locale}: privacy notice coverage`);
  assert.equal(copy.legal.legalParagraphs.length, english.legal.legalParagraphs.length, `${locale}: legal notice coverage`);
}

assert.deepEqual(Object.fromEntries(locales.map((locale) => [locale, translationCatalog[locale].status])), {
  en: "ready",
  fr: "ready",
  ro: "ready",
  es: "ready",
});

console.log("Final four-language localization audit passed.");
