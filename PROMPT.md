You are running a Ralph BUILDING loop for the template repo at templates/vue-vite-ts.

Context files:

- IMPLEMENTATION_PLAN.md (source of truth; update it as tasks are completed)
- AGENTS.md (rules + backpressure commands)

Rules:

- Use pnpm only (no npm).
- Use Vue + Vite+ + TypeScript (latest stable).
- Tailwind must follow v4 install flow (do NOT use Tailwind v3 setup).
- Use Vite+ lint/fmt/check tooling; do not add standalone ESLint or Prettier config.
- Ensure required scripts exist: lint, lint:fix, typecheck.
- Tests: Vitest (unit) and Playwright (e2e). In CI, e2e must run against production-like output (build + preview).
- Router: keep optional; provide an opt-in with-router variant/toggle.
- Routing style: standard vue-router only (no file-based routing plugin).
- TypeScript strict: true.
- shadcn-vue examples: default empty; optionally include a minimal demo (Card + Button) behind an opt-in flag.

Loop steps (repeat):

1. Pick the most important unfinished task in IMPLEMENTATION_PLAN.md.
2. Implement it.
3. Run backpressure commands from AGENTS.md.
4. Update IMPLEMENTATION_PLAN.md (mark done + notes).
5. Commit with the required commit message format.

Completion:

- When done, add `STATUS: COMPLETE` to IMPLEMENTATION_PLAN.md.
