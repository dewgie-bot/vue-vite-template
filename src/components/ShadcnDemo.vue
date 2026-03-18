<script setup lang="ts">
import Button from "./ui/Button.vue";
import Card from "./ui/Card.vue";
</script>

<template>
  <Card class="space-y-4">
    <div class="space-y-1">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Optional demo
      </p>
      <h2 class="text-xl font-semibold text-zinc-950 dark:text-zinc-50">shadcn-vue styled card</h2>
      <p class="text-sm text-zinc-600 dark:text-zinc-300">
        This demo only renders when the env flag is enabled.
      </p>
    </div>
    <div class="flex flex-wrap gap-3">
      <Button>Primary action</Button>
      <Button variant="outline"> Secondary </Button>
    </div>
  </Card>
</template>
