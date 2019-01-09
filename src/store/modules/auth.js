import axios from 'axios';
import router from '../../router'

import {
  AUTH_USER,
  FETCH_USER,
  FOLLOW_USER,
  UNFOLLOW_USER
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
  },

  [FOLLOW_USER] (state) {
    state.user.following = true
  },

  [UNFOLLOW_USER] (state) {
    state.user.following = false
  }
}

const token = localStorage.getItem('token')

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
      .catch(err => {
        dispatch('message/addMessage', err.response.data.errors, { root: true })
        setTimeout(() => {
          dispatch('message/clearMessage', null, { root: true })
        }, 3000);
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
      .catch(err => {
        dispatch('message/addMessage', err.response.data.errors, { root: true })
        setTimeout(() => {
          dispatch('message/clearMessage', null, { root: true })
        }, 3000);
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
    localStorage.clear()
  },

  fetchUser ({ commit, dispatch }, username) {
    if (!token) {
      axios.get(`profiles/${username}`)
        .then(res => {
          commit(FETCH_USER, res.data.profile)
        })
        .catch(err => {
          dispatch('message/addMessage', err.response.data.errors, { root: true })
        })
    } else {
      axios({
        method: 'get',
        url: `profiles/${username}`,
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        commit(FETCH_USER, res.data.profile)
      })
      .catch(err => {
        dispatch('message/addMessage', err.response.data.errors, { root: true })
      })
    }
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

