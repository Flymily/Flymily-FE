import { test, expect } from '@playwright/test';

test('Navbar muestra enlaces y logo correctamente', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const header = page.locator('header');

  await expect(header.getByAltText('Flymily logo')).toBeVisible();

  await expect(header.getByRole('link', { name: 'Viajes' })).toBeVisible();
  await expect(header.getByRole('link', { name: 'Buscador' })).toBeVisible();
  await expect(header.getByRole('link', { name: 'Comunidad' })).toBeVisible();

  const contactoLinks = header.getByRole('link', { name: 'Contacto' });
  await expect(contactoLinks.nth(0)).toBeVisible();

  await expect(header.getByLabel('Iniciar sesión')).toBeVisible();
});
