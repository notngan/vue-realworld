import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import article from './modules/article'
import articles from './modules/articles'
import auth from './modules/auth'
import message from './modules/message'

export default new Vuex.Store({
  modules: {
    article,
    articles,
    auth,
    message
  }
})
