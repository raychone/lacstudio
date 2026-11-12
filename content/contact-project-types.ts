import type { PricingCategoryId } from "./pricing";

export const contactProjectTypeIds = ["web-application", "android-application", "desktop-application", "saas-platform", "business-system", "website", "other-software"] as const;
export type ContactProjectTypeId = (typeof contactProjectTypeIds)[number];

export const pricingCategoryProjectType: Record<PricingCategoryId, ContactProjectTypeId> = {
  website: "website",
  commerce: "website",
  "web-app": "web-application",
  android: "android-application",
  saas: "saas-platform",
};

export const isContactProjectTypeId = (value: string | null): value is ContactProjectTypeId =>
  value !== null && contactProjectTypeIds.includes(value as ContactProjectTypeId);
