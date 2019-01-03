import axios from 'axios';
import router from '../../router'

const state = {
  user: null
}

const mutations = {
  'AUTH_USER' (state, payload) {
    state.user = payload
  }
}

const actions = {
  signup ({ commit, dispatch }, userData) {
    axios.post('users', {user: userData})
      .then(res => {
        commit('AUTH_USER', res.data.user)
        router.push('/')
      })
      .catch(error => {
        dispatch('message/addMessage', error.response.data.errors, { root: true })
      })
  },

  login ({ commit, dispatch }, userData) {
    axios.post('users/login', {user: userData})
      .then(res => {
        commit('AUTH_USER', res.data.user)
        router.push('/')
      })
      .catch(error => {
        dispatch('message/addMessage', error.response.data.errors, { root: true })
      })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

