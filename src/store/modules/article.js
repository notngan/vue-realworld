import axios from 'axios';
import {
  LOAD_ARTICLE,
  LOAD_COMMENTS,
  ADD_FAVORITE_LOCAL,
  REMOVE_FAVORITE_LOCAL
} from '../mutation-types'

const state = {
  article: null,
  commentList: []
}

const mutations = {
  [LOAD_ARTICLE] (state, payload) {
    state.article = payload
    // console.log(payload)
  },

  [LOAD_COMMENTS] (state, payload) {
    state.commentList = payload
  },

  [ADD_FAVORITE_LOCAL] (state) {
    for (let key in state.article) {
      if (key == 'favorited') {
        state.article[key] = true
      }
      if (key == 'favoritesCount') {
        state.article[key] += 1
      }
    }
  },

  [REMOVE_FAVORITE_LOCAL] (state) {
    for (let key in state.article) {
      if (key == 'favorited') {
        state.article[key] = false
      }
      if (key == 'favoritesCount') {
        state.article[key] -= 1
      }
    }
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

