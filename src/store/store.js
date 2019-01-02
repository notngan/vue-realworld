import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import article from './modules/article'
import auth from './modules/auth'

export default new Vuex.Store({
  modules: {
    article,
    auth
  },
})
