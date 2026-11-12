export const pricingCategories = [
  { id: "website", startingPrice: 800 },
  { id: "commerce", startingPrice: 1500 },
  { id: "web-app", startingPrice: 2500 },
  { id: "android", startingPrice: 2000 },
  { id: "saas", startingPrice: 5000 },
] as const;

export type PricingCategoryId = (typeof pricingCategories)[number]["id"];

export function formatStartingPrice(amount: number, locale: "en" | "fr" | "ro" | "es") {
  return new Intl.NumberFormat(locale === "en" ? "en-IE" : locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(amount);
}
