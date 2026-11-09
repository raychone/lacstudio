import { PortfolioApp } from "@/components/portfolio/portfolio-app";
export const metadata = { title: "Work", description: "Public case studies from LAC STUDIO, published only when their context and media are approved.", alternates: { canonical: "/work" } };
export default function WorkPage() { return <PortfolioApp page="work" />; }
