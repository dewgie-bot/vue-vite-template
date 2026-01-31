import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      globals: true,
      setupFiles: ['./src/tests/unit/setup.ts'],
      include: ['src/tests/unit/**/*.spec.ts'],
      exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
    },
  }),
)
