import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts}',
    './src/components/ui/**/*.{vue,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
