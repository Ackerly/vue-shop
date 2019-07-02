import * as types from '../types'

const state = {
  token: 0,
  username: ''
}

const mutations = {
  [types.CHANGE_TOKEN] (state, res) {
    state.token = res
  },
  userName (state, res) {
    state.username = res
  }
}

export default {
  state,
  mutations
}
