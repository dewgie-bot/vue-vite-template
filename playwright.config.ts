import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  use: {
    baseURL: 'http://127.0.0.1:4174',
  },
  webServer: {
    command: 'pnpm preview --host 127.0.0.1 --port 4174',
    url: 'http://127.0.0.1:4174',
    // Avoid reusing an unrelated server running on the same port (common in monorepos/templates).
    reuseExistingServer: false,
  },
})
