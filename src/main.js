import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/app.css'
import './assets/fontawesome-free-6.5.1-web/css/all.min.css'
import { createPinia } from 'pinia'
import http from "./plugins/axios"

createApp(App).use(createPinia()).use(router).use(http).mount('#app')
