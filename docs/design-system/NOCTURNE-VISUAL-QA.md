# Nocturne visual QA — Phase 5B.2

Date: 2026-11-08. Scope: evidence-led visual polish for Design 02 Nocturne only. This records automated and code-reviewed refinement, not owner approval or production certification.

## Evidence and method

- Reviewed Phase 4.5 browser QA, Phase 5A expanded-state QA, the shared sizing contract, Tactile's Phase 5B.1 record, matrix, roadmap and component inventory.
- Inspected representative pre-polish captures: `qa-artifacts/responsive/nocturne/actions-1440.png`, `forms-1440.png`, `data-display-1440.png`, and `qa-artifacts/expanded-states/nocturne/overlays-modal-open-desktop.png`.
- Added a Nocturne-scoped polish layer at `.workspace-shell.nocturne-lab[data-design="nocturne"]`. It does not change shared geometry, common breakpoints, URL state, interaction logic or the other four systems.
- Generated 62 ignored post-polish Chromium captures under `qa-artifacts/nocturne-visual/`: all twelve categories at 320, 375, 768, 1024 and 1440px, plus expanded select and command-palette states.

## Visual audit

| Category | Priority before | Result of Phase 5B.2 |
| --- | --- | --- |
| Foundations | P2 | Clarified dark glass elevation and edge separation while preserving the navy field and spectral atmosphere. |
| Typography | P2 | Strengthened primary, secondary and tertiary text roles instead of flattening all text to white. |
| Actions | P2 | Made hover, focus, active and disabled states more distinct with restrained violet light. |
| Forms | P2 | Increased field-boundary clarity, readable helpers and isolated active focus treatment. |
| Disclosure | P3 | Preserved interaction logic; raised menu/popover separation and readable selected states. |
| Feedback | P3 | Existing status color logic remains; supporting copy inherits stronger contrast roles. |
| Data Display | P2 | Clarified card planes, metadata, text hierarchy and selected edge lighting without changing card geometry. |
| Carousels | P3 | Preserved composition and controls; shared edge contrast remains consistent with adjacent data surfaces. |
| Overlays | P2 | Increased scrim, panel and close/focus separation; retained dialog mechanics and cinematic framing. |
| Advanced | P3 | Custom menus and controls use the same elevated glass language rather than merging into a card. |
| Motion | P3 | No new movement introduced; existing durations/reduced-motion path remain intact. |
| Effects | P3 | Kept signature haze and pointer effects, reducing their competition with content through controlled opacity. |

No P0 or P1 issue was confirmed during this pass.

## Readability and contrast

Approximate sRGB contrast ratios against the core `#070A14` night field were calculated from the authored solid color roles:

| Role | Color | Ratio |
| --- | --- | --- |
| Primary | `#F5F6FF` | 18.36:1 |
| Secondary | `#C6CDE9` | 12.53:1 |
| Tertiary | `#A6AFD0` | 9.10:1 |
| Existing muted label reference | `#7884AA` | 5.35:1 |

These meet ordinary-text AA contrast against the core opaque surface. Translucent glass, gradients, disabled states, text over effects and very small labels still need a dedicated rendered contrast audit; 8px–9px labels are intentionally reserved for metadata, not body copy.

## Visual decisions

- Nocturne remains deep navy/near-black with lavender signal, glass layers and controlled spectral haze—not a generic dark dashboard.
- The system now uses a clearer edge and an independent elevated glass recipe for menus, custom selects, command content and overlays.
- Glow supports focus and selection only; broad card halo intensity is reduced rather than added everywhere.
- Active and focus treatments retain the accessible Phase 5A primitives while using a refined `signal-bright` outline and halo.

## Screenshot evidence

- Before: `qa-artifacts/responsive/nocturne/{actions,forms,data-display}-1440.png`; `qa-artifacts/expanded-states/nocturne/overlays-modal-open-desktop.png`.
- After: `qa-artifacts/nocturne-visual/<category>-{320,375,768,1024,1440}-after.png` for each of the twelve categories.
- Expanded after: `qa-artifacts/nocturne-visual/forms-select-open-desktop-after.png` and `qa-artifacts/nocturne-visual/overlays-command-open-desktop-after.png`.

## Responsive and accessibility evidence

- `nocturne-visual-polish.spec.ts` rendered all sixty category/viewport combinations and two expanded states. It found no document-level horizontal overflow.
- Custom select opening, command palette dialog semantics, Escape closing and focus restoration remain covered by the Phase 5A suite; the full regression suite is the final gate for this phase.
- This does not replace manual contrast inspection, real-device touch validation, screen-reader testing or owner visual approval.

## Remaining visual review and approval

- Inspect small tertiary labels, disabled labels and translucent/effect-overlaid copy with a rendered contrast tool.
- Review tooltip, context-menu, popover, drawer, sheet and lightbox variants manually, especially on a physical narrow device.
- Confirm animation/effect performance and pointer fallback on low-power hardware.

Nocturne remains **in development**. Owner visual approval and the remaining manual accessibility checks are required before any production designation.
