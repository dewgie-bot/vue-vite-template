# Vue + Vite + TypeScript Template

A strict, minimal Vue 3 starter with Tailwind CSS v4, ESLint antfu, Vitest, and Playwright.

## Requirements
- pnpm
- Node.js (LTS)

## Scripts
- `pnpm dev` — start Vite dev server
- `pnpm build` — build for production
- `pnpm preview` — preview production build
- `pnpm lint` — run ESLint
- `pnpm lint:fix` — run ESLint with fixes
- `pnpm typecheck` — run `vue-tsc`
- `pnpm test:unit` — run Vitest
- `pnpm test:e2e` — build + run Playwright tests
- `pnpm test:e2e:ui` — build + Playwright UI mode

## Icons (Iconify + Tabler)

This template is configured with:
- `unplugin-icons`
- `@iconify-json/tabler`
- `unplugin-vue-components` + `IconsResolver` for component auto-import

### Usage

Use Tabler icons as Vue components with the `Icon` prefix:

```vue
<template>
  <button type="button" aria-label="Search">
    <IconTablerSearch aria-hidden="true" />
  </button>
</template>
```

Accessibility notes:
- If the icon is purely decorative (used alongside text), add `aria-hidden="true"`.
- If the icon is the only content (icon-only button), provide an accessible label (e.g. `aria-label`).

## Feature toggles
These features are opt-in and disabled by default:

- Router: set `VITE_ENABLE_ROUTER=true` in your `.env` file.
- shadcn-vue demo: set `VITE_ENABLE_SHADCN_DEMO=true`.

## Tailwind v4
Tailwind entry lives at `src/styles/tailwind.css` and is imported in `src/main.ts`.

## Theme (light/dark)
- Theme toggle lives in `src/App.vue`.
- Preference is stored in `localStorage` under `theme` (`light` | `dark`).
- First load respects `prefers-color-scheme` when no stored preference exists.
- The `dark` class is toggled on `<html>` for Tailwind class-based theming.
- To avoid a light→dark flash, `index.html` applies the initial theme before Vue mounts.
- Tailwind class-based dark mode is enabled via `@custom-variant dark` in `src/styles/tailwind.css`.

## shadcn-vue
This template keeps `src/components/ui` in place for shadcn-vue components. Use the CLI to add more:

```bash
pnpm dlx shadcn-vue@2.4.3 init
pnpm dlx shadcn-vue@2.4.3 add button
```

## Commit message convention
```
Summary line (imperative, <= 72 chars)

Detailed body explaining what and why
```
