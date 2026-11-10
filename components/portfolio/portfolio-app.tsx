"use client";

import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignProvider, useDesign } from "@/design-system/engine/provider";
import { designIds, designRegistry, type DesignId } from "@/design-system/engine/registry";
import { featuredProjects, publishedProjects, type PublicProject } from "@/content/projects";
import { services } from "@/content/services";

type Page = "home" | "work" | "services" | "about" | "process" | "contact" | "privacy" | "legal" | "case-study" | "not-found";

const navigation: Array<[string, Page]> = [["Work", "work"], ["Services", "services"], ["Process", "process"], ["About", "about"]];
const hrefFor = (page: Page) => page === "home" ? "/" : page === "case-study" ? "/work" : `/${page}`;
const capabilities = [
  ["Web Applications", "Useful, responsive products shaped around actual workflows."],
  ["Android Applications", "Native mobile experiences with device-aware and offline-ready foundations."],
  ["SaaS Platforms", "Product systems that can grow from a focused need into a durable service."],
  ["Backend & APIs", "Data, permissions, integrations and background work behind the interface."],
  ["Offline-First Systems", "Software that remains useful when a connection is not guaranteed."],
  ["Automation & Integrations", "Practical connections that remove repeat work and keep teams informed."],
];
const expertise = [
  ["Authentication & roles", "Clear permissions and access designed for the people who use the product."],
  ["Databases", "Information architecture and data models that support the product's real work."],
  ["API architecture", "Clear interfaces between the product, its data and the services it relies on."],
  ["Background processing", "Queues, scheduled processes and dependable operational handoffs."],
  ["Offline synchronization", "Useful local-first behavior for work that cannot depend on a connection."],
  ["Notifications", "Practical messages, delivery paths and status communication at the right moment."],
  ["Integrations", "Careful connections to the tools and systems a team already uses."],
  ["Testing & deployment", "Pragmatic quality checks and a path from development to release."],
];
const process = ["Discover", "Define", "Design", "Build", "Validate", "Launch"];

function PortfolioDesignSwitcher() {
  const { activeDesign, setActiveDesign, restored } = useDesign();
  const activeIndex = designIds.indexOf(activeDesign.id);
  return <div className="portfolio-switcher" role="radiogroup" aria-label="Choose portfolio design system">
    <span className="portfolio-switcher-label">Design</span>
    <div className="portfolio-switcher-options" data-active-index={activeIndex} style={{ "--active-index": activeIndex } as React.CSSProperties}><i className="portfolio-switcher-indicator" aria-hidden="true" />{designIds.map((id) => {
      const design = designRegistry[id]; const active = id === activeDesign.id;
      return <button key={id} type="button" role="radio" aria-checked={active} aria-label={`${design.index} ${design.name}`} className={active ? "active" : ""} onClick={() => setActiveDesign(id as DesignId)}><i aria-hidden="true">{design.index}</i><span className="portfolio-switcher-tooltip" role="tooltip">{design.name}</span></button>;
    })}</div>
    <span className="portfolio-switcher-status" aria-live="polite">{restored ? activeDesign.name : "Loading"}</span>
  </div>;
}

function BrandLogo() {
  return <span className="brand-logo" aria-hidden="true"><Image className="brand-logo-black" src="/branding/lac-studio-black.png" alt="" width={1774} height={887} priority /><Image className="brand-logo-white" src="/branding/lac-studio-black.png" alt="" width={1774} height={887} priority /><Image className="brand-logo-playground" src="/branding/lac-studio-playground.png" alt="" width={1774} height={887} priority /></span>;
}

function PortfolioAmbientEffect({ design, reducedMotion, enabled }: { design: DesignId; reducedMotion: boolean; enabled: boolean }) {
  const effect = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!enabled || reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const update = (event: PointerEvent) => {
      const target = effect.current;
      if (!target) return;
      target.style.setProperty("--portfolio-fx-x", `${(event.clientX / window.innerWidth) * 100}%`);
      target.style.setProperty("--portfolio-fx-y", `${(event.clientY / window.innerHeight) * 100}%`);
      target.dataset.active = "true";
    };
    const press = () => { if (effect.current) effect.current.dataset.pressed = "true"; };
    const release = () => { if (effect.current) effect.current.dataset.pressed = "false"; };
    window.addEventListener("pointermove", update, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    return () => { window.removeEventListener("pointermove", update); window.removeEventListener("pointerdown", press); window.removeEventListener("pointerup", release); };
  }, [enabled, reducedMotion]);
  if (!enabled) return null;
  return <div ref={effect} className={`portfolio-ambient-effect ${design}`} data-active="false" data-pressed="false" aria-hidden="true" />;
}

