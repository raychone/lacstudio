# Brutalist — design direction

## Intent

Brutalist is Design 04: an uncompromising contemporary interface language for cultural systems, industrial tools and direct digital work. It uses the grid as a visible instrument rather than a hidden convenience. The result is forceful, not chaotic: every offset, rule and oversized glyph has a structural reason.

## Principles

- **Structure is visible.** Borders, dividers, modular grids and alignment remain part of the composition.
- **Typography is monumental.** Heavy grotesk display type creates immediate hierarchy; compact mono metadata carries evidence.
- **Geometry is unapologetic.** Surfaces, controls and states are rectangular, hard-edged and deliberately divided.
- **Contrast is immediate.** The reading path is made with near-black, industrial off-white and one safety-orange signal.
- **Imperfection is intentional.** Offset borders and asymmetry create tension, but not accidental misalignment.

## Palette

- Canvas: industrial off-white `#E7E5DF`
- Primary surface: pale utility stock `#F4F3ED`
- Secondary / raised surface: concrete utility `#C9C7C0`
- Primary ink and border: near-black `#11110F`
- Muted text: `#67665F`
- Signal, focus and selection: safety orange `#FF4D00`
- Disabled: `#8F8D87`
- Functional success: `#176B3A`
- Functional warning: `#9B6800`
- Functional error: `#BF2819`

Orange is the only compositional accent. Functional colours are reserved for semantic status and should not become decorative alternatives.

## Typography

Use the installed Arial/Helvetica grotesk stack at high weight for display and interface hierarchy; use Courier New for exact labels, coordinates, indexes and system metadata. Display type uses tight tracking and decisive line breaks. Body copy stays at a readable size and line-height, especially at narrow widths. There are no serif gestures, soft rounded text treatments or ornamental type effects.

## Geometry and interaction

The shared Lab geometry remains untouched. Brutalist interprets its internals with two-pixel borders, rectangular controls, offset hard borders, grid divisions and inverted ink blocks instead of radius or shadow-based elevation.

Future interaction is mechanical: hard cuts, directional wipes, snapping grid changes and inverted hover/focus states. Motion must remain brief and must resolve to a stable reading state under reduced motion. Phase 0 + 1 does not implement the Motion or Effects categories.

## Responsive rules

Shared breakpoints and external preview dimensions are retained. Internal grids collapse before type is clipped; body text remains readable at 320px; metadata may wrap but never disappear. Long labels grow in height rather than escaping their hard boundaries.

## Differences from the other systems

- Not Tactile: no soft elevation, recessed shadows or rounded material states.
- Not Nocturne: no luminous glass, haze or cinematic dark atmosphere.
- Not Editorial: no paper-serifs, quiet margins or publication restraint.
- Not Playground: no friendly softness or organic geometry.

## Phase status

Implemented: Foundations, Typography, Actions, Forms, Disclosure and Feedback, including shared comparison fixtures and original structural studies.

Actions use mechanical inversion, directional fills, hard press offsets and numbered commands. Forms use two-pixel field borders, status labels and a custom industrial option list. Disclosure uses structural panels, numbered conditions and inverted active states. Feedback behaves as instrumentation: signal blocks, explicit status labels and strong progress markers.

Pending: Data Display, Carousels, Overlays, Advanced, Motion and Effects. Each retains its shared Lab location through an explicit Brutalist under-construction state.

Brutalist is **6/12 categories implemented, pending visual and responsive QA**. It is not production-ready.
