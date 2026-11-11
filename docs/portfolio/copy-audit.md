# LAC STUDIO — Copy audit

Status: Phase 1 audit of the existing public implementation. References point to `components/portfolio/portfolio-app.tsx`, `content/projects.ts` and route metadata files. No copy has been changed.

## Executive assessment

The portfolio already has a rare advantage: it shows credible, visually coherent work across business software and customer-facing sites. Its visual system signals craft and the core headline is good. The copy is currently more “studio manifesto” than commercial explanation. A prospective client can understand that the founder is thoughtful and capable, but may need too long to understand what they can buy, whether their specific problem fits, and what will happen after contact.

The recurring word **“useful”** appears 24 times in public portfolio source. “Decisions” and “systems” appear 10 times each. They are valid words but currently make different pages sound like variations of the same paragraph.

## Shared navigation and footer

| Current reference | What works | Gap / risk | Phase 2 direction | Priority |
| --- | --- | --- | --- | --- |
| `Work`, `Services`, `Process`, `About`, `Start a project` | Compact, conventional information architecture; the start CTA is persistent. | No immediate indication of audience or service outcome in navigation. | Keep labels. Make page intros do the qualification work. | P2 |
| Footer: “Independent creative software development studio for products that need to work in the real world.” | Honest independent positioning. | “Creative” and “real world” are broad; it repeats a recurring phrase. | Make the footer state concrete capabilities or client type once. | P2 |

## Home

| Section / current copy | What works | Gap / risk | Recommended direction | Priority |
| --- | --- | --- | --- | --- |
| H1: “From idea to working product.” | Strongest headline on the site. Concise, memorable and true. | Needs a supporting sentence with buyer language. | Keep exactly. Follow with concrete scope: web apps, operational platforms, mobile workflows; interface to launch. | P0 |
| Hero body: “I build complete web, mobile and operational products…” | The best existing scope statement; singular voice is right. | “Operational products” may be unfamiliar to some SMB buyers. | Retain the intent; make one sentence more concrete: systems for customers, teams and field work. | P1 |
| Proof: `Web apps / Mobile / Systems` | Fast scan of breadth. | “Systems” is vague; no buyer outcome. | Use a brief outcome-oriented second line. | P2 |
| “Built for the work behind the screen.” | A good bridge to project evidence. | Slightly abstract without project labels. | Keep as a section headline if cards lead with problem and product type. | P2 |
| “Clarity before complexity.” | Elegant and visually appropriate. | It is generic agency language and does not answer “what do you build?” | Keep only if body examples become concrete; otherwise replace. | P1 |
| “Direct collaboration, from first decision to release.” | Clearly signals founder involvement. | Repeats “decision” language used throughout. | Shift emphasis to continuity: one partner from scope to release. | P1 |
| Contact CTA: “Have something worth building?” | Welcoming and non-aggressive. | Used repeatedly across pages, reducing its impact. | Retain as one canonical end-of-page CTA or differentiate by page intent. | P1 |

## Work index and project cards

| Current reference | What works | Gap / risk | Recommended direction | Priority |
| --- | --- | --- | --- | --- |
| “Built for the work behind the screen.” | Good positioning for software beyond surface design. | Repeats Home headline. | Let Home own it; Work can lead with evidence or outcomes. | P1 |
| Project cards include product type, screenshot, summary, problem, tags, live/case-study links. | This is the strongest commercial evidence on the site. Problem statements are factual and useful. | First card content can still read like product catalogue text rather than a client-relevant story. | Use a consistent `problem → product → capability` scan pattern. | P0 |
| Live demo notices | Responsible and transparent. | “Free database tier” is helpful but should be shown only next to relevant products and phrased as availability, not apology. | Keep fact; standardise language. | P1 |
| FAQ | Answers real initial objections. | The FAQ lacks a question about scope, budget/timeline expectations and direct collaboration. | Add only verified, answerable questions after founder confirmation. | P1 |

## Case studies

