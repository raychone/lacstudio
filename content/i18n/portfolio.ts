import type { Locale } from "./config.ts";

export type LocaleStatus = "ready" | "planned";

export const englishPortfolioCopy = {
  navigation: { work: "Work", services: "Services", process: "Process", about: "About", discuss: "Discuss a project ↗", homeLabel: "LAC Studio home", mainLabel: "Main navigation" },
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
    contact: { eyebrow: "CONTACT / DÉMARRER UN PROJET", title: "Dites-moi ce qui doit mieux fonctionner.", formNotice: "Le formulaire est en cours de connexion et ne peut pas encore envoyer de messages. Utilisez l'adresse e-mail ci-dessus. Voir", formButton: "Formulaire indisponible", privacyLink: "Confidentialité" },
    legal: { privacyEyebrow: "CONFIDENTIALITÉ", legalEyebrow: "MENTIONS LÉGALES", privacyTitle: "La confidentialité, sans supposition.", legalTitle: "Informations légales à compléter avant publication." },
    notFound: { eyebrow: "404 / PAGE INTROUVABLE", title: "Cette page est introuvable.", copy: "Elle a peut-être été déplacée, n'est pas publiée ou n'est plus disponible. Vous pouvez revenir au portfolio pour explorer les projets publiés.", cta: "Voir les réalisations" },
    caseStudy: { backToWork: "← Retour aux réalisations", previous: "Précédent", next: "Suivant", workflowEyebrow: "01 / VUE D'ENSEMBLE PRODUIT", workflowTitle: "Construit autour du travail réel des utilisateurs.", evidenceEyebrow: "02 / ÉLÉMENTS TECHNIQUES", evidenceTitle: "La structure derrière l'interface.", technicalFocus: "FOCUS TECHNIQUE", implementation: "MISE EN ŒUVRE", architecture: "ARCHITECTURE", openLive: "Voir le projet", requestDemo: "Demander une démo", discussSimilar: "Parler d'un projet similaire", contactTitle: "Un défi\nsemblable ?" },
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
    contact: { eyebrow: "CONTACT / ÎNCEPE UN PROIECT", title: "Spune-mi ce trebuie să funcționeze mai bine.", formNotice: "Formularul este în curs de conectare și nu poate trimite mesaje încă. Te rog să folosești adresa de e-mail de mai sus. Vezi", formButton: "Formular indisponibil", privacyLink: "Confidențialitate" },
    legal: { privacyEyebrow: "CONFIDENȚIALITATE", legalEyebrow: "INFORMAȚII LEGALE", privacyTitle: "Confidențialitate, fără presupuneri.", legalTitle: "Informații legale care trebuie completate înainte de publicare." },
    notFound: { eyebrow: "404 / PAGINĂ NEGĂSITĂ", title: "Această pagină nu a putut fi găsită.", copy: "Este posibil să fi fost mutată, să nu fie publicată sau să nu mai fie disponibilă. Te poți întoarce la portofoliu pentru a explora proiectele publicate.", cta: "Explorează proiectele" },
    caseStudy: { backToWork: "← Înapoi la proiecte", previous: "Anterior", next: "Următor", workflowEyebrow: "01 / PREZENTARE PRODUS", workflowTitle: "Construit în jurul muncii pe care oamenii trebuie să o facă.", evidenceEyebrow: "02 / DOVEZI TEHNICE", evidenceTitle: "Structura din spatele interfeței.", technicalFocus: "FOCUS TEHNIC", implementation: "IMPLEMENTARE", architecture: "ARHITECTURĂ", openLive: "Deschide proiectul live", requestDemo: "Cere un demo", discussSimilar: "Discută un proiect similar", contactTitle: "Ai o provocare\nasemănătoare?" },
  },
  es: { ...englishPortfolioCopy, services: { eyebrow: "SERVICIOS / DE LA IDEA DE PRODUCTO AL LANZAMIENTO", title: "Software para clientes, equipos y operaciones.", lead: "Diseño y desarrollo aplicaciones web a medida, software móvil y de escritorio, productos SaaS y herramientas internas para el trabajo que las personas necesitan realizar.", body: "Puedes llegar con una idea inicial, un proceso sostenido por hojas de cálculo o un producto que necesita avanzar. Puedo llevar el trabajo desde la dirección de producto y el diseño de interfaz hasta frontend, backend, datos, integraciones y lanzamiento.", workCta: "Ver proyectos relevantes", scopeLabel: "Alcance de servicios de LAC Studio", scopeEyebrow: "UN SERVICIO CONECTADO", scopeCopy: "Una sola persona mantiene conectado el contexto del producto durante todo el proceso.", offeringsEyebrow: "LO QUE PUEDO CONSTRUIR", offeringsTitle: "Empieza por la parte del producto que necesita atención.", offeringsCopy: "La colaboración puede comenzar con una decisión de producto concreta, una aplicación nueva o la base técnica que hace más fiable un producto existente.", fitEyebrow: "BUEN ENCAJE CUANDO", fitTitle: "El problema es real, aunque el brief todavía no esté terminado.", deliveryEyebrow: "CÓMO FUNCIONA UNA COLABORACIÓN", deliveryTitle: "Empezar con foco. Construir con visibilidad.", contactTitle: "¿Tienes trabajo que necesita\nmejor software a su alrededor?", contactCopy: "Trae el contexto, la limitación o la idea aún sin terminar. Te ayudaré a identificar el siguiente paso práctico." } },
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
  formNotice: "El formulario de contacto se está conectando y todavía no puede enviar mensajes. Utiliza la dirección de correo electrónico anterior. Consulta",
  formButton: "Formulario de contacto no disponible",
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
  return locale === "en" ? englishPortfolioCopy : translations[locale];
};
