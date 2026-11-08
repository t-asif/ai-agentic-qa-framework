import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results/test-results.json' }] // Ye Playwright ka raw result store karega
  ],
  use: {
    headless: true,
  },
});