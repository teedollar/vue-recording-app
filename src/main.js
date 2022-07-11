import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

//window.$ = window.jQuery = require('jquery');
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/theme/default.css'
// import 'vue-material/dist/vue-material.min.css'

// Vue.use(VueMaterial)

createApp(App).mount('#app')
