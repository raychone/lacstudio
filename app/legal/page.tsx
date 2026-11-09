import { PortfolioApp } from "@/components/portfolio/portfolio-app";
export const metadata = { title: "Legal", robots: { index: false, follow: false }, alternates: { canonical: "/legal" } };
export default function LegalPage() { return <PortfolioApp page="legal" />; }
