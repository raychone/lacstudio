"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { designRegistry, isDesignId, type DesignDefinition, type DesignId } from "./registry";

const storageKey = "lac-design-system.active-design";

type DesignContextValue = {
  activeDesign: DesignDefinition;
  setActiveDesign: (id: DesignId) => void;
  restored: boolean;
};

const DesignContext = createContext<DesignContextValue | null>(null);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<DesignId>("tactile");
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const restore = window.setTimeout(() => {
      const saved = window.localStorage.getItem(storageKey);
      if (isDesignId(saved)) setActiveId(saved);
      setRestored(true);
    }, 0);
    return () => window.clearTimeout(restore);
  }, []);

  const setActiveDesign = (id: DesignId) => setActiveId(id);

  useEffect(() => {
    if (restored) window.localStorage.setItem(storageKey, activeId);
  }, [activeId, restored]);

  const value = useMemo(
    () => ({ activeDesign: designRegistry[activeId], setActiveDesign, restored }),
    [activeId, restored],
  );

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
}

export function useDesign() {
  const context = useContext(DesignContext);
  if (!context) throw new Error("useDesign must be used within DesignProvider");
  return context;
}