function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  const { effectsEnabled, setEffectsEnabled } = useDesign();
  return <header className="portfolio-header"><div className="portfolio-container header-inner"><Link className="portfolio-brand" href="/" aria-label="LAC Studio home"><BrandLogo /></Link><nav className={open ? "portfolio-nav open" : "portfolio-nav"} aria-label="Main navigation">{navigation.map(([label, target]) => <Link key={target} className={page === target || (page === "case-study" && target === "work") ? "active" : ""} href={hrefFor(target)} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact" className="header-contact" onClick={() => setOpen(false)}>Start a project ↗</Link></nav><button className="portfolio-effect-toggle" type="button" aria-pressed={effectsEnabled} aria-label={`${effectsEnabled ? "Disable" : "Enable"} interface effects`} onClick={() => setEffectsEnabled(!effectsEnabled)}><span aria-hidden="true">✦</span><b>{effectsEnabled ? "FX on" : "FX off"}</b></button><PortfolioDesignSwitcher /><button className="mobile-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button></div></header>;
}

function Footer() {
  return <footer className="portfolio-footer"><div className="portfolio-container footer-grid"><div className="footer-brand"><Link className="portfolio-brand" href="/" aria-label="LAC Studio home"><BrandLogo /></Link><p>Independent creative software development studio for products that need to work in the real world.</p></div><nav aria-label="Explore"><span>Explore</span><Link href="/work">Work</Link><Link href="/services">Services</Link></nav><nav aria-label="Studio"><span>Studio</span><Link href="/about">About</Link><Link href="/process">Process</Link><Link href="/lab">Design Lab</Link></nav><nav aria-label="Contact"><span>Contact</span><Link href="/contact">Start a project</Link><Link href="/privacy">Privacy</Link><Link href="/legal">Legal</Link></nav><div className="footer-note"><span>© {new Date().getFullYear()} LAC STUDIO</span><span>Independent by design.</span></div></div></footer>;
}

function Section({ eyebrow, title, children, className = "", id }: { eyebrow?: string; title?: string; children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`portfolio-section ${className}`}>{(eyebrow || title) && <div className="portfolio-section-heading">{eyebrow && <span>{eyebrow}</span>}{title && <h2>{title}</h2>}</div>}{children}</section>;
}

function ProjectPreview({ project }: { project: PublicProject }) {
  const { activeDesign } = useDesign();
  const designQuery = `?design=${activeDesign.id}`;
  return <article className="project-card"><div className="project-art" aria-label={`${project.title} product preview`}>{project.thumbnail ? <Image src={project.thumbnail} alt="" fill sizes="(max-width: 840px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <><span>Media to be supplied</span><i /><b>{project.title.slice(0, 2).toUpperCase()}</b></>}</div><div className="project-card-copy"><span>{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p>{project.problem && <div className="project-problem"><b>Problem solved</b><p>{project.problem}</p></div>}<ul>{project.technologies.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul><div className="project-card-links">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Open live demo <b>↗</b></a> : project.demoOnRequest ? <Link href={`/contact${designQuery}`}>Request live demo <b>↗</b></Link> : null}<Link href={`/work/${project.slug}${designQuery}`}>Read case study <b>→</b></Link></div>{project.demoNotice && <small className="project-demo-notice">{project.demoNotice}</small>}</div></article>;
}

function UnpublishedWork() {
  return <div className="empty-published"><span>WORK IN PUBLICATION REVIEW</span><h3>Case studies are being prepared with the right context.</h3><p>LAC STUDIO does not publish confidential project detail, invented outcomes or unapproved visuals. The public catalogue will appear here when each project is ready to be shared.</p><Link className="text-link" href="/contact">Discuss your project ↗</Link></div>;
}

type PortfolioSelectOption = { value: string; label: string };

function PortfolioSelect({ name, value, options, placeholder, ariaLabel, onChange, required = false }: {
  name?: string; value: string; options: readonly PortfolioSelectOption[]; placeholder: string; ariaLabel: string; onChange: (value: string) => void; required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const listboxId = useId();
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));
  const selected = options.find((option) => option.value === value);
  const focusOption = (index: number) => window.requestAnimationFrame(() => optionRefs.current[index]?.focus());
  const close = (restoreFocus = false) => { setOpen(false); if (restoreFocus) window.requestAnimationFrame(() => trigger.current?.focus()); };
  const choose = (next: string) => { onChange(next); close(true); };
  useEffect(() => {
    const dismiss = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener("pointerdown", dismiss);
    return () => window.removeEventListener("pointerdown", dismiss);
  }, []);
  return <div ref={root} className={open ? "portfolio-select open" : "portfolio-select"}>
    {name && <input type="hidden" name={name} value={value} />}
    <button ref={trigger} type="button" role="combobox" aria-label={ariaLabel} aria-haspopup="listbox" aria-controls={listboxId} aria-expanded={open} aria-required={required} aria-invalid={required && !value} onClick={() => open ? close() : (setOpen(true), focusOption(selectedIndex))} onKeyDown={(event) => {
      if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); focusOption(Math.min(selectedIndex + 1, options.length - 1)); }
      if (event.key === "ArrowUp") { event.preventDefault(); setOpen(true); focusOption(Math.max(selectedIndex - 1, 0)); }
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen(true); focusOption(selectedIndex); }
      if (event.key === "Escape") close(true);
    }}><span>{selected?.label ?? placeholder}</span><i aria-hidden="true">⌄</i></button>
    {open && <div id={listboxId} role="listbox" aria-label={ariaLabel}>{options.map((option, index) => <button ref={(node) => { optionRefs.current[index] = node; }} type="button" role="option" aria-selected={option.value === value} key={option.value} onKeyDown={(event) => {
      if (event.key === "ArrowDown") { event.preventDefault(); focusOption(Math.min(index + 1, options.length - 1)); }
      if (event.key === "ArrowUp") { event.preventDefault(); focusOption(Math.max(index - 1, 0)); }
      if (event.key === "Home") { event.preventDefault(); focusOption(0); }
      if (event.key === "End") { event.preventDefault(); focusOption(options.length - 1); }
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); choose(option.value); }
      if (event.key === "Escape") close(true);
    }} onClick={() => choose(option.value)}><span>{option.label}</span><i aria-hidden="true">{option.value === value ? "✓" : ""}</i></button>)}</div>}
  </div>;
}

