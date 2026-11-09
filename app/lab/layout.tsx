import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Lab",
  description: "LAC STUDIO's five-system component and interaction laboratory.",
  robots: { index: false, follow: false },
};

export default function LabLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
