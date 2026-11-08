# Cross-system QA matrix

Baseline date: 2026-11-08. Legend: **I** implemented; **S** statically inspected as stage + shared fixture wiring; **A** included in a successful repository lint/build run; **M—** not manually verified; **D—** no baseline defect proven by static inspection. `A` is repository-wide, not a per-cell behavioral test.

| System | Foundations | Typography | Actions | Forms | Disclosure | Feedback | Data Display | Carousels | Overlays | Advanced | Motion | Effects |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tactile | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Nocturne | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Editorial | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Brutalist | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Playground | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |

## Phase 2 source-level status

- P1 remediation landed for Nocturne forms/disclosure/overlays and the Playground/Brutalist project-type selectors; Editorial, Brutalist and Playground tab studies share tested roving-key behavior.
- `test:interactions` proves only the pure Arrow/Home/End index contract. All cells remain `M—`: no browser, touch, screen-reader or visual approval is claimed.
- Custom multi-selects, carousel/comparator gestures, contextual menus and most responsive evidence remain pending manual review.

## Phase 3 sizing status

- Every shared fixture category now carries one of the tested `control`, `form` or `content` sizing classes; the same class is rendered in either Split View panel.
- Standard equivalent action/field/tab controls receive the 44px MD contract in the systems that expose those classes. Compact/expressive variants are retained as explicit exceptions.
- No cell receives manual responsive approval from this source-level work; overflow and computed geometry remain `M—` pending browser evidence.

## Phase 4 responsive status

- `test:responsive` validates the shared workspace's 768px collapse, the <=900px Split View stack, selector-grid geometry and the explicit overlay preview-height token.
- Browser-rendered coverage is **none** in this environment: no browser runner was available, and the pre-existing local Vinext server lock did not provide a reachable port. No visual, touch or screen-reader cell status changed.
- `RESPONSIVE-QA.md` contains the exact source-audit findings, fixes and required manual viewport matrix.

## Baseline notes

- Mechanical scan: five system-stage sources each expose all twelve category paths; the shared showcase schema defines all twelve fixture categories.
- `D—` means no defect was established by this static baseline. It is not a functional approval.
- The highest-priority manual rows are every system's Forms, Disclosure, Overlays, Advanced, Motion and Effects. Tactile/Nocturne comparison behavior is additionally covered by the Phase 1 proposal in `QA-BASELINE.md`.
- Browser widths still pending: 320, 375, 768, 1024 and 1440px.
- Phase 1 added unit-level coverage for comparison URL parsing, invalid-pair recovery, same-system rejection, swap and exit serialization. Phase 2 added a focused roving-index keyboard contract. Neither replaces browser validation of the selector UI or panel isolation.

## Phase 4.5 browser baseline

- Chromium rendered all 360 direct URL states: five systems × twelve categories × six viewports (320, 375, 768, 900, 1024 and 1440px). Every state loaded its requested design/category fixture with no document-level horizontal overflow or captured runtime/console error.
- Screenshots are local, ignored artifacts under `qa-artifacts/responsive/`; see `BROWSER-QA.md` for the exact runtime and limits.
- This changes the matrix from browser-unrendered to browser-rendered layout baseline only. Expanded overlays/selectors, touch, screen-reader, contrast and owner visual approval remain open.

## Phase 5A interaction baseline

- Playwright now covers custom select keyboard/open/select/Escape/outside-dismissal paths, native Editorial select semantics, disclosure menus/accordion/tabs, modal open/Escape/focus restoration, Nocturne command focus and representative advanced controls.
- 35 ignored local screenshots record open or active states at 375px and 1440px. This is reproducible Chromium evidence, not full variant, touch, screen-reader or visual acceptance. See `EXPANDED-STATES-QA.md`.

## Phase 5B.1 Tactile visual polish

- Tactile now has a design-scoped materiality, focus, selector and overlay polish layer. The other four system roots, shared geometry tokens and breakpoint contract were not changed.
- `tactile-visual-polish.spec.ts` records 60 rendered states across every Tactile category at 320, 375, 768, 1024 and 1440px with no document-level horizontal overflow. See `TACTILE-VISUAL-QA.md`.
- This is browser-rendered visual evidence, not a contrast, touch, screen-reader or owner-approval result; matrix cells remain `M—` for those manual dimensions.
