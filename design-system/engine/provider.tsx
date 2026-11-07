"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { componentForCategory, isLibraryCategoryId, type LibraryCategoryId } from "./categories";
import { designRegistry, isDesignId, type DesignDefinition, type DesignId } from "./registry";

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
  restored: boolean;
};

const DesignContext = createContext<DesignContextValue | null>(null);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<DesignId>("tactile");
  const [activeCategory, setActiveCategoryState] = useState<LibraryCategoryId>("foundations");
  const [activeComponent, setActiveComponentState] = useState("foundation.palette");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fixture, setFixture] = useState<"short" | "long">("short");
  const [fixtureViewport, setFixtureViewport] = useState<"wide" | "mobile">("wide");
  const [restored, setRestored] = useState(false);

  const applyLocation = () => {
    const params = new URLSearchParams(window.location.search);
    const design = params.get("design"); const category = params.get("category"); const component = params.get("component");
    if (isDesignId(design)) setActiveId(design);
    if (isLibraryCategoryId(category)) {
      setActiveCategoryState(category);
      setActiveComponentState(component || componentForCategory(category));
    }
  };

  useEffect(() => {
    const restore = window.setTimeout(() => {
      const saved = window.localStorage.getItem(storageKey);
      const hasWorkspaceUrl = Boolean(new URLSearchParams(window.location.search).get("design") || new URLSearchParams(window.location.search).get("category"));
      if (hasWorkspaceUrl) applyLocation(); else if (isDesignId(saved)) setActiveId(saved);
      setRestored(true);
    }, 0);
    return () => window.clearTimeout(restore);
  }, []);

  useEffect(() => { const onPopState = () => applyLocation(); window.addEventListener("popstate", onPopState); return () => window.removeEventListener("popstate", onPopState); }, []);

  const pushWorkspaceUrl = useCallback((design: DesignId, category: LibraryCategoryId, component: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("design", design); url.searchParams.set("category", category); url.searchParams.set("component", component);
    window.history.pushState(null, "", url);
  }, []);
  const setActiveDesign = useCallback((id: DesignId) => { setActiveId(id); pushWorkspaceUrl(id, activeCategory, activeComponent); }, [activeCategory, activeComponent, pushWorkspaceUrl]);
  const setActiveCategory = useCallback((id: LibraryCategoryId) => { const component = componentForCategory(id); setActiveCategoryState(id); setActiveComponentState(component); pushWorkspaceUrl(activeId, id, component); }, [activeId, pushWorkspaceUrl]);
  const setActiveComponent = useCallback((id: string) => { setActiveComponentState(id); pushWorkspaceUrl(activeId, activeCategory, id); }, [activeId, activeCategory, pushWorkspaceUrl]);

  useEffect(() => {
    if (restored) window.localStorage.setItem(storageKey, activeId);
  }, [activeId, restored]);

  const value = useMemo(
    () => ({ activeDesign: designRegistry[activeId], setActiveDesign, activeCategory, setActiveCategory, activeComponent, setActiveComponent, reducedMotion, setReducedMotion, fixture, setFixture, fixtureViewport, setFixtureViewport, restored }),
    [activeId, activeCategory, activeComponent, reducedMotion, fixture, fixtureViewport, restored, setActiveDesign, setActiveCategory, setActiveComponent],
  );

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
}

export function useDesign() {
  const context = useContext(DesignContext);
  if (!context) throw new Error("useDesign must be used within DesignProvider");
  return context;
}
