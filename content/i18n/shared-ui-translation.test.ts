import assert from "node:assert/strict";
import { getPortfolioCopy, translationCatalog } from "./portfolio.ts";
import { localizePath } from "./config.ts";

const english = getPortfolioCopy("en");
const locales = ["fr", "ro", "es"] as const;

const leafStrings = (value: unknown): string[] => {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(leafStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(leafStrings);
  return [];
};

for (const locale of locales) {
  const previousStatus = translationCatalog[locale].status;
  translationCatalog[locale].status = "ready";
  const copy = getPortfolioCopy(locale);
  translationCatalog[locale].status = previousStatus;
  const strings = leafStrings(copy.shared);

  assert.ok(strings.length > 0 && strings.every((value) => value.trim().length > 0), `${locale}: all shared UI values are present`);
  assert.equal(copy.shared.workPlaceholders.length, english.shared.workPlaceholders.length, `${locale}: carousel fallback coverage`);
  assert.equal(copy.navigation.work.length > 0, true, `${locale}: navigation is present`);
  assert.equal(copy.navigation.mainLabel.length > 0, true, `${locale}: navigation accessibility label is present`);
  assert.equal(copy.shared.chooseDesignSystem.length > 0, true, `${locale}: design selector accessibility label is present`);
  assert.equal(copy.shared.toggleNavigation.length > 0, true, `${locale}: mobile navigation accessibility label is present`);
  assert.equal(copy.shared.pauseFeaturedAutoplay.length > 0, true, `${locale}: carousel control accessibility label is present`);
  assert.equal(localizePath(locale, "/work?design=tactile"), `/${locale}/work?design=tactile`, `${locale}: locale path preserves the design query`);
  assert.notEqual(copy.shared.chooseDesignSystem, english.shared.chooseDesignSystem, `${locale}: design selector copy is localized`);
  assert.notEqual(copy.shared.toggleNavigation, english.shared.toggleNavigation, `${locale}: mobile navigation copy is localized`);
  assert.notEqual(copy.shared.chooseFeaturedWork, english.shared.chooseFeaturedWork, `${locale}: carousel copy is localized`);
}

console.log("Shared UI localization coverage passed for FR, RO and ES.");
