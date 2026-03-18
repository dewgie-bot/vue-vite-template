# AGENTS.md (vue-vite-ts)

## Non-negotiables

- **pnpm only** (no npm).
- **Vue + Vite+ + TypeScript** (latest stable).
- **Tailwind CSS v4 install flow** only (no Tailwind v3 setup steps).
- **Vite+ lint/fmt/check flow** (no standalone ESLint or Prettier setup).
- Keep code readable: strong typing, light comments when logic is non-obvious.

## Backpressure (run these every iteration)

```bash
vp check
vp test
vp run test:e2e
```

## Commit message convention

First line: brief summary.

Blank line.

Then a detailed body explaining what/why.

## Completion

When all tasks in `IMPLEMENTATION_PLAN.md` are done, add:

`STATUS: COMPLETE`
