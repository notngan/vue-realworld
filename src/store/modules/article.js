import axios from 'axios';
import {
  LOAD_ARTICLE,
  LOAD_COMMENTS
} from '../mutation-types'

const state = {
  article: null,
  commentList: []
}

const mutations = {
  [LOAD_ARTICLE] (state, payload) {
    state.article = payload
  },

  [LOAD_COMMENTS] (state, payload) {
    state.commentList = payload
  }
}

const actions = {
  loadArticle ({ commit }, slug) {
    axios.get(`articles/${slug}`)
      .then(res => commit(LOAD_ARTICLE, res.data.article))
      .catch(err => {
        throw err;
      })
  },

  loadComments({ commit }, slug) {
    axios.get(`articles/${slug}/comments`)
      .then (res => commit(LOAD_COMMENTS, res.data.comments))
      .catch(err => {
        throw err
    })
  },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}

