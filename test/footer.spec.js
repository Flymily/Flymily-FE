import { test, expect } from '@playwright/test';

test('Los enlaces del footer redirigen correctamente', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const contactoLink = page.getByTestId('link-contacto');
  await contactoLink.scrollIntoViewIfNeeded(); 
  await expect(contactoLink).toBeVisible();
  await contactoLink.click();

  await expect(page).toHaveURL(/.*contacto/);
});
