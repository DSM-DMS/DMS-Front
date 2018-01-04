/* eslint-disable */
import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  isLogin: false
}

const getters = {
  isLogin: state => state.isLogin
}

const actions = {
  login ({commit}, payload) {
    let fd = new FormData()
    fd.append('id', payload.userName)
    fd.append('pw', payload.password)
    Vue.prototype.$http.post('/auth', fd)
    .then(response => {
      if (payload.checked) {
        Vue.prototype.$cookie.setCookie('JWT', response.data['access_token'], 1)
      } else {
        Vue.prototype.$cookie.setCookie('JWT', response.data['access_token'])
      }
      commit(types.SET_LOGIN_STATUS, {isLogin: true})
    }).catch(error => {
      console.log(error)
      commit(types.SET_LOGIN_STATUS, {isLogin: false})      
    })
  },
  logout ({commit}) {
    Vue.prototype.$cookie.deleteCookie('JWT')
    commit(types.SET_LOGIN_STATUS, {isLogin: false})
  }
}

const mutations = {
  [types.SET_LOGIN_STATUS] (state, payload) {
    state.isLogin = payload.isLogin
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}