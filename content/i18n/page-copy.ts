import type { Locale } from "./config.ts";

type Card = readonly [string, string];
type Stage = { tab: string; title: string; summary: string; outputs: readonly string[]; involvement: string };
export type PageCopy = {
  services: { scope: readonly string[]; fit: readonly Card[]; delivery: readonly Card[]; ctaEyebrow: string; ctaTitle: string; ctaCopy: string; cta: string };
  about: { intro: readonly string[]; portraitAlt: string; portraitLabel: string; experience: readonly string[]; principlesEyebrow: string; principlesTitle: string; principles: readonly Card[]; capabilitiesEyebrow: string; capabilitiesTitle: string; capabilitiesCopy: string; expertise: readonly Card[]; ctaEyebrow: string; cta: string };
  process: { stages: readonly Stage[]; principlesEyebrow: string; principlesTitle: string; principles: readonly Card[]; ctaEyebrow: string; ctaTitle: string; ctaCopy: string; discuss: string; explore: string; cta: string };
  contact: { lead: string; email: string; back: string; name: string; emailLabel?: string; projectType: string; chooseDirection: string; projectTypes: readonly string[]; budget: string; budgetPlaceholder: string; budgetOptions: readonly string[]; timeline: string; timelinePlaceholder: string; timelineOptions: readonly string[]; description: string; descriptionPlaceholder: string; company: string; formMessages?: { rateLimit: string; validation: string; rejected: string; unavailable: string } };
};

const englishPageCopy: PageCopy = {
    services: { scope: ["Scope", "Interface", "Engineering", "Release"], fit: [["Work is spread across too many tools", "Bring scattered documents, manual updates and unclear handoffs into one product with a shared operational view."], ["A service needs a better customer journey", "Turn a valuable service into an experience people can understand and use across desktop and mobile."], ["A team needs software that fits the operation", "Design roles, workflows, data and integrations around the work that happens before and after a screen is opened."]], delivery: [["Find the right scope", "Clarify the people, workflow and first outcome worth building."], ["Shape and build the product", "Keep the important product and technical choices visible as the work takes shape."], ["Release with a next step", "Launch a dependable baseline, then use what is learned to guide the next improvement."]], ctaEyebrow: "START A CONVERSATION", ctaTitle: "Have work that needs\nbetter software around it?", ctaCopy: "Bring the context, the constraint or the unfinished idea. I'll help you identify the next practical step.", cta: "Tell me what you're building" },
    about: { intro: ["I'm Andrei Lucaciu, an independent software developer who connects how people work with the technology they need to use.", "Before software, I trained and worked in psychology. That experience still shapes how I approach a project: I pay attention to the people involved, the friction in a process, the questions worth asking and the decisions an interface needs to make easier.", "For the past seven years, after more than three decades working with computers, I have designed and built web, mobile and operational software. Understanding people makes better software possible. Engineering makes that understanding practical—through interfaces, workflows, data, integrations and products that are ready to use."], portraitAlt: "Founder of LAC Studio", portraitLabel: "PSYCHOLOGY → SOFTWARE", experience: ["30+ years with computers.", "7 years building professionally."], principlesEyebrow: "WHAT GUIDES THE WORK", principlesTitle: "Good software respects the people using it.", principles: [["Understand before adding", "Start with the actual task, the people doing it and the friction worth removing — not a list of features in isolation."], ["Design the connected whole", "Interface, workflow, data, roles and integrations are treated as one product, because users experience them that way."], ["Make room for craft", "I enjoy turning an unclear idea into something tangible: a considered interface, a dependable system or a visual detail that gives the work character."]], capabilitiesEyebrow: "CAPABILITIES / END TO END", capabilitiesTitle: "One person, close to the work that matters.", capabilitiesCopy: "You work directly with the person shaping the product direction and building the software. It keeps feedback direct, choices connected and ownership close to the work.", expertise: [["Authentication & roles", "Permissions and access designed around the people who need to use the product."], ["Databases", "Information architecture and data models that support day-to-day operations."], ["API architecture", "Reliable connections between the product, its data and the services it relies on."], ["Background processing", "Queues and scheduled tasks for dependable operational handoffs."], ["Offline synchronization", "Local-first behaviour for work that cannot depend on a connection."], ["Notifications", "Messages, delivery paths and status updates at the right moment."], ["Integrations", "Careful links to the tools and services a team already uses."], ["Testing & deployment", "Practical quality checks and a considered path to release."]], ctaEyebrow: "START A CONVERSATION", cta: "Start a conversation" },
    process: { stages: [{ tab: "Align", title: "Understand the problem worth solving.", summary: "Start with the work that needs to change: the people involved, the constraints they face and the smallest outcome worth pursuing first.", outputs: ["Problem and context map", "Roles, journeys and constraints", "A practical starting point"], involvement: "You bring the context; together we turn it into a direction that is ready to act on." }, { tab: "Frame", title: "Define a focused first scope.", summary: "Turn the direction into a product plan: what matters first, what can wait and what an initial release needs to prove.", outputs: ["Priorities and release scope", "Core flows and success criteria", "A shared delivery plan"], involvement: "The scope stays visible, so each choice can be weighed against the real need." }, { tab: "Shape", title: "Design the work, not just the screen.", summary: "Shape information, states and interactions around what people actually need to do before adding visual polish for its own sake.", outputs: ["Journey and interface direction", "Key screens and product states", "Interaction rules worth building"], involvement: "You review the important choices early, while they are still quick to improve." }, { tab: "Build", title: "Build the connected product.", summary: "Bring the product to life as one whole: interface, backend, database, permissions, integrations and the operational details around them.", outputs: ["Working product increments", "Technical foundations that fit", "Visible progress to review"], involvement: "Short review points keep the work grounded without turning every choice into a meeting." }, { tab: "Verify", title: "Check the paths that matter.", summary: "Test the critical journeys, awkward states and practical edges that determine whether a product feels dependable in real use.", outputs: ["Critical-path checks", "Refined edge cases", "A release-ready checklist"], involvement: "Feedback is used where it improves the experience or reduces risk—not simply collected." }, { tab: "Release", title: "Release with a practical next step.", summary: "Prepare the handoff and release path, then learn from use so the next improvement follows evidence rather than noise.", outputs: ["Deployment and handoff path", "A working product baseline", "A focused next-step view"], involvement: "You leave with a product that is ready to use and a clearer view of what should happen next." }], principlesEyebrow: "WHAT STAYS CONNECTED", principlesTitle: "One product view from first conversation to release.", principles: [["One connected view", "Product, design and engineering inform each other instead of being handed between separate stages."], ["Meaningful visibility", "You see the progress and trade-offs that matter without a performance of unnecessary process."], ["Fit for the operation", "Scope and technology follow the people, operations and constraints the product actually has to support."]], ctaEyebrow: "READY WHEN YOU ARE", ctaTitle: "Bring the context.\nWe'll find the next practical step.", ctaCopy: "A first message does not need to be a finished brief. The problem, the people involved and the change you want to make are enough to begin.", discuss: "Discuss your project", explore: "Explore the work", cta: "Start a conversation" },
    contact: { lead: "You do not need a finished brief. A few lines about the problem, the people involved and the change you want to make are enough to begin.", email: "For now, the reliable way to reach me is by email. I'll read your message personally and reply from there.", back: "← Back", name: "Name", projectType: "Project type", chooseDirection: "Choose a direction", projectTypes: ["Web application", "Android application", "Desktop application", "SaaS platform", "Business system", "Website", "Other software"], budget: "Budget range", budgetPlaceholder: "Prefer not to say", budgetOptions: ["Prefer not to say", "Under €5,000", "€5,000–€15,000", "€15,000+"], timeline: "Timeline", timelinePlaceholder: "Flexible", timelineOptions: ["Flexible", "Within 1 month", "1–3 months", "More than 3 months"], description: "Project description", descriptionPlaceholder: "What are you trying to build, improve or connect?", company: "Company" },
};

