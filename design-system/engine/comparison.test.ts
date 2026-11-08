import assert from "node:assert/strict";
import { comparisonFromParams, comparisonParams, defaultComparisonPair, selectComparisonSide, swapComparisonPair } from "./comparison.ts";

const restored = comparisonFromParams(new URLSearchParams("compare=1&left=editorial&right=playground"));
assert.deepEqual(restored, { enabled: true, left: "editorial", right: "playground", notice: null });
assert.deepEqual(comparisonFromParams(new URLSearchParams("compare=1&left=unknown&right=playground")), { enabled: false, ...defaultComparisonPair, notice: "Comparison needs two different systems." });
assert.equal(selectComparisonSide({ left: "tactile", right: "nocturne" }, "left", "nocturne").notice, "Choose two different systems.");
assert.deepEqual(swapComparisonPair({ left: "brutalist", right: "playground" }), { enabled: true, left: "playground", right: "brutalist", notice: null });
assert.deepEqual(comparisonParams({ enabled: false, ...defaultComparisonPair, notice: null }), { compare: null, left: null, right: null });
console.log("comparison tests passed");
