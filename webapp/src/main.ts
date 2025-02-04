import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import apiClient from '@/core/services/api.service.ts'
import { AxiosKey } from '@/core/utlities/symbols.ts'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import { primeTheme } from '../primeTheme'

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .use(PrimeVue, {
    // unstyled: true,
    // ripple: true,
    theme: {
      preset: primeTheme,
    },
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwindcss, primevue',
      },
      prefix: 'p',
      darkModeSelector: 'system',
    },
  })

app.component('PButton', Button)

app.provide(AxiosKey, apiClient)

app.mount('#app')