type WorkShowcaseSlide = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  meta: string;
  href?: string;
  image?: string;
  placeholder?: boolean;
};

const workPlaceholders: readonly WorkShowcaseSlide[] = [
  { id: "slot-01", eyebrow: "CASE STUDY SLOT / 01", title: "A considered product story.", summary: "This featured space is reserved for an approved case study with a verified brief, process, visual direction and outcome.", meta: "APPROVED MEDIA / PENDING", placeholder: true },
  { id: "slot-02", eyebrow: "CASE STUDY SLOT / 02", title: "A useful system, explained clearly.", summary: "The work page is prepared to present the context behind an interface, rather than just an isolated screen or an unverified claim.", meta: "APPROVED MEDIA / PENDING", placeholder: true },
  { id: "slot-03", eyebrow: "CASE STUDY SLOT / 03", title: "A real-world workflow, when ready.", summary: "Each public story will be introduced only after its description, media and publishing permission have been confirmed.", meta: "APPROVED MEDIA / PENDING", placeholder: true },
];

function FeaturedWorkCarousel() {
  const { activeDesign } = useDesign();
  const publishedSlides: WorkShowcaseSlide[] = featuredProjects.map((project) => ({ id: project.id, eyebrow: `${project.category.toUpperCase()} / FEATURED WORK`, title: project.title, summary: project.summary, meta: project.platforms.join(" · ").toUpperCase(), href: `/work/${project.slug}`, image: project.heroImage ?? project.thumbnail }));
  const slides = publishedSlides.length ? publishedSlides : workPlaceholders;
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const active = slides[activeIndex] ?? slides[0];
  const move = (direction: -1 | 1) => setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  const goTo = (index: number) => setActiveIndex(index);
  const actionHref = (fragment: "workflow" | "evidence") => active.href ? `${active.href}?design=${activeDesign.id}#${fragment}` : fragment === "workflow" ? "/process" : "/work#publication-policy";
  const keepActionClickable = (event: React.PointerEvent<HTMLAnchorElement>) => event.stopPropagation();
  const pointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };
  const pointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) > 42) move(distance > 0 ? -1 : 1);
  };

  return <div className="work-carousel" role="region" aria-roledescription="carousel" aria-label="Featured work" tabIndex={0} onKeyDown={(event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
  }}>
    <div className="work-carousel-viewport" onPointerDown={pointerDown} onPointerUp={pointerUp} onPointerCancel={() => { pointerStart.current = null; }}>
      <article className="work-carousel-slide" aria-roledescription="slide" aria-label={`${activeIndex + 1} of ${slides.length}`}>
        <div className="work-carousel-media" aria-label={active.placeholder ? "Approved project media placeholder" : `${active.title} media`}>
          {active.image ? <Image src={active.image} alt="" fill sizes="100vw" /> : <><div className="work-carousel-orbit" /><div className="work-carousel-diagonal" /></>}
          <div className="work-carousel-copy work-carousel-overlay"><div className="work-carousel-actions"><Link href={actionHref("workflow")} onPointerDown={keepActionClickable}>Workflow <b>→</b></Link><Link href={actionHref("evidence")} onPointerDown={keepActionClickable}>Evidence <b>→</b></Link><Link className="primary" href={`/contact?design=${activeDesign.id}`} onPointerDown={keepActionClickable}>Discuss your project <b>↗</b></Link></div></div>
        </div>
      </article>
    </div>
    <div className="work-carousel-controls">
      <div className="work-carousel-arrows"><button type="button" aria-label="Previous featured project" onClick={() => move(-1)}>←</button><button type="button" aria-label="Next featured project" onClick={() => move(1)}>→</button></div>
      <div className="work-carousel-pagination" role="tablist" aria-label="Choose featured work" style={{ "--work-active-slide": activeIndex, "--work-slide-count": slides.length } as React.CSSProperties}><i className="work-carousel-pagination-indicator" aria-hidden="true" />{slides.map((slide, index) => <button type="button" key={slide.id} role="tab" aria-selected={index === activeIndex} aria-label={`Show featured work ${index + 1}: ${slide.title}`} onClick={() => goTo(index)}><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
      <p aria-live="polite"><b>{String(activeIndex + 1).padStart(2, "0")}</b> / {String(slides.length).padStart(2, "0")}</p>
    </div>
  </div>;
}

const workFaq = [
  ["What kind of work do you take on?", "LAC STUDIO works on web applications, Android products, SaaS platforms and the technical systems that make them useful in the real world."],
  ["Can you work from an early idea?", "Yes. Early conversations can start with the problem, the people involved and the next useful decision — not a finished specification."],
  ["Do you only design interfaces?", "No. The studio can shape product direction, experience design, frontend, backend, integrations and a practical path to release."],
  ["How do case studies get published?", "A project appears only when its description, media, outcomes and permission to share them have been confirmed."],
  ["Can you improve an existing product?", "Yes. Existing workflows, interfaces and technical foundations can be assessed and improved without pretending a rebuild is always the answer."],
  ["What should a first message include?", "A short outline of what you are trying to make, improve or untangle is enough to begin a useful conversation."],
] as const;

function WorkFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="work-faq-list">{workFaq.map(([question, answer], index) => {
    const expanded = open === index;
    const panelId = `work-faq-${index}`;
    return <article className={expanded ? "open" : ""} key={question}><button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? null : index)}><span>{String(index + 1).padStart(2, "0")}</span><b>{question}</b><i aria-hidden="true">{expanded ? "−" : "+"}</i></button><div id={panelId} hidden={!expanded}><p>{answer}</p></div></article>;
  })}</div>;
}

function HomePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "LAC STUDIO", description: "Independent creative software-development studio building complete digital products for web, mobile, and beyond." }) }} />
    <section className="portfolio-hero"><div className="portfolio-container hero-grid"><div><span className="eyebrow">LAC STUDIO / DIGITAL PRODUCT DEVELOPMENT</span><h1>From idea to<br /><em>working product.</em></h1><p>We design and build complete digital products — web applications, native Android apps, SaaS platforms, and custom software that solves real problems.</p><div className="hero-actions"><Link className="button primary" href="/work">Explore Work <b>→</b></Link><Link className="button secondary" href="/contact">Start a Project <b>→</b></Link></div></div><div className="hero-preview" aria-label="Abstract portfolio preview placeholder"><span>SELECTED PRODUCT / PREVIEW</span><strong>Structure<br />before<br /><em>surface.</em></strong><i /><div className="hero-preview-meta"><b>WEB · ANDROID · SYSTEMS</b><small>Approved project media will appear here.</small></div></div></div></section>
    <div className="portfolio-container">
      <Section eyebrow="01 / SELECTED WORK" title="Selected Work">{featuredProjects.length ? <div className="project-grid">{featuredProjects.slice(0, 4).map((project) => <ProjectPreview project={project} key={project.id} />)}</div> : <UnpublishedWork />}</Section>
      <Section eyebrow="02 / CAPABILITIES" title="What We Build"><div className="capability-grid">{capabilities.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></Section>
      <Section eyebrow="03 / TECHNICAL EXPERTISE" title="Built Beyond the Interface"><div className="expertise-grid">{expertise.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></Section>
      <Section eyebrow="04 / PROCESS" title="How We Build"><ol className="process-row">{process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b></li>)}</ol><Link className="text-link" href="/process">See the full process ↗</Link></Section>
      <Section eyebrow="05 / ABOUT" title="Independent by Design" className="about-preview"><p>LAC STUDIO is an independent software studio combining product thinking, software engineering and an understanding of human behavior to make useful digital products.</p><Link className="text-link" href="/about">About the studio ↗</Link></Section>
      <Section className="contact-cta"><span>06 / START A CONVERSATION</span><h2>Have something<br />worth building?</h2><p>Let&apos;s turn your idea into a working product.</p><Link className="button primary" href="/contact">Let&apos;s Talk <b>→</b></Link></Section>
    </div>
  </>;
}

