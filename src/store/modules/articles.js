import axios from 'axios';

const state = {
  articleList: [],
}

const mutations = {
  'LOAD_ARTICLES'(state, payload) {
    state.articleList = payload;
  }
}

const actions = {
  loadArticles({commit}) {
    axios.get('articles')
      .then(res => commit('LOAD_ARTICLES', res.data.articles))
      .catch(error => {
        throw error
      });
  },
}

const getters = {
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

