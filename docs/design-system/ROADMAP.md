# Incremental roadmap

## Phase A — baseline and system map (complete with this documentation commit)

- Create safe checkpoint `04f81eb`.
- Create branch `feature/lac-design-system-expansion`.
- Audit implementation, quality state, component inventory and technical debt.
- Establish documentation and migration rules.

## Phase B — stabilize foundations

1. Repair current lint errors without visual changes.
2. Extract palette/material/type/motion values into semantic tokens.
3. Consolidate only the CSS touching the active family; preserve visual output.
4. Add responsive and reduced-motion acceptance notes.

## Phase C — component families

1. Buttons and type.
2. Navigation and overlays (focus, Escape, mobile behavior).
3. Cards and carousel (keyboard/autoplay handling).
4. Inputs and forms (semantic custom select and validation).
5. Motion and effect studies (performance and fallbacks).

## Phase D — production handoff

- Promote only certified approved components to reusable modules.
- Compose the future portfolio routes from those modules.
- Add browser coverage for interaction-critical patterns.

Each completed slice gets its own small, reversible commit.