function WorkPage() {
  const getParam = (key: string, fallback: string) => typeof window === "undefined" ? fallback : new URLSearchParams(window.location.search).get(key) ?? fallback;
  const [query, setQuery] = useState(() => getParam("q", "")); const [category, setCategory] = useState(() => getParam("category", "all")); const [platform, setPlatform] = useState(() => getParam("platform", "all"));
  const categories = Array.from(new Set(publishedProjects.map((project) => project.category)));
  const platforms = Array.from(new Set(publishedProjects.flatMap((project) => project.platforms)));
  const results = useMemo(() => publishedProjects.filter((project) => `${project.title} ${project.summary} ${project.category}`.toLowerCase().includes(query.toLowerCase()) && (category === "all" || project.category === category) && (platform === "all" || project.platforms.includes(platform as never))), [query, category, platform]);
  const update = (next: { q?: string; category?: string; platform?: string }) => { const params = new URLSearchParams(window.location.search); const values = { q: query, category, platform, ...next }; Object.entries(values).forEach(([key, value]) => value && value !== "all" ? params.set(key, value) : params.delete(key)); window.history.replaceState(null, "", `${window.location.pathname}${params.size ? `?${params}` : ""}`); setQuery(values.q); setCategory(values.category); setPlatform(values.platform); };
  return <main className="portfolio-page portfolio-container">
    <Section eyebrow="PORTFOLIO / PROJECT INDEX" title="Work" className="work-intro-section"><p className="page-intro">A public project index that grows only with approved descriptions, visuals and outcomes.</p><div className="work-filters"><label>Search<input value={query} onChange={(event) => update({ q: event.target.value })} placeholder="Search published work" /></label><label>Category<PortfolioSelect ariaLabel="Filter work by category" value={category} onChange={(value) => update({ category: value })} placeholder="All categories" options={[{ value: "all", label: "All categories" }, ...categories.map((item) => ({ value: item, label: item }))]} /></label><label>Platform<PortfolioSelect ariaLabel="Filter work by platform" value={platform} onChange={(value) => update({ platform: value })} placeholder="All platforms" options={[{ value: "all", label: "All platforms" }, ...platforms.map((item) => ({ value: item, label: item }))]} /></label><button className="clear-work-filters" type="button" onClick={() => update({ q: "", category: "all", platform: "all" })}>Clear filters</button></div></Section>
    <Section eyebrow="01 / FEATURED WORK" title="Built for the work behind the screen." className="work-featured-section"><FeaturedWorkCarousel /></Section>
    <Section eyebrow="02 / PUBLIC PROJECT INDEX" title="Case studies, with the right context." className="work-gallery-section"><p className="page-intro">Each project pairs a verified product preview with the problem it is designed to solve, its public scope and the available case study.</p><div id="publication-policy">{results.length ? <div className="project-grid work-project-grid">{results.map((project) => <ProjectPreview key={project.id} project={project} />)}</div> : <UnpublishedWork />}</div></Section>
    <Section eyebrow="03 / QUESTIONS" title="A clear place to start." className="work-faq-section"><WorkFaq /></Section>
    <Section className="contact-cta work-contact-cta"><span>04 / START A CONVERSATION</span><h2>Have something<br />worth building?</h2><p>Bring the context. We&apos;ll work out the useful next step.</p><Link className="button primary" href="/contact">Start a project <b>→</b></Link></Section>
  </main>;
}

