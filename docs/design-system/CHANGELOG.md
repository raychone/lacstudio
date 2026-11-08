# Design-system changelog

## 2026-11-08 — Cross-System QA Phase 5B.2 / Nocturne visual polish

- Added a Nocturne-only polish layer for readable text roles, controlled navy glass elevation, violet focus/selected states, custom menu/select separation, information cards and overlay layers.
- Preserved Phase 5A behavior, shared dimensions, reduced-motion handling and the visual implementations of Tactile, Editorial, Brutalist and Playground.
- Added reproducible Nocturne browser coverage across all twelve categories at 320, 375, 768, 1024 and 1440px plus expanded select/command captures.
- Recorded the audit, opaque-role contrast calculations, remaining manual checks and owner-approval request in `NOCTURNE-VISUAL-QA.md`; Nocturne remains in development.

## 2026-11-08 — Cross-System QA Phase 5B.1 / Tactile visual polish

- Added a Tactile-only visual polish layer for controlled warm elevation, stronger muted-text contrast, deep-sage focus and selected states, custom selector separation, cards and contained overlays.
- Preserved shared geometry, existing accessibility interactions and the visual implementations of Nocturne, Editorial, Brutalist and Playground.
- Added reproducible Tactile-only browser coverage across all twelve categories at 320, 375, 768, 1024 and 1440px, with ignored local screenshots for review.
- Recorded the visual audit, evidence, remaining manual checks and owner-approval request in `TACTILE-VISUAL-QA.md`; Tactile remains in development.

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

## 2026-11-07 — Phase B.7B / Complete shared showcase parity

- Extended the existing showcase schema and comparison renderer to Disclosure, Feedback, Data Display, Carousels, Overlays, Advanced, Motion and Effects.
- Added common fixtures, variants/state labels and shared outer preview boundaries for all twelve categories.
- Kept every original system study beneath the reference layer as a Signature Experiment; no Tactile or Nocturne effect, animation or interaction was removed.
- Preserved URL component selection, switching, scroll anchoring and reduced-motion behavior from Phase B.6.

## 2026-11-07 — Editorial Phase 0 + 1

- Activated Design 03 Editorial in the shared Lab workspace.
- Added warm-paper foundations, ink/rule hierarchy, oxblood accent and an editorial focus treatment.
- Added shared-contract Foundations and Typography references plus original publication-style signature studies.
- Added intentional development states for the ten Editorial categories not included in this phase.

## 2026-11-07 — Editorial Phase 2

- Added functional Editorial Actions, Forms, Disclosure and Feedback categories.
- Added numbered, ink and underline action studies; correspondence form; publication-index disclosure; and proof-status feedback studies.
- Kept common reference fixtures and shared workspace dimensions intact; Data Display through Effects remain intentionally pending.

## 2026-11-07 — Editorial Phase 3

- Added functional Editorial Data Display, Carousels, Overlays and Advanced categories.
- Added an editorial feature index, publication data story, rule-led timeline, magazine-spread and featured-story sequences, paper-sheet overlay studies, command index, preference composer, step-by-step composer and layout comparator.
- Kept shared reference fixtures and external workspace dimensions intact; Motion and Effects remain intentionally pending.

## 2026-11-07 — Editorial Phase 4

- Added functional Editorial Motion and Effects categories, completing Editorial's twelve-category Lab implementation.
- Added replayable fade, directional reveal, stagger, scale, text mask, restrained settle and exit studies, plus typesetting, sequence, column and publication-exit compositions.
- Added CSS-first ink, rule, paper, typography, image-frame and composition effects without canvas loops or luminous visual language.
- Made the shared Motion fixture replay control functional and recorded the expanded-menu polish checklist for later QA.

## 2026-11-07 — Brutalist Phase 0 + 1

- Activated Design 04 Brutalist in the shared Lab without changing the Tactile ↔ Nocturne Split View or shared category geometry.
- Added independent industrial tokens, hard-edge workspace treatment, safety-orange signal accent, Foundations and Typography common fixtures.
- Added structural colour, grid, module and hierarchy studies plus monumental poster, indexing, label, dense-information and responsive-type experiments.
- Added deliberate under-construction states for the ten categories outside this phase.

