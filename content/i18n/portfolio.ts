import type { Locale } from "./config.ts";
import { pageCopy, type PageCopy } from "./page-copy.ts";

export type LocaleStatus = "ready" | "planned";

export const englishPortfolioCopy = {
  navigation: { work: "Work", services: "Services", pricing: "Pricing", process: "Process", about: "About", discuss: "Discuss a project ↗", homeLabel: "LAC Studio home", mainLabel: "Main navigation" },
  language: { label: "Language", unavailable: "Translation in preparation" },
  footer: { description: "Independent software development for web applications, business systems and mobile workflows.", explore: "Explore", studio: "Studio", contact: "Contact", privacy: "Privacy", legal: "Legal", independent: "Independent by design." },
  shared: { back: "← Back", theChallenge: "The challenge", addresses: "Addresses:", openLiveProject: "Open live project", askAboutDemo: "Ask about a demo", readCaseStudy: "Read case study", exploreProject: "Explore project", discussProject: "Discuss your project", selectedWork: "01 / SELECTED WORK", startConversation: "START A CONVERSATION", chooseDesignSystem: "Choose portfolio design system", design: "Design", loading: "Loading", enableEffects: "Enable interface effects", disableEffects: "Disable interface effects", effectsOn: "FX on", effectsOff: "FX off", toggleNavigation: "Toggle navigation", productPreview: "product preview", mediaToBeSupplied: "Media to be supplied", workflow: "Workflow", evidence: "Evidence", interfacePreview: "interface preview", approvedMediaPlaceholder: "Approved project media placeholder", previousFeaturedProject: "Previous featured project", nextFeaturedProject: "Next featured project", resumeFeaturedAutoplay: "Resume featured work autoplay", pauseFeaturedAutoplay: "Pause featured work autoplay", chooseFeaturedWork: "Choose featured work", showFeaturedWork: "Show featured work", caseStudiesInReview: "CASE STUDIES IN REVIEW", unpublishedWorkTitle: "Each project is published with enough context to be understood.", unpublishedWorkCopy: "LAC STUDIO does not publish confidential detail, invented outcomes or visuals without approval. More project stories will appear when they are ready to share.", workPlaceholders: [{ eyebrow: "CASE STUDY SLOT / 01", title: "A product story with the right context.", summary: "This space is reserved for an approved case study with a verified brief, scope, visual direction and evidence.", meta: "APPROVED MEDIA / PENDING" }, { eyebrow: "CASE STUDY SLOT / 02", title: "An operational system, explained clearly.", summary: "The work page presents the context behind an interface, rather than only an isolated screen or an unverified claim.", meta: "APPROVED MEDIA / PENDING" }, { eyebrow: "CASE STUDY SLOT / 03", title: "A workflow story, when it is ready.", summary: "Each public story is introduced only after its description, media and publishing permission have been confirmed.", meta: "APPROVED MEDIA / PENDING" }] },
  metadata: {
    siteTitle: "LAC STUDIO — Independent Software Development",
    siteDescription: "Independent software development for custom web applications, Android and desktop software, SaaS products and business systems.",
    openGraphDescription: "Custom web applications, mobile and desktop software, SaaS products and business systems—from idea to working product.",
    pages: {
      home: { title: "LAC STUDIO — Independent Software Development", description: "Independent software development for custom web applications, Android and desktop software, SaaS products and business systems." },
      work: { title: "Work", description: "Software case studies from LAC STUDIO across healthcare, laboratory operations, restaurants, field work, hospitality and commerce." },
      services: { title: "Services", description: "Custom web applications, Android and desktop software, SaaS development, business automation, backend services and integrations." },
      pricing: { title: "Pricing", description: "Indicative starting prices for websites, web applications, Android apps, SaaS products and complex software projects." },
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
    focus: [["Start with the right problem", "Turn an early application idea, a manual process or a difficult customer journey into a clear first product direction."], ["Build the product", "Design and build the custom software people need for customer work and internal operations, from interface through application logic."], ["Connect the work", "Bring backend services, data, permissions and integrations together so disconnected tools become one workable system."]],
    valueEyebrow: "03 / WHAT YOU GET", valueTitle: "What you get from working together", valueLead: "A focused product engagement with practical outcomes, shaped around the agreed scope.", value: [["A clear direction", "Clarify the problem, prioritize requirements and agree what is worth building first."], ["Software built around your needs", "Shape the product around actual users, workflows and business context."], ["Real functionality", "Bring interface, application logic, data, backend services and integrations together where they are needed."], ["Direct collaboration", "Work with the developer responsible for the product and the decisions behind it."], ["A defined delivery", "Align deliverables, validation and release preparation with the scope agreed together."]], valueCta: "See indicative starting prices",
    processEyebrow: "04 / HOW WE BUILD", processTitle: "Direct collaboration, from first conversation to release.", process: ["Discover", "Define", "Design", "Build", "Validate", "Launch"], processDetails: ["Context", "Scope", "Experience", "System", "Real use", "Release"], processCta: "See how I work",
    founderEyebrow: "05 / INDEPENDENT BY DESIGN", founderTitle: "Work directly with the person who designs and builds it.", founderCopy: "You work with one person from the first conversation through product design, engineering and launch—without strategy handoffs between separate teams.", founderBenefit: "That continuity keeps context close, reduces communication overhead and supports clearer product decisions.", founderCta: "Meet the founder", servicesCta: "Explore services",
    contactTitle: "Have something\nworth building?", contactCopy: "Bring a clear specification or an early idea. Tell me what needs to work better, and we can identify a practical next step.", contactCta: "Tell me what you're building",
  },
  work: {
    featuredEyebrow: "01 / FEATURED WORK", featuredTitle: "Built for the work behind the screen.", galleryEyebrow: "02 / PUBLIC PROJECT INDEX", galleryTitle: "Case studies with the context behind the interface.",
    galleryIntro: "These are actual software projects across healthcare, laboratory operations, restaurants, field work, hospitality and commerce. Each story explains the product, the challenge it addresses and the public evidence available.",
    faqEyebrow: "03 / QUESTIONS", faqTitle: "Where a project can begin.", contactTitle: "Have a related\nchallenge?", contactCopy: "Bring the context. Together, we can identify the next practical step.",
    faq: [["What kind of software do you build?", "LAC STUDIO builds custom web applications, Android and desktop software, SaaS products, internal business tools and the backend services behind them."], ["Can we start with an early idea?", "Yes. A first conversation can begin with the problem, the people involved and the change you want to make. You do not need a finished specification."], ["Do you only design interfaces?", "No. I can shape the product direction, user flows, frontend, backend, data, integrations and the route to release."], ["How do case studies get published?", "A project appears only when its description, media, outcomes and permission to share them have been confirmed."], ["Can you improve an existing product?", "Yes. Existing workflows, interfaces and technical foundations can be assessed and improved without assuming a complete rebuild is the answer."], ["What should a first message include?", "A short outline of what you are trying to build, improve or connect is enough to begin a productive conversation."]], filters: { label: "Filter projects", all: "All projects", web: "Web & SaaS", android: "Android apps" },
  },
  services: { eyebrow: "SERVICES / FROM PRODUCT IDEA TO RELEASE", title: "Software for customers, teams and operations.", lead: "I design and build custom web applications, mobile and desktop software, SaaS products and internal business tools for the work people need to get done.", body: "You can arrive with an early idea, a process held together by spreadsheets or a product that needs to go further. I can take the work from product direction and interface design through frontend, backend, data, integrations and release.", workCta: "See relevant work", scopeLabel: "LAC Studio service scope", scopeEyebrow: "ONE CONNECTED SERVICE", scopeCopy: "One person keeps the product context connected throughout.", offeringsEyebrow: "WHAT I CAN BUILD", offeringsTitle: "Start with the part of the product that needs attention.", offeringsCopy: "The engagement can begin with a focused product decision, a new application or the technical foundation that makes an existing product more dependable.", fitEyebrow: "A GOOD FIT WHEN", fitTitle: "The problem is real—even if the brief is not finished yet.", deliveryEyebrow: "HOW AN ENGAGEMENT WORKS", deliveryTitle: "Start focused. Build with visibility.", contactTitle: "Have work that needs\nbetter software around it?", contactCopy: "Bring the context, the constraint or the unfinished idea. I'll help you identify the next practical step.", },
  about: { eyebrow: "ABOUT / LAC STUDIO", title: "Software built with attention to people and the work they need to do.", lead: "I'm Andrei Lucaciu, an independent software developer who connects how people work with the technology they need to use.", contactTitle: "Bring the problem.\nWe'll shape the right product.", contactCopy: "A first conversation can begin with the work that needs to change—no finished brief required.", },
  process: { eyebrow: "PROCESS / A DIRECT WAY OF WORKING", title: "A clear route from problem to product.", lead: "One person stays close to product direction, interface, engineering and release, so the work remains connected from the first conversation onward.", tabLabel: "Explore the product development process", outputLabel: "What takes shape", involvementLabel: "How we work together", },
  contact: { eyebrow: "CONTACT / START A PROJECT", title: "Tell me what needs to work better.", formNotice: "You can use the form below or the email address above. See", formButton: "Send inquiry", privacyLink: "Privacy" },
  legal: {
    privacyEyebrow: "PRIVACY",
    legalEyebrow: "LEGAL",
    privacyTitle: "Privacy policy.",
    legalTitle: "Legal notice.",
    privacySections: [
      ["Controller and contact", "LAC STUDIO is currently an independent portfolio operated by Lucaciu Andrei Codrin. Until a company is incorporated, he is the controller for personal data collected through this website. For privacy questions or to exercise your rights, email contact@lacstudio.ro."],
      ["Information processed", "When you send an inquiry, the form processes your name, email address, selected project type, optional budget and timeline, and the message you choose to provide. To protect the form from abuse, the service also processes a one-way hash of the submitting IP address."],
      ["Purpose and legal basis", "Inquiry information is used only to read, reply to and, where appropriate, prepare for a requested project conversation. This processing is carried out at your request before a potential contract. The rate limit is used for the legitimate interest of protecting the site and its communication channel from abuse."],
      ["Recipients and service providers", "The form uses Resend to deliver inquiry emails, Upstash for rate limiting, Vercel for hosting infrastructure and LeafMail for the contact mailbox. These providers may process the information strictly needed to provide their service and secure the communication. Their own privacy notices apply to their services."],
      ["Retention", "Inquiry content is kept for no more than 12 months after the last meaningful exchange, then deleted unless a longer period is necessary to establish, exercise or defend a legal claim. The hashed rate-limit key expires automatically after 10 minutes."],
      ["Cookies and local storage", "This portfolio does not use analytics, advertising cookies or marketing trackers. It stores only two non-personal display preferences in your browser's local storage: the selected visual system and whether interface effects are enabled. You can remove them at any time through your browser settings."],
      ["Your rights", "Depending on applicable law, you may request access, correction, deletion, restriction, objection or portability of your personal data. Contact contact@lacstudio.ro first; a response is normally provided within one month. You may also complain to the relevant data-protection authority, including the CNIL where French law applies."],
      ["Updates", "This policy reflects the current independent status of LAC STUDIO and was last updated on 14 November 2026. It will be updated when the planned French company is incorporated or the data practices change."],
    ],
    legalSections: [
      ["Site editor", "The site is published under the name LAC STUDIO by Lucaciu Andrei Codrin, currently acting as an independent individual. Contact: contact@lacstudio.ro."],
      ["Current status", "LAC STUDIO is not yet incorporated as a French company. This website is a portfolio and a way to start a conversation; it does not publish company registration, VAT or registered-office details that do not yet exist. Any future company details will replace this notice after incorporation."],
      ["Hosting", "The site is hosted on Vercel infrastructure. Host: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States."],
      ["Intellectual property", "Unless stated otherwise, the site design, text, code and LAC STUDIO identity are protected works. Project names, logos, screenshots and other client materials remain the property of their respective owners. Reuse requires prior written permission from the relevant rights holder."],
      ["Information and links", "The site is provided for general information and portfolio presentation. Reasonable care is taken to keep it accurate, but no guarantee is made that every page is complete, current or suitable for a particular purpose. External links are provided for convenience; LAC STUDIO does not control their content."],
      ["Services and disputes", "Nothing on this site is a binding offer or a promise of availability. The scope, price, timing, intellectual-property terms and any applicable law for a project are set out only in a separate written agreement or written acceptance. This notice will be updated once a legal entity is incorporated."],
      ["Report an issue", "For an intellectual-property, privacy or content concern, contact contact@lacstudio.ro with enough detail to identify the page or material concerned."],
    ],
    privacyParagraphs: [
      "LAC STUDIO does not currently install analytics. If enabled, the inquiry form sends the contact details and project description you submit to Resend for delivery to LAC STUDIO's contact mailbox. The application does not store inquiry messages in its own database.",
      "This notice must be completed with the data controller, contact method, processing purpose, retention period, legal basis and the current provider details before public promotion.",
    ],
    legalParagraphs: [
      "Business registration details, registered address, governing-law details and other legally required information have not yet been supplied for publication.",
      "Before wider public promotion, replace this notice with verified information appropriate to the studio's legal situation and the markets it serves.",
    ],
  },
  notFound: { eyebrow: "404 / NOT FOUND", title: "That page could not be found.", copy: "It may have moved, be unpublished or no longer be available. You can return to the portfolio to explore the published work.", cta: "Explore the work" },
  caseStudy: { backToWork: "← Back to Work", previous: "Previous", next: "Next", navigationLabel: "Case study navigation", workflowEyebrow: "01 / PRODUCT OVERVIEW", workflowTitle: "Built around the work people need to do.", evidenceEyebrow: "02 / TECHNICAL EVIDENCE", evidenceTitle: "The structure behind the interface.", technicalFocus: "TECHNICAL FOCUS", implementation: "IMPLEMENTATION", architecture: "ARCHITECTURE", attributionEyebrow: "PROJECT ATTRIBUTION", originalAttribution: "{project} — © {year} {holder}. Original software, interface design and portfolio presentation by LAC STUDIO. All rights reserved.", neutralAttribution: "{project} — Project presentation and development work by LAC STUDIO.", openLive: "Open live project", requestDemo: "Request a live demo", discussSimilar: "Discuss a similar project", contactTitle: "Have a related\nchallenge?" },
} as const;

type Widen<T> = T extends string ? string : T extends readonly (infer Item)[] ? readonly Widen<Item>[] : T extends object ? { [Key in keyof T]: Widen<T[Key]> } : T;
export type PortfolioCopy = Widen<typeof englishPortfolioCopy>;

const translations: Record<Exclude<Locale, "en">, PortfolioCopy> = {
  fr: {
    ...englishPortfolioCopy,
    navigation: { work: "Réalisations", services: "Services", process: "Méthode", about: "À propos", discuss: "Parler du projet ↗", homeLabel: "Accueil LAC Studio", mainLabel: "Navigation principale" },
    language: { label: "Langue", unavailable: "Traduction en préparation" },
    footer: { description: "Développement logiciel indépendant pour applications web, systèmes métier et flux mobiles.", explore: "Explorer", studio: "Studio", contact: "Contact", privacy: "Confidentialité", legal: "Mentions légales", independent: "Indépendant par choix." },
    shared: { back: "← Retour", theChallenge: "Le défi", addresses: "Répond à :", openLiveProject: "Voir le projet", askAboutDemo: "Demander une démo", readCaseStudy: "Lire l'étude de cas", exploreProject: "Voir le projet", discussProject: "Parler de votre projet", selectedWork: "01 / RÉALISATIONS SÉLECTIONNÉES", startConversation: "DÉMARRER LA CONVERSATION" },
    metadata: { siteTitle: "LAC STUDIO — Développement logiciel indépendant", siteDescription: "Développement logiciel indépendant : applications web sur mesure, logiciels Android et desktop, produits SaaS et systèmes métier.", openGraphDescription: "Applications web, logiciels mobiles et desktop, produits SaaS et systèmes métier — de l'idée au produit fonctionnel.", pages: { home: { title: "LAC STUDIO — Développement logiciel indépendant", description: "Applications web sur mesure, logiciels Android et desktop, produits SaaS et systèmes métier." }, work: { title: "Réalisations", description: "Études de cas LAC STUDIO : santé, laboratoires, restauration, travail terrain, hôtellerie et commerce." }, services: { title: "Services", description: "Applications web sur mesure, Android et desktop, SaaS, automatisation, backend et intégrations." }, process: { title: "Méthode", description: "Comment LAC STUDIO transforme un problème métier en produit logiciel fonctionnel." }, about: { title: "À propos", description: "Andrei Lucaciu, développeur indépendant derrière LAC STUDIO, associe une compréhension des usages à une ingénierie pragmatique." }, contact: { title: "Contact", description: "Échangez avec LAC STUDIO à propos d'une application web, d'un flux mobile, d'un produit SaaS ou d'un système métier." }, privacy: { title: "Confidentialité", description: "Informations de confidentialité de LAC STUDIO." }, legal: { title: "Mentions légales", description: "Informations légales de LAC STUDIO." } } },
    home: { schemaDescription: "Studio indépendant de développement logiciel créant des applications web sur mesure, des logiciels mobiles et des systèmes métier.", eyebrow: "LAC STUDIO / DÉVELOPPEMENT LOGICIEL INDÉPENDANT", titleLead: "De l'idée au", titleEmphasis: "produit fonctionnel.", lead: "Je conçois et développe des applications web, mobiles, desktop et métier sur mesure — du parcours client et des opérations internes au backend, aux données, aux intégrations et à la mise en ligne.", primaryCta: "Parler de votre projet", secondaryCta: "Voir les réalisations", imageLabel: "Un parcours produit, de la première esquisse à des applications opérationnelles.", imageAlt: "Une esquisse, des étapes de développement produit et des tableaux de bord applicatifs responsives.", proofLabel: "Domaines produits de LAC Studio", proof: [["Applications web", "Parcours et outils client"], ["Mobile et desktop", "Le travail au-delà du navigateur"], ["Systèmes métier", "Données, opérations et connexions"]], selectedTitle: "Conçu pour le travail derrière l'écran.", allWork: "Voir tous les projets", focusEyebrow: "02 / CE QUE FAIT LAC", focusTitle: "Des logiciels pour les clients, les équipes et les opérations.", focus: [["Partir du bon problème", "Transformer une idée, un processus manuel ou un parcours client confus en plan clair pour la première version."], ["Construire le produit", "Créer de bout en bout applications web, flux mobiles, portails clients, outils de réservation, tableaux de bord et produits SaaS."], ["Relier le travail", "Associer backend, bases de données, droits, automatisation et intégrations pour soutenir l'opération réelle."]], processEyebrow: "03 / NOTRE MÉTHODE", processTitle: "Une collaboration directe, de la première discussion à la mise en ligne.", process: ["Découvrir", "Cadrer", "Concevoir", "Développer", "Valider", "Lancer"], processDetails: ["Contexte", "Périmètre", "Expérience", "Système", "Usage réel", "Mise en ligne"], processCta: "Voir comment je travaille", founderEyebrow: "04 / INDÉPENDANT PAR CHOIX", founderTitle: "Travaillez directement avec la personne qui conçoit et développe.", founderCopy: "Vous échangez avec une seule personne, de la première discussion au design produit, à l'ingénierie et au lancement — sans transmission entre équipes distinctes.", founderCta: "Rencontrer le fondateur", servicesCta: "Voir les services", contactTitle: "Un projet qui mérite\nd'être construit ?", contactCopy: "Dites-moi ce qui doit mieux fonctionner. Vous parlerez directement à la personne qui concevra et développera le produit.", contactCta: "Parlez-moi de votre projet" },
    work: { featuredEyebrow: "01 / RÉALISATIONS SÉLECTIONNÉES", featuredTitle: "Conçu pour le travail derrière l'écran.", galleryEyebrow: "02 / PROJETS PUBLICS", galleryTitle: "Des études de cas qui expliquent l'interface.", galleryIntro: "Des projets logiciels réels pour la santé, les laboratoires, la restauration, le terrain, l'hôtellerie et le commerce. Chaque étude présente le produit, le problème traité et les éléments publics disponibles.", faqEyebrow: "03 / QUESTIONS", faqTitle: "Comment un projet peut commencer.", contactTitle: "Un défi\nsemblable ?", contactCopy: "Apportez le contexte. Nous pourrons identifier ensemble la prochaine étape utile.", faq: [["Quels logiciels développez-vous ?", "LAC STUDIO crée des applications web sur mesure, des logiciels Android et desktop, des produits SaaS, des outils métier internes et les services backend qui les soutiennent."], ["Peut-on commencer par une idée encore floue ?", "Oui. La première discussion peut partir du problème, des personnes concernées et du changement recherché. Vous n'avez pas besoin d'un cahier des charges finalisé."], ["Faites-vous seulement les interfaces ?", "Non. Je peux travailler la direction produit, les parcours, le frontend, le backend, les données, les intégrations et le chemin vers la mise en ligne."], ["Comment les études de cas sont-elles publiées ?", "Un projet est publié seulement lorsque sa description, ses médias, ses résultats et l'autorisation de les partager ont été confirmés."], ["Pouvez-vous améliorer un produit existant ?", "Oui. Les flux, interfaces et fondations techniques existants peuvent être évalués et améliorés sans présumer qu'une reconstruction complète est nécessaire."], ["Que faut-il écrire dans un premier message ?", "Quelques lignes sur ce que vous souhaitez construire, améliorer ou relier suffisent pour commencer une discussion utile."]] },
    services: { eyebrow: "SERVICES / DE L'IDÉE PRODUIT À LA MISE EN LIGNE", title: "Des logiciels pour les clients, les équipes et les opérations.", lead: "Je conçois et développe des applications web, des logiciels mobiles et desktop, des produits SaaS et des outils métier internes pour le travail réel.", body: "Vous pouvez arriver avec une idée, un processus tenu par des tableurs ou un produit qui doit aller plus loin. Je peux accompagner le projet de la direction produit et l'interface jusqu'au frontend, backend, données, intégrations et lancement.", workCta: "Voir des projets proches", scopeLabel: "Périmètre de service LAC Studio", scopeEyebrow: "UN SERVICE CONNECTÉ", scopeCopy: "Une seule personne garde le contexte produit relié tout au long du projet.", offeringsEyebrow: "CE QUE JE PEUX CONSTRUIRE", offeringsTitle: "Commencez par la partie du produit qui mérite l'attention.", offeringsCopy: "La collaboration peut démarrer avec une décision produit ciblée, une nouvelle application ou la fondation technique qui rend un produit existant plus fiable.", fitEyebrow: "UN BON CADRE QUAND", fitTitle: "Le problème est réel, même si le brief ne l'est pas encore.", deliveryEyebrow: "COMMENT SE DÉROULE UNE COLLABORATION", deliveryTitle: "Commencer avec précision. Construire avec visibilité.", contactTitle: "Un travail qui demande\nun meilleur logiciel ?", contactCopy: "Apportez le contexte, la contrainte ou l'idée inachevée. Je vous aiderai à identifier la prochaine étape pragmatique." },
    about: { eyebrow: "À PROPOS / LAC STUDIO", title: "Des logiciels attentifs aux personnes et au travail qu'elles accomplissent.", lead: "Je suis Andrei Lucaciu, développeur logiciel indépendant. Je relie la manière dont les personnes travaillent à la technologie qu'elles doivent utiliser.", contactTitle: "Apportez le problème.\nConstruisons le bon produit.", contactCopy: "Une première discussion peut partir du travail à faire évoluer — aucun brief fini n'est nécessaire." },
    process: { eyebrow: "MÉTHODE / UNE FAÇON DIRECTE DE TRAVAILLER", title: "Un chemin clair, du problème au produit.", lead: "Une même personne reste proche de la direction produit, de l'interface, de l'ingénierie et du lancement, pour que le travail reste cohérent dès la première discussion.", tabLabel: "Explorer le processus de développement produit", outputLabel: "Ce qui prend forme", involvementLabel: "Comment nous travaillons ensemble" },
    contact: { eyebrow: "CONTACT / DÉMARRER UN PROJET", title: "Dites-moi ce qui doit mieux fonctionner.", formNotice: "Vous pouvez utiliser le formulaire ci-dessous ou l'adresse e-mail ci-dessus. Voir", formButton: "Envoyer la demande", privacyLink: "Confidentialité" },
    legal: { privacyEyebrow: "CONFIDENTIALITÉ", legalEyebrow: "MENTIONS LÉGALES", privacyTitle: "La confidentialité, sans supposition.", legalTitle: "Informations légales à compléter avant publication." },
    notFound: { eyebrow: "404 / PAGE INTROUVABLE", title: "Cette page est introuvable.", copy: "Elle a peut-être été déplacée, n'est pas publiée ou n'est plus disponible. Vous pouvez revenir au portfolio pour explorer les projets publiés.", cta: "Voir les réalisations" },
    caseStudy: { backToWork: "← Retour aux réalisations", previous: "Précédent", next: "Suivant", navigationLabel: "Navigation de l'étude de cas", workflowEyebrow: "01 / VUE D'ENSEMBLE PRODUIT", workflowTitle: "Construit autour du travail réel des utilisateurs.", evidenceEyebrow: "02 / ÉLÉMENTS TECHNIQUES", evidenceTitle: "La structure derrière l'interface.", technicalFocus: "FOCUS TECHNIQUE", implementation: "MISE EN ŒUVRE", architecture: "ARCHITECTURE", attributionEyebrow: "ATTRIBUTION DU PROJET", originalAttribution: "{project} — © {year} {holder}. Logiciel original, conception de l’interface et présentation du portfolio par LAC STUDIO. Tous droits réservés.", neutralAttribution: "{project} — Présentation du projet et travail de développement par LAC STUDIO.", openLive: "Voir le projet", requestDemo: "Demander une démo", discussSimilar: "Parler d'un projet similaire", contactTitle: "Un défi\nsemblable ?" },
  },
  ro: {
    ...englishPortfolioCopy,
    navigation: { work: "Proiecte", services: "Servicii", process: "Proces", about: "Despre", discuss: "Discută un proiect ↗", homeLabel: "Pagina principală LAC Studio", mainLabel: "Navigare principală" },
    language: { label: "Limbă", unavailable: "Traducerea este în pregătire" },
    footer: { description: "Dezvoltare software independentă pentru aplicații web, sisteme de business și fluxuri mobile.", explore: "Explorează", studio: "Studio", contact: "Contact", privacy: "Confidențialitate", legal: "Informații legale", independent: "Independent prin alegere." },
    shared: { back: "← Înapoi", theChallenge: "Provocarea", addresses: "Rezolvă:", openLiveProject: "Deschide proiectul live", askAboutDemo: "Întreabă despre demo", readCaseStudy: "Citește studiul de caz", exploreProject: "Vezi proiectul", discussProject: "Discută proiectul", selectedWork: "01 / PROIECTE SELECTATE", startConversation: "ÎNCEPE O CONVERSAȚIE" },
    metadata: { siteTitle: "LAC STUDIO — Dezvoltare software independentă", siteDescription: "Dezvoltare software independentă: aplicații web la comandă, software Android și desktop, produse SaaS și sisteme de business.", openGraphDescription: "Aplicații web, software mobil și desktop, produse SaaS și sisteme de business — de la idee la produs funcțional.", pages: { home: { title: "LAC STUDIO — Dezvoltare software independentă", description: "Aplicații web la comandă, software Android și desktop, produse SaaS și sisteme de business." }, work: { title: "Proiecte", description: "Studii de caz LAC STUDIO pentru sănătate, laboratoare, restaurante, activitate pe teren, ospitalitate și comerț." }, services: { title: "Servicii", description: "Aplicații web, Android și desktop la comandă, SaaS, automatizare, backend și integrări." }, process: { title: "Proces", description: "Cum transformă LAC STUDIO o problemă de business într-un produs software funcțional." }, about: { title: "Despre", description: "Andrei Lucaciu, dezvoltatorul independent din spatele LAC STUDIO, combină înțelegerea oamenilor cu inginerie pragmatică." }, contact: { title: "Contact", description: "Discută cu LAC STUDIO despre o aplicație web, un flux mobil, un produs SaaS sau un sistem de business." }, privacy: { title: "Confidențialitate", description: "Informații despre confidențialitate pentru LAC STUDIO." }, legal: { title: "Informații legale", description: "Informații legale pentru LAC STUDIO." } } },
    home: { schemaDescription: "Studio independent de dezvoltare software care construiește aplicații web la comandă, software mobil și sisteme de business.", eyebrow: "LAC STUDIO / DEZVOLTARE SOFTWARE INDEPENDENTĂ", titleLead: "De la idee la", titleEmphasis: "produs funcțional.", lead: "Proiectez și construiesc aplicații web, mobile, desktop și de business — de la parcursuri de client și operațiuni interne la backend, date, integrări și lansare.", primaryCta: "Discută proiectul", secondaryCta: "Vezi proiectele", imageLabel: "Un traseu de produs, de la prima schiță la aplicații funcționale.", imageAlt: "O schiță, etape de dezvoltare a produsului și dashboarduri responsive pentru aplicații.", proofLabel: "Direcțiile de produs LAC Studio", proof: [["Aplicații web", "Parcursuri și instrumente pentru clienți"], ["Mobile și desktop", "Muncă dincolo de browser"], ["Sisteme de business", "Date, operațiuni și conexiuni"]], selectedTitle: "Construite pentru munca din spatele ecranului.", allWork: "Vezi toate proiectele", focusEyebrow: "02 / CE FACE LAC", focusTitle: "Software pentru clienți, echipe și operațiuni.", focus: [["Pornim de la problema potrivită", "Transformăm o idee timpurie, un proces manual sau un parcurs confuz într-un plan clar pentru prima versiune."], ["Construim produsul", "Creăm end-to-end aplicații web, fluxuri mobile, portaluri de clienți, instrumente de rezervare, dashboarduri și produse SaaS."], ["Conectăm activitatea", "Aducem împreună backendul, bazele de date, permisiunile, automatizările și integrările pentru ca produsul să susțină operațiunea reală."]], processEyebrow: "03 / CUM LUCRĂM", processTitle: "Colaborare directă, de la prima conversație până la lansare.", process: ["Descoperim", "Definim", "Proiectăm", "Construim", "Validăm", "Lansăm"], processDetails: ["Context", "Arie", "Experiență", "Sistem", "Utilizare reală", "Lansare"], processCta: "Vezi cum lucrez", founderEyebrow: "04 / INDEPENDENT PRIN ALEGERE", founderTitle: "Lucrezi direct cu persoana care proiectează și construiește.", founderCopy: "Colaborezi cu o singură persoană, de la prima conversație până la design de produs, inginerie și lansare — fără predări între echipe diferite.", founderCta: "Cunoaște fondatorul", servicesCta: "Explorează serviciile", contactTitle: "Ai ceva ce merită\nconstruit?", contactCopy: "Spune-mi ce trebuie să funcționeze mai bine. Vei vorbi direct cu persoana care va proiecta și construi produsul.", contactCta: "Spune-mi ce construiești" },
    work: { featuredEyebrow: "01 / PROIECTE SELECTATE", featuredTitle: "Construite pentru munca din spatele ecranului.", galleryEyebrow: "02 / INDEX PUBLIC DE PROIECTE", galleryTitle: "Studii de caz cu contextul din spatele interfeței.", galleryIntro: "Sunt proiecte software reale din sănătate, laboratoare, restaurante, activitate pe teren, ospitalitate și comerț. Fiecare poveste explică produsul, problema rezolvată și dovezile publice disponibile.", faqEyebrow: "03 / ÎNTREBĂRI", faqTitle: "De unde poate începe un proiect.", contactTitle: "Ai o provocare\nasemănătoare?", contactCopy: "Adu contextul. Împreună putem identifica următorul pas practic.", faq: [["Ce tip de software construiești?", "LAC STUDIO construiește aplicații web la comandă, software Android și desktop, produse SaaS, instrumente interne de business și serviciile backend din spatele lor."], ["Putem porni de la o idee incipientă?", "Da. Prima conversație poate începe cu problema, oamenii implicați și schimbarea dorită. Nu ai nevoie de o specificație finală."], ["Te ocupi doar de interfețe?", "Nu. Pot defini direcția produsului, fluxurile de utilizator, frontendul, backendul, datele, integrările și drumul spre lansare."], ["Cum sunt publicate studiile de caz?", "Un proiect apare doar după ce descrierea, materialele vizuale, rezultatele și permisiunea de publicare sunt confirmate."], ["Poți îmbunătăți un produs existent?", "Da. Fluxurile, interfețele și fundațiile tehnice existente pot fi evaluate și îmbunătățite fără a presupune că o reconstrucție completă este răspunsul."], ["Ce ar trebui să conțină primul mesaj?", "Câteva rânduri despre ceea ce vrei să construiești, îmbunătățești sau conectezi sunt suficiente pentru a începe o conversație productivă."]] },
    services: { eyebrow: "SERVICII / DE LA IDEE DE PRODUS LA LANSARE", title: "Software pentru clienți, echipe și operațiuni.", lead: "Proiectez și construiesc aplicații web la comandă, software mobil și desktop, produse SaaS și instrumente interne pentru munca pe care oamenii trebuie să o facă.", body: "Poți veni cu o idee incipientă, un proces ținut împreună de foi de calcul sau un produs care trebuie dus mai departe. Pot prelua munca de la direcția de produs și designul interfeței până la frontend, backend, date, integrări și lansare.", workCta: "Vezi proiecte relevante", scopeLabel: "Aria serviciilor LAC Studio", scopeEyebrow: "UN SERVICIU CONECTAT", scopeCopy: "O singură persoană păstrează conectat contextul produsului pe tot parcursul.", offeringsEyebrow: "CE POT CONSTRUI", offeringsTitle: "Începe cu partea din produs care are nevoie de atenție.", offeringsCopy: "Colaborarea poate porni de la o decizie de produs concentrată, o aplicație nouă sau fundația tehnică ce face un produs existent mai sigur și mai de încredere.", fitEyebrow: "UN PARTENERIAT POTRIVIT CÂND", fitTitle: "Problema este reală, chiar dacă brief-ul nu este încă gata.", deliveryEyebrow: "CUM FUNCȚIONEAZĂ O COLABORARE", deliveryTitle: "Începe clar. Construiește cu vizibilitate.", contactTitle: "Ai muncă ce are nevoie\nde software mai bun?", contactCopy: "Adu contextul, constrângerea sau ideea neterminată. Te ajut să identifici următorul pas practic." },
    about: { eyebrow: "DESPRE / LAC STUDIO", title: "Software construit cu atenție la oameni și la munca pe care o au de făcut.", lead: "Sunt Andrei Lucaciu, dezvoltator software independent. Conectez felul în care lucrează oamenii cu tehnologia pe care trebuie să o folosească.", contactTitle: "Adu problema.\nVom modela produsul potrivit.", contactCopy: "O primă conversație poate începe cu munca ce trebuie schimbată — nu este nevoie de un brief finalizat." },
    process: { eyebrow: "PROCES / O MODALITATE DIRECTĂ DE LUCRU", title: "Un drum clar de la problemă la produs.", lead: "O singură persoană rămâne aproape de direcția de produs, interfață, inginerie și lansare, astfel încât munca să rămână conectată din prima conversație.", tabLabel: "Explorează procesul de dezvoltare a produsului", outputLabel: "Ce prinde formă", involvementLabel: "Cum lucrăm împreună" },
    contact: { eyebrow: "CONTACT / ÎNCEPE UN PROIECT", title: "Spune-mi ce trebuie să funcționeze mai bine.", formNotice: "Poți folosi formularul de mai jos sau adresa de e-mail de mai sus. Vezi", formButton: "Trimite solicitarea", privacyLink: "Confidențialitate" },
    legal: { privacyEyebrow: "CONFIDENȚIALITATE", legalEyebrow: "INFORMAȚII LEGALE", privacyTitle: "Confidențialitate, fără presupuneri.", legalTitle: "Informații legale care trebuie completate înainte de publicare." },
    notFound: { eyebrow: "404 / PAGINĂ NEGĂSITĂ", title: "Această pagină nu a putut fi găsită.", copy: "Este posibil să fi fost mutată, să nu fie publicată sau să nu mai fie disponibilă. Te poți întoarce la portofoliu pentru a explora proiectele publicate.", cta: "Explorează proiectele" },
    caseStudy: { backToWork: "← Înapoi la proiecte", previous: "Anterior", next: "Următor", navigationLabel: "Navigarea studiului de caz", workflowEyebrow: "01 / PREZENTARE PRODUS", workflowTitle: "Construit în jurul muncii pe care oamenii trebuie să o facă.", evidenceEyebrow: "02 / DOVEZI TEHNICE", evidenceTitle: "Structura din spatele interfeței.", technicalFocus: "FOCUS TEHNIC", implementation: "IMPLEMENTARE", architecture: "ARHITECTURĂ", attributionEyebrow: "ATRIBUIREA PROIECTULUI", originalAttribution: "{project} — © {year} {holder}. Software original, design de interfață și prezentare în portofoliu de LAC STUDIO. Toate drepturile rezervate.", neutralAttribution: "{project} — Prezentarea proiectului și activitatea de dezvoltare realizate de LAC STUDIO.", openLive: "Deschide proiectul live", requestDemo: "Cere un demo", discussSimilar: "Discută un proiect similar", contactTitle: "Ai o provocare\nasemănătoare?" },
  },
  es: { ...englishPortfolioCopy, services: { eyebrow: "SERVICIOS / DE LA IDEA DE PRODUCTO AL LANZAMIENTO", title: "Software para clientes, equipos y operaciones.", lead: "Diseño y desarrollo aplicaciones web a medida, software móvil y de escritorio, productos SaaS y herramientas internas para el trabajo que las personas necesitan realizar.", body: "Puedes llegar con una idea inicial, un proceso sostenido por hojas de cálculo o un producto que necesita avanzar. Puedo llevar el trabajo desde la dirección de producto y el diseño de interfaz hasta frontend, backend, datos, integraciones y lanzamiento.", workCta: "Ver proyectos relevantes", scopeLabel: "Alcance de servicios de LAC Studio", scopeEyebrow: "UN SERVICIO CONECTADO", scopeCopy: "Una sola persona mantiene conectado el contexto del producto durante todo el proceso.", offeringsEyebrow: "LO QUE PUEDO CONSTRUIR", offeringsTitle: "Empieza por la parte del producto que necesita atención.", offeringsCopy: "La colaboración puede comenzar con una decisión de producto concreta, una aplicación nueva o la base técnica que hace más fiable un producto existente.", fitEyebrow: "BUEN ENCAJE CUANDO", fitTitle: "El problema es real, aunque el brief todavía no esté terminado.", deliveryEyebrow: "CÓMO FUNCIONA UNA COLABORACIÓN", deliveryTitle: "Empezar con foco. Construir con visibilidad.", contactTitle: "¿Tienes trabajo que necesita\nmejor software a su alrededor?", contactCopy: "Trae el contexto, la limitación o la idea aún sin terminar. Te ayudaré a identificar el siguiente paso práctico." } },
};

translations.es.metadata = {
  siteTitle: "LAC STUDIO — Desarrollo de software independiente",
  siteDescription: "Desarrollo de software independiente para aplicaciones web a medida, software Android y de escritorio, productos SaaS y sistemas de negocio.",
  openGraphDescription: "Aplicaciones web, software móvil y de escritorio, productos SaaS y sistemas de negocio, desde la idea hasta un producto funcional.",
  pages: {
    home: { title: "LAC STUDIO — Desarrollo de software independiente", description: "Desarrollo de software independiente para aplicaciones web a medida, software Android y de escritorio, productos SaaS y sistemas de negocio." },
    work: { title: "Proyectos", description: "Casos de estudio de software de LAC STUDIO en salud, operaciones de laboratorio, restauración, trabajo de campo, hostelería y comercio." },
    services: { title: "Servicios", description: "Aplicaciones web a medida, software Android y de escritorio, desarrollo SaaS, automatización de negocio, servicios backend e integraciones." },
    process: { title: "Proceso", description: "Cómo LAC STUDIO lleva un problema de negocio desde la primera conversación hasta un producto de software funcional." },
    about: { title: "Acerca de", description: "Conoce a Andrei Lucaciu, el desarrollador de software independiente detrás de LAC STUDIO, donde el pensamiento informado por la psicología se une a la ingeniería práctica." },
    contact: { title: "Contacto", description: "Habla con LAC STUDIO sobre una aplicación web a medida, un flujo móvil, un producto SaaS o un sistema de negocio." },
    privacy: { title: "Privacidad", description: "Información de privacidad de LAC STUDIO." },
    legal: { title: "Información legal", description: "Información legal de LAC STUDIO." },
  },
};

translations.es.home = {
  ...englishPortfolioCopy.home,
  schemaDescription: "Estudio independiente de desarrollo de software que crea aplicaciones web a medida, software móvil y sistemas de negocio.",
  eyebrow: "LAC STUDIO / DESARROLLO DE SOFTWARE INDEPENDIENTE",
  titleLead: "De la idea a un",
  titleEmphasis: "producto funcional.",
  lead: "Diseño y desarrollo aplicaciones web, móviles, de escritorio y de negocio a medida, desde recorridos de cliente y operaciones internas hasta backend, datos, integraciones y lanzamiento.",
  primaryCta: "Hablar de tu proyecto",
  secondaryCta: "Explorar proyectos",
  imageLabel: "Un recorrido de producto desde el primer boceto hasta aplicaciones funcionales.",
  imageAlt: "Un boceto, etapas de desarrollo de producto y paneles de aplicaciones adaptables.",
  proofLabel: "Áreas de producto de LAC Studio",
  proof: [["Aplicaciones web", "Recorridos y herramientas para clientes"], ["Móvil y escritorio", "Trabajo más allá del navegador"], ["Sistemas de negocio", "Datos, operaciones y conexiones"]],
  selectedTitle: "Creado para el trabajo que ocurre detrás de la pantalla.",
  allWork: "Ver todos los proyectos",
  focusEyebrow: "02 / QUÉ HACE LAC",
  focusTitle: "Software para clientes, equipos y operaciones.",
  focus: [["Empezar por el problema adecuado", "Convertir una idea inicial, un proceso manual o un recorrido de cliente difícil en una primera dirección de producto clara."], ["Construir el producto", "Diseñar y crear el software a medida que las personas necesitan para clientes y operaciones internas, desde la interfaz hasta la lógica."], ["Conectar el trabajo", "Unir servicios backend, datos, permisos e integraciones para que las herramientas desconectadas se conviertan en un sistema útil."]],
  valueEyebrow: "03 / LO QUE OBTIENES", valueTitle: "Lo que obtienes al trabajar juntos", valueLead: "Un trabajo de producto enfocado, con resultados prácticos y definido por el alcance acordado.", value: [["Una dirección clara", "Aclarar el problema, priorizar requisitos y acordar qué merece la pena construir primero."], ["Software pensado para tus necesidades", "Dar forma al producto según usuarios, flujos y contexto de negocio reales."], ["Funcionalidad real", "Unir interfaz, lógica de aplicación, datos, servicios backend e integraciones cuando hacen falta."], ["Colaboración directa", "Trabajar con el desarrollador responsable del producto y de las decisiones que lo definen."], ["Una entrega definida", "Alinear entregables, validación y preparación de lanzamiento con el alcance acordado."]], valueCta: "Ver precios iniciales orientativos",
  processEyebrow: "04 / CÓMO TRABAJAMOS",
  processTitle: "Colaboración directa, desde la primera conversación hasta el lanzamiento.",
  process: ["Descubrir", "Definir", "Diseñar", "Construir", "Validar", "Lanzar"],
  processDetails: ["Contexto", "Alcance", "Experiencia", "Sistema", "Uso real", "Lanzamiento"],
  processCta: "Ver cómo trabajo",
  founderEyebrow: "05 / INDEPENDIENTE POR DISEÑO",
  founderTitle: "Trabaja directamente con la persona que lo diseña y lo construye.",
  founderCopy: "Hablas con una sola persona desde la primera conversación hasta el diseño de producto, la ingeniería y el lanzamiento, sin traspasos de estrategia entre equipos separados.",
  founderBenefit: "Esa continuidad mantiene el contexto cerca, reduce la carga de comunicación y ayuda a tomar decisiones de producto más claras.",
  founderCta: "Conocer al fundador",
  servicesCta: "Explorar servicios",
  contactTitle: "¿Tienes algo que\nmerece la pena construir?",
  contactCopy: "Trae una especificación clara o una idea inicial. Cuéntame qué necesita funcionar mejor y podremos identificar un siguiente paso práctico.",
  contactCta: "Cuéntame qué estás construyendo",
};

Object.assign(translations.fr.home, {
  focus: [["Partir du bon problème", "Transformer une idée d’application, un processus manuel ou un parcours client difficile en une première direction produit claire."], ["Construire le produit", "Concevoir et développer le logiciel sur mesure dont les personnes ont besoin pour les clients et les opérations internes, de l’interface à la logique applicative."], ["Relier le travail", "Réunir services backend, données, droits et intégrations pour que des outils dispersés deviennent un système utilisable."]],
  valueEyebrow: "03 / CE QUE VOUS OBTENEZ", valueTitle: "Ce que vous obtenez en travaillant ensemble", valueLead: "Un accompagnement produit ciblé, avec des résultats pratiques définis par le périmètre convenu.", value: [["Une direction claire", "Clarifier le problème, prioriser les besoins et convenir de ce qu’il vaut mieux construire en premier."], ["Un logiciel adapté à vos besoins", "Façonner le produit autour des utilisateurs, des flux et du contexte métier réels."], ["Une fonctionnalité concrète", "Réunir interface, logique applicative, données, services backend et intégrations lorsque cela est utile."], ["Une collaboration directe", "Travailler avec le développeur responsable du produit et des décisions qui le définissent."], ["Une livraison définie", "Aligner livrables, validation et préparation de la mise en ligne sur le périmètre convenu."]], valueCta: "Voir les estimations de départ", processEyebrow: "04 / NOTRE MÉTHODE", founderEyebrow: "05 / INDÉPENDANT PAR CHOIX", founderBenefit: "Cette continuité garde le contexte proche, réduit les échanges inutiles et facilite des décisions produit plus claires.", contactCopy: "Apportez un cahier des charges clair ou une idée encore ouverte. Dites-moi ce qui doit mieux fonctionner, et nous pourrons identifier une prochaine étape concrète.",
});

Object.assign(translations.ro.home, {
  focus: [["Pornim de la problema potrivită", "Transformăm o idee de aplicație, un proces manual sau un parcurs dificil al clientului într-o direcție clară pentru primul produs."], ["Construim produsul", "Proiectăm și dezvoltăm software personalizat pentru munca cu clienții și operațiunile interne, de la interfață la logica aplicației."], ["Conectăm activitatea", "Aducem împreună servicii backend, date, permisiuni și integrări pentru ca instrumentele separate să devină un sistem funcțional."]],
  valueEyebrow: "03 / CE PRIMEȘTI", valueTitle: "Ce primești când lucrăm împreună", valueLead: "O colaborare concentrată pe produs, cu rezultate practice definite de scopul agreat.", value: [["O direcție clară", "Clarificăm problema, prioritizăm cerințele și stabilim ce merită construit mai întâi."], ["Software adaptat nevoilor tale", "Conturăm produsul în jurul utilizatorilor, fluxurilor și contextului real de business."], ["Funcționalitate reală", "Aducem împreună interfața, logica aplicației, datele, serviciile backend și integrările acolo unde sunt necesare."], ["Colaborare directă", "Lucrezi cu dezvoltatorul responsabil de produs și de deciziile care îl definesc."], ["O livrare definită", "Aliniem livrabilele, validarea și pregătirea lansării la scopul agreat."]], valueCta: "Vezi prețurile de pornire orientative", processEyebrow: "04 / CUM LUCRĂM", founderEyebrow: "05 / INDEPENDENT PRIN ALEGERE", founderBenefit: "Această continuitate păstrează contextul aproape, reduce comunicarea inutilă și susține decizii de produs mai clare.", contactCopy: "Vino cu o specificație clară sau doar cu o idee. Spune-mi ce trebuie să funcționeze mai bine și putem identifica următorul pas practic.",
});

translations.es.work = {
  featuredEyebrow: "01 / PROYECTOS DESTACADOS",
  featuredTitle: "Creado para el trabajo que ocurre detrás de la pantalla.",
  galleryEyebrow: "02 / ÍNDICE PÚBLICO DE PROYECTOS",
  galleryTitle: "Casos de estudio con el contexto que hay detrás de la interfaz.",
  galleryIntro: "Son proyectos de software reales de salud, laboratorios, restauración, trabajo de campo, hostelería y comercio. Cada caso explica el producto, el problema que resuelve y la evidencia pública disponible.",
  faqEyebrow: "03 / PREGUNTAS",
  faqTitle: "Dónde puede empezar un proyecto.",
  contactTitle: "¿Tienes un reto\nparecido?",
  contactCopy: "Trae el contexto. Juntos podemos identificar el siguiente paso práctico.",
  faq: [
    ["¿Qué tipo de software desarrollas?", "LAC STUDIO crea aplicaciones web a medida, software Android y de escritorio, productos SaaS, herramientas internas de negocio y los servicios backend que las sustentan."],
    ["¿Podemos empezar con una idea inicial?", "Sí. La primera conversación puede partir del problema, las personas implicadas y el cambio que buscas. No necesitas una especificación terminada."],
    ["¿Solo trabajas en interfaces?", "No. Puedo trabajar la dirección de producto, los recorridos, el frontend, el backend, los datos, las integraciones y el camino hasta el lanzamiento."],
    ["¿Cómo se publican los casos de estudio?", "Un proyecto se publica solo cuando se han confirmado su descripción, sus medios, sus resultados y el permiso para compartirlos."],
    ["¿Puedes mejorar un producto existente?", "Sí. Los flujos, las interfaces y las bases técnicas existentes pueden evaluarse y mejorarse sin asumir que reconstruirlo todo sea necesario."],
    ["¿Qué debería incluir el primer mensaje?", "Bastan unas líneas sobre lo que quieres construir, mejorar o conectar para iniciar una conversación útil."],
  ],
};

translations.es.about = {
  eyebrow: "SOBRE / LAC STUDIO",
  title: "Software creado con atención a las personas y al trabajo que necesitan realizar.",
  lead: "Soy Andrei Lucaciu, desarrollador de software independiente. Conecto la forma en que las personas trabajan con la tecnología que necesitan utilizar.",
  contactTitle: "Trae el problema.\nDaremos forma al producto adecuado.",
  contactCopy: "Una primera conversación puede empezar por el trabajo que necesita cambiar; no hace falta un brief terminado.",
};

translations.es.process = {
  eyebrow: "PROCESO / UNA FORMA DIRECTA DE TRABAJAR",
  title: "Una ruta clara del problema al producto.",
  lead: "Una sola persona se mantiene cerca de la dirección de producto, la interfaz, la ingeniería y el lanzamiento, para que el trabajo siga conectado desde la primera conversación.",
  tabLabel: "Explorar el proceso de desarrollo del producto",
  outputLabel: "Lo que toma forma",
  involvementLabel: "Cómo trabajamos juntos",
};

translations.es.contact = {
  eyebrow: "CONTACTO / INICIAR UN PROYECTO",
  title: "Cuéntame qué necesita funcionar mejor.",
  formNotice: "Puedes utilizar el formulario de abajo o la dirección de correo anterior. Consulta",
  formButton: "Enviar consulta",
  privacyLink: "Privacidad",
};

translations.es.navigation = {
  work: "Proyectos",
  services: "Servicios",
  process: "Proceso",
  about: "Acerca de",
  discuss: "Hablar de un proyecto ↗",
  homeLabel: "Inicio de LAC Studio",
  mainLabel: "Navegación principal",
};

translations.es.language = {
  label: "Idioma",
  unavailable: "Traducción en preparación",
};

translations.es.footer = {
  description: "Desarrollo de software independiente para aplicaciones web, sistemas de negocio y flujos de trabajo móviles.",
  explore: "Explorar",
  studio: "Estudio",
  contact: "Contacto",
  privacy: "Privacidad",
  legal: "Información legal",
  independent: "Independiente por diseño.",
};

translations.es.caseStudy = {
  backToWork: "← Volver a proyectos",
  previous: "Anterior",
  next: "Siguiente",
  workflowEyebrow: "01 / VISIÓN GENERAL DEL PRODUCTO",
  workflowTitle: "Construido alrededor del trabajo real de las personas.",
  evidenceEyebrow: "02 / EVIDENCIA TÉCNICA",
  evidenceTitle: "La estructura detrás de la interfaz.",
  technicalFocus: "ENFOQUE TÉCNICO",
  implementation: "IMPLEMENTACIÓN",
  architecture: "ARQUITECTURA",
  navigationLabel: "Navegación del estudio de caso",
  attributionEyebrow: "ATRIBUCIÓN DEL PROYECTO",
  originalAttribution: "{project} — © {year} {holder}. Software original, diseño de interfaz y presentación del portafolio por LAC STUDIO. Todos los derechos reservados.",
  neutralAttribution: "{project} — Presentación del proyecto y trabajo de desarrollo por LAC STUDIO.",
  openLive: "Abrir proyecto en directo",
  requestDemo: "Solicitar una demostración",
  discussSimilar: "Hablar de un proyecto similar",
  contactTitle: "¿Un reto\nsimilar?",
};

Object.assign(translations.fr.shared, {
  chooseDesignSystem: "Choisir le système de design du portfolio",
  design: "Design",
  loading: "Chargement",
  enableEffects: "Activer les effets d'interface",
  disableEffects: "Désactiver les effets d'interface",
  effectsOn: "FX activés",
  effectsOff: "FX désactivés",
  toggleNavigation: "Ouvrir ou fermer la navigation",
  productPreview: "aperçu du produit",
  mediaToBeSupplied: "Média à fournir",
  workflow: "Parcours",
  evidence: "Éléments techniques",
  approvedMediaPlaceholder: "Emplacement réservé à un média de projet approuvé",
  previousFeaturedProject: "Projet précédent",
  nextFeaturedProject: "Projet suivant",
  resumeFeaturedAutoplay: "Reprendre le défilement automatique des projets",
  pauseFeaturedAutoplay: "Mettre en pause le défilement automatique des projets",
  chooseFeaturedWork: "Choisir un projet à la une",
  showFeaturedWork: "Afficher le projet à la une",
  interfacePreview: "aperçu de l'interface",
  caseStudiesInReview: "ÉTUDES DE CAS EN PRÉPARATION",
  unpublishedWorkTitle: "Chaque projet est publié avec assez de contexte pour être compris.",
  unpublishedWorkCopy: "LAC STUDIO ne publie ni détails confidentiels, ni résultats inventés, ni visuels sans autorisation. D'autres projets seront ajoutés lorsqu'ils pourront être partagés.",
  workPlaceholders: [{ eyebrow: "EMPLACEMENT ÉTUDE DE CAS / 01", title: "Une histoire produit, avec le bon contexte.", summary: "Cet espace est réservé à une étude de cas approuvée, avec un brief, un périmètre, une direction visuelle et des éléments vérifiés.", meta: "MÉDIA APPROUVÉ / EN ATTENTE" }, { eyebrow: "EMPLACEMENT ÉTUDE DE CAS / 02", title: "Un système opérationnel, expliqué clairement.", summary: "La page des réalisations présente le contexte derrière une interface, plutôt qu'un écran isolé ou une affirmation non vérifiée.", meta: "MÉDIA APPROUVÉ / EN ATTENTE" }, { eyebrow: "EMPLACEMENT ÉTUDE DE CAS / 03", title: "Une histoire de flux, lorsqu'elle sera prête.", summary: "Chaque histoire publique est présentée seulement après confirmation de sa description, de ses médias et de son autorisation de publication.", meta: "MÉDIA APPROUVÉ / EN ATTENTE" }],
});

Object.assign(translations.ro.shared, {
  chooseDesignSystem: "Alege sistemul de design al portofoliului",
  design: "Design",
  loading: "Se încarcă",
  enableEffects: "Activează efectele de interfață",
  disableEffects: "Dezactivează efectele de interfață",
  effectsOn: "FX pornite",
  effectsOff: "FX oprite",
  toggleNavigation: "Deschide sau închide navigarea",
  productPreview: "previzualizare produs",
  mediaToBeSupplied: "Media de furnizat",
  workflow: "Flux de lucru",
  evidence: "Dovezi tehnice",
  approvedMediaPlaceholder: "Spațiu rezervat pentru media de proiect aprobată",
  previousFeaturedProject: "Proiectul anterior",
  nextFeaturedProject: "Proiectul următor",
  resumeFeaturedAutoplay: "Reia rularea automată a proiectelor",
  pauseFeaturedAutoplay: "Pune pe pauză rularea automată a proiectelor",
  chooseFeaturedWork: "Alege un proiect recomandat",
  showFeaturedWork: "Afișează proiectul recomandat",
  interfacePreview: "previzualizare interfață",
  caseStudiesInReview: "STUDII DE CAZ ÎN PREGĂTIRE",
  unpublishedWorkTitle: "Fiecare proiect este publicat cu suficient context pentru a putea fi înțeles.",
  unpublishedWorkCopy: "LAC STUDIO nu publică detalii confidențiale, rezultate inventate sau materiale vizuale fără aprobare. Mai multe povești de proiect vor apărea când vor fi gata de distribuit.",
  workPlaceholders: [{ eyebrow: "LOC PENTRU STUDIU DE CAZ / 01", title: "O poveste de produs, cu contextul potrivit.", summary: "Acest spațiu este rezervat unui studiu de caz aprobat, cu brief verificat, arie, direcție vizuală și dovezi.", meta: "MEDIA APROBATĂ / ÎN AȘTEPTARE" }, { eyebrow: "LOC PENTRU STUDIU DE CAZ / 02", title: "Un sistem operațional, explicat clar.", summary: "Pagina proiectelor prezintă contextul din spatele unei interfețe, nu doar un ecran izolat sau o afirmație neverificată.", meta: "MEDIA APROBATĂ / ÎN AȘTEPTARE" }, { eyebrow: "LOC PENTRU STUDIU DE CAZ / 03", title: "O poveste de flux, atunci când este gata.", summary: "Fiecare poveste publică este introdusă numai după confirmarea descrierii, materialelor media și a permisiunii de publicare.", meta: "MEDIA APROBATĂ / ÎN AȘTEPTARE" }],
});

translations.es.shared = {
  ...englishPortfolioCopy.shared,
  back: "← Volver",
  theChallenge: "El reto",
  addresses: "Resuelve:",
  openLiveProject: "Abrir proyecto en directo",
  askAboutDemo: "Consultar una demostración",
  readCaseStudy: "Leer el caso de estudio",
  exploreProject: "Ver el proyecto",
  discussProject: "Hablar de tu proyecto",
  selectedWork: "01 / PROYECTOS DESTACADOS",
  startConversation: "INICIAR UNA CONVERSACIÓN",
  chooseDesignSystem: "Elegir el sistema de diseño del portfolio",
  design: "Diseño",
  loading: "Cargando",
  enableEffects: "Activar efectos de interfaz",
  disableEffects: "Desactivar efectos de interfaz",
  effectsOn: "FX activados",
  effectsOff: "FX desactivados",
  toggleNavigation: "Abrir o cerrar la navegación",
  productPreview: "vista previa del producto",
  mediaToBeSupplied: "Contenido por aportar",
  workflow: "Flujo de trabajo",
  evidence: "Evidencia técnica",
  approvedMediaPlaceholder: "Espacio reservado para un medio de proyecto aprobado",
  previousFeaturedProject: "Proyecto anterior",
  nextFeaturedProject: "Proyecto siguiente",
  resumeFeaturedAutoplay: "Reanudar la reproducción automática de proyectos",
  pauseFeaturedAutoplay: "Pausar la reproducción automática de proyectos",
  chooseFeaturedWork: "Elegir un proyecto destacado",
  showFeaturedWork: "Mostrar proyecto destacado",
  interfacePreview: "vista previa de la interfaz",
  caseStudiesInReview: "CASOS DE ESTUDIO EN REVISIÓN",
  unpublishedWorkTitle: "Cada proyecto se publica con suficiente contexto para poder entenderlo.",
  unpublishedWorkCopy: "LAC STUDIO no publica detalles confidenciales, resultados inventados ni imágenes sin aprobación. Se añadirán más historias de proyectos cuando estén listas para compartirse.",
  workPlaceholders: [{ eyebrow: "ESPACIO PARA CASO DE ESTUDIO / 01", title: "Una historia de producto con el contexto adecuado.", summary: "Este espacio está reservado para un caso de estudio aprobado, con un brief, alcance, dirección visual y evidencia verificados.", meta: "MEDIO APROBADO / PENDIENTE" }, { eyebrow: "ESPACIO PARA CASO DE ESTUDIO / 02", title: "Un sistema operativo explicado con claridad.", summary: "La página de proyectos presenta el contexto que hay detrás de una interfaz, no solo una pantalla aislada o una afirmación sin verificar.", meta: "MEDIO APROBADO / PENDIENTE" }, { eyebrow: "ESPACIO PARA CASO DE ESTUDIO / 03", title: "Una historia de flujo de trabajo, cuando esté lista.", summary: "Cada historia pública se presenta únicamente cuando su descripción, medios y permiso de publicación han sido confirmados.", meta: "MEDIO APROBADO / PENDIENTE" }],
};

translations.fr.legal = {
  ...englishPortfolioCopy.legal,
  privacyParagraphs: [...englishPortfolioCopy.legal.privacyParagraphs],
  legalParagraphs: [...englishPortfolioCopy.legal.legalParagraphs],
};
translations.ro.legal = {
  ...englishPortfolioCopy.legal,
  privacyParagraphs: [...englishPortfolioCopy.legal.privacyParagraphs],
  legalParagraphs: [...englishPortfolioCopy.legal.legalParagraphs],
};
translations.es.legal = {
  ...englishPortfolioCopy.legal,
  privacyParagraphs: [...englishPortfolioCopy.legal.privacyParagraphs],
  legalParagraphs: [...englishPortfolioCopy.legal.legalParagraphs],
};

translations.fr.notFound = {
  eyebrow: "404 / PAGE INTROUVABLE",
  title: "Cette page est introuvable.",
  copy: "Elle a peut-être été déplacée, n'est pas encore publiée ou n'est plus disponible. Vous pouvez revenir aux réalisations publiées.",
  cta: "Voir les réalisations",
};
translations.ro.notFound = {
  eyebrow: "404 / PAGINĂ NEGĂSITĂ",
  title: "Pagina nu a putut fi găsită.",
  copy: "Este posibil să fi fost mutată, să nu fie publicată sau să nu mai fie disponibilă. Poți reveni la portofoliu pentru a explora proiectele publicate.",
  cta: "Vezi proiectele",
};
translations.es.notFound = {
  eyebrow: "404 / PÁGINA NO ENCONTRADA",
  title: "No se ha podido encontrar esa página.",
  copy: "Puede que se haya movido, que no esté publicada o que ya no esté disponible. Puedes volver al portafolio para explorar los proyectos publicados.",
  cta: "Ver proyectos",
};

Object.assign(translations.fr.legal, {
  privacyEyebrow: "CONFIDENTIALITÉ",
  legalEyebrow: "MENTIONS LÉGALES",
  privacyTitle: "La confidentialité, sans présupposés.",
  legalTitle: "Informations légales à compléter avant publication.",
  privacyParagraphs: [
    "LAC STUDIO n'installe actuellement aucun outil d'analyse. Lorsqu'il est activé, le formulaire envoie les coordonnées et la description du projet soumises à Resend afin de les transmettre à la boîte de contact de LAC STUDIO. L'application ne stocke pas les demandes dans sa propre base de données.",
    "Cet avis doit être complété avec le responsable du traitement, le moyen de contact, la finalité, la durée de conservation, la base légale et les informations actuelles sur le prestataire avant toute promotion publique.",
  ],
  legalParagraphs: [
    "Les informations d'immatriculation, l'adresse du siège, les éléments de droit applicable et les autres mentions légalement requises n'ont pas encore été fournis pour publication.",
    "Avant une promotion publique plus large, remplacez cet avis par des informations vérifiées, adaptées à la situation juridique du studio et aux marchés qu'il dessert.",
  ],
});

Object.assign(translations.ro.legal, {
  privacyEyebrow: "CONFIDENȚIALITATE",
  legalEyebrow: "INFORMAȚII LEGALE",
  privacyTitle: "Confidențialitate, fără presupuneri.",
  legalTitle: "Informații legale de completat înainte de publicare.",
  privacyParagraphs: [
    "LAC STUDIO nu instalează în prezent instrumente de analiză. Când este activ, formularul trimite către Resend datele de contact și descrierea proiectului pe care le trimiți, pentru livrarea lor în căsuța de contact LAC STUDIO. Aplicația nu stochează solicitările într-o bază de date proprie.",
    "Această informare trebuie completată cu operatorul de date, metoda de contact, scopul prelucrării, perioada de păstrare, baza legală și datele actuale ale furnizorului înainte de promovarea publică.",
  ],
  legalParagraphs: [
    "Detaliile de înregistrare ale activității, adresa sediului, informațiile despre legislația aplicabilă și alte date obligatorii din punct de vedere legal nu au fost încă furnizate pentru publicare.",
    "Înainte de o promovare publică mai amplă, înlocuiește această informare cu date verificate, potrivite situației juridice a studioului și piețelor pe care le deservește.",
  ],
});

Object.assign(translations.es.legal, {
  privacyEyebrow: "PRIVACIDAD",
  legalEyebrow: "AVISO LEGAL",
  privacyTitle: "Privacidad, sin suposiciones.",
  legalTitle: "Información legal pendiente de completar antes de la publicación.",
  privacyParagraphs: [
    "LAC STUDIO no instala actualmente herramientas de analítica. Cuando está habilitado, el formulario envía los datos de contacto y la descripción del proyecto que comparte a Resend para entregarlos en el buzón de contacto de LAC STUDIO. La aplicación no almacena las consultas en su propia base de datos.",
    "Este aviso debe completarse con el responsable del tratamiento, el método de contacto, la finalidad, el periodo de conservación, la base jurídica y los datos actuales del proveedor antes de cualquier promoción pública.",
  ],
  legalParagraphs: [
    "Los datos de registro de la actividad, la dirección registrada, la información sobre la legislación aplicable y otros datos legalmente exigidos todavía no se han facilitado para su publicación.",
    "Antes de una promoción pública más amplia, sustituya este aviso por información verificada y adecuada a la situación legal del estudio y a los mercados a los que presta servicio.",
  ],
});

Object.assign(translations.fr.legal, {
  privacyTitle: "Politique de confidentialité.",
  legalTitle: "Mentions légales.",
  privacySections: [
    ["Responsable et contact", "LAC STUDIO est actuellement un portfolio indépendant exploité par Lucaciu Andrei Codrin. Jusqu'à la création d'une société, il est le responsable des données personnelles collectées sur ce site. Pour toute question ou exercice de vos droits : contact@lacstudio.ro."],
    ["Données traitées", "Lorsque vous envoyez une demande, le formulaire traite votre nom, votre adresse e-mail, le type de projet choisi, le budget et le délai éventuels, ainsi que votre message. Pour protéger le formulaire contre les abus, le service traite aussi un hachage à sens unique de l'adresse IP d'envoi."],
    ["Finalités et bases légales", "Les données de demande servent uniquement à lire, répondre et, le cas échéant, préparer un échange de projet demandé. Ce traitement est réalisé à votre demande avant un éventuel contrat. La limitation de débit répond à l'intérêt légitime de protéger le site et son canal de communication contre les abus."],
    ["Destinataires et prestataires", "Le formulaire utilise Resend pour la livraison des e-mails, Upstash pour la limitation de débit, Vercel pour l'infrastructure d'hébergement et LeafMail pour la boîte de contact. Ces prestataires peuvent traiter les informations strictement nécessaires à leur service et à la sécurité de l'échange."],
    ["Conservation", "Le contenu d'une demande est conservé au plus 12 mois après le dernier échange utile, puis supprimé, sauf nécessité plus longue pour constater, exercer ou défendre un droit en justice. La clé de limitation hachée expire automatiquement après 10 minutes."],
    ["Cookies et stockage local", "Ce portfolio n'utilise ni cookies d'analyse, ni cookies publicitaires, ni traceurs marketing. Il enregistre seulement deux préférences d'affichage non personnelles dans le stockage local du navigateur : le système visuel choisi et l'activation des effets d'interface."],
    ["Vos droits", "Selon le droit applicable, vous pouvez demander l'accès, la rectification, l'effacement, la limitation, l'opposition ou la portabilité de vos données. Contactez d'abord contact@lacstudio.ro ; une réponse est normalement apportée dans le mois. Vous pouvez aussi saisir l'autorité compétente, notamment la CNIL lorsque le droit français s'applique."],
    ["Mises à jour", "Cette politique reflète le statut indépendant actuel de LAC STUDIO et a été mise à jour le 14 novembre 2026. Elle sera actualisée lors de la création de la société française prévue ou de toute évolution des pratiques."],
  ],
  legalSections: [
    ["Éditeur du site", "Le site est publié sous le nom LAC STUDIO par Lucaciu Andrei Codrin, qui agit actuellement en tant qu'indépendant. Contact : contact@lacstudio.ro."],
    ["Statut actuel", "LAC STUDIO n'est pas encore constituée en société française. Ce site est un portfolio et un moyen d'ouvrir une conversation ; il ne publie pas de numéro d'immatriculation, de TVA ou d'adresse de siège qui n'existent pas encore. Ces informations remplaceront le présent avis après la constitution."],
    ["Hébergement", "Le site est hébergé sur l'infrastructure Vercel. Hébergeur : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis."],
    ["Propriété intellectuelle", "Sauf indication contraire, le design, les textes, le code et l'identité LAC STUDIO sont protégés. Les noms de projets, logos, captures d'écran et autres éléments clients restent la propriété de leurs titulaires respectifs. Toute réutilisation nécessite leur autorisation écrite préalable."],
    ["Informations et liens", "Le site est fourni à titre d'information générale et de présentation du portfolio. Un soin raisonnable est apporté à son exactitude, sans garantie que chaque page soit complète, à jour ou adaptée à un besoin particulier. Les liens externes sont fournis par commodité et ne sont pas contrôlés par LAC STUDIO."],
    ["Services et litiges", "Aucun élément du site ne constitue une offre ferme ni une promesse de disponibilité. Le périmètre, le prix, le calendrier, la propriété intellectuelle et le droit applicable à un projet sont définis uniquement dans un accord écrit distinct ou une acceptation écrite."],
    ["Signaler un problème", "Pour une question de propriété intellectuelle, de confidentialité ou de contenu, écrivez à contact@lacstudio.ro en indiquant suffisamment d'éléments pour identifier la page ou le contenu concerné."],
  ],
});

Object.assign(translations.ro.legal, {
  privacyTitle: "Politica de confidențialitate.",
  legalTitle: "Informații legale.",
  privacySections: [
    ["Operator și contact", "LAC STUDIO este în prezent un portofoliu independent operat de Lucaciu Andrei Codrin. Până la înființarea unei societăți, el este operatorul datelor cu caracter personal colectate prin acest site. Pentru întrebări despre confidențialitate sau exercitarea drepturilor: contact@lacstudio.ro."],
    ["Date prelucrate", "Când trimiți o solicitare, formularul prelucrează numele, adresa de e-mail, tipul de proiect selectat, bugetul și termenul opționale, precum și mesajul oferit. Pentru protejarea formularului împotriva abuzurilor, serviciul prelucrează și un hash unidirecțional al adresei IP de trimitere."],
    ["Scopuri și temeiuri", "Datele unei solicitări sunt folosite numai pentru a o citi, a răspunde și, când este cazul, pentru a pregăti o discuție despre proiect. Prelucrarea are loc la cererea ta înaintea unui posibil contract. Limitarea solicitărilor se bazează pe interesul legitim de a proteja site-ul și canalul de comunicare împotriva abuzurilor."],
    ["Destinatari și furnizori", "Formularul folosește Resend pentru livrarea e-mailurilor, Upstash pentru limitarea solicitărilor, Vercel pentru infrastructura de găzduire și LeafMail pentru căsuța de contact. Acești furnizori pot prelucra doar informațiile necesare furnizării serviciului și securizării comunicării."],
    ["Păstrare", "Conținutul unei solicitări este păstrat cel mult 12 luni după ultima conversație relevantă, apoi este șters, cu excepția situațiilor în care este necesară o perioadă mai lungă pentru constatarea, exercitarea sau apărarea unui drept. Cheia hash de limitare expiră automat după 10 minute."],
    ["Cookie-uri și stocare locală", "Portofoliul nu folosește cookie-uri de analiză, publicitate sau marketing. Salvează doar două preferințe de afișare nepersonale în stocarea locală a browserului: sistemul vizual ales și activarea efectelor de interfață."],
    ["Drepturile tale", "În funcție de legislația aplicabilă, poți solicita acces, rectificare, ștergere, restricționare, opoziție sau portabilitate. Contactează mai întâi contact@lacstudio.ro; răspunsul este oferit în mod normal în termen de o lună. Te poți adresa și autorității competente pentru protecția datelor, inclusiv CNIL atunci când se aplică legislația franceză."],
    ["Actualizări", "Această politică reflectă statutul independent actual al LAC STUDIO și a fost actualizată la 14 noiembrie 2026. Va fi actualizată după înființarea societății franceze planificate sau dacă practicile se schimbă."],
  ],
  legalSections: [
    ["Editorul site-ului", "Site-ul este publicat sub numele LAC STUDIO de Lucaciu Andrei Codrin, care acționează în prezent ca persoană independentă. Contact: contact@lacstudio.ro."],
    ["Statut actual", "LAC STUDIO nu este încă înregistrată ca societate în Franța. Acest site este un portofoliu și un mod de a începe o conversație; nu publică date de înregistrare, TVA sau sediu care nu există încă. Aceste informații vor înlocui prezenta pagină după înființare."],
    ["Găzduire", "Site-ul este găzduit pe infrastructura Vercel. Gazdă: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, Statele Unite."],
    ["Proprietate intelectuală", "Dacă nu este menționat altfel, designul, textele, codul și identitatea LAC STUDIO sunt protejate. Numele proiectelor, logo-urile, capturile de ecran și alte materiale ale clienților rămân proprietatea titularilor respectivi. Reutilizarea necesită acordul lor scris prealabil."],
    ["Informații și linkuri", "Site-ul este oferit pentru informare generală și prezentarea portofoliului. Sunt depuse eforturi rezonabile pentru acuratețe, fără a garanta că fiecare pagină este completă, actualizată sau potrivită pentru un scop specific. Linkurile externe sunt oferite pentru comoditate și nu sunt controlate de LAC STUDIO."],
    ["Servicii și litigii", "Nimic de pe site nu constituie o ofertă fermă sau o promisiune de disponibilitate. Aria, prețul, calendarul, proprietatea intelectuală și legea aplicabilă unui proiect sunt stabilite numai printr-un acord scris separat sau o acceptare scrisă."],
    ["Raportează o problemă", "Pentru o problemă de proprietate intelectuală, confidențialitate sau conținut, scrie la contact@lacstudio.ro și oferă suficiente detalii pentru identificarea paginii sau materialului vizat."],
  ],
});

Object.assign(translations.es.legal, {
  privacyTitle: "Política de privacidad.",
  legalTitle: "Aviso legal.",
  privacySections: [
    ["Responsable y contacto", "LAC STUDIO es actualmente un portafolio independiente operado por Lucaciu Andrei Codrin. Hasta que se constituya una sociedad, él es el responsable de los datos personales recogidos a través de este sitio. Para consultas de privacidad o para ejercer tus derechos: contact@lacstudio.ro."],
    ["Datos tratados", "Cuando envías una consulta, el formulario trata tu nombre, correo electrónico, tipo de proyecto elegido, presupuesto y plazo opcionales, y el mensaje que decidas compartir. Para proteger el formulario contra abusos, el servicio también trata un hash unidireccional de la dirección IP de envío."],
    ["Finalidades y bases jurídicas", "Los datos de una consulta se usan únicamente para leerla, responderla y, cuando proceda, preparar una conversación sobre el proyecto solicitado. El tratamiento se realiza a petición tuya antes de un posible contrato. La limitación de solicitudes responde al interés legítimo de proteger el sitio y su canal de comunicación frente a abusos."],
    ["Destinatarios y proveedores", "El formulario utiliza Resend para entregar correos, Upstash para limitar solicitudes, Vercel para la infraestructura de alojamiento y LeafMail para el buzón de contacto. Estos proveedores pueden tratar solo la información necesaria para prestar su servicio y proteger la comunicación."],
    ["Conservación", "El contenido de una consulta se conserva como máximo 12 meses después del último intercambio relevante y después se elimina, salvo que sea necesario un periodo mayor para formular, ejercer o defender una reclamación. La clave de limitación con hash caduca automáticamente a los 10 minutos."],
    ["Cookies y almacenamiento local", "Este portafolio no utiliza cookies analíticas, publicitarias ni rastreadores de marketing. Solo guarda dos preferencias de visualización no personales en el almacenamiento local del navegador: el sistema visual elegido y la activación de los efectos de interfaz."],
    ["Tus derechos", "Según la legislación aplicable, puedes solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad. Contacta primero con contact@lacstudio.ro; normalmente se responderá en el plazo de un mes. También puedes reclamar ante la autoridad competente de protección de datos, incluida la CNIL cuando se aplique el derecho francés."],
    ["Actualizaciones", "Esta política refleja el estado independiente actual de LAC STUDIO y se actualizó el 14 de noviembre de 2026. Se actualizará cuando se constituya la sociedad francesa prevista o cambien las prácticas."],
  ],
  legalSections: [
    ["Editor del sitio", "El sitio se publica bajo el nombre LAC STUDIO por Lucaciu Andrei Codrin, que actualmente actúa como profesional independiente. Contacto: contact@lacstudio.ro."],
    ["Situación actual", "LAC STUDIO todavía no está constituida como empresa francesa. Este sitio es un portafolio y una forma de iniciar una conversación; no publica datos de registro, IVA o domicilio social que todavía no existen. Estos datos sustituirán este aviso tras la constitución."],
    ["Alojamiento", "El sitio está alojado en infraestructura de Vercel. Proveedor de alojamiento: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, Estados Unidos."],
    ["Propiedad intelectual", "Salvo que se indique lo contrario, el diseño, los textos, el código y la identidad de LAC STUDIO están protegidos. Los nombres de proyectos, logotipos, capturas y otros materiales de clientes pertenecen a sus respectivos titulares. Su reutilización requiere autorización previa por escrito."],
    ["Información y enlaces", "El sitio se ofrece con fines de información general y presentación del portafolio. Se procura mantenerlo exacto, sin garantizar que cada página sea completa, actual o adecuada para una finalidad concreta. Los enlaces externos se ofrecen por comodidad y LAC STUDIO no controla su contenido."],
    ["Servicios y disputas", "Nada en el sitio constituye una oferta vinculante ni una promesa de disponibilidad. El alcance, precio, calendario, propiedad intelectual y ley aplicable a un proyecto se establecen únicamente en un acuerdo escrito separado o una aceptación por escrito."],
    ["Comunicar un problema", "Para una cuestión de propiedad intelectual, privacidad o contenido, escribe a contact@lacstudio.ro con detalles suficientes para identificar la página o el material afectado."],
  ],
});

Object.assign(translations.fr.work, { filters: { label: "Filtrer les projets", all: "Tous les projets", web: "Web et SaaS", android: "Applications Android" } });
Object.assign(translations.ro.work, { filters: { label: "Filtrează proiectele", all: "Toate proiectele", web: "Web și SaaS", android: "Aplicații Android" } });
Object.assign(translations.es.work, { filters: { label: "Filtrar proyectos", all: "Todos los proyectos", web: "Web y SaaS", android: "Aplicaciones Android" } });
Object.assign(translations.fr.navigation, { pricing: "Tarifs" });
Object.assign(translations.ro.navigation, { pricing: "Prețuri" });
Object.assign(translations.es.navigation, { pricing: "Precios" });
Object.assign(translations.fr.metadata.pages, { pricing: { title: "Tarifs", description: "Estimations de départ indicatives pour sites web, applications web, applications Android, produits SaaS et projets logiciels complexes." } });
Object.assign(translations.ro.metadata.pages, { pricing: { title: "Prețuri", description: "Prețuri de pornire orientative pentru site-uri, aplicații web, aplicații Android, produse SaaS și proiecte software complexe." } });
Object.assign(translations.es.metadata.pages, { pricing: { title: "Precios", description: "Precios iniciales orientativos para webs, aplicaciones web, aplicaciones Android, productos SaaS y proyectos de software complejos." } });

export type TranslationCatalog = Record<Locale, { status: LocaleStatus; dictionary?: Partial<PortfolioCopy> }>;

export const translationCatalog: TranslationCatalog = {
  en: { status: "ready", dictionary: englishPortfolioCopy },
  fr: { status: "ready", dictionary: translations.fr },
  ro: { status: "ready", dictionary: translations.ro },
  es: { status: "ready", dictionary: translations.es },
};

export const isLocaleReady = (locale: Locale) => translationCatalog[locale].status === "ready";

export const getPortfolioCopy = (locale: Locale): PortfolioCopy => {
  if (!isLocaleReady(locale)) throw new Error(`No complete dictionary is available for locale: ${locale}`);
  return locale === "en" ? englishPortfolioCopy : translations[locale];
};

/**
 * The single public-content resolver used by PortfolioApp. Keeping the page
 * dictionary beside the shared dictionary prevents a route from appearing
 * localized while one of its visible page sections silently uses English.
 */
export function resolvePortfolioContent(locale: Locale): { locale: Locale; copy: PortfolioCopy; pages: PageCopy } {
  return { locale, copy: getPortfolioCopy(locale), pages: pageCopy[locale] };
}
