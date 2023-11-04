import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import EmailJs from '@emailjs/browser'
import Routes from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import VideoBg from 'vue-videobg'

require("./css/fonts.css")

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(EmailJs)
Vue.use(Materialize)
Vue.component('video-bg', VideoBg)

const routes = new VueRouter({
  mode: 'history',
  routes: Routes
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App),
})
