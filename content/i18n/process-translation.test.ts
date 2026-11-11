import assert from "node:assert/strict";
import { pageCopy } from "./page-copy.ts";
import { getPortfolioCopy, translationCatalog } from "./portfolio.ts";

const englishPage = pageCopy.en.process;
const englishPortfolio = getPortfolioCopy("en").process;
const locales = ["fr", "ro", "es"] as const;

for (const locale of locales) {
  const process = pageCopy[locale].process;
  const previousStatus = translationCatalog[locale].status;
  translationCatalog[locale].status = "ready";
  const portfolio = getPortfolioCopy(locale).process;
  translationCatalog[locale].status = previousStatus;

  const stageStrings = process.stages.flatMap((stage) => [stage.tab, stage.title, stage.summary, ...stage.outputs, stage.involvement]);
  const strings = [
    ...stageStrings,
    process.principlesEyebrow,
    process.principlesTitle,
    ...process.principles.flat(),
    process.ctaEyebrow,
    process.ctaTitle,
    process.ctaCopy,
    process.discuss,
    process.explore,
    process.cta,
    portfolio.eyebrow,
    portfolio.title,
    portfolio.lead,
    portfolio.tabLabel,
    portfolio.outputLabel,
    portfolio.involvementLabel,
  ];

  assert.equal(process.stages.length, englishPage.stages.length, `${locale}: all process stages are present`);
  assert.ok(process.stages.every((stage) => stage.outputs.length === 3), `${locale}: each process stage has its complete outputs`);
  assert.equal(process.principles.length, englishPage.principles.length, `${locale}: all principles are present`);
  assert.ok(strings.every((value) => value.trim().length > 0), `${locale}: every Process value is present`);
  assert.notEqual(process.stages[0].title, englishPage.stages[0].title, `${locale}: interactive stage content is localized`);
  assert.notEqual(process.ctaTitle, englishPage.ctaTitle, `${locale}: process CTA is localized`);
  assert.notEqual(portfolio.title, englishPortfolio.title, `${locale}: Process hero is localized`);
  assert.notEqual(portfolio.tabLabel, englishPortfolio.tabLabel, `${locale}: Process tab label is localized`);
}

console.log("Process localization coverage passed for FR, RO and ES.");
