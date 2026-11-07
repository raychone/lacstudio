"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AccordionItem = { title: string; content: ReactNode };

export function TactileAccordion({ items, multiple = false }: { items: AccordionItem[]; multiple?: boolean }) {
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (index: number) => setOpen((current) => multiple ? (current.includes(index) ? current.filter((item) => item !== index) : [...current, index]) : (current.includes(index) ? [] : [index]));
  return <div className="tactile-accordion" data-multiple={multiple}>{items.map((item, index) => {
    const isOpen = open.includes(index);
    const panelId = `tactile-accordion-panel-${index}`;
    return <div className={isOpen ? "open" : ""} key={item.title}><button aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(index)}><small>{String(index + 1).padStart(2, "0")}</small><span>{item.title}</span><i aria-hidden="true">{isOpen ? "−" : "+"}</i></button><div id={panelId} hidden={!isOpen}><div>{item.content}</div></div></div>;
  })}</div>;
}

export function TactileTabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const choose = (index: number, focus = false) => {
    const next = (index + tabs.length) % tabs.length;
    setSelected(next);
    if (focus) tabRefs.current[next]?.focus();
  };
  return <div className="tactile-tabs"><div role="tablist" aria-label="Tactile tabs">{tabs.map((tab, index) => <button key={tab.label} ref={(element) => { tabRefs.current[index] = element; }} id={`tactile-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls={`tactile-tab-panel-${index}`} tabIndex={selected === index ? 0 : -1} onClick={() => choose(index)} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); choose(index + 1, true); } if (event.key === "ArrowLeft") { event.preventDefault(); choose(index - 1, true); } if (event.key === "Home") { event.preventDefault(); choose(0, true); } if (event.key === "End") { event.preventDefault(); choose(tabs.length - 1, true); } }}>{tab.label}</button>)}</div><div id={`tactile-tab-panel-${selected}`} role="tabpanel" aria-labelledby={`tactile-tab-${selected}`} tabIndex={0}>{tabs[selected].content}</div></div>;
}

export function TactileCollapsible({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className={open ? "tactile-collapsible open" : "tactile-collapsible"}><button aria-expanded={open} onClick={() => setOpen((value) => !value)}>{title}<i aria-hidden="true">{open ? "−" : "+"}</i></button><div hidden={!open}>{children}</div></div>;
}

export function TactileTooltip({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <span className="tactile-tooltip" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>{children}{open && <span role="tooltip">{label}</span>}</span>;
}

export function TactileHoverCard({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <span className="tactile-hover-card" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>{trigger}{open && <span>{children}</span>}</span>;
}

export function TactilePopover({ trigger, children }: { trigger: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => { const outside = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); }; const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("mousedown", outside); window.addEventListener("keydown", escape); return () => { window.removeEventListener("mousedown", outside); window.removeEventListener("keydown", escape); }; }, []);
  return <div ref={root} className="tactile-popover"><button aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{trigger}<i aria-hidden="true">↗</i></button>{open && <div role="dialog" aria-label={trigger}>{children}</div>}</div>;
}

export function TactileDropdown({ onSelect }: { onSelect: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const options = ["Save material recipe", "Duplicate surface", "Archive study"];
  useEffect(() => { const outside = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); }; const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("mousedown", outside); window.addEventListener("keydown", escape); return () => { window.removeEventListener("mousedown", outside); window.removeEventListener("keydown", escape); }; }, []);
  return <div ref={root} className="tactile-dropdown"><button aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>ACTIONS <i aria-hidden="true">⌄</i></button>{open && <div role="menu">{options.map((option) => <button key={option} role="menuitem" onClick={() => { onSelect(option); setOpen(false); }}>{option}</button>)}</div>}</div>;
}

export function TactileContextMenu({ children }: { children: ReactNode }) {
  const [point, setPoint] = useState<{ x: number; y: number } | null>(null);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => { const close = () => setPoint(null); const escape = (event: KeyboardEvent) => event.key === "Escape" && close(); window.addEventListener("pointerdown", close); window.addEventListener("keydown", escape); return () => { window.removeEventListener("pointerdown", close); window.removeEventListener("keydown", escape); }; }, []);
  return <div ref={root} className="tactile-context" tabIndex={0} onContextMenu={(event) => { event.preventDefault(); const rect = event.currentTarget.getBoundingClientRect(); setPoint({ x: event.clientX - rect.left, y: event.clientY - rect.top }); }} onKeyDown={(event) => { if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) { event.preventDefault(); setPoint({ x: 14, y: 14 }); } }}>{children}{point && <div role="menu" style={{ left: point.x, top: point.y }}><button role="menuitem" onClick={() => setPoint(null)}>Inspect material</button><button role="menuitem" onClick={() => setPoint(null)}>Copy position</button></div>}</div>;
}

export function TactileSegmented({ options, value, onChange }: { options: string[]; value: string; onChange: (value: string) => void }) {
  return <div className="tactile-segmented" role="radiogroup">{options.map((option) => <button key={option} role="radio" aria-checked={value === option} className={value === option ? "active" : ""} onClick={() => onChange(option)}>{option}</button>)}</div>;
}

export function TactileBreadcrumb({ items }: { items: string[] }) {
  return <nav className="tactile-breadcrumb" aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={item}>{index === items.length - 1 ? <span aria-current="page">{item}</span> : <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>}</li>)}</ol></nav>;
}
