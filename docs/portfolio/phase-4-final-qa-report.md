# Phase 4 — Final QA & production readiness

Date: 2026-11-11  
Scope: public portfolio only. The Design Lab and the five design systems' visual direction were not changed.

## Result

The repository passes its static, localization, SEO, design-contract and production-build checks. One accessibility defect found during this audit was fixed: public routes previously rendered a `main` landmark inside another `main` landmark. Each public route now owns exactly one primary `main` landmark.

Browser verification was subsequently completed from a local development environment: **58/58 Playwright tests passed** in 13.4 minutes. The application is functionally ready to deploy. Production publication remains conditional on the final public domain, verified legal details and the intentional contact-form limitation described below. There are no known application P0 defects.

## Automated verification completed

| Area | Evidence | Result |
| --- | --- | --- |
| Design-system geometry | `npm run test:comparison`, `test:sizing`, `test:responsive` | Passed |
| Keyboard interaction contracts | `npm run test:interactions` | Passed |
| Four-language copy and routing | `npm run test:i18n` | Passed |
| Spanish rendered-content regression | `rendered-locale-regression.test.ts` in `test:i18n` | Passed |
| SEO contracts | `npm run test:seo` | Passed |
| Static analysis | `npm run lint` | Passed |
| Build and Vercel output | `npm run build` | Passed |
| Patch hygiene | `git diff --check` | Passed |
| Full browser suite | `PLAYWRIGHT_BASE_URL=http://localhost:5173 npm run test:browser` | Passed; 58/58 in 13.4 minutes |

The automated locale tests cover English, French, Romanian and Spanish source resolution, localized routing, navigation/shared UI copy, page copy, legal/privacy/404 copy, metadata contracts and the Spanish fallback regression. The SEO suite verifies localized canonical paths, `hreflang`, document language, sitemap/robots rules, structured data, metadata and `llms.txt` contracts.

## Functional coverage

The executable browser suite covers Home, Work, project case studies, Services, Process, About, Contact, Legal, Privacy and localized not-found behavior. It also includes navigation, language/design selection, query persistence, project navigation, mobile navigation, custom selects, carousel controls/autoplay, effect preference, form presentation and representative responsive checks.

This audit added `design-system/browser/portfolio-landmarks.spec.ts`. It checks that every listed public route, including a case study and a localized 404, exposes exactly one `main` landmark in all four locales. This protects the semantic fix made in `components/portfolio/portfolio-app.tsx`.

Browser QA also exposed and resolved a localized-route regression in the legacy Lab-link redirect. Legacy links with their original Lab query state now redirect from both unprefixed and locale-prefixed home routes. Browser expectations were updated to the live locale-prefixed route contract rather than the retired unprefixed paths.

The contact endpoint remains intentionally unavailable. Its visible unavailable state and direct email route are part of the existing contracts; this audit did not imply that message delivery succeeds.

## Responsive and accessibility findings

### Fixed

- **P1 fixed — nested `main` landmarks:** the application shell wrapped page components in `main` although every non-home page already returned its own `main`. The outer wrapper was removed and Home was made the owner of its own `main`. This does not change content, geometry or a design system.
- **P1 fixed — legacy Lab redirect after locale activation:** the compatibility redirect now recognizes localized home paths such as `/en/` as well as `/`.
- **P1 fixed — shared header geometry:** Playground header controls now preserve the common external footprint while keeping their double-stroke visual treatment inset. The five-system navbar geometry test passes.

### Verified by source and contracts

- One semantic page `h1` is protected by the SEO test.
- Visible branded `:focus-visible` rules are present for public links, buttons and controls.
- Locale/design state includes live status messaging; carousel progress is announced politely.
- Carousel autoplay observes `prefers-reduced-motion`; public ambient effects are disabled for coarse pointers and reduced motion.
- The browser suite includes keyboard and custom-select interaction coverage.

### Verified in browser

- Responsive public routes have no horizontal overflow at 320px, 375px, 768px, 1024px and 1440px.
- All four locales render visible localized copy; locale switching retains the current path and design selection.
- Five-design navigation geometry, sticky headers, mobile navigation, carousel interactions/autoplay, project links, custom selects, reduced motion and representative focus/dialog interactions pass.

### Still prudent after deployment

- Inspect contrast and touch-target comfort on at least one physical mobile device.
- Check the production browser console once on the final Vercel domain.

## Browser validation

The sandbox cannot bind a loopback port (`EPERM`), so browser execution was completed from the user-managed local environment instead. The full suite passed: **58 tests, 9 files, 13.4 minutes**.

To repeat the verification locally:

```sh
PLAYWRIGHT_BASE_URL=http://localhost:5173 npm run test:browser
```

The local app must already be running on port 5173. Repeat this suite after any meaningful UI, routing or localization change.

## SEO regression status

Phase 3 SEO contracts remain intact and pass automated verification:

- Locale-specific canonical URLs and reciprocal `hreflang` alternatives.
- Localized titles, descriptions, Open Graph/Twitter metadata and HTML language.
- Sitemap and robots policy.
- Factual JSON-LD and `llms.txt`.
- Semantic page headings.

Before deployment, set `NEXT_PUBLIC_SITE_URL` in Vercel to the final HTTPS origin without a trailing slash. Without it, absolute sitemap, metadata and structured-data URLs cannot be fully finalized.

## Performance observations

The production bundle builds successfully. Measured gzip sizes in this build include:

- Shared CSS: **103.80 kB**.
- Main public portfolio client chunk: **66.67 kB**.
- Framework client chunk: **59.77 kB**.
- Server-rendered portfolio module: **56.71 kB**.

Images continue to use `next/image`; the home hero is the only explicitly prioritized hero asset. No evidence justified a risky dependency or animation refactor in this QA pass. Vinext/Nitro reports ineffective dynamic-import and optional dependency-trace warnings, but the build succeeds and produces Vercel output. These are toolchain warnings to monitor, not functional failures observed in the application.

## Remaining issues and production blockers

### P0 — critical blockers

None known.

### P1 — complete before public launch

1. Set and verify `NEXT_PUBLIC_SITE_URL` against the final deployed HTTPS domain.
2. Supply verified legal entity/controller details before presenting Legal and Privacy as final public notices. The current notices intentionally avoid invented facts.
3. Manually verify direct email contact (`codrin.lucaciu@gmail.com`) and confirm that the intentionally unavailable contact-form state is clear to visitors.

### P2 — after launch / planned follow-up

1. Use a real-device or hosted performance run (Lighthouse/Web Vitals) before making performance-score claims.
2. Investigate scoping/splitting Design Lab-related CSS from the public shared stylesheet only if real performance data shows it is worthwhile; this is not a safe speculative QA change.
3. After deployment, validate structured data and social previews against the live production origin, then monitor indexing in Search Console/Bing Webmaster Tools.

## Manual deployment checklist

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin in Vercel and redeploy.
2. Open `/robots.txt`, `/sitemap.xml` and `/llms.txt` on the production origin.
3. Verify `/en/`, `/fr/`, `/ro/` and `/es/`; switch languages from a case study while retaining `?design=`.
4. Check every design selector, effect toggle, navigation link, carousel CTA, back link and direct-email link.
5. Re-run the browser command above if any UI, routing or localization change occurs after this QA checkpoint.
6. Confirm legal/privacy facts and project/demo claims with their owner; do not add unverified company, hosting, retention or compliance statements.
7. Keep the contact form unavailable until a delivery provider, sender identity, server-only credentials, durable rate limiting and corresponding privacy copy are approved.
