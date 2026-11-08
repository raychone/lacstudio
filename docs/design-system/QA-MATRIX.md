# Cross-system QA matrix

Baseline date: 2026-11-08. Legend: **I** implemented; **S** statically inspected as stage + shared fixture wiring; **A** included in a successful repository lint/build run; **M—** not manually verified; **D—** no baseline defect proven by static inspection. `A` is repository-wide, not a per-cell behavioral test.

| System | Foundations | Typography | Actions | Forms | Disclosure | Feedback | Data Display | Carousels | Overlays | Advanced | Motion | Effects |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tactile | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Nocturne | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Editorial | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Brutalist | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |
| Playground | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— | I/S/A/M—/D— |

## Baseline notes

- Mechanical scan: five system-stage sources each expose all twelve category paths; the shared showcase schema defines all twelve fixture categories.
- `D—` means no defect was established by this static baseline. It is not a functional approval.
- The highest-priority manual rows are every system's Forms, Disclosure, Overlays, Advanced, Motion and Effects. Tactile/Nocturne comparison behavior is additionally covered by the Phase 1 proposal in `QA-BASELINE.md`.
- Browser widths still pending: 320, 375, 768, 1024 and 1440px.
