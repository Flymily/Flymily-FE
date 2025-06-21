import { test, expect } from '@playwright/test';

test.describe('Página de Viajes', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/viajes');
  });

  test('Carga y muestra tarjetas de viaje', async ({ page }) => {
    await page.waitForSelector('[data-testid="card-viaje"]', { timeout: 10000 });

    const cardsCount = await page.getByTestId('card-viaje').count();
    expect(cardsCount).toBeGreaterThan(0);
  });

  test('Abre el modal al hacer clic en un viaje', async ({ page }) => {
    await page.getByTestId('card-viaje').first().click();
    await expect(page.getByTestId('modal-viaje')).toBeVisible();
  });

  test('Cierra el modal al hacer clic en cerrar', async ({ page }) => {
    await page.getByTestId('card-viaje').first().click();
    await expect(page.getByTestId('modal-viaje')).toBeVisible();

    await page.getByRole('button', { name: /cerrar/i }).click();
    await expect(page.getByTestId('modal-viaje')).not.toBeVisible();
  });

});
