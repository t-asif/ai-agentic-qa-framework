import { test, expect } from '@playwright/test';

test('Test live third-party AI chat app', async ({ page }) => {
  await page.goto('https://huggingface.co/chat/'); 
  await page.waitForTimeout(5000); // Wait for the page to load completely

});