export const pageCopy: Record<Locale, PageCopy> = {
  en: englishPageCopy,
  fr: { ...englishPageCopy, about: { intro: ["Je suis Andrei Lucaciu, développeur logiciel indépendant. Je relie la manière dont les personnes travaillent à la technologie qu'elles doivent utiliser.", "Avant le logiciel, j'ai été formé et j'ai exercé en psychologie. Cette expérience continue de guider ma manière d'aborder un projet : j'observe les personnes concernées, les frictions dans un processus, les bonnes questions à poser et les décisions qu'une interface doit rendre plus simples.", "Depuis sept ans, après plus de trois décennies passées avec les ordinateurs, je conçois et développe des logiciels web, mobiles et opérationnels. Comprendre les personnes rend de meilleurs logiciels possibles ; l'ingénierie rend cette compréhension utile, par des interfaces, des flux, des données, des intégrations et des produits prêts à l'emploi."], portraitAlt: "Fondateur de LAC Studio", portraitLabel: "PSYCHOLOGIE → LOGICIEL", experience: ["30 ans et plus avec les ordinateurs.", "7 ans de développement professionnel."], principles: [["Comprendre avant d'ajouter", "Partir de la tâche réelle, des personnes qui l'accomplissent et de la friction à enlever — pas d'une liste de fonctionnalités isolées."], ["Concevoir l'ensemble connecté", "Interface, flux, données, rôles et intégrations forment un seul produit, parce que c'est ainsi que les utilisateurs les vivent."], ["Faire une place au soin", "J'aime transformer une idée floue en quelque chose de concret : une interface réfléchie, un système fiable ou un détail visuel qui donne du caractère au travail."]], capabilitiesEyebrow: "CAPACITÉS / DE BOUT EN BOUT", capabilitiesTitle: "Une seule personne, au plus près du travail qui compte.", capabilitiesCopy: "Vous travaillez directement avec la personne qui définit la direction produit et construit le logiciel. Les retours restent directs, les décisions cohérentes et la responsabilité proche du travail.", expertise: [["Authentification et rôles", "Des autorisations et accès pensés pour les personnes qui utilisent le produit."], ["Bases de données", "Architecture de l'information et modèles de données qui soutiennent les opérations quotidiennes."], ["Architecture API", "Des connexions fiables entre le produit, ses données et les services dont il dépend."], ["Traitements d'arrière-plan", "Files et tâches planifiées pour des relais opérationnels fiables."], ["Synchronisation hors ligne", "Un fonctionnement local d'abord pour le travail qui ne peut pas dépendre d'une connexion."], ["Notifications", "Messages, canaux de livraison et mises à jour de statut au bon moment."], ["Intégrations", "Des liens attentifs avec les outils et services déjà utilisés par l'équipe."], ["Tests et déploiement", "Des contrôles qualité pragmatiques et un chemin de mise en ligne réfléchi."]], ctaEyebrow: "DÉMARRER LA CONVERSATION", cta: "Démarrer une conversation" }, services: { scope: ["Périmètre", "Interface", "Ingénierie", "Mise en ligne"], fit: [["Le travail est dispersé entre trop d'outils", "Réunissez documents épars, mises à jour manuelles et relais flous dans un même produit avec une vue opérationnelle partagée."], ["Un service a besoin d'un meilleur parcours client", "Transformez un service de valeur en une expérience claire et utilisable sur ordinateur comme sur mobile."], ["Une équipe a besoin d'un logiciel adapté à son fonctionnement", "Concevez rôles, flux, données et intégrations autour du travail qui se déroule avant et après l'ouverture d'un écran."]], delivery: [["Trouver le bon périmètre", "Clarifier les personnes, le flux de travail et le premier résultat qui mérite d'être construit."], ["Concevoir et développer le produit", "Garder visibles les décisions produit et techniques importantes à mesure que le travail prend forme."], ["Mettre en ligne avec une prochaine étape", "Lancer une base fiable, puis utiliser ce qui est appris pour guider l'amélioration suivante."]], ctaEyebrow: "DÉMARRER LA CONVERSATION", ctaTitle: "Un travail qui demande\nun meilleur logiciel ?", ctaCopy: "Apportez le contexte, la contrainte ou l'idée inachevée. Je vous aiderai à identifier la prochaine étape pragmatique.", cta: "Parlez-moi de votre projet" } },
  ro: { ...englishPageCopy, services: { scope: ["Arie", "Interfață", "Inginerie", "Lansare"], fit: [["Munca este împărțită între prea multe instrumente", "Adu documentele disparate, actualizările manuale și predările neclare într-un singur produs cu o imagine operațională comună."], ["Un serviciu are nevoie de un parcurs mai bun pentru clienți", "Transformă un serviciu valoros într-o experiență pe care oamenii o pot înțelege și folosi, pe desktop și mobil."], ["O echipă are nevoie de software potrivit operațiunii", "Proiectează roluri, fluxuri, date și integrări în jurul muncii care se desfășoară înainte și după deschiderea unui ecran."]], delivery: [["Definește aria potrivită", "Clarifică oamenii, fluxul de lucru și primul rezultat care merită construit."], ["Modelează și construiește produsul", "Păstrează vizibile deciziile importante de produs și tehnice pe măsură ce munca prinde formă."], ["Lansează cu următorul pas clar", "Lansează o bază de încredere, apoi folosește ce ai învățat pentru a ghida următoarea îmbunătățire."]], ctaEyebrow: "ÎNCEPE O CONVERSAȚIE", ctaTitle: "Ai muncă ce are nevoie\nde software mai bun?", ctaCopy: "Adu contextul, constrângerea sau ideea neterminată. Te ajut să identifici următorul pas practic.", cta: "Spune-mi ce construiești" } },
  es: { ...englishPageCopy, services: { scope: ["Alcance", "Interfaz", "Ingeniería", "Lanzamiento"], fit: [["El trabajo está repartido entre demasiadas herramientas", "Reúne documentos dispersos, actualizaciones manuales y traspasos poco claros en un producto con una visión operativa compartida."], ["Un servicio necesita un mejor recorrido para el cliente", "Convierte un servicio valioso en una experiencia que las personas puedan entender y utilizar tanto en escritorio como en móvil."], ["Un equipo necesita software que encaje con su operación", "Diseña roles, flujos, datos e integraciones alrededor del trabajo que sucede antes y después de abrir una pantalla."]], delivery: [["Encontrar el alcance adecuado", "Aclara las personas, el flujo de trabajo y el primer resultado que merece la pena construir."], ["Dar forma y construir el producto", "Mantén visibles las decisiones de producto y técnicas importantes a medida que el trabajo toma forma."], ["Lanzar con un siguiente paso", "Publica una base fiable y usa lo aprendido para orientar la siguiente mejora."]], ctaEyebrow: "INICIAR UNA CONVERSACIÓN", ctaTitle: "¿Tienes trabajo que necesita\nmejor software a su alrededor?", ctaCopy: "Trae el contexto, la limitación o la idea aún sin terminar. Te ayudaré a identificar el siguiente paso práctico.", cta: "Cuéntame qué estás construyendo" } },
};

