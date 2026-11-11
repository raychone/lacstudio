# LAC STUDIO — Phase 2 copywriting implementation plan

Status: planning only. Do not start Phase 2 without founder review and confirmation of the open facts below.

## Phase 2 objective

Replace abstract repetition with concise, buyer-oriented English while preserving the current shared portfolio geometry, route structure, theme parity and factual integrity.

## Shared implementation constraints

- Do not edit the Design Lab or its copy.
- Do not create different copy for the five design themes.
- Do not alter routes, component placement or responsive layout contracts.
- Update copy once in shared components/content data so every theme stays identical.
- Preserve direct links and verified project details.
- Maintain first-person singular for founder-led work.

## Planned source files

| File | Phase 2 changes |
| --- | --- |
| `components/portfolio/portfolio-app.tsx` | Shared Home, Work, Services, Process, About, Contact, footer, FAQ, empty/error states and CTA copy. |
| `content/projects.ts` | Approved project titles/subtitles, summaries, problem framing, feature copy, technical evidence and demo notices. |
| `content/services.ts` | Service names/descriptions and usage examples, preserving actual capabilities. |
| `app/layout.tsx` | Site-wide title, meta description, Open Graph defaults and later founder/studio schema hooks. |
| `app/{about,contact,process,services,work}/page.tsx` | Page metadata descriptions and titles. |
| `app/work/[slug]/page.tsx` | Project-specific metadata generation, if the route/runtime supports it. |
| `app/robots.ts`, `app/sitemap.ts` | Only if Phase 3 technical SEO requirements justify a change. |
| `app/api/contact/route.ts` | Not a copy-only change; delivery provider or a deliberate form-disabled state must be decided before public promotion. |

## Page-by-page order of work

### 1. Establish shared vocabulary

- Keep the core statement and define an approved vocabulary for product, app, platform, internal system, customer journey, workflow, field work and release.
- Reduce “useful” from 24 source occurrences by replacing it only where it adds no meaning.
- Review every “real-world”, “clarity”, “decision” and “system” occurrence for specificity.
- Create a small glossary in the implementation PR/commit message, not new public UI.

### 2. Home

- Preserve the H1.
- Rewrite hero support copy to name what is built and for whom.
- Make selected work card intros scan as product type + problem + scope.
- Make the three “what LAC does” cards understandable to an owner who does not use product terminology.
- Consolidate end-of-section CTAs so each destination is distinct.

### 3. Services

- Reframe top-level service copy around client situations.
- Keep the seven real capability cards but use buyer terms first and implementation terms second.
- Clarify the relationship between product direction, interface, frontend, backend, databases, integrations and release.
- Do not add pricing, timeframes or support promises without confirmation.

### 4. Work and case studies

- Confirm every individual project fact with the founder before copy change.
- Standardise each project into context → problem → built scope → technical evidence → availability.
- Update demo notices with identical, factual language for the products on free-tier hosting.
- Use only actual technology names; avoid converting categories such as “Web application” into a claimed technology stack.
- Add internal links from each case study to a relevant service and related project only when this remains visually within the existing shared layout.

### 5. Process and About

- Make client participation and outputs clear in each process stage.
- Refine the psychology-to-engineering story into one memorable but modest explanation.
- Keep the direct, personal founder voice and portrait facts.

### 6. Contact, errors and legal-adjacent text

- Decide between a working form with a configured sender and an email-first contact page.
- If form delivery remains disabled, remove the impression that “Send inquiry” succeeds; make direct email the obvious primary path.
- Keep privacy/legal pages factual until legal business information is supplied.
- Make the 404 and unavailable states friendlier and more actionable.

## Founder confirmation required before implementation

### Contact and commercial process

1. Should the contact form actually send email? If yes, which provider and response expectation are approved?
2. What response-time statement, if any, is accurate?
3. Is it acceptable to publish a country/city, languages offered, project budget guidance, engagement minimum or availability?
4. Do you offer post-launch maintenance, hosting, analytics, training or handover? Under what terms?

### Project facts

5. Which technologies are verified for Restaurant SaaS, GR Plus, Imperial’s Hotel, Bar & Grill and IWEAR beyond their current public category tags?
6. Which projects are client work, personal products, concepts or demos, and which names/screenshots have publication permission?
7. Which live links are intended for public portfolio visitors and which need a login, demo account or request-only access?
8. Are there approved, factual outcome statements (not necessarily metrics) for any project: e.g. a workflow consolidated, an offline constraint addressed, or a feature launched?
9. Are ODONTA, Endoac, INNERLY, NOPED, RePlayer, French Sprint, Speech-to-Write and Sendora intended for later public publication? If so, what approval status and assets exist?

### Founder narrative

10. Confirm exact wording for psychology background, years in professional software development, and whether “product developer” is the preferred title.
11. Confirm whether LAC STUDIO should explicitly invite agency/technical-partner collaboration.

## Acceptance criteria for Phase 2

- Every public claim has a source in approved project data or founder confirmation.
- No invented results, testimonials, clients, team size or credentials.
- One content source produces identical text for all five themes.
- The Home page answers in its first viewport: what is built, who it is for and how to start.
- Services and case studies are understandable without software jargon.
- Every CTA has a clear destination and accurate delivery expectation.
- Metadata is ready for a later Phase 3 technical SEO pass.
