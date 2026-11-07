export const designIds = ["tactile", "nocturne", "editorial", "brutalist", "playground"] as const;

export type DesignId = (typeof designIds)[number];
export type DesignStatus = "production-ready" | "in-development";

export type DesignDefinition = {
  id: DesignId;
  index: string;
  name: string;
  descriptor: string;
  status: DesignStatus;
  preview: readonly [string, string, string];
};

export const designRegistry: Record<DesignId, DesignDefinition> = {
  tactile: {
    id: "tactile",
    index: "01",
    name: "Tactile",
    descriptor: "Warm material, soft elevation",
    status: "production-ready",
    preview: ["#e7e3db", "#c5c0b6", "#a3ad82"],
  },
  nocturne: {
    id: "nocturne",
    index: "02",
    name: "Nocturne",
    descriptor: "Cinematic depth, luminous glass",
    status: "in-development",
    preview: ["#0b1020", "#28345e", "#9b8cff"],
  },
  editorial: {
    id: "editorial",
    index: "03",
    name: "Editorial",
    descriptor: "Type, grid, disciplined contrast",
    status: "in-development",
    preview: ["#f5f3ed", "#151515", "#df3b28"],
  },
  brutalist: {
    id: "brutalist",
    index: "04",
    name: "Brutalist",
    descriptor: "Hard geometry, direct impact",
    status: "in-development",
    preview: ["#ffed00", "#101010", "#ff4d2e"],
  },
  playground: {
    id: "playground",
    index: "05",
    name: "Playground",
    descriptor: "Elastic colour, organic energy",
    status: "in-development",
    preview: ["#ffd6ec", "#634cff", "#7df0c2"],
  },
};

export const isDesignId = (value: string | null): value is DesignId =>
  value !== null && designIds.includes(value as DesignId);
