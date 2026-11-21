import type { Locale } from "@/content/i18n/config";

export const seoLandingSlugs = ["logiciel-metier-sur-mesure", "transcription-locale"] as const;
export type SeoLandingSlug = (typeof seoLandingSlugs)[number];

type LandingPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  body: string;
  outcomesTitle: string;
  outcomes: readonly [string, string][];
  approachTitle: string;
  approach: readonly [string, string][];
  scopeTitle: string;
  scope: readonly string[];
  ctaTitle: string;
  ctaCopy: string;
  cta: string;
  servicesCta: string;
};

const pages: Record<Locale, Record<SeoLandingSlug, LandingPageContent>> = {
  fr: {
    "logiciel-metier-sur-mesure": {
      title: "Logiciel métier sur mesure pour PME | LAC STUDIO",
      description: "Conception et développement de logiciels métier sur mesure : application web, rôles, données, automatisations et intégrations pour les PME.",
      eyebrow: "LOGICIEL MÉTIER SUR MESURE / PME",
      lead: "Une application métier conçue autour du travail réel de votre équipe.",
      body: "LAC STUDIO conçoit des logiciels web sur mesure lorsque des tableurs, des échanges manuels ou des outils dispersés ne suffisent plus. Le projet part des rôles, des décisions et des informations dont votre équipe a réellement besoin.",
      outcomesTitle: "Ce que le logiciel peut relier",
      outcomes: [["Flux de travail", "Étapes, responsabilités et passages de relais rendus visibles dans une interface adaptée."], ["Données et droits", "Informations structurées, accès par rôle et historique utile pour le travail quotidien."], ["Outils existants", "Intégrations et automatisations pensées avec les services que votre équipe utilise déjà."]],
      approachTitle: "Une première version utile, sans ajouter du bruit",
      approach: [["Comprendre l'opération", "Identifier les personnes, le parcours et la friction qui mérite d'être résolue en premier."], ["Définir le périmètre", "Choisir les flux essentiels et les critères qui rendent une première version réellement utilisable."], ["Construire puis vérifier", "Relier interface, backend, données et contrôles avant une mise en ligne progressive."]],
      scopeTitle: "Le périmètre peut inclure",
      scope: ["Application web métier", "Portail client ou équipe", "Tableaux de bord et rôles", "Backend, base de données et API", "Automatisations et intégrations", "Déploiement et passage de relais"],
      ctaTitle: "Un processus interne mérite mieux qu'un bricolage permanent.",
      ctaCopy: "Décrivez le travail qui doit mieux fonctionner, même si le besoin n'est pas encore formulé comme un cahier des charges.",
      cta: "Parler de votre logiciel métier",
      servicesCta: "Voir tous les services",
    },
    "transcription-locale": {
      title: "Outil de transcription locale Windows et macOS | LAC STUDIO",
      description: "Conception d'outils de transcription vocale locale pour Windows et macOS : dictée, traitement de documents et flux de travail respectueux des données.",
      eyebrow: "TRANSCRIPTION LOCALE / WINDOWS ET MACOS",
      lead: "Des outils desktop pensés pour transformer la voix en texte sans imposer un flux cloud par défaut.",
      body: "LAC STUDIO conçoit des applications Windows et macOS pour les équipes qui ont besoin de dictée, de transcription ou de préparation de documents dans un flux de travail concentré. Le niveau de traitement local, les formats et les intégrations sont définis avec le contexte du projet.",
      outcomesTitle: "Un outil adapté au contexte de travail",
      outcomes: [["Traitement local", "Un flux conçu pour garder les fichiers et la voix sur l'appareil lorsque le besoin le justifie."], ["Documents utiles", "Préparer, relire ou exporter du texte dans un parcours adapté aux documents de l'équipe."], ["Interface concentrée", "Une application desktop qui réduit les manipulations entre enregistrement, texte et suite du travail."]],
      approachTitle: "Ce qui se cadre avant de construire",
      approach: [["Usage et confidentialité", "Identifier les personnes, les contenus traités et les contraintes qui déterminent le bon niveau de traitement local."], ["Parcours et formats", "Définir les entrées, sorties, contrôles et documents qui doivent fonctionner ensemble."], ["Prototype puis produit", "Vérifier les parcours critiques avant d'étendre l'outil aux intégrations ou aux besoins complémentaires."]],
      scopeTitle: "Le périmètre peut inclure",
      scope: ["Application native Windows ou macOS", "Dictée et transcription vocale", "Traitement local selon le besoin", "Documents DOCX et PDF", "Flux hors ligne ou connecté", "Intégrations métier ciblées"],
      ctaTitle: "Vous explorez un outil de transcription adapté à votre équipe ?",
      ctaCopy: "Expliquez le type de contenu, les personnes concernées et ce qui doit rester simple ou local. Nous pourrons cadrer une première version pertinente.",
      cta: "Discuter de l'outil",
      servicesCta: "Voir tous les services",
    },
  },
  en: {
    "logiciel-metier-sur-mesure": { title: "Custom business software for SMEs | LAC STUDIO", description: "Custom business software development: web applications, roles, data, automation and integrations for small and medium-sized businesses.", eyebrow: "CUSTOM BUSINESS SOFTWARE / SME", lead: "A business application built around how your team actually works.", body: "LAC STUDIO designs custom web software when spreadsheets, manual handoffs or disconnected tools no longer support the operation. The project starts with the roles, decisions and information your team really needs.", outcomesTitle: "What the software can connect", outcomes: [["Workflows", "Visible steps, responsibilities and handoffs in an interface shaped for the work."], ["Data and permissions", "Structured information, role-based access and useful history for day-to-day operations."], ["Existing tools", "Integrations and automation considered alongside the services your team already uses."]], approachTitle: "A useful first version, without extra noise", approach: [["Understand the operation", "Identify the people, journey and friction worth solving first."], ["Define the scope", "Choose essential flows and the criteria that make a first version genuinely usable."], ["Build and verify", "Connect interface, backend, data and checks before a progressive release."]], scopeTitle: "The scope can include", scope: ["Business web application", "Customer or team portal", "Dashboards and permissions", "Backend, database and API", "Automation and integrations", "Deployment and handover"], ctaTitle: "An internal process deserves better than a permanent workaround.", ctaCopy: "Describe the work that needs to run better, even if it is not yet a finished specification.", cta: "Discuss your business software", servicesCta: "View all services" },
    "transcription-locale": { title: "Local transcription software for Windows and macOS | LAC STUDIO", description: "Design of local speech-to-text tools for Windows and macOS: dictation, document handling and privacy-conscious workflows.", eyebrow: "LOCAL TRANSCRIPTION / WINDOWS AND MACOS", lead: "Desktop tools that turn speech into text without making cloud processing the default.", body: "LAC STUDIO designs Windows and macOS applications for teams needing dictation, transcription or document preparation in a focused workflow. The local-processing level, formats and integrations are agreed from the project's context.", outcomesTitle: "A tool shaped for the work context", outcomes: [["Local processing", "A workflow designed to keep voice and files on the device when that is the right requirement."], ["Useful documents", "Prepare, review or export text in a path that fits the team's documents."], ["Focused interface", "A desktop application that reduces switching between recording, text and the next task."]], approachTitle: "What we frame before building", approach: [["Use and privacy", "Identify people, content and constraints that determine the right local-processing level."], ["Journeys and formats", "Define the inputs, outputs, controls and documents that need to work together."], ["Prototype then product", "Check critical journeys before extending the tool with integrations or adjacent needs."]], scopeTitle: "The scope can include", scope: ["Native Windows or macOS application", "Dictation and speech-to-text", "Local processing where appropriate", "DOCX and PDF documents", "Offline or connected workflows", "Targeted business integrations"], ctaTitle: "Exploring a transcription tool for your team?", ctaCopy: "Describe the content, people and constraints around what needs to stay simple or local. We can frame a useful first version.", cta: "Discuss the tool", servicesCta: "View all services" },
  },
  ro: {
    "logiciel-metier-sur-mesure": { title: "Software business personalizat pentru IMM-uri | LAC STUDIO", description: "Dezvoltare de software business personalizat: aplicații web, roluri, date, automatizări și integrări pentru IMM-uri.", eyebrow: "SOFTWARE BUSINESS PERSONALIZAT / IMM", lead: "O aplicație business construită în jurul modului real în care lucrează echipa ta.", body: "LAC STUDIO proiectează software web personalizat atunci când tabelele, transferurile manuale sau instrumentele deconectate nu mai susțin operațiunea.", outcomesTitle: "Ce poate conecta software-ul", outcomes: [["Fluxuri de lucru", "Pași, responsabilități și predări vizibile într-o interfață potrivită muncii."], ["Date și permisiuni", "Informații structurate și acces după rol."], ["Instrumente existente", "Integrări și automatizări gândite cu serviciile folosite deja de echipă."]], approachTitle: "O primă versiune utilă", approach: [["Înțelegem operațiunea", "Identificăm oamenii, parcursul și fricțiunea ce merită rezolvată prima."], ["Definim aria", "Alegem fluxurile esențiale pentru o versiune utilizabilă."], ["Construim și verificăm", "Conectăm interfața, backendul și datele înainte de lansare."]], scopeTitle: "Aria poate include", scope: ["Aplicație web business", "Portal client sau echipă", "Dashboarduri și permisiuni", "Backend, baze de date și API", "Automatizări și integrări", "Deploy și predare"], ctaTitle: "Un proces intern merită mai mult decât o soluție provizorie.", ctaCopy: "Descrie munca ce trebuie să funcționeze mai bine.", cta: "Discută software-ul business", servicesCta: "Vezi toate serviciile" },
    "transcription-locale": { title: "Software de transcriere locală pentru Windows și macOS | LAC STUDIO", description: "Instrumente locale de transcriere vocală pentru Windows și macOS: dictare, documente și fluxuri atente la date.", eyebrow: "TRANSCRIERE LOCALĂ / WINDOWS ȘI MACOS", lead: "Instrumente desktop care transformă vocea în text fără a impune cloud-ul implicit.", body: "LAC STUDIO proiectează aplicații Windows și macOS pentru echipe ce au nevoie de dictare, transcriere sau pregătire de documente într-un flux concentrat.", outcomesTitle: "Un instrument potrivit contextului", outcomes: [["Procesare locală", "Fișierele și vocea rămân pe dispozitiv când acest lucru este necesar."], ["Documente utile", "Pregătire, revizuire sau export de text potrivit documentelor echipei."], ["Interfață concentrată", "Mai puține treceri între înregistrare, text și următoarea sarcină."]], approachTitle: "Ce definim înainte de construire", approach: [["Utilizare și confidențialitate", "Stabilim oamenii, conținutul și constrângerile."], ["Parcursuri și formate", "Definim intrările, ieșirile și documentele."], ["Prototip apoi produs", "Verificăm fluxurile critice înainte de extindere."]], scopeTitle: "Aria poate include", scope: ["Aplicație nativă Windows sau macOS", "Dictare și speech-to-text", "Procesare locală la nevoie", "Documente DOCX și PDF", "Flux offline sau conectat", "Integrări business"], ctaTitle: "Explorezi un instrument de transcriere pentru echipa ta?", ctaCopy: "Spune-ne ce conținut și constrângeri sunt importante.", cta: "Discută instrumentul", servicesCta: "Vezi toate serviciile" },
  },
  es: {
    "logiciel-metier-sur-mesure": { title: "Software empresarial a medida para pymes | LAC STUDIO", description: "Desarrollo de software empresarial a medida: aplicaciones web, roles, datos, automatización e integraciones para pymes.", eyebrow: "SOFTWARE EMPRESARIAL A MEDIDA / PYME", lead: "Una aplicación empresarial creada alrededor del trabajo real de tu equipo.", body: "LAC STUDIO diseña software web a medida cuando las hojas de cálculo, los traspasos manuales o las herramientas desconectadas ya no sostienen la operación.", outcomesTitle: "Lo que el software puede conectar", outcomes: [["Flujos de trabajo", "Pasos, responsabilidades y relevos visibles en una interfaz adecuada."], ["Datos y permisos", "Información estructurada y acceso por rol."], ["Herramientas existentes", "Integraciones y automatizaciones pensadas con los servicios que ya usa el equipo."]], approachTitle: "Una primera versión útil", approach: [["Entender la operación", "Identificar personas, recorrido y fricción que conviene resolver primero."], ["Definir el alcance", "Elegir los flujos esenciales de una primera versión utilizable."], ["Construir y comprobar", "Conectar interfaz, backend y datos antes del lanzamiento."]], scopeTitle: "El alcance puede incluir", scope: ["Aplicación web empresarial", "Portal de cliente o equipo", "Paneles y permisos", "Backend, base de datos y API", "Automatizaciones e integraciones", "Despliegue y entrega"], ctaTitle: "Un proceso interno merece más que una solución provisional.", ctaCopy: "Describe el trabajo que necesita funcionar mejor.", cta: "Hablar del software", servicesCta: "Ver todos los servicios" },
    "transcription-locale": { title: "Software de transcripción local para Windows y macOS | LAC STUDIO", description: "Herramientas locales de transcripción de voz para Windows y macOS: dictado, documentos y flujos atentos a los datos.", eyebrow: "TRANSCRIPCIÓN LOCAL / WINDOWS Y MACOS", lead: "Herramientas de escritorio que convierten voz en texto sin imponer la nube por defecto.", body: "LAC STUDIO diseña aplicaciones para Windows y macOS para equipos que necesitan dictado, transcripción o preparación de documentos en un flujo concentrado.", outcomesTitle: "Una herramienta adecuada al contexto", outcomes: [["Procesamiento local", "Los archivos y la voz permanecen en el dispositivo cuando es necesario."], ["Documentos útiles", "Preparar, revisar o exportar texto para los documentos del equipo."], ["Interfaz concentrada", "Menos cambios entre grabación, texto y la siguiente tarea."]], approachTitle: "Qué definimos antes de construir", approach: [["Uso y privacidad", "Aclarar personas, contenido y restricciones."], ["Recorridos y formatos", "Definir entradas, salidas y documentos."], ["Prototipo y producto", "Comprobar los flujos críticos antes de ampliar."]], scopeTitle: "El alcance puede incluir", scope: ["Aplicación nativa Windows o macOS", "Dictado y voz a texto", "Procesamiento local cuando proceda", "Documentos DOCX y PDF", "Flujos sin conexión o conectados", "Integraciones empresariales"], ctaTitle: "¿Exploras una herramienta de transcripción para tu equipo?", ctaCopy: "Cuéntanos qué contenido y restricciones importan.", cta: "Hablar de la herramienta", servicesCta: "Ver todos los servicios" },
  },
};

export function isSeoLandingSlug(value: string): value is SeoLandingSlug {
  return seoLandingSlugs.includes(value as SeoLandingSlug);
}

export function getSeoLandingPage(locale: Locale, slug: SeoLandingSlug) {
  return pages[locale][slug];
}
