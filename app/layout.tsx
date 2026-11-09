import type { Metadata } from "next";
import "./globals.css";
import "../design-system/tokens/foundations.css";
import "../design-system/tokens/layout-contract.css";
import "../components/lab/compatibility-playground.css";
import "../design-system/designs/tactile/components/tactile-disclosure-feedback.css";
import "./refinements.css";
import "./lab-expansion.css";
import "./components-reviewed.css";
import "./lab-next.css";
import "./palette.css";
import "./overlay-fix.css";
import "./approved-polish.css";
import "./carousel-fix.css";
import "./cards-approved.css";
import "./navigation-polish.css";
import "./input-button-fix.css";
import "./animation-distinct.css";
import "./spotlight-comet.css";
import "./effect-studies.css";
import "./effects-interaction.css";
import "./multi-design-engine.css";
import "./unified-library.css";
import "./workspace.css";
import "./browser-qa-fixes.css";
import "./tactile-visual-polish.css";
import "./nocturne-visual-polish.css";
import "./editorial-visual-polish.css";
import "./portfolio.css";
import "../components/lab/shared-showcase.css";
import "../components/lab/editorial/editorial-stage.css";
import "../components/lab/editorial/editorial-phase-two.css";
import "../components/lab/editorial/editorial-feedback.css";
import "../components/lab/editorial/editorial-phase-three.css";
import "../components/lab/editorial/editorial-phase-four.css";
import "../components/lab/brutalist/brutalist-stage.css";
import "../components/lab/brutalist/brutalist-phase-two.css";
import "../components/lab/brutalist/brutalist-phase-three.css";
import "../components/lab/brutalist/brutalist-phase-four.css";
import "../components/lab/playground/playground-stage.css";
import "../components/lab/playground/playground-phase-two.css";
import "../components/lab/playground/playground-phase-three.css";
import "../components/lab/playground/playground-phase-four.css";
import "../components/lab/nocturne/nocturne-lab.css";
import "../design-system/designs/nocturne/components/nocturne-components.css";
import "../design-system/designs/nocturne/components/nocturne-refinements.css";
import "../design-system/designs/nocturne/components/nocturne-disclosure-feedback.css";
import "../design-system/designs/nocturne/components/nocturne-batch-two-refinements.css";
import "../design-system/designs/nocturne/components/nocturne-data-display.css";
import "../design-system/designs/nocturne/components/nocturne-overlays-advanced.css";
import "../design-system/designs/nocturne/components/nocturne-command-a11y.css";
import "../design-system/designs/nocturne/components/nocturne-motion-effects.css";
import "../components/lab/nocturne/nocturne-effects-refinements.css";
import "./sizing-contract.css";

export const metadata: Metadata = {
  title: { default: "LAC STUDIO — Digital Product Development", template: "%s | LAC STUDIO" },
  description: "Independent creative development studio for web applications, Android apps, SaaS platforms and custom software.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "LAC STUDIO",
    title: "LAC STUDIO — Digital Product Development",
    description: "Independent creative development studio for web applications, Android apps, SaaS platforms and custom software.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
