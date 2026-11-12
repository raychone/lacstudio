import assert from "node:assert/strict";
import { contactBudgetIds, contactProjectTypeIds, isContactBudgetId, isContactProjectTypeId, pricingCategoryBudget, pricingCategoryProjectType } from "./contact-project-types.ts";
import { pricingCategories } from "./pricing.ts";

assert.equal(contactProjectTypeIds.length, 7);
assert.equal(isContactProjectTypeId("web-application"), true);
assert.equal(isContactProjectTypeId("unknown"), false);
assert.equal(isContactProjectTypeId(null), false);
assert.equal(contactBudgetIds.length, 3);
assert.equal(isContactBudgetId("under-5000"), true);
assert.equal(isContactBudgetId("unknown"), false);
assert.equal(isContactBudgetId(null), false);
for (const category of pricingCategories) {
  assert.ok(isContactProjectTypeId(pricingCategoryProjectType[category.id]), `${category.id} has a valid Contact type`);
  assert.ok(isContactBudgetId(pricingCategoryBudget[category.id]), `${category.id} has a valid Contact budget`);
}

console.log("Pricing-to-Contact project type mappings passed.");
