"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useDesign } from "@/design-system/engine/provider";

type ProjectRow = { title: string; form: string; revised: string; status: string };
type EditorialSlide = { chapter: string; title: string; copy: string; caption: string; tone: "ochre" | "ink" | "red" };

const projects: ProjectRow[] = [
  { title: "After the Rain", form: "Essay", revised: "Today", status: "Proof" },
  { title: "The Quiet Room", form: "Feature", revised: "Yesterday", status: "Ready" },
  { title: "Field Notes / 02", form: "Notes", revised: "Mar 18", status: "Draft" },
  { title: "A Long Look", form: "Interview", revised: "Mar 16", status: "Ready" },
  { title: "Material Language", form: "Review", revised: "Mar 12", status: "Proof" },
];

const spreads: EditorialSlide[] = [
  { chapter: "PLATE / 01", title: "A room\nfor attention.", copy: "A content carousel holds a considered sequence without rushing a reader toward the next page.", caption: "FIG. 01 — WARM PAPER / RULE / READING MEASURE", tone: "ochre" },
  { chapter: "PLATE / 02", title: "The edge\nof an idea.", copy: "Images, captions and metadata take turns at the center of the frame.", caption: "FIG. 02 — A CAPTION HAS ITS OWN PACE", tone: "ink" },
  { chapter: "PLATE / 03", title: "Leave room\nfor the note.", copy: "Manual controls make the movement deliberate, including at the first and last page.", caption: "FIG. 03 — NAVIGATION / BY CHOICE", tone: "red" },
];

const stories: EditorialSlide[] = [
  { chapter: "STORY / 01", title: "What a page can hold", copy: "An editorial sequence pairs a large thought with a small, factual caption.", caption: "07 MIN READ · CULTURE", tone: "ink" },
  { chapter: "STORY / 02", title: "Objects in their own time", copy: "A feature carousel changes emphasis while retaining the same external frame.", caption: "04 MIN READ · MATERIAL", tone: "ochre" },
  { chapter: "STORY / 03", title: "The value of a pause", copy: "No autoplay: the reader retains control of the narrative rhythm.", caption: "05 MIN READ · STUDIO", tone: "red" },
];

function EditorialCard({ kind = "standard", title, children }: { kind?: "standard" | "selectable" | "expandable" | "media" | "stat" | "feature" | "loading" | "empty"; title: string; children?: ReactNode }) {
  const [selected, setSelected] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const interactive = kind === "selectable" || kind === "expandable";
  return <article className={`ed-data-card ${kind} ${selected ? "selected" : ""}`}>
    <span>{kind === "standard" ? "CARD / 01" : kind.toUpperCase()}</span>
    {kind === "media" && <div className="ed-card-art" aria-label="Abstract editorial media study" />}
    {kind === "loading" ? <div className="ed-card-skeleton" aria-label="Loading card"><i /><i /><i /></div> : kind === "empty" ? <div className="ed-card-empty"><b>∅</b><p>No edition<br />has been filed.</p></div> : <><h3>{title}</h3><p>{children}</p>{expanded && <small>Supporting notes unfold inside the original reading frame, without displacing the surrounding index.</small>}</>}
    {interactive && <button aria-pressed={kind === "selectable" ? selected : undefined} onClick={() => kind === "expandable" ? setExpanded((value) => !value) : setSelected((value) => !value)}>{kind === "expandable" ? expanded ? "CLOSE NOTE −" : "OPEN NOTE +" : selected ? "SELECTED ✓" : "SELECT THIS"}</button>}
  </article>;
}