function ServicesPage() { return <main className="portfolio-page portfolio-container"><Section eyebrow="SERVICES / FROM PRODUCT IDEA TO RELEASE" title="What we can build together"><p className="page-intro">Clear technical thinking and product-minded design for software that has to do real work.</p><div className="services-grid">{services.map(([title, description, useCases], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p><small>{useCases}</small></article>)}</div><div className="inline-cta"><h2>Not sure where to start?</h2><Link className="button primary" href="/contact">Start a conversation →</Link></div></Section></main>; }
function AboutPage() { return <main className="portfolio-page portfolio-container"><Section eyebrow="ABOUT / LAC STUDIO" title="Independent by Design"><div className="two-column"><div><p className="lead">LAC STUDIO is an independent development studio for teams and ideas that need thoughtful software, not just a surface.</p><p>It combines product design, web and Android development, backend architecture and practical problem solving. A background in psychology informs the work: useful software starts with a clear understanding of people, decisions and context.</p></div><aside className="asset-slot"><span>PORTRAIT / OPTIONAL</span><p>An approved founder portrait and expanded biography can be added here.</p></aside></div></Section><Section eyebrow="WAYS OF WORKING" title="End-to-end, with a useful level of detail"><div className="expertise-grid">{expertise.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></Section></main>; }
function ProcessPage() { const stages = [["Discovery", "Understand the problem, people, constraints and the decision worth making."], ["Product Definition", "Turn the idea into a useful scope, priorities and a shared direction."], ["Experience Design", "Shape the flows, information and interface around the work people need to do."], ["Architecture", "Choose practical foundations for data, permissions, integrations and growth."], ["Development", "Build the product in focused, reviewable increments."], ["Testing", "Check the critical journeys, edge cases and real-world behavior."], ["Deployment", "Prepare a reliable release path and handoff."], ["Evolution", "Learn from use and improve the part of the product that matters next."]]; return <main className="portfolio-page portfolio-container"><Section eyebrow="PROCESS / A CLEAR PATH" title="How we build"><div className="process-list">{stages.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></Section></main>; }

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle"); const [message, setMessage] = useState("");
  const [projectType, setProjectType] = useState(""); const [budget, setBudget] = useState(""); const [timeline, setTimeline] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (!projectType) { setStatus("error"); setMessage("Choose a project type before sending your inquiry."); return; } setStatus("loading"); const form = new FormData(event.currentTarget); try { const response = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(form.entries())) }); const body = await response.json(); if (!response.ok) throw new Error(body.error ?? "Your message could not be sent."); setStatus("success"); setMessage(body.message); event.currentTarget.reset(); setProjectType(""); setBudget(""); setTimeline(""); } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Your message could not be sent."); } }
  return <main className="portfolio-page portfolio-container"><Section eyebrow="CONTACT / START A PROJECT" title="Let&apos;s make the next step clear."><div className="two-column"><div><p className="lead">Tell us what you are considering. A useful first message can be short.</p><p>No contact email is published until it has been configured and verified. This form validates your inquiry but cannot claim delivery until a provider is connected.</p></div><form className="contact-form" onSubmit={submit}><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Project type<PortfolioSelect name="projectType" ariaLabel="Project type" value={projectType} onChange={setProjectType} required placeholder="Choose a direction" options={[{ value: "Web application", label: "Web application" }, { value: "Android application", label: "Android application" }, { value: "SaaS platform", label: "SaaS platform" }, { value: "Website", label: "Website" }, { value: "Other software", label: "Other software" }]} /></label><label>Budget range<PortfolioSelect name="budget" ariaLabel="Budget range" value={budget} onChange={setBudget} placeholder="Prefer not to say" options={[{ value: "", label: "Prefer not to say" }, { value: "Under €5,000", label: "Under €5,000" }, { value: "€5,000–€15,000", label: "€5,000–€15,000" }, { value: "€15,000+", label: "€15,000+" }]} /></label><label>Timeline<PortfolioSelect name="timeline" ariaLabel="Timeline" value={timeline} onChange={setTimeline} placeholder="Flexible" options={[{ value: "", label: "Flexible" }, { value: "Within 1 month", label: "Within 1 month" }, { value: "1–3 months", label: "1–3 months" }, { value: "More than 3 months", label: "More than 3 months" }]} /></label><label className="wide">Project description<textarea name="message" required minLength={20} placeholder="What are you trying to make, improve or untangle?" /></label><label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label><small className="wide">By sending this inquiry, you agree that LAC STUDIO may use your details to respond. See <a href="/privacy">Privacy</a>.</small><button className="button primary" disabled={status === "loading"}>{status === "loading" ? "Checking inquiry…" : "Send inquiry →"}</button>{status !== "idle" && <p className={`form-status ${status}`} role={status === "error" ? "alert" : "status"}>{message}</p>}</form></div></Section></main>;
}
function LegalPage({ privacy }: { privacy: boolean }) { return <main className="portfolio-page portfolio-container"><Section eyebrow={privacy ? "PRIVACY" : "LEGAL"} title={privacy ? "Privacy, without assumptions." : "Legal information to complete before publication."}><div className="legal-copy">{privacy ? <><p>LAC STUDIO currently does not install analytics or publish a contact address through this portfolio. The inquiry form validates submissions and is configured not to claim delivery until a sending provider is enabled.</p><p>When delivery is configured, this notice must be updated with the data controller, contact method, processing purpose, retention period, legal basis and any provider details.</p></> : <><p>Business registration details, registered address, governing-law details and other legally required information have not been supplied for publication.</p><p>Before publishing this portfolio, replace this notice with verified information appropriate to the studio&apos;s legal situation and the markets it serves.</p></>}</div></Section></main>; }
function NotFoundPage() { return <main className="portfolio-page portfolio-container"><Section eyebrow="404 / NOT FOUND" title="This page is not public."><p className="page-intro">The page may be unavailable, unpublished or have moved. Public case studies appear only after their content has been approved.</p><Link className="button primary" href="/work">Return to work →</Link></Section></main>; }

