# Shared layout contract

This contract aligns external dimensions across systems. It does not prescribe colour, typography family, elevation, radius, shadows or motion personality.

## Tokens

Source: `design-system/tokens/layout-contract.css`.

| Group | Token | Purpose |
| --- | --- | --- |
| Containers | `--layout-container-max`, `--layout-content-max`, `--layout-gutter` | page and readable-content boundaries |
| Spacing | `--layout-section`, `--layout-grid-gap` | section rhythm and grid gutters |
| Controls | `--layout-control-sm/md/lg`, `--layout-target-min` | compatible control classes and target minimum |
| Cards/media | `--layout-card-min`, `--layout-card-feature-min`, `--layout-media-ratio` | stable outer content dimensions |
| Overlays | `--layout-overlay-sm/lg`, `--layout-drawer` | dialog and drawer limits |
| Data/motion | `--layout-carousel-min`, `--layout-table-density` | stable carousel and table sizing |

## Rules

- Sizes are minimums or maximums, never a mandate to clip content.
- Headings wrap; labels and controls may grow vertically with long content.
- Interactive targets are at least `--layout-target-min` where the pattern requires a touch target.
- Breakpoint changes may alter grids, never hide essential content.
- System switches preserve outer width classes; visual recipes remain local to Tactile or Nocturne.

## Initial playground

Tactile Lab → **Compatibility** renders one shared fixture in Tactile and Nocturne modes, with short/long content, a 320px constraint and reduced motion. It is an early dimensional test surface, not proof of complete visual parity.
