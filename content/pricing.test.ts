import assert from "node:assert/strict";
import { pricingCategories } from "./pricing.ts";
import { pricingContent } from "./i18n/pricing-content.ts";
import { locales } from "./i18n/config.ts";

assert.deepEqual(pricingCategories.map((category) => category.startingPrice), [800, 1500, 2500, 2000, 5000]);
assert.equal(pricingCategories.length, 5);

for (const locale of locales) {
  const content = pricingContent[locale];
  assert.equal(Object.keys(content.categories.items).length, pricingCategories.length, `${locale} includes every pricing category`);
  assert.equal(content.factors.items.length, 8, `${locale} includes every estimate factor`);
  assert.equal(content.faq.items.length, 8, `${locale} includes every pricing FAQ`);
  assert.ok(content.categories.qualification.length > 20, `${locale} explains that prices are indicative`);
}

console.log("Pricing configuration and localization tests passed.");
