import { expect, test } from "@playwright/test";

const locales = [
  { code: "en", navigation: "Work" },
  { code: "fr", navigation: "Réalisations" },
  { code: "ro", navigation: "Proiecte" },
  { code: "es", navigation: "Proyectos" },
] as const;

test.describe("localized portfolio routes", () => {
  for (const locale of locales) {
    test(`${locale.code} renders a localized Work route with matching document language`, async ({ page }) => {
      await page.goto(`/${locale.code}/work?design=nocturne`, { waitUntil: "networkidle" });
      await expect(page.locator("html")).toHaveAttribute("lang", locale.code);
      await expect(page.getByRole("navigation").first().getByRole("link", { name: locale.navigation, exact: true })).toBeVisible();
      await expect(page.locator('.portfolio-shell[data-design="nocturne"]')).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/${locale.code}/work$`));
      await expect(page.locator('link[rel="alternate"][hreflang="fr"]')).toHaveAttribute("href", /\/fr\/work$/);
    });
  }

  test("language switching keeps the equivalent route and selected design", async ({ page }) => {
    await page.goto("/fr/work/medichelp?design=playground", { waitUntil: "networkidle" });
    await page.getByRole("link", { name: "ES", exact: true }).click();
    await expect(page).toHaveURL(/\/es\/work\/medichelp\?design=playground$/);
    await expect(page.locator('.portfolio-shell[data-design="playground"]')).toBeVisible();
  });

  test("a localized unknown route renders the matching 404", async ({ page }) => {
    await page.goto("/ro/o-ruta-inexistenta", { waitUntil: "networkidle" });
    await expect(page.locator("html")).toHaveAttribute("lang", "ro");
    await expect(page.getByRole("heading", { name: "Pagina nu a putut fi găsită." })).toBeVisible();
  });
});
