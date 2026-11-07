export const libraryCategories = [
  { id: "foundations", label: "Foundations", componentId: "foundation.palette" },
  { id: "typography", label: "Typography", componentId: "typography.scale" },
  { id: "actions", label: "Actions", componentId: "action.buttons" },
  { id: "forms", label: "Forms", componentId: "form.contact" },
  { id: "disclosure", label: "Disclosure", componentId: "disclosure.library" },
  { id: "feedback", label: "Feedback", componentId: "feedback.library" },
  { id: "data-display", label: "Data Display", componentId: "data.cards" },
  { id: "carousels", label: "Carousels", componentId: "carousel.projects" },
  { id: "overlays", label: "Overlays", componentId: "overlay.preview" },
  { id: "advanced", label: "Advanced", componentId: "advanced.navigation" },
  { id: "motion", label: "Motion", componentId: "motion.recipes" },
  { id: "effects", label: "Effects", componentId: "effects.spotlight" },
] as const;

export type LibraryCategoryId = (typeof libraryCategories)[number]["id"];

export const isLibraryCategoryId = (value: string | null): value is LibraryCategoryId =>
  value !== null && libraryCategories.some((category) => category.id === value);

export const componentForCategory = (categoryId: LibraryCategoryId) =>
  libraryCategories.find((category) => category.id === categoryId)?.componentId ?? "foundation.palette";
