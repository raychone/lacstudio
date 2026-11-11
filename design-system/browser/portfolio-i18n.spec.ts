import { expect, test } from "@playwright/test";

const homeHeadings = {
  en: "From idea to",
  fr: "De l'idée au",
  ro: "De la idee la",
  es: "De la idea a un",
} as const;

for (const [locale, heading] of Object.entries(homeHeadings)) {
  test(`${locale} home renders its visible locale copy`, async ({ page }) => {
    await page.goto(`/${locale}/?design=nocturne`);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.locator("h1")).toContainText(heading);
  });
}

test("language selection preserves the current route and design while changing visible copy", async ({ page }) => {
  await page.goto("/en/work?design=playground");
  await page.locator('a[href="/es/work?design=playground"]').first().click();
  await expect(page).toHaveURL(/\/es\/work\?design=playground/);
  await expect(page.locator("h1")).toContainText("Creado para el trabajo que ocurre detrás de la pantalla.");
});
