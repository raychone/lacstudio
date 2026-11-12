import type { PublicProject } from "./projects";

export type ProjectAttributionClassification = "original-product" | "client-work" | "collaboration" | "unconfirmed";
export type LacStudioRole = "original-software-and-interface" | "project-presentation-and-development";
export type LegalNotice = "all-rights-reserved";

/**
 * Attribution records are deliberately separate from the public project copy.
 * A record can only assert ownership when that fact is already verified in the
 * public catalogue. Unknown ownership remains neutral by design.
 */
export type ProjectAttribution = {
  projectId: string;
  projectName: string;
  classification: ProjectAttributionClassification;
  lacStudioRole: LacStudioRole;
  copyrightYears?: string;
  rightsHolder?: string;
  clientOrCollaborator?: string;
  legalNotice?: LegalNotice;
  showCopyright: boolean;
};

type ProjectAttributionRecord = Omit<ProjectAttribution, "projectId" | "projectName">;

export const fallbackProjectAttribution: ProjectAttributionRecord = {
  classification: "unconfirmed",
  lacStudioRole: "project-presentation-and-development",
  showCopyright: false,
};

const originalLacStudioProduct: ProjectAttributionRecord = {
  classification: "original-product",
  lacStudioRole: "original-software-and-interface",
  copyrightYears: "2026",
  rightsHolder: "LAC STUDIO",
  legalNotice: "all-rights-reserved",
  showCopyright: true,
};

export const projectAttributionRecords: Readonly<Record<string, ProjectAttributionRecord>> = {
  medichelp: fallbackProjectAttribution,
  "dental-laboratory-management": fallbackProjectAttribution,
  "restaurant-saas": fallbackProjectAttribution,
  "gr-plus": fallbackProjectAttribution,
  "imperials-hotel": fallbackProjectAttribution,
  "bar-grill": fallbackProjectAttribution,
  iwear: fallbackProjectAttribution,
  innerly: originalLacStudioProduct,
  noped: originalLacStudioProduct,
  backly: originalLacStudioProduct,
  "language-sprint": originalLacStudioProduct,
  hubig: originalLacStudioProduct,
};

export function getProjectAttribution(project: Pick<PublicProject, "id" | "title">): ProjectAttribution {
  return {
    projectId: project.id,
    projectName: project.title,
    ...(projectAttributionRecords[project.id] ?? fallbackProjectAttribution),
  };
}
