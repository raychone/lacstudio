"use client";

import { createContext, useContext, useEffect, useId, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { DesignProvider, useDesign } from "@/design-system/engine/provider";
import { designIds, designRegistry, type DesignId } from "@/design-system/engine/registry";
import { featuredProjects, publishedProjects, type PublicProject } from "@/content/projects";
import { defaultLocale, locales, localeNames, localizePath, type Locale } from "@/content/i18n/config";
import { isLocaleReady, resolvePortfolioContent, type PortfolioCopy } from "@/content/i18n/portfolio";
import { localizeProject } from "@/content/i18n/project-content";
import { localizeServices } from "@/content/i18n/service-content";

// Vinext's experimental RSC prefetcher can fail after an otherwise valid Vercel
// deployment. Portfolio navigation does not need client-side data prefetching,
// so normal document links give every route a dependable, accessible transition.
const PortfolioLocaleContext = createContext(resolvePortfolioContent(defaultLocale));

function usePortfolioLocale() { return useContext(PortfolioLocaleContext); }

function Link({ href, ...props }: ComponentPropsWithoutRef<"a"> & { href: string }) {
  const { locale } = usePortfolioLocale();
  const isPortfolioRoute = href.startsWith("/") && !href.startsWith("/lab") && !href.startsWith("/api");
  return <a href={isPortfolioRoute ? localizePath(locale, href) : href} {...props} />;
}

type Page = "home" | "work" | "services" | "about" | "process" | "contact" | "privacy" | "legal" | "case-study" | "not-found";

const navigation: Array<[keyof PortfolioCopy["navigation"], Page]> = [["work", "work"], ["services", "services"], ["process", "process"], ["about", "about"]];
const hrefFor = (page: Page) => page === "home" ? "/" : page === "case-study" ? "/work" : `/${page}`;
function PortfolioDesignSwitcher() {
  const { activeDesign, setActiveDesign, restored } = useDesign();
  const { copy } = usePortfolioLocale();
  const activeIndex = designIds.indexOf(activeDesign.id);
  return <div className="portfolio-switcher" role="radiogroup" aria-label={copy.shared.chooseDesignSystem}>
    <span className="portfolio-switcher-label">{copy.shared.design}</span>
    <div className="portfolio-switcher-options" data-active-index={activeIndex} style={{ "--active-index": activeIndex } as React.CSSProperties}><i className="portfolio-switcher-indicator" aria-hidden="true" />{designIds.map((id) => {
      const design = designRegistry[id]; const active = id === activeDesign.id;
      return <button key={id} type="button" role="radio" aria-checked={active} aria-label={`${design.index} ${design.name}`} className={active ? "active" : ""} onClick={() => setActiveDesign(id as DesignId)}><i aria-hidden="true">{design.index}</i><span className="portfolio-switcher-tooltip" role="tooltip">{design.name}</span></button>;
    })}</div>
    <span className="portfolio-switcher-status" aria-live="polite">{restored ? activeDesign.name : copy.shared.loading}</span>
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
  const query = useSearchParams().toString();
  const localeHref = (target: Locale) => `${localizePath(target, path)}${query ? `?${query}` : ""}`;
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
      return ready ? <a key={target} href={localeHref(target)} aria-current={active ? "page" : undefined} className={active ? "active" : ""} onClick={(event) => switchLocale(event, target)}>{label}</a> : <span key={target} aria-disabled="true" title={`${localeNames[target]} — ${copy.language.unavailable}`}>{label}</span>;
    })}</div>
  </div>;
}

function Header({ page, project }: { page: Page; project?: PublicProject }) {
  const [open, setOpen] = useState(false);
  const { effectsEnabled, setEffectsEnabled } = useDesign();
  const { copy } = usePortfolioLocale();
  return <header className="portfolio-header"><div className="portfolio-container header-inner"><Link className="portfolio-brand" href="/" aria-label={copy.navigation.homeLabel}><BrandLogo priority /></Link><nav className={open ? "portfolio-nav open" : "portfolio-nav"} aria-label={copy.navigation.mainLabel}>{navigation.map(([label, target]) => <Link key={target} className={page === target || (page === "case-study" && target === "work") ? "active" : ""} href={hrefFor(target)} onClick={() => setOpen(false)}>{copy.navigation[label]}</Link>)}<Link href="/contact" className="header-contact" onClick={() => setOpen(false)}>{copy.navigation.discuss}</Link><LanguageSwitcher page={page} project={project} mobile /></nav><LanguageSwitcher page={page} project={project} /><button className="portfolio-effect-toggle" type="button" aria-pressed={effectsEnabled} aria-label={effectsEnabled ? copy.shared.disableEffects : copy.shared.enableEffects} onClick={() => setEffectsEnabled(!effectsEnabled)}><span aria-hidden="true">✦</span><b>{effectsEnabled ? copy.shared.effectsOn : copy.shared.effectsOff}</b></button><PortfolioDesignSwitcher /><button className="mobile-menu" type="button" aria-label={copy.shared.toggleNavigation} aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button></div></header>;
}

