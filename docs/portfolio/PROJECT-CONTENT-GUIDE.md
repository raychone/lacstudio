# Project content and publication guide

The initial catalog is queued in `content/projects.private.ts` with every entry marked `draft`. It includes MedicHelp, Dental Laboratory Management, Restaurant SaaS, GR Plus, ODONTA, Endoac, NOPED, INNERLY, RePlayer, French Sprint, Speech-to-Write and Sendora / SMS Gateway.

To publish a project:

1. Confirm a public title, approved copy, permissions and any claims.
2. Add approved media and descriptive alt text according to `ASSET-CHECKLIST.md`.
3. Copy only public-safe fields into `content/projects.ts` and set `publicationState: "published"`.
4. Set `featured` and `featuredOrder` only when it should appear on the homepage.
5. Add optional detail fields only when verified. The reusable case-study template omits absent sections.

Never import `projects.private.ts` into a public route or client component. Draft, private, archived and in-development entries must not appear in listings, routes, related-project links, sitemap output or metadata.
