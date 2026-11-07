# Tactile / Nocturne comparison

Audited against the implementation on 2026-11-07. “Lab-ready” means the component is demonstrated; it does not mean full assistive-technology or responsive certification.

| Family | Tactile | Nocturne | Tactile next action |
| --- | --- | --- | --- |
| Foundations | Five live palettes, material/elevation tokens, type specimen | Midnight foundation, independent tokens and type study | Map existing outer dimensions to shared contract. |
| Actions | Eight button experiments + state board | Reusable action variants, loading, toggle, split, copy and hold | Expand only missing behavior, retaining Tactile form. |
| Forms | email, custom select, textarea, validation demo | Reusable input/select/password/textarea/check/switch | Add component-level reusable Tactile form modules. |
| Disclosure | reusable accordion (single/multiple), tabs, collapsible, tooltip, popover, dropdown, context menu, hover card, segmented control and breadcrumb | reusable accordion, tabs, collapsible, tooltip, popover, menu, context, hover, segmented, breadcrumb | Functional Phase B parity reached; retain Tactile's raised/recessed material states. |
| Feedback | reusable toast, alert, badges, linear/circular progress, spinner, skeleton, result states and steps | toast, alert, badges, progress, spinner, skeleton, states, steps | Functional Phase B parity reached; validate live announcements and timing in a browser pass. |
| Data display | four approved card studies and project carousel | reusable card structures, avatars, chips, timeline, sortable/paginated table | **Missing breadth:** implement Phase C. |
| Carousels | autoplay project and approved carousel; pointer drag in experiment | four reusable manual variants with keys/swipe/boundaries | Add comparable manual variants in Phase C. |
| Overlays | contained modal/drawer/command preview | reusable dialog foundation with focus trap, drawer/sheet/lightbox/command | Add semantic/focus-managed Tactile overlays in Phase D. |
| Advanced | palette selector and reduced-motion toggle | tags, multiselect, range, rating, reorder, wizard, comparison | Add real Tactile equivalents in Phase D. |
| Motion | reveal/stagger/parallax/transition/orbit and entry animations | reusable primitive gallery with replay | Preserve existing Tactile motion; audit and extract in Phase E. |
| Effects | approved spotlight; haze/glass/grid studies | spotlight/haze/edge/glass/line primitives | Preserve and compare performance in Phase E. |

## Compatibility findings

- Tactile and Nocturne now share a neutral external token contract, but most existing components have not yet consumed its size classes.
- Both Labs now consume the same twelve-category registry and expose the categories in the same order; Compatibility remains outside that list as a development utility.
- Tactile's former approved-components shelf has been consolidated into Forms, Disclosure, Data Display, Carousels, Overlays, Advanced and Effects. Nocturne's visual recipe was not changed.
- Nocturne has broader reusable functional coverage; Tactile has richer original material experiments that must not be replaced.
- Both systems need later keyboard, 320px, 200% zoom and screen-reader validation before any production-ready label.

## Maturity

Tactile: **approved visual baseline, Disclosure and Feedback implementation ready for owner review.**
Nocturne: **implementation complete, awaiting owner visual/interactions review.**
