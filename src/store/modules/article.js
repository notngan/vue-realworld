import axios from 'axios';
import router from '../../router'
import {
  LOAD_ARTICLE,
  LOAD_COMMENTS,
  ADD_FAVORITE_LOCAL,
  REMOVE_FAVORITE_LOCAL,
  FOLLOW_AUTHOR,
  UNFOLLOW_AUTHOR
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
    state.article.favorited = true
    state.article.favoritesCount += 1
  },

  [REMOVE_FAVORITE_LOCAL] (state) {
    state.article.favorited = false
    state.article.favoritesCount -= 1
  },

  [FOLLOW_AUTHOR] (state) {
    state.article.author.following = true
  },

  [UNFOLLOW_AUTHOR] (state) {
    state.article.author.following = false
  }
}

const token = localStorage.getItem('token')

const actions = {

  loadArticle ({ commit }, slug) {
    if (!token) {
      axios.get(`articles/${slug}`)
        .then(res => commit(LOAD_ARTICLE, res.data.article))
        .catch(err => {
          console.log(err)
        });
    } else {
      axios({
        method: 'get',
        url: `articles/${slug}`,
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(res => commit(LOAD_ARTICLE, res.data.article))
    }
  },

  loadComments({ commit }, slug) {
    axios.get(`articles/${slug}/comments`)
      .then (res => commit(LOAD_COMMENTS, res.data.comments))
      .catch(err => {
        throw err
    })
  },

  followAuthor ({ commit }, payload) {
    axios({
      method: 'post',
      url: `profiles/${payload.username}/follow`,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(() => {
        if (payload.route !== 'profile') {
          commit(FOLLOW_AUTHOR)
        } else {
          commit('auth/FOLLOW_USER', null, { root: true })
        }
      })
      .catch(err => {
        throw err
      })
  },

  unfollowAuthor ({ commit }, payload) {
    axios({
      method: 'delete',
      url: `profiles/${payload.username}/follow`,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(() => {
        if (payload.route !== 'profile') {
          commit(UNFOLLOW_AUTHOR)
        } else {
          commit('auth/UNFOLLOW_USER', null, { root: true })
        }
      })
      .catch(err => {
        throw err
      })
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}

