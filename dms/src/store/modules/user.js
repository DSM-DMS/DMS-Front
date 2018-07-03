/* eslint-disable */
import * as types from '../mutation-types'
import router from '@/router'

const state = {
  menuData: {
    name: '',
    number: 0,
    goodPoint: 0,
    badPoint: 0
  },
  applyData: {
    stay: 0,
    goingout: {
      isSaturdayGoingout: false,
      isSundayGoingout: false
    },
    extension: {
      eleven: 0,
      twelve: 0
    }
  }
}

const getters = {
  menuData: state => state.menuData,
  applyData: state => state.applyData
}

const actions = {
  getApplyData ({commit}) {
    let jwt = this._vm.$cookie.getCookie('JWT')
    if(jwt) {
      this._vm.$http.get('/student/info/apply',{
        headers: {
          Authorization: 'JWT ' + jwt
        }
      }).then(res => {
        commit(types.SET_APPLY_DATA, res.data)
        commit(types.SET_LOGIN_STATUS, {isLogin: true})
      }).catch(err => {
        commit(types.SET_LOGIN_STATUS, {isLogin: false})
        console.log(err)
      })
    }
  },
  getMenuData ({commit}) {
    let jwt = this._vm.$cookie.getCookie('JWT')
    if(jwt) {
      this._vm.$http.get('/student/info/mypage',{
        headers: {
          Authorization: 'JWT ' + jwt
        }
      }).then(res => {
        commit(types.SET_MENU_DATA, res.data)
        commit(types.SET_LOGIN_STATUS, {isLogin: true})
      }).catch(err => {
        commit(types.SET_LOGIN_STATUS, {isLogin: false})
        console.log(err)
      })
    }
  }
}

const mutations = {
  [types.SET_APPLY_DATA] (state, payload) {
    state.applyData.stay = payload.stay
    state.applyData.goingout.isSaturdayGoingout = payload.goingout.sat
    state.applyData.goingout.isSundayGoingout = payload.goingout.sun
    state.applyData.extension.eleven = payload.extension_11 ? payload.extension_11.class_num : null
    state.applyData.extension.twelve = payload.extension_12 ? payload.extension_12.class_num : null
  },
  [types.SET_MENU_DATA] (state, payload) {
    state.menuData.name = payload.name
    state.menuData.number = payload.number
    state.menuData.goodPoint = payload.goodPoint
    state.menuData.badPoint = payload.badPoint
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}