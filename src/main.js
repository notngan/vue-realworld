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

Vue.mixin({
  methods: {
    formatDate (d) {
      const month = new Date(d).toDateString().substring(4, 7)
      let date = new Date(d).getDate()
      const foo = date % 10

      if (foo == 1 && date !== 11) {
        date = date + 'st'
      } else if (foo == 2 && date !== 12) {
        date = date + 'nd'
      } else if (foo == 3 && date !== 13) {
        date = date + 'rd'
      } else {
        date = date + 'th'
      }
      return month + ' ' + date;
    }
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