Object.assign(pageCopy.fr.about, {
  principlesEyebrow: "CE QUI GUIDE LE TRAVAIL",
  principlesTitle: "Un bon logiciel respecte les personnes qui l'utilisent.",
});

pageCopy.ro.about = {
  intro: [
    "Sunt Andrei Lucaciu, dezvoltator software independent. Conectez felul în care lucrează oamenii cu tehnologia pe care trebuie să o folosească.",
    "Înainte de software, am studiat și am lucrat în psihologie. Această experiență continuă să îmi modeleze abordarea: urmăresc oamenii implicați, fricțiunea dintr-un proces, întrebările care merită puse și deciziile pe care o interfață trebuie să le facă mai ușoare.",
    "De șapte ani, după mai mult de trei decenii petrecute lucrând cu calculatoare, proiectez și construiesc software web, mobil și operațional. Înțelegerea oamenilor face posibil software mai bun; ingineria transformă această înțelegere în interfețe, fluxuri, date, integrări și produse complete, gata de utilizare.",
  ],
  portraitAlt: "Fondatorul LAC Studio",
  portraitLabel: "PSIHOLOGIE → SOFTWARE",
  experience: ["Peste 30 de ani cu calculatoarele.", "7 ani de dezvoltare profesională."],
  principlesEyebrow: "CE GHIDEAZĂ MUNCA",
  principlesTitle: "Software-ul bun respectă oamenii care îl folosesc.",
  principles: [
    ["Înțelege înainte să adaugi", "Pornește de la sarcina reală, oamenii care o fac și fricțiunea care trebuie eliminată — nu de la o listă izolată de funcționalități."],
    ["Proiectează întregul conectat", "Interfața, fluxul, datele, rolurile și integrările sunt tratate ca un singur produs, pentru că așa le trăiesc utilizatorii."],
    ["Lasă loc pentru măiestrie", "Îmi place să transform o idee neclară în ceva concret: o interfață atent gândită, un sistem de încredere sau un detaliu vizual care dă caracter muncii."],
  ],
  capabilitiesEyebrow: "CAPABILITĂȚI / END TO END",
  capabilitiesTitle: "O singură persoană, aproape de munca importantă.",
  capabilitiesCopy: "Lucrezi direct cu persoana care definește direcția produsului și construiește software-ul. Feedbackul rămâne direct, deciziile rămân conectate, iar responsabilitatea rămâne aproape de muncă.",
  expertise: [
    ["Autentificare și roluri", "Permisiuni și acces proiectate pentru oamenii care trebuie să folosească produsul."],
    ["Baze de date", "Arhitectură informațională și modele de date care susțin operațiunile de zi cu zi."],
    ["Arhitectură API", "Conexiuni de încredere între produs, datele sale și serviciile de care depinde."],
    ["Procesare în fundal", "Cozi și activități programate pentru predări operaționale de încredere."],
    ["Sincronizare offline", "Comportament local-first pentru munca ce nu poate depinde de conexiune."],
    ["Notificări", "Mesaje, canale de livrare și actualizări de status la momentul potrivit."],
    ["Integrări", "Conexiuni atent construite cu instrumentele și serviciile pe care echipa le folosește deja."],
    ["Testare și lansare", "Verificări practice de calitate și un drum atent spre lansare."],
  ],
  ctaEyebrow: "ÎNCEPE O CONVERSAȚIE",
  cta: "Începe o conversație",
};

