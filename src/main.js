import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueI18n  from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import messages from './lang'

export const international = createI18n({
    locale: 'en',
    falbackLocale: 'en',
    messages
});

const app = createApp(App)

app.use(router)
app.use(store)
app.use(international)

app.mount('#app')
