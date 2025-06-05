import { test, expect } from '@playwright/test';

test.describe('Navbar - E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('carga y muestra logo y enlaces principales (escritorio)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    await expect(page.locator('img[alt*="logo"]')).toBeVisible();
    await expect(page.getByRole('link', { name: /viajes/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /buscador/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /comunidad/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contacto/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /iniciar sesión/i })).toBeVisible();
  });

  test('navega correctamente a las páginas al hacer clic en enlaces (escritorio)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    await page.getByRole('link', { name: /viajes/i }).click();
    await expect(page).toHaveURL(/.*viajes/);
    await expect(page.locator('h1')).toContainText(/viajes/i);

    await page.getByRole('link', { name: /buscador/i }).click();
    await expect(page).toHaveURL(/.*buscador/);
    await expect(page.locator('h1')).toContainText(/buscador/i);

    await page.getByRole('link', { name: /comunidad/i }).click();
    await expect(page).toHaveURL(/.*comunidad/);
    await expect(page.locator('h1')).toContainText(/comunidad/i);

    await page.getByRole('link', { name: /contacto/i }).click();
    await expect(page).toHaveURL(/.*contacto/);
    await expect(page.locator('h1')).toContainText(/contacto/i);
  });

  test('interacción con menú hamburguesa en vista móvil', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 720 });

    const openMenuBtn = page.getByRole('button', { name: /abrir menú/i });
    await expect(openMenuBtn).toBeVisible();
    await openMenuBtn.click();

    const closeMenuBtn = page.getByRole('button', { name: /cerrar menú/i });
    await expect(closeMenuBtn).toBeVisible();

    await expect(page.getByRole('link', { name: /viajes/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /buscador/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /comunidad/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contacto/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /iniciar sesión/i })).toBeVisible();

    await closeMenuBtn.click();
    await expect(closeMenuBtn).not.toBeVisible();
  });

  test('el menú hamburguesa navega y se cierra correctamente al hacer clic en un enlace', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 720 });

    const openMenuBtn = page.getByRole('button', { name: /abrir menú/i });
    await openMenuBtn.click();

    await page.getByRole('link', { name: /viajes/i }).click();
    await expect(page).toHaveURL(/.*viajes/);
    await expect(page.locator('h1')).toContainText(/viajes/i);

    const closeMenuBtn = page.getByRole('button', { name: /cerrar menú/i });
    await expect(closeMenuBtn).not.toBeVisible();
  });
});
