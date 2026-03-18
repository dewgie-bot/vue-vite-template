import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite-plus";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  lint: {
    ignorePatterns: [
      "coverage/**",
      "dist/**",
      "node_modules/**",
      "playwright-report/**",
      "src/components.d.ts",
      "test-results/**",
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns: ["src/components.d.ts"],
  },
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./src/tests/unit/setup.ts"],
    include: ["src/tests/unit/**/*.spec.ts"],
    exclude: ["tests/e2e/**", "node_modules/**", "dist/**"],
  },
  staged: {
    "**/*.{js,cjs,mjs,ts,cts,mts,vue}": "vp check --fix",
  },
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      dts: "src/components.d.ts",
      resolvers: [
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
