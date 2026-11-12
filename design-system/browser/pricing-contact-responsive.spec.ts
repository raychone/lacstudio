import { expect, test, type Page } from "@playwright/test";

const designs = ["tactile", "nocturne", "editorial", "brutalist", "playground"] as const;
const locales = ["en", "fr", "ro", "es"] as const;
const categoryContactMappings = [
  ["website", "website", "under-5000"], ["commerce", "website", "under-5000"], ["web-app", "web-application", "under-5000"], ["android", "android-application", "under-5000"], ["saas", "saas-platform", "5000-15000"],
] as const;
const viewports = [
  [320, 800, 1], [375, 812, 1], [412, 860, 1], [768, 1024, 2], [1024, 900, 3], [1440, 900, 5],
] as const;

async function layout(page: Page) {
  return page.locator(".pricing-grid article").evaluateAll((cards) => cards.map((card) => {
    const box = card.getBoundingClientRect();
    const title = card.querySelector("h3")!.getBoundingClientRect();
    const price = card.querySelector(":scope > b")!.getBoundingClientRect();
    const list = card.querySelector("ul")!.getBoundingClientRect();
    const cta = card.querySelector(".pricing-category-cta")!.getBoundingClientRect();
    return { x: box.x, y: box.y, right: box.right, bottom: box.bottom, titleY: title.y, priceY: price.y, listY: list.y, ctaY: cta.y, ctaBottom: cta.bottom };
  }));
}

test("Pricing keeps its responsive card contract across all visual systems", async ({ page }) => {
  test.setTimeout(180_000);
  for (const [width, height, columns] of viewports) {
    await page.setViewportSize({ width, height });
    for (const design of designs) {
      await page.goto(`/en/pricing?design=${design}`, { waitUntil: "networkidle" });
      await expect(page.locator(`.portfolio-shell[data-design="${design}"]`)).toBeVisible();
      await expect(page.locator(".pricing-grid article")).toHaveCount(5);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${design}@${width} has no horizontal overflow`).toBe(true);
      const cards = await layout(page);
      const firstRow = cards.filter((card) => Math.abs(card.y - cards[0].y) < 2);
      expect(new Set(firstRow.map((card) => Math.round(card.x))).size, `${design}@${width} column count`).toBe(columns);
      for (const card of cards) {
        expect(card.ctaY, `${design}@${width} CTA remains inside its card`).toBeGreaterThanOrEqual(card.listY);
        expect(card.ctaBottom, `${design}@${width} CTA remains inside its card`).toBeLessThanOrEqual(card.bottom + 1);
        expect(card.right, `${design}@${width} card remains within the viewport`).toBeLessThanOrEqual(width + 1);
      }
      if (width >= 768) {
        expect(new Set(firstRow.map((card) => Math.round(card.titleY))).size, `${design}@${width} titles align`).toBe(1);
        expect(new Set(firstRow.map((card) => Math.round(card.priceY))).size, `${design}@${width} prices align`).toBe(1);
        expect(new Set(firstRow.map((card) => Math.round(card.listY))).size, `${design}@${width} feature lists align`).toBe(1);
      }
    }
  }
});

test("Pricing CTAs preserve locale, design, project type and budget preselection", async ({ page }) => {
  test.setTimeout(120_000);
  for (const locale of locales) {
    for (const design of designs) {
      await page.goto(`/${locale}/pricing?design=${design}`, { waitUntil: "networkidle" });
      const ctas = page.locator(".pricing-category-cta");
      await expect(ctas).toHaveCount(categoryContactMappings.length);
      for (const [index, [, project, budget]] of categoryContactMappings.entries()) {
        await expect(ctas.nth(index)).toHaveAttribute("href", new RegExp(`/${locale}/contact\\?project=${project}&budget=${budget}&design=${design}`));
      }
      const firstCta = ctas.first();
      await expect(firstCta).toHaveAttribute("href", new RegExp(`/${locale}/contact\\?project=website&budget=under-5000&design=${design}`));
      await firstCta.click();
      await expect(page).toHaveURL(new RegExp(`/${locale}/contact\\?project=website&budget=under-5000&design=${design}`));
      await expect(page.locator('input[name="projectType"]')).not.toHaveValue("");
      await expect(page.locator('input[name="budget"]')).not.toHaveValue("");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${locale}/${design} contact has no horizontal overflow`).toBe(true);
    }
  }
});