function EditorialTable() {
  const [sort, setSort] = useState<keyof ProjectRow>("title");
  const [ascending, setAscending] = useState(true);
  const [page, setPage] = useState(0);
  const perPage = 3;
  const sorted = useMemo(() => [...projects].sort((a, b) => a[sort].localeCompare(b[sort]) * (ascending ? 1 : -1)), [sort, ascending]);
  const pages = Math.ceil(sorted.length / perPage);
  const visible = sorted.slice(page * perPage, page * perPage + perPage);
  const order = (key: keyof ProjectRow) => { setPage(0); if (sort === key) setAscending((value) => !value); else { setSort(key); setAscending(true); } };
  return <div className="ed-table-wrap"><table className="ed-table"><thead><tr>{(["title", "form", "revised", "status"] as (keyof ProjectRow)[]).map((key) => <th key={key}><button onClick={() => order(key)}>{key} {sort === key ? ascending ? "↑" : "↓" : "↕"}</button></th>)}</tr></thead><tbody>{visible.map((row) => <tr key={row.title}><td>{row.title}</td><td>{row.form}</td><td>{row.revised}</td><td><span>{row.status}</span></td></tr>)}</tbody></table><nav className="ed-pagination" aria-label="Project pages"><button disabled={page === 0} onClick={() => setPage((value) => value - 1)}>← <span>PREVIOUS</span></button><b>PAGE {page + 1} / {pages}</b><button disabled={page === pages - 1} onClick={() => setPage((value) => value + 1)}><span>NEXT</span> →</button></nav></div>;
}

export function EditorialDataDisplay() {
  const { activeComponent } = useDesign();
  return <div className="editorial-data-display" data-component-id={activeComponent}>
    <div className="editorial-kicker">DATA DISPLAY / PUBLICATION INDEX</div>
    <section><span className="ed-section-label">CARDS / READING SURFACES</span><div className="ed-data-grid"><EditorialCard title="A steady surface">A standard card is structured by type and a single rule.</EditorialCard><EditorialCard kind="selectable" title="Choose this study">Selected state is shown through ink and a measured rule.</EditorialCard><EditorialCard kind="expandable" title="An expandable note">Detail stays in context for a deliberate second read.</EditorialCard><EditorialCard kind="media" title="Material study">Captioned image space becomes part of the composition.</EditorialCard><EditorialCard kind="stat" title="48.6K">Readers reached through the current issue.</EditorialCard><EditorialCard kind="feature" title="The feature has room">A wide frame gives a primary story different weight.</EditorialCard><EditorialCard kind="loading" title="Loading" /><EditorialCard kind="empty" title="Empty" /></div></section>
    <section className="ed-index-study"><span className="ed-section-label">SIGNATURE / 01 — EDITORIAL FEATURE INDEX</span><div className="ed-feature-index"><article><small>01 / FEATURE</small><h3>Places<br /><em>to return.</em></h3><p>Three projects are arranged as a reading index rather than a dashboard.</p></article><article><small>02 / ESSAY</small><b>The quiet room</b><p>Spatial identity<br />&amp; digital tone</p><i>08</i></article><article><small>03 / NOTES</small><b>Material language</b><p>Objects, systems<br />&amp; attention</p><i>12</i></article></div></section>
    <section className="ed-data-story"><span className="ed-section-label">SIGNATURE / 02 — PUBLICATION DATA STORY</span><div><article><small>READERS / THIS ISSUE</small><b>18,240</b><p>Across 34 countries, held by a considered monthly rhythm.</p></article><article><small>READING TIME</small><b>06:42</b><p>The average pause is longer when hierarchy has room.</p></article><aside><small>EDITOR&apos;S ANNOTATION</small><p>“Data has a voice. Give it a margin, a caption and a reason to remain.”</p></aside></div></section>
    <section className="ed-identity-timeline"><span className="ed-section-label">IDENTITY / CHIPS / EDITORIAL TIMELINE</span><div className="ed-identity-row"><div className="ed-avatars"><span aria-label="Lea Armand">LA</span><span aria-label="Miro Owen">MO</span><span aria-label="Ira Aster">IA</span><b>+3</b></div><div className="ed-chips"><button>ESSAY ×</button><button>REVIEW ×</button><button>MATERIAL ×</button></div></div><ol className="ed-timeline"><li><time>09:42</time><div><b>Sequence opened</b><p>The current publication index is ready for proofing.</p></div></li><li><time>10:18</time><div><b>Image plate placed</b><p>A visual study takes its place beside the long-form feature.</p></div></li><li><time>11:06</time><div><b>Review requested</b><p>Hand-off is held in a concise, readable state.</p></div></li></ol></section>
    <section><span className="ed-section-label">TABLE / SORT / PAGINATION</span><EditorialTable /></section>
  </div>;
}

