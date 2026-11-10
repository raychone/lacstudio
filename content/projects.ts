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
  demoNotice?: string;
  repositoryUrl?: string;
  relatedProjects?: string[];
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
    summary: "A connected workspace for clinic scheduling, patient management, billing and role-based day-to-day workflows.",
    category: "SaaS platform", platforms: ["Web", "Backend"], technologies: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    publicationState: "published", featured: true, featuredOrder: 1, year: "2026",
    thumbnail: "/projects/medichelp-work.png", heroImage: "/projects/medichelp-work.png", screenshots: ["/projects/medichelp-work.png"],
    longDescription: "MedicHelp is a multi-clinic healthcare platform that keeps appointments, patient context and role-specific workspaces connected across the day-to-day operation of a clinic.",
    problem: "It replaces fragmented reception, clinician and patient workflows with one shared operational context.",
    features: ["Role-specific workspaces for clinic staff and patients", "Shared appointment and patient-flow context", "Calendar, documents, billing and clinical operations", "Configurable modules, entitlements and feature flags"],
    technicalHighlights: ["React 18 + Vite client with TanStack Query, Zustand and Tailwind CSS", "NestJS API with Prisma and PostgreSQL", "Redis and BullMQ for cache and asynchronous jobs", "MinIO storage for documents, reports and medical files"],
    architecture: "A monorepo separates the web client, NestJS API, shared resources and MedConnect flows. Authentication, clinic context and business modules live behind the API layer.",
  },
  {
    id: "dental-laboratory-management", slug: "dental-laboratory-management", title: "Dental Laboratory Management", subtitle: "Operations platform",
    summary: "A focused operations platform for work orders, technician workflows, configurable procedures and financial rules.",
    category: "Business platform", platforms: ["Web", "Backend"], technologies: ["TypeScript", "Web application", "Business workflows"],
    publicationState: "published", featured: true, featuredOrder: 2, year: "2026",
    thumbnail: "/projects/dental-lab-work.png", heroImage: "/projects/dental-lab-work.png", screenshots: ["/projects/dental-lab-work.png"],
    liveUrl: "https://dental-lab-web.onrender.com/login",
    demoNotice: "Demo hosting uses a free database tier. The first opening may take up to around 30 seconds while it wakes up.",
    longDescription: "Dental Lab Management is a Romanian laboratory operations product built around incoming work, technician activity, configurable procedures and financial rules.",
    problem: "It makes the status, ownership and next operational step of every laboratory job visible in one place.",
    features: ["Operational register and real-time status visibility", "Work intake, scanning and technician workflows", "Role-based access for management, reception, technicians, couriers and doctors", "Company-aware operational context and audited administration"],
    technicalHighlights: ["React, TypeScript and Vite with React Router and TanStack Query", "NestJS REST API with Prisma and PostgreSQL", "Cookie sessions, CSRF protection and centralized RBAC", "Zod and React Hook Form for validated workflows"],
    architecture: "A pnpm workspace keeps the React client, NestJS API and shared packages aligned. The backend owns sessions, permissions and laboratory data while the client provides responsive operational views.",
  },
  {
    id: "restaurant-saas", slug: "restaurant-saas", title: "Restaurant SaaS", subtitle: "Ordering and operations",
    summary: "Restaurant and bar operations with QR orders, staff workflows, table service and live operational status.",
    category: "SaaS platform", platforms: ["Web", "Backend"], technologies: ["Web application", "Operational workflows", "QR ordering"],
    publicationState: "published", featured: true, featuredOrder: 3, year: "2026",
    thumbnail: "/projects/restaurant-saas-work.png", heroImage: "/projects/restaurant-saas-work.png", screenshots: ["/projects/restaurant-saas-work.png"],
    liveUrl: "https://resto-pearl-omega.vercel.app/staff?restaurantSlug=food-1",
    longDescription: "Food 1 is a staff-facing restaurant and bar workspace for turning QR orders, table status and service alerts into a clear operating view.",
    problem: "It reduces the gap between incoming customer requests, table service and the staff member who needs to act next.",
    features: ["QR order intake and validation", "Table-oriented service workflow", "Live staff alerts and ready-to-serve status", "Restaurant operations across desktop, tablet and mobile"],
    technicalHighlights: ["Responsive staff dashboard", "QR-first ordering workflow", "Table management and service alerts", "Restaurant-specific operational states"],
  },
  {
    id: "gr-plus", slug: "gr-plus", title: "GR Plus", subtitle: "Offline-first field operations",
    summary: "A field-ready workflow for reports, photographs, signatures, PDF production and synchronization away from a desk.",
    category: "Field platform", platforms: ["Web", "Android"], technologies: ["Offline-first", "Synchronization", "PDF workflows"],
    publicationState: "published", featured: true, featuredOrder: 4, year: "2026",
    thumbnail: "/projects/gr-plus-work.png", heroImage: "/projects/gr-plus-work.png", screenshots: ["/projects/gr-plus-work.png"],
    liveUrl: "https://gr-plus-web.vercel.app/",
    longDescription: "GR Plus is a field-work application for technicians who need to create, complete and deliver intervention reports away from a desk, whether connected or offline.",
    problem: "It lets field teams keep working during poor connectivity, then synchronize reports and status with the server.",
    features: ["Digital field forms and intervention drafts", "Online and offline work modes", "Synchronization with the server when connectivity returns", "PDF reports, client records and model management"],
    technicalHighlights: ["Offline-first workflow", "Local draft persistence", "Explicit synchronization state", "PDF report export"],
  },
  {
    id: "imperials-hotel", slug: "imperials-hotel", title: "Imperial’s Hotel", subtitle: "Hospitality website",
    summary: "A responsive hotel and spa website with room discovery, reservation flows, restaurant and service information.",
    category: "Hospitality website", platforms: ["Web"], technologies: ["Responsive web", "Booking flow", "Hospitality"],
    publicationState: "published", featured: true, featuredOrder: 5, year: "2026",
    thumbnail: "/projects/imperials-hotel-work.png", heroImage: "/projects/imperials-hotel-work.png", screenshots: ["/projects/imperials-hotel-work.png"],
    liveUrl: "https://imperialshotel.netlify.app/",
    longDescription: "Imperial’s Hotel is a responsive hospitality experience for presenting rooms, spa, restaurant and reservation journeys with a premium visual tone.",
    problem: "It gives prospective guests one clear path from discovering the hotel to checking availability and booking.",
    features: ["Rooms and suites discovery", "Reservation interface", "Hotel, spa and restaurant information", "Responsive desktop, tablet and mobile layouts"],
    technicalHighlights: ["Responsive web experience", "Reservation-oriented information architecture", "Device-specific layouts"],
  },
  {
    id: "bar-grill", slug: "bar-grill", title: "Bar & Grill", subtitle: "Restaurant website",
    summary: "A responsive restaurant website that brings menu discovery, chef story and table booking into one experience.",
    category: "Restaurant website", platforms: ["Web"], technologies: ["Responsive web", "Table booking", "Menu experience"],
    publicationState: "published", featured: true, featuredOrder: 6, year: "2026",
    thumbnail: "/projects/bar-grill-work.png", heroImage: "/projects/bar-grill-work.png", screenshots: ["/projects/bar-grill-work.png"],
    liveUrl: "https://letmeeat.netlify.app/",
    longDescription: "Bar & Grill is a responsive restaurant website that gives the menu, chef story and table booking equal space in a warm editorial experience.",
    problem: "It turns a restaurant's menu, character and table-booking call to action into one easy visitor journey.",
    features: ["Menu discovery", "Book-a-table flow", "Chef and local-ingredient storytelling", "Responsive layouts for restaurant visitors"],
    technicalHighlights: ["Responsive web experience", "Table-booking call to action", "Editorial menu presentation"],
  },
  {
    id: "iwear", slug: "iwear", title: "IWEAR", subtitle: "E-commerce storefront",
    summary: "A responsive fashion storefront with product discovery, collections, cart interactions and mobile-first shopping.",
    category: "E-commerce", platforms: ["Web"], technologies: ["Responsive web", "Product catalog", "Commerce flows"],
    publicationState: "published", featured: true, featuredOrder: 7, year: "2026",
    thumbnail: "/projects/iwear-work.png", heroImage: "/projects/iwear-work.png", screenshots: ["/projects/iwear-work.png"],
    liveUrl: "https://iwearshop.netlify.app/",
    longDescription: "IWEAR is a responsive fashion storefront structured around collections, product browsing and a compact shopping journey across devices.",
    problem: "It helps visitors move from a visual collection to relevant products and a cart-ready shopping flow without friction.",
    features: ["Collection and product discovery", "Cart-ready shopping interface", "Responsive product catalogue", "Mobile-first storefront navigation"],
    technicalHighlights: ["Responsive e-commerce interface", "Product catalogue presentation", "Cross-device shopping flow"],
  },
];
export const featuredProjects = publishedProjects.filter((project) => project.featured).sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
export const publicProjectBySlug = (slug: string) => publishedProjects.find((project) => project.slug === slug);
