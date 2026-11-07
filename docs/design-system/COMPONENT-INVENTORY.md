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
| Tactile disclosure | single/multiple accordion, arrow-key tabs, collapsible, tooltip, popover, dropdown, context menu, hover card, segmented control and breadcrumb | In development | browser keyboard, touch and narrow-width QA |
| Tactile feedback | live toast, alerts, status badges, linear/circular progress, spinner, skeleton, empty/error/success states and steps | In development | announcement timing, contrast and responsive QA |
| Shared Lab workspace | one switcher, category sidebar and component stage; URL-addressable design/category/component state, component scroll anchoring and shared comparison fixture controls | In development | browser history, focus, scroll and narrow-width QA |
| Shared showcase reference | design-neutral schema and common reference fixture for all twelve categories; original studies follow under Signature Experiments | In development | browser visual/interaction parity QA |
| Editorial foundations | paper, ink, accent, rules, spacing and asymmetrical publication studies | In development | owner visual review and contrast QA |
| Editorial typography | shared reference scale plus publication headline, metadata, article hierarchy and pull-quote studies | In development | responsive type and reading-measure QA |
| Shared library navigation | Foundations, Typography, Actions, Forms, Disclosure, Feedback, Data Display, Carousels, Overlays, Advanced, Motion and Effects; Compatibility remains a separate utility | In development | browser category-navigation and narrow-width QA |
| Global design selector | five typed design choices, local preference persistence, radio semantics | In development | browser persistence and keyboard QA |
| Nocturne component lab | independent foundations, typography, action, card, input, accordion, dialog, motion and effects studies | In development | owner visual review, focus management and responsive QA |
| Nocturne actions | primary, secondary, ghost, outline, luminous, destructive, icon, toggle, split, copy, hold and loading states | In development | visual review and assistive-technology QA |
| Nocturne forms | text/email, password visibility, textarea, native select, checkbox, switch, field validation states | In development | expand remaining form controls and run keyboard QA |
| Nocturne disclosure | multi accordion, tabs, collapsible, tooltip, popover, dropdown, context menu, hover card, segmented control and breadcrumb | In development | full menu/focus QA |
| Nocturne feedback | toast, alert, badge, linear/circular progress, spinner, skeleton, result states and steps | In development | timing, announcement and responsive QA |
| Nocturne data display | eleven card structures, avatar/group/status, chips, timeline, sortable/paginated table | In development | table mobile/assistive-technology QA and additional action recipes |
| Nocturne carousels | content, image, feature and compact variants; controls, indicators, keyboard and swipe | In development | reduced-motion / touch-device QA |
| Nocturne overlays | modal, confirmation, drawer, bottom sheet, lightbox and command palette; focus trap, Escape, scroll lock and restoration | In development | alert/multi-step variants and screen-reader/mobile QA |
| Nocturne advanced interactions | tag input, multi-select, range, rating, reorder controls, wizard and comparison slider | In development | date/calendar, resizable panel and drag/touch QA |
| Nocturne motion | fade, directional, stagger, scale, text-mask, spring and exit preview primitives with replay | Ready for review | scroll/parallax/shared-element orchestration and device QA |
| Nocturne effects | spotlight, spectral haze, edge light, glass field and line reveal studies | Ready for review | visual performance, contrast and coarse-pointer QA |
| Cross-system compatibility | neutral external layout tokens and a Tactile Lab fixture for content/viewport/motion comparison | In development | apply dimensional classes to component families during Tactile expansion |

## Existing reusable primitive library

`components/ui/` includes accordion, button, card, carousel, dialog, drawer, input, navigation menu, select, sheet, tabs, textarea, tooltip and other shadcn-style primitives. These are available to compose accessible production patterns; the current Lab does not yet use them consistently.

## Tactile relocation map — Phase B.5

| Earlier location | Unified category |
| --- | --- |
| Palette selector and token preview | Foundations |
| Type specimen | Typography |
| Button experiments and state board | Actions |
| Email, custom selector, textarea and submit | Forms |
| Expanded Disclosure library plus original single-focus accordion | Disclosure |
| Phase B feedback study | Feedback |
| Approved project, bento, immersive and index cards | Data Display |
| Approved autoplay project carousel | Carousels |
| Contained modal, drawer and command preview | Overlays |
| Desktop/mega/mobile navigation study; remaining controls clearly marked planned | Advanced |
| Motion study and replayable entry-animation study | Motion |
| Approved pointer spotlight and atmosphere studies | Effects |
