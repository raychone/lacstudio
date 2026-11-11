"use client";

import { createContext, useContext, useEffect, useId, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import Image from "next/image";
import { DesignProvider, useDesign } from "@/design-system/engine/provider";
import { designIds, designRegistry, type DesignId } from "@/design-system/engine/registry";
import { featuredProjects, publishedProjects, type PublicProject } from "@/content/projects";
import { defaultLocale, locales, localeNames, localizePath, type Locale } from "@/content/i18n/config";
import { getPortfolioCopy, isLocaleReady, type PortfolioCopy } from "@/content/i18n/portfolio";
import { localizeProject } from "@/content/i18n/project-content";
import { localizeServices } from "@/content/i18n/service-content";

// Vinext's experimental RSC prefetcher can fail after an otherwise valid Vercel
// deployment. Portfolio navigation does not need client-side data prefetching,
// so normal document links give every route a dependable, accessible transition.
const PortfolioLocaleContext = createContext<{ locale: Locale; copy: PortfolioCopy }>({ locale: defaultLocale, copy: getPortfolioCopy(defaultLocale) });

function usePortfolioLocale() { return useContext(PortfolioLocaleContext); }

function Link({ href, ...props }: ComponentPropsWithoutRef<"a"> & { href: string }) {
  const { locale } = usePortfolioLocale();
  const isPortfolioRoute = href.startsWith("/") && !href.startsWith("/lab") && !href.startsWith("/api");
  return <a href={isPortfolioRoute ? localizePath(locale, href) : href} {...props} />;
}

type Page = "home" | "work" | "services" | "about" | "process" | "contact" | "privacy" | "legal" | "case-study" | "not-found";

const navigation: Array<[keyof PortfolioCopy["navigation"], Page]> = [["work", "work"], ["services", "services"], ["process", "process"], ["about", "about"]];
const hrefFor = (page: Page) => page === "home" ? "/" : page === "case-study" ? "/work" : `/${page}`;
const expertise = [
  ["Authentication & roles", "Permissions and access designed around the people who need to use the product."],
  ["Databases", "Information architecture and data models that support day-to-day operations."],
  ["API architecture", "Reliable connections between the product, its data and the services it relies on."],
  ["Background processing", "Queues and scheduled tasks for dependable operational handoffs."],
  ["Offline synchronization", "Local-first behaviour for work that cannot depend on a connection."],
  ["Notifications", "Messages, delivery paths and status updates at the right moment."],
  ["Integrations", "Careful links to the tools and services a team already uses."],
  ["Testing & deployment", "Practical quality checks and a considered path to release."],
];

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

function BrandLogo({ priority = false }: { priority?: boolean }) {
  const { activeDesign } = useDesign();
  const isPlayground = activeDesign.id === "playground";
  return <span className="brand-logo" aria-hidden="true"><Image className="brand-logo-current" src={isPlayground ? "/branding/lac-studio-playground.png" : "/branding/lac-studio-black.png"} alt="" width={1774} height={887} sizes="94px" quality={80} priority={priority} /></span>;
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

function pagePath(page: Page, project?: PublicProject) {
  if (page === "home") return "/";
  if (page === "case-study" && project) return `/work/${project.slug}`;
  return hrefFor(page);
}

function LanguageSwitcher({ page, project, mobile = false }: { page: Page; project?: PublicProject; mobile?: boolean }) {
  const { locale, copy } = usePortfolioLocale();
  const path = pagePath(page, project);
  const switchLocale = (event: React.MouseEvent<HTMLAnchorElement>, target: Locale) => {
    event.preventDefault();
    const url = new URL(window.location.href);
    url.pathname = localizePath(target, path);
    window.location.assign(url);
  };
  return <div className={`portfolio-language ${mobile ? "portfolio-language-mobile" : ""}`} role="group" aria-label={copy.language.label}>
    <span className="portfolio-language-label">{copy.language.label}</span>
    <div className="portfolio-language-options">{locales.map((target) => {
      const active = target === locale;
      const ready = isLocaleReady(target);
      const label = target.toUpperCase();
      return ready ? <a key={target} href={localizePath(target, path)} aria-current={active ? "page" : undefined} className={active ? "active" : ""} onClick={(event) => switchLocale(event, target)}>{label}</a> : <span key={target} aria-disabled="true" title={`${localeNames[target]} — ${copy.language.unavailable}`}>{label}</span>;
    })}</div>
  </div>;
}

function Header({ page, project }: { page: Page; project?: PublicProject }) {
  const [open, setOpen] = useState(false);
  const { effectsEnabled, setEffectsEnabled } = useDesign();
  const { copy } = usePortfolioLocale();
  return <header className="portfolio-header"><div className="portfolio-container header-inner"><Link className="portfolio-brand" href="/" aria-label={copy.navigation.homeLabel}><BrandLogo priority /></Link><nav className={open ? "portfolio-nav open" : "portfolio-nav"} aria-label={copy.navigation.mainLabel}>{navigation.map(([label, target]) => <Link key={target} className={page === target || (page === "case-study" && target === "work") ? "active" : ""} href={hrefFor(target)} onClick={() => setOpen(false)}>{copy.navigation[label]}</Link>)}<Link href="/contact" className="header-contact" onClick={() => setOpen(false)}>{copy.navigation.discuss}</Link><LanguageSwitcher page={page} project={project} mobile /></nav><LanguageSwitcher page={page} project={project} /><button className="portfolio-effect-toggle" type="button" aria-pressed={effectsEnabled} aria-label={`${effectsEnabled ? "Disable" : "Enable"} interface effects`} onClick={() => setEffectsEnabled(!effectsEnabled)}><span aria-hidden="true">✦</span><b>{effectsEnabled ? "FX on" : "FX off"}</b></button><PortfolioDesignSwitcher /><button className="mobile-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button></div></header>;
}

function Footer() {
  const { copy } = usePortfolioLocale();
  return <footer className="portfolio-footer"><div className="portfolio-container footer-grid"><div className="footer-brand"><Link className="portfolio-brand" href="/" aria-label={copy.navigation.homeLabel}><BrandLogo /></Link><p>{copy.footer.description}</p></div><nav aria-label={copy.footer.explore}><span>{copy.footer.explore}</span><Link href="/work">{copy.navigation.work}</Link><Link href="/services">{copy.navigation.services}</Link></nav><nav aria-label={copy.footer.studio}><span>{copy.footer.studio}</span><Link href="/about">{copy.navigation.about}</Link><Link href="/process">{copy.navigation.process}</Link></nav><nav aria-label={copy.footer.contact}><span>{copy.footer.contact}</span><Link href="/contact">{copy.shared.discussProject}</Link><Link href="/privacy">{copy.footer.privacy}</Link><Link href="/legal">{copy.footer.legal}</Link></nav><div className="footer-note"><span>© {new Date().getFullYear()} LAC STUDIO</span><span>{copy.footer.independent}</span></div></div></footer>;
}

function Section({ eyebrow, title, children, className = "", id }: { eyebrow?: string; title?: string; children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`portfolio-section ${className}`}>{(eyebrow || title) && <div className="portfolio-section-heading">{eyebrow && <span>{eyebrow}</span>}{title && <h2>{title}</h2>}</div>}{children}</section>;
}

function ProjectPreview({ project, compact = false }: { project: PublicProject; compact?: boolean }) {
  const { activeDesign } = useDesign();
  const { copy, locale } = usePortfolioLocale();
  const localized = localizeProject(project, locale);
  const designQuery = `?design=${activeDesign.id}`;
  return <article className={`project-card ${compact ? "project-card-compact" : ""}`}><div className="project-art" aria-label={`${localized.title} product preview`}>{localized.thumbnail ? <Image src={localized.thumbnail} alt="" fill sizes="(max-width: 840px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <><span>Media to be supplied</span><i /><b>{localized.title.slice(0, 2).toUpperCase()}</b></>}</div><div className="project-card-copy"><span>{localized.category}</span><h3>{localized.title}</h3><p>{localized.summary}</p>{compact && localized.problem && <p className="project-compact-problem"><b>{copy.shared.addresses}</b> {localized.problem}</p>}{!compact && localized.problem && <div className="project-problem"><b>{copy.shared.theChallenge}</b><p>{localized.problem}</p></div>}<ul>{localized.technologies.slice(0, compact ? 2 : 3).map((item) => <li key={item}>{item}</li>)}</ul><div className="project-card-links">{!compact && (localized.liveUrl ? <a href={localized.liveUrl} target="_blank" rel="noreferrer">{copy.shared.openLiveProject} <b>↗</b></a> : localized.demoOnRequest ? <Link href={`/contact${designQuery}`}>{copy.shared.askAboutDemo} <b>↗</b></Link> : null)}<Link href={`/work/${localized.slug}${designQuery}`}>{compact ? copy.shared.exploreProject : copy.shared.readCaseStudy} <b>→</b></Link></div>{!compact && localized.demoNotice && <small className="project-demo-notice">{localized.demoNotice}</small>}</div></article>;
}

function UnpublishedWork() {
  return <div className="empty-published"><span>CASE STUDIES IN REVIEW</span><h3>Each project is published with enough context to be understood.</h3><p>LAC STUDIO does not publish confidential detail, invented outcomes or visuals without approval. More project stories will appear when they are ready to share.</p><Link className="text-link" href="/contact">Discuss your project ↗</Link></div>;
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

function BackButton() {
  const goBack = () => window.history.back();
  return <button className="button secondary contact-back" type="button" onClick={goBack}>← Back</button>;
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
  { id: "slot-01", eyebrow: "CASE STUDY SLOT / 01", title: "A product story with the right context.", summary: "This space is reserved for an approved case study with a verified brief, scope, visual direction and evidence.", meta: "APPROVED MEDIA / PENDING", placeholder: true },
  { id: "slot-02", eyebrow: "CASE STUDY SLOT / 02", title: "An operational system, explained clearly.", summary: "The work page presents the context behind an interface, rather than only an isolated screen or an unverified claim.", meta: "APPROVED MEDIA / PENDING", placeholder: true },
  { id: "slot-03", eyebrow: "CASE STUDY SLOT / 03", title: "A workflow story, when it is ready.", summary: "Each public story is introduced only after its description, media and publishing permission have been confirmed.", meta: "APPROVED MEDIA / PENDING", placeholder: true },
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

function WorkFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const { copy } = usePortfolioLocale();
  return <div className="work-faq-list">{copy.work.faq.map(([question, answer], index) => {
    const expanded = open === index;
    const panelId = `work-faq-${index}`;
    return <article className={expanded ? "open" : ""} key={question}><button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? null : index)}><span>{String(index + 1).padStart(2, "0")}</span><b>{question}</b><i aria-hidden="true">{expanded ? "−" : "+"}</i></button><div id={panelId} hidden={!expanded}><p>{answer}</p></div></article>;
  })}</div>;
}

function HomePage() {
  const { copy } = usePortfolioLocale();
  const content = copy.home;
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "LAC STUDIO", description: content.schemaDescription }) }} />
    <section className="portfolio-hero home-hero"><div className="portfolio-container hero-grid"><div className="hero-copy"><span className="eyebrow">{content.eyebrow}</span><h1><span className="hero-title-lead">{content.titleLead}</span><br /><em>{content.titleEmphasis}</em></h1><p>{content.lead}</p><div className="hero-actions"><Link className="button primary" href="/contact">{content.primaryCta} <b>↗</b></Link><Link className="button secondary" href="/work">{content.secondaryCta} <b>→</b></Link></div></div><aside className="hero-preview home-project-preview home-journey-preview" aria-label={content.imageLabel}><Image src="/branding/lac-studio-hero-healthcare.webp" alt={content.imageAlt} fill priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 62vw, 760px" /></aside><ul className="hero-proof" aria-label={content.proofLabel}>{content.proof.map(([title, description]) => <li key={title}><b>{title}</b><span>{description}</span></li>)}</ul></div></section>
    <div className="portfolio-container">
      <Section eyebrow={copy.shared.selectedWork} title={content.selectedTitle} className="home-selected-section">{featuredProjects.length ? <><div className="project-grid home-selected-grid">{featuredProjects.slice(1, 4).map((project) => <ProjectPreview project={project} compact key={project.id} />)}</div><Link className="home-all-work" href="/work">{content.allWork} <b>→</b></Link></> : <UnpublishedWork />}</Section>
      <Section eyebrow={content.focusEyebrow} title={content.focusTitle} className="home-focus-section"><div className="home-focus-grid">{content.focus.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div></Section>
      <Section eyebrow={content.processEyebrow} title={content.processTitle} className="home-process-section"><ol className="process-row">{content.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b><small>{content.processDetails[index]}</small></li>)}</ol><div className="home-section-actions"><Link className="button primary home-section-cta" href="/process">{content.processCta} <b>↗</b></Link></div></Section>
      <Section eyebrow={content.founderEyebrow} title={content.founderTitle} className="about-preview home-about-preview"><p>{content.founderCopy}</p><div className="home-section-actions"><Link className="button primary home-section-cta" href="/about">{content.founderCta} <b>→</b></Link><Link className="button secondary home-section-cta" href="/services">{content.servicesCta} <b>→</b></Link></div></Section>
      <Section className="contact-cta home-contact-cta"><span>05 / {copy.shared.startConversation}</span><h2>{content.contactTitle.split("\n").map((part, index) => <span key={part}>{index ? <br /> : null}{part}</span>)}</h2><p>{content.contactCopy}</p><Link className="button primary" href="/contact">{content.contactCta} <b>↗</b></Link></Section>
    </div>
  </>;
}

