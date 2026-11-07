import type { LibraryCategoryId } from "@/design-system/engine/categories";

export type ShowcaseVariant = { id: string; label: string };
export type ShowcaseDefinition = { category: LibraryCategoryId; componentId: string; title: string; description: string; variants?: ShowcaseVariant[]; size: "control" | "content" | "form" };

export const showcaseDefinitions: Partial<Record<LibraryCategoryId, ShowcaseDefinition>> = {
  foundations: { category: "foundations", componentId: "foundation.semantic-roles", title: "Semantic foundations", description: "The same roles and spacing contract, interpreted through each system's own tokens.", size: "content" },
  typography: { category: "typography", componentId: "typography.reference-scale", title: "Reference type scale", description: "A shared hierarchy and sample content reveal how each system handles voice, rhythm and density.", size: "content" },
  actions: { category: "actions", componentId: "action.primary", title: "Action reference set", description: "Equivalent labels, size classes and states establish a direct comparison before signature interactions begin.", variants: [{ id: "primary", label: "Primary" }, { id: "secondary", label: "Secondary" }, { id: "outline", label: "Outline" }, { id: "ghost", label: "Ghost" }, { id: "destructive", label: "Destructive" }], size: "control" },
  forms: { category: "forms", componentId: "form.reference", title: "Contact form reference", description: "Shared labels, placeholders and validation states hold each system to the same content contract.", size: "form" },
};

export const showcaseFor = (category: LibraryCategoryId) => showcaseDefinitions[category];