pageCopy.es.about = {
  intro: [
    "Soy Andrei Lucaciu, desarrollador de software independiente. Conecto la forma en que las personas trabajan con la tecnología que necesitan utilizar.",
    "Antes del software me formé y trabajé en psicología. Esa experiencia sigue dando forma a mi manera de abordar un proyecto: presto atención a las personas implicadas, a la fricción de un proceso, a las preguntas que vale la pena hacer y a las decisiones que una interfaz debe facilitar.",
    "Durante los últimos siete años, tras más de tres décadas trabajando con ordenadores, he diseñado y desarrollado software web, móvil y operativo. Comprender a las personas hace posible un software mejor; la ingeniería convierte esa comprensión en interfaces, flujos, datos, integraciones y productos completos listos para usarse.",
  ],
  portraitAlt: "Fundador de LAC Studio",
  portraitLabel: "PSICOLOGÍA → SOFTWARE",
  experience: ["Más de 30 años con ordenadores.", "7 años desarrollando profesionalmente."],
  principlesEyebrow: "LO QUE GUÍA EL TRABAJO",
  principlesTitle: "El buen software respeta a las personas que lo utilizan.",
  principles: [
    ["Comprender antes de añadir", "Empieza por la tarea real, las personas que la realizan y la fricción que conviene eliminar, no por una lista aislada de funciones."],
    ["Diseñar el conjunto conectado", "Interfaz, flujo, datos, roles e integraciones se tratan como un solo producto, porque así los experimentan las personas usuarias."],
    ["Dejar espacio para el oficio", "Me gusta convertir una idea poco clara en algo tangible: una interfaz cuidada, un sistema fiable o un detalle visual que aporta carácter al trabajo."],
  ],
  capabilitiesEyebrow: "CAPACIDADES / DE PRINCIPIO A FIN",
  capabilitiesTitle: "Una sola persona, cerca del trabajo que importa.",
  capabilitiesCopy: "Trabajas directamente con quien define la dirección del producto y construye el software. La comunicación sigue siendo directa, las decisiones se mantienen conectadas y la responsabilidad permanece cerca del trabajo.",
  expertise: [
    ["Autenticación y roles", "Permisos y acceso diseñados para las personas que necesitan utilizar el producto."],
    ["Bases de datos", "Arquitectura de información y modelos de datos que sostienen las operaciones diarias."],
    ["Arquitectura de API", "Conexiones fiables entre el producto, sus datos y los servicios de los que depende."],
    ["Procesamiento en segundo plano", "Colas y tareas programadas para traspasos operativos fiables."],
    ["Sincronización sin conexión", "Comportamiento local-first para trabajo que no puede depender de una conexión."],
    ["Notificaciones", "Mensajes, canales de entrega y actualizaciones de estado en el momento adecuado."],
    ["Integraciones", "Conexiones cuidadas con las herramientas y servicios que el equipo ya utiliza."],
    ["Pruebas y despliegue", "Controles de calidad prácticos y una ruta de lanzamiento bien planteada."],
  ],
  ctaEyebrow: "INICIAR UNA CONVERSACIÓN",
  cta: "Iniciar una conversación",
};