## 2026-11-07 — Brutalist Phase 2

- Added functional Brutalist Actions, Forms, Disclosure and Feedback categories.
- Added numbered command actions, mechanical hold-to-confirm, an industrial configuration form with custom option list, structural disclosure panels and instrumentation-style feedback.
- Kept shared fixtures and outer geometry intact; Data Display through Effects remain intentionally pending.

## 2026-11-08 — Brutalist Phase 3

- Added functional Brutalist Data Display, Carousels, Overlays and Advanced categories.
- Added industrial data grid, signal metrics board, production timeline, manual slide machines, control-surface overlays, command index, parameter console, configuration wizard and structural comparison instrument.
- Kept shared fixtures and external dimensions intact; Motion and Effects remain intentionally pending.

## 2026-11-08 — Brutalist Phase 4

- Added functional Brutalist Motion and Effects categories, completing the twelve-category Brutalist Lab implementation.
- Added replayable mechanical motion primitives plus stamp, grid assembly, signal sequence and exit/replay studies.
- Added CSS-first signal inversion, grid reveal, edge tracking, controlled scan, offset and typographic-interference studies without particle loops or glow.
- Extended the final polish checklist for custom option lists, overlays, touch/swipe, responsive geometry, contrast and reduced motion.

## 2026-11-08 — Playground Phase 0 + 1

- Activated Design 05 Playground in the shared Lab without changing the shared workspace or Split View.
- Added independent expressive tokens, organic geometry and Foundations/ Typography shared fixtures.
- Added Color Playground, Shape Grammar, Composition Playground, interactive colour study, expressive poster, numbering, labels, type/shape and responsive-type studies.
- Added deliberate under-construction states for the ten categories outside this phase.

## 2026-11-08 — Playground Phase 2

- Added functional Playground Actions, Forms, Disclosure and Feedback categories while retaining the shared Lab fixture bounds and comparison behavior.
- Added shape-shifting command controls, copy/toggle/split controls and a hold-to-confirm interaction with keyboard support and reduced-motion fallback.
- Added a Preference Builder with validation, expressive custom checkbox/switch controls and a deliberately styled expanded project-type option list.
- Added single/multi accordion, keyboard tabs, tooltip, hover card, popover, dropdown, context menu, segmented control and breadcrumb examples, plus live toast notifications, numeric progress, loading/result states and a controlled celebration.
- Kept Data Display through Effects intentionally pending; custom option-list, touch and assistive-technology QA remain manual review work.

## 2026-11-08 — Playground Phase 3

- Added functional Playground Data Display, Carousels, Overlays and Advanced categories without changing the shared Lab shell, Split View or reference bounds.
- Added varied cards, interactive bento/metrics/timeline studies and a sortable, paginated table.
- Added manually controlled content, media, shape-shifting and story-machine carousels with keyboard and pointer-swipe paths.
- Added modal, confirmation, drawer, sheet, lightbox and command palette surfaces with Escape, focus trap and trigger restoration.
- Added tag input, custom expanded multi-select, range, rating, reorder controls, configuration wizard and pointer/range-driven comparison slider.
- Kept Motion and Effects intentionally pending; expanded-list, overlay, touch and assistive-technology QA remain manual review work.

## 2026-11-08 — Playground Phase 4

- Added functional Playground Motion and Effects categories, completing the twelve-category Design 05 inventory and the five-system, sixty-category implementation milestone.
- Added replayable fade, directional, stagger, scale, text mask, spring and exit primitives plus Elastic Typography, Shape Morph, Kinetic Color, Stagger Orchestra and Motion Mixer studies.
- Added bounded CSS-first color-field, shape-response, organic-spotlight, cutout-layer and edge-energy effects plus Color Collision, Magnetic Shapes, Organic Spotlight, Cutout Studio and Edge Energy studies.
- Passed the Lab reduced-motion setting into both categories and used static/near-instant states for reduced motion; pointer decoration uses scoped CSS custom properties rather than a global animation loop.
- Kept final visual, responsive, keyboard, touch, contrast, screen-reader, overlay and performance QA explicitly deferred.

## 2026-11-08 — Cross-System QA Phase 0

