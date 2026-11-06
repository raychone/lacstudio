# Foundations

## Active direction

Warm Cream is the current default (`palette-cream`). The material language uses a soft exterior elevation for resting surfaces and a recessed, inset shadow for selected, pressed, or focused-in-place elements.

## Existing palette tokens

| Semantic role | Warm Cream value | Current CSS variable |
| --- | ---: | --- |
| Base material | `#e7e3db` | `--neo-base` |
| Highlight | `#ffffff` | `--neo-light` |
| Shadow | `#c5c0b6` | `--neo-dark` |
| Ink | `#26313b` | `--neo-ink` |
| Olive accent | `#a3ad82` | `--neo-accent` |
| Soft olive tint | `#dce2ce` | `--neo-tint` |

`--ink`, `--paper`, `--line`, and `--acid` remain in the original global sheet and should be migrated only as each consuming component is touched.

## Proposed semantic token vocabulary

```css
--color-canvas
--color-ink
--color-accent
--color-accent-soft
--surface-raised
--surface-recessed
--border-subtle
--shadow-raised
--shadow-recessed
--radius-sm / --radius-md / --radius-lg
--space-1 … --space-8
--duration-fast / --duration-base / --duration-slow
--ease-standard / --ease-emphasized
```

This is a migration map, not a second visual system. Existing values should be remapped to these semantics category by category.

## Typography

The Lab exposes H1–H6 and body specimens with breakpoint labels for mobile, tablet, laptop, desktop and wide displays. The current family is system sans with Georgia for select italic display emphasis. Before the portfolio is built, type should be extracted into named display, heading, body, label and meta styles with minimum readable sizes documented per breakpoint.
