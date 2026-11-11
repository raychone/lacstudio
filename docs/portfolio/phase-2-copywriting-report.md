# Phase 2 — Copywriting & Conversion Implementation

Date: 2026-11-11

## Scope completed

Phase 2 implements the public-facing copy strategy defined in Phase 1. It preserves the five visual systems, shared responsive geometry, routing, project structure and Design Lab.

Updated public areas:

- Home page and shared navigation/footer language
- Work index, project cards, carousel prompts and work FAQ
- Individual case-study templates
- Services page and service data
- Process page
- About page
- Contact page and its honest delivery-state message
- Public route metadata
- Privacy, legal and not-found wording where a safe clarification was possible

## Final positioning and voice

LAC STUDIO is positioned as an **independent software development studio** for custom web applications, mobile and desktop software, SaaS products, internal business systems, automation and integrations.

The central promise remains **“From idea to working product.”** The supporting copy makes the ownership model explicit: one person can understand the problem, shape the interface, build the system and take it through release without presenting LAC STUDIO as a large agency.

The voice is direct, calm and specific. It avoids artificial scale, unsupported results, generic innovation language and technical jargon without context. “I” is used for founder responsibility and experience; “LAC STUDIO” is used for the studio and its offering.

## Representative copy changes

| Area | Before | Implemented direction |
| --- | --- | --- |
| Home hero | General product-development framing | States that LAC STUDIO designs and builds custom web, mobile, desktop and business applications, including backend services, data, integrations and launch. |
| Services | Broad capability labels | Each service now states what is delivered and where it is useful: internal tools, SaaS foundations, Android/desktop workflows, APIs, offline operation and automation. |
| Projects | Mostly category-led descriptions | Summaries now identify the operational context and the problem being addressed, without inventing commercial outcomes. |
| Process | Abstract delivery language | Steps now explain the route from understanding the problem to scope, interface, engineering, verification and release. |
| Contact | A visible form alongside a non-working endpoint | Email is presented as the reliable way to start; the inactive form explicitly says it cannot submit yet. |

## Psychology and engineering

The About page presents psychology as an active part of the founder’s software practice, not as a discarded former career. It connects observing behaviour, friction, motivation, decisions and unmet needs with practical engineering work: product structure, interfaces, data, workflows, backend systems, integrations and delivery.

The core idea is expressed in natural language: understanding people guides what should be built; engineering makes that understanding useful in a working product. No UX certifications, research outcomes or unverified credentials are claimed.

## Search-friendly terminology introduced

Natural, readable references now cover:

- custom software development
- web application development
- Android and desktop software
- SaaS development
- business systems and internal tools
- backend services, APIs, databases and integrations
- workflow automation
- offline-first applications
- independent software development

Terms are used in relevant headings, service descriptions, project context and metadata rather than collected into keyword lists. No unsupported geographic claim has been added.

## CTA and conversion improvements

Calls to action now reflect where a visitor is in the journey:

- **Discuss your project** for an initial conversation
- **Explore work** for evidence of capability
- **See how I work** for process context
- **Meet the founder** for the personal ownership model
- **Tell me what you’re building** for the final invitation

Work cards, case studies and service sections use contextual variants rather than repeating a single generic CTA. The contact page explicitly welcomes incomplete briefs and explains that a short description of the problem, users and current workflow is enough to begin.

## Reader review

### Reader A — nontechnical business owner

The offering is now visible in plain language: software for customers, teams and operations; reducing fragmented tools, manual work, scheduling friction, weak connectivity and missing operational visibility. Contact is clear even without a finished specification.

### Reader B — startup founder

The site describes end-to-end product responsibility, SaaS foundations, customer-facing applications, roles, data and release. Real project contexts provide evidence without claiming invented outcomes.

### Reader C — technical decision-maker

The copy identifies implementation concerns such as interfaces, data models, backend services, APIs, local persistence, synchronisation and integrations while maintaining an understandable commercial explanation.

## Facts requiring founder confirmation

- The exact role, ownership model, project status and permitted public detail for every listed project.
- Any technology stack that should be named per case study, and whether each listed capability is currently offered commercially.
- Whether maintenance, support, iteration after release, budgets, timelines, languages, territories or availability should be publicly stated.
- The legal identity, business address, registration information, data-controller details and final privacy/retention practices.
- Whether any future private or draft projects may be published.

## Technical blockers

The contact API intentionally returns HTTP 503 because no email delivery provider is configured. Phase 2 does not add one. The visible form is therefore explicitly unavailable and the direct email route remains prominent. A functional provider, spam protection, confirmation behaviour and the associated privacy wording are required before the form can be treated as a lead channel.

## Validation

- `npm run lint` — passed.
- `npm run build` — passed; generated Vercel/Nitro output successfully.
- Existing design-system contract tests — passed: comparison, keyboard interaction, sizing and responsive contracts.
- Production-route checks — passed for `/`, `/work`, `/work/medichelp`, `/services`, `/process`, `/about`, `/contact`, `/privacy` and `/legal`.
- Browser suite — attempted, but Chromium cannot launch in this sandbox because macOS denies its Mach port registration. This is an environment limitation, not a failing browser assertion; visual browser QA remains to be run outside the sandbox.

The build reports non-fatal Vinext/Nitro dynamic-import and optional dependency tracing warnings. They do not prevent the production build.

## Phase 3 readiness

The copy and conversion implementation is ready for Phase 3 technical SEO work once founder decisions above are confirmed. The contact form configuration and final legal/privacy facts remain required production follow-ups.
