import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VeeValidate from 'vee-validate'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'https://conduit.productionready.io/api/'

Vue.config.productionTip = false

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
