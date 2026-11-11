import assert from "node:assert/strict";
import { pageCopy } from "./page-copy.ts";

const english = pageCopy.en.about;
const locales = ["fr", "ro", "es"] as const;

for (const locale of locales) {
  const about = pageCopy[locale].about;
  const strings = [
    ...about.intro,
    about.portraitAlt,
    about.portraitLabel,
    ...about.experience,
    about.principlesEyebrow,
    about.principlesTitle,
    ...about.principles.flat(),
    about.capabilitiesEyebrow,
    about.capabilitiesTitle,
    about.capabilitiesCopy,
    ...about.expertise.flat(),
    about.ctaEyebrow,
    about.cta,
  ];

  assert.equal(about.intro.length, english.intro.length, `${locale}: intro paragraph coverage`);
  assert.equal(about.principles.length, english.principles.length, `${locale}: principles coverage`);
  assert.equal(about.expertise.length, english.expertise.length, `${locale}: expertise coverage`);
  assert.ok(strings.every((value) => value.trim().length > 0), `${locale}: every About value is present`);
  assert.notEqual(about.intro[0], english.intro[0], `${locale}: founder narrative is localized`);
  assert.notEqual(about.principlesTitle, english.principlesTitle, `${locale}: principles heading is localized`);
  assert.notEqual(about.capabilitiesCopy, english.capabilitiesCopy, `${locale}: capability narrative is localized`);
}

console.log("About localization coverage passed for FR, RO and ES.");