function WorkPage() {
  return <main className="portfolio-page portfolio-container">
    <Section eyebrow="01 / FEATURED WORK" title="Built for the work behind the screen." className="work-featured-section"><FeaturedWorkCarousel /></Section>
    <Section eyebrow="02 / PUBLIC PROJECT INDEX" title="Case studies with the context behind the interface." className="work-gallery-section"><p className="page-intro">These are actual software projects across healthcare, laboratory operations, restaurants, field work, hospitality and commerce. Each story explains the product, the challenge it addresses and the public evidence available.</p><div id="publication-policy"><div className="project-grid work-project-grid">{publishedProjects.map((project) => <ProjectPreview key={project.id} project={project} />)}</div></div></Section>
    <Section eyebrow="03 / QUESTIONS" title="Where a project can begin." className="work-faq-section"><WorkFaq /></Section>
    <Section className="contact-cta work-contact-cta"><span>04 / START A CONVERSATION</span><h2>Have a related<br />challenge?</h2><p>Bring the context. Together, we can identify the next practical step.</p><Link className="button primary" href="/contact">Discuss your project <b>→</b></Link></Section>
  </main>;
}

function ServicesPage() {
  const { copy, locale } = usePortfolioLocale();
  const content = copy.services;
  const localizedServices = localizeServices(locale);
  return <main className="portfolio-page portfolio-container services-page">
    <Section eyebrow={content.eyebrow} title={content.title} className="services-hero-section">
      <div className="services-hero-copy">
        <p className="lead">{content.lead}</p>
        <p>{content.body}</p>
        <div className="services-hero-actions"><Link className="button primary" href="/contact">{copy.shared.discussProject} <b>↗</b></Link><Link className="button secondary" href="/work">{content.workCta} <b>→</b></Link></div>
      </div>
      <aside className="services-scope" aria-label={content.scopeLabel}><span>{content.scopeEyebrow}</span><b>Scope<br />Interface<br />Engineering<br /><em>Release</em></b><small>{content.scopeCopy}</small></aside>
    </Section>
    <Section eyebrow={content.offeringsEyebrow} title={content.offeringsTitle} className="services-offerings-section">
      <p className="page-intro">{content.offeringsCopy}</p>
      <div className="services-grid">{localizedServices.map(([title, description, useCases], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p><small>{useCases}</small></article>)}</div>
    </Section>
    <Section eyebrow="A GOOD FIT WHEN" title="The problem is real—even if the brief is not finished yet." className="services-fit-section">
      <div className="services-fit-grid">
        <article><span>01</span><h3>Work is spread across too many tools</h3><p>Bring scattered documents, manual updates and unclear handoffs into one product with a shared operational view.</p></article>
        <article><span>02</span><h3>A service needs a better customer journey</h3><p>Turn a valuable service into an experience people can understand and use across desktop and mobile.</p></article>
        <article><span>03</span><h3>A team needs software that fits the operation</h3><p>Design roles, workflows, data and integrations around the work that happens before and after a screen is opened.</p></article>
      </div>
    </Section>
    <Section eyebrow="HOW AN ENGAGEMENT WORKS" title="Start focused. Build with visibility." className="services-delivery-section">
      <ol className="services-delivery">
        <li><span>01</span><div><h3>Find the right scope</h3><p>Clarify the people, workflow and first outcome worth building.</p></div></li>
        <li><span>02</span><div><h3>Shape and build the product</h3><p>Keep the important product and technical choices visible as the work takes shape.</p></div></li>
        <li><span>03</span><div><h3>Release with a next step</h3><p>Launch a dependable baseline, then use what is learned to guide the next improvement.</p></div></li>
      </ol>
    </Section>
    <Section className="contact-cta services-contact-cta"><span>START A CONVERSATION</span><h2>Have work that needs<br />better software around it?</h2><p>Bring the context, the constraint or the unfinished idea. I&apos;ll help you identify the next practical step.</p><Link className="button primary" href="/contact">Tell me what you&apos;re building <b>↗</b></Link></Section>
  </main>;
}
function AboutPage() {
  return <main className="portfolio-page portfolio-container about-page">
    <Section eyebrow="ABOUT / LAC STUDIO" title="Software built with attention to people and the work they need to do." className="about-intro-section">
      <div className="about-profile">
        <div className="about-profile-copy">
          <p className="lead">I&apos;m Andrei Lucaciu, an independent software developer who connects how people work with the technology they need to use.</p>
          <p>Before software, I trained and worked in psychology. That experience still shapes how I approach a project: I pay attention to the people involved, the friction in a process, the questions worth asking and the decisions an interface needs to make easier.</p>
          <p>For the past seven years, after more than three decades working with computers, I have designed and built web, mobile and operational software. Understanding people makes better software possible. Engineering makes that understanding practical—through interfaces, workflows, data, integrations and products that are ready to use.</p>
        </div>
        <figure className="about-portrait">
          <Image src="/branding/lac-studio-founder.png" alt="Founder of LAC Studio" width={264} height={290} sizes="(max-width: 700px) 180px, 264px" priority />
          <figcaption><strong>Lucaciu Andrei Codrin</strong><span>PSYCHOLOGY → SOFTWARE</span><b>30+ years with computers.<br />7 years building professionally.</b></figcaption>
        </figure>
      </div>
    </Section>
    <Section eyebrow="WHAT GUIDES THE WORK" title="Good software respects the people using it." className="about-principles-section">
      <div className="about-principles">
        <article><span>01</span><h3>Understand before adding</h3><p>Start with the actual task, the people doing it and the friction worth removing — not a list of features in isolation.</p></article>
        <article><span>02</span><h3>Design the connected whole</h3><p>Interface, workflow, data, roles and integrations are treated as one product, because users experience them that way.</p></article>
        <article><span>03</span><h3>Make room for craft</h3><p>I enjoy turning an unclear idea into something tangible: a considered interface, a dependable system or a visual detail that gives the work character.</p></article>
      </div>
    </Section>
    <Section eyebrow="CAPABILITIES / END TO END" title="One person, close to the work that matters." className="about-capabilities-section">
      <p className="page-intro">You work directly with the person shaping the product direction and building the software. It keeps feedback direct, choices connected and ownership close to the work.</p>
      <div className="expertise-grid">{expertise.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </Section>
    <Section className="contact-cta about-contact-cta"><span>START A CONVERSATION</span><h2>Bring the problem.<br />We&apos;ll shape the right product.</h2><p>A first conversation can begin with the work that needs to change—no finished brief required.</p><Link className="button primary" href="/contact">Start a conversation <b>↗</b></Link></Section>
  </main>;
}
const processStages = [
  { number: "01", tab: "Align", title: "Understand the problem worth solving.", summary: "Start with the work that needs to change: the people involved, the constraints they face and the smallest outcome worth pursuing first.", outputs: ["Problem and context map", "Roles, journeys and constraints", "A practical starting point"], involvement: "You bring the context; together we turn it into a direction that is ready to act on." },
  { number: "02", tab: "Frame", title: "Define a focused first scope.", summary: "Turn the direction into a product plan: what matters first, what can wait and what an initial release needs to prove.", outputs: ["Priorities and release scope", "Core flows and success criteria", "A shared delivery plan"], involvement: "The scope stays visible, so each choice can be weighed against the real need." },
  { number: "03", tab: "Shape", title: "Design the work, not just the screen.", summary: "Shape information, states and interactions around what people actually need to do before adding visual polish for its own sake.", outputs: ["Journey and interface direction", "Key screens and product states", "Interaction rules worth building"], involvement: "You review the important choices early, while they are still quick to improve." },
  { number: "04", tab: "Build", title: "Build the connected product.", summary: "Bring the product to life as one whole: interface, backend, database, permissions, integrations and the operational details around them.", outputs: ["Working product increments", "Technical foundations that fit", "Visible progress to review"], involvement: "Short review points keep the work grounded without turning every choice into a meeting." },
  { number: "05", tab: "Verify", title: "Check the paths that matter.", summary: "Test the critical journeys, awkward states and practical edges that determine whether a product feels dependable in real use.", outputs: ["Critical-path checks", "Refined edge cases", "A release-ready checklist"], involvement: "Feedback is used where it improves the experience or reduces risk—not simply collected." },
  { number: "06", tab: "Release", title: "Release with a practical next step.", summary: "Prepare the handoff and release path, then learn from use so the next improvement follows evidence rather than noise.", outputs: ["Deployment and handoff path", "A working product baseline", "A focused next-step view"], involvement: "You leave with a product that is ready to use and a clearer view of what should happen next." },
] as const;

function ProcessPage() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = processStages[activeStage];
  return <main className="portfolio-page portfolio-container process-page">
    <Section eyebrow="PROCESS / A DIRECT WAY OF WORKING" title="A clear route from problem to product." className="process-page-hero">
      <div className="process-hero-body"><p className="lead">One person stays close to product direction, interface, engineering and release, so the work remains connected from the first conversation onward.</p><div className="process-hero-actions"><Link className="button primary" href="/contact">Discuss your project <b>↗</b></Link><Link className="button secondary" href="/work">Explore the work <b>→</b></Link></div></div>
      <div className="process-stage-tabs" role="tablist" aria-label="Explore the product development process">{processStages.map((item, index) => <button key={item.tab} id={`process-stage-tab-${index}`} type="button" role="tab" aria-selected={activeStage === index} aria-controls="process-stage-panel" className={activeStage === index ? "active" : ""} onClick={() => setActiveStage(index)}><span>{item.number}</span><b>{item.tab}</b></button>)}</div>
      <section id="process-stage-panel" className="process-stage-detail" role="tabpanel" aria-labelledby={`process-stage-tab-${activeStage}`}>
        <div className="process-stage-intro"><span>{stage.number} / {stage.tab}</span><h3>{stage.title}</h3><p>{stage.summary}</p></div>
        <div className="process-stage-output"><span>What takes shape</span><ul>{stage.outputs.map((output) => <li key={output}>{output}</li>)}</ul></div>
        <div className="process-stage-involvement"><span>How we work together</span><p>{stage.involvement}</p></div>
      </section>
    </Section>
    <Section eyebrow="WHAT STAYS CONNECTED" title="One product view from first conversation to release." className="process-principles-section">
      <div className="process-principles"><article><span>01</span><h3>One connected view</h3><p>Product, design and engineering inform each other instead of being handed between separate stages.</p></article><article><span>02</span><h3>Meaningful visibility</h3><p>You see the progress and trade-offs that matter without a performance of unnecessary process.</p></article><article><span>03</span><h3>Fit for the operation</h3><p>Scope and technology follow the people, operations and constraints the product actually has to support.</p></article></div>
    </Section>
    <Section className="contact-cta process-contact-cta"><span>READY WHEN YOU ARE</span><h2>Bring the context.<br />We&apos;ll find the next practical step.</h2><p>A first message does not need to be a finished brief. The problem, the people involved and the change you want to make are enough to begin.</p><Link className="button primary" href="/contact">Start a conversation <b>↗</b></Link></Section>
  </main>;
}

function ContactPage() {
  const [projectType, setProjectType] = useState(""); const [budget, setBudget] = useState(""); const [timeline, setTimeline] = useState("");
  return <main className="portfolio-page portfolio-container"><Section eyebrow="CONTACT / START A PROJECT" title="Tell me what needs to work better."><div className="two-column"><div className="contact-intro"><p className="lead">You do not need a finished brief. A few lines about the problem, the people involved and the change you want to make are enough to begin.</p><p>For now, the reliable way to reach me is by email. I&apos;ll read your message personally and reply from there.</p><a className="contact-email" href="mailto:codrin.lucaciu@gmail.com">codrin.lucaciu@gmail.com <b>↗</b></a><BackButton /></div><form className="contact-form" onSubmit={(event) => event.preventDefault()} aria-describedby="contact-form-notice"><label>Name<input name="name" autoComplete="name" /></label><label>Email<input name="email" type="email" autoComplete="email" /></label><label>Project type<PortfolioSelect name="projectType" ariaLabel="Project type" value={projectType} onChange={setProjectType} placeholder="Choose a direction" options={[{ value: "Web application", label: "Web application" }, { value: "Android application", label: "Android application" }, { value: "Desktop application", label: "Desktop application" }, { value: "SaaS platform", label: "SaaS platform" }, { value: "Business system", label: "Business system" }, { value: "Website", label: "Website" }, { value: "Other software", label: "Other software" }]} /></label><label>Budget range<PortfolioSelect name="budget" ariaLabel="Budget range" value={budget} onChange={setBudget} placeholder="Prefer not to say" options={[{ value: "", label: "Prefer not to say" }, { value: "Under €5,000", label: "Under €5,000" }, { value: "€5,000–€15,000", label: "€5,000–€15,000" }, { value: "€15,000+", label: "€15,000+" }]} /></label><label>Timeline<PortfolioSelect name="timeline" ariaLabel="Timeline" value={timeline} onChange={setTimeline} placeholder="Flexible" options={[{ value: "", label: "Flexible" }, { value: "Within 1 month", label: "Within 1 month" }, { value: "1–3 months", label: "1–3 months" }, { value: "More than 3 months", label: "More than 3 months" }]} /></label><label className="wide">Project description<textarea name="message" placeholder="What are you trying to build, improve or connect?" /></label><label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label><small id="contact-form-notice" className="wide">The inquiry form is being connected and cannot send messages yet. Please use the email address above. See <Link href="/privacy">Privacy</Link>.</small><button className="button primary" type="button" disabled>Inquiry form unavailable</button></form></div></Section></main>;
}
function LegalPage({ privacy }: { privacy: boolean }) { return <main className="portfolio-page portfolio-container"><Section eyebrow={privacy ? "PRIVACY" : "LEGAL"} title={privacy ? "Privacy, without assumptions." : "Legal information to complete before publication."}><div className="legal-copy">{privacy ? <><p>LAC STUDIO does not currently install analytics. You can reach the studio directly at the published email address. The inquiry form is visible for planning purposes but cannot send messages until a delivery provider is connected.</p><p>When form delivery is configured, this notice must be updated with the data controller, contact method, processing purpose, retention period, legal basis and provider details.</p></> : <><p>Business registration details, registered address, governing-law details and other legally required information have not yet been supplied for publication.</p><p>Before wider public promotion, replace this notice with verified information appropriate to the studio&apos;s legal situation and the markets it serves.</p></>}</div></Section></main>; }
function NotFoundPage() { return <main className="portfolio-page portfolio-container"><Section eyebrow="404 / NOT FOUND" title="That page could not be found."><p className="page-intro">It may have moved, be unpublished or no longer be available. You can return to the portfolio to explore the published work.</p><Link className="button primary" href="/work">Explore the work <b>→</b></Link></Section></main>; }

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
    <Section id="workflow" eyebrow="01 / PRODUCT OVERVIEW" title="Built around the work people need to do."><div className="case-overview"><div><p className="lead">{project.longDescription ?? project.summary}</p>{project.problem && <div className="case-problem"><span>The challenge</span><p>{project.problem}</p></div>}</div><ul>{(project.features ?? []).map((feature) => <li key={feature}>{feature}</li>)}</ul></div><CaseStudyNavigation previous={previous} next={next} designQuery={designQuery} location="workflow" /></Section>
    <Section id="evidence" eyebrow="02 / TECHNICAL EVIDENCE" title="The structure behind the interface."><div className="case-evidence"><article><span>TECHNICAL FOCUS</span><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span>IMPLEMENTATION</span><ul>{(project.technicalHighlights ?? []).map((item) => <li key={item}>{item}</li>)}</ul></article>{project.architecture && <article className="case-architecture"><span>ARCHITECTURE</span><p>{project.architecture}</p></article>}</div><CaseStudyNavigation previous={previous} next={next} designQuery={designQuery} location="evidence" /></Section>
    <Section className="contact-cta"><h2>Have a related<br />challenge?</h2><Link className="button primary" href="/contact">Discuss your project <b>↗</b></Link></Section>
  </main>;
}

