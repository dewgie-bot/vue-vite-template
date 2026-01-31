<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { computed } from 'vue'
import { cn } from '@/lib/utils'

type ButtonVariant = 'default' | 'outline'

type ButtonSize = 'sm' | 'md'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  class?: string
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: 'default',
  size: 'md',
})

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950',
  {
    variants: {
      variant: {
        default:
          'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200',
        outline:
          'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
      },
    },
  },
)

const classes = computed(() =>
  cn(buttonVariants({ variant: props.variant, size: props.size }), props.class),
)
</script>

<template>
  <button :type="props.type" :class="classes">
    <slot />
  </button>
</template>