| Current reference | What works | Gap / risk | Recommended direction | Priority |
| --- | --- | --- | --- | --- |
| Hero, live/demo CTA, `Problem solved`, feature list, stack and architecture | Good honest baseline. It avoids invented outcomes. | A single screenshot and largely uniform structure leave limited proof of decision-making, constraints and delivery. | Add approved story modules: context, users, before/after workflow, scope, key decisions, selected interface evidence, technical approach, availability. | P0 |
| `Problem solved` | Strongest recurring evidence device. | Wording sometimes promises a solved outcome rather than describing intended product role. | Where needed, use “Designed to address” unless deployment/use is confirmed. | P1 |
| Technical evidence | Credible for technical buyers. | Some technology lists are product-category tags, not stack facts. | Separate verified stack from capabilities; do not imply React/NestJS where not verified. | P0 |

## Services

| Current reference | What works | Gap / risk | Recommended direction | Priority |
| --- | --- | --- | --- | --- |
| “Useful software, shaped around the work it has to do.” | Correct philosophy. | “Useful” is overused and the headline does not identify services at a glance. | Pair with a plain-language subhead naming custom web apps, mobile workflows, SaaS and internal systems. | P0 |
| Service cards | Covers actual demonstrated capabilities: web, SaaS, Android, backend, UX/UI, offline, integrations. | Seven equal cards make every service look equally primary; there is no explicit engagement model. | Group into 3 buyer-facing offers: build a product, improve an operation, extend a technical foundation. Keep the detailed capabilities below. | P1 |
| “A good fit when” | Strong client-problem framing. | Strongest commercial section arrives late. | Surface a condensed version sooner. | P1 |

## Process

| Current reference | What works | Gap / risk | Recommended direction | Priority |
| --- | --- | --- | --- | --- |
| “A clear route from problem to product.” | Direct and believable. | “Clear” and “product” recur; the process may sound universal rather than distinctly yours. | Keep the six stages, but make inputs, outputs and client involvement more tangible. | P1 |
| Align / Frame / Shape / Build / Verify / Release | Logical and accessible progression. | It does not answer timing, commercial checkpoints or what a client receives first. | Add a small expectations block only after founder confirmation: discovery format, review rhythm, milestones, post-launch support. | P1 |

## About

| Current reference | What works | Gap / risk | Recommended direction | Priority |
| --- | --- | --- | --- | --- |
| “Independent thinking, built into the product.” | Distinctive, on-brand headline. | Slightly abstract as a page opener. | Keep if the first paragraph immediately identifies Andrei and his role. | P2 |
| Psychology → software narrative | The most memorable differentiation in the portfolio. It is handled responsibly and does not overclaim. | It is currently buried after a conceptual lead; client may not understand the direct benefit quickly enough. | Explain once in practical terms: observation of people, friction and decisions; engineering turns that into product behaviour. | P0 |
| “30+ years around computers / 7 years building professionally.” | Human, specific, credible. | “Around computers” is informal and could be read as weaker than intended. | Keep the factual years; place them in a fuller founder credential line. | P2 |

## Contact, privacy, legal and states

| Current reference | What works | Gap / risk | Recommended direction | Priority |
| --- | --- | --- | --- | --- |
| Direct email is visible | A reliable contact route now exists. | The form currently posts to an endpoint that intentionally returns 503; visitors can spend time completing a form that cannot send. | P0 operational issue: either connect delivery, or suppress/disable the form and use mailto until ready. Do not imply delivery. | P0 |
| “Let’s make the next step clear.” | Calm contact framing. | Repeats “clear”; does not explain response expectations. | Add a simple, verified next-step statement after founder confirmation. | P1 |
| Privacy / legal placeholders | Honest about missing data. | A public portfolio should not launch legally incomplete; content may reduce trust. | Obtain actual legal identity, data-controller and form-provider details before wider promotion. | P0 |
| 404 copy | Controlled and appropriately restrained. | “This page is not public” may sound like restricted access rather than not found. | Use a standard, friendly not-found explanation. | P2 |

## Metadata and discoverability audit

- Root metadata establishes LAC STUDIO and broad services; page-level descriptions exist for core pages.
- Individual case-study pages currently have no project-specific metadata.
- Only `WebSite` JSON-LD is present. There is no `Organization`/`Person`, `Service`, `CreativeWork` or `SoftwareApplication` structured data.
- `robots.ts` correctly disallows Lab, Privacy and Legal; `sitemap.ts` includes public pages and published projects only when `NEXT_PUBLIC_SITE_URL` exists.
- Open Graph defaults exist, but no dedicated Open Graph images or social descriptions per project are shown in source.
- The public project catalogue contains 7 entries. `projects.private.ts` includes draft-only leads; they must not be described publicly before approval.
