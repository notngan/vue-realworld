import axios from 'axios';
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

const actions = {
  loadArticle ({ commit }, slug) {
    const token = localStorage.getItem('token')
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

  followAuthor ({ commit }, username) {
    const token = localStorage.getItem('token')
    axios({
      method: 'post',
      url: `profiles/${username}/follow`,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(() => {
        commit(FOLLOW_AUTHOR)
      })
      .catch(err => {
        throw err
      })
  },

  unfollowAuthor ({ commit }, username) {
    axios({
      method: 'delete',
      url: `profiles/${username}/follow`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        commit(UNFOLLOW_AUTHOR)
      })
      .catch(err => {
        throw err
      })
  },

  createArticle ({ commit }, article) {

  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}

