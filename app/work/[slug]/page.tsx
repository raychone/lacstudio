import { notFound } from "next/navigation";
import { PortfolioApp } from "@/components/portfolio/portfolio-app";
import { publicProjectBySlug } from "@/content/projects";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = publicProjectBySlug(slug);
  if (!project) notFound();
  return <PortfolioApp page="case-study" project={project} />;
}
