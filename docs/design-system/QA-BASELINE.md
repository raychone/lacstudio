# Cross-system QA baseline

Baseline date: 2026-11-08. Scope: static repository inspection plus lint/build verification. This is not browser, assistive-technology or visual certification.

## Verification language

- **Implemented**: a category has a registered stage path and source implementation.
- **Statically inspected**: source wiring was read or mechanically checked.
- **Automatically tested**: lint/build completed; this proves neither interaction nor visual correctness.
- **Manually verified**: no status is granted in this baseline unless a browser/manual result is recorded.

## Actual architecture

| Concern | Current implementation | Baseline assessment |
| --- | --- | --- |
| Design registry | `design-system/engine/registry.ts` declares Tactile, Nocturne, Editorial, Brutalist and Playground. | Five typed IDs are present; all registry entries now remain `in-development` until QA is certified. |
| Category registry | `design-system/engine/categories.ts` is the ordered source for the twelve category IDs and default component IDs. | One ordered category contract is shared by all systems. |
| Workspace + URL | `DesignProvider` owns active design/category/component, reduced-motion, Compatibility fixture and typed comparison state; `design`, `category`, `component`, `compare`, `left` and `right` are pushed to the URL. | Design preference persists in local storage; category/component and valid comparison-pair state are URL-addressable. |
| Shared fixture | `design-system/showcase/schema.ts` defines all twelve reference fixtures; `SharedShowcase` renders them before signature experiments. | Shared copy and outer fixture type exist; identical internal dimensions are not mechanically enforced for every signature study. |
| System stages | Tactile remains in `app/page.tsx`; Nocturne, Editorial, Brutalist and Playground have dedicated workspace stages. | The stage mapping is complete but interaction/overlay helpers are duplicated across systems. |
| Style composition | `app/layout.tsx` imports global/theme CSS followed by system CSS; external geometry lives in `layout-contract.css` and `workspace.css`. | Import order and local hard-coded dimensions are a maintenance and regression risk. |
| Reduced motion | Manual Lab setting is context state, added as `reduce-motion` and passed to several system components. CSS also uses `prefers-reduced-motion` in selected areas. | There is no inspected provider-level `matchMedia` sync; coverage is not yet proven across all components. |
| Accessibility infrastructure | Native controls, ARIA roles and some local focus-trap hooks exist; reusable UI primitives are available under `components/ui/`. | The Lab does not consistently consume one accessibility primitive layer. Browser and screen-reader verification is pending. |

The untracked root-level `effects-interaction.css` was deliberately excluded from inspection, staging and commits. The distinct imported `app/effects-interaction.css` remains part of the application stylesheet chain.

## Inventory result

A corrected source scan found all twelve category paths in each of five system stages and all twelve shared showcase definitions. This confirms reachability at source level only. No missing import or active under-construction fallback was found for a registered category path; the fallback components remain in source as future guards.

See `QA-MATRIX.md` for the explicit 60-cell record.

## Shared geometry assessment

### Shared contract found

- Container: `--layout-container-max: 1440px`; `--layout-gutter: clamp(16px, 5vw, 80px)`.
- Workspace: shared two-column grid (`210px` sidebar + fluid stage) with `--layout-grid-gap`; stacks at `max-width: 760px`.
- Controls: Phase 3 now provides 32 / 36 / 44 / 52px size classes; documented target minimum is 44px.
- Preview helpers: card min 168px, feature stage min 280px, carousel min 255px, common overlay limits and table density token.
- Shared showcase has responsive breakpoints at 620px; Split View stacks at 760px.

### Risks to inspect in browser

1. The contract defines tokens, but individual system CSS still supplies many local min-heights, widths, padding and overlay bounds. Comparable outer geometry is therefore a convention, not an enforceable component API.
2. The workspace switches at 760px while the contract names 768px as tablet. Check 768px and nearby widths for an awkward intermediate layout.
3. Tables use explicit minimum widths and scroll wrappers in several systems; check 320px/375px focus order and horizontal scroll containment.
4. Decorative absolute shapes, dense display type and overlay-specific fixed positioning require visual overflow checks at every target width.
5. `--layout-target-min` is documented but not statically asserted on every icon action or compact control.

