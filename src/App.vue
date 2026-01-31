<script setup lang="ts">
import ShadcnDemo from './components/ShadcnDemo.vue'

const enableRouter = import.meta.env.VITE_ENABLE_ROUTER === 'true'
const enableShadcnDemo = import.meta.env.VITE_ENABLE_SHADCN_DEMO === 'true'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
    <main class="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <header class="space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Vue + Vite + TypeScript
        </p>
        <h1 class="text-4xl font-semibold leading-tight text-slate-900">
          A clean, strict template ready for Tailwind v4.
        </h1>
        <p class="text-base text-slate-600">
          Toggle optional features with env flags and keep the default surface minimal.
        </p>
      </header>

      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold text-slate-900">Feature toggles</h2>
        <ul class="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            <span class="font-medium text-slate-800">Router:</span>
            set <code class="rounded bg-slate-100 px-2 py-1">VITE_ENABLE_ROUTER=true</code>
            {{ enableRouter ? '(enabled)' : '(disabled)' }}
          </li>
          <li>
            <span class="font-medium text-slate-800">shadcn-vue demo:</span>
            set <code class="rounded bg-slate-100 px-2 py-1">VITE_ENABLE_SHADCN_DEMO=true</code>
            {{ enableShadcnDemo ? '(enabled)' : '(disabled)' }}
          </li>
        </ul>
      </section>

      <section v-if="enableShadcnDemo" class="space-y-4">
        <ShadcnDemo />
      </section>

      <section v-if="enableRouter" class="space-y-4">
        <RouterView />
      </section>

      <footer class="text-xs text-slate-500">
        Keep this template lean. Add router views, UI components, and tests as your app evolves.
      </footer>
    </main>
  </div>
</template>
