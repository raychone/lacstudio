import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("./portfolio-app.tsx", import.meta.url), "utf8");
assert.match(source, /role="status" aria-live="polite"/, "Contact status is announced accessibly");
assert.match(source, /aria-busy=\{submission === "submitting"\}/, "Submit loading state is exposed accessibly");
assert.match(source, /submission === "submitting" \|\| availability !== "available"/, "Controls prevent duplicate submissions while sending");
assert.match(source, /fetch\("\/api\/contact", \{ cache: "no-store" \}\)/, "UI checks server-side availability before enabling the form");
assert.match(source, /noValidate/, "The form provides localized validation instead of browser-only errors");
assert.match(source, /aria-invalid=\{Boolean\(fieldErrors\.name\)\}/, "Invalid required fields are announced accessibly");
assert.match(source, /fieldErrors\.message/, "The project description has visible validation feedback");
console.log("Contact form UI contract passed.");
