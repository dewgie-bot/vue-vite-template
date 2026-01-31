# Vue + Vite + TypeScript Template — IMPLEMENTATION_PLAN.md (vue-vite-ts)

Purpose: Implementation-ready plan for a Vue + Vite + TypeScript template using pnpm, Tailwind v4, shadcn-vue, ESLint antfu, Vitest, Playwright, Husky precommit, and commit message conventions. Planning only — no scaffolding or installs.

---

## 1) Exact Folder Structure
```
vue-vite-ts/
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ .husky/
│  └─ pre-commit
├─ .vscode/
│  ├─ extensions.json
│  └─ settings.json
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ ui/                 # shadcn-vue components
│  ├─ composables/
│  ├─ layouts/               # optional, for app-level layout patterns
│  ├─ router/
│  │  └─ index.ts
│  ├─ styles/
│  │  ├─ tailwind.css         # Tailwind v4 entry
│  │  └─ globals.css          # app-wide global styles
│  ├─ tests/
│  │  └─ unit/                # Vitest unit tests colocated by domain
│  ├─ App.vue
│  ├─ main.ts
│  └─ env.d.ts
├─ tests/
│  └─ e2e/                    # Playwright e2e tests
├─ .editorconfig
├─ .eslintignore
├─ eslint.config.ts           # ESLint antfu flat config
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ vitest.config.ts
├─ playwright.config.ts
└─ README.md
```

---

## 2) Package Scripts (Exact)
These scripts are required and will be implemented in `package.json`:
- `dev` — Vite dev server
- `build` — Vite build
- `preview` — Vite preview
- `lint` — ESLint check
- `lint:fix` — ESLint with fixes
- `typecheck` — Vue TSC or TS check for Vue
- `test:unit` — Vitest run
- `test:e2e` — Playwright headless
- `test:e2e:ui` — Playwright UI mode

Husky requires a `prepare` script to install hooks (documented in plan).

---

## 3) Dependency Choices (Exact)
**Runtime dependencies** (core app):
- `vue` (latest stable)
- `vue-router` (for routing; standard SPA structure)

**Dev dependencies**:
- `vite` + `@vitejs/plugin-vue` (Vite + Vue support)
- `typescript` (latest stable)
- `vue-tsc` (type checking for Vue SFCs)
- `eslint` + `@antfu/eslint-config` (ESLint antfu; no Prettier)
- `vitest` + `@vitest/coverage-v8` (unit tests + coverage)
- `@vue/test-utils` + `@testing-library/vue` (component/unit testing)
- `playwright` (e2e tests)
- `@playwright/test` (Playwright test runner)
- `tailwindcss` v4 (Tailwind install flow)
- `postcss` (Tailwind v4 uses PostCSS; v4 restructured, still needed)
- `autoprefixer` (if required by Tailwind v4 flow)
- `shadcn-vue` (preferred component scaffolding/tooling)
- `lucide-vue-next` (icon dependency commonly used by shadcn-vue)
- `class-variance-authority`, `clsx`, `tailwind-merge` (shadcn-vue utils)
- `husky` (Git hooks)

Notes:
- No Prettier.
- pnpm only.

---

## 4) Tailwind CSS v4 Integration Steps (No Code)
Follow the **Tailwind v4 install flow** (not v3):
1. Add Tailwind v4 as a dev dependency.
2. Create the Tailwind entry file in `src/styles/tailwind.css`.
3. Ensure Tailwind’s base + utilities directives exist in that entry file.
4. Import `src/styles/tailwind.css` into `src/main.ts`.
5. Use Tailwind v4 configuration style per official docs (v4 config and content scanning approach).
6. Ensure content scanning includes:
   - `src/**/*.vue`
   - `src/**/*.ts`
   - `src/components/ui/**/*` (shadcn-vue)
   - `index.html`
7. Verify CSS pipeline works via Vite.

---

## 5) shadcn-vue Integration Approach
1. Use `shadcn-vue` CLI to initialize with Vite + Vue + Tailwind v4 (ensure correct preset).
2. Configure component output to `src/components/ui/`.
3. Ensure Tailwind v4 theme tokens align with shadcn-vue expectations.
4. Add supporting utilities:
   - `class-variance-authority`
   - `clsx`
   - `tailwind-merge`
5. Use `lucide-vue-next` for icons if shadcn-vue components require it.
6. Document how to add new components in README (e.g., CLI usage).

