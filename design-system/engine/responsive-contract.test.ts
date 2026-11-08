import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const workspace = readFileSync("app/workspace.css", "utf8");
const sizing = readFileSync("app/sizing-contract.css", "utf8");
const tokens = readFileSync("design-system/tokens/layout-contract.css", "utf8");

assert.match(workspace, /@media\(max-width:768px\)\{\.workspace/);
assert.match(workspace, /@media\(max-width:900px\)\{\.visual-comparison\{grid-template-columns:1fr\}/);
assert.match(workspace, /comparison-controls\{grid-template-columns:minmax\(0,1fr\) auto minmax\(0,1fr\)/);
assert.match(sizing, /@media\(max-width:768px\)/);
assert.match(sizing, /data-category="overlays"\] \.showcase-generic\{min-height:var\(--layout-overlay-preview-min\)/);
assert.match(tokens, /--layout-breakpoint-tablet:768px/);
assert.match(tokens, /--layout-overlay-preview-min:240px/);
console.log("responsive contract tests passed");
