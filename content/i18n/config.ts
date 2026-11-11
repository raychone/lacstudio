export const locales = ["en", "fr", "ro", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ro: "Română",
  es: "Español",
};

export const localeOgCodes: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  ro: "ro_RO",
  es: "es_ES",
};

export const isLocale = (value: string | undefined | null): value is Locale =>
  value !== undefined && value !== null && locales.includes(value as Locale);

export const localizePath = (locale: Locale, pathname: string) => {
  if (!pathname.startsWith("/")) return pathname;
  const stripped = pathname.replace(/^\/(?:en|fr|ro|es)(?=\/|$)/, "") || "/";
  return `/${locale}${stripped === "/" ? "" : stripped}`;
};
