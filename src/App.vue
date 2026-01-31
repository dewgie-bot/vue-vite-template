<script setup lang="ts">
import ShadcnDemo from './components/ShadcnDemo.vue'
import { useTheme } from './composables/useTheme'

const enableRouter = import.meta.env.VITE_ENABLE_ROUTER === 'true'
const enableShadcnDemo = import.meta.env.VITE_ENABLE_SHADCN_DEMO === 'true'

const { label, toggleTheme } = useTheme()
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-50"
  >
    <main class="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <header class="space-y-3">
        <div class="flex items-start justify-between gap-4">
          <div class="space-y-3">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Vue + Vite + TypeScript
            </p>
            <h1 class="text-4xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50">
              A clean, strict template ready for Tailwind v4.
            </h1>
            <p class="text-base text-zinc-600 dark:text-zinc-300">
              Toggle optional features with env flags and keep the default surface minimal.
            </p>
          </div>

          <button
            type="button"
            class="inline-flex h-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
            @click="toggleTheme"
          >
            Theme: {{ label }}
          </button>
        </div>
      </header>

      <section class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h2 class="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
          Icons
        </h2>
        <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          This template uses <span class="font-medium text-zinc-900 dark:text-zinc-100">unplugin-icons</span> with
          the <span class="font-medium text-zinc-900 dark:text-zinc-100">Tabler</span> icon set.
        </p>
        <div class="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
          >
            <IconTablerSearch aria-hidden="true" class="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            Search
          </button>

          <button
            type="button"
            aria-label="Search"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
          >
            <IconTablerSearch aria-hidden="true" class="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </button>
        </div>
      </section>

      <section class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h2 class="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
          Feature toggles
        </h2>
        <ul class="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li>
            <span class="font-medium text-zinc-900 dark:text-zinc-100">Router:</span>
            set
            <code class="rounded bg-zinc-100 px-2 py-1 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">VITE_ENABLE_ROUTER=true</code>
            {{ enableRouter ? '(enabled)' : '(disabled)' }}
          </li>
          <li>
            <span class="font-medium text-zinc-900 dark:text-zinc-100">shadcn-vue demo:</span>
            set
            <code class="rounded bg-zinc-100 px-2 py-1 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">VITE_ENABLE_SHADCN_DEMO=true</code>
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

      <footer class="text-xs text-zinc-500 dark:text-zinc-400">
        Keep this template lean. Add router views, UI components, and tests as your app evolves.
      </footer>
    </main>
  </div>
</template>
