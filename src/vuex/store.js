// store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 登录状态
import login from './modules/login'
import category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    category
  }
})
