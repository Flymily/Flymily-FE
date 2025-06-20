import { test, expect } from '@playwright/test';

test('El footer se muestra correctamente con todos los enlaces', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const footer = page.locator('footer');
  await expect(footer).toBeVisible();

  await expect(footer.getByRole('link', { name: 'Quiénes somos' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Preguntas frecuentes' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Contacto' })).toBeVisible();
});

test('Los enlaces del footer redirigen correctamente', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const footer = page.locator('footer');

  await footer.getByRole('link', { name: 'Quiénes somos' }).click();
  await expect(page).toHaveURL(/.*quienes-somos/);

  await page.goto('http://localhost:5173/');
  await footer.getByRole('link', { name: 'Preguntas frecuentes' }).click();
  await expect(page).toHaveURL(/.*faq/);

  await page.goto('http://localhost:5173/');
  await footer.getByRole('link', { name: 'Contacto' }).click();
  await expect(page).toHaveURL(/.*contacto/);
});
