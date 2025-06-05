import { test, expect } from '@playwright/test';

test.describe('Página Home - E2E', () => {
  const getActiveSlideSrc = async (page) => {
    return await page.locator('.slick-slide.slick-active img').getAttribute('src');
  };

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173'); 
  });

  test('el slider avanza automáticamente', async ({ page }) => {
    const firstImage = await getActiveSlideSrc(page);

    await page.waitForTimeout(10000); 

    const newImage = await getActiveSlideSrc(page);

    expect(newImage).not.toBe(firstImage);
  });

  test('el slider avanza al hacer clic en el botón siguiente', async ({ page }) => {
    const firstImage = await getActiveSlideSrc(page);

    await page.click('.slick-next');
    await page.waitForTimeout(1000);

    const newImage = await getActiveSlideSrc(page);

    expect(newImage).not.toBe(firstImage);
  });
});
