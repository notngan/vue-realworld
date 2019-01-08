import axios from 'axios';
import router from '../../router'

import {
  LOAD_ARTICLES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../mutation-types'

const state = {
  articleList: [],
}

const mutations = {
  [LOAD_ARTICLES] (state, payload) {
    state.articleList = payload;
  },

  [ADD_FAVORITE] (state, payload) {
    const article = state.articleList.find(art => art.slug == payload)
    for (let key in article) {
      if (key == 'favorited') {
        article[key] = true
      }
      if (key == 'favoritesCount') {
        article[key] += 1
      }
    }
  },

  [REMOVE_FAVORITE] (state, payload) {
    const article = state.articleList.find(art => art.slug == payload)
    for (let key in article) {
      if (key == 'favorited') {
        article[key] = false
      }
      if (key == 'favoritesCount') {
        article[key] -= 1
      }
    }
  }
}

const actions = {
  loadArticles ({ commit }, token) {
    if (!token) {
      axios.get('articles')
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(error => {
          throw error
        });
    } else {
      axios({
        method: 'get',
        url: 'articles',
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
    }
  },

  loadArticlesByAuthor ({ commit }, username) {
    axios.get(`articles?author=${username}`)
      .then(res => commit(LOAD_ARTICLES, res.data.articles))
      .catch(error => {
        throw error
      })
  },

  addFavorite ({ commit }, payload) {
    axios({
      method: 'post',
      url: `articles/${payload.slug}/favorite`,
      headers: {
        Authorization: `Token ${payload.token}`
      }
    })
      .then(res => {
        if (router.history.current.params.id) {
          commit('article/ADD_FAVORITE_LOCAL', null, { root: true })
        } else {
          commit(ADD_FAVORITE, res.data.article.slug)
        }
      })
      .catch(err => {
        console.log(err)
      })
  },

  removeFavorite ({ commit }, payload) {
    axios({
      method: 'delete',
      url: `articles/${payload.slug}/favorite`,
      headers: {
        Authorization: `Token ${payload.token}`
      }
    })
      .then(res => {
        if (router.history.current.params.id) {
          commit('article/REMOVE_FAVORITE_LOCAL', null, { root: true })
        } else {
          commit(REMOVE_FAVORITE, res.data.article.slug)
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

