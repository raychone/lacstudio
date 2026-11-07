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

## Showcase-parity audit — Phase B.7A

Audited from the active workspace renderers, `app/page.tsx`, `components/lab/nocturne/nocturne-lab.tsx` and the referenced component studies. “Reference” denotes the shared showcase implemented in Phase B.7A; remaining categories are deliberately deferred to B.7B.

| Category / shared component | Tactile implementation and signature study | Nocturne implementation and signature study | Current presentation / fixture | State and dimensional notes | B.7 status |
| --- | --- | --- | --- | --- | --- |
| Foundations / `foundation.semantic-roles` | live five-palette selector and active token panel | night, glass and signal foundation swatches | Reference uses six semantic roles, radius and spacing labels | shared 3-column role grid; values intentionally differ | Reference implemented; palette/night studies retained |
| Typography / `typography.reference-scale` | H1–H6 scale, body, breakpoint specimen and animated split type | optical editorial scale and AFTER LIGHT composition | shared display + H1–H6/body/caption/numeric specimen | shared readable width; glyph metrics intentionally differ | Reference implemented; original type studies are signature experiments |
| Actions / `action.primary` + variants | magnetic, icon-slide, glow, morph, loading, electric, ripple and flip button experiments | primary, secondary, ghost, outline, luminous, destructive, icon, toggle, split, copy and hold actions | shared primary/secondary/outline/ghost/destructive/icon/loading/disabled grid | control MD class; selected shared action variant is URL-preserved | Reference implemented; system action collections retained |
| Forms / `form.reference` | floating email, custom select, textarea and brief submit | text/email, password, textarea, select, checkbox and switch fields | shared contact fixture labels, placeholders, validation and disabled scenario | shared two-column outer grid, content may grow; actual system studies remain below | Reference implemented; richer Nocturne controls have no Tactile equivalent yet |
| Disclosure / `disclosure.library` | accordion, tabs, collapsible, tooltip, popover, dropdown, context, hover card, segmented and breadcrumb | same conceptual disclosure set | each system’s own gallery order and copy | outer gallery grids differ | Deferred B.7B |
| Feedback / `feedback.library` | toast, alert, badges, progress, spinner, skeleton, state and steps | same conceptual feedback set | each system’s own study layout | shared messages/values not yet normalized | Deferred B.7B |
| Data Display / `data.cards` | project, bento, immersive and index cards | cards, avatars, chips, timeline and sortable/paginated table | different content breadth | card outer sizes not yet normalized | Deferred B.7B; Nocturne has broader coverage |
| Carousels / `carousel.projects` | autoplay project carousel | content, image, feature and compact carousel variants | different slide content and controls | shared initial index/aspect contract pending | Deferred B.7B |
| Overlays / `overlay.preview` | contained modal, drawer and command preview | modal, confirmation, drawer, sheet, lightbox and command palette | different overlay breadth | Nocturne has focus containment; same outer fixture pending | Deferred B.7B |
| Advanced / `advanced.navigation` | desktop/mega/mobile navigation study; planned advanced note | tags, multi-select, range, rating, reorder, wizard and comparison slider | no direct equivalent | intentional capability gap | Deferred B.7B |
| Motion / `motion.recipes` | reveal, stagger, parallax, transition, scroll, orbit and entry replays | fade, directional, stagger, scale, text-mask, spring and exit primitives | different target content and timing | reduced-motion controls exist; common target pending | Deferred B.7B |
| Effects / `effects.spotlight` | pointer-reactive brush spotlight plus haze/lens/grid studies | spotlight, spectral haze, edge light, glass field and line reveal | different canvas copy and dimensions | common reference canvas pending | Deferred B.7B |

### Known composition findings

- The former Tactile Actions preview could compress its editorial copy against the circular action surface in the shared stage. Phase B.7A gives that preview a minimum comparison height and a bounded live-message area.
- Form capability parity is intentionally not overstated: Nocturne currently has password, checkbox and switch controls that Tactile does not yet expose as reusable controls. The shared form fixture makes that difference visible; Phase B.7A does not invent a Tactile replacement.
- B.7A’s schema is category-neutral and supports all registry IDs, but only Foundations, Typography, Actions and Forms have rendered common references. The remaining eight categories remain explicitly deferred.

## Maturity

Tactile: **approved visual baseline, Disclosure and Feedback implementation ready for owner review.**
Nocturne: **implementation complete, awaiting owner visual/interactions review.**
