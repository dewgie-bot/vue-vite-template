import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import './styles/globals.css'
import { router } from './router'

const app = createApp(App)
const enableRouter = import.meta.env.VITE_ENABLE_ROUTER === 'true'

if (enableRouter)
  app.use(router)

app.mount('#app')
