import process from "node:process";
import { defineConfig } from "@playwright/test";

const port = Number(process.env.PW_PORT ?? process.env.PLAYWRIGHT_PORT ?? 4174);
const baseURL = `http://127.0.0.1:${port}`;
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: isCI ? "list" : [["html", { open: "never" }]],
  use: {
    baseURL,
    trace: isCI ? "on-first-retry" : "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: `vp preview --host 127.0.0.1 --port ${port}`,
    url: baseURL,
    // Avoid reusing an unrelated server running on the same port (common in monorepos/templates).
    reuseExistingServer: false,
  },
});
