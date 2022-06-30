import { expect, test } from '@playwright/test';

test('expect title', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('QFT');
});
