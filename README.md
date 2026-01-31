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
pnpm dlx shadcn-vue@latest init
pnpm dlx shadcn-vue@latest add button
```

## Commit message convention
```
Summary line (imperative, <= 72 chars)

Detailed body explaining what and why
```