function CaseStudyNavigation({ previous, next, designQuery, location }: { previous: PublicProject; next: PublicProject; designQuery: string; location: "workflow" | "evidence" }) {
  return <nav className="case-study-navigation" aria-label={`Case study navigation after ${location}`}><Link href={`/work${designQuery}`}>← Back to Work</Link><div><Link href={`/work/${previous.slug}${designQuery}`}>← <span>Previous</span> {previous.title}</Link><Link href={`/work/${next.slug}${designQuery}`}><span>Next</span> {next.title} →</Link></div></nav>;
}

function CaseStudy({ project }: { project: PublicProject }) {
  const image = project.heroImage ?? project.thumbnail;
  const { activeDesign } = useDesign();
  const projectIndex = publishedProjects.findIndex((item) => item.id === project.id);
  const previous = publishedProjects[(projectIndex - 1 + publishedProjects.length) % publishedProjects.length];
  const next = publishedProjects[(projectIndex + 1) % publishedProjects.length];
  const designQuery = `?design=${activeDesign.id}`;
  return <main className="portfolio-page portfolio-container">
    <Section eyebrow={`${project.category.toUpperCase()} / CASE STUDY`} title={project.title}>
      <p className="page-intro">{project.summary}</p>
      <div className="case-meta"><span>{project.subtitle}</span><span>{project.platforms.join(" · ")}</span><span>{project.year}</span></div>
      {image && <div className="case-hero-media"><Image src={image} alt={`${project.title} interface preview`} fill sizes="(max-width: 1180px) 100vw, 1180px" priority /></div>}
      <div className="case-actions">{project.liveUrl ? <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project <b>↗</b></a> : project.demoOnRequest ? <Link className="button primary" href={`/contact${designQuery}`}>Request a live demo <b>↗</b></Link> : null}<Link className="button secondary" href={`/contact${designQuery}`}>Discuss a similar project <b>→</b></Link></div>
      {project.demoNotice && <p className="case-demo-notice">{project.demoNotice}</p>}
    </Section>
    <Section id="workflow" eyebrow="01 / PRODUCT OVERVIEW" title="Built around the real workflow."><div className="case-overview"><div><p className="lead">{project.longDescription ?? project.summary}</p>{project.problem && <div className="case-problem"><span>Problem solved</span><p>{project.problem}</p></div>}</div><ul>{(project.features ?? []).map((feature) => <li key={feature}>{feature}</li>)}</ul></div><CaseStudyNavigation previous={previous} next={next} designQuery={designQuery} location="workflow" /></Section>
    <Section id="evidence" eyebrow="02 / TECHNICAL EVIDENCE" title="Structure behind the surface."><div className="case-evidence"><article><span>STACK</span><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span>IMPLEMENTATION</span><ul>{(project.technicalHighlights ?? []).map((item) => <li key={item}>{item}</li>)}</ul></article>{project.architecture && <article className="case-architecture"><span>ARCHITECTURE</span><p>{project.architecture}</p></article>}</div><CaseStudyNavigation previous={previous} next={next} designQuery={designQuery} location="evidence" /></Section>
    <Section className="contact-cta"><h2>Have a related<br />challenge?</h2><a className="button primary" href="/contact">Let&apos;s Talk →</a></Section>
  </main>;
}

