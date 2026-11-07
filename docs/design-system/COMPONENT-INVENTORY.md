# Component inventory

Status: **Approved** means visually selected for the Lab, not yet accessibility- or regression-certified.

| Family | Current variants / behavior | Status | Next acceptance requirement |
| --- | --- | --- | --- |
| Typography | split text, H1–H6, body, breakpoint specimen | Experiment | semantic scale and responsive QA |
| Buttons | magnetic, icon slide, glow, morph, loading, electric, ripple, flip; state board | Experiment | distinct keyboard/focus states and token recipes |
| Navigation | desktop active link, mega menu, mobile drawer | Approved | Escape/focus return and mobile QA |
| Cards | project, bento, immersive, index; recessed-to-raised hover | Approved | focus and touch behavior |
| Accordions | raised closed, recessed open | Approved | keyboard behavior and `aria-expanded` |
| Carousels | autoplay, arrows, rail, pointer drag, fullscreen preview | Approved | pause control, keyboard support, live announcement |
| Inputs | floating email, custom select, textarea, submit | Approved | label/listbox semantics and validation messages |
| Overlays | modal, drawer, command preview, tooltip sample | Approved | focus trap, Escape, return focus |
| Motion | reveal, stagger, parallax, transition, scroll, orbit | Experiment | motion token mapping and reduced-motion variants |
| Entry animations | button, card, badge, hover lift, loading + replay | Experiment | motion intent and reduced-motion QA |
| Visual effects | Spotlight pointer effect | Approved | touch fallback and contrast test |
| Effect studies | aurora haze, glass lens, soft grid | Experiment | performance and legibility test |
| Global design selector | five typed design choices, local preference persistence, radio semantics | In development | browser persistence and keyboard QA |
| Nocturne component lab | independent foundations, typography, action, card, input, accordion, dialog, motion and effects studies | In development | owner visual review, focus management and responsive QA |
| Nocturne actions | primary, secondary, ghost, outline, luminous, destructive, icon, toggle, split, copy, hold and loading states | In development | visual review and assistive-technology QA |
| Nocturne forms | text/email, password visibility, textarea, native select, checkbox, switch, field validation states | In development | expand remaining form controls and run keyboard QA |
| Nocturne disclosure | multi accordion, tabs, collapsible, tooltip, popover, dropdown, context menu, segmented control and breadcrumb | In development | full menu/focus QA and hover-card primitive |
| Nocturne feedback | toast, alert, badge, linear/circular progress, spinner, skeleton, result states and steps | In development | timing, announcement and responsive QA |

## Existing reusable primitive library

`components/ui/` includes accordion, button, card, carousel, dialog, drawer, input, navigation menu, select, sheet, tabs, textarea, tooltip and other shadcn-style primitives. These are available to compose accessible production patterns; the current Lab does not yet use them consistently.