pageCopy.fr.process = {
  stages: [
    { tab: "Cadrer", title: "Comprendre le problème qui mérite d'être résolu.", summary: "Nous partons du travail qui doit évoluer : les personnes concernées, leurs contraintes et le plus petit résultat utile à poursuivre en premier.", outputs: ["Carte du problème et de son contexte", "Rôles, parcours et contraintes", "Un point de départ concret"], involvement: "Vous apportez le contexte ; nous le transformons ensemble en une direction sur laquelle agir." },
    { tab: "Définir", title: "Définir un premier périmètre utile.", summary: "La direction devient un plan produit : ce qui compte maintenant, ce qui peut attendre et ce qu'une première version doit démontrer.", outputs: ["Priorités et périmètre de lancement", "Flux essentiels et critères de réussite", "Un plan de livraison partagé"], involvement: "Le périmètre reste visible afin de confronter chaque choix au besoin réel." },
    { tab: "Concevoir", title: "Concevoir le travail, pas seulement l'écran.", summary: "Nous structurons l'information, les états et les interactions autour de ce que les personnes doivent réellement accomplir avant d'ajouter un habillage visuel.", outputs: ["Direction des parcours et de l'interface", "Écrans clés et états du produit", "Règles d'interaction à construire"], involvement: "Vous validez les choix importants tôt, lorsqu'ils sont encore simples à améliorer." },
    { tab: "Développer", title: "Construire le produit connecté.", summary: "Le produit prend forme comme un tout : interface, backend, base de données, autorisations, intégrations et détails opérationnels qui les relient.", outputs: ["Incréments de produit fonctionnels", "Fondations techniques adaptées", "Des avancées visibles à examiner"], involvement: "De courts points de revue gardent le travail ancré sans transformer chaque choix en réunion." },
    { tab: "Vérifier", title: "Vérifier les parcours qui comptent.", summary: "Nous testons les parcours critiques, les états délicats et les cas concrets qui déterminent si le produit inspire confiance au quotidien.", outputs: ["Vérifications des parcours critiques", "Cas limites affinés", "Une liste de contrôle avant mise en ligne"], involvement: "Les retours servent là où ils améliorent l'expérience ou réduisent un risque — ils ne sont pas seulement collectés." },
    { tab: "Lancer", title: "Mettre en ligne avec une prochaine étape concrète.", summary: "Nous préparons la livraison et la mise en ligne, puis l'usage réel guide la suite plutôt que le bruit ou les suppositions.", outputs: ["Chemin de déploiement et de passation", "Une base produit opérationnelle", "Une vision ciblée de la suite"], involvement: "Vous repartez avec un produit utilisable et une vision plus claire de ce qui doit suivre." },
  ],
  principlesEyebrow: "CE QUI RESTE LIÉ",
  principlesTitle: "Une même vision du produit, de la première discussion à la mise en ligne.",
  principles: [
    ["Une vue d'ensemble connectée", "Produit, design et ingénierie s'informent mutuellement au lieu d'être transmis entre des étapes séparées."],
    ["Une visibilité utile", "Vous voyez les avancées et les arbitrages qui comptent, sans mise en scène d'un processus inutile."],
    ["Adapté à l'opération", "Le périmètre et la technologie suivent les personnes, les opérations et les contraintes que le produit doit réellement soutenir."],
  ],
  ctaEyebrow: "QUAND VOUS ÊTES PRÊT",
  ctaTitle: "Apportez le contexte.\nNous trouverons la prochaine étape utile.",
  ctaCopy: "Un premier message n'a pas besoin d'être un brief abouti. Le problème, les personnes concernées et le changement souhaité suffisent pour commencer.",
  discuss: "Parler de votre projet",
  explore: "Voir les réalisations",
  cta: "Démarrer une conversation",
};

