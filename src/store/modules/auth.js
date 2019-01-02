import axios from 'axios';

const state = {
  user: null,
  token: null,
}

const mutations = {
  'SAVE_USER'(state, payload) {
    state.user = payload
  }
}

const actions = {
  signup({commit}, user) {
    //console.log(userData)
    axios.post('users', {user: user})
      .then(res => {
        commit('SAVE_USER', res.data.user)
      })
      .catch(error => console.log(error))
  }
}

const getters = {
  savedUser(state) {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

