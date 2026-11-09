# Shared portfolio layout contract

All five systems use the same structural CSS tokens in `app/portfolio.css`.

| Contract | Value |
| --- | --- |
| Maximum content width | `1180px` |
| Horizontal gutter | `clamp(20px, 4vw, 56px)`; `16px` at 560px and below |
| Header height | `76px`; `68px` at 840px and below |
| Section rhythm | `clamp(72px, 10vw, 144px)` |
| Card gap | `clamp(16px, 2vw, 28px)` |
| Card padding | `clamp(18px, 2.3vw, 28px)` |
| Desktop hero | two equal columns |
| Desktop card grids | three columns; expertise five columns |
| Tablet breakpoint | `840px`: hero/two-column layouts become one column; cards remain two columns |
| Narrow breakpoint | `560px`: all card and form grids become one column |

The header, switcher, navigation, hero grid, section order, card positions, filter controls, footer and breakpoint rules are shared. Theme scopes may alter only presentation: color, typography, borders, radii, surfaces, shadows, effects and motion. Text is allowed to wrap naturally; no fixed card height is used.

QA target widths: 320px, 375px, 768px, 1024px and 1440px.
