import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'jquery/src/jquery.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/js/popper.js'
import 'bootstrap'


createApp(App).use(store).use(router).mount('#app')
