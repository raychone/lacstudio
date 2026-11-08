# Expanded States & Interaction QA — Phase 5A

Date: 2026-11-08. Scope: reproducible Chromium interaction checks and representative expanded-state screenshots. This is not device-touch, screen-reader, contrast or owner visual approval.

## Browser coverage

- Runner: Playwright Chromium 158.0.8127.18 against the local Vinext preview.
- Viewports: 375×812 and 1440×900; reduced-motion test uses Playwright emulation at 375×812.
- Command: `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4174 npx playwright test design-system/browser/expanded-states.spec.ts`.
- Result: 6/6 interaction scenarios passed.
- Artifacts: 35 ignored PNG files in `qa-artifacts/expanded-states/<system>/`.

## Component/state inventory

| State family | Systems / implementation | Browser result |
| --- | --- | --- |
| Select | Tactile, Nocturne, Brutalist and Playground use custom listboxes; Editorial deliberately retains its native select. | Custom triggers open by keyboard, expose listboxes/options, select, Escape-close, restore focus and dismiss on outside click. Editorial value change verified through native semantics. |
| Multi-select | Nocturne, Editorial and Brutalist use persistent checkbox/listbox controls; Playground has a custom expandable list. Tactile has no matching advanced implementation. | Inventory recorded; representative advanced sliders/wizards verified. Expanded Playground multi-select and physical touch remain manual targets. |
| Dropdown/context/popover/tooltip | All five have system-specific disclosure studies. | Dropdown menu open/Escape-close and accordion/tab state paths are automated. Popover, tooltip and context-menu visual positioning remain manual/state-specific checks. |
| Modal/confirmation/drawer/sheet/lightbox | All five systems expose overlay families; Nocturne confirmation is intentionally non-dismissible. | Modal open, dialog semantics, Escape-close and trigger-focus restoration verified in each system at both viewports. Other variants share their system-owned layer primitives but require dedicated variant walkthroughs. |
| Command palette | Nocturne, Editorial, Brutalist and Playground expose command surfaces; Tactile has a contained Lab command preview. | Nocturne command opens, receives initial input focus, Escape-closes and restores focus. |
| Accordion/tabs/segmented | All five have custom disclosure patterns. | Accordion expanded state, menu dismissal and Home/End tab focus verified where tab roles are present. |
| Carousel / comparison / wizard / range / rating / tags / hold | System-specific signature studies. | Representative range keyboard boundary progression and wizard advancement covered for Nocturne, Editorial, Brutalist and Playground. Carousel swipe, comparison drag, hold-to-confirm timing and tag/reorder flows remain targeted manual/browser work. |

## Confirmed defects and fixes

| Priority | System | Reproduction / actual result | Fix and verification |
| --- | --- | --- | --- |
| P1 | Tactile forms | The custom project selector was an unlabelled generic button/list, with no keyboard option navigation, Escape restoration or outside-click dismissal. | Added labelled combobox/listbox roles, selected state, Arrow/Home/End/Enter/Escape interaction, focus restoration and outside dismissal. The custom-select suite passes at both viewports. |
| P1 | Nocturne forms | The custom select exposed listbox content but the trigger was not a combobox and had no `aria-controls` relationship. | Added `role="combobox"` and the listbox ID relationship. Keyboard/open/select/close paths pass. |
| P1 | Tactile overlays | The contained modal/drawer/command preview had no dialog semantics, Escape path, focus trap or trigger restoration. | Added dialog semantics, keyboard close, local Tab containment, labelled close controls and focus restoration. Modal tests pass at both viewports. |

No P0 issue was observed. No shared sizing token changed.

## Screenshot inventory

- Forms: `expanded-states/{tactile,nocturne,brutalist,playground}/forms-select-open-{mobile,desktop}.png`; `expanded-states/editorial/forms-native-select-{mobile,desktop}.png`.
- Disclosure menus: `expanded-states/<system>/disclosure-menu-open-{mobile,desktop}.png` for all five systems.
- Modal states: `expanded-states/<system>/overlays-modal-open-{mobile,desktop}.png` for all five systems.
- Advanced active states: `expanded-states/{nocturne,editorial,brutalist,playground}/advanced-active-mobile.png`.
- Command: `expanded-states/nocturne/overlays-command-open-desktop.png`.

## Reduced motion and interaction limits

- Playwright reduced-motion emulation confirmed that the Playground modal remains operable and dismissible without animation-dependent state.
- Mouse-driven Playwright scenarios are not a claim of real-device touch verification. No device touch, OS-level reduced-motion or screen-reader session was performed.
- Native select popup UI is browser-owned and is intentionally not screenshot as an expanded custom surface.

## Deferred to Phase 5B / manual QA

- Human review of menu/tooltip/popover surface styling, contrast, shadows, borders, spacing and scrollbar treatment.
- Dedicated captures and keyboard/touch scripts for every confirmation, drawer, sheet, lightbox, command and non-dismissible overlay variant.
- Physical touch swipes/drags for carousels and comparison sliders; hold-to-confirm timing/cancellation; custom multi-select long-list positioning; context-menu placement; tag/reorder semantics; screen-reader announcements.

All five systems remain **in development**.
