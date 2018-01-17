import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import auth from './modules/auth'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    auth,
    menu
  }
})