## Phase 3 sizing remediation record

The shared sizing token layer now maps component classes to 44px standard controls/fields, 16/24/32px card padding, shared overlay bounds and 280px standard carousel viewport bounds. Shared fixture categories declare their sizing class in source and the Split View renders the same fixture contract in each panel.

Static contract coverage does not prove computed dimensions in a browser. Tactile's approved signature experiments and intentionally compact/dense controls remain documented exceptions rather than forced visual matches. See `SIZING-CONTRACT.md`.

## Phase 4 responsive remediation record

Source inspection found and fixed an intermediate-width Split View compression path, aligned the shared workspace breakpoint to the 768px contract, and separated overlay preview height from overlay width. `RESPONSIVE-QA.md` records that the environment had no usable browser automation or reachable local preview, so these are source and contract-test results only.

## Comparison architecture assessment

Universal Split View is implemented through typed `ComparisonState` in `DesignProvider`. A pair selector offers every registered design on the left and right, with swap and exit controls. Both panels consume the current category/component and render `SharedShowcase` only, so they share reference content, variant state and outer fixture class while Signature Experiments remain outside comparison mode.

### URL schema

`?design=<active>&category=<category>&component=<component>&compare=1&left=<designId>&right=<designId>`

`left` and `right` must be distinct registered IDs. Invalid or duplicate values safely leave comparison disabled; valid old URLs without comparison fields continue as single-system URLs. Pair changes, swap and exit update the existing URL state mechanism, so Back/Forward restores them.

### Isolation and responsive strategy

- Each panel receives its own design root class and a separately mounted `SharedShowcase`, isolating local fixture state and system tokens.
- Signature Experiments, overlays and global command shortcuts are intentionally not mounted in comparison panels; this prevents duplicate document listeners or simultaneous command-palette ownership.
- The neutral control shell reports active category/component and rejects same-system selection without changing either displayed side.
- Panels use the existing equal-width grid and stack below 760px instead of compressing complex fixtures. No scroll-to-top behavior is added for pair changes.
- Reduced motion stays in the shared provider and therefore applies consistently to the two shared fixture previews. Per-system visual/manual behavior remains Phase 2 work.

## Interaction risk register (static inspection)

| Priority | Area | Static finding | Required next check |
| --- | --- | --- | --- |
| Critical | Overlays | Editorial, Brutalist and Playground each implement similar local focus-trap/scroll-lock hooks; Nocturne is already documented as lacking verified trap/restoration. | Keyboard trap, Escape, backdrop, nested/open-close sequencing and trigger restoration in every system. |
| High | Custom selectors | Custom listboxes exist in Nocturne, Brutalist and Playground; custom multi-select exists in Brutalist and Playground. | Arrow navigation, active descendant/focus strategy, Escape, outside click, touch and clipping. |
| High | Tabs/menus/context | ARIA roles appear in system studies, but focus movement is often state-only and menu dismissal differs by system. | Roving tabindex, focus hand-off, Escape, Shift+F10/ContextMenu and outside click. |
| High | Carousels/comparators | Keyboard and pointer handlers exist; carousel pointer capture/cancel coverage varies. | Touch swipe thresholds, boundary controls, live announcements and comparison pointer release. |
| Medium | Hold/loading/toasts | Timers and live regions exist in several systems, with local cleanup patterns. | Repeated activation, unmount cleanup, announcement timing and disabled/keyboard behavior. |
| Medium | Motion/effects | Most effects use scoped CSS variables; reduced-motion paths exist but are not uniformly verified. | Lab toggle + OS preference, coarse pointer, flashing, contrast and CPU behavior. |
| Medium | Forms/table/reorder/wizard | State is mostly local and functional in source. | Validation messages, label associations, sortable-table announcement, reorder semantics and wizard boundary states. |

## Phase 2 remediation record

The following P1 source-level remediations were completed on 2026-11-08. They are covered by lint/build and the focused pure keyboard-navigation test; they are **not** a substitute for a browser, touch or screen-reader audit.

