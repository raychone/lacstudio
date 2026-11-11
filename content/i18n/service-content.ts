import { services } from "@/content/services";
import type { Locale } from "./config.ts";
import { isLocaleReady } from "./portfolio.ts";

/** Phase 2B.2 will add service descriptions by locale while retaining these stable service identifiers and order. */
export function localizeServices(locale: Locale) {
  if (!isLocaleReady(locale)) throw new Error(`No complete service translation is available for locale: ${locale}`);
  return services;
}