function EditorialCarousel({ slides, variant = "content", label }: { slides: EditorialSlide[]; variant?: "content" | "media" | "feature" | "compact"; label: string }) {
  const [index, setIndex] = useState(0);
  const [pointerStart, setPointerStart] = useState<number | null>(null);
  const previous = () => setIndex((value) => Math.max(0, value - 1));
  const next = () => setIndex((value) => Math.min(slides.length - 1, value + 1));
  return <section className={`ed-carousel ${variant}`} aria-label={label} tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft") previous(); if (event.key === "ArrowRight") next(); }}>
    <div className="ed-carousel-window" onPointerDown={(event) => setPointerStart(event.clientX)} onPointerUp={(event) => { if (pointerStart === null) return; const difference = event.clientX - pointerStart; if (difference > 36) previous(); if (difference < -36) next(); setPointerStart(null); }}><div className="ed-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>{slides.map((slide, slideIndex) => <article className={`tone-${slide.tone}`} key={slide.title}><div className="ed-carousel-plate" aria-hidden="true" /><span>{slide.chapter}</span><h3>{slide.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{slide.copy}</p><small>{slide.caption}</small><i>{String(slideIndex + 1).padStart(2, "0")}</i></article>)}</div></div>
    <div className="ed-carousel-controls"><button aria-label="Previous slide" disabled={index === 0} onClick={previous}>←</button><div>{slides.map((slide, slideIndex) => <button key={slide.title} aria-label={`Go to slide ${slideIndex + 1}`} aria-current={index === slideIndex ? "true" : undefined} className={index === slideIndex ? "active" : ""} onClick={() => setIndex(slideIndex)}>{String(slideIndex + 1).padStart(2, "0")}</button>)}</div><button aria-label="Next slide" disabled={index === slides.length - 1} onClick={next}>→</button></div>
    <p className="ed-carousel-status" aria-live="polite">PAGE {index + 1} / {slides.length} — {slides[index].title.replace("\n", " ")}</p>
  </section>;
}

export function EditorialCarousels() {
  const { activeComponent } = useDesign();
  return <div className="editorial-carousels" data-component-id={activeComponent}><div className="editorial-kicker">CAROUSELS / EDITED SEQUENCE</div><section><span className="ed-section-label">CONTENT / BOUNDARY STATES</span><EditorialCarousel slides={spreads} label="Editorial content carousel" /></section><section><span className="ed-section-label">MEDIA / CAPTIONED PLATES</span><EditorialCarousel slides={spreads} variant="media" label="Editorial media carousel" /></section><section><span className="ed-section-label">SIGNATURE / 01 — MAGAZINE SPREADS</span><EditorialCarousel slides={spreads} variant="feature" label="Magazine spread carousel" /></section><section><span className="ed-section-label">SIGNATURE / 02 — FEATURED STORIES</span><EditorialCarousel slides={stories} variant="compact" label="Featured stories carousel" /></section></div>;
}

function useEditorialLayer(open: boolean, setOpen: (value: boolean) => void) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const priorOverflow = document.body.style.overflow;
    const focusable = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])') ?? []);
    document.body.style.overflow = "hidden";
    window.setTimeout(() => focusable()[0]?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const items = focusable(); if (!items.length) return;
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = priorOverflow; window.removeEventListener("keydown", onKeyDown); trigger?.focus(); };
  }, [open, setOpen]);
  return { triggerRef, panelRef };
}

