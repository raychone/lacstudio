# Phase 3 — Technical SEO and AI search discoverability

Date: 2026-11-11  
Scope: public portfolio only. The Design Lab and the five visual systems were not changed.

## What was audited

- All locale-prefixed public routes: Home, Work, individual case studies, Services, Process, About, Contact, Privacy and Legal.
- Locale redirects, canonical paths, `hreflang` alternates, document language, robots rules and sitemap generation.
- Server metadata, Open Graph and Twitter metadata, structured data and primary document headings.
- Public project facts, image delivery and the rendered public-content architecture.

## Findings and changes

### Routing, indexability and metadata

- Every supported public locale is active: `en`, `fr`, `ro` and `es`.
- The existing locale-aware canonical and alternate-link implementation was retained. Canonicals are language-specific and do not include the design-system query parameter, so `?design=…` does not create a second canonical page.
- Case-study pages no longer inherit the generic Work page title and description. Their metadata now uses the locale-specific project title and summary.
- Twitter card metadata now accompanies localized page metadata.
- The generated sitemap contains only intended indexable pages and approved public case studies. Privacy and Legal are deliberately excluded.
- Privacy, Legal and not-found responses remain `noindex`; the private `/lab` route is disallowed in `robots.txt`.
- The root HTML `lang` attribute is derived from the resolved locale request header.

### Structured data

The localized server route now emits only factual JSON-LD:

- `Person` for Lucaciu Andrei Codrin, with the published contact address.
- `WebSite` for the localized home page.
- `Service` entries on Services, using the existing approved service content.
- `BreadcrumbList` on public non-home routes.
- `SoftwareApplication` for public case studies, using only each project’s published title, description, category and supported platforms.

No ratings, reviews, prices, addresses, unsupported performance claims or invented company facts are emitted.

### Semantics and AI-readable context

- Each primary public page now has one semantic `h1`; the existing visual geometry and heading styles are preserved.
- Public content remains server-rendered through the route and is not dependent on motion-only presentation.
- Added `public/llms.txt`: a concise factual guide to the studio, capabilities, public page paths, language versions and direct contact. It does not promise ranking or describe unpublished outcomes.

### Performance observations

- The existing project and hero media continues to use `next/image`, including an explicit `priority` image only where appropriate.
- No speculative font, dependency or layout changes were made. The production build reports one shared CSS file at 103.75 kB gzip and the main public portfolio client chunk at 64.93 kB gzip; this report does not claim a field-performance score.

## Validation performed

- `npm run test:seo` — passed.
- `npm run test:i18n` — passed; all four public locales and locale-routing contracts passed.
- `npm run lint` — passed.
- `npm run build` — passed.
- `git diff --check` — passed.

The build prints pre-existing Vinext/Nitro dynamic-import and optional trace-include warnings. It completes successfully and produces Vercel output.

## Browser validation limitation

Browser preview could not be run in this sandbox because the local server cannot bind to the required loopback port (`EPERM`). This is an environment limitation, not a failed application check. No browser, Lighthouse, Rich Results Test or social-preview claim is made here.

## Required production configuration and manual checks

1. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final HTTPS production origin, with no trailing slash. This is required for absolute Open Graph URLs, JSON-LD URLs, `robots.txt` sitemap URL and generated sitemap entries.
2. After deployment, open `/robots.txt`, `/sitemap.xml` and `/llms.txt` on the production origin and verify the four locale variants of a home page and case study.
3. Inspect source/response metadata for a representative page in every locale: canonical URL, four reciprocal `hreflang` values plus `x-default`, Open Graph locale and document `lang`.
4. Test one unprefixed legacy URL, one locale switch on a case study, one `?design=` navigation and an unknown route; verify the intended redirect or localized 404 without a redirect loop.
5. Validate one home page, Services page and case-study JSON-LD with a schema validator after the public origin is live. Validate the same pages in a social-card debugger if social previews are important.
6. Add the production property to Google Search Console and Bing Webmaster Tools, submit the production sitemap and inspect a small set of locale URLs. This helps monitoring but does not guarantee indexing or rankings.

## Known limitations

- Search engines and AI systems decide their own crawling, indexing and ranking; no implementation can guarantee inclusion or visibility.
- Legal and privacy notices intentionally preserve the existing fact-limited content. No registration, hosting, retention or compliance claims were fabricated.
- Contact form delivery remains intentionally unavailable; direct email is the valid public contact route.
