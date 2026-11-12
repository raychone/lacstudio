# Pricing page

## Architecture

The public Pricing page is rendered by `PricingPage` in `components/portfolio/portfolio-app.tsx`. It uses the same portfolio shell, header, footer, design switcher, locale-aware links, contact route and accessible disclosure pattern as the existing portfolio pages.

Localized routes are `/en/pricing`, `/fr/pricing`, `/ro/pricing` and `/es/pricing`. The unprefixed `/pricing` route remains available for the default portfolio route convention.

## Pricing configuration

Starting prices are centralized in `content/pricing.ts` as `pricingCategories`. Update a `startingPrice` value there; the page formats the Euro amount for the active locale. The page copy deliberately calls these indicative starting points rather than fixed quotes.

## Localization

All visible Pricing page copy lives in `content/i18n/pricing-content.ts`, keyed by the existing `Locale` type. Navigation and metadata labels are in `content/i18n/portfolio.ts` alongside the other shared portfolio strings.

## Design systems

The page uses shared portfolio tokens and has system-specific treatments in `app/portfolio.css` for Tactile, Nocturne, Editorial, Brutalist and Playground. Content and interaction structure are shared; visual material, borders, depth and typography remain design-specific.

## SEO

`app/[locale]/[[...segments]]/page.tsx` resolves Pricing as a localized portfolio route and sends its localized metadata through `localizedMetadata`. `app/sitemap.ts` includes `/pricing` for every ready locale. The existing structured-data component adds Pricing to the breadcrumb graph.

## Manual verification

After deployment, verify each localized route in every design system at 320px, 375px, 768px, 1024px and desktop width. Check the estimate CTA retains the selected design and opens the localized contact page, and test every FAQ with keyboard navigation.
