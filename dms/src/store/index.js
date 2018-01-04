import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    auth
  }
})
