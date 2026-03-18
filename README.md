# Vue + Vite+ + TypeScript Template

A strict, minimal Vue 3 starter with Vite+, Tailwind CSS v4, Vitest, and Playwright.

## Requirements

- `vp`

## Quickstart

```bash
vp install
cp .env.example .env
vp dev
```

## Feature toggles

Optional features are controlled via env flags (strings) and are **lazy-loaded** to keep the initial bundle lean.

Defaults live in `.env.example`:

- `VITE_ENABLE_ROUTER=false`
- `VITE_ENABLE_SHADCN_DEMO=false`

To enable a feature, copy `.env.example` to `.env` and set the flag to `true`.

## Router

This template uses **Vue Router v5** (a transition release; upgrading from Router v4 is non-breaking for typical apps).

## Scripts

- `vp dev` — start the dev server
- `vp build` — build for production
- `vp preview` — preview production build
- `vp check` — format, lint, and type-check
- `vp test` — run unit tests
- `vp run test:unit:watch` — run unit tests in watch mode
- `vp run test:unit:coverage` — run unit tests with coverage
- `vp run test:e2e` — build + run Playwright tests
- `vp run test:e2e:ui` — build + Playwright UI mode

## Testing notes

### Playwright browsers (one-time install)

```bash
vp exec playwright install

# Linux CI / headless environments:
vp exec playwright install --with-deps
```

### E2E workflow

`vp run test:e2e` runs `vp build` first and then runs Playwright against `vp preview` using Playwright's `webServer` config.

If you run Playwright directly (for example `vp exec playwright test`), remember that `vp preview` requires an existing `dist/` from `vp build`.

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

Note: some shadcn-vue components may use `lucide-vue-next` icons.

## Commit message convention

```
Summary line (imperative, <= 72 chars)

Detailed body explaining what and why
```
