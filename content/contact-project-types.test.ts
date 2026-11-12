import assert from "node:assert/strict";
import { contactProjectTypeIds, isContactProjectTypeId, pricingCategoryProjectType } from "./contact-project-types.ts";
import { pricingCategories } from "./pricing.ts";

assert.equal(contactProjectTypeIds.length, 7);
assert.equal(isContactProjectTypeId("web-application"), true);
assert.equal(isContactProjectTypeId("unknown"), false);
assert.equal(isContactProjectTypeId(null), false);
for (const category of pricingCategories) assert.ok(isContactProjectTypeId(pricingCategoryProjectType[category.id]), `${category.id} has a valid Contact type`);

console.log("Pricing-to-Contact project type mappings passed.");
