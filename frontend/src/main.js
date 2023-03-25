import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './plugins/router.ts'

import './assets/css/common.css'

import vuetify from './plugins/vuetify.ts'

createApp(App)
    .use(createPinia())
    .use(vuetify)
    .use(router)
    .mount('#app')