pageCopy.ro.process = {
  stages: [
    { tab: "Aliniere", title: "Înțelege problema care merită rezolvată.", summary: "Pornim de la munca ce trebuie schimbată: oamenii implicați, constrângerile lor și cel mai mic rezultat util care merită urmărit mai întâi.", outputs: ["Harta problemei și a contextului", "Roluri, parcursuri și constrângeri", "Un punct de plecare practic"], involvement: "Tu aduci contextul; împreună îl transformăm într-o direcție pregătită pentru acțiune." },
    { tab: "Definire", title: "Definește un prim scop concentrat.", summary: "Direcția devine un plan de produs: ce contează acum, ce poate aștepta și ce trebuie să demonstreze prima versiune.", outputs: ["Priorități și aria lansării", "Fluxuri de bază și criterii de succes", "Un plan de livrare comun"], involvement: "Aria rămâne vizibilă, astfel încât fiecare alegere poate fi raportată la nevoia reală." },
    { tab: "Modelare", title: "Proiectează munca, nu doar ecranul.", summary: "Modelăm informațiile, stările și interacțiunile în jurul a ceea ce oamenii trebuie să facă în realitate, înainte de a adăuga finisaj vizual doar de dragul lui.", outputs: ["Direcția parcursurilor și a interfeței", "Ecrane-cheie și stări ale produsului", "Reguli de interacțiune care merită construite"], involvement: "Revizuiești din timp alegerile importante, cât încă sunt ușor de îmbunătățit." },
    { tab: "Construire", title: "Construiește produsul conectat.", summary: "Produsul prinde viață ca un întreg: interfață, backend, bază de date, permisiuni, integrări și detaliile operaționale care le leagă.", outputs: ["Incrementări funcționale ale produsului", "Fundații tehnice potrivite", "Progres vizibil pentru revizuire"], involvement: "Punctele scurte de revizuire păstrează munca ancorată fără a transforma fiecare alegere într-o ședință." },
    { tab: "Verificare", title: "Verifică parcursurile care contează.", summary: "Testăm parcursurile critice, stările dificile și situațiile practice care hotărăsc dacă produsul pare de încredere în utilizarea reală.", outputs: ["Verificări pentru parcursurile critice", "Cazuri-limită rafinate", "O listă pregătită pentru lansare"], involvement: "Feedbackul este folosit acolo unde îmbunătățește experiența sau reduce un risc — nu este doar colectat." },
    { tab: "Lansare", title: "Lansează cu un următor pas practic.", summary: "Pregătim predarea și lansarea, apoi învățăm din utilizare pentru ca următoarea îmbunătățire să urmeze dovezile, nu zgomotul.", outputs: ["Calea de deploy și predare", "O bază de produs funcțională", "O perspectivă concentrată asupra următorului pas"], involvement: "Rămâi cu un produs gata de folosit și cu o imagine mai clară despre ce ar trebui să urmeze." },
  ],
  principlesEyebrow: "CE RĂMÂNE CONECTAT",
  principlesTitle: "O singură perspectivă asupra produsului, de la prima conversație la lansare.",
  principles: [
    ["O perspectivă conectată", "Produsul, designul și ingineria se informează reciproc, în loc să fie predate între etape separate."],
    ["Vizibilitate care contează", "Vezi progresul și compromisurile care contează, fără spectacolul unui proces inutil."],
    ["Potrivit pentru operațiune", "Aria și tehnologia urmează oamenii, operațiunile și constrângerile pe care produsul trebuie să le susțină cu adevărat."],
  ],
  ctaEyebrow: "CÂND EȘTI GATA",
  ctaTitle: "Adu contextul.\nVom găsi următorul pas practic.",
  ctaCopy: "Un prim mesaj nu trebuie să fie un brief finalizat. Problema, oamenii implicați și schimbarea pe care vrei să o faci sunt suficiente pentru a începe.",
  discuss: "Discută proiectul",
  explore: "Vezi proiectele",
  cta: "Începe o conversație",
};

