import assert from "node:assert/strict";
import { pageCopy } from "./page-copy.ts";
import { getPortfolioCopy, translationCatalog } from "./portfolio.ts";

const englishPage = pageCopy.en.contact;
const englishPortfolio = getPortfolioCopy("en").contact;
const locales = ["fr", "ro", "es"] as const;

for (const locale of locales) {
  const contact = pageCopy[locale].contact;
  const previousStatus = translationCatalog[locale].status;
  translationCatalog[locale].status = "ready";
  const portfolio = getPortfolioCopy(locale).contact;
  translationCatalog[locale].status = previousStatus;

  const strings = [
    contact.lead,
    contact.email,
    contact.back,
    contact.name,
    contact.emailLabel,
    contact.projectType,
    contact.chooseDirection,
    ...contact.projectTypes,
    contact.budget,
    contact.budgetPlaceholder,
    ...contact.budgetOptions,
    contact.timeline,
    contact.timelinePlaceholder,
    ...contact.timelineOptions,
    contact.description,
    contact.descriptionPlaceholder,
    contact.company,
    contact.formMessages?.rateLimit,
    contact.formMessages?.validation,
    contact.formMessages?.rejected,
    contact.formMessages?.unavailable,
    contact.formMessages?.nameRequired,
    contact.formMessages?.emailInvalid,
    contact.formMessages?.projectTypeRequired,
    contact.formMessages?.messageRequired,
    portfolio.eyebrow,
    portfolio.title,
    portfolio.formNotice,
    portfolio.formButton,
    portfolio.privacyLink,
  ];

  assert.equal(contact.projectTypes.length, englishPage.projectTypes.length, `${locale}: project type coverage`);
  assert.equal(contact.budgetOptions.length, englishPage.budgetOptions.length, `${locale}: budget coverage`);
  assert.equal(contact.timelineOptions.length, englishPage.timelineOptions.length, `${locale}: timeline coverage`);
  assert.ok(strings.every((value) => value?.trim().length), `${locale}: every Contact value is present`);
  assert.notEqual(contact.lead, englishPage.lead, `${locale}: introductory copy is localized`);
  assert.notEqual(contact.descriptionPlaceholder, englishPage.descriptionPlaceholder, `${locale}: form placeholder is localized`);
  assert.notEqual(contact.back, englishPage.back, `${locale}: return control is localized`);
  assert.notEqual(contact.formMessages?.validation, englishPage.formMessages?.validation, `${locale}: validation message is localized`);
  assert.notEqual(contact.formMessages?.unavailable, englishPage.formMessages?.unavailable, `${locale}: unavailable-delivery status is localized`);
  assert.notEqual(portfolio.title, englishPortfolio.title, `${locale}: Contact hero is localized`);
  assert.notEqual(portfolio.formNotice, englishPortfolio.formNotice, `${locale}: unavailable-form notice is localized`);
}

console.log("Contact localization coverage passed for FR, RO and ES.");
