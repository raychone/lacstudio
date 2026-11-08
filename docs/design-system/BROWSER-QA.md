# Browser QA — Phase 4.5

Date: 2026-11-08. This is automated Chromium evidence, not a manual visual, touch or screen-reader certification.

## Runtime and runner

- Package manager: npm (`package-lock.json`).
- Framework: Vinext/Vite. The supported development command is `npm run dev -- --port 4174`.
- Actual preview: `http://127.0.0.1:4174`, HTTP 200.
- Browser runner: `@playwright/test` 1.65.0 with Playwright Chromium 158.0.8127.18.
- Command: `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4174 npm run test:browser`.

The prior unreachable Vinext lock on port 5173 was moved aside as `.vinext/dev/lock.phase45-stale.json`; the active QA server was started separately on 4174. The generated state is ignored by Git.

## Rendered matrix

The browser suite navigated direct URL states for all five systems and all twelve shared categories. It asserted the requested design root, category heading and shared fixture, checked document-level horizontal overflow, collected console/runtime errors, and saved full-page screenshots.

| Coverage | Result |
| --- | --- |
| Systems | Tactile, Nocturne, Editorial, Brutalist, Playground |
| Categories | Foundations, Typography, Actions, Forms, Disclosure, Feedback, Data Display, Carousels, Overlays, Advanced, Motion, Effects |
| Viewports | 320×700, 375×812, 768×1024, 900×900, 1024×768, 1440×900 |
| Rendered states | 360 direct URL combinations passed; no runtime or console error and no document-level horizontal overflow |
| Artifact location | `qa-artifacts/responsive/<system>/<category>-<width>.png` (ignored; 360 files) |

## Browser smoke evidence

- Split View: Editorial/Brutalist at 900px stacked vertically, displayed the requested systems, swapped URL sides, and exited cleanly.
- URL behavior: Split View persisted the requested pair through direct URL state and removed comparison parameters on exit.
- Keyboard: the first tab stop was visible; the shared primary action was keyboard-reachable.
- Reduced motion: the Lab control applied the `reduce-motion` root class in Chromium.

## Confirmed defects fixed during QA

1. At 320px the five-design switcher could increase document width instead of confining its horizontal strip.
2. Editorial Feedback's single-column grid could grow to 432px.
3. Editorial Data Display and Brutalist Data Display/Motion had implicit grid tracks that adopted signature-study min-content widths.
4. The reduced-motion control had no accessible name.

The fixes only constrain layout tracks and add the control label; visual design, component families and system identities were not redesigned.

## Remaining limits / Phase 5 input

- This suite does not certify physical touch, screen-reader announcements, contrast, performance or human visual approval.
- Expanded custom select, multi-select, dropdown, context-menu, popover, modal, drawer, sheet and command variants still need a dedicated interaction matrix with state screenshots. Existing direct rendering proves their category layout only, not each expanded surface.
- Browser-native select menus cannot be reliably screenshot or styled by this suite.
- The one split pair is an automated smoke check; the Tactile/Nocturne and Playground/Tactile pairs remain manual visual-review targets.

Do not infer production approval from this record.
