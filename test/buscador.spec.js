import { test, expect } from '@playwright/test';

test.describe('Buscador de viajes', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/buscador'); 
  });

  test('muestra campos del formulario y permite interacción básica', async ({ page }) => {
    
    const tipoViaje = page.locator('select').first();
    await expect(tipoViaje).toBeVisible();
    await tipoViaje.selectOption('playa');

  
    const datePickers = page.locator('input[placeholder="Ida"], input[placeholder="Vuelta"]');
    await expect(datePickers.nth(0)).toBeVisible();
    await expect(datePickers.nth(1)).toBeVisible();

 
    await page.getByPlaceholder('Origen').fill('Barcelona');
    await page.getByPlaceholder('Destino').fill('Tenerife');

    
    const adultos = page.getByText('Adultos').locator('..'); 
    await adultos.getByText('+').click();
    await expect(adultos).toContainText('3');

    
    const ninos = page.getByText('Niños').locator('..');
    await ninos.getByText('-').click(); 
    await expect(ninos).toContainText('1');

  
    const edadSelector = page.locator('label:has-text("Edades:")').locator('..').locator('select');
    await expect(edadSelector).toHaveCount(1);
    await edadSelector.first().selectOption('3');
  });

  test('activa filtros avanzados y muestra los campos adicionales', async ({ page }) => {
    
    await page.getByRole('button', { name: /búsqueda avanzada/i }).click();

    const selects = page.locator('select');
    await expect(selects.nth(1)).toContainText('Accesibilidad');
    await expect(selects.nth(2)).toContainText('Tipo experiencia');
    await expect(selects.nth(3)).toContainText('Modalidad');

    await expect(page.getByPlaceholder('Presupuesto máximo (€)')).toBeVisible();

    await page.getByRole('button', { name: /ocultar búsqueda avanzada/i }).click();
    await expect(selects.nth(1)).toBeHidden();
  });

});
