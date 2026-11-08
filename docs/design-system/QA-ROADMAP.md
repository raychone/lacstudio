# Cross-system QA roadmap

This is a proposed order based on the Phase 0 static baseline. It intentionally separates structural work, functional accessibility, responsive evidence and visual refinement.

## Phase 1 — Shared comparison infrastructure (complete in source; manual QA pending)

Generalize Split View to any two typed design IDs while preserving the existing Tactile–Nocturne default. Keep category/component/fixture selection synchronized, use the existing shared showcase bounds, preserve URL coherence and avoid scroll resets. Signature Experiments remain independent and are not flattened into comparison panels.

Implemented: typed pair state, all-five-system selectors, swap/exit, URL serialization, invalid-pair recovery, equal-width panel grid and narrow stacked panels. The original Tactile–Nocturne pair remains available as the default. Manual browser validation of selector controls, direct links and panel isolation remains pending.

## Phase 2 — Functional and accessibility QA (source-level P1 remediation complete; manual QA pending)

Audit and remediate overlays, selectors, menus, tabs, carousels, comparators, forms, live feedback and reduced motion. Start with focus traps/restoration, Escape behavior, custom listbox/menu keyboard handling and selected-state announcements. Reuse or improve accessible primitives only after behavior is measured.

Completed in source: P1 selector/menu/tab focus fixes, Nocturne command-dialog remediation, confirmation-overlay close integrity and a dependency-free roving-key test. The formal exit criteria are still open because manual browser, touch and screen-reader checks have not been recorded.

Remaining exit criteria: keyboard-only scripts pass for critical paths; expanded selectors are readable and system-specific; no known focus-loss or trapped-background defect remains; screen-reader checks are recorded.

## Phase 3 — Unified sizing contract (source complete; responsive evidence pending)

Implemented in source: the shared sizing contract, fixture size metadata, common control/field/card/overlay/carousel bounds, Split View fixture consistency and focused token coverage. This is structural normalization, not responsive visual approval.

Remaining work: run every system/category at 320, 375, 768, 1024 and 1440px. Prioritize stage/sidebar collapse, long labels, tables, overlay geometry, custom option menus, carousels, comparators and decorative effects. Record actual screenshots or manual results rather than inferred findings.

Exit criteria: no unintended horizontal overflow, clipping or hidden controls; touch targets and readable hierarchy remain intact at each approved width.

## Phase 4 — Responsive and layout validation (source remediation complete; browser evidence pending)

Completed in source: Split View now stacks before intermediate panels compress, workspace collapse aligns to 768px, and the overlay preview uses a height-specific token. The focused responsive contract test passes. Browser, visual, touch and screen-reader validation are still open because no runner was available in this environment.

Remaining work: collect actual rendered evidence at 320, 375, 768, 1024 and 1440px, then remediate confirmed P0/P1 layout defects without redesigning systems.

## Phase 5 — Visual polish

Use the recorded QA evidence to refine typography, contrast, spacing, focus states, effects and artistic cohesion. Keep shared outer geometry comparable while preserving the five visual identities. Fix critical functional defects before any cosmetic work.

Exit criteria: system-specific visual acceptance plus documented contrast/readability checks; no new behavior regressions.

## Phase 5 — Final regression and approval

Re-run the full matrix, lint/build, interaction scripts and browser review. Verify URL restoration, Split View, shared fixtures, state controls and documentation. Record owner approval separately from automated success.

Exit criteria: all manual results are recorded, open risks are explicitly accepted or resolved, and no category is labelled production-ready merely because it compiles.