function Footer() {
  const { copy } = usePortfolioLocale();
  return <footer className="portfolio-footer"><div className="portfolio-container footer-grid"><div className="footer-brand"><Link className="portfolio-brand" href="/" aria-label={copy.navigation.homeLabel}><BrandLogo /></Link><p>{copy.footer.description}</p></div><nav aria-label={copy.footer.explore}><span>{copy.footer.explore}</span><Link href="/work">{copy.navigation.work}</Link><Link href="/services">{copy.navigation.services}</Link></nav><nav aria-label={copy.footer.studio}><span>{copy.footer.studio}</span><Link href="/about">{copy.navigation.about}</Link><Link href="/process">{copy.navigation.process}</Link></nav><nav aria-label={copy.footer.contact}><span>{copy.footer.contact}</span><Link href="/contact">{copy.shared.discussProject}</Link><Link href="/privacy">{copy.footer.privacy}</Link><Link href="/legal">{copy.footer.legal}</Link></nav><div className="footer-note"><span>© {new Date().getFullYear()} LAC STUDIO</span><span>{copy.footer.independent}</span></div></div></footer>;
}

function Section({ eyebrow, title, children, className = "", id, headingLevel = "h2" }: { eyebrow?: string; title?: string; children: ReactNode; className?: string; id?: string; headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return <section id={id} className={`portfolio-section ${className}`}>{(eyebrow || title) && <div className="portfolio-section-heading">{eyebrow && <span>{eyebrow}</span>}{title && <Heading>{title}</Heading>}</div>}{children}</section>;
}

function ProjectPreview({ project, compact = false }: { project: PublicProject; compact?: boolean }) {
  const { activeDesign } = useDesign();
  const { copy, locale } = usePortfolioLocale();
  const localized = localizeProject(project, locale);
  const designQuery = `?design=${activeDesign.id}`;
  return <article className={`project-card ${compact ? "project-card-compact" : ""}`}><div className="project-art" aria-label={`${localized.title} ${copy.shared.productPreview}`}>{localized.thumbnail ? <Image src={localized.thumbnail} alt="" fill sizes="(max-width: 840px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <><span>{copy.shared.mediaToBeSupplied}</span><i /><b>{localized.title.slice(0, 2).toUpperCase()}</b></>}</div><div className="project-card-copy"><span>{localized.category}</span><h3>{localized.title}</h3><p>{localized.summary}</p>{compact && localized.problem && <p className="project-compact-problem"><b>{copy.shared.addresses}</b> {localized.problem}</p>}{!compact && localized.problem && <div className="project-problem"><b>{copy.shared.theChallenge}</b><p>{localized.problem}</p></div>}<ul>{localized.technologies.slice(0, compact ? 2 : 3).map((item) => <li key={item}>{item}</li>)}</ul><div className="project-card-links">{!compact && (localized.liveUrl ? <a href={localized.liveUrl} target="_blank" rel="noreferrer">{copy.shared.openLiveProject} <b>↗</b></a> : localized.demoOnRequest ? <Link href={`/contact${designQuery}`}>{copy.shared.askAboutDemo} <b>↗</b></Link> : null)}<Link href={`/work/${localized.slug}${designQuery}`}>{compact ? copy.shared.exploreProject : copy.shared.readCaseStudy} <b>→</b></Link></div>{!compact && localized.demoNotice && <small className="project-demo-notice">{localized.demoNotice}</small>}</div></article>;
}

function UnpublishedWork() {
  const { copy } = usePortfolioLocale();
  return <div className="empty-published"><span>{copy.shared.caseStudiesInReview}</span><h3>{copy.shared.unpublishedWorkTitle}</h3><p>{copy.shared.unpublishedWorkCopy}</p><Link className="text-link" href="/contact">{copy.shared.discussProject} ↗</Link></div>;
}

type PortfolioSelectOption = { value: string; label: string };

function PortfolioSelect({ name, value, options, placeholder, ariaLabel, ariaDescribedBy, onChange, required = false, invalid = false }: {
  name?: string; value: string; options: readonly PortfolioSelectOption[]; placeholder: string; ariaLabel: string; ariaDescribedBy?: string; onChange: (value: string) => void; required?: boolean; invalid?: boolean;
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
    <button ref={trigger} type="button" role="combobox" aria-label={ariaLabel} aria-describedby={ariaDescribedBy} aria-haspopup="listbox" aria-controls={listboxId} aria-expanded={open} aria-required={required} aria-invalid={invalid} onClick={() => open ? close() : (setOpen(true), focusOption(selectedIndex))} onKeyDown={(event) => {
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
  const { pages } = usePortfolioLocale();
  const label = pages.contact.back;
  const goBack = () => window.history.back();
  return <button className="button secondary contact-back" type="button" onClick={goBack}>{label}</button>;
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

const workPlaceholders = (shared: PortfolioCopy["shared"]): WorkShowcaseSlide[] => shared.workPlaceholders.map((item, index) => ({ id: `slot-${String(index + 1).padStart(2, "0")}`, ...item, placeholder: true }));

function FeaturedWorkCarousel() {
  const { activeDesign } = useDesign();
  const { copy, locale } = usePortfolioLocale();
  const publishedSlides: WorkShowcaseSlide[] = featuredProjects.map((project) => { const localized = localizeProject(project, locale); return { id: localized.id, eyebrow: `${localized.category.toUpperCase()} / ${copy.work.featuredEyebrow.split("/").at(-1)?.trim()}`, title: localized.title, summary: localized.summary, meta: localized.platforms.join(" · ").toUpperCase(), href: `/work/${localized.slug}`, image: localized.heroImage ?? localized.thumbnail }; });
  const slides = publishedSlides.length ? publishedSlides : workPlaceholders(copy.shared);
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

  return <div className="work-carousel" role="region" aria-roledescription="carousel" aria-label={copy.work.featuredTitle} tabIndex={0} onKeyDown={(event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
  }}>
    <div className="work-carousel-viewport" onPointerDown={pointerDown} onPointerUp={pointerUp} onPointerCancel={() => { pointerStart.current = null; }}>
      <article className="work-carousel-slide" aria-roledescription="slide" aria-label={`${activeIndex + 1} / ${slides.length}`}>
        <div className="work-carousel-media" aria-label={active.placeholder ? copy.shared.approvedMediaPlaceholder : `${active.title} ${copy.shared.productPreview}`}>
          {active.image ? <Image src={active.image} alt="" fill sizes="100vw" /> : <><div className="work-carousel-orbit" /><div className="work-carousel-diagonal" /></>}
        </div>
        <div className="work-carousel-copy work-carousel-overlay"><div className="work-carousel-actions"><Link href={actionHref("workflow")} onPointerDown={keepActionClickable}>{copy.shared.workflow} <b>→</b></Link><Link href={actionHref("evidence")} onPointerDown={keepActionClickable}>{copy.shared.evidence} <b>→</b></Link><Link className="primary" href={`/contact?design=${activeDesign.id}`} onPointerDown={keepActionClickable}>{copy.shared.discussProject} <b>↗</b></Link></div></div>
      </article>
    </div>
    <div className="work-carousel-controls">
      <div className="work-carousel-arrows"><button type="button" aria-label={copy.shared.previousFeaturedProject} onClick={() => move(-1)}>←</button><button type="button" aria-label={copy.shared.nextFeaturedProject} onClick={() => move(1)}>→</button><button type="button" className="work-carousel-autoplay" aria-pressed={autoplayPaused} aria-label={autoplayPaused ? copy.shared.resumeFeaturedAutoplay : copy.shared.pauseFeaturedAutoplay} onClick={() => setAutoplayPaused((paused) => !paused)}>{autoplayPaused ? "▶" : "Ⅱ"}</button></div>
      <div className="work-carousel-pagination" role="tablist" aria-label={copy.shared.chooseFeaturedWork} style={{ "--work-active-slide": activeIndex, "--work-slide-count": slides.length } as React.CSSProperties}><i className="work-carousel-pagination-indicator" aria-hidden="true" />{slides.map((slide, index) => <button type="button" key={slide.id} role="tab" aria-selected={index === activeIndex} aria-label={`${copy.shared.showFeaturedWork} ${index + 1}: ${slide.title}`} onClick={() => goTo(index)}><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
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
  return <main>
    <section className="portfolio-hero home-hero"><div className="portfolio-container hero-grid"><div className="hero-copy"><span className="eyebrow">{content.eyebrow}</span><h1><span className="hero-title-lead">{content.titleLead}</span><br /><em>{content.titleEmphasis}</em></h1><p>{content.lead}</p><div className="hero-actions"><Link className="button primary" href="/contact">{content.primaryCta} <b>↗</b></Link><Link className="button secondary" href="/work">{content.secondaryCta} <b>→</b></Link></div></div><aside className="hero-preview home-project-preview home-journey-preview" aria-label={content.imageLabel}><Image src="/branding/lac-studio-hero-healthcare.webp" alt={content.imageAlt} fill priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 62vw, 760px" /></aside><ul className="hero-proof" aria-label={content.proofLabel}>{content.proof.map(([title, description]) => <li key={title}><b>{title}</b><span>{description}</span></li>)}</ul></div></section>
    <div className="portfolio-container">
      <Section eyebrow={copy.shared.selectedWork} title={content.selectedTitle} className="home-selected-section">{featuredProjects.length ? <><div className="project-grid home-selected-grid">{featuredProjects.slice(1, 4).map((project) => <ProjectPreview project={project} compact key={project.id} />)}</div><Link className="home-all-work" href="/work">{content.allWork} <b>→</b></Link></> : <UnpublishedWork />}</Section>
      <Section eyebrow={content.focusEyebrow} title={content.focusTitle} className="home-focus-section"><div className="home-focus-grid">{content.focus.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div></Section>
      <Section eyebrow={content.processEyebrow} title={content.processTitle} className="home-process-section"><ol className="process-row">{content.process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b><small>{content.processDetails[index]}</small></li>)}</ol><div className="home-section-actions"><Link className="button primary home-section-cta" href="/process">{content.processCta} <b>↗</b></Link></div></Section>
      <Section eyebrow={content.founderEyebrow} title={content.founderTitle} className="about-preview home-about-preview"><p>{content.founderCopy}</p><div className="home-section-actions"><Link className="button primary home-section-cta" href="/about">{content.founderCta} <b>→</b></Link><Link className="button secondary home-section-cta" href="/services">{content.servicesCta} <b>→</b></Link></div></Section>
      <Section className="contact-cta home-contact-cta"><span>05 / {copy.shared.startConversation}</span><h2>{content.contactTitle.split("\n").map((part, index) => <span key={part}>{index ? <br /> : null}{part}</span>)}</h2><p>{content.contactCopy}</p><Link className="button primary" href="/contact">{content.contactCta} <b>↗</b></Link></Section>
    </div>
  </main>;
}

function WorkPage() {
  const { copy } = usePortfolioLocale();
  const content = copy.work;
  return <main className="portfolio-page portfolio-container">
    <Section eyebrow={content.featuredEyebrow} title={content.featuredTitle} headingLevel="h1" className="work-featured-section"><FeaturedWorkCarousel /></Section>
    <Section eyebrow={content.galleryEyebrow} title={content.galleryTitle} className="work-gallery-section"><p className="page-intro">{content.galleryIntro}</p><div id="publication-policy"><div className="project-grid work-project-grid">{publishedProjects.map((project) => <ProjectPreview key={project.id} project={project} />)}</div></div></Section>
    <Section eyebrow={content.faqEyebrow} title={content.faqTitle} className="work-faq-section"><WorkFaq /></Section>
    <Section className="contact-cta work-contact-cta"><span>04 / {copy.shared.startConversation}</span><h2>{content.contactTitle.split("\n").map((part, index) => <span key={part}>{index ? <br /> : null}{part}</span>)}</h2><p>{content.contactCopy}</p><Link className="button primary" href="/contact">{copy.shared.discussProject} <b>→</b></Link></Section>
  </main>;
}

function ServicesPage() {
  const { copy, pages, locale } = usePortfolioLocale();
  const content = copy.services;
  const page = pages.services;
  const localizedServices = localizeServices(locale);
  return <main className="portfolio-page portfolio-container services-page">
    <Section eyebrow={content.eyebrow} title={content.title} headingLevel="h1" className="services-hero-section">
      <div className="services-hero-copy">
        <p className="lead">{content.lead}</p>
        <p>{content.body}</p>
        <div className="services-hero-actions"><Link className="button primary" href="/contact">{page.cta} <b>↗</b></Link><Link className="button secondary" href="/work">{content.workCta} <b>→</b></Link></div>
      </div>
      <aside className="services-scope" aria-label={content.scopeLabel}><span>{content.scopeEyebrow}</span><b>{page.scope.slice(0, 3).map((item) => <span key={item}>{item}<br /></span>)}<em>{page.scope[3]}</em></b><small>{content.scopeCopy}</small></aside>
    </Section>
    <Section eyebrow={content.offeringsEyebrow} title={content.offeringsTitle} className="services-offerings-section">
      <p className="page-intro">{content.offeringsCopy}</p>
      <div className="services-grid">{localizedServices.map(([title, description, useCases], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p><small>{useCases}</small></article>)}</div>
    </Section>
    <Section eyebrow={content.fitEyebrow} title={content.fitTitle} className="services-fit-section">
      <div className="services-fit-grid">
        {page.fit.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </Section>
    <Section eyebrow={content.deliveryEyebrow} title={content.deliveryTitle} className="services-delivery-section">
      <ol className="services-delivery">
        {page.delivery.map(([title, body], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
      </ol>
    </Section>
    <Section className="contact-cta services-contact-cta"><span>{page.ctaEyebrow}</span><h2>{page.ctaTitle.split("\n").map((item, index) => <span key={item}>{index ? <br /> : null}{item}</span>)}</h2><p>{page.ctaCopy}</p><Link className="button primary" href="/contact">{page.cta} <b>↗</b></Link></Section>
  </main>;
}
function AboutPage() {
  const { copy, pages } = usePortfolioLocale();
  const content = copy.about;
  const page = pages.about;
  return <main className="portfolio-page portfolio-container about-page">
    <Section eyebrow={content.eyebrow} title={content.title} headingLevel="h1" className="about-intro-section">
      <div className="about-profile">
        <div className="about-profile-copy">
          <p className="lead">{page.intro[0]}</p>
          {page.intro.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <figure className="about-portrait">
          <Image src="/branding/lac-studio-founder.png" alt={page.portraitAlt} width={264} height={290} sizes="(max-width: 700px) 180px, 264px" priority />
          <figcaption><strong>Lucaciu Andrei Codrin</strong><span>{page.portraitLabel}</span><b>{page.experience[0]}<br />{page.experience[1]}</b></figcaption>
        </figure>
      </div>
    </Section>
    <Section eyebrow={page.principlesEyebrow} title={page.principlesTitle} className="about-principles-section">
      <div className="about-principles">
        {page.principles.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </Section>
    <Section eyebrow={page.capabilitiesEyebrow} title={page.capabilitiesTitle} className="about-capabilities-section">
      <p className="page-intro">{page.capabilitiesCopy}</p>
      <div className="expertise-grid">{page.expertise.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </Section>
    <Section className="contact-cta about-contact-cta"><span>{page.ctaEyebrow}</span><h2>{content.contactTitle.split("\n").map((item, index) => <span key={item}>{index ? <br /> : null}{item}</span>)}</h2><p>{content.contactCopy}</p><Link className="button primary" href="/contact">{page.cta} <b>↗</b></Link></Section>
  </main>;
}
function ProcessPage() {
  const { copy, pages } = usePortfolioLocale();
  const content = copy.process;
  const page = pages.process;
  const [activeStage, setActiveStage] = useState(0);
  const stage = page.stages[activeStage];
  return <main className="portfolio-page portfolio-container process-page">
    <Section eyebrow={content.eyebrow} title={content.title} headingLevel="h1" className="process-page-hero">
      <div className="process-hero-body"><p className="lead">{content.lead}</p><div className="process-hero-actions"><Link className="button primary" href="/contact">{page.discuss} <b>↗</b></Link><Link className="button secondary" href="/work">{page.explore} <b>→</b></Link></div></div>
      <div className="process-stage-tabs" role="tablist" aria-label={content.tabLabel}>{page.stages.map((item, index) => <button key={item.tab} id={`process-stage-tab-${index}`} type="button" role="tab" aria-selected={activeStage === index} aria-controls="process-stage-panel" className={activeStage === index ? "active" : ""} onClick={() => setActiveStage(index)}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.tab}</b></button>)}</div>
      <section id="process-stage-panel" className="process-stage-detail" role="tabpanel" aria-labelledby={`process-stage-tab-${activeStage}`}>
        <div className="process-stage-intro"><span>{String(activeStage + 1).padStart(2, "0")} / {stage.tab}</span><h3>{stage.title}</h3><p>{stage.summary}</p></div>
        <div className="process-stage-output"><span>{content.outputLabel}</span><ul>{stage.outputs.map((output) => <li key={output}>{output}</li>)}</ul></div>
        <div className="process-stage-involvement"><span>{content.involvementLabel}</span><p>{stage.involvement}</p></div>
      </section>
    </Section>
    <Section eyebrow={page.principlesEyebrow} title={page.principlesTitle} className="process-principles-section">
      <div className="process-principles">{page.principles.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </Section>
    <Section className="contact-cta process-contact-cta"><span>{page.ctaEyebrow}</span><h2>{page.ctaTitle.split("\n").map((item, index) => <span key={item}>{index ? <br /> : null}{item}</span>)}</h2><p>{page.ctaCopy}</p><Link className="button primary" href="/contact">{page.cta} <b>↗</b></Link></Section>
  </main>;
}

function ContactPage() {
  const [projectType, setProjectType] = useState(""); const [budget, setBudget] = useState(""); const [timeline, setTimeline] = useState("");
  const [availability, setAvailability] = useState<"checking" | "available" | "unavailable">("checking");
  const [submission, setSubmission] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [status, setStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { copy, pages, locale } = usePortfolioLocale();
  const content = copy.contact;
  const page = pages.contact;
  const messages = page.formMessages!;
  const projectOptions = page.projectTypes.map((item) => ({ value: item, label: item }));
  const budgetOptions = page.budgetOptions.map((item, index) => ({ value: index ? item : "", label: item }));
  const timelineOptions = page.timelineOptions.map((item, index) => ({ value: index ? item : "", label: item }));
  const clearFieldError = (field: string) => setFieldErrors((current) => {
    if (!current[field]) return current;
    const next = { ...current }; delete next[field]; return next;
  });
  useEffect(() => {
    let active = true;
    fetch("/api/contact", { cache: "no-store" }).then(async (result) => ({ result, body: await result.json().catch(() => null) as { available?: boolean } | null })).then(({ result, body }) => {
      if (!active) return;
      setAvailability(result.ok && body?.available ? "available" : "unavailable");
      if (!result.ok || !body?.available) setStatus(messages.unavailable);
    }).catch(() => { if (active) { setAvailability("unavailable"); setStatus(messages.unavailable); } });
    return () => { active = false; };
  }, [messages.unavailable]);
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (availability !== "available" || submission === "submitting") return;
    const form = event.currentTarget; const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name ?? "").trim(); const email = String(data.email ?? "").trim(); const message = String(data.message ?? "").trim();
    const errors: Record<string, string> = {};
    if (name.length < 2) errors.name = messages.nameRequired;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = messages.emailInvalid;
    if (!String(data.projectType ?? "").trim()) errors.projectType = messages.projectTypeRequired;
    if (message.length < 20) errors.message = messages.messageRequired;
    if (Object.keys(errors).length) { setFieldErrors(errors); setSubmission("idle"); setStatus(messages.validation); return; }
    setFieldErrors({}); setSubmission("submitting"); setStatus("");
    try {
      const result = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "Accept-Language": locale }, body: JSON.stringify(data) });
      const body = await result.json().catch(() => null) as { message?: string; error?: string } | null;
      if (!result.ok) { setSubmission("error"); setStatus(body?.error || messages.failure); if (result.status === 503) setAvailability("unavailable"); return; }
      setSubmission("success"); setStatus(body?.message || messages.success); form.reset(); setProjectType(""); setBudget(""); setTimeline("");
    } catch { setSubmission("error"); setStatus(messages.failure); }
  };
  const buttonLabel = submission === "submitting" ? messages.submitting : availability === "checking" ? messages.checking : availability === "unavailable" ? messages.unavailable : submission === "error" ? messages.retry : messages.submit;
  return <main className="portfolio-page portfolio-container"><Section eyebrow={content.eyebrow} title={content.title} headingLevel="h1"><div className="two-column"><div className="contact-intro"><p className="lead">{page.lead}</p><p>{page.email}</p><a className="contact-email" href="mailto:contact@lacstudio.ro">contact@lacstudio.ro <b>↗</b></a><BackButton /></div><form className="contact-form" onSubmit={submit} noValidate aria-describedby="contact-form-notice contact-form-status"><fieldset disabled={submission === "submitting" || availability !== "available"}><label>{page.name}<input name="name" autoComplete="name" required minLength={2} maxLength={100} aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "contact-name-error" : undefined} onChange={() => clearFieldError("name")} />{fieldErrors.name && <small id="contact-name-error" className="field-error">{fieldErrors.name}</small>}</label><label>{page.emailLabel!}<input name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "contact-email-error" : undefined} onChange={() => clearFieldError("email")} />{fieldErrors.email && <small id="contact-email-error" className="field-error">{fieldErrors.email}</small>}</label><label>{page.projectType}<PortfolioSelect name="projectType" ariaLabel={page.projectType} ariaDescribedBy={fieldErrors.projectType ? "contact-project-type-error" : undefined} value={projectType} onChange={(value) => { setProjectType(value); clearFieldError("projectType"); }} placeholder={page.chooseDirection} options={projectOptions} required invalid={Boolean(fieldErrors.projectType)} />{fieldErrors.projectType && <small id="contact-project-type-error" className="field-error">{fieldErrors.projectType}</small>}</label><label>{page.budget}<PortfolioSelect name="budget" ariaLabel={page.budget} value={budget} onChange={setBudget} placeholder={page.budgetPlaceholder} options={budgetOptions} /></label><label>{page.timeline}<PortfolioSelect name="timeline" ariaLabel={page.timeline} value={timeline} onChange={setTimeline} placeholder={page.timelinePlaceholder} options={timelineOptions} /></label><label className="wide">{page.description}<textarea name="message" placeholder={page.descriptionPlaceholder} required minLength={20} maxLength={4000} aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "contact-message-error" : undefined} onChange={() => clearFieldError("message")} />{fieldErrors.message && <small id="contact-message-error" className="field-error">{fieldErrors.message}</small>}</label><label className="honeypot" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></label></fieldset><small id="contact-form-notice" className="wide">{content.formNotice} <Link href="/privacy">{content.privacyLink}</Link>.</small><p id="contact-form-status" className="contact-form-status wide" role="status" aria-live="polite">{status}</p><button className="button primary" type="submit" disabled={availability !== "available" || submission === "submitting"} aria-busy={submission === "submitting"}>{buttonLabel}</button></form></div></Section></main>;
}
function LegalPage({ privacy }: { privacy: boolean }) {
  const { copy } = usePortfolioLocale();
  const legal = copy.legal;
  const paragraphs = privacy ? legal.privacyParagraphs : legal.legalParagraphs;
  return <main className="portfolio-page portfolio-container"><Section eyebrow={privacy ? legal.privacyEyebrow : legal.legalEyebrow} title={privacy ? legal.privacyTitle : legal.legalTitle} headingLevel="h1"><div className="legal-copy">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></Section></main>;
}
function NotFoundPage() {
  const { copy } = usePortfolioLocale();
  return <main className="portfolio-page portfolio-container"><Section eyebrow={copy.notFound.eyebrow} title={copy.notFound.title} headingLevel="h1"><p className="page-intro">{copy.notFound.copy}</p><Link className="button primary" href="/work">{copy.notFound.cta} <b>→</b></Link></Section></main>;
}

function CaseStudyNavigation({ previous, next, designQuery, location }: { previous: PublicProject; next: PublicProject; designQuery: string; location: "workflow" | "evidence" }) {
  const { copy, locale } = usePortfolioLocale();
  const localizedPrevious = localizeProject(previous, locale);
  const localizedNext = localizeProject(next, locale);
  return <nav className="case-study-navigation" aria-label={`${copy.caseStudy.backToWork} — ${copy.shared[location]}`}><Link href={`/work${designQuery}`}>{copy.caseStudy.backToWork}</Link><div><Link href={`/work/${previous.slug}${designQuery}`}>← <span>{copy.caseStudy.previous}</span> {localizedPrevious.title}</Link><Link href={`/work/${next.slug}${designQuery}`}><span>{copy.caseStudy.next}</span> {localizedNext.title} →</Link></div></nav>;
}

function CaseStudy({ project }: { project: PublicProject }) {
  const image = project.heroImage ?? project.thumbnail;
  const { activeDesign } = useDesign();
  const projectIndex = publishedProjects.findIndex((item) => item.id === project.id);
  const previous = publishedProjects[(projectIndex - 1 + publishedProjects.length) % publishedProjects.length];
  const next = publishedProjects[(projectIndex + 1) % publishedProjects.length];
  const designQuery = `?design=${activeDesign.id}`;
  const { copy } = usePortfolioLocale();
  return <main className="portfolio-page portfolio-container">
    <Section eyebrow={`${project.category.toUpperCase()} / ${copy.shared.readCaseStudy.toUpperCase()}`} title={project.title} headingLevel="h1">
      <p className="page-intro">{project.summary}</p>
      <div className="case-meta"><span>{project.subtitle}</span><span>{project.platforms.join(" · ")}</span><span>{project.year}</span></div>
      {image && <div className="case-hero-media"><Image src={image} alt={`${project.title} ${copy.shared.interfacePreview}`} fill sizes="(max-width: 1180px) 100vw, 1180px" priority /></div>}
      <div className="case-actions">{project.liveUrl ? <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">{copy.caseStudy.openLive} <b>↗</b></a> : project.demoOnRequest ? <Link className="button primary" href={`/contact${designQuery}`}>{copy.caseStudy.requestDemo} <b>↗</b></Link> : null}<Link className="button secondary" href={`/contact${designQuery}`}>{copy.caseStudy.discussSimilar} <b>→</b></Link></div>
      {project.demoNotice && <p className="case-demo-notice">{project.demoNotice}</p>}
    </Section>
    <Section id="workflow" eyebrow={copy.caseStudy.workflowEyebrow} title={copy.caseStudy.workflowTitle}><div className="case-overview"><div><p className="lead">{project.longDescription ?? project.summary}</p>{project.problem && <div className="case-problem"><span>{copy.shared.theChallenge}</span><p>{project.problem}</p></div>}</div><ul>{(project.features ?? []).map((feature) => <li key={feature}>{feature}</li>)}</ul></div><CaseStudyNavigation previous={previous} next={next} designQuery={designQuery} location="workflow" /></Section>
    <Section id="evidence" eyebrow={copy.caseStudy.evidenceEyebrow} title={copy.caseStudy.evidenceTitle}><div className="case-evidence"><article><span>{copy.caseStudy.technicalFocus}</span><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span>{copy.caseStudy.implementation}</span><ul>{(project.technicalHighlights ?? []).map((item) => <li key={item}>{item}</li>)}</ul></article>{project.architecture && <article className="case-architecture"><span>{copy.caseStudy.architecture}</span><p>{project.architecture}</p></article>}</div><CaseStudyNavigation previous={previous} next={next} designQuery={designQuery} location="evidence" /></Section>
    <Section className="contact-cta"><h2>{copy.caseStudy.contactTitle.split("\n").map((part, index) => <span key={part}>{index ? <br /> : null}{part}</span>)}</h2><Link className="button primary" href="/contact">{copy.shared.discussProject} <b>↗</b></Link></Section>
  </main>;
}

function PortfolioContent({ page, project }: { page: Page; project?: PublicProject }) {
  const { activeDesign, reducedMotion, effectsEnabled } = useDesign();
  return <div className={`portfolio-shell portfolio-${activeDesign.id} ${reducedMotion ? "reduce-motion" : ""}`} data-design={activeDesign.id} data-effects={effectsEnabled ? "on" : "off"}><Header page={page} project={project} />{page === "home" ? <HomePage /> : page === "work" ? <WorkPage /> : page === "services" ? <ServicesPage /> : page === "about" ? <AboutPage /> : page === "process" ? <ProcessPage /> : page === "contact" ? <ContactPage /> : page === "privacy" ? <LegalPage privacy /> : page === "legal" ? <LegalPage privacy={false} /> : page === "not-found" ? <NotFoundPage /> : project ? <CaseStudy project={project} /> : <WorkPage />}<Footer /><PortfolioAmbientEffect design={activeDesign.id} reducedMotion={reducedMotion} enabled={effectsEnabled} /></div>;
}

function LegacyLabRedirect({ children }: { children: ReactNode }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isLegacyLabLink = ["category", "component", "compare", "left", "right"].some((key) => params.has(key));
    if (/^\/(?:en|fr|ro|es)?\/?$/.test(window.location.pathname) && isLegacyLabLink) {
      window.location.replace(`/lab${window.location.search}`);
    }
  }, []);
  return <>{children}</>;
}

export function PortfolioApp({ page, project, locale = defaultLocale }: { page: Page; project?: PublicProject; locale?: Locale }) {
  const content = resolvePortfolioContent(locale);
  const localizedProject = project ? localizeProject(project, locale) : undefined;
  return <PortfolioLocaleContext.Provider value={content}><LegacyLabRedirect><DesignProvider scope="portfolio"><PortfolioContent page={page} project={localizedProject} /></DesignProvider></LegacyLabRedirect></PortfolioLocaleContext.Provider>;
}
