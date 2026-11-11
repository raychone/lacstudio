# Phase 2B.1 — Multilingual architecture

## Scope completed

This phase establishes the multilingual foundation for the public LAC Studio
portfolio. It deliberately does **not** add French, Romanian, or Spanish copy.
No visual theme, portfolio structure, Design Lab, or project content was
redesigned as part of this change.

## Locale and route contract

Supported locale codes are defined once in `content/i18n/config.ts`:

| Locale | Status in Phase 2B.1 | Public behaviour |
| --- | --- | --- |
| `en` | Ready | Fully available |
| `fr` | Planned | Returns a no-index 404 until complete copy is supplied |
| `ro` | Planned | Returns a no-index 404 until complete copy is supplied |
| `es` | Planned | Returns a no-index 404 until complete copy is supplied |

The localized URL contract is:

- `/en`
- `/en/work`
- `/en/work/[slug]`
- `/en/services`
- `/en/process`
- `/en/about`
- `/en/contact`
- `/en/privacy`
- `/en/legal`

`proxy.ts` permanently redirects the equivalent legacy public URLs to their
English URLs, preserving query strings. For example,
`/work?design=nocturne` redirects to `/en/work?design=nocturne`. Unknown
locales and invalid localized routes return 404 responses. `/lab` and `/api`
are excluded from this behavior so the internal Design Lab remains unchanged.

## Content architecture

The implementation uses typed, repository-owned content dictionaries rather
than a translation SaaS or a new runtime dependency:

- `content/i18n/portfolio.ts` is the public-page dictionary and locale status
  registry.
- `content/i18n/project-content.ts` is the stable seam for localized project
  fields.
- `content/i18n/service-content.ts` is the stable seam for localized service
  fields.
- `content/i18n/translation-coverage.test.ts` fails when a locale marked
  `ready` is missing any English dictionary field.
- `content/i18n/routing-contract.test.ts` protects locale-prefix replacement
  and query-string preservation.

The English dictionary is the canonical source in this phase. Planned locales
intentionally have no partial dictionary. A locale must not be marked `ready`
until its public dictionary and project/service copy have been completed and
the coverage test passes.

## Theme and navigation compatibility

The five design systems remain presentation-only and are independent from the
selected language. Internal portfolio links are localized automatically while
the existing `design` query parameter continues to work. The language selector
builds its destination from the current browser URL, so it retains the current
page, project slug, query string, hash, and therefore the active visual-theme
selection.

The selector is available in the desktop header and the expanded mobile menu.
It exposes language names to assistive technology, has an active state, and
uses disabled, clearly labelled entries for planned locales. This prevents a
visitor from entering an untranslated public experience.

## SEO foundations

- The root document language comes from the locale attached by `proxy.ts`.
- `lib/i18n-metadata.ts` creates locale-aware canonical and Open Graph URLs.
- `hreflang` alternates include only locales that are ready, plus `x-default`
  pointing to English.
- The sitemap currently contains only English localized routes and project
  URLs. It will expand automatically when a locale becomes ready.
- Planned locale requests are no-index 404 pages rather than incomplete
  localized pages.

## Phase 2B.2 handoff

Phase 2B.2 should add complete, reviewed translations for all public dictionary
fields and the project/service content seams. Once a locale passes coverage,
change its status to `ready`; its selector entry, sitemap URL, metadata
alternates, and canonical localization will then become public without changing
the route contract.

## Validation

Completed during Phase 2B.1:

- `npm run lint`
- `npm run test:i18n`
- `npm run build`
- Production-handler route checks for legacy redirects, localized public pages,
  planned locale 404s, unknown locale 404s, and `/lab`.
- Server-rendered `/en/work/medichelp` check for `lang="en"` and localized
  internal contact links.

Browser automation could not be run in this environment because the sandbox
does not permit Playwright's macOS browser process to acquire its required
Mach port. It should be repeated in a normal local browser before enabling a
new locale publicly.
