import type { LibraryCategoryId } from "./categories";

export const sizingContract = {
  controls: { xs: 32, sm: 36, md: 44, lg: 52, touchTarget: 44 },
  fields: { md: 44, lg: 52, textareaMin: 96 },
  cards: { paddingSm: 16, paddingMd: 24, paddingLg: 32, minHeight: 168, featureMinHeight: 280 },
  overlays: { sm: 400, md: 560, lg: 720, drawer: 420, command: 470 },
  carousel: { minHeight: 280, compactMinHeight: 200, featureMinHeight: 340 },
  table: { cellPadding: 12 },
} as const;

export const fixtureSizeClasses = ["control", "content", "form"] as const;
export type FixtureSizeClass = (typeof fixtureSizeClasses)[number];

export const fixtureSizeByCategory: Record<LibraryCategoryId, FixtureSizeClass> = {
  foundations: "content", typography: "content", actions: "control", forms: "form",
  disclosure: "content", feedback: "content", "data-display": "content", carousels: "content",
  overlays: "control", advanced: "content", motion: "content", effects: "content",
};

export function hasCompleteFixtureSizing(categories: readonly LibraryCategoryId[]) {
  return categories.every((category) => fixtureSizeClasses.includes(fixtureSizeByCategory[category]));
}
