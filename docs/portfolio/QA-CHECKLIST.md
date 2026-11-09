# Portfolio QA checklist

Automated checks to run:

- `npm run lint`
- `npm run build`
- `npm run test:comparison`
- `npm run test:interactions`
- `npm run test:sizing`
- `npm run test:responsive`
- `npm run test:browser`
- `git diff --check`

Manual browser checks still required before launch:

- Inspect `/` at 320, 375, 768, 1024 and 1440px for every design.
- Switch designs on every public route; verify the route, filters, slug and scroll position persist.
- Test keyboard navigation, visible focus, mobile menu and reduced motion.
- Submit valid and invalid contact data; confirm that unconfigured delivery never reports success.
- Open `/lab` with a category/component URL and Split View URL; confirm all controls remain available.
- Check published case studies only after approved content is added.

The automated suite does not replace real-device, assistive-technology or legal review.
