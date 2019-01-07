import axios from 'axios';
import {
  LOAD_ARTICLES,
  ADD_FAVORITE
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
  }
}

const actions = {
  loadArticles({ commit }, token) {
    if (!token) {
      axios.get('articles')
        .then(res => commit(LOAD_ARTICLES, res.data.articles))
        .catch(error => {
          throw error
        });
    } else {

    }
  },

  loadArticlesByAuthor ({ commit }, username) {
    axios.get(`articles?author=${username}`)
      .then(res => commit(LOAD_ARTICLES, res.data.articles))
      .catch(error => {
        throw error
      })
  },

  addFavorite({ commit }, payload) {
    axios({
      method: 'post',
      url: `articles/${payload.slug}/favorite`,
      headers: {
        Authorization: `Token ${payload.token}`
      }
    })
      .then(res => {
        console.log(res.data.article)
        commit(ADD_FAVORITE, res.data.article.slug)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}

