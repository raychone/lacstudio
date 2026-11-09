"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { componentForCategory, isLibraryCategoryId, type LibraryCategoryId } from "./categories";
import { designRegistry, isDesignId, type DesignDefinition, type DesignId } from "./registry";
import { comparisonFromParams, comparisonParams, defaultComparisonPair, selectComparisonSide, swapComparisonPair, type ComparisonState } from "./comparison";

const storageKey = "lac-design-system.active-design";

type DesignContextValue = {
  activeDesign: DesignDefinition;
  setActiveDesign: (id: DesignId) => void;
  activeCategory: LibraryCategoryId;
  setActiveCategory: (id: LibraryCategoryId) => void;
  activeComponent: string;
  setActiveComponent: (id: string) => void;
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
  fixture: "short" | "long";
  setFixture: (value: "short" | "long") => void;
  fixtureViewport: "wide" | "mobile";
  setFixtureViewport: (value: "wide" | "mobile") => void;
  comparison: ComparisonState;
  startComparison: () => void;
  stopComparison: () => void;
  setComparisonSystem: (side: "left" | "right", id: DesignId) => void;
  swapComparisonSystems: () => void;
  restored: boolean;
};

const DesignContext = createContext<DesignContextValue | null>(null);

export function DesignProvider({ children, scope = "lab" }: { children: ReactNode; scope?: "lab" | "portfolio" }) {
  const [activeId, setActiveId] = useState<DesignId>("tactile");
  const [activeCategory, setActiveCategoryState] = useState<LibraryCategoryId>("foundations");
  const [activeComponent, setActiveComponentState] = useState("foundation.palette");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fixture, setFixture] = useState<"short" | "long">("short");
  const [fixtureViewport, setFixtureViewport] = useState<"wide" | "mobile">("wide");
  const [comparison, setComparison] = useState<ComparisonState>({ enabled: false, ...defaultComparisonPair, notice: null });
  const [restored, setRestored] = useState(false);

  const applyLocation = () => {
    const params = new URLSearchParams(window.location.search);
    const design = params.get("design"); const category = params.get("category"); const component = params.get("component");
    if (isDesignId(design)) setActiveId(design);
    if (isLibraryCategoryId(category)) {
      setActiveCategoryState(category);
      setActiveComponentState(component || componentForCategory(category));
    }
    setComparison(comparisonFromParams(params));
  };

  useEffect(() => {
    const restore = window.setTimeout(() => {
      const saved = window.localStorage.getItem(storageKey);
      const params = new URLSearchParams(window.location.search);
      const hasWorkspaceUrl = Boolean(params.get("design") || params.get("category") || params.get("compare"));
      if (scope === "lab" && hasWorkspaceUrl) applyLocation(); else if (isDesignId(params.get("design"))) setActiveId(params.get("design") as DesignId); else if (isDesignId(saved)) setActiveId(saved);
      setRestored(true);
    }, 0);
    return () => window.clearTimeout(restore);
  }, [scope]);

  useEffect(() => {
    const onPopState = () => {
      if (scope === "portfolio") {
        const design = new URLSearchParams(window.location.search).get("design");
        if (isDesignId(design)) setActiveId(design);
        return;
      }
      applyLocation();
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [scope]);

  const pushWorkspaceUrl = useCallback((design: DesignId, category: LibraryCategoryId, component: string, nextComparison: ComparisonState) => {
    const url = new URL(window.location.href);
    if (scope === "portfolio") {
      url.searchParams.set("design", design);
      window.history.replaceState(null, "", url);
      return;
    }
    url.searchParams.set("design", design); url.searchParams.set("category", category); url.searchParams.set("component", component);
    const comparisonValues = comparisonParams(nextComparison);
    Object.entries(comparisonValues).forEach(([key, value]) => value === null ? url.searchParams.delete(key) : url.searchParams.set(key, value));
    window.history.pushState(null, "", url);
  }, [scope]);
  const setActiveDesign = useCallback((id: DesignId) => { setActiveId(id); pushWorkspaceUrl(id, activeCategory, activeComponent, comparison); }, [activeCategory, activeComponent, comparison, pushWorkspaceUrl]);
  const setActiveCategory = useCallback((id: LibraryCategoryId) => { const component = componentForCategory(id); setActiveCategoryState(id); setActiveComponentState(component); pushWorkspaceUrl(activeId, id, component, comparison); }, [activeId, comparison, pushWorkspaceUrl]);
  const setActiveComponent = useCallback((id: string) => { setActiveComponentState(id); pushWorkspaceUrl(activeId, activeCategory, id, comparison); }, [activeId, activeCategory, comparison, pushWorkspaceUrl]);
  const startComparison = useCallback(() => { const next = { ...comparison, enabled: true, notice: null }; setComparison(next); pushWorkspaceUrl(activeId, activeCategory, activeComponent, next); }, [activeId, activeCategory, activeComponent, comparison, pushWorkspaceUrl]);
  const stopComparison = useCallback(() => { const next = { ...comparison, enabled: false, notice: null }; setComparison(next); pushWorkspaceUrl(activeId, activeCategory, activeComponent, next); }, [activeId, activeCategory, activeComponent, comparison, pushWorkspaceUrl]);
  const setComparisonSystem = useCallback((side: "left" | "right", id: DesignId) => { const next = selectComparisonSide(comparison, side, id); setComparison(next); pushWorkspaceUrl(activeId, activeCategory, activeComponent, next); }, [activeId, activeCategory, activeComponent, comparison, pushWorkspaceUrl]);
  const swapComparisonSystems = useCallback(() => { const next = swapComparisonPair(comparison); setComparison(next); pushWorkspaceUrl(activeId, activeCategory, activeComponent, next); }, [activeId, activeCategory, activeComponent, comparison, pushWorkspaceUrl]);

  useEffect(() => {
    if (restored) window.localStorage.setItem(storageKey, activeId);
  }, [activeId, restored]);

  const value = useMemo(
    () => ({ activeDesign: designRegistry[activeId], setActiveDesign, activeCategory, setActiveCategory, activeComponent, setActiveComponent, reducedMotion, setReducedMotion, fixture, setFixture, fixtureViewport, setFixtureViewport, comparison, startComparison, stopComparison, setComparisonSystem, swapComparisonSystems, restored }),
    [activeId, activeCategory, activeComponent, reducedMotion, fixture, fixtureViewport, comparison, restored, setActiveDesign, setActiveCategory, setActiveComponent, startComparison, stopComparison, setComparisonSystem, swapComparisonSystems],
  );

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
}

export function useDesign() {
  const context = useContext(DesignContext);
  if (!context) throw new Error("useDesign must be used within DesignProvider");
  return context;
}
