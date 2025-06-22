import { test, expect } from '@playwright/test';

test('El botón de suscripción abre y cierra el modal', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('button', { name: /recibe las últimas novedades/i }).click();
  await expect(page.getByRole('heading', { name: /suscríbete a nuestras novedades/i })).toBeVisible();

  await page.getByRole('button', { name: '✕' }).click();
  await expect(page.getByRole('heading', { name: /suscríbete/i })).not.toBeVisible();
});

test('Validación de errores al enviar formulario vacío', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('button', { name: /recibe las últimas novedades/i }).click();
  await page.getByRole('button', { name: 'Suscribirse' }).click();

  await expect(page.getByText('El nombre es obligatorio')).toBeVisible();
  await expect(page.getByText('El correo es obligatorio')).toBeVisible();
  await expect(page.getByText('Debes aceptar los términos')).toBeVisible();
});

test('Formulario válido muestra mensaje de éxito', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('button', { name: /recibe las últimas novedades/i }).click();

  await page.getByLabel('Nombre:').fill('Israel');
  await page.getByLabel('Correo electrónico:').fill('israel@example.com');
  await page.getByLabel(/acepto los términos/i).check();

  await page.getByRole('button', { name: 'Suscribirse' }).click();

  await expect(page.getByText('¡Gracias por suscribirte!')).toBeVisible();
});