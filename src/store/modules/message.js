import {
  ADD_MESSAGE,
  CLEAR_MESSAGE
} from '../mutation-types'

const state = {
  messages: []
}

const mutations = {
  [ADD_MESSAGE] (state, payload) {
    state.messages = payload
  },

  [CLEAR_MESSAGE] (state) {
    state.messages = []
  }
}

const actions = {
  addMessage ({ commit }, messages) {
    const messageArr = []
    for (let key in messages) {
      let mess = `${key} ${messages[key]}`
      mess = mess.charAt(0).toUpperCase() + mess.slice(1)
      messageArr.push(mess)
    }
    commit('ADD_MESSAGE', messageArr)
  },

  clearMessage ({ commit }) {
    commit('CLEAR_MESSAGE')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

