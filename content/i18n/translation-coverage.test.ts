import { locales } from "./config.ts";
import { englishPortfolioCopy, translationCatalog } from "./portfolio.ts";

function paths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value) || typeof value !== "object" || value === null) return [prefix];
  return Object.entries(value).flatMap(([key, item]) => paths(item, prefix ? `${prefix}.${key}` : key));
}

const required = new Set(paths(englishPortfolioCopy));

for (const locale of locales) {
  const entry = translationCatalog[locale];
  if (entry.status === "planned") {
    if (entry.dictionary && Object.keys(entry.dictionary).length) throw new Error(`${locale} is planned but contains a partial public dictionary.`);
    continue;
  }
  const present = new Set(paths(entry.dictionary));
  const missing = [...required].filter((key) => !present.has(key));
  if (missing.length) throw new Error(`${locale} is marked ready but is missing: ${missing.join(", ")}`);
}

console.log("translation coverage tests passed");
