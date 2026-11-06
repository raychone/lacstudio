# Accessibility baseline and checklist

## Known baseline

The Lab uses many native `button`, `input`, `textarea`, heading and link elements. Several controls have accessible names, and the reduced-motion toggle exposes `aria-pressed`. This is a good start, not certification.

## Required before approval

- [ ] Visible focus state for every interactive element.
- [ ] Keyboard operation for custom select, carousel, tabs, accordion and mobile/mega navigation.
- [ ] `aria-expanded` / controlled-region relationships for disclosures.
- [ ] Modal, drawer and command focus management: initial focus, Escape, focus trap, return focus.
- [ ] Pause/stop mechanism for autoplay and non-essential movement.
- [ ] Reduced-motion behavior tested with the operating-system preference.
- [ ] Text, controls and spotlight states checked for WCAG contrast.
- [ ] Touch target size and responsive overflow checked at mobile widths.
- [ ] No information conveyed by hover or pointer position alone.

Use semantic HTML first; use the existing accessible primitives in `components/ui/` where they fit the interaction.
