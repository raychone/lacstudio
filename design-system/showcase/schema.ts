import type { LibraryCategoryId } from "@/design-system/engine/categories";
import { fixtureSizeByCategory, type FixtureSizeClass } from "@/design-system/engine/sizing-contract";

export type ShowcaseVariant = { id: string; label: string };
export type ShowcaseDefinition = { category: LibraryCategoryId; componentId: string; title: string; description: string; variants?: ShowcaseVariant[]; size: FixtureSizeClass };

export const showcaseDefinitions: Partial<Record<LibraryCategoryId, ShowcaseDefinition>> = {
  foundations: { category: "foundations", componentId: "foundation.semantic-roles", title: "Semantic foundations", description: "The same roles and spacing contract, interpreted through each system's own tokens.", size: fixtureSizeByCategory.foundations },
  typography: { category: "typography", componentId: "typography.reference-scale", title: "Reference type scale", description: "A shared hierarchy and sample content reveal how each system handles voice, rhythm and density.", size: fixtureSizeByCategory.typography },
  actions: { category: "actions", componentId: "action.primary", title: "Action reference set", description: "Equivalent labels, size classes and states establish a direct comparison before signature interactions begin.", variants: [{ id: "primary", label: "Primary" }, { id: "secondary", label: "Secondary" }, { id: "outline", label: "Outline" }, { id: "ghost", label: "Ghost" }, { id: "destructive", label: "Destructive" }], size: fixtureSizeByCategory.actions },
  forms: { category: "forms", componentId: "form.reference", title: "Contact form reference", description: "Shared labels, placeholders and validation states hold each system to the same content contract.", size: fixtureSizeByCategory.forms },
  disclosure: { category: "disclosure", componentId: "disclosure.reference", title: "Disclosure reference set", description: "The same information hierarchy and trigger labels make each reveal pattern directly comparable.", variants: [{ id: "accordion", label: "Accordion" }, { id: "tabs", label: "Tabs" }, { id: "popover", label: "Popover" }], size: fixtureSizeByCategory.disclosure },
  feedback: { category: "feedback", componentId: "feedback.reference", title: "Feedback reference set", description: "A common project state, message and progress value keep transient feedback comparable.", variants: [{ id: "success", label: "Success" }, { id: "warning", label: "Warning" }, { id: "error", label: "Error" }], size: fixtureSizeByCategory.feedback },
  "data-display": { category: "data-display", componentId: "data.reference", title: "Project data reference", description: "The same project names, status and activity sequence set a common outer geometry for information surfaces.", size: fixtureSizeByCategory["data-display"] },
  carousels: { category: "carousels", componentId: "carousel.reference", title: "Project carousel reference", description: "Three shared slides, equal viewport boundaries and manual navigation establish a comparable sequence.", variants: [{ id: "01", label: "01" }, { id: "02", label: "02" }, { id: "03", label: "03" }], size: fixtureSizeByCategory.carousels },
  overlays: { category: "overlays", componentId: "overlay.reference", title: "Overlay reference triggers", description: "Equivalent trigger copy and shared outer size classes clarify which focused surfaces exist in each system.", variants: [{ id: "modal", label: "Modal" }, { id: "drawer", label: "Drawer" }, { id: "command", label: "Command" }], size: fixtureSizeByCategory.overlays },
  advanced: { category: "advanced", componentId: "advanced.reference", title: "Advanced-control reference", description: "A shared selection, range and review sequence exposes the current capability gap without inventing controls.", size: fixtureSizeByCategory.advanced },
  motion: { category: "motion", componentId: "motion.reference", title: "Motion reference target", description: "The same target card and replay control make movement comparable while curves and timing remain system-specific.", variants: [{ id: "fade", label: "Fade" }, { id: "reveal", label: "Reveal" }, { id: "scale", label: "Scale" }], size: fixtureSizeByCategory.motion },
  effects: { category: "effects", componentId: "effects.reference", title: "Effects reference canvas", description: "A shared copy block and canvas boundary compare atmosphere without pretending unrelated effects are identical.", size: fixtureSizeByCategory.effects },
};

export const hasSharedSizingForShowcases = () => Object.values(showcaseDefinitions).every((showcase) => showcase && showcase.size === fixtureSizeByCategory[showcase.category]);

export const showcaseFor = (category: LibraryCategoryId) => showcaseDefinitions[category];
