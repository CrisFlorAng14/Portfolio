import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Importación de librerias de lenguaje
import { createI18n } from 'vue-i18n'
import dictionary from './dictionary'
// Configuración de idioma
const i18n = createI18n({
    messages: dictionary,
    fallbackFormat: 'es',
    locale: navigator.language.startsWith('es') ? 'es' : 'en'
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
