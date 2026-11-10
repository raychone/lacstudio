import { expect, test } from "@playwright/test";

const designs = ["tactile", "nocturne", "editorial", "brutalist", "playground"] as const;
const publicRoutes = ["/", "/work", "/services", "/about", "/process", "/contact", "/privacy", "/legal"];

test.describe("public portfolio", () => {
  test("uses one stable homepage geometry across the five visual systems", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const dimensions: Array<{ design: string; header: number; hero: number; firstSection: number }> = [];

    for (const design of designs) {
      await page.goto(`/?design=${design}`, { waitUntil: "networkidle" });
      await expect(page.locator(`.portfolio-shell[data-design="${design}"]`)).toBeVisible();
      dimensions.push(await page.evaluate(() => ({
        design: document.querySelector(".portfolio-shell")?.getAttribute("data-design") ?? "",
        header: Math.round(document.querySelector(".portfolio-header")!.getBoundingClientRect().height),
        hero: Math.round(document.querySelector(".hero-grid")!.getBoundingClientRect().width),
        firstSection: Math.round(document.querySelector(".portfolio-section")!.getBoundingClientRect().width),
      })));
      await page.screenshot({ path: `qa-artifacts/portfolio/home-${design}-1440.png`, fullPage: true });
    }

    expect(new Set(dimensions.map((entry) => entry.header)).size).toBe(1);
    expect(new Set(dimensions.map((entry) => entry.hero)).size).toBe(1);
    expect(new Set(dimensions.map((entry) => entry.firstSection)).size).toBe(1);
  });

  test("uses identical navbar geometry across every visual system", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const selectors = [".portfolio-header .portfolio-brand", ".portfolio-header .portfolio-nav a:nth-of-type(1)", ".portfolio-header .portfolio-nav a:nth-of-type(2)", ".portfolio-header .portfolio-nav a:nth-of-type(3)", ".portfolio-header .portfolio-nav a:nth-of-type(4)", ".portfolio-header .portfolio-nav .header-contact", ".portfolio-header .portfolio-switcher"];
    const snapshots: Array<{ design: string; boxes: Array<{ x: number; y: number; width: number; height: number }> }> = [];
    for (const design of designs) {
      await page.goto(`/work?design=${design}`, { waitUntil: "networkidle" });
      snapshots.push({ design, boxes: await Promise.all(selectors.map((selector) => page.locator(selector).evaluate((element) => {
        const box = element.getBoundingClientRect();
        return { x: box.x, y: box.y, width: box.width, height: box.height };
      }))) });
    }
    for (const snapshot of snapshots.slice(1)) snapshot.boxes.forEach((box, index) => {
      const baseline = snapshots[0].boxes[index];
      for (const key of ["x", "y", "width", "height"] as const) expect(Math.abs(box[key] - baseline[key]), `${snapshot.design} · ${selectors[index]} · ${key}: ${baseline[key]} vs ${box[key]}`).toBeLessThanOrEqual(1);
    });
  });

  test("captures the shared Work composition across all visual systems", async ({ page }) => {
    for (const width of [1440, 375]) {
      await page.setViewportSize({ width, height: 900 });
      for (const design of designs) {
        await page.goto(`/work?design=${design}`, { waitUntil: "networkidle" });
        await expect(page.getByRole("region", { name: "Featured work" })).toBeVisible();
        await page.screenshot({ path: `qa-artifacts/portfolio/work-${design}-${width}.png`, fullPage: true });
      }
    }
  });

  test("uses an accessible sliding design selector and Playground bottom corners", async ({ page }) => {
    await page.goto("/?design=tactile", { waitUntil: "networkidle" });
    const options = page.locator(".portfolio-switcher-options");
    const tactile = page.getByRole("radio", { name: "01 Tactile" });
    await tactile.hover();
    await expect(tactile.locator(".portfolio-switcher-tooltip")).toHaveCSS("opacity", "1");
    await tactile.focus();
    await expect(tactile.locator(".portfolio-switcher-tooltip")).toHaveCSS("opacity", "1");
    await page.getByRole("radio", { name: "02 Nocturne" }).click();
    await expect(options).toHaveAttribute("data-active-index", "1");
    const nocturne = page.getByRole("radio", { name: "02 Nocturne" });
    await nocturne.hover();
    await expect(nocturne.locator(".portfolio-switcher-tooltip")).toHaveCSS("background-color", "rgb(13, 19, 40)");
    await expect(nocturne.locator(".portfolio-switcher-tooltip")).toHaveCSS("color", "rgb(238, 240, 255)");
    await page.goto("/?design=playground", { waitUntil: "networkidle" });
    const header = page.locator(".portfolio-header");
    await expect(header).toHaveCSS("border-top-left-radius", "0px");
    await expect(header).toHaveCSS("border-top-right-radius", "0px");
    await expect(header).toHaveCSS("border-bottom-left-radius", "22px");
    await expect(header).toHaveCSS("border-bottom-right-radius", "22px");
    for (const [design, inset] of [["editorial", 1], ["brutalist", 1], ["playground", 2]] as const) {
      await page.goto(`/?design=${design}`, { waitUntil: "networkidle" });
      const track = page.locator(".portfolio-switcher-options");
      const [trackBox, indicatorBox] = await Promise.all([track.boundingBox(), track.locator(".portfolio-switcher-indicator").boundingBox()]);
      expect(trackBox).not.toBeNull();
      expect(indicatorBox).not.toBeNull();
      expect(Math.abs(indicatorBox!.y - (trackBox!.y + inset)), `${design} active thumb top`).toBeLessThanOrEqual(.5);
      expect(Math.abs((indicatorBox!.y + indicatorBox!.height) - (trackBox!.y + trackBox!.height - inset)), `${design} active thumb bottom`).toBeLessThanOrEqual(.5);
    }
  });

  test("keeps navigation sticky and pads footer content instead of its full-width surface", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const design of ["playground", "nocturne"]) {
      await page.goto(`/?design=${design}`, { waitUntil: "networkidle" });
      const header = page.locator(".portfolio-header");
      await page.evaluate(() => window.scrollTo(0, 700));
      await expect.poll(() => header.evaluate((element) => Math.round(element.getBoundingClientRect().top))).toBe(0);
      if (design === "nocturne") await expect(header).toHaveCSS("z-index", "60");
    }
    const footerBox = await page.locator(".portfolio-footer").boundingBox();
    const footerContentBox = await page.locator(".portfolio-footer .footer-grid").boundingBox();
    const footerNoteBox = await page.locator(".portfolio-footer .footer-note").boundingBox();
    const contactColumnBox = await page.locator('.portfolio-footer nav[aria-label="Contact"]').boundingBox();
    expect(footerBox).not.toBeNull();
    expect(footerContentBox).not.toBeNull();
    expect(footerNoteBox).not.toBeNull();
    expect(contactColumnBox).not.toBeNull();
    expect(footerBox!.x).toBe(0);
    expect(footerBox!.width).toBe(1440);
    expect(footerContentBox!.x).toBeGreaterThan(0);
    expect(footerContentBox!.x + footerContentBox!.width).toBeLessThan(1440);
    expect(footerNoteBox!.y).toBeGreaterThan(contactColumnBox!.y + contactColumnBox!.height);
  });

  test("keeps CTA corners clear and aligns navigation treatments to their systems", async ({ page }) => {
    for (const design of ["tactile", "playground"]) {
      await page.goto(`/?design=${design}`, { waitUntil: "networkidle" });
      await expect(page.locator(".portfolio-section.contact-cta")).toHaveCSS("border-bottom-width", "0px");
    }
    await page.goto("/work?design=tactile", { waitUntil: "networkidle" });
    const tactileWork = page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Work", exact: true });
    expect(await tactileWork.evaluate((element) => getComputedStyle(element, "::before").boxShadow)).toContain("inset");
    await page.goto("/?design=editorial", { waitUntil: "networkidle" });
    await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Work", exact: true })).toHaveCSS("text-transform", "none");
  });

  test("uses readable ink on Brutalist orange surfaces", async ({ page }) => {
    await page.goto("/?design=brutalist", { waitUntil: "networkidle" });
    await expect(page.locator(".hero-preview > span")).toHaveCSS("color", "rgb(17, 17, 15)");
  });

  test("keeps case studies connected and allows visitors to disable ambient effects", async ({ page }) => {
    await page.goto("/work/medichelp?design=brutalist", { waitUntil: "networkidle" });
    const workflowNavigation = page.getByRole("navigation", { name: "Case study navigation after workflow" });
    const evidenceNavigation = page.getByRole("navigation", { name: "Case study navigation after evidence" });
    await expect(workflowNavigation.getByRole("link", { name: "← Back to Work" })).toHaveAttribute("href", "/work?design=brutalist");
    await expect(evidenceNavigation.getByRole("link", { name: /Next Dental Laboratory Management/ })).toHaveAttribute("href", "/work/dental-laboratory-management?design=brutalist");
    await workflowNavigation.getByRole("link", { name: /Next Dental Laboratory Management/ }).click();
    await expect(page).toHaveURL("/work/dental-laboratory-management?design=brutalist");
    await page.goto("/work/medichelp?design=brutalist", { waitUntil: "networkidle" });
    await expect(page.locator('.portfolio-footer nav[aria-label="Explore"] > span')).toHaveCSS("color", "rgb(17, 17, 15)");
    const effectsToggle = page.getByRole("button", { name: "Disable interface effects" });
    await effectsToggle.click();
    await expect(page.getByRole("button", { name: "Enable interface effects" })).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator(".portfolio-ambient-effect")).toHaveCount(0);
    await page.reload({ waitUntil: "networkidle" });
    const persistedToggle = page.getByRole("button", { name: "Enable interface effects" });
    await expect(persistedToggle).toHaveAttribute("aria-pressed", "false");
    await persistedToggle.click();
    await expect(page.getByRole("button", { name: "Disable interface effects" })).toHaveAttribute("aria-pressed", "true");
  });

  test("keeps the mobile footer compact and organized in three link columns", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/?design=tactile", { waitUntil: "networkidle" });
    const brand = page.locator(".footer-brand");
    const logo = brand.locator(".portfolio-brand");
    const statement = brand.locator("p");
    const [brandBox, logoBox, statementBox] = await Promise.all([brand.boundingBox(), logo.boundingBox(), statement.boundingBox()]);
    expect(brandBox && logoBox && statementBox).toBeTruthy();
    expect(logoBox!.x).toBeLessThan(statementBox!.x);
    expect(Math.abs(logoBox!.y - statementBox!.y)).toBeLessThan(8);
    const boxes = await Promise.all(["Explore", "Studio", "Contact"].map((label) => page.locator(`.portfolio-footer nav[aria-label=\"${label}\"]`).boundingBox()));
    expect(boxes.every(Boolean)).toBe(true);
    expect(Math.max(...boxes.map((box) => box!.y)) - Math.min(...boxes.map((box) => box!.y))).toBeLessThan(2);
    expect(boxes[0]!.x).toBeLessThan(boxes[1]!.x);
    expect(boxes[1]!.x).toBeLessThan(boxes[2]!.x);
  });

  test("uses the supplied black mark on light surfaces and its white treatment in Nocturne", async ({ page }) => {
    await page.goto("/?design=tactile", { waitUntil: "networkidle" });
    await expect(page.getByLabel("LAC Studio home").first().locator(".brand-logo-black")).toBeVisible();
    await expect(page.getByLabel("LAC Studio home").first().locator(".brand-logo-white")).toBeHidden();
    await page.goto("/?design=nocturne", { waitUntil: "networkidle" });
    await expect(page.getByLabel("LAC Studio home").first().locator(".brand-logo-black")).toBeHidden();
    await expect(page.getByLabel("LAC Studio home").first().locator(".brand-logo-white")).toBeVisible();
    await page.getByLabel("LAC Studio home").first().screenshot({ path: "qa-artifacts/portfolio/logo-nocturne-white.png" });
    await page.goto("/?design=playground", { waitUntil: "networkidle" });
    await expect(page.getByLabel("LAC Studio home").first().locator(".brand-logo-black")).toBeHidden();
    await expect(page.getByLabel("LAC Studio home").first().locator(".brand-logo-playground")).toBeVisible();
    await page.getByLabel("LAC Studio home").first().screenshot({ path: "qa-artifacts/portfolio/logo-playground.png" });
  });

  for (const width of [320, 375, 768, 1024, 1440]) {
    test(`renders public routes without horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const route of publicRoutes) {
        await page.goto(`${route}${route === "/" ? "?design=playground" : ""}`, { waitUntil: "networkidle" });
        await expect(page.locator(".portfolio-shell")).toBeVisible();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${route} at ${width}px`).toBe(true);
      }
    });
  }

  test("preserves route and filter query when changing design", async ({ page }) => {
    await page.goto("/work?q=software", { waitUntil: "networkidle" });
    await page.getByRole("radio", { name: "02 Nocturne" }).click();
    await expect(page).toHaveURL(/\/work\?q=software&design=nocturne|\/work\?design=nocturne&q=software/);
    await expect(page.locator('.portfolio-shell[data-design="nocturne"]')).toBeVisible();
  });

  test("keeps featured Work carousel state through a design change and exposes FAQ controls", async ({ page }) => {
    await page.goto("/work?design=tactile", { waitUntil: "networkidle" });
    const carousel = page.getByRole("region", { name: "Featured work" });
    await carousel.getByRole("button", { name: "Next featured project" }).click();
    await expect(page.locator(".work-carousel-controls > p")).toContainText("02 / 07");
    await page.getByRole("radio", { name: "02 Nocturne" }).click();
    await expect(page.locator(".work-carousel-controls > p")).toContainText("02 / 07");
    await carousel.focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.locator(".work-carousel-controls > p")).toContainText("03 / 07");
    const question = page.getByRole("button", { name: /What kind of work do you take on/ });
    await expect(question).toHaveAttribute("aria-expanded", "true");
    await question.click();
    await expect(question).toHaveAttribute("aria-expanded", "false");
  });

  test("keeps featured carousel actions clickable and legible above project media", async ({ page }) => {
    await page.goto("/work?design=playground", { waitUntil: "networkidle" });
    const carousel = page.getByRole("region", { name: "Featured work" });
    const workflow = carousel.getByRole("link", { name: /Workflow/ });
    const evidence = carousel.getByRole("link", { name: /Evidence/ });
    const discuss = carousel.getByRole("link", { name: /Discuss your project/ });
    await expect(workflow).toHaveAttribute("href", "/work/medichelp?design=playground#workflow");
    await expect(evidence).toHaveAttribute("href", "/work/medichelp?design=playground#evidence");
    await expect(discuss).toHaveAttribute("href", "/contact?design=playground");
    await expect(workflow).toHaveCSS("color", "rgb(36, 32, 82)");
    await workflow.click();
    await expect(page).toHaveURL(/\/work\/medichelp\?design=playground#workflow/);
    await expect(page.locator("#workflow")).toBeVisible();
    await page.goto("/work?design=playground", { waitUntil: "networkidle" });
    await page.getByRole("region", { name: "Featured work" }).getByRole("link", { name: /Evidence/ }).click();
    await expect(page).toHaveURL(/\/work\/medichelp\?design=playground#evidence/);
    await expect(page.locator("#evidence")).toBeVisible();
    await page.goto("/work?design=playground", { waitUntil: "networkidle" });
    await page.getByRole("region", { name: "Featured work" }).getByRole("link", { name: /Discuss your project/ }).click();
    await expect(page).toHaveURL("/contact?design=playground");
  });

  test("uses a non-clipping signal hover for the featured carousel CTA in every design", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const design of designs) {
      await page.goto(`/work?design=${design}`, { waitUntil: "networkidle" });
      const cta = page.getByRole("region", { name: "Featured work" }).getByRole("link", { name: /Discuss your project/ });
      await cta.scrollIntoViewIfNeeded();
      const before = await cta.boundingBox();
      await cta.hover();
      const after = await cta.boundingBox();
      expect(before && after).toBeTruthy();
      expect(Math.abs(after!.x - before!.x), design).toBeLessThanOrEqual(0.5);
      expect(Math.abs(after!.y - before!.y), design).toBeLessThanOrEqual(0.5);
    }
  });

  test("keeps carousel action surfaces aligned with their system corners and spacing", async ({ page }) => {
    await page.goto("/work?design=tactile", { waitUntil: "networkidle" });
    const tactileWorkflow = page.getByRole("region", { name: "Featured work" }).getByRole("link", { name: /Workflow/ });
    await expect(tactileWorkflow).toHaveCSS("border-top-left-radius", "11px");
    await tactileWorkflow.hover();
    await expect(tactileWorkflow).toHaveCSS("outline-style", "none");
    await page.goto("/work?design=editorial", { waitUntil: "networkidle" });
    const editorialWorkflow = page.getByRole("region", { name: "Featured work" }).getByRole("link", { name: /Workflow/ });
    const editorialEvidence = page.getByRole("region", { name: "Featured work" }).getByRole("link", { name: /Evidence/ });
    await expect(editorialWorkflow).toHaveCSS("padding-left", "10px");
    await expect(editorialEvidence).toHaveCSS("padding-right", "10px");
  });

  test("gives featured actions one shared footprint and theme-specific hover response", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const design of designs) {
      await page.goto(`/work?design=${design}`, { waitUntil: "networkidle" });
      const actions = page.getByRole("region", { name: "Featured work" }).locator(".work-carousel-actions a");
      const boxes = await Promise.all([0, 1, 2].map((index) => actions.nth(index).boundingBox()));
      expect(boxes.every(Boolean), design).toBe(true);
      expect(new Set(boxes.map((box) => Math.round(box!.width))).size, `${design} widths`).toBe(1);
      expect(new Set(boxes.map((box) => Math.round(box!.height))).size, `${design} heights`).toBe(1);
      expect(Math.round(boxes[0]!.height), `${design} height`).toBe(42);
    }
    await page.goto("/work?design=tactile", { waitUntil: "networkidle" });
    const tactileAction = page.getByRole("region", { name: "Featured work" }).getByRole("link", { name: /Workflow/ });
    const raisedShadow = await tactileAction.evaluate((element) => getComputedStyle(element).boxShadow);
    await tactileAction.hover();
    const recessedShadow = await tactileAction.evaluate((element) => getComputedStyle(element).boxShadow);
    expect(raisedShadow).not.toContain("inset");
    expect(recessedShadow).toContain("inset");
  });

  test("shows accurate demo availability and system-styled actions in project cards", async ({ page }) => {
    await page.goto("/work?design=tactile", { waitUntil: "networkidle" });
    const medicHelp = page.locator(".project-card").filter({ hasText: "MedicHelp" });
    await expect(medicHelp.getByRole("link", { name: /Request live demo/ })).toHaveAttribute("href", "/contact?design=tactile");
    await expect(medicHelp).toContainText("A live MedicHelp demo can be arranged on request.");
    for (const project of ["Restaurant SaaS", "GR Plus"]) {
      await expect(page.locator(".project-card").filter({ hasText: project })).toContainText("Demo hosting uses a free database tier");
    }
    const action = page.locator(".project-card").filter({ hasText: "GR Plus" }).getByRole("link", { name: /Open live demo/ });
    await expect(action).toHaveCSS("border-top-left-radius", "11px");
    await expect(action).toHaveAttribute("href", "https://gr-plus-web.vercel.app/");
  });

  test("keeps Work filter and carousel controls geometrically stable in every design", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const design of designs) {
      await page.goto(`/work?design=${design}`, { waitUntil: "networkidle" });
      const [filter, clear, controls, scrollBefore] = await Promise.all([
        page.locator(".work-filters input").boundingBox(),
        page.locator(".clear-work-filters").boundingBox(),
        page.locator(".work-carousel-controls").boundingBox(),
        page.evaluate(() => window.scrollY),
      ]);
      expect(filter && clear && controls).toBeTruthy();
      expect(Math.abs(filter!.height - clear!.height), `${design} clear filter height`).toBeLessThanOrEqual(1);
      await page.getByRole("button", { name: "Next featured project" }).click();
      const [nextControls, scrollAfter, copyMetrics, pagination] = await Promise.all([page.locator(".work-carousel-controls").boundingBox(), page.evaluate(() => window.scrollY), page.locator(".work-carousel-copy").evaluate((element) => ({ clientHeight: element.clientHeight, scrollHeight: element.scrollHeight })), page.locator(".work-carousel-pagination").evaluate((element) => [...element.querySelectorAll("button")].map((button) => {
        const box = button.getBoundingClientRect(); const text = button.querySelector("span")?.getBoundingClientRect();
        return { center: box.x + box.width / 2, textCenter: text ? text.x + text.width / 2 : 0 };
      }))]);
      expect(nextControls).not.toBeNull();
      expect(Math.abs((nextControls!.y + scrollAfter) - (controls!.y + scrollBefore)), `${design} carousel controls y`).toBeLessThanOrEqual(1);
      expect(copyMetrics.scrollHeight, `${design} carousel copy should not scroll`).toBeLessThanOrEqual(copyMetrics.clientHeight + 1);
      pagination.forEach((item, index) => expect(Math.abs(item.center - item.textCenter), `${design} slide ${index + 1} number centering`).toBeLessThanOrEqual(1));
    }
  });

  test("signals the active Nocturne slide inside its numeric rail", async ({ page }) => {
    await page.goto("/work?design=nocturne", { waitUntil: "networkidle" });
    const pagination = page.locator(".portfolio-nocturne .work-carousel-pagination");
    const slides = pagination.getByRole("tab");

    await expect(slides.nth(0)).toHaveAttribute("aria-selected", "true");
    expect(await slides.nth(0).evaluate((element) => getComputedStyle(element).backgroundImage)).not.toBe("none");
    await page.getByRole("button", { name: "Next featured project" }).click();
    await expect(slides.nth(1)).toHaveAttribute("aria-selected", "true");
    expect(await slides.nth(1).evaluate((element) => getComputedStyle(element, "::after").backgroundColor)).toBe("rgb(184, 174, 255)");
  });

  test("mounts a theme-specific pointer signature across public portfolio pages", async ({ page }) => {
    for (const design of designs) {
      await page.goto(`/services?design=${design}`, { waitUntil: "networkidle" });
      const effect = page.locator(`.portfolio-ambient-effect.${design}`);
      await expect(effect).toHaveCount(1);
      await page.mouse.move(560, 380);
      await expect(effect).toHaveAttribute("data-active", "true");
      if (design === "brutalist") {
        await expect(effect).toHaveCSS("mix-blend-mode", "difference");
        expect(await effect.evaluate((element) => getComputedStyle(element, "::before").backgroundColor)).toBe("rgb(255, 255, 255)");
      }
      await page.waitForTimeout(240);
      await page.screenshot({ path: `qa-artifacts/portfolio/effect-${design}.png`, fullPage: false });
    }
  });

  test("migrates unambiguous legacy Lab links and preserves their state", async ({ page }) => {
    await page.goto("/?design=editorial&category=actions&component=actions.reference", { waitUntil: "networkidle" });
    await expect(page).toHaveURL(/\/lab\?design=editorial&category=actions&component=actions.reference/);
    await expect(page.locator('main[data-design="editorial"]')).toBeVisible();
    await expect(page.getByRole("heading", { name: "Actions", exact: true }).first()).toBeVisible();
  });

  test("shows approved project media and offers an accessible mobile navigation", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/work", { waitUntil: "networkidle" });
    await expect(page.getByText("MedicHelp", { exact: true }).first()).toBeVisible();
    await expect(page.locator('.project-art img[src*="medichelp-work"]')).toBeVisible();
    await page.getByRole("button", { name: "Toggle navigation" }).click();
    await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Services", exact: true }).click();
    await expect(page).toHaveURL(/\/services/);
  });

  test("unapproved project slugs use the not-found route", async ({ page }) => {
    const response = await page.goto("/work/odonta", { waitUntil: "networkidle" });
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "This page is not public." })).toBeVisible();
  });

  test("uses keyboard-accessible custom selects in every design", async ({ page }) => {
    for (const design of designs) {
      await page.goto(`/contact?design=${design}`, { waitUntil: "networkidle" });
      await expect(page.locator(".contact-form select")).toHaveCount(0);
      const projectType = page.getByRole("combobox", { name: "Project type" });
      await projectType.focus();
      await page.keyboard.press("ArrowDown");
      await expect(page.getByRole("listbox", { name: "Project type" })).toBeVisible();
      await page.screenshot({ path: `qa-artifacts/portfolio/contact-${design}-custom-select-open.png`, fullPage: true });
      await page.getByRole("option", { name: "Other software" }).focus();
      await page.keyboard.press("Enter");
      await expect(projectType).toContainText("Other software");
      await page.screenshot({ path: `qa-artifacts/portfolio/contact-${design}-custom-select.png`, fullPage: true });
    }
  });
});
