import assert from "node:assert/strict";
import { libraryCategories } from "./categories.ts";
import { fixtureSizeByCategory, hasCompleteFixtureSizing, sizingContract } from "./sizing-contract.ts";

assert.equal(sizingContract.controls.xs, 32);
assert.equal(sizingContract.controls.sm, 36);
assert.equal(sizingContract.controls.md, sizingContract.controls.touchTarget);
assert.equal(sizingContract.fields.md, sizingContract.controls.md);
assert.equal(sizingContract.cards.paddingMd, 24);
assert.equal(sizingContract.overlays.md, 560);
assert.equal(sizingContract.carousel.minHeight, 280);
assert.equal(hasCompleteFixtureSizing(libraryCategories.map((category) => category.id)), true);
assert.equal(Object.keys(fixtureSizeByCategory).length, libraryCategories.length);
console.log("sizing contract tests passed");
