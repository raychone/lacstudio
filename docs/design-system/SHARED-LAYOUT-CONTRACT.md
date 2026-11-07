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

## Unified Lab workspace — Phase B.6

The active Lab uses one structural workspace for every registered system:

1. Design System Switcher
2. Shared category sidebar
3. Shared component stage

The workspace owns the container, gutters, sidebar width, stage position, category heading and mobile stack. A design system owns only the visual treatment and its component preview. Tactile and Nocturne therefore share the outer geometry without sharing their shadows, colour, typography or motion language.

The category registry also supplies stable component identifiers. The URL carries `design`, `category` and `component`, for example `?design=nocturne&category=effects&component=effects.spotlight`. Switching systems preserves those identifiers. When a future system has no matching implementation, the workspace keeps the selected category and shows a restrained fallback instead of resetting the Lab.

The active component is the scroll anchor. After a system switch, the workspace brings that anchor into view with non-animated layout-aware scrolling rather than replaying the previous pixel offset.

## Showcase reference contract — Phase B.7A

`design-system/showcase/schema.ts` is a small design-neutral comparison contract. A definition carries the category and stable component identifier, display title, description, optional variants and a shared outer size class. The renderer supplies the common heading, fixture order, variant/state controls and preview boundary; each system retains its visual recipe and signature studies.

All twelve categories now have a shared reference definition. Common references standardize their fixture copy, state label, outer boundary and size class; the richer original system studies remain below as Signature Experiments. This keeps geometry comparable without replacing actual system-specific behavior.

## Initial playground

Tactile Lab → **Compatibility** renders one shared fixture in Tactile and Nocturne modes, with short/long content, a 320px constraint and reduced motion. It is an early dimensional test surface, not proof of complete visual parity.
