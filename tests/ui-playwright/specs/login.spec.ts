import { test, expect } from '@playwright/test';

test('Test live third-party AI chat app', async ({ page }) => {
  await page.goto('https://huggingface.co/chat/'); 

});