import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("./portfolio-app.tsx", import.meta.url), "utf8");
assert.match(source, /role="status" aria-live="polite"/, "Contact status is announced accessibly");
assert.match(source, /aria-busy=\{submission === "submitting"\}/, "Submit loading state is exposed accessibly");
assert.match(source, /fieldset disabled=\{submission === "submitting"\}/, "Fields remain explorable when delivery is unavailable and lock only while sending");
assert.match(source, /disabled=\{availability !== "available" \|\| submission === "submitting"\}/, "Submit remains unavailable until a delivery channel is configured");
assert.match(source, /fetch\("\/api\/contact", \{ cache: "no-store" \}\)/, "UI checks server-side availability before enabling the form");
assert.match(source, /noValidate/, "The form provides localized validation instead of browser-only errors");
assert.match(source, /aria-invalid=\{Boolean\(fieldErrors\.name\)\}/, "Invalid required fields are announced accessibly");
assert.match(source, /fieldErrors\.message/, "The project description has visible validation feedback");
assert.match(source, /useSearchParams\(\)\.get\("project"\)/, "Pricing project category is read from the URL");
assert.match(source, /useState\(\(\) => isContactProjectTypeId\(pricingSelection\)/, "Known pricing categories are preselected only when the form initializes");
assert.match(source, /name="projectType" value=\{selectedProjectLabel\}/, "Delivered project type remains a localized readable label");
assert.match(source, /aria-required="true"/, "Required contact fields expose their requirement accessibly");
console.log("Contact form UI contract passed.");
