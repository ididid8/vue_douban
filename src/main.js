import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'


Vue.use(vueScrollBehavior, { router: router })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
