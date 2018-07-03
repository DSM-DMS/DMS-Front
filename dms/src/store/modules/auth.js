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
      this._vm.$http.post('/student/auth', {
        id: payload.userName,
        password: payload.password
      })
      .then(response => {
        if (response.status === 201) {
          alert('로그인에 성공하였습니다.')
          if (payload.checked) {
            this._vm.$cookie.setCookie('JWT', response.data['accessToken'], 30)
          } else {
            this._vm.$cookie.setCookie('JWT', response.data['accessToken'])
          }
          router.go(0)
        }
      }).catch(error => {
        alert('로그인에 실패하였습니다.')
        router.go(0)     
      })
    }
  },
  logout ({commit, getters}) {
    if(getters.isLogin) {
      alert('로그아웃에 성공하였습니다.')
      this._vm.$cookie.deleteCookie('JWT')
      router.go(0)
    } else {
      alert('로그아웃에 실패하였습니다.')
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