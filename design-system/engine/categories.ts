export const libraryCategories = [
  { id: "foundations", label: "Foundations" },
  { id: "typography", label: "Typography" },
  { id: "actions", label: "Actions" },
  { id: "forms", label: "Forms" },
  { id: "disclosure", label: "Disclosure" },
  { id: "feedback", label: "Feedback" },
  { id: "data-display", label: "Data Display" },
  { id: "carousels", label: "Carousels" },
  { id: "overlays", label: "Overlays" },
  { id: "advanced", label: "Advanced" },
  { id: "motion", label: "Motion" },
  { id: "effects", label: "Effects" },
] as const;

export type LibraryCategoryId = (typeof libraryCategories)[number]["id"];
