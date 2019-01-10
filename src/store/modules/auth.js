import axios from 'axios';
import router from '../../router'

import {
  AUTH_USER,
  FETCH_USER,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_USER
} from '../mutation-types'

const state = {
  user: null,
  currentUser: null
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
  },

  [SET_CURRENT_USER] (state, payload) {
    state.currentUser = payload
  }
}

const token = localStorage.getItem('token')

const actions = {
  signup ({ commit, dispatch }, userData) {
    axios.post('users', { user: userData })
      .then(res => {
        const token = res.data.user.token
        localStorage.setItem('token', token)
        commit(SET_CURRENT_USER, res.data.user)
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
        const token = res.data.user.token
        localStorage.setItem('token', token)
        commit(SET_CURRENT_USER, res.data.user)
        router.push('/')
      })
      .catch(err => {
        dispatch('message/addMessage', err.response.data.errors, { root: true })
        setTimeout(() => {
          dispatch('message/clearMessage', null, { root: true })
        }, 3000);
      })
  },

  autoLogin ({ dispatch }) {
    dispatch('getCurrentUser')
  },

  logout ({ commit }) {
    commit(SET_CURRENT_USER, null)
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

  getCurrentUser ({ commit }) {
    if (!token) return
    axios({
      method: 'get',
      url: 'user',
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => commit(SET_CURRENT_USER, res.data.user))
      .catch(err => {
        throw err
      })
  },

  updateUser ({ commit }, user) {
    axios({
      method: 'put',
      url: 'user',
      data: user,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        commit(SET_CURRENT_USER, res.data.user)
        router.push(`/profile/${res.data.user.username}`)
      })
      .catch(err => console.log(err.response.errors))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

