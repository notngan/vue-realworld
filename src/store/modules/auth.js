import axios from 'axios';
import router from '../../router'
import {
  AUTH_USER,
  FETCH_USER
} from '../mutation-types'

const state = {
  user: null,
  username: null, 
  token: null
}

const mutations = {
  [AUTH_USER] (state, payload) {
    state.username = payload.username
    state.token = payload.token
  },

  [FETCH_USER] (state, payload) {
    state.user = payload
  }
}

const actions = {
  signup ({ commit, dispatch }, userData) {
    axios.post('users', { user: userData })
      .then(res => {
        const username = res.data.user.username
        const token = res.data.user.token
        localStorage.setItem('username', username)
        localStorage.setItem('token', token)
        commit(AUTH_USER, {
          username: username,
          token: token  
        })
        router.push('/')
      })
      .catch(error => {
        dispatch('message/addMessage', error.response.data.errors, { root: true })
      })
  },

  login ({ commit, dispatch }, userData) {
    axios.post('users/login', { user: userData })
      .then(res => {
        const username = res.data.user.username
        const token = res.data.user.token
        localStorage.setItem('username', username)
        localStorage.setItem('token', token)
        commit(AUTH_USER, {
          username: username,
          token: token  
        })
        router.push('/')
      })
      .catch(error => {
        dispatch('message/addMessage', error.response.data.errors, { root: true })
      })
  },

  autoLogin ({ commit }) {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    commit(AUTH_USER, {
      username: username,
      token: token  
    })
  },

  logout ({ commit }) {
    commit(AUTH_USER, {
      username: null,
      token: null
    })
  },

  fetchUser ({ commit, state, dispatch }) {
    if (!state.username) return
    axios.get(`profiles/${state.username}`)
      .then(res => {
        console.log(res.data.profile)
        commit(FETCH_USER, res.data.profile)
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

