"use client";

import { useEffect, useId, useRef, useState, type ComponentPropsWithoutRef, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { DesignProvider, useDesign } from "@/design-system/engine/provider";
import { designIds, designRegistry, type DesignId } from "@/design-system/engine/registry";
import { featuredProjects, publishedProjects, type PublicProject } from "@/content/projects";
import { services } from "@/content/services";

// Vinext's experimental RSC prefetcher can fail after an otherwise valid Vercel
// deployment. Portfolio navigation does not need client-side data prefetching,
// so normal document links give every route a dependable, accessible transition.
function Link({ href, ...props }: ComponentPropsWithoutRef<"a"> & { href: string }) {
  return <a href={href} {...props} />;
}

type Page = "home" | "work" | "services" | "about" | "process" | "contact" | "privacy" | "legal" | "case-study" | "not-found";

const navigation: Array<[string, Page]> = [["Work", "work"], ["Services", "services"], ["Process", "process"], ["About", "about"]];
const hrefFor = (page: Page) => page === "home" ? "/" : page === "case-study" ? "/work" : `/${page}`;
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
const homeFocus = [
  ["Product direction", "Shape the scope, user journeys and technical decisions for a web app, mobile product or internal platform."],
  ["Digital products", "Build web and mobile apps, client portals, booking flows, dashboards and SaaS products from end to end."],
  ["Systems that hold up", "Connect backends, databases, automation, permissions and integrations that keep real operations moving."],
] as const;

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

function ProjectPreview({ project, compact = false }: { project: PublicProject; compact?: boolean }) {
  const { activeDesign } = useDesign();
  const designQuery = `?design=${activeDesign.id}`;
  return <article className={`project-card ${compact ? "project-card-compact" : ""}`}><div className="project-art" aria-label={`${project.title} product preview`}>{project.thumbnail ? <Image src={project.thumbnail} alt="" fill sizes="(max-width: 840px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <><span>Media to be supplied</span><i /><b>{project.title.slice(0, 2).toUpperCase()}</b></>}</div><div className="project-card-copy"><span>{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p>{compact && project.problem && <p className="project-compact-problem"><b>Solves:</b> {project.problem}</p>}{!compact && project.problem && <div className="project-problem"><b>Problem solved</b><p>{project.problem}</p></div>}<ul>{project.technologies.slice(0, compact ? 2 : 3).map((item) => <li key={item}>{item}</li>)}</ul><div className="project-card-links">{!compact && (project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Open live demo <b>↗</b></a> : project.demoOnRequest ? <Link href={`/contact${designQuery}`}>Request live demo <b>↗</b></Link> : null)}<Link href={`/work/${project.slug}${designQuery}`}>{compact ? "View project" : "Read case study"} <b>→</b></Link></div>{!compact && project.demoNotice && <small className="project-demo-notice">{project.demoNotice}</small>}</div></article>;
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
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const active = slides[activeIndex] ?? slides[0];
  const move = (direction: -1 | 1) => { setAutoplayPaused(true); setActiveIndex((index) => (index + direction + slides.length) % slides.length); };
  const goTo = (index: number) => { setAutoplayPaused(true); setActiveIndex(index); };
  useEffect(() => {
    if (autoplayPaused || slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % slides.length), 5600);
    return () => window.clearInterval(timer);
  }, [autoplayPaused, slides.length]);
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
        </div>
        <div className="work-carousel-copy work-carousel-overlay"><div className="work-carousel-actions"><Link href={actionHref("workflow")} onPointerDown={keepActionClickable}>Workflow <b>→</b></Link><Link href={actionHref("evidence")} onPointerDown={keepActionClickable}>Evidence <b>→</b></Link><Link className="primary" href={`/contact?design=${activeDesign.id}`} onPointerDown={keepActionClickable}>Discuss your project <b>↗</b></Link></div></div>
      </article>
    </div>
    <div className="work-carousel-controls">
      <div className="work-carousel-arrows"><button type="button" aria-label="Previous featured project" onClick={() => move(-1)}>←</button><button type="button" aria-label="Next featured project" onClick={() => move(1)}>→</button><button type="button" className="work-carousel-autoplay" aria-pressed={autoplayPaused} aria-label={autoplayPaused ? "Resume featured work autoplay" : "Pause featured work autoplay"} onClick={() => setAutoplayPaused((paused) => !paused)}>{autoplayPaused ? "▶" : "Ⅱ"}</button></div>
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
    <section className="portfolio-hero home-hero"><div className="portfolio-container hero-grid"><div className="hero-copy"><span className="eyebrow">LAC STUDIO / PRODUCT DEVELOPMENT FOR REAL-WORLD WORK</span><h1><span className="hero-title-lead">From idea to</span><br /><em>working product.</em></h1><p>I build complete web, mobile and operational products — interface, backend, database, integrations and launch — as one connected system.</p><div className="hero-actions"><Link className="button primary" href="/contact">Start a project <b>↗</b></Link><Link className="button secondary" href="/work">See what&apos;s possible <b>→</b></Link></div></div><aside className="hero-preview home-project-preview home-journey-preview" aria-label="A product journey from a first sketch to working applications."><Image src="/branding/lac-studio-hero-healthcare.png" alt="A sketch, product-development milestones and responsive application dashboards." fill priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 62vw, 760px" /></aside><ul className="hero-proof" aria-label="LAC Studio product focus"><li><b>Web apps</b><span>Products customers can use</span></li><li><b>Mobile</b><span>Work beyond the desk</span></li><li><b>Systems</b><span>Operations that connect</span></li></ul></div></section>
    <div className="portfolio-container">
      <Section eyebrow="01 / SELECTED WORK" title="Built for the work behind the screen." className="home-selected-section">{featuredProjects.length ? <><div className="project-grid home-selected-grid">{featuredProjects.slice(1, 4).map((project) => <ProjectPreview project={project} compact key={project.id} />)}</div><Link className="home-all-work" href="/work">See all projects <b>→</b></Link></> : <UnpublishedWork />}</Section>
      <Section eyebrow="02 / WHAT LAC DOES" title="Clarity before complexity." className="home-focus-section"><div className="home-focus-grid">{homeFocus.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></Section>
      <Section eyebrow="03 / HOW WE BUILD" title="Direct collaboration, from first decision to release." className="home-process-section"><ol className="process-row">{process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b><small>{["Context", "Scope", "Experience", "System", "Real use", "Release"][index]}</small></li>)}</ol><div className="home-section-actions"><Link className="button primary home-section-cta" href="/process">Explore the full process <b>↗</b></Link></div></Section>
      <Section eyebrow="04 / INDEPENDENT BY DESIGN" title="Work directly with the person who designs and builds it." className="about-preview home-about-preview"><p>You stay close to the work from the first conversation through interface design, engineering and launch — without strategy handoffs between separate teams.</p><div className="home-section-actions"><Link className="button primary home-section-cta" href="/about">About the studio <b>→</b></Link><Link className="button secondary home-section-cta" href="/services">Explore services <b>→</b></Link></div></Section>
      <Section className="contact-cta home-contact-cta"><span>05 / START A CONVERSATION</span><h2>Have something<br />worth building?</h2><p>Tell me what needs to work better. You&apos;ll speak directly with the person who will shape and build it.</p><Link className="button primary" href="/contact">Start a project <b>↗</b></Link></Section>
    </div>
  </>;
}

function WorkPage() {
  return <main className="portfolio-page portfolio-container">
    <Section eyebrow="01 / FEATURED WORK" title="Built for the work behind the screen." className="work-featured-section"><FeaturedWorkCarousel /></Section>
    <Section eyebrow="02 / PUBLIC PROJECT INDEX" title="Case studies, with the right context." className="work-gallery-section"><p className="page-intro">Each project pairs a verified product preview with the problem it is designed to solve, its public scope and the available case study.</p><div id="publication-policy"><div className="project-grid work-project-grid">{publishedProjects.map((project) => <ProjectPreview key={project.id} project={project} />)}</div></div></Section>
    <Section eyebrow="03 / QUESTIONS" title="A clear place to start." className="work-faq-section"><WorkFaq /></Section>
    <Section className="contact-cta work-contact-cta"><span>04 / START A CONVERSATION</span><h2>Have something<br />worth building?</h2><p>Bring the context. We&apos;ll work out the useful next step.</p><Link className="button primary" href="/contact">Start a project <b>→</b></Link></Section>
  </main>;
}

function ServicesPage() { return <main className="portfolio-page portfolio-container"><Section eyebrow="SERVICES / FROM PRODUCT IDEA TO RELEASE" title="What we can build together"><p className="page-intro">Clear technical thinking and product-minded design for software that has to do real work.</p><div className="services-grid">{services.map(([title, description, useCases], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p><small>{useCases}</small></article>)}</div><div className="inline-cta"><h2>Not sure where to start?</h2><Link className="button primary" href="/contact">Start a conversation →</Link></div></Section></main>; }
function AboutPage() {
  return <main className="portfolio-page portfolio-container about-page">
    <Section eyebrow="ABOUT / LAC STUDIO" title="Independent thinking, built into the product." className="about-intro-section">
      <div className="about-profile">
        <div className="about-profile-copy">
          <p className="lead">LAC STUDIO is led by an independent product developer who connects how people think, what teams need to do and the technology that makes it possible.</p>
          <p>My first profession was psychology. That background still shapes every project: I look for the real context behind a request, the people who will use the product and the decisions an interface has to make easier.</p>
          <p>After a professional transition into software seven years ago — and more than three decades working with computers — I now design and build complete web, mobile and operational products. The work stays close to both the technical system and the human reality around it.</p>
        </div>
        <figure className="about-portrait">
          <Image src="/branding/lac-studio-founder.png" alt="Founder of LAC Studio" width={264} height={290} sizes="(max-width: 700px) 180px, 264px" priority />
          <figcaption><span>PSYCHOLOGY → SOFTWARE</span><b>30+ years around computers.<br />7 years building professionally.</b></figcaption>
        </figure>
      </div>
    </Section>
    <Section eyebrow="WHAT GUIDES THE WORK" title="Software is useful when it respects the people using it." className="about-principles-section">
      <div className="about-principles">
        <article><span>01</span><h3>Understand before adding</h3><p>Start with the actual task, the people doing it and the friction worth removing — not a list of features in isolation.</p></article>
        <article><span>02</span><h3>Design the connected whole</h3><p>Interface, workflow, data, roles and integrations are treated as one product, because users experience them that way.</p></article>
        <article><span>03</span><h3>Make room for craft</h3><p>I enjoy turning an unclear idea into something tangible: a considered interface, a useful system or a visual detail that gives the work character.</p></article>
      </div>
    </Section>
    <Section eyebrow="CAPABILITIES / END TO END" title="One person, close to the useful decisions." className="about-capabilities-section">
      <p className="page-intro">You work directly with the person shaping the product direction and building the system. It keeps feedback clear, decisions connected and ownership close to the work.</p>
      <div className="expertise-grid">{expertise.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </Section>
    <Section className="contact-cta about-contact-cta"><span>START A CONVERSATION</span><h2>Bring the problem.<br />We&apos;ll shape the useful product.</h2><p>A first conversation can begin with the work that needs to change — no finished brief required.</p><Link className="button primary" href="/contact">Start a project <b>↗</b></Link></Section>
  </main>;
}
const processStages = [
  { number: "01", tab: "Align", title: "Find the useful problem.", summary: "Start with the work that needs to change: the people involved, the decisions they make, the constraints and the smallest useful outcome.", outputs: ["Problem and context map", "Roles, journeys and constraints", "A practical first decision"], involvement: "You bring the context; we turn it into a direction that is clear enough to act on." },
  { number: "02", tab: "Frame", title: "Make the scope useful.", summary: "Turn the direction into a focused product plan — what matters first, what can wait and what a working first release needs to prove.", outputs: ["Priorities and release scope", "Core flows and success criteria", "A shared delivery plan"], involvement: "The scope stays visible, so every decision can be weighed against the real need." },
  { number: "03", tab: "Shape", title: "Design the work, not just the screen.", summary: "Shape information, states and interactions around what people actually need to do, before adding visual polish for its own sake.", outputs: ["Journey and interface direction", "Key screens and product states", "Interaction rules worth building"], involvement: "You review the meaningful decisions early, while they are still quick to improve." },
  { number: "04", tab: "Build", title: "Build the connected system.", summary: "Bring the product to life as one system: interface, backend, database, permissions, integrations and the operational details around them.", outputs: ["Working product increments", "Technical foundations that fit", "Visible progress to review"], involvement: "Short review points keep the work grounded without turning every decision into a meeting." },
  { number: "05", tab: "Verify", title: "Check the paths that matter.", summary: "Test the critical journeys, awkward states and practical edges that can determine whether a product feels reliable in real use.", outputs: ["Critical-path checks", "Refined edge cases", "A release-ready checklist"], involvement: "Feedback is used where it improves the experience or reduces risk — not simply collected." },
  { number: "06", tab: "Release", title: "Launch with a clear next step.", summary: "Prepare the handoff and release path, then learn from use so the next improvement follows evidence rather than noise.", outputs: ["Deployment and handoff path", "A usable product baseline", "A focused next-step view"], involvement: "You leave with a product that is ready to use and a clearer view of what should happen next." },
] as const;

function ProcessPage() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = processStages[activeStage];
  return <main className="portfolio-page portfolio-container process-page">
    <Section eyebrow="PROCESS / A DIRECT WAY OF WORKING" title="A clear route from problem to product." className="process-page-hero">
      <div className="process-hero-body"><p className="lead">One person stays close to the useful decisions — product direction, experience, engineering and release — so the work stays connected from the first conversation onwards.</p><div className="process-hero-actions"><Link className="button primary" href="/contact">Start a project <b>↗</b></Link><Link className="button secondary" href="/work">See the work <b>→</b></Link></div></div>
      <div className="process-stage-tabs" role="tablist" aria-label="Explore the product development process">{processStages.map((item, index) => <button key={item.tab} id={`process-stage-tab-${index}`} type="button" role="tab" aria-selected={activeStage === index} aria-controls="process-stage-panel" className={activeStage === index ? "active" : ""} onClick={() => setActiveStage(index)}><span>{item.number}</span><b>{item.tab}</b></button>)}</div>
      <section id="process-stage-panel" className="process-stage-detail" role="tabpanel" aria-labelledby={`process-stage-tab-${activeStage}`}>
        <div className="process-stage-intro"><span>{stage.number} / {stage.tab}</span><h3>{stage.title}</h3><p>{stage.summary}</p></div>
        <div className="process-stage-output"><span>What takes shape</span><ul>{stage.outputs.map((output) => <li key={output}>{output}</li>)}</ul></div>
        <div className="process-stage-involvement"><span>How we work together</span><p>{stage.involvement}</p></div>
      </section>
    </Section>
    <Section eyebrow="WHAT STAYS CLEAR" title="The work has a shared centre of gravity." className="process-principles-section">
      <div className="process-principles"><article><span>01</span><h3>One connected view</h3><p>Product, design and engineering inform each other instead of being handed between separate stages.</p></article><article><span>02</span><h3>Useful visibility</h3><p>You see the decisions, progress and trade-offs that matter — without a performance of unnecessary process.</p></article><article><span>03</span><h3>Real-world fit</h3><p>Scope and technology follow the people, operations and constraints the product actually has to support.</p></article></div>
    </Section>
    <Section className="contact-cta process-contact-cta"><span>READY WHEN YOU ARE</span><h2>Bring the context.<br />We&apos;ll find the next useful step.</h2><p>A first message does not need to be a finished brief. The problem, the people involved and the change you want to make are enough to begin.</p><Link className="button primary" href="/contact">Start a project <b>↗</b></Link></Section>
  </main>;
}

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
