import axios from 'axios';

const state = {
  article: null,
  commentList: []
}

const mutations = {
  'LOAD_ARTICLE' (state, payload) {
    state.article = payload
  },

  'LOAD_COMMENTS'(state, payload) {
    state.commentList = payload
  }
}

const actions = {
  loadArticle ({ commit }, slug) {
    axios.get(`articles/${slug}`)
      .then(res => commit('LOAD_ARTICLE', res.data.article))
      .catch(error => {
        throw error;
      })
  },

  loadComments({ commit }, slug) {
    axios.get(`articles/${slug}/comments`)
      .then (res => commit('LOAD_COMMENTS', res.data.comments))
      .catch(error => {
        throw error
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}