pageCopy.es.process = {
  stages: [
    { tab: "Alinear", title: "Comprender el problema que vale la pena resolver.", summary: "Empezamos por el trabajo que necesita cambiar: las personas implicadas, las limitaciones que afrontan y el resultado más pequeño que merece la pena perseguir primero.", outputs: ["Mapa del problema y su contexto", "Roles, recorridos y limitaciones", "Un punto de partida práctico"], involvement: "Tú aportas el contexto; juntos lo convertimos en una dirección lista para actuar." },
    { tab: "Definir", title: "Definir un primer alcance centrado.", summary: "La dirección se convierte en un plan de producto: qué importa primero, qué puede esperar y qué debe demostrar una primera versión.", outputs: ["Prioridades y alcance de lanzamiento", "Flujos esenciales y criterios de éxito", "Un plan de entrega compartido"], involvement: "El alcance se mantiene visible para contrastar cada decisión con la necesidad real." },
    { tab: "Diseñar", title: "Diseñar el trabajo, no solo la pantalla.", summary: "Damos forma a la información, los estados y las interacciones alrededor de lo que las personas realmente necesitan hacer antes de añadir acabado visual por sí mismo.", outputs: ["Dirección de recorridos e interfaz", "Pantallas clave y estados del producto", "Reglas de interacción que merece la pena construir"], involvement: "Revisas las decisiones importantes pronto, cuando todavía es fácil mejorarlas." },
    { tab: "Construir", title: "Construir el producto conectado.", summary: "El producto cobra vida como un todo: interfaz, backend, base de datos, permisos, integraciones y los detalles operativos que los conectan.", outputs: ["Incrementos funcionales del producto", "Bases técnicas adecuadas", "Progreso visible para revisar"], involvement: "Puntos de revisión breves mantienen el trabajo conectado a la realidad sin convertir cada decisión en una reunión." },
    { tab: "Verificar", title: "Comprobar los recorridos que importan.", summary: "Probamos los recorridos críticos, los estados incómodos y los límites prácticos que determinan si un producto resulta fiable en el uso real.", outputs: ["Comprobaciones de recorridos críticos", "Casos límite refinados", "Una lista preparada para el lanzamiento"], involvement: "Los comentarios se usan allí donde mejoran la experiencia o reducen un riesgo; no se recopilan sin más." },
    { tab: "Lanzar", title: "Lanzar con un siguiente paso práctico.", summary: "Preparamos la entrega y el lanzamiento, y después aprendemos del uso para que la siguiente mejora siga la evidencia, no el ruido.", outputs: ["Ruta de despliegue y entrega", "Una base de producto operativa", "Una visión centrada del siguiente paso"], involvement: "Te quedas con un producto listo para usar y una visión más clara de lo que debe ocurrir después." },
  ],
  principlesEyebrow: "LO QUE SE MANTIENE CONECTADO",
  principlesTitle: "Una sola visión del producto, desde la primera conversación hasta el lanzamiento.",
  principles: [
    ["Una visión conectada", "Producto, diseño e ingeniería se informan entre sí en lugar de pasarse entre etapas separadas."],
    ["Visibilidad que importa", "Ves el progreso y las decisiones de compromiso que importan, sin convertir el proceso en una representación innecesaria."],
    ["Ajustado a la operación", "El alcance y la tecnología siguen a las personas, las operaciones y las limitaciones que el producto realmente debe sostener."],
  ],
  ctaEyebrow: "CUANDO ESTÉS LISTO",
  ctaTitle: "Trae el contexto.\nEncontraremos el siguiente paso práctico.",
  ctaCopy: "Un primer mensaje no tiene que ser un brief terminado. El problema, las personas implicadas y el cambio que quieres lograr son suficientes para empezar.",
  discuss: "Hablar de tu proyecto",
  explore: "Ver proyectos",
  cta: "Iniciar una conversación",
};

Object.assign(pageCopy.en.contact, {
  emailLabel: "Email",
  formMessages: {
    rateLimit: "Please wait a moment before trying again.",
    validation: "Please check the required contact details and project description.",
    rejected: "Your inquiry could not be processed.",
    unavailable: "Inquiry delivery is not configured yet. Please return when a verified contact channel is available.",
  },
});

