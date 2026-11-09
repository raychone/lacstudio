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
    expect(footerBox).not.toBeNull();
    expect(footerContentBox).not.toBeNull();
    expect(footerBox!.x).toBe(0);
    expect(footerBox!.width).toBe(1440);
    expect(footerContentBox!.x).toBeGreaterThan(0);
    expect(footerContentBox!.x + footerContentBox!.width).toBeLessThan(1440);
  });

  test("uses readable ink on Brutalist orange surfaces", async ({ page }) => {
    await page.goto("/?design=brutalist", { waitUntil: "networkidle" });
    await expect(page.locator(".hero-preview > span")).toHaveCSS("color", "rgb(17, 17, 15)");
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

  test("migrates unambiguous legacy Lab links and preserves their state", async ({ page }) => {
    await page.goto("/?design=editorial&category=actions&component=actions.reference", { waitUntil: "networkidle" });
    await expect(page).toHaveURL(/\/lab\?design=editorial&category=actions&component=actions.reference/);
    await expect(page.locator('main[data-design="editorial"]')).toBeVisible();
    await expect(page.getByRole("heading", { name: "Actions", exact: true }).first()).toBeVisible();
  });

  test("keeps drafts out of public routes and offers an accessible mobile navigation", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/work", { waitUntil: "networkidle" });
    await expect(page.getByText("Work in publication review")).toBeVisible();
    await expect(page.getByText("MedicHelp", { exact: true })).toHaveCount(0);
    await page.getByRole("button", { name: "Toggle navigation" }).click();
    await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Services", exact: true }).click();
    await expect(page).toHaveURL(/\/services/);
  });

  test("invalid project slugs use the not-found route", async ({ page }) => {
    const response = await page.goto("/work/medichelp", { waitUntil: "networkidle" });
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
