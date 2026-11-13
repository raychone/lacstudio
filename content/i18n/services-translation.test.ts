import assert from "node:assert/strict";
import { pageCopy } from "./page-copy.ts";

const english = pageCopy.en.services;

for (const locale of ["fr", "ro", "es"] as const) {
  const copy = pageCopy[locale].services;
  assert.equal(copy.scope.length, english.scope.length, `${locale} service scope coverage`);
  assert.equal(copy.fit.length, english.fit.length, `${locale} service fit coverage`);
  assert.equal(copy.delivery.length, english.delivery.length, `${locale} service delivery coverage`);
  for (const value of [...copy.scope, ...copy.fit.flat(), ...copy.delivery.flat(), copy.locationNote ?? "", copy.ctaEyebrow, copy.ctaTitle, copy.ctaCopy, copy.cta]) {
    assert.ok(value.trim(), `${locale} has an empty Services translation`);
  }
  assert.notEqual(copy.locationNote, english.locationNote, `${locale} must not fall back to English geographic Services copy`);
  assert.notEqual(copy.ctaTitle, english.ctaTitle, `${locale} must not fall back to English Services copy`);
}

console.log("services translation coverage tests passed");
