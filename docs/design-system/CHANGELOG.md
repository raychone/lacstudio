# Design-system changelog

## 2026-11-07 — Phase A

- Recorded the pre-expansion checkpoint: `04f81eb`.
- Audited the current local LAC Design Lab.
- Documented architecture, foundations, inventory, motion, effects, accessibility, testing and phased roadmap.
- No visual behavior was intentionally changed in this documentation step.

## 2026-11-07 — Phase B / foundations start

- Introduced semantic foundation tokens while retaining the existing `--neo-*` aliases.
- Kept all five existing palettes and their computed values unchanged.

## 2026-11-07 — Multi-design engine / Nocturne start

- Added the typed five-design registry and safe client-side active-design persistence.
- Added the global Design Lab selector with Tactile, Nocturne, Editorial, Brutalist and Playground.
- Registered the existing Lab as Tactile and introduced Nocturne's first independent presentation layer.
- Nocturne is intentionally marked in development; its components have not received visual approval yet.

## 2026-11-07 — Nocturne architecture correction

- Replaced the Nocturne CSS override approach with an independent component tree and design-specific stylesheet.
- Added distinct Nocturne component studies for typography, actions, motion, effects, cards, inputs, accordions and dialogs.
- Kept Tactile's existing component tree and presentation intact.

## 2026-11-07 — Nocturne Batch 1

- Added reusable Nocturne action and form component modules.
- Added live action, validation, password-visibility and signal-setting demonstrations to the Nocturne Lab.

## 2026-11-07 — Nocturne Batch 2

- Added reusable disclosure and feedback modules.
- Added dedicated Disclosure and Feedback Lab studies with interactive menus, notifications and progress controls.

## 2026-11-07 — Nocturne Batch 3

- Added reusable data-display and carousel modules.
- Added interactive cards, activity primitives, sortable/paginated table and four manual carousel studies.

## 2026-11-07 — Nocturne Batch 4

- Added reusable overlay foundation with focus containment, Escape dismissal, scroll lock and trigger-focus restoration.
- Added overlay variants, command palette and advanced-interaction studies.

## 2026-11-07 — Nocturne Batch 5

- Extracted reusable motion and effects primitives with replay and reduced-motion behavior.
- Added the Nocturne visual/interactions review-readiness record.

## 2026-11-07 — Tactile compatibility Phase A

- Added neutral cross-system layout tokens and the initial Compatibility playground.
- Recorded the actual Tactile/Nocturne coverage comparison and Tactile expansion gaps.

## 2026-11-07 — Tactile Phase B / Disclosure & Feedback

- Added an independent Tactile Disclosure library: accordion (single and multiple), arrow-key tabs, collapsible content, tooltip, popover, dropdown menu, context menu, hover card, segmented control and breadcrumb.
- Added an independent Tactile Feedback library: accessible toast and alerts, status badges, linear/circular progress, spinner, skeletons, empty/error/success states and step indicators.
- Added dedicated interactive Disclosure and Feedback sections to the Tactile Lab.
- Preserved Tactile's warm raised and recessed surface language; Nocturne's visual implementation was not changed.
- Verified with `npm run lint` and `npm run build`; browser-based responsive, keyboard and assistive-technology checks remain owner-review work.

## 2026-11-07 — Phase B.5 / Unified library architecture

- Added one shared twelve-category registry for Tactile and Nocturne, with Compatibility retained as a separate development utility.
- Consolidated Tactile's former approved-components shelf into Forms, Disclosure, Data Display, Carousels, Overlays, Advanced and Effects.
- Kept all Tactile demonstrations available, including its original single-focus accordion and navigation study.
- Added restrained per-category maturity labels; no category is called Stable solely because it compiles.
- Kept Nocturne's midnight, violet and cinematic visual language unchanged.

## 2026-11-07 — Phase B.6 / Unified Lab workspace

- Replaced the active Tactile and Nocturne Lab compositions with one switcher → sidebar → stage workspace.
- Added URL-addressable design, category and component selection, plus Back/Forward restoration through browser history.
- Added stable shared component identifiers and component-based, non-animated scroll anchoring on system switches.
- Kept Compatibility as a separate utility while sharing its fixture length, narrow viewport and reduced-motion settings through the Lab state layer.
- Preserved the earlier marketing/hero compositions in source for future portfolio work; they are no longer part of the active Lab.

## 2026-11-07 — Phase B.7A / Shared component showcase

- Added a small design-neutral showcase schema for stable component IDs, common reference content, variants and size classes.
- Added common comparison references for Foundations, Typography, Actions and Forms before each system’s preserved original studies.
- Labeled original category studies as Signature Experiments rather than deleting, flattening or moving them into a separate approved library.
- Bounded the Tactile Actions comparison area to prevent its editorial copy from overlapping the circular button surface in the unified stage.
- Deferred Disclosure through Effects to B.7B; no new component category was started.
