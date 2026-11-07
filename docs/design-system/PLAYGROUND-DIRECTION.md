# Playground — design direction

## Intent

Playground is Design 05: a sophisticated, imaginative system for expressive product interfaces and creative studio work. It treats colour, shape and type as a language of interaction, while preserving a clear reading path and durable component behavior.

## Principles

- **Playfulness with purpose.** Every surprise supports hierarchy, personality or feedback.
- **Colour is a language.** Electric blue carries primary action, acid lime signals selection and coral creates controlled emphasis.
- **Shape communicates.** Organic corner pairs, cutouts and layered silhouettes create rhythm without obscuring interaction bounds.
- **Surprise is controlled.** The system may delight, but its focus order, contrast and state changes remain predictable.

## Palette

- Canvas: warm off-white `#FFF7EA`
- Surface: `#FFFDFA`
- Secondary surface: lavender field `#EEEAFF`
- Primary ink: deep indigo `#242052`
- Primary accent and focus: electric blue `#3D4BFF`
- Secondary accent and selection: acid lime `#C9FF5A`
- Decorative accent: coral `#FF7058`
- Supporting decorative tone: lavender `#CBB8FF`
- Muted text: `#666287`
- Disabled: `#AAA6BA`
- Success: `#16824C`; warning: `#AA6700`; error: `#CE3C42`

The bright colours have distinct jobs; they are not interchangeable decoration. Ink-on-surface combinations hold functional contrast.

## Typography

The available Arial/Helvetica sans stack becomes expressive through scale, tight display tracking, deliberate line breaks and characterful labels. Body copy remains spacious and legible. Large numerals orient a composition but avoid Brutalist's industrial weight; labels remain concise and energetic rather than childlike.

## Geometry and motion

Playground uses a small grammar of organic asymmetric corner pairs, circles, rounded cutouts, layered fields and controlled overlaps. It does not use Tactile elevation, Nocturne glass, Editorial paper rules or Brutalist hard rectangles.

Future motion is springy but controlled: shape changes, kinetic type and responsive hover reactions must explain an interaction. Reduced motion will retain every state without spatial play. Phase 0 + 1 does not implement Motion or Effects.

## Responsive rules

The shared Lab container, breakpoints and preview boundaries remain untouched. Internal compositions collapse before expressive type clips; shapes scale or move behind content; controls retain clear interaction bounds from 320px upward.

## Phase status

Implemented: Foundations, Typography, Actions, Forms, Disclosure, Feedback, Data Display, Carousels, Overlays and Advanced, including shared comparison fixtures and Playground-only functional studies. Data Display adds colorful card families, metrics and chronology. Carousels remain manually controlled. Overlays use expressive color blocking while preserving focus management. Advanced combines custom selection, ordering, wizard and comparison tools.

Pending: Motion and Effects. Each has an intentional Playground under-construction state in the shared Lab.

Playground is **10/12 categories implemented, pending visual and responsive QA**. It is not production-ready.
