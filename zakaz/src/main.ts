import Lara from '@/presets/lara'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.use(PrimeVue, {
	unstyled: true,
	pt: Lara,
})
app.use(createPinia())

app.mount('#app')
