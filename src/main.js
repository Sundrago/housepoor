import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueDisqus from 'vue-disqus'

createApp(App)
    .use(VueDisqus, { shortname: 'housepoor' })
    .mount('#app')