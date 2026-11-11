import type { Locale } from "./config.ts";

export type LocaleStatus = "ready" | "planned";

export const englishPortfolioCopy = {
  navigation: { work: "Work", services: "Services", process: "Process", about: "About", discuss: "Discuss a project ↗", homeLabel: "LAC Studio home", mainLabel: "Main navigation" },
  language: { label: "Language", unavailable: "Translation in preparation" },
  footer: { description: "Independent software development for web applications, business systems and mobile workflows.", explore: "Explore", studio: "Studio", contact: "Contact", privacy: "Privacy", legal: "Legal", independent: "Independent by design." },
  shared: { back: "← Back", theChallenge: "The challenge", addresses: "Addresses:", openLiveProject: "Open live project", askAboutDemo: "Ask about a demo", readCaseStudy: "Read case study", exploreProject: "Explore project", discussProject: "Discuss your project", selectedWork: "01 / SELECTED WORK", startConversation: "START A CONVERSATION" },
  metadata: {
    siteTitle: "LAC STUDIO — Independent Software Development",
    siteDescription: "Independent software development for custom web applications, Android and desktop software, SaaS products and business systems.",
    openGraphDescription: "Custom web applications, mobile and desktop software, SaaS products and business systems—from idea to working product.",
    pages: {
      home: { title: "LAC STUDIO — Independent Software Development", description: "Independent software development for custom web applications, Android and desktop software, SaaS products and business systems." },
      work: { title: "Work", description: "Software case studies from LAC STUDIO across healthcare, laboratory operations, restaurants, field work, hospitality and commerce." },
      services: { title: "Services", description: "Custom web applications, Android and desktop software, SaaS development, business automation, backend services and integrations." },
      process: { title: "Process", description: "How LAC STUDIO takes a business problem from first conversation to a working software product." },
      about: { title: "About", description: "Meet Andrei Lucaciu, the independent software developer behind LAC STUDIO, where psychology-informed thinking meets practical engineering." },
      contact: { title: "Contact", description: "Discuss a custom web application, mobile workflow, SaaS product or business system with LAC STUDIO." },
      privacy: { title: "Privacy", description: "Privacy information for LAC STUDIO." },
      legal: { title: "Legal", description: "Legal information for LAC STUDIO." },
    },
  },
  home: {
    schemaDescription: "Independent software development studio building custom web applications, mobile software and business systems.",
    eyebrow: "LAC STUDIO / INDEPENDENT SOFTWARE DEVELOPMENT", titleLead: "From idea to", titleEmphasis: "working product.",
    lead: "I design and build custom web, mobile, desktop and business applications—from customer journeys and internal operations to backend services, data, integrations and launch.",
    primaryCta: "Discuss your project", secondaryCta: "Explore the work", imageLabel: "A product journey from a first sketch to working applications.", imageAlt: "A sketch, product-development milestones and responsive application dashboards.",
    proofLabel: "LAC Studio product focus", proof: [["Web applications", "Customer journeys and tools"], ["Mobile & desktop", "Work beyond the browser"], ["Business systems", "Data, operations and connections"]],
    selectedTitle: "Built for the work behind the screen.", allWork: "See all projects", focusEyebrow: "02 / WHAT LAC DOES", focusTitle: "Software for customers, teams and operations.",
    focus: [["Start with the right problem", "Turn an early idea, a manual process or a confusing customer journey into a focused plan for what to build first."], ["Build the product", "Create web applications, mobile workflows, client portals, booking tools, dashboards and SaaS products from end to end."], ["Connect the work", "Bring together backend services, databases, permissions, automation and integrations so the product supports the operation behind it."]],
    processEyebrow: "03 / HOW WE BUILD", processTitle: "Direct collaboration, from first conversation to release.", process: ["Discover", "Define", "Design", "Build", "Validate", "Launch"], processDetails: ["Context", "Scope", "Experience", "System", "Real use", "Release"], processCta: "See how I work",
    founderEyebrow: "04 / INDEPENDENT BY DESIGN", founderTitle: "Work directly with the person who designs and builds it.", founderCopy: "You work with one person from the first conversation through product design, engineering and launch—without strategy handoffs between separate teams.", founderCta: "Meet the founder", servicesCta: "Explore services",
    contactTitle: "Have something\nworth building?", contactCopy: "Tell me what needs to work better. You'll speak directly with the person who will shape and build it.", contactCta: "Tell me what you're building",
  },
  work: {
    featuredEyebrow: "01 / FEATURED WORK", featuredTitle: "Built for the work behind the screen.", galleryEyebrow: "02 / PUBLIC PROJECT INDEX", galleryTitle: "Case studies with the context behind the interface.",
    galleryIntro: "These are actual software projects across healthcare, laboratory operations, restaurants, field work, hospitality and commerce. Each story explains the product, the challenge it addresses and the public evidence available.",
    faqEyebrow: "03 / QUESTIONS", faqTitle: "Where a project can begin.", contactTitle: "Have a related\nchallenge?", contactCopy: "Bring the context. Together, we can identify the next practical step.",
    faq: [["What kind of software do you build?", "LAC STUDIO builds custom web applications, Android and desktop software, SaaS products, internal business tools and the backend services behind them."], ["Can we start with an early idea?", "Yes. A first conversation can begin with the problem, the people involved and the change you want to make. You do not need a finished specification."], ["Do you only design interfaces?", "No. I can shape the product direction, user flows, frontend, backend, data, integrations and the route to release."], ["How do case studies get published?", "A project appears only when its description, media, outcomes and permission to share them have been confirmed."], ["Can you improve an existing product?", "Yes. Existing workflows, interfaces and technical foundations can be assessed and improved without assuming a complete rebuild is the answer."], ["What should a first message include?", "A short outline of what you are trying to build, improve or connect is enough to begin a productive conversation."]],
  },
  services: { eyebrow: "SERVICES / FROM PRODUCT IDEA TO RELEASE", title: "Software for customers, teams and operations.", lead: "I design and build custom web applications, mobile and desktop software, SaaS products and internal business tools for the work people need to get done.", body: "You can arrive with an early idea, a process held together by spreadsheets or a product that needs to go further. I can take the work from product direction and interface design through frontend, backend, data, integrations and release.", workCta: "See relevant work", scopeLabel: "LAC Studio service scope", scopeEyebrow: "ONE CONNECTED SERVICE", scopeCopy: "One person keeps the product context connected throughout.", offeringsEyebrow: "WHAT I CAN BUILD", offeringsTitle: "Start with the part of the product that needs attention.", offeringsCopy: "The engagement can begin with a focused product decision, a new application or the technical foundation that makes an existing product more dependable.", fitEyebrow: "A GOOD FIT WHEN", fitTitle: "The problem is real—even if the brief is not finished yet.", deliveryEyebrow: "HOW AN ENGAGEMENT WORKS", deliveryTitle: "Start focused. Build with visibility.", contactTitle: "Have work that needs\nbetter software around it?", contactCopy: "Bring the context, the constraint or the unfinished idea. I'll help you identify the next practical step.", },
  about: { eyebrow: "ABOUT / LAC STUDIO", title: "Software built with attention to people and the work they need to do.", lead: "I'm Andrei Lucaciu, an independent software developer who connects how people work with the technology they need to use.", contactTitle: "Bring the problem.\nWe'll shape the right product.", contactCopy: "A first conversation can begin with the work that needs to change—no finished brief required.", },
  process: { eyebrow: "PROCESS / A DIRECT WAY OF WORKING", title: "A clear route from problem to product.", lead: "One person stays close to product direction, interface, engineering and release, so the work remains connected from the first conversation onward.", tabLabel: "Explore the product development process", outputLabel: "What takes shape", involvementLabel: "How we work together", },
  contact: { eyebrow: "CONTACT / START A PROJECT", title: "Tell me what needs to work better.", formNotice: "The inquiry form is being connected and cannot send messages yet. Please use the email address above. See", formButton: "Inquiry form unavailable", privacyLink: "Privacy" },
  legal: { privacyEyebrow: "PRIVACY", legalEyebrow: "LEGAL", privacyTitle: "Privacy, without assumptions.", legalTitle: "Legal information to complete before publication." },
  notFound: { eyebrow: "404 / NOT FOUND", title: "That page could not be found.", copy: "It may have moved, be unpublished or no longer be available. You can return to the portfolio to explore the published work.", cta: "Explore the work" },
  caseStudy: { backToWork: "← Back to Work", previous: "Previous", next: "Next", workflowEyebrow: "01 / PRODUCT OVERVIEW", workflowTitle: "Built around the work people need to do.", evidenceEyebrow: "02 / TECHNICAL EVIDENCE", evidenceTitle: "The structure behind the interface.", technicalFocus: "TECHNICAL FOCUS", implementation: "IMPLEMENTATION", architecture: "ARCHITECTURE", openLive: "Open live project", requestDemo: "Request a live demo", discussSimilar: "Discuss a similar project", contactTitle: "Have a related\nchallenge?" },
} as const;

export type PortfolioCopy = typeof englishPortfolioCopy;

export type TranslationCatalog = Record<Locale, { status: LocaleStatus; dictionary?: Partial<PortfolioCopy> }>;

export const translationCatalog: TranslationCatalog = {
  en: { status: "ready", dictionary: englishPortfolioCopy },
  fr: { status: "planned" },
  ro: { status: "planned" },
  es: { status: "planned" },
};

export const isLocaleReady = (locale: Locale) => translationCatalog[locale].status === "ready";

export const getPortfolioCopy = (locale: Locale): PortfolioCopy => {
  if (!isLocaleReady(locale)) throw new Error(`No complete dictionary is available for locale: ${locale}`);
  return englishPortfolioCopy;
};
