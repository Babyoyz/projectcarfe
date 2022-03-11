import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app = createApp(App)

import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import VueSplide from '@splidejs/vue-splide';
app.use( VueSplide );
app.use(createPinia())
app.use(router)

app.mount('#app')
