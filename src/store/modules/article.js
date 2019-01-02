import axios from 'axios';

const state = {
  articleList: [],
  commentList: []
}

const mutations = {
  'LOAD_ARTICLES'(state, payload) {
    state.articleList = payload;
    //console.log(payload);
  },

  'LOAD_COMMENTS'(state, payload) {
    state.commentList = payload
    // console.log(payload)
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

  loadComments({commit}, slug) {
    axios.get(`articles/${slug}/comments`)
      .then (res => commit('LOAD_COMMENTS', res.data.comments))
      .catch(error => {
        throw error
    })
  }

}

const getters = {
  articles(state) {
    return state.articleList
  },

  articleBySlug(state) {
    return (slug) => {
      return state.articleList.find((article) => {
        return article.slug === slug
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