---

## 6) ESLint (antfu) Setup
- Use `eslint.config.ts` with `@antfu/eslint-config`.
- Ensure Vue + TypeScript compatibility (antfu defaults cover Vue; verify configuration).
- Provide `lint` and `lint:fix` scripts.

---

## 7) Vitest Setup Strategy
- Place unit tests in `src/tests/unit/`.
- Coverage via `@vitest/coverage-v8`.
- Include Vue test utils and testing-library.
- Ensure Vite config integrates test environment and Vue plugin.

---

## 8) Playwright E2E Setup Strategy
- Place e2e tests in `tests/e2e/`.
- Playwright config to run against built preview server (Vite preview).
- Provide scripts:
  - `test:e2e` (headless)
  - `test:e2e:ui` (interactive)
- Example target: test that the homepage renders and key UI components load.

---

## 9) CI Outline (GitHub Actions)
`ci.yml` steps:
1. Checkout repo
2. Setup Node LTS
3. Install pnpm
4. `pnpm install`
5. `pnpm lint`
6. `pnpm typecheck`
7. `pnpm test:unit`
8. `pnpm test:e2e` (headless; ensure Playwright browsers installed)

---

## 10) Husky Hook Plan
- Add `prepare` script to install husky hooks on install.
- Create `pre-commit` hook:
  - `pnpm lint:fix && pnpm typecheck`

---

## 11) Editor Settings
**.vscode/settings.json**
- Enable ESLint on save.
- Use TypeScript/JS formatting via ESLint (no Prettier).

**.vscode/extensions.json**
- Recommend:
  - ESLint
  - Volar
  - Tailwind CSS IntelliSense
  - Playwright Test Runner

**.editorconfig**
- Consistent line endings, charset, indent rules.

---

## 12) Commit Message Convention
Document in README:
```
Summary line (imperative, <= 72 chars)

Detailed body explaining what and why
```

---

## 13) Acceptance Checklist
- [ ] `pnpm dev` runs the template without errors.
- [ ] `pnpm build` and `pnpm preview` succeed.
- [ ] `pnpm lint` and `pnpm lint:fix` succeed.
- [ ] `pnpm typecheck` passes with `vue-tsc`.
- [ ] `pnpm test:unit` passes (Vitest).
- [ ] `pnpm test:e2e` passes (Playwright).
- [ ] Tailwind v4 styles are applied to the UI.
- [ ] shadcn-vue components render correctly.
- [ ] Husky pre-commit runs `pnpm lint:fix && pnpm typecheck`.
- [ ] Commit message convention documented.

---

## Decisions (from TK)
1. **Router**: keep routing optional; provide an opt-in “with-router” variant/toggle.
2. **Routing style**: standard `vue-router` config only (no file-based routing plugin).
3. **Playwright in CI**: run against production-like output: `pnpm build` + `pnpm preview`.
4. **TypeScript**: `strict: true` by default.
5. **shadcn-vue examples**: default scaffold is empty; optionally include a minimal demo (1–2 components like Card + Button) behind an opt-in flag.

---

## Progress
- [x] Scaffolded base Vite + Vue + TS structure with configs, scripts, and initial app shell.
- [x] Added optional router toggle and minimal demo components behind env flags.
- [x] Added Tailwind v4 entry, config, and Vite plugin wiring.
- [x] Added Vitest + Playwright starter tests and configs.
- [x] Added CI workflow, ESLint antfu config, editor settings, and Husky hook.
- [ ] Verify installs, run backpressure commands cleanly, and tighten any failing configs. (blocked: `pnpm install` failed with `EAI_AGAIN` reaching registry.npmjs.org on 2026-01-31; install timed out; retry on 2026-01-31 still failed with `EAI_AGAIN`. Retry on 2026-01-31 timed out again; retry on 2026-01-31 failed with `EAI_AGAIN` again. Retry on 2026-01-31 failed with `EAI_AGAIN` again for multiple deps; `pnpm lint/typecheck/test:unit/test:e2e` failed due to missing `node_modules` on 2026-01-31. Retry on 2026-01-31 failed with `EAI_AGAIN` again for multiple deps; `pnpm lint/typecheck/test:unit/test:e2e` failed due to missing `node_modules` on 2026-01-31.)


STATUS: IN_PROGRESS