| Area | Remediation | Remaining manual evidence |
| --- | --- | --- |
| Nocturne selector and dropdown | Added pointer-outside dismissal, Escape with trigger restoration, roving option/menu focus, Home/End where applicable, and labelled tab/panel relations. | Expanded-list clipping, touch target behavior, screen-reader announcements and contrast. |
| Nocturne overlays | `dismissible={false}` no longer exposes a bypass close control; the command palette now has modal semantics, backdrop dismissal, scroll lock, focus containment and trigger restoration. | Every overlay variant at narrow widths; nested sequencing; assistive-technology announcement. |
| Playground and Brutalist selectors | Added outside dismissal, keyboard opening, option focus traversal, Escape and trigger restoration to the project-type controls. | Multi-select remains a separate P2/manual review item; test touch and long labels. |
| Editorial, Brutalist, Playground tabs | Added roving tabindex, focus hand-off, Home/End and tab/panel IDs using one shared keyboard helper. | Browser keyboard-only walk-through and visible branded focus review. |

The persistent custom multi-select studies, context-menu placement, carousel/comparator touch paths, reduced-motion coverage and form/table/reorder semantics remain P2/manual review items. No P0 defect was established by source inspection or automated checks.

## Expanded selector register

| System | Static implementation | Current risk / recommended remediation |
| --- | --- | --- |
| Tactile | Shared fixture uses native `<select>`; Tactile disclosure has custom dropdown/popover primitives. | Keep native select until a tested custom primitive is required. Browser-review the native expanded menu and custom dropdown styling/escape/outside-click separately. |
| Nocturne | `NocturneSelect` is custom listbox with selected marker, pointer-outside dismissal and roving keyboard focus. | Source remediation is complete; manually inspect dark contrast, viewport clipping and screen-reader behavior. |
| Editorial | Form uses native controlled `<select>`; disclosure has custom menu. | Native select is accessible but its browser-expanded visual is not system-specific; decide in Phase 2 whether a tested custom primitive is justified. Audit custom menu keyboard/dismissal. |
| Brutalist | Custom `BrutalistSelect` plus persistent custom multi-select listbox. | Project-type control has source-level keyboard/dismissal remediation; multi-select, touch and long-label overflow remain manual review. |
| Playground | Custom project-type combobox and expandable multi-select listbox. | Project-type control has source-level keyboard/dismissal remediation; multi-select, touch and stacking remain manual review. |

## Existing testing capability

`package.json` exposes `lint`, `build`, `test:comparison` and `test:interactions`. The latter is a dependency-free test for the shared roving-index helper, not DOM or browser automation. No authored integration, E2E, Playwright, Cypress, Vitest or Jest suite was found. The production build is a Vinext/Vite compilation check, not an interaction or visual test.

## Recommended remediation order

1. Phase 1: typed generalized comparison state and pair-safe shared fixture view.
2. Phase 2: critical interaction/accessibility paths — overlays first, then selectors/menus, tabs and keyboard/focus routines.
3. Phase 3: 320/375/768/1024/1440 responsive runs, including overflow/table/carousel/overlay checks.
4. Phase 4: visual polish informed by the measured findings, never by compilation alone.
5. Phase 5: regression matrix, manual approval and documented certification criteria.

## Manual QA still required

All five systems need browser verification for keyboard-only operation, screen readers, focus visibility, menu expansion, touch, reduced motion, overlays, carousel/comparator gestures, contrast and responsive geometry. No manual verification is claimed by this document.

## Phase 4.5 browser update

Automated Chromium now covers all direct design/category URL states across six viewport widths and verifies document-level overflow, fixture visibility and captured runtime/console errors. It also smoke-checks one stacked Split View pair, URL swap/exit, keyboard focus and the Lab reduced-motion state. This is automated browser evidence only; the manual checks listed above, particularly expanded state and assistive-technology coverage, remain required. See `BROWSER-QA.md`.

## Phase 5A interaction update

Representative expanded-state browser coverage now tests custom select keyboard/open/select/Escape/outside-dismissal behavior, native Editorial select semantics, disclosure menus, accordions/tabs, modal focus restoration, a command palette and representative advanced controls. The verified P1 selector/overlay semantic gaps are remediated. This does not replace the pending complete overlay-variant, physical-touch, screen-reader, contrast or owner visual review; see `EXPANDED-STATES-QA.md`.
