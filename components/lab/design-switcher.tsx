"use client";

import { designIds, designRegistry, type DesignId } from "@/design-system/engine/registry";
import { useDesign } from "@/design-system/engine/provider";

export function DesignSwitcher() {
  const { activeDesign, setActiveDesign, restored } = useDesign();

  return (
    <section className="design-switcher" aria-labelledby="design-switcher-title">
      <div className="design-switcher-copy">
        <span>GLOBAL DESIGN ENGINE</span>
        <strong id="design-switcher-title">One behavior,<br />five visual worlds.</strong>
        <p>{restored ? "Your selection is saved locally on this device." : "Preparing your saved design preference…"}</p>
      </div>
      <div className="design-options" role="radiogroup" aria-label="Choose a design system">
        {designIds.map((id) => {
          const design = designRegistry[id];
          const active = activeDesign.id === id;
          return <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            className={active ? "design-option active" : "design-option"}
            onClick={() => setActiveDesign(id as DesignId)}
          >
            <span className="design-option-swatches" aria-hidden="true">
              {design.preview.map((color) => <i key={color} style={{ backgroundColor: color }} />)}
            </span>
            <span className="design-option-title"><small>{design.index}</small>{design.name}</span>
            <span className="design-option-meta">{design.status === "production-ready" ? "READY" : "IN DEVELOPMENT"}</span>
          </button>;
        })}
      </div>
    </section>
  );
}
