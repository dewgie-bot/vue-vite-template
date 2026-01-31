import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './styles/tailwind.css'
import './styles/globals.css'

const app = createApp(App)
const enableRouter = import.meta.env.VITE_ENABLE_ROUTER === 'true'

if (enableRouter)
  app.use(router)

app.mount('#app')
