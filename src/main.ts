import { createApp } from 'vue'
import App from './App.vue'
import { initTheme } from './composables/useTheme'
import './styles/tailwind.css'
import './styles/globals.css'

initTheme()

const app = createApp(App)
const enableRouter = import.meta.env.VITE_ENABLE_ROUTER === 'true'

async function bootstrap() {
  if (enableRouter) {
    const { router } = await import('./router')
    app.use(router)
    await router.isReady()
  }

  app.mount('#app')
}

void bootstrap()