function EditorialOverlay({ kind = "modal", trigger, title, description, children }: { kind?: "modal" | "confirm" | "drawer" | "sheet" | "lightbox" | "reading"; trigger: string; title: string; description: string; children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { triggerRef, panelRef } = useEditorialLayer(open, setOpen);
  const headingId = `ed-layer-${title.replace(/[^a-z0-9]/gi, "").toLowerCase()}`;
  return <><button ref={triggerRef} className="ed-overlay-trigger" onClick={() => setOpen(true)}>{trigger} <b>↗</b></button>{open && <div className={`ed-layer ${kind}`} role="presentation"><button className="ed-layer-backdrop" onClick={() => setOpen(false)} aria-label="Close overlay" /><div className="ed-layer-panel" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={headingId}><button className="ed-layer-close" onClick={() => setOpen(false)} aria-label="Close overlay">×</button><span>{kind.toUpperCase()} / LAC REVIEW</span><h3 id={headingId}>{title}</h3><p>{description}</p>{children}<div className="ed-layer-actions"><button onClick={() => setOpen(false)}>CLOSE</button><button className="affirm" onClick={() => setOpen(false)}>{kind === "confirm" ? "CONFIRM ARCHIVE" : "CONTINUE READING"} ↗</button></div></div></div>}</>;
}

function EditorialCommandIndex() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const commands = ["Open reading panel", "Search the feature index", "Create a correspondence", "Toggle reduced motion"];
  const results = commands.filter((command) => command.toLowerCase().includes(query.toLowerCase()));
  const { triggerRef, panelRef } = useEditorialLayer(open, setOpen);
  useEffect(() => { const shortcut = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(true); } }; window.addEventListener("keydown", shortcut); return () => window.removeEventListener("keydown", shortcut); }, []);
  return <><button ref={triggerRef} className="ed-overlay-trigger" onClick={() => setOpen(true)}>OPEN COMMAND INDEX <kbd>⌘K</kbd></button>{open && <div className="ed-layer command" role="presentation"><button className="ed-layer-backdrop" onClick={() => setOpen(false)} aria-label="Close command index" /><div ref={panelRef} role="dialog" aria-modal="true" aria-label="Editorial command index" className="ed-command-panel"><div><span>INDEX / COMMAND</span><button onClick={() => setOpen(false)} aria-label="Close command index">×</button></div><input autoFocus value={query} onChange={(event) => { setQuery(event.target.value); setActive(0); }} onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setActive((value) => (value + 1) % Math.max(results.length, 1)); } if (event.key === "ArrowUp") { event.preventDefault(); setActive((value) => (value - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1)); } if (event.key === "Enter" && results[active]) setOpen(false); }} placeholder="Search the publication" />{results.map((result, index) => <button key={result} className={active === index ? "active" : ""} onMouseEnter={() => setActive(index)} onClick={() => setOpen(false)}><i>{String(index + 1).padStart(2, "0")}</i>{result}<b>↵</b></button>)}{!results.length && <p>No matching entry in this index.</p>}</div></div>}</>;
}

export function EditorialOverlays() {
  const { activeComponent } = useDesign();
  return <div className="editorial-overlays" data-component-id={activeComponent}><div className="editorial-kicker">OVERLAYS / PUBLICATION SHEETS</div><section><span className="ed-section-label">DIALOGS / FOCUSED READING</span><div className="ed-overlay-triggers"><EditorialOverlay trigger="OPEN MODAL" title="A held moment" description="A focused publication sheet with restored focus and an Escape exit." /><EditorialOverlay kind="confirm" trigger="CONFIRM ARCHIVE" title="Archive this proof?" description="This action asks for a final editorial decision before the draft leaves the working index." /><EditorialOverlay kind="drawer" trigger="OPEN DRAWER" title="Issue details" description="Contextual publication metadata enters from the edge of the reading surface." /><EditorialOverlay kind="sheet" trigger="BOTTOM SHEET" title="Choose an edition" description="A compact, touch-friendly action sheet for narrow screens." /><EditorialOverlay kind="lightbox" trigger="VIEW LIGHTBOX" title="Material plate / 03" description="A framed visual plate with a concise caption and reading controls." /></div></section><section className="ed-reading-panel"><span className="ed-section-label">SIGNATURE / 01 — EDITORIAL READING PANEL</span><EditorialOverlay kind="reading" trigger="READ THE EDITOR'S NOTE" title="The room behind the page" description="Issue 03 · Editorial note · 6 minutes"><blockquote>“A useful interface does not need to fill every margin.”</blockquote><small>FROM THE DESK / 03.11.26</small></EditorialOverlay></section><section className="ed-command-study"><span className="ed-section-label">SIGNATURE / 02 — EDITORIAL COMMAND INDEX</span><EditorialCommandIndex /><p>Use <kbd>⌘K</kbd> or <kbd>Ctrl K</kbd> to open; arrow keys move through the index.</p></section></div>;
}

