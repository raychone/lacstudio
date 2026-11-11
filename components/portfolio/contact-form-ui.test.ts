import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("./portfolio-app.tsx", import.meta.url), "utf8");
assert.match(source, /role="status" aria-live="polite"/, "Contact status is announced accessibly");
assert.match(source, /aria-busy=\{submission === "submitting"\}/, "Submit loading state is exposed accessibly");
assert.match(source, /submission === "submitting" \|\| availability !== "available"/, "Controls prevent duplicate submissions while sending");
assert.match(source, /fetch\("\/api\/contact", \{ cache: "no-store" \}\)/, "UI checks server-side availability before enabling the form");
console.log("Contact form UI contract passed.");
