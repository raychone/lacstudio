# Design Lab architecture

## Current

```text
app/layout.tsx
  ├─ global CSS + ordered override layers
  └─ app/page.tsx (client component)
       ├─ Experimental Lab panels
       ├─ Approved components shelf
       ├─ Preview work carousel
       └─ Studio preview sections
```

The page is intentionally preserved during the first stage so visual work remains reviewable locally.

## Target, introduced incrementally

```text
app/
  page.tsx                         # Lab composition only
components/lab/
  foundations/                     # colour, type and material previews
  primitives/                      # Button, Surface, Field, IconButton
  patterns/                        # cards, navigation, carousel, overlays
  experiments/                     # motion and effect studies
  approved/                        # reviewed combinations
design-system/
  tokens/                          # CSS custom properties / source values
  recipes/                         # component variant definitions
  motion/                          # timing and easing definitions
docs/design-system/                # decision records and QA notes
```

## Implemented engine slice

`design-system/engine/registry.ts` is the typed registry for Tactile, Nocturne, Editorial, Brutalist and Playground. `design-system/engine/provider.tsx` owns the client-only active-design preference and guards invalid local values. `components/lab/design-switcher.tsx` is the accessible global selector.

Tactile retains its existing page/component tree. `components/lab/nocturne/nocturne-lab.tsx` is a separate Nocturne presentation tree; it owns its own study navigation and representative component markup. `components/lab/nocturne/nocturne-lab.css` owns the corresponding visual recipes. `app/multi-design-engine.css` now contains shared selector chrome only. This boundary prevents Tactile's neumorphic markup and `--neo-*` assumptions from becoming Nocturne's implementation.

## Constraints

- One source of truth per token; components consume semantic values, not palette hex values.
- Experimental patterns stay isolated until reviewed.
- An approved item is responsive, keyboard-reachable, has a reduced-motion behavior, and has a documented test case.
- No global portfolio redesign is implied by Lab work.
