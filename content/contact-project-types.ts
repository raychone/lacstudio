import type { PricingCategoryId } from "./pricing";

export const contactProjectTypeIds = ["web-application", "android-application", "desktop-application", "saas-platform", "business-system", "website", "other-software"] as const;
export type ContactProjectTypeId = (typeof contactProjectTypeIds)[number];
export const contactBudgetIds = ["under-5000", "5000-15000", "15000-plus"] as const;
export type ContactBudgetId = (typeof contactBudgetIds)[number];

export const pricingCategoryProjectType: Record<PricingCategoryId, ContactProjectTypeId> = {
  website: "website",
  commerce: "website",
  "web-app": "web-application",
  android: "android-application",
  saas: "saas-platform",
};

export const pricingCategoryBudget: Record<PricingCategoryId, ContactBudgetId> = {
  website: "under-5000",
  commerce: "under-5000",
  "web-app": "under-5000",
  android: "under-5000",
  saas: "5000-15000",
};

export const isContactProjectTypeId = (value: string | null): value is ContactProjectTypeId =>
  value !== null && contactProjectTypeIds.includes(value as ContactProjectTypeId);

export const isContactBudgetId = (value: string | null): value is ContactBudgetId =>
  value !== null && contactBudgetIds.includes(value as ContactBudgetId);
