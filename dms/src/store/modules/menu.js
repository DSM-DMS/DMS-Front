/* eslint-disable */
import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  isMenu: false
}

const getters = {
  isMenu: state => state.isMenu
}

const actions = {
  setMenuStatus ({commit}) {
    state.isMenu= !state.isMenu     
  }
}

const mutations = {
  [types.SET_MENU_STATUS] (state, payload) {
    state.isMenu = !state.isMenu
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}