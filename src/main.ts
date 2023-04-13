import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '~/router'

import './styles/app.css'
import './styles/main.css'

async function mountApp() {
  const app = createApp(App)
  // Configure routing
  setupRouter(app)
  // Mount when the route is ready
  await router.isReady()
  app.mount('#app')
}

mountApp()