- Added a source-inspected architecture baseline, explicit 60-cell inventory matrix and proposed five-phase QA roadmap.
- Recorded shared layout tokens, stage/provider/fixture architecture, selection persistence and the current Tactile–Nocturne-only Split View constraints.
- Distinguished implementation/static inspection/automated compilation from manual browser and accessibility verification.
- Recorded selector, overlay, keyboard, responsive, reduced-motion, contrast and performance risks without redesigning or refactoring components.

## 2026-11-08 — Cross-System QA Phase 1

- Replaced the hard-coded Tactile ↔ Nocturne Split View with typed universal pair state for any two of the five registered systems.
- Added left/right selectors, same-pair rejection feedback, swap and exit controls, equal fixture panels and narrow-width stacking.
- Extended the existing URL state with `compare=1`, `left` and `right`; invalid pair input safely returns to a valid single-system state while old URLs continue to work.
- Added dependency-free focused comparison tests for URL restoration, invalid values, duplicate selection, swap and exit serialization.
- Kept comparison panels limited to the shared fixture layer, isolating Signature Experiments and their global listeners from paired rendering.

## 2026-11-08 — Cross-System QA Phase 2

- Added a shared, dependency-free roving-key helper with focused Arrow/Home/End boundary tests.
- Remediated Nocturne custom selector, dropdown, tabs, non-dismissible confirmation close integrity and command-palette dialog behavior.
- Remediated Playground and Brutalist project-type selectors; added roving focus, semantic tab/panel relationships and Home/End behavior to Editorial, Brutalist and Playground tab studies.
- Preserved the universal comparison contract and all system-specific visual styles; no global geometry or responsive redesign was introduced.
- Passed `test:comparison`, `test:interactions`, lint and production build. Browser, touch, screen-reader and responsive visual verification remain explicitly pending.

## 2026-11-08 — Cross-System QA Phase 3

- Expanded the shared layout tokens into a five-system sizing contract for controls, fields, card padding, carousel viewports, overlays, commands and table density.
- Added typed fixture sizing metadata and a focused sizing test so every shared category carries a valid external geometry class in Split View.
- Applied the standard geometry to equivalent shared fixtures and named signature control classes while preserving system typography, radius, borders, shadows, motion and expressive variants.
- Recorded observed pre-contract differences and manual responsive limitations in `SIZING-CONTRACT.md`; no production-ready or pixel-parity claim is made.

## 2026-11-08 — Cross-System QA Phase 4

- Added a focused responsive contract test and corrected the intermediate-width Split View compression path by stacking paired fixtures before the stage becomes too narrow.
- Aligned the shared workspace and sizing-layer narrow breakpoint to 768px; added an explicit overlay-preview height token rather than reusing a width constraint as height.
- Added `RESPONSIVE-QA.md` with the actual tooling limitation: no available browser runner and no reachable existing local preview port. No rendered, visual, touch or screen-reader result is claimed.

## 2026-11-08 — Cross-System QA Phase 4.5

- Added Playwright Chromium configuration and a browser matrix covering all five systems, twelve categories and six responsive/boundary viewports.
- Generated 360 ignored local screenshots and verified the requested URL state, shared fixture visibility, no document-level horizontal overflow and no captured runtime/console error.
- Added browser smoke coverage for Split View URL/swap/exit behavior, visible keyboard focus and the reduced-motion root state.
- Fixed confirmed narrow-width overflow in the design switcher and Editorial/Brutalist signature-study grid wrappers; labelled the reduced-motion control.
- Recorded exact evidence, limitations and the remaining expanded-state/touch/screen-reader work in `BROWSER-QA.md`.

## 2026-11-08 — Cross-System QA Phase 5A

- Added Playwright interaction coverage and 35 ignored open/active-state screenshots at mobile and desktop dimensions.
- Validated representative custom/native select, disclosure, modal, command, advanced-control and reduced-motion paths without changing the five visual languages or shared sizing contract.
- Remediated Tactile custom select and contained overlay semantics/focus behavior, plus the Nocturne custom select combobox relationship.
- Recorded the component inventory, verified scope, defects and manual limits in `EXPANDED-STATES-QA.md`; Phase 5B visual polish remains deferred.
