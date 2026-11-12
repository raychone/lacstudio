export type PublicationState = "draft" | "published" | "private" | "in-development" | "archived";
export type ProjectPlatform = "Web" | "Android" | "Desktop" | "Backend";

export type PublicProject = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  platforms: ProjectPlatform[];
  technologies: string[];
  publicationState: PublicationState;
  featured: boolean;
  featuredOrder?: number;
  year?: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  technicalHighlights?: string[];
  challenges?: string[];
  outcomes?: string[];
  architecture?: string;
  thumbnail?: string;
  heroImage?: string;
  screenshots?: string[];
  mockups?: string[];
  video?: string;
  liveUrl?: string;
  demoOnRequest?: boolean;
  demoNotice?: string;
  repositoryUrl?: string;
  relatedProjects?: string[];
  portfolioType?: "web" | "android";
  ownershipNotice?: string;
};

/**
 * This is the browser-safe catalogue. Only approved public entries belong here.
 * Draft catalogue data lives in projects.private.ts and is deliberately not
 * imported by public routes or client components.
 */
/**
 * Portfolio entries approved by the studio for this local public showcase.
 * Screens use demo-safe product views only; detailed client outcomes remain
 * intentionally outside the public case-study record.
 */
export const publishedProjects: readonly PublicProject[] = [
  {
    id: "medichelp", slug: "medichelp", title: "MedicHelp", subtitle: "Healthcare SaaS",
    summary: "Healthcare software for clinics that brings scheduling, patient management, billing and role-based daily work into one workspace.",
    category: "SaaS platform", platforms: ["Web", "Backend"], technologies: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    publicationState: "published", featured: true, featuredOrder: 1, year: "2026",
    thumbnail: "/projects/medichelp-work.webp", heroImage: "/projects/medichelp-work.webp", screenshots: ["/projects/medichelp-work.webp"],
    demoOnRequest: true,
    demoNotice: "A live MedicHelp demo can be arranged on request.",
    longDescription: "MedicHelp is a multi-clinic healthcare platform for keeping appointments, patient context and role-specific workspaces connected throughout the day.",
    problem: "Clinic teams can otherwise move between separate reception, clinician and patient workflows without a shared operational view.",
    features: ["Role-specific workspaces for clinic staff and patients", "Shared appointment and patient-flow context", "Calendar, documents, billing and clinical operations", "Configurable modules, entitlements and feature flags"],
    technicalHighlights: ["React 18 + Vite client with TanStack Query, Zustand and Tailwind CSS", "NestJS API with Prisma and PostgreSQL", "Redis and BullMQ for cache and asynchronous jobs", "MinIO storage for documents, reports and medical files"],
    architecture: "A monorepo separates the web client, NestJS API, shared resources and MedConnect flows. Authentication, clinic context and business modules live behind the API layer.",
  },
  {
    id: "dental-laboratory-management", slug: "dental-laboratory-management", title: "Dental Laboratory Management", subtitle: "Operations platform",
    summary: "A browser-based operations system for dental laboratories to track jobs, technician work, procedures and financial rules.",
    category: "Business platform", platforms: ["Web", "Backend"], technologies: ["TypeScript", "Web application", "Business workflows"],
    publicationState: "published", featured: true, featuredOrder: 2, year: "2026",
    thumbnail: "/projects/dental-lab-work.webp", heroImage: "/projects/dental-lab-work.webp", screenshots: ["/projects/dental-lab-work.webp"],
    liveUrl: "https://dental-lab-web.onrender.com/login",
    demoNotice: "Demo hosting uses a free database tier. The first opening may take up to around 30 seconds while it wakes up.",
    longDescription: "Dental Lab Management is a laboratory operations product built around incoming jobs, technician activity, configurable procedures and financial rules.",
    problem: "Laboratory work needs a shared view of each job’s status, owner and next operational step.",
    features: ["Operational register and real-time status visibility", "Work intake, scanning and technician workflows", "Role-based access for management, reception, technicians, couriers and doctors", "Company-aware operational context and audited administration"],
    technicalHighlights: ["React, TypeScript and Vite with React Router and TanStack Query", "NestJS REST API with Prisma and PostgreSQL", "Cookie sessions, CSRF protection and centralized RBAC", "Zod and React Hook Form for validated workflows"],
    architecture: "A pnpm workspace keeps the React client, NestJS API and shared packages aligned. The backend owns sessions, permissions and laboratory data while the client provides responsive operational views.",
  },
  {
    id: "restaurant-saas", slug: "restaurant-saas", title: "Restaurant SaaS", subtitle: "Ordering and operations",
    summary: "A staff workspace for restaurants and bars that brings QR orders, table service, alerts and live operating status together.",
    category: "SaaS platform", platforms: ["Web", "Backend"], technologies: ["Web application", "Operational workflows", "QR ordering"],
    publicationState: "published", featured: true, featuredOrder: 3, year: "2026",
    thumbnail: "/projects/restaurant-saas-work.webp", heroImage: "/projects/restaurant-saas-work.webp", screenshots: ["/projects/restaurant-saas-work.webp"],
    liveUrl: "https://resto-pearl-omega.vercel.app/staff?restaurantSlug=food-1",
    demoNotice: "Demo hosting uses a free database tier. The first opening may take up to around 30 seconds while it wakes up.",
    longDescription: "Food 1 is a staff-facing restaurant and bar workspace for handling QR orders, table status and service alerts in one operating view.",
    problem: "Incoming customer requests, table service and the staff member who needs to act can easily become disconnected.",
    features: ["QR order intake and validation", "Table-oriented service workflow", "Live staff alerts and ready-to-serve status", "Restaurant operations across desktop, tablet and mobile"],
    technicalHighlights: ["Responsive staff dashboard", "QR-first ordering workflow", "Table management and service alerts", "Restaurant-specific operational states"],
  },
  {
    id: "gr-plus", slug: "gr-plus", title: "GR Plus", subtitle: "Offline-first field operations",
    summary: "An offline-ready field application for technicians to create reports, capture evidence, collect signatures, generate PDFs and synchronise later.",
    category: "Field platform", platforms: ["Web", "Android"], technologies: ["Offline-first", "Synchronization", "PDF workflows"],
    publicationState: "published", featured: true, featuredOrder: 4, year: "2026",
    thumbnail: "/projects/gr-plus-work.webp", heroImage: "/projects/gr-plus-work.webp", screenshots: ["/projects/gr-plus-work.webp"],
    liveUrl: "https://gr-plus-web.vercel.app/",
    demoNotice: "Demo hosting uses a free database tier. The first opening may take up to around 30 seconds while it wakes up.",
    longDescription: "GR Plus is a field-work application for technicians who need to create, complete and deliver intervention reports away from a desk, with or without a connection.",
    problem: "Technicians still need to complete reports when connectivity is poor, then synchronise their work and status later.",
    features: ["Digital field forms and intervention drafts", "Online and offline work modes", "Synchronization with the server when connectivity returns", "PDF reports, client records and model management"],
    technicalHighlights: ["Offline-first workflow", "Local draft persistence", "Explicit synchronization state", "PDF report export"],
  },
  {
    id: "imperials-hotel", slug: "imperials-hotel", title: "Imperial’s Hotel", subtitle: "Hospitality website",
    summary: "A responsive hotel and spa website where guests can explore rooms, services and booking options across devices.",
    category: "Hospitality website", platforms: ["Web"], technologies: ["Responsive web", "Booking flow", "Hospitality"],
    publicationState: "published", featured: true, featuredOrder: 5, year: "2026",
    thumbnail: "/projects/imperials-hotel-work.webp", heroImage: "/projects/imperials-hotel-work.webp", screenshots: ["/projects/imperials-hotel-work.webp"],
    liveUrl: "https://imperialshotel.netlify.app/",
    longDescription: "Imperial’s Hotel is a responsive hospitality website for presenting rooms, spa, restaurant and reservation journeys with a premium visual direction.",
    problem: "Prospective guests need a direct path from discovering the hotel to checking availability and booking.",
    features: ["Rooms and suites discovery", "Reservation interface", "Hotel, spa and restaurant information", "Responsive desktop, tablet and mobile layouts"],
    technicalHighlights: ["Responsive web experience", "Reservation-oriented information architecture", "Device-specific layouts"],
  },
  {
    id: "bar-grill", slug: "bar-grill", title: "Bar & Grill", subtitle: "Restaurant website",
    summary: "A responsive restaurant website for discovering the menu, chef story and table-booking option in one experience.",
    category: "Restaurant website", platforms: ["Web"], technologies: ["Responsive web", "Table booking", "Menu experience"],
    publicationState: "published", featured: true, featuredOrder: 6, year: "2026",
    thumbnail: "/projects/bar-grill-work.webp", heroImage: "/projects/bar-grill-work.webp", screenshots: ["/projects/bar-grill-work.webp"],
    liveUrl: "https://letmeeat.netlify.app/",
    longDescription: "Bar & Grill is a responsive restaurant website that brings the menu, chef story and table booking together in a warm editorial experience.",
    problem: "A restaurant website needs to make its menu, character and table-booking path easy to find without competing for attention.",
    features: ["Menu discovery", "Book-a-table flow", "Chef and local-ingredient storytelling", "Responsive layouts for restaurant visitors"],
    technicalHighlights: ["Responsive web experience", "Table-booking call to action", "Editorial menu presentation"],
  },
  {
    id: "iwear", slug: "iwear", title: "IWEAR", subtitle: "E-commerce storefront",
    summary: "A mobile-first fashion storefront for browsing collections, discovering products and moving toward a cart across devices.",
    category: "E-commerce", platforms: ["Web"], technologies: ["Responsive web", "Product catalog", "Commerce flows"],
    publicationState: "published", featured: true, featuredOrder: 7, year: "2026",
    thumbnail: "/projects/iwear-work.webp", heroImage: "/projects/iwear-work.webp", screenshots: ["/projects/iwear-work.webp"],
    liveUrl: "https://iwearshop.netlify.app/",
    longDescription: "IWEAR is a responsive fashion storefront structured around collections, product browsing and a compact shopping journey across devices.",
    problem: "Shoppers need a simple route from a visual collection to relevant products and a cart-ready shopping flow.",
    features: ["Collection and product discovery", "Cart-ready shopping interface", "Responsive product catalogue", "Mobile-first storefront navigation"],
    technicalHighlights: ["Responsive e-commerce interface", "Product catalogue presentation", "Cross-device shopping flow"],
  },
  {
    id: "innerly", slug: "innerly", title: "INNERLY", subtitle: "Personal growth Android app",
    summary: "An offline-first Android app for noticing habits, recording activities and turning personal reflection into small, practical experiments.",
    category: "Android Application", platforms: ["Android"], technologies: ["Kotlin", "Jetpack Compose", "Room", "DataStore", "WorkManager"], portfolioType: "android",
    publicationState: "in-development", featured: true, featuredOrder: 8, year: "2026",
    thumbnail: "/projects/android/innerly.png", heroImage: "/projects/android/innerly.png", screenshots: ["/projects/android/innerly.png"],
    longDescription: "INNERLY helps people observe everyday habits, compare perception with recorded activity and make gradual personal changes without sending private data away by default.",
    problem: "Personal patterns are easy to miss when reflection, activity tracking and small experiments live in separate tools or not at all.",
    solution: "A calm, local-first Android experience brings activity logging, timers, reflection and pattern review into one private space.",
    features: ["Daily activity, quantity, count and duration logging", "Timers, intervals and personal experiments", "Perception compared with recorded activity", "Private local storage and reflection"],
    technicalHighlights: ["Native Android interface with Kotlin and Jetpack Compose", "Local persistence with Room and DataStore", "Background work where reminders or scheduled work are appropriate"],
    architecture: "The app is designed around local-first records, with the interface and persistence model keeping personal activity data close to the device.",
    ownershipNotice: "© 2026 LAC STUDIO. Original software, interface design and portfolio presentation. All rights reserved.",
  },
  {
    id: "noped", slug: "noped", title: "NOPED", subtitle: "Personal finance Android app",
    summary: "A local-first Android app for pausing impulsive purchases, recording decisions and seeing the money kept by choosing not to buy.",
    category: "Android Application", platforms: ["Android"], technologies: ["Kotlin", "Jetpack Compose", "Room", "DataStore", "WorkManager"], portfolioType: "android",
    publicationState: "in-development", featured: true, featuredOrder: 9, year: "2026",
    thumbnail: "/projects/android/noped.png", heroImage: "/projects/android/noped.png", screenshots: ["/projects/android/noped.png"],
    longDescription: "NOPED creates a deliberate pause between an impulse and a purchase, then turns those choices into a personal history of decisions, savings goals and insights.",
    problem: "Impulse spending can happen faster than a person has time to consider whether an item still matters.",
    solution: "A short decision cooldown and private history make room to decide intentionally and see the practical value of resisting a purchase.",
    features: ["Impulse purchase capture and decision cooldown", "Resisted and purchased history", "Money Kept and Nope Score", "Savings goals and personal insights"],
    technicalHighlights: ["Native Kotlin and Jetpack Compose application", "Room and DataStore for local-first records", "WorkManager where background reminders or work are appropriate"],
    architecture: "The product is organized around durable local decisions and goal progress, keeping the core experience available without depending on a live service.",
    ownershipNotice: "© 2026 LAC STUDIO. Original software, interface design and portfolio presentation. All rights reserved.",
  },
  {
    id: "backly", slug: "backly", title: "BACKLY", subtitle: "Productivity Android app",
    summary: "A focused Android reminder app for capturing something important, scheduling it precisely and following through without unnecessary complexity.",
    category: "Android Application", platforms: ["Android"], technologies: ["Kotlin", "Jetpack Compose", "Local persistence", "Android scheduling APIs"], portfolioType: "android",
    publicationState: "in-development", featured: true, featuredOrder: 11, year: "2026",
    thumbnail: "/projects/android/backly.png", heroImage: "/projects/android/backly.png", screenshots: ["/projects/android/backly.png"],
    longDescription: "BACKLY is a simple reminder experience built around quick capture, intentional schedules, repeat behavior and a clear history of what was completed.",
    problem: "Important tasks can be forgotten when reminders are slow to create, hard to schedule or buried in a crowded interface.",
    solution: "A narrow, focused flow makes it fast to add a reminder, choose when it should return and keep the history easy to review.",
    features: ["Quick reminders", "Precise date and time scheduling", "Repeating reminders and notifications", "Completed task history and local storage"],
    technicalHighlights: ["Native Android application with Kotlin and Jetpack Compose", "Local persistence for reminders and completion history", "Android notification and scheduling APIs"],
    architecture: "The core reminder data and schedules are designed to remain useful on-device, including when a connection is unavailable.",
    ownershipNotice: "© 2026 LAC STUDIO. Original software, interface design and portfolio presentation. All rights reserved.",
  },
  {
    id: "language-sprint", slug: "language-sprint", title: "Language Sprint", subtitle: "French-learning Android app",
    summary: "A practical Android learning app for everyday French and dental-professional vocabulary, listening, speaking and active recall.",
    category: "Android Application", platforms: ["Android"], technologies: ["Kotlin", "Jetpack Compose", "Speech recognition", "Text-to-speech", "Local persistence"], portfolioType: "android",
    publicationState: "in-development", featured: true, featuredOrder: 12, year: "2026",
    thumbnail: "/projects/android/language-sprint.png", heroImage: "/projects/android/language-sprint.png", screenshots: ["/projects/android/language-sprint.png"],
    longDescription: "Language Sprint supports practical French through short structured sessions, including a dedicated context for dental professionals and roughly 1,300 general learning items.",
    problem: "Learners often need language practice tied to real situations, not only isolated vocabulary lists.",
    solution: "Short lessons, listening, speaking and spaced recall connect general language learning with the contexts where it needs to be used.",
    features: ["Structured learning sessions and everyday vocabulary", "Dental-professional vocabulary context", "Listening, pronunciation and speaking practice", "Active recall, spaced repetition and progress"],
    technicalHighlights: ["Native Kotlin and Jetpack Compose interface", "Speech recognition and text-to-speech where available", "Local persistence for learning progress and content"],
    architecture: "The experience is organized around local learning content and progress so core practice can remain available without a constant connection.",
    ownershipNotice: "© 2026 LAC STUDIO. Original software, interface design and portfolio presentation. All rights reserved.",
  },
  {
    id: "hubig", slug: "hubig", title: "HuBiG", subtitle: "Android notification gateway",
    summary: "An Android gateway that connects a physical device to compatible backends for mobile-network SMS delivery, configuration and diagnostics.",
    category: "Android Application", platforms: ["Android", "Backend"], technologies: ["Kotlin", "Android background services", "SIM management", "REST API integration"], portfolioType: "android",
    publicationState: "in-development", featured: true, featuredOrder: 10, year: "2026",
    thumbnail: "/projects/android/hubig.png", heroImage: "/projects/android/hubig.png", screenshots: ["/projects/android/hubig.png"],
    longDescription: "HuBiG connects an Android device to compatible backend systems to support local device-based SMS gateway operation, synchronization controls and delivery diagnostics.",
    problem: "A backend that needs to use a physical device for mobile-network notification delivery also needs clear configuration, connection state and diagnosable operations.",
    solution: "The gateway keeps device setup, SIM selection, synchronization controls and diagnostic logs visible in a focused Android operating interface.",
    features: ["SMS gateway operation", "Backend integration and synchronization controls", "SIM and dual-SIM management", "Background operation and delivery diagnostics"],
    technicalHighlights: ["Native Kotlin Android application", "Android background services and SIM-management workflows", "REST API integration for compatible backend systems"],
    architecture: "HuBiG treats the Android device as a configurable delivery node, with local operational state and backend communication kept explicit for support and diagnostics.",
    ownershipNotice: "© 2026 LAC STUDIO. Original software, interface design and portfolio presentation. All rights reserved.",
  },
];
export const featuredProjects = publishedProjects.filter((project) => project.featured).sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
export const publicProjectBySlug = (slug: string) => publishedProjects.find((project) => project.slug === slug);