function PortfolioContent({ page, project }: { page: Page; project?: PublicProject }) {
  const { activeDesign, reducedMotion, effectsEnabled } = useDesign();
  return <div className={`portfolio-shell portfolio-${activeDesign.id} ${reducedMotion ? "reduce-motion" : ""}`} data-design={activeDesign.id} data-effects={effectsEnabled ? "on" : "off"}><Header page={page} project={project} /><main>{page === "home" ? <HomePage /> : page === "work" ? <WorkPage /> : page === "services" ? <ServicesPage /> : page === "about" ? <AboutPage /> : page === "process" ? <ProcessPage /> : page === "contact" ? <ContactPage /> : page === "privacy" ? <LegalPage privacy /> : page === "legal" ? <LegalPage privacy={false} /> : page === "not-found" ? <NotFoundPage /> : project ? <CaseStudy project={project} /> : <WorkPage />}</main><Footer /><PortfolioAmbientEffect design={activeDesign.id} reducedMotion={reducedMotion} enabled={effectsEnabled} /></div>;
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

export function PortfolioApp({ page, project, locale = defaultLocale }: { page: Page; project?: PublicProject; locale?: Locale }) {
  const copy = getPortfolioCopy(locale);
  const localizedProject = project ? localizeProject(project, locale) : undefined;
  return <PortfolioLocaleContext.Provider value={{ locale, copy }}><LegacyLabRedirect><DesignProvider scope="portfolio"><PortfolioContent page={page} project={localizedProject} /></DesignProvider></LegacyLabRedirect></PortfolioLocaleContext.Provider>;
}
