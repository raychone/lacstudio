# Work page

The public Work page is a reusable project-showcase shell shared by Tactile, Nocturne, Editorial, Brutalist and Playground. Layout dimensions are shared; each design system supplies only its material, color, border, shadow and typographic treatment.

## Public content rule

Only `content/projects.ts` feeds public cards, filters, featured slides and public project routes. The draft queue in `content/projects.private.ts` remains intentionally disconnected from this page.

When no featured project is approved, the carousel uses neutral placeholders labelled `APPROVED MEDIA / PENDING`. When no public project exists, the gallery explains the publication policy instead of exposing a draft name, image, result or client claim.

## Adding a case study

1. Complete the approval checks in `PROJECT-CONTENT-GUIDE.md` and `ASSET-CHECKLIST.md`.
2. Add only the approved public fields and media references to `content/projects.ts`.
3. Set `featured: true` and a `featuredOrder` to place a project in the carousel.
4. Verify filters, project route, image alt text, keyboard navigation and every design system before merging.

## Interaction contract

The featured carousel is manual by design. It supports previous/next buttons, slide pagination, left/right keyboard keys and horizontal pointer swipes. It respects the global reduced-motion setting because it has no required autoplay or continuous animation.