function PortfolioContent({ page, project }: { page: Page; project?: PublicProject }) {
  const { activeDesign, reducedMotion, effectsEnabled } = useDesign();
  return <div className={`portfolio-shell portfolio-${activeDesign.id} ${reducedMotion ? "reduce-motion" : ""}`} data-design={activeDesign.id} data-effects={effectsEnabled ? "on" : "off"}><Header page={page} /><main>{page === "home" ? <HomePage /> : page === "work" ? <WorkPage /> : page === "services" ? <ServicesPage /> : page === "about" ? <AboutPage /> : page === "process" ? <ProcessPage /> : page === "contact" ? <ContactPage /> : page === "privacy" ? <LegalPage privacy /> : page === "legal" ? <LegalPage privacy={false} /> : page === "not-found" ? <NotFoundPage /> : project ? <CaseStudy project={project} /> : <WorkPage />}</main><Footer /><PortfolioAmbientEffect design={activeDesign.id} reducedMotion={reducedMotion} enabled={effectsEnabled} /></div>;
}

function LegacyLabRedirect({ children }: { children: ReactNode }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isLegacyLabLink = ["category", "component", "compare", "left", "right"].some((key) => params.has(key));
    if (window.location.pathname === "/" && isLegacyLabLink) {
      window.location.replace(`/lab${window.location.search}`);
    }
  }, []);
  return <>{children}</>;
}

export function PortfolioApp({ page, project }: { page: Page; project?: PublicProject }) {
  return <LegacyLabRedirect><DesignProvider scope="portfolio"><PortfolioContent page={page} project={project} /></DesignProvider></LegacyLabRedirect>;
}
