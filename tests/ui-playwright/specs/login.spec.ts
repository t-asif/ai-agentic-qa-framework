import { test, expect } from '@playwright/test';

test('Test live third-party AI chat app', async ({ page }) => {
  await page.goto('https://huggingface.co/chat/'); 

  await page.click('Start chatting', { timeout: 10000 });

  await expect(page.locator('Log In')).toBeVisible({ timeout: 10000 });

});