/// <reference types="vite/client" />

// Let the TypeScript language server resolve `.vue` imports in `.ts` files.
// (vue-tsc understands this automatically, but VS Code can show TS2307 without the shim.)
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
