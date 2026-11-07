"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function NocturneAccordion({ items, multiple = false }: { items: { title: string; content: string }[]; multiple?: boolean }) {
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (index: number) => setOpen((current) => multiple ? current.includes(index) ? current.filter((item) => item !== index) : [...current, index] : current.includes(index) ? [] : [index]);
  return <div className="nocturne-accordion" data-multiple={multiple}>{items.map((item, index) => <div key={item.title} className={open.includes(index) ? "open" : ""}><button aria-expanded={open.includes(index)} onClick={() => toggle(index)}><small>{String(index + 1).padStart(2, "0")}</small><span>{item.title}</span><i>{open.includes(index) ? "−" : "+"}</i></button>{open.includes(index) && <p>{item.content}</p>}</div>)}</div>;
}

export function NocturneTabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [selected, setSelected] = useState(0);
  const choose = (index: number) => setSelected((index + tabs.length) % tabs.length);
  return <div className="nocturne-tabs"><div role="tablist" aria-label="Nocturne tabs">{tabs.map((tab, index) => <button key={tab.label} role="tab" aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => choose(index)} onKeyDown={(event) => { if (event.key === "ArrowRight") choose(index + 1); if (event.key === "ArrowLeft") choose(index - 1); }}>{tab.label}</button>)}</div><div role="tabpanel">{tabs[selected].content}</div></div>;
}

export function NocturneCollapsible({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className={open ? "nocturne-collapsible open" : "nocturne-collapsible"}><button aria-expanded={open} onClick={() => setOpen(!open)}>{title}<i>{open ? "−" : "+"}</i></button>{open && <div>{children}</div>}</div>;
}

export function NocturneTooltip({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <span className="nocturne-tooltip" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>{children}{open && <i role="tooltip">{label}</i>}</span>;
}

export function NocturneHoverCard({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <span className="nocturne-hover-card" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>{trigger}{open && <span>{children}</span>}</span>;
}

export function NocturnePopover({ trigger, children }: { trigger: string; children: ReactNode }) {
  const [open, setOpen] = useState(false); const root = useRef<HTMLDivElement>(null);
  useEffect(() => { const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); }; const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("mousedown", close); window.addEventListener("keydown", escape); return () => { window.removeEventListener("mousedown", close); window.removeEventListener("keydown", escape); }; }, []);
  return <div ref={root} className="nocturne-popover"><button aria-expanded={open} onClick={() => setOpen(!open)}>{trigger} <i>↗</i></button>{open && <div role="dialog">{children}</div>}</div>;
}

export function NocturneDropdown({ onSelect }: { onSelect: (value: string) => void }) {
  const [open, setOpen] = useState(false); const options = ["Save sequence", "Duplicate signal", "Archive study"];
  return <div className="nocturne-dropdown"><button aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>OPTIONS <i>⌄</i></button>{open && <div role="menu">{options.map((option) => <button key={option} role="menuitem" onClick={() => { onSelect(option); setOpen(false); }}>{option}</button>)}</div>}</div>;
}

export function NocturneContextMenu({ children }: { children: ReactNode }) {
  const [point, setPoint] = useState<{ x: number; y: number } | null>(null);
  return <div className="nocturne-context" tabIndex={0} onContextMenu={(event) => { event.preventDefault(); setPoint({ x: event.clientX, y: event.clientY }); }} onKeyDown={(event) => { if (event.key === "Escape") setPoint(null); if (event.key === "ContextMenu") setPoint({ x: 12, y: 12 }); }}>{children}{point && <div role="menu" style={{ left: point.x, top: point.y }}><button role="menuitem" onClick={() => setPoint(null)}>Inspect surface</button><button role="menuitem" onClick={() => setPoint(null)}>Copy coordinate</button></div>}</div>;
}

export function NocturneSegmented({ options, value, onChange }: { options: string[]; value: string; onChange: (value: string) => void }) {
  return <div className="nocturne-segmented" role="radiogroup">{options.map((option) => <button key={option} role="radio" aria-checked={value === option} className={value === option ? "active" : ""} onClick={() => onChange(option)}>{option}</button>)}</div>;
}

export function NocturneBreadcrumb({ items }: { items: string[] }) { return <nav className="nocturne-breadcrumb" aria-label="Breadcrumb">{items.map((item, index) => <span key={item}>{index > 0 && <i>/</i>}<a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a></span>)}</nav>; }
