import { expect, test, type Page } from "@playwright/test";

const directUrl = (design: string, category: string) => `/lab?design=${design}&category=${category}&component=${category}.reference`;
const sizes = [{ name: "mobile", width: 375, height: 812 }, { name: "desktop", width: 1440, height: 900 }] as const;

const customSelects = [
  ["tactile", "[aria-controls='tactile-project-options']", "tactile-project-options", "Digital product"],
  ["nocturne", "[aria-controls='nocturne-select-options']", "nocturne-select-options", "Digital product"],
  ["brutalist", "[aria-controls='brutal-project-type-list']", "brutal-project-type-list", "Digital product"],
  ["playground", "[aria-controls='pg-project-options']", "pg-project-options", "Digital product"],
] as const;

async function visit(page: Page, design: string, category: string, viewport: { width: number; height: number }) {
  await page.setViewportSize(viewport);
  await page.goto(directUrl(design, category), { waitUntil: "networkidle" });
  await expect(page.locator(`main[data-design="${design}"]`)).toBeVisible();
}

async function screenshot(page: Page, path: string) {
  await page.screenshot({ path: `qa-artifacts/expanded-states/${path}`, fullPage: true });
}

test.describe("Phase 5A expanded states", () => {
  test("opens, navigates, selects and dismisses every custom project-type listbox", async ({ page }) => {
    test.setTimeout(180_000);
    for (const viewport of sizes) {
      for (const [design, triggerSelector, listboxId, optionName] of customSelects) {
        await visit(page, design, "forms", viewport);
        const trigger = page.locator(triggerSelector);
        await expect(trigger).toHaveAttribute("role", "combobox");
        await trigger.focus();
        await page.keyboard.press("ArrowDown");
        const listbox = page.locator(`#${listboxId}`);
        await expect(listbox).toBeVisible();
        await screenshot(page, `${design}/forms-select-open-${viewport.name}.png`);
        await page.keyboard.press("End");
        await page.keyboard.press("Home");
        await page.keyboard.press("Escape");
        await expect(listbox).toHaveCount(0);
        await expect(trigger).toBeFocused();
        await trigger.click();
        await listbox.getByRole("option", { name: new RegExp(optionName, "i") }).click();
        await expect(listbox).toHaveCount(0);
        await expect(trigger).toContainText(optionName);
        await trigger.click();
        await page.locator("h1").click();
        await expect(listbox).toHaveCount(0);
      }
    }
  });

  test("keeps native Editorial select semantics while custom systems retain their own listboxes", async ({ page }) => {
    test.setTimeout(90_000);
    for (const viewport of sizes) {
      await visit(page, "editorial", "forms", viewport);
      const select = page.getByRole("combobox", { name: "REASON FOR WRITING" });
      await select.selectOption("press");
      await expect(select).toHaveValue("press");
      await screenshot(page, `editorial/forms-native-select-${viewport.name}.png`);
    }
  });

  test("opens and dismisses menus, popovers and disclosure states without propagation", async ({ page }) => {
    test.setTimeout(180_000);
    const systems = ["tactile", "nocturne", "editorial", "brutalist", "playground"] as const;
    for (const viewport of sizes) {
      for (const design of systems) {
        await visit(page, design, "disclosure", viewport);
        const accordion = page.locator("button[aria-expanded]").first();
        const before = await accordion.getAttribute("aria-expanded");
        await accordion.click();
        await expect(accordion).toHaveAttribute("aria-expanded", before === "true" ? "false" : "true");

        const menuTrigger = page.locator("button[aria-haspopup='menu']").first();
        await menuTrigger.click();
        await expect(page.getByRole("menu").first()).toBeVisible();
        await screenshot(page, `${design}/disclosure-menu-open-${viewport.name}.png`);
        await page.keyboard.press("Escape");
        await expect(page.getByRole("menu")).toHaveCount(0);

        const tabs = page.getByRole("tab");
        if (await tabs.count()) {
          await tabs.first().focus();
          await page.keyboard.press("End");
          await expect(tabs.last()).toBeFocused();
          await page.keyboard.press("Home");
          await expect(tabs.first()).toBeFocused();
        }
      }
    }
  });

  test("opens modal surfaces, closes with Escape, restores focus and captures all systems", async ({ page }) => {
    test.setTimeout(180_000);
    const triggers: Record<string, string> = { tactile: "MODAL", nocturne: "OPEN MODAL", editorial: "OPEN MODAL", brutalist: "OPEN MODAL", playground: "OPEN MODAL" };
    for (const viewport of sizes) {
      for (const [design, name] of Object.entries(triggers)) {
        await visit(page, design, "overlays", viewport);
        const trigger = page.getByRole("button", { name: new RegExp(`^${name}`) }).first();
        await trigger.click();
        const dialog = page.getByRole("dialog").last();
        await expect(dialog).toBeVisible();
        await expect(dialog).toHaveAttribute("aria-modal", "true");
        await screenshot(page, `${design}/overlays-modal-open-${viewport.name}.png`);
        await page.keyboard.press("Escape");
        await expect(page.getByRole("dialog")).toHaveCount(0);
        await expect(trigger).toBeFocused();
      }
    }
  });

  test("exercises representative advanced controls and emulated reduced motion", async ({ page }) => {
    test.setTimeout(120_000);
    for (const design of ["nocturne", "editorial", "brutalist", "playground"] as const) {
      await visit(page, design, "advanced", sizes[0]);
      const slider = page.getByRole("slider").first();
      const start = await slider.inputValue();
      await slider.press("ArrowRight");
      await expect(slider).not.toHaveValue(start);
      const next = page.getByRole("button", { name: /NEXT|RESTART/ }).last();
      await next.click();
      await screenshot(page, `${design}/advanced-active-mobile.png`);
    }

    await page.emulateMedia({ reducedMotion: "reduce" });
    await visit(page, "playground", "overlays", sizes[0]);
    const trigger = page.getByRole("button", { name: /^OPEN MODAL/ }).first();
    await trigger.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });

  test("retains dialog focus containment and focus restoration for Nocturne command", async ({ page }) => {
    await visit(page, "nocturne", "overlays", sizes[1]);
    const trigger = page.getByRole("button", { name: /OPEN COMMAND/ });
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: "Command palette" });
    await expect(dialog).toBeVisible();
    await expect(dialog.locator("input")).toBeFocused();
    await screenshot(page, "nocturne/overlays-command-open-desktop.png");
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });
});
