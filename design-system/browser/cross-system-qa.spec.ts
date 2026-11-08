import { expect, test, type Page } from "@playwright/test";

const systems = ["tactile", "nocturne", "editorial", "brutalist", "playground"] as const;
const categories = [
  ["foundations", "Foundations"], ["typography", "Typography"], ["actions", "Actions"], ["forms", "Forms"],
  ["disclosure", "Disclosure"], ["feedback", "Feedback"], ["data-display", "Data Display"], ["carousels", "Carousels"],
  ["overlays", "Overlays"], ["advanced", "Advanced"], ["motion", "Motion"], ["effects", "Effects"],
] as const;
const viewports = [
  [320, 700], [375, 812], [768, 1024], [900, 900], [1024, 768], [1440, 900],
] as const;

const directUrl = (design: string, category: string, comparison = "") =>
  `/?design=${design}&category=${category}&component=${category}.reference${comparison}`;

async function inspectStableFixture(page: Page, design: string, heading: string) {
  await expect(page.locator(`main[data-design="${design}"]`)).toBeVisible();
  await expect(page.getByRole("heading", { name: heading, exact: true }).first()).toBeVisible();
  await expect(page.locator(".shared-showcase")).toBeVisible();
  const diagnostics = await page.evaluate(() => ({
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    visibleMain: Boolean(document.querySelector("main[data-design]")),
    visibleFixture: Boolean(document.querySelector(".shared-showcase")),
  }));
  return diagnostics;
}

test.describe("Phase 4.5 cross-system responsive visual baseline", () => {
  test("renders the full five-system, twelve-category viewport matrix", async ({ page }) => {
    test.setTimeout(10 * 60_000);
    const consoleErrors: string[] = [];
    const runtimeErrors: string[] = [];
    const overflowViolations: string[] = [];
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
    page.on("pageerror", (error) => runtimeErrors.push(error.message));

    for (const [width, height] of viewports) {
      await page.setViewportSize({ width, height });
      for (const design of systems) {
        for (const [category, heading] of categories) {
          await page.goto(directUrl(design, category), { waitUntil: "networkidle" });
          const diagnostics = await inspectStableFixture(page, design, heading);
          await page.screenshot({ path: `qa-artifacts/responsive/${design}/${category}-${width}.png`, fullPage: true });
          if (diagnostics.horizontalOverflow) overflowViolations.push(`${design}/${category}@${width}`);
        }
      }
    }

    expect(runtimeErrors, "runtime errors from the complete matrix").toEqual([]);
    expect(consoleErrors, "console errors from the complete matrix").toEqual([]);
    expect(overflowViolations, "document-level horizontal overflow in the complete matrix").toEqual([]);
  });

  test("uses URL-addressable split view, stacks at 900px, and preserves the chosen pair", async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 900 });
    await page.goto(directUrl("tactile", "actions", "&compare=1&left=editorial&right=brutalist"), { waitUntil: "networkidle" });
    await expect(page.locator(".visual-comparison")).toBeVisible();
    await expect(page.locator(".comparison-panel")).toHaveCount(2);
    await expect(page.locator(".comparison-panel").first()).toContainText("EDITORIAL");
    await expect(page.locator(".comparison-panel").last()).toContainText("BRUTALIST");
    const stacked = await page.locator(".comparison-panel").evaluateAll((panels) => panels[1].getBoundingClientRect().top >= panels[0].getBoundingClientRect().bottom);
    expect(stacked).toBe(true);
    await page.screenshot({ path: "qa-artifacts/split-view/editorial-brutalist-900.png", fullPage: true });

    await page.getByRole("button", { name: "Swap comparison systems" }).click();
    await expect(page).toHaveURL(/left=brutalist.*right=editorial/);
    await page.getByRole("button", { name: /EXIT COMPARE/ }).first().click();
    await expect(page).not.toHaveURL(/compare=1/);
    await expect(page.locator(".visual-comparison")).toHaveCount(0);
  });

  test("smoke-checks keyboard focus, reduced motion and the shared reference interaction", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto(directUrl("nocturne", "actions"), { waitUntil: "networkidle" });
    await page.keyboard.press("Tab");
    await expect(page.locator(":focus-visible")).toHaveCount(1);
    await page.getByRole("button", { name: "Explore work ↗" }).click();
    await expect(page.getByText("CONTROL / PRIMARY")).toBeVisible();
    await page.getByRole("button", { name: "Toggle reduced motion" }).click();
    await expect(page.locator("main")).toHaveClass(/reduce-motion/);
  });
});
