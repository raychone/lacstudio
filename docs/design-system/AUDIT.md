# LAC Design Lab audit

_Baseline audited: 2026-11-07 · checkpoint: `04f81eb0249763262031fb53a71334c2a642fd64`_

## Scope and current shape

The current product is a single, client-rendered Design Lab at `/`. It contains the studio preview, the experimental lab, an approved-components shelf, a work carousel, principles, and contact. The requested portfolio routes do not exist yet; they are deliberately out of scope for the first expansion work.

The app is a Vinext / Vite project using Next 16, React 19 and a Cloudflare Worker runtime. `app/page.tsx` is the only authored page and currently owns all component markup and interactive state. `app/layout.tsx` imports the global stylesheet plus fifteen Lab override stylesheets.

## Baseline verification

| Check | Result | Notes |
| --- | --- | --- |
| `npm run build` | Pass | Vinext production build completed on 2026-11-07. |
| `npm run lint` | Fails | Two `react/no-unescaped-entities` errors at `app/page.tsx:310` and `:319`; two unused LabPanel props at `:155`. |
| Automated tests | Not present | No authored unit, integration, or end-to-end test suite was found. |
| Manual responsive / accessibility QA | Not yet recorded | Required before a component is promoted beyond the Lab. |

## Design-system findings

### What is working

- The chosen Warm Cream neumorphic direction is implemented with a live palette selector.
- The approved shelf separates reviewed Accordions, Inputs, Navigation, Cards, Carousels, Overlay previews, and the Spotlight from experiments.
- Buttons, typography, motion studies, effect studies, input selection, carousel controls, modal/drawer/command previews, and reduced-motion control have working interaction code.
- Existing UI primitives in `components/ui/` can support future production components without adding a dependency.

### Risks to resolve incrementally

1. **CSS layering:** `globals.css` is large and compacted; fifteen additional files override one another based on import order and `!important`. This makes a local visual change hard to reason about.
2. **Single-page ownership:** `app/page.tsx` combines data, state, previews and page composition. Components cannot yet be reused by future portfolio routes.
3. **Token drift:** palette variables exist, but colors, spacing, radii and shadows are also hard-coded throughout the sheets.
4. **Accessibility gaps:** buttons and inputs are generally semantic, but overlay focus management, Escape dismissal, select/listbox semantics, keyboard carousel use, focus visibility and contrast have not been verified.
5. **Motion control:** the Lab toggle only controls some JavaScript autoplay and depends on CSS conventions that are not centrally documented.
6. **Untested interaction:** the project builds but has no browser regression coverage.

## Source boundaries

- `app/page.tsx`: current Lab composition and interactive demos.
- `app/*.css`: visual language and overrides; consolidation target, not a deletion target.
- `components/ui/`: vendored shadcn-style primitives, currently mostly separate from the Lab.
- `worker/`, `db/`, `lib/`, `scripts/`: starter/hosting infrastructure, not part of the Design Lab scope.
- `effects-interaction.css` at repository root: untracked duplicate artifact, not imported by `app/layout.tsx`. It was intentionally left untouched and excluded from the baseline checkpoint.

## Recommended migration rule

Keep the current Lab visible. When a category is expanded, extract only that category into a namespaced Lab component and move only its verified values into shared tokens. Do not rewrite all stylesheets at once.
