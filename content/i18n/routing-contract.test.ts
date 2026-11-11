import assert from "node:assert/strict";
import { defaultLocale, isLocale, localizePath } from "./config.ts";

assert.equal(defaultLocale, "en");
assert.equal(isLocale("en"), true);
assert.equal(isLocale("fr"), true);
assert.equal(isLocale("de"), false);

assert.equal(localizePath("fr", "/"), "/fr");
assert.equal(localizePath("ro", "/en/work/medichelp"), "/ro/work/medichelp");
assert.equal(localizePath("es", "/fr/services"), "/es/services");
assert.equal(localizePath("en", "/work?design=nocturne"), "/en/work?design=nocturne");
assert.equal(localizePath("fr", "https://example.com"), "https://example.com");

console.log("i18n routing contract tests passed");
