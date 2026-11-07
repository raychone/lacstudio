# Testing plan

## Current evidence

- `npm run build`: passed after Tactile Phase B implementation on 2026-11-07.
- `npm run lint`: passed after Tactile Phase B implementation on 2026-11-07.
- No automated tests are configured.

## Lightweight quality gate for each component family

1. `npm run lint`
2. `npm run build`
3. Manual desktop and mobile review at 375px, 768px, 1280px and 1600px.
4. Keyboard-only walkthrough.
5. Reduced-motion walkthrough.
6. One screenshot or recorded acceptance note in the component’s change log entry.

## Next automation candidates

- Unit test pure token/variant helpers once extracted.
- Browser tests for navigation, overlay dismissal, carousel pause/control and form validation.
- Visual regression snapshots only after CSS layers are consolidated enough to make results stable.
