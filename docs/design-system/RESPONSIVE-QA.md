# Responsive and layout QA — Phase 4

Date: 2026-11-08. Scope: responsive source audit plus deterministic contract tests. This record deliberately separates automated source evidence from rendered browser evidence.

## Environment and available tooling

| Capability | Result |
| --- | --- |
| Playwright / installed browser | Not available: no Playwright, Chromium, Chrome, Firefox or browser-control tool was present. |
| Repository browser suite | Not available: no Playwright/Cypress/Vitest browser configuration was found. |
| Local preview | Not verified: Vinext reported a pre-existing development server on `127.0.0.1:5173`, but that port did not accept a connection. The existing lock/process was not altered. |
| Screenshots | None created; no rendered viewport or screenshot result is claimed. |

## Actual coverage

| Evidence type | Widths | Systems/categories | Status |
| --- | --- | --- | --- |
| Static source audit | 320, 375, 768, 1024, 1440 targets and the 760–900 boundary | Five stage implementations and all twelve registered shared-fixture categories | Completed as source inspection only. |
| Automated responsive contract | Breakpoint and shared fixture rules | Shared workspace and Split View CSS | Passed via `npm run test:responsive`. |
| Browser-rendered layout | None | None | Not verified. |
| Visual review, touch, screen reader | None | None | Not verified. |

## Defects found and remediation

| Severity | Finding | Evidence | Fix |
| --- | --- | --- | --- |
| P1 | Split View retained two narrow panels and a five-item control grid below the width that can accommodate their documented minimum columns. | Source geometry: the sidebar remains present above the narrow workspace breakpoint, leaving insufficient stage width around 769–900px. | Split View now stacks panels and uses a three-column selector row at `max-width:900px`. |
| P2 | Shared workspace switched at 760px while the contract declares the tablet breakpoint as 768px. | Source audit. | Workspace and sizing-contract narrow rules now switch at 768px. |
| P2 | The shared overlay preview borrowed an overlay *width* token as a preview *height*. | Source audit. | Added `--layout-overlay-preview-min:240px`; overlay preview uses that explicit height token. |

## Responsive rules verified by source

- Workspace becomes a single column at <=768px; sidebar category navigation becomes a two-column grid.
- Split View stacks at <=900px before panels can become too narrow; selectors remain in a two-select-plus-swap row.
- Shared fixtures reduce padding at <=768px and retain content-driven growth.
- Tables retain their own scrolling wrappers; no global page-level overflow workaround was introduced.
- Modal, command and carousel bounds use the sizing contract, with viewport-constrained widths and content-safe minimum heights.

## Remaining manual browser checks

At 320, 375, 768, 1024 and 1440px, inspect all five systems and twelve categories for: actual horizontal overflow; long text wrapping; custom select/multi-select placement; tables; carousel gestures; overlay keyboard-visible areas; effects clipping; Split View pair switching; touch target usability; and visual readability. Test at least Tactile/Nocturne, Editorial/Brutalist and Playground/Tactile in Split View.

This document does not mark any system production-ready.

## Phase 4.5 rendered follow-up

Phase 4.5 replaced the unavailable-runner condition above with a local Playwright Chromium baseline. The full five-system/twelve-category matrix rendered at 320, 375, 768, 900, 1024 and 1440px (360 states) without document-level horizontal overflow or captured runtime/console error. The artifact directory is ignored by Git. See `BROWSER-QA.md` for the exact command, screenshots, confirmed fixes and remaining expanded-state, touch, screen-reader and visual-review limits.
