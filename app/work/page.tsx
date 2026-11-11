import { PortfolioApp } from "@/components/portfolio/portfolio-app";
export const metadata = { title: "Work", description: "Software case studies from LAC STUDIO across healthcare, laboratory operations, restaurants, field work, hospitality and commerce.", alternates: { canonical: "/work" } };
export default function WorkPage() { return <PortfolioApp page="work" />; }
