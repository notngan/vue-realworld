import axios from 'axios';

const state = {
  user: null,
}

const mutations = {
  'AUTH_USER'(state, payload) {
    state.user = payload
  },
}

const actions = {
  signup({ commit, dispatch }, userData) {
    axios.post('users', {user: userData})
      .then(res => {
        commit('AUTH_USER', res.data.user)
      })
      .catch(error => {
        dispatch('message/addMessage', error.response.data.errors, { root: true })
      })
  },

  login({ commit }, userData) {
    axios.post('users/login', {user: userData})
      .then(res => {
        commit('AUTH_USER', res.data.user)
      })
      .catch(error => {
        throw error
      })
  }
}

const getters = {
  // user(state) {
  //   return state.user
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

