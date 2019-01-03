import axios from 'axios';

const state = {
  messages: []
}

const mutations = {
  'ADD_MESSAGE'(state, payload) {
    state.messages = payload
  }
}

const actions = {
  addMessage({ commit }, messages) {
    const messageArr = []
    for(let key in messages) {
      let mess = `${key} ${messages[key]}`
      mess = mess.charAt(0).toUpperCase() + mess.slice(1)
      messageArr.push(mess)
    }
    commit('ADD_MESSAGE', messageArr)

  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

