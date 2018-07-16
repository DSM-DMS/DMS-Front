/* eslint-disable */
import * as types from '../mutation-types'
import router from '@/router'

const state = {
  menuData: {
    name: null,
    number: null,
    goodPoint: null,
    badPoint: null
  },
  applyData: {
    stay: null,
    goingout: {
      isSaturdayGoingout: null,
      isSundayGoingout: null
    },
    extension: {
      eleven: null,
      twelve: null
    }
  }
}

const getters = {
  menuData: state => state.menuData,
  applyData: state => state.applyData
}

const actions = {
  getApplyData ({commit}) {
    return new Promise((resolve, reject) => {
      let jwt = this._vm.$cookie.getCookie('JWT')

      if(jwt) {
        this._vm.$http.get('/student/info/apply',{
          headers: {
            Authorization: 'JWT ' + jwt
          }
        }).then(res => {
          commit(types.SET_APPLY_DATA, res.data)
          commit(types.SET_LOGIN_STATUS, { isLogin: true })
          resolve(res)
        }).catch(err => {
          commit(types.SET_LOGIN_STATUS, { isLogin: false })
          console.log(err)
          reject(err)
        })
      } else {
        commit(types.SET_LOGIN_STATUS, { isLogin: false })
        reject('Token does not exist.')
      }
    })
  },
  getMenuData ({commit}) {
    return new Promise((resolve, reject) => {
      let jwt = this._vm.$cookie.getCookie('JWT')
      
      if(jwt) {
        this._vm.$http.get('/student/info/mypage',{
          headers: {
            Authorization: 'JWT ' + jwt
          }
        }).then(res => {
          commit(types.SET_MENU_DATA, res.data)
          commit(types.SET_LOGIN_STATUS, { isLogin: true })
          resolve(res)
        }).catch(err => {
          commit(types.SET_LOGIN_STATUS, { isLogin: false })
          console.log(err)
          reject(err)
        })
      } else {
        commit(types.SET_LOGIN_STATUS, { isLogin: false })
        reject('Token does not exist.')
      }
    })
  }
}

const mutations = {
  [types.SET_APPLY_DATA] ({ applyData }, payload) {
    applyData.stay = payload.stay
    applyData.goingout.isSaturdayGoingout = payload.goingout.sat
    applyData.goingout.isSundayGoingout = payload.goingout.sun
    applyData.extension.eleven = payload.extension11.classNum ? payload.extension11.classNum : null
    applyData.extension.twelve = payload.extension12.classNum ? payload.extension12.classNum : null
  },
  [types.SET_MENU_DATA] ({ menuData }, payload) {
    menuData.name = payload.name
    menuData.number = payload.number
    menuData.goodPoint = payload.goodPoint
    menuData.badPoint = payload.badPoint
  },
  [types.RESET_APPLY_DATA] ({ applyData }) {
    applyData.stay = null
    applyData.goingout.isSaturdayGoingout = null
    applyData.goingout.isSundayGoingout = null
    applyData.extension.eleven = null
    applyData.extension.twelve = null
  },
  [types.RESET_MENU_DATA] ({ menuData }) {
    menuData.name = null
    menuData.number = null
    menuData.goodPoint = null
    menuData.badPoint = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}