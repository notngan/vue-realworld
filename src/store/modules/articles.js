import axios from 'axios';
import router from '../../router'

import {
  LOAD_ARTICLES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CREATE_ARTICLE,
  LOAD_TAGS
} from '../mutation-types'

const state = {
  articleList: [],
  tagList: []
}

const mutations = {
  [LOAD_ARTICLES] (state, payload) {
    state.articleList = payload;
  },

  [ADD_FAVORITE] (state, payload) {
    const article = state.articleList.find(art => art.slug === payload)
    article.favorited = true
    article.favoritesCount +=1
  },

  [REMOVE_FAVORITE] (state, payload) {
    const article = state.articleList.find(art => art.slug === payload)
    article.favorited = false
    article.favoritesCount -=1
  },

  [CREATE_ARTICLE] (state, payload) {
    state.articleList.push(payload)
  },

  [LOAD_TAGS] (state, payload) {
    state.tagList = payload
  }
}

const token = localStorage.getItem('token')
const actions = {
  loadArticles ({ commit }) {
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
        .catch(err => { throw err })
    }
  },

  loadArticlesByAuthor ({ commit }, username) {
    if (!token) {
      axios.get(`articles?author=${username}`)
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(error => {
          throw error
        })
    } else {
      axios({
        method: 'get',
        url: `articles?author=${username}`,
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(err => { throw err })
    }
  },

  loadArticlesByTag ({ commit }, tag) {
    if (!token) {
      axios.get(`articles?tag=${tag}`)
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(error => {
          throw error
        })
    } else {
      axios({
        method: 'get',
        url: `articles?tag=${tag}`,
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(err => { throw err })
    }
  },

  loadArticlesByFavorite ({ commit }, username) {
    if (!token) {
      axios.get(`articles?favorited=${username}`)
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(error => {
          throw error
        })
    } else {
      axios({
        method: 'get',
        url: `articles?favorited=${username}`,
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(err => { throw err })
    }
  },

  loadFeedArticles ({ commit }) {
    if (!token) return
    axios({
      method: 'get',
      url: `articles/feed`,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        commit(LOAD_ARTICLES, res.data.articles)
      })
      .catch(err => { throw err })
  },

  addFavorite ({ commit }, slug) {
    axios({
      method: 'post',
      url: `articles/${slug}/favorite`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
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

  removeFavorite ({ commit }, slug) {
    axios({
      method: 'delete',
      url: `articles/${slug}/favorite`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
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
  },

  createArticle ({ commit }, article) {
    console.log(article)
    axios({
      method: 'post',
      url: 'articles',
      data: {
        article: article
      },
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        commit(CREATE_ARTICLE, res.data.article)
      })
      .catch(err => {
        console.log(err)
      })
  },

  loadTags ({ commit }) {
    axios.get('tags')
      .then(res => {
        commit(LOAD_TAGS, res.data.tags)
      })
      .catch(err => { throw err })
  },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}

