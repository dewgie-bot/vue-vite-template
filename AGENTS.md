# AGENTS.md (vue-vite-ts)

## Non-negotiables
- **pnpm only** (no npm).
- **Vue + Vite + TypeScript** (latest stable).
- **Tailwind CSS v4 install flow** only (no Tailwind v3 setup steps).
- **ESLint antfu** (no Prettier).
- Keep code readable: strong typing, light comments when logic is non-obvious.

## Backpressure (run these every iteration)
```bash
pnpm lint
pnpm typecheck
pnpm test:unit
pnpm test:e2e
```

## Commit message convention
First line: brief summary.

Blank line.

Then a detailed body explaining what/why.

## Completion
When all tasks in `IMPLEMENTATION_PLAN.md` are done, add:

`STATUS: COMPLETE`
