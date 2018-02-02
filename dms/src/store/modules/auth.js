/* eslint-disable */
import * as types from '../mutation-types'
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
      this._vm.$http.post('/auth', fd)
      .then(response => {
        if (response.status == 200) {
          alert('로그인을 성공하였습니다.')
          if (payload.checked) {
            this._vm.$cookie.setCookie('JWT', response.data['access_token'], 1)
          } else {
            this._vm.$cookie.setCookie('JWT', response.data['access_token'])
          }
          router.go(0)
        }
      }).catch(error => {
        alert('로그인을 실패하였습니다.')
        router.go(0)     
      })
    }
  },
  logout ({commit, getters}) {
    if(getters.isLogin) {
      alert('로그아웃을 성공하였습니다.')
      this._vm.$cookie.deleteCookie('JWT')
      router.go(0)
    } else {
      alert('로그아웃을 실패하였습니다.')
    }
  },
  authCheck ({commit, dispatch}, payload) {
    let jwt = this._vm.$cookie.getCookie('JWT')
    if(jwt !== '') {
      this._vm.$http.get('/auth-check', {
        headers: {
          Authorization: 'JWT ' + jwt
        }
      })
      .then(response => {
        commit(types.SET_LOGIN_STATUS, {isLogin: true})
        payload(true)
      }).catch(error => {
        commit(types.SET_LOGIN_STATUS, {isLogin: false})  
        payload(false)    
      })
    } else {
      commit(types.SET_LOGIN_STATUS, {isLogin: false})  
      payload(false)
    }
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