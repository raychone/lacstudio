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
  },
  {
    id: "dental-laboratory-management", slug: "dental-laboratory-management", title: "Dental Laboratory Management", subtitle: "Operations platform",
    summary: "A focused operations platform for work orders, technician workflows, configurable procedures and financial rules.",
    category: "Business platform", platforms: ["Web", "Backend"], technologies: ["TypeScript", "Web application", "Business workflows"],
    publicationState: "published", featured: true, featuredOrder: 2, year: "2026",
    thumbnail: "/projects/dental-lab-work.png", heroImage: "/projects/dental-lab-work.png", screenshots: ["/projects/dental-lab-work.png"],
    liveUrl: "https://dental-lab-web.onrender.com/login",
    demoNotice: "Demo hosting uses a free database tier. The first opening may take up to around 30 seconds while it wakes up.",
  },
  {
    id: "restaurant-saas", slug: "restaurant-saas", title: "Restaurant SaaS", subtitle: "Ordering and operations",
    summary: "Restaurant and bar operations with QR orders, staff workflows, table service and live operational status.",
    category: "SaaS platform", platforms: ["Web", "Backend"], technologies: ["Web application", "Operational workflows", "QR ordering"],
    publicationState: "published", featured: true, featuredOrder: 3, year: "2026",
    thumbnail: "/projects/restaurant-saas-work.png", heroImage: "/projects/restaurant-saas-work.png", screenshots: ["/projects/restaurant-saas-work.png"],
    liveUrl: "https://resto-pearl-omega.vercel.app/staff?restaurantSlug=food-1",
  },
  {
    id: "gr-plus", slug: "gr-plus", title: "GR Plus", subtitle: "Offline-first field operations",
    summary: "A field-ready workflow for reports, photographs, signatures, PDF production and synchronization away from a desk.",
    category: "Field platform", platforms: ["Web", "Android"], technologies: ["Offline-first", "Synchronization", "PDF workflows"],
    publicationState: "published", featured: true, featuredOrder: 4, year: "2026",
    thumbnail: "/projects/gr-plus-work.png", heroImage: "/projects/gr-plus-work.png", screenshots: ["/projects/gr-plus-work.png"],
    liveUrl: "https://gr-plus-web.vercel.app/",
  },
  {
    id: "imperials-hotel", slug: "imperials-hotel", title: "Imperial’s Hotel", subtitle: "Hospitality website",
    summary: "A responsive hotel and spa website with room discovery, reservation flows, restaurant and service information.",
    category: "Hospitality website", platforms: ["Web"], technologies: ["Responsive web", "Booking flow", "Hospitality"],
    publicationState: "published", featured: true, featuredOrder: 5, year: "2026",
    thumbnail: "/projects/imperials-hotel-work.png", heroImage: "/projects/imperials-hotel-work.png", screenshots: ["/projects/imperials-hotel-work.png"],
    liveUrl: "https://imperialshotel.netlify.app/",
  },
  {
    id: "bar-grill", slug: "bar-grill", title: "Bar & Grill", subtitle: "Restaurant website",
    summary: "A responsive restaurant website that brings menu discovery, chef story and table booking into one experience.",
    category: "Restaurant website", platforms: ["Web"], technologies: ["Responsive web", "Table booking", "Menu experience"],
    publicationState: "published", featured: true, featuredOrder: 6, year: "2026",
    thumbnail: "/projects/bar-grill-work.png", heroImage: "/projects/bar-grill-work.png", screenshots: ["/projects/bar-grill-work.png"],
    liveUrl: "https://letmeeat.netlify.app/",
  },
  {
    id: "iwear", slug: "iwear", title: "IWEAR", subtitle: "E-commerce storefront",
    summary: "A responsive fashion storefront with product discovery, collections, cart interactions and mobile-first shopping.",
    category: "E-commerce", platforms: ["Web"], technologies: ["Responsive web", "Product catalog", "Commerce flows"],
    publicationState: "published", featured: true, featuredOrder: 7, year: "2026",
    thumbnail: "/projects/iwear-work.png", heroImage: "/projects/iwear-work.png", screenshots: ["/projects/iwear-work.png"],
    liveUrl: "https://iwearshop.netlify.app/",
  },
];
export const featuredProjects = publishedProjects.filter((project) => project.featured).sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
export const publicProjectBySlug = (slug: string) => publishedProjects.find((project) => project.slug === slug);