pageCopy.fr.contact = {
  lead: "Vous n'avez pas besoin d'un brief finalisé. Quelques lignes sur le problème, les personnes concernées et le changement recherché suffisent pour commencer.",
  email: "Pour le moment, le moyen le plus fiable de me joindre est l'e-mail. Je lirai votre message personnellement et vous répondrai directement.",
  back: "← Retour",
  name: "Nom",
  emailLabel: "E-mail",
  projectType: "Type de projet",
  chooseDirection: "Choisissez une orientation",
  projectTypes: ["Application web", "Application Android", "Application desktop", "Plateforme SaaS", "Système métier", "Site web", "Autre logiciel"],
  budget: "Budget indicatif",
  budgetPlaceholder: "Je préfère ne pas le préciser",
  budgetOptions: ["Je préfère ne pas le préciser", "Moins de 5 000 €", "5 000 €–15 000 €", "Plus de 15 000 €"],
  timeline: "Échéance souhaitée",
  timelinePlaceholder: "Flexible",
  timelineOptions: ["Flexible", "Dans le mois", "Dans 1 à 3 mois", "Dans plus de 3 mois"],
  description: "Description du projet",
  descriptionPlaceholder: "Que souhaitez-vous créer, améliorer ou relier ?",
  company: "Entreprise",
  formMessages: {
    rateLimit: "Veuillez patienter un instant avant de réessayer.",
    validation: "Veuillez vérifier les coordonnées requises et la description du projet.",
    rejected: "Votre demande n'a pas pu être traitée.",
    unavailable: "L'envoi des demandes n'est pas encore configuré. Revenez lorsqu'un canal de contact vérifié sera disponible.",
  },
};

pageCopy.ro.contact = {
  lead: "Nu ai nevoie de un brief finalizat. Sunt suficiente câteva rânduri despre problemă, oamenii implicați și schimbarea pe care vrei să o faci pentru a începe.",
  email: "Momentan, cea mai sigură cale de a lua legătura cu mine este e-mailul. Îți voi citi mesajul personal și îți voi răspunde direct.",
  back: "← Înapoi",
  name: "Nume",
  emailLabel: "E-mail",
  projectType: "Tipul proiectului",
  chooseDirection: "Alege o direcție",
  projectTypes: ["Aplicație web", "Aplicație Android", "Aplicație desktop", "Platformă SaaS", "Sistem de business", "Website", "Alt software"],
  budget: "Interval de buget",
  budgetPlaceholder: "Prefer să nu spun",
  budgetOptions: ["Prefer să nu spun", "Sub 5.000 €", "5.000 €–15.000 €", "Peste 15.000 €"],
  timeline: "Orizont de timp",
  timelinePlaceholder: "Flexibil",
  timelineOptions: ["Flexibil", "În maximum o lună", "1–3 luni", "Peste 3 luni"],
  description: "Descrierea proiectului",
  descriptionPlaceholder: "Ce încerci să construiești, să îmbunătățești sau să conectezi?",
  company: "Companie",
  formMessages: {
    rateLimit: "Te rog să aștepți puțin înainte de a încerca din nou.",
    validation: "Te rog să verifici datele de contact obligatorii și descrierea proiectului.",
    rejected: "Solicitarea ta nu a putut fi procesată.",
    unavailable: "Trimiterea solicitărilor nu este configurată încă. Revino când va fi disponibil un canal de contact verificat.",
  },
};

pageCopy.es.contact = {
  lead: "No necesitas un brief terminado. Unas líneas sobre el problema, las personas implicadas y el cambio que quieres lograr son suficientes para empezar.",
  email: "Por ahora, la forma más fiable de contactar conmigo es por correo electrónico. Leeré tu mensaje personalmente y responderé desde ahí.",
  back: "← Volver",
  name: "Nombre",
  emailLabel: "Correo electrónico",
  projectType: "Tipo de proyecto",
  chooseDirection: "Elige una dirección",
  projectTypes: ["Aplicación web", "Aplicación Android", "Aplicación de escritorio", "Plataforma SaaS", "Sistema de negocio", "Sitio web", "Otro software"],
  budget: "Rango de presupuesto",
  budgetPlaceholder: "Prefiero no indicarlo",
  budgetOptions: ["Prefiero no indicarlo", "Menos de 5.000 €", "5.000 €–15.000 €", "Más de 15.000 €"],
  timeline: "Plazo deseado",
  timelinePlaceholder: "Flexible",
  timelineOptions: ["Flexible", "En un plazo de un mes", "De 1 a 3 meses", "Más de 3 meses"],
  description: "Descripción del proyecto",
  descriptionPlaceholder: "¿Qué estás intentando crear, mejorar o conectar?",
  company: "Empresa",
  formMessages: {
    rateLimit: "Espera un momento antes de intentarlo de nuevo.",
    validation: "Revisa los datos de contacto obligatorios y la descripción del proyecto.",
    rejected: "No se ha podido procesar tu consulta.",
    unavailable: "El envío de consultas todavía no está configurado. Vuelve cuando haya un canal de contacto verificado disponible.",
  },
};
