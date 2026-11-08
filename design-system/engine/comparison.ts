export const comparisonDesignIds = ["tactile", "nocturne", "editorial", "brutalist", "playground"] as const;
export type DesignId = (typeof comparisonDesignIds)[number];

export type ComparisonPair = { left: DesignId; right: DesignId };
export type ComparisonState = ComparisonPair & { enabled: boolean; notice: string | null };

export const defaultComparisonPair: ComparisonPair = { left: "tactile", right: "nocturne" };

export const isComparisonPair = (left: string | null, right: string | null): boolean =>
  left !== null && right !== null && comparisonDesignIds.includes(left as DesignId) && comparisonDesignIds.includes(right as DesignId) && left !== right;

export const comparisonFromParams = (params: URLSearchParams, fallback: ComparisonPair = defaultComparisonPair): ComparisonState => {
  const requested = params.get("compare") === "1";
  const left = params.get("left"); const right = params.get("right");
  if (requested && isComparisonPair(left, right)) return { enabled: true, left: left as DesignId, right: right as DesignId, notice: null };
  return { enabled: false, ...fallback, notice: requested ? "Comparison needs two different systems." : null };
};

export const selectComparisonSide = (pair: ComparisonPair, side: "left" | "right", next: DesignId): ComparisonState => {
  if (pair[side] === next) return { enabled: true, ...pair, notice: null };
  if (pair[side === "left" ? "right" : "left"] === next) return { enabled: true, ...pair, notice: "Choose two different systems." };
  return { enabled: true, ...pair, [side]: next, notice: null };
};

export const swapComparisonPair = (pair: ComparisonPair): ComparisonState => ({ enabled: true, left: pair.right, right: pair.left, notice: null });

export const comparisonParams = (comparison: ComparisonState): Record<string, string | null> => comparison.enabled
  ? { compare: "1", left: comparison.left, right: comparison.right }
  : { compare: null, left: null, right: null };
