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
import "../components/lab/shared-showcase.css";
import "../components/lab/nocturne/nocturne-lab.css";
import "../design-system/designs/nocturne/components/nocturne-components.css";
import "../design-system/designs/nocturne/components/nocturne-refinements.css";
import "../design-system/designs/nocturne/components/nocturne-disclosure-feedback.css";
import "../design-system/designs/nocturne/components/nocturne-batch-two-refinements.css";
import "../design-system/designs/nocturne/components/nocturne-data-display.css";
import "../design-system/designs/nocturne/components/nocturne-overlays-advanced.css";
import "../design-system/designs/nocturne/components/nocturne-motion-effects.css";
import "../components/lab/nocturne/nocturne-effects-refinements.css";

export const metadata: Metadata = {
  title: "LAC. Studio — Design Lab",
  description: "Independent creative development studio. Design systems, interactions and digital experiences.",
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
