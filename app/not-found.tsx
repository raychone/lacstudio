import type { Metadata } from "next";
import { headers } from "next/headers";
import { PortfolioApp } from "@/components/portfolio/portfolio-app";
import { defaultLocale, isLocale } from "@/content/i18n/config";
import { getPortfolioCopy } from "@/content/i18n/portfolio";

async function currentLocale() {
  const requestedLocale = (await headers()).get("x-lac-locale");
  return isLocale(requestedLocale) ? requestedLocale : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const copy = getPortfolioCopy(locale);
  return {
    title: copy.notFound.title,
    description: copy.notFound.copy,
    robots: { index: false, follow: false },
  };
}

export default async function NotFound() {
  return <PortfolioApp page="not-found" locale={await currentLocale()} />;
}
