# LAC STUDIO — Content architecture

Status: Phase 1 recommendation. Shared content and geometry must remain identical in Tactile, Nocturne, Editorial, Brutalist and Playground. The design systems change the presentation, not the message, order or component placement.

## Site-wide rules

- One page structure and one copy source across all five themes.
- Use **I** for founder accountability and direct work; use **LAC STUDIO** for the studio/entity.
- Each page needs one primary CTA and one purposeful secondary CTA. Do not repeat the same CTA headline mechanically.
- Lead with a buyer problem, then explain capability, then show proof.
- Keep public project facts sourced from `content/projects.ts`; keep `projects.private.ts` private.
- Make later French localisation a content-layer exercise: avoid English idioms, puns and headings whose effect depends on wordplay.

## Recommended route messages and CTAs

| Route | Main job | Recommended H1 / opening direction | Primary CTA | Secondary CTA | Internal links |
| --- | --- | --- | --- | --- | --- |
| `/` | Qualify and direct | Keep: “From idea to working product.” Explain the full product scope in plain language. | Start a project | Explore work | Services, Process, About |
| `/work` | Prove capability | “Software built around the way work actually happens.” | Discuss a similar project | Open live project / View case study | Relevant services, Process |
| `/work/[slug]` | Build trust in one project | `[Project]: [specific operational/customer outcome]` | Open project / Request demo | Discuss a similar project | Work, related projects, relevant service |
| `/services` | Let buyers self-select | “Software for customer journeys, internal operations and field work.” | Start a project | See relevant work | Work filtered by category in a later phase |
| `/process` | Reduce delivery risk | “A direct route from business problem to working software.” | Start a project | See the work | Services, About |
| `/about` | Explain why the founder is credible | “Software built with attention to people and the work they need to do.” | Start a conversation | See the work | Process, Services |
| `/contact` | Convert and set expectations | “Tell me what needs to work better.” | Email Andrei / Send inquiry when delivery works | Back to work | Privacy |

## Page hierarchy

### Home

1. Positioning: idea → working product.
2. Scope statement: custom web apps, mobile workflows, SaaS and business systems; interface through launch.
3. Selected proof: three projects, product type and problem addressed.
4. Services by client need, not only technical category.
5. Direct collaboration/founder benefit.
6. Process preview.
7. Contact invitation.

The current Home order is close. In Phase 2, make the existing sections more concrete rather than adding new sections.

### Work and project stories

Every published case study should use the following factual sequence:

1. Product name, category, platform and year.
2. One-sentence description of the business or user context.
3. Problem / friction being addressed.
4. What was built: the public, demonstrable scope.
5. Key workflows and interface evidence.
6. Technical approach: only verified stack and architecture facts.
7. Availability: live demo, demo on request, or no live demo—with a reason if relevant.
8. Related project and contact CTA.

Do not add “results” unless founder-approved evidence exists. For now, scope, workflow and technical decisions are stronger than invented KPI cards.

### Services

Group the existing services under three understandable client engagements:

1. **Build a digital product** — customer portals, SaaS, web apps, Android products.
2. **Improve an operation** — internal platforms, role-based workflows, offline and field work, automation.
3. **Strengthen what already exists** — backend/API work, integrations, product UX/UI, performance or workflow improvements.

Keep the detailed capabilities as evidence beneath those groups. This preserves all real services but helps a non-technical buyer recognise their need.

### Process

Keep Align, Frame, Shape, Build, Verify and Release. Each stage should consistently answer:

- What we are trying to learn or decide.
- What the client can review.
- What tangible output is produced.

Only add timeframe, pricing, workshop, documentation, support or maintenance promises after confirmation.

### About

The desired narrative arc:

1. Andrei is an independent product developer.
2. Psychology trained him to pay attention to people, friction, communication and decision-making.
3. Software engineering allows him to turn that understanding into products that work.
4. Direct collaboration means fewer handoffs and tighter ownership.
5. Evidence: products across healthcare, operations, field work, hospitality and commerce.

## Search-intent map

| Intent | Best page | Content proof needed |
| --- | --- | --- |
| Custom software developer / custom business software | Services, Home, Dental Lab / MedicHelp | Plain-language operational-system descriptions. |
| Web application development | Services, Work, relevant case studies | Product scope, web platform and actual technologies where verified. |
| SaaS development | Services, MedicHelp, Restaurant SaaS | Roles, administration, workflow and platform evidence. |
| Android app developer / offline-first app | Services, GR Plus, later approved Android studies | Offline, sync, field constraints and Android facts. |
| Workflow automation / internal business system | Services, Dental Lab, GR Plus | Before/after workflow framing without unverified outcome claims. |
| Independent software developer / product developer | About, Home, Process | Founder identity, singular accountability and capability breadth. |

France can be introduced later only through accurate facts: languages offered, location or service availability. Do not imply French registration or local presence without confirmation.

## FAQ opportunities

Publish only answerable questions:

- What types of software can LAC STUDIO build?
- Can you improve an existing product or internal process?
- Do you work directly with clients from idea to launch?
- Can you build Android or offline-first workflows?
- What should I include in a first message?
- Can I request a demo of a relevant project?

Possible later questions requiring founder confirmation: typical project size, budget range, timeline, ongoing maintenance, availability, languages and locations served.

## Content that should remain unchanged or nearly unchanged

- “From idea to working product.”
- The direct singular statement that the founder designs and builds connected products.
- The project catalogue’s factual focus on problems, capabilities, technologies and transparent demo status.
- The published legal/privacy restraint: do not invent business details.
- The five-theme shared layout contract and hidden Design Lab.