export function EditorialAdvanced() {
  const { activeComponent } = useDesign();
  const [tags, setTags] = useState(["Essay", "Material"]);
  const [tagValue, setTagValue] = useState("");
  const [selected, setSelected] = useState<string[]>(["Type"]);
  const [range, setRange] = useState(48);
  const [rating, setRating] = useState(0);
  const [items, setItems] = useState(["Opening image", "Long-form essay", "Closing annotation"]);
  const [step, setStep] = useState(0);
  const [compare, setCompare] = useState(54);
  const addTag = () => { const value = tagValue.trim(); if (value && !tags.includes(value)) setTags((current) => [...current, value]); setTagValue(""); };
  const move = (index: number, direction: -1 | 1) => { const target = index + direction; if (target < 0 || target >= items.length) return; const next = [...items]; [next[index], next[target]] = [next[target], next[index]]; setItems(next); };
  const options = ["Type", "Image", "Caption", "Index"];
  const steps = ["Frame", "Sequence", "Proof"];
  return <div className="editorial-advanced" data-component-id={activeComponent}><div className="editorial-kicker">ADVANCED / EDITORIAL INSTRUMENTS</div><section className="ed-preference-composer"><span className="ed-section-label">SIGNATURE / 01 — EDITORIAL PREFERENCE COMPOSER</span><div className="ed-advanced-grid"><div className="ed-tag-input"><label>KEYWORDS</label><div>{tags.map((tag) => <button key={tag} onClick={() => setTags((current) => current.filter((item) => item !== tag))}>{tag} ×</button>)}</div><input value={tagValue} onChange={(event) => setTagValue(event.target.value)} onKeyDown={(event) => event.key === "Enter" && (event.preventDefault(), addTag())} placeholder="Add a keyword" /><button onClick={addTag}>ADD NOTE</button></div><fieldset className="ed-multi-select"><legend>COMPOSITION</legend>{options.map((option) => <label key={option}><input type="checkbox" checked={selected.includes(option)} onChange={() => setSelected((current) => current.includes(option) ? current.filter((item) => item !== option) : [...current, option])} />{option}</label>)}<p>{selected.length} element{selected.length === 1 ? "" : "s"} selected</p></fieldset><label className="ed-range">TEXT / IMAGE BALANCE <b>{range}%</b><input type="range" min="0" max="100" value={range} onChange={(event) => setRange(Number(event.target.value))} /></label><div className="ed-rating" aria-label="Rate this composition"><span>EDITORIAL TONE</span>{[1, 2, 3, 4, 5].map((value) => <button key={value} aria-label={`${value} out of 5`} aria-pressed={rating === value} className={value <= rating ? "active" : ""} onClick={() => setRating(value)}>✦</button>)}</div></div></section><section className="ed-reorder-study"><span className="ed-section-label">REORDER / CONTENT SEQUENCE</span><ol>{items.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span><button disabled={index === 0} onClick={() => move(index, -1)} aria-label={`Move ${item} up`}>↑</button><button disabled={index === items.length - 1} onClick={() => move(index, 1)} aria-label={`Move ${item} down`}>↓</button></li>)}</ol></section><section className="ed-wizard-study"><span className="ed-section-label">SIGNATURE / 03 — EDITORIAL STEP-BY-STEP COMPOSER</span><ol>{steps.map((item, index) => <li key={item} className={index === step ? "active" : index < step ? "done" : ""}><b>{index < step ? "✓" : `0${index + 1}`}</b>{item}</li>)}</ol><h3>{steps[step]}</h3><p>{["Choose the outer reading frame and its measure.", "Arrange type, image and annotation in a deliberate order.", "Review the publication proof before it goes forward."][step]}</p><button disabled={step === 0} onClick={() => setStep((value) => value - 1)}>BACK</button><button className="next" onClick={() => setStep((value) => value === steps.length - 1 ? 0 : value + 1)}>{step === steps.length - 1 ? "RESTART" : "NEXT"} →</button></section><section className="ed-comparison-study"><span className="ed-section-label">SIGNATURE / 02 — PUBLICATION LAYOUT COMPARATOR</span><div className="ed-comparison" style={{ "--compare": `${compare}%` } as CSSProperties}><div className="before"><small>BEFORE / DENSE</small><b>A page<br />full of<br />noise.</b></div><div className="after"><small>AFTER / EDITED</small><b>Room<br />for the<br /><em>idea.</em></b></div><i aria-hidden="true" /></div><input className="ed-compare-range" aria-label="Publication layout comparison position" type="range" min="0" max="100" value={compare} onChange={(event) => setCompare(Number(event.target.value))} /></section></div>;
}
