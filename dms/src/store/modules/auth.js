/* eslint-disable */
import * as types from '../mutation-types'
import Vue from 'vue'
import router from '@/router'

const state = {
  isLogin: false
}

const getters = {
  isLogin: state => state.isLogin
}

const actions = {
  login ({commit, getters}, payload) {
    if(!getters.isLogin) {
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
        router.go(0)
      }).catch(error => {
        console.log(error)
        router.go(0)     
      })
    }
  },
  logout ({commit, getters}) {
    if(getters.isLogin) {
      Vue.prototype.$cookie.deleteCookie('JWT')
      router.go(0)
    }
  },
  authCheck ({commit}) {
    Vue.prototype.$http.get('/auth-check', {
      headers: {
        Authorization: 'JWT ' + Vue.prototype.$cookie.getCookie('JWT')
      }
    })
    .then(response => {
      console.log('auth check success')
      commit(types.SET_LOGIN_STATUS, {isLogin: true})
    }).catch(error => {
      console.log('auth check failure')
      commit(types.SET_LOGIN_STATUS, {isLogin: false})      
    })
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