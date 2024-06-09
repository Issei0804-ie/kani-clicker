import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { initIntervalManager } from '@/scripts/IntervalManager'

const app = createApp(App)

app.use(createPinia())

initIntervalManager()

app.mount('#app')
