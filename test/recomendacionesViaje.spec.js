import { test, expect } from '@playwright/test';

test('Se muestran todas las categorías de recomendaciones', async ({ page }) => {
  await page.goto('http://localhost:5173/recomendaciones');

  const seccion = page.getByTestId('recomendaciones-viaje');
  const categorias = ['Montaña', 'Camping', 'Playa', 'Nieve', 'Trekking', 'Safari'];

  for (const nombre of categorias) {
    await expect(seccion.getByText(nombre)).toBeVisible();
  }
});

test('Al hacer clic en una categoría se abre el modal con tips', async ({ page }) => {
  await page.goto('http://localhost:5173/recomendaciones');
  const seccion = page.getByTestId('recomendaciones-viaje');

  await seccion.getByText('Playa').click();

  await expect(page.getByRole('heading', { name: /Playa: No olvides llevar/i })).toBeVisible();
  await expect(page.getByText('✔ Toalla')).toBeVisible();
  await expect(page.getByText('✔ Protector solar')).toBeVisible();
});

test('El modal se cierra al hacer clic en "Cerrar"', async ({ page }) => {
  await page.goto('http://localhost:5173/recomendaciones');
  const seccion = page.getByTestId('recomendaciones-viaje');

  await seccion.getByText('Montaña').click();
  await expect(page.getByText('✔ Botas de senderismo')).toBeVisible();

  await page.getByRole('button', { name: 'Cerrar' }).click();
  await expect(page.getByText('✔ Botas de senderismo')).not.toBeVisible();
});
