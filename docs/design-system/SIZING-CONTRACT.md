# Unified component sizing contract

Status: source-level contract introduced in Cross-System QA Phase 3. It aligns geometry across Tactile, Nocturne, Editorial, Brutalist and Playground; it does not certify rendered pixel parity.

## Shared tokens

| Family | Tokens | Contract |
| --- | --- | --- |
| Controls | `--layout-control-xs/sm/md/lg` | 32 / 36 / 44 / 52px. MD is the standard interactive size; XS and SM are compact, labelled exceptions. |
| Fields | `--layout-field-md/lg`, `--layout-textarea-min` | 44 / 52px; textareas start at 96px and grow with content. |
| Cards | `--layout-card-padding-sm/md/lg` | 16 / 24 / 32px; cards have no fixed height unless the fixture defines a content-safe minimum. |
| Overlays | `--layout-overlay-sm/md/lg` | 400 / 560 / 720px maximums, constrained by viewport width; drawers use a 420px maximum. |
| Carousel | `--layout-carousel-min/compact-min/feature-min` | 280 / 200 / 340px minimum viewport heights; slides remain content-driven above those bounds. |
| Data | `--layout-table-density`, `--layout-badge-min` | 12px table-cell vertical padding; 24px minimum badge height. |

`--layout-target-min` remains 44px. Icon-only, compact indicator and dense table controls may use smaller visual geometry only where their parent or hit area remains usable; these are not the default action contract.

## Audit findings

Static inspection found structural differences rather than a single shared system: Editorial/Nocturne used 42px standard actions, Brutalist 47px, Playground 46px; form triggers ranged from 42px to 43px; tabs and segmented controls ranged from 35px to 41px; carousel minimums ranged from 174px compact to 390px feature; overlay bounds ranged from roughly 420px to 690px. These are now mapped to size classes where controls are equivalent.

Intentional differences retained: Tactile's circular showcase actions, Nocturne's atmospheric action study, Editorial's rule-led controls, Brutalist's industrial matrix and Playground's expressive shape actions. Their visual recipe and content-driven signature geometry are not normalized by this contract.

## Category rules

- **Actions / Forms / Disclosure:** standard action, input, select, tab and segmented trigger use MD; compact variants stay explicitly labelled SM/XS.
- **Feedback / Data Display:** common badge, table and card spacing are tokenized; text and status content can increase height.
- **Carousels:** reference and standard signature windows use 280px; compact/feature variants retain documented 200px/340px bounds.
- **Overlays / Advanced:** modal, command, drawer and sheet outer bounds use the shared overlay classes. Internal layouts and focus behavior remain system-owned.
- **Foundations / Typography / Motion / Effects:** only shared fixture padding and preview boundaries are normalized; artistic composition remains independent.

## Responsive constraints

All bounds use `min()` or fluid layout values, preserve content growth and switch grids rather than hiding essential content. The shared workspace/Split View stacks at its existing narrow breakpoint. At <=760px shared fixture padding reduces from 24px to 16px; carousel and overlay content remains constrained to the viewport.

## Verification and limitations

`test:sizing` validates the token map and ensures every shared fixture category declares a size class. It does not measure computed CSS, fonts, overflow or touch interaction. Browser inspection remains required at 320, 375, 768, 1024 and 1440px, especially for long labels, tables, overlays, carousels and the persistent custom multi-selects.
