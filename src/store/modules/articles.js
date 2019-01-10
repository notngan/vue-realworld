import axios from 'axios';
import router from '../../router'

import {
  LOAD_ARTICLES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CREATE_ARTICLE,
  LOAD_TAGS,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
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
  },

  [UPDATE_ARTICLE] (state, payload) {
    const article = state.articleList.find(art => art.slug === payload.slug)
    const index = state.articleList.indexOf(article)
    state.articleList.splice(index, 1, payload)
  },

  [DELETE_ARTICLE] (state, payload) {
    const article = state.articleList.find(art => art.slug === payload)
    const index = state.articleList.indexOf(article)
    state.articleList.splice(index, 1)
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
        .catch(err => {
          throw err
        })
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
        .catch(err => {
          throw err
        })
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
        .catch(err => {
          throw err
        })
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
        .catch(err => {
          throw err
        })
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
      .catch(err => {
        throw err
      })
  },

  addFavorite ({ commit }, payload) {
    axios({
      method: 'post',
      url: `articles/${payload.slug}/favorite`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (payload.route === 'article') {
          commit('article/ADD_FAVORITE_LOCAL', null, { root: true })
        } else {
          commit(ADD_FAVORITE, res.data.article.slug)
        }
      })
      .catch(err => {
        throw err
      })
  },

  removeFavorite ({ commit }, payload) {
    axios({
      method: 'delete',
      url: `articles/${payload.slug}/favorite`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (payload.route === 'article') {
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
        router.push(`article/${res.data.article.slug}`)
      })
      .catch(err => {
        throw err
      })
  },

  updateArticle ({ commit }, payload) {
    axios({
      method: 'put',
      url: `articles/${payload.slug}`,
      data: {
        article: payload.article
      },
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        commit(UPDATE_ARTICLE, res.data.article)
        router.push(`/article/${res.data.article.slug}`)
      })
  },

  deleteArticle ({ commit }, payload) {
    axios({
      method: 'delete',
      url: `articles/${payload.slug}`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        commit(DELETE_ARTICLE, payload.slug)
        router.push(`/profile/${payload.username}`)
      })
      .catch(err => {
        throw err
      })
  },

  loadTags ({ commit }) {
    axios.get('tags')
      .then(res => {
        commit(LOAD_TAGS, res.data.tags)
      })
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

