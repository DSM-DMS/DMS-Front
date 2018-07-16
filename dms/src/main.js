// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = 'http://dsm2015.cafe24.com:80/v2/'

Vue.prototype.$cookie = {}
Vue.prototype.$cookie.setCookie = function setCookie (name, value, days) {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toGMTString()
  } else {
    expires = ''
  }
  document.cookie = name + '=' + value + expires + '; path=/'
}

Vue.prototype.$cookie.getCookie = function getCookie (name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }

  return ''
}

Vue.prototype.$cookie.deleteCookie = function deleteCookie (name) {
  Vue.prototype.$cookie.setCookie(name, '', -1)
}

Vue.prototype.$dateFormmater = function (date) {
  return [
    date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + date.getDate()).slice(-2)
  ].join('-')
}

Vue.prototype.$getDayOfWeek = function getDayOfWeek (date) {
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  return week[date.getDay()]
}

router.beforeEach(async function (to, from, next) {
  try {
    await store.dispatch('getApplyData')
  } catch (_) {}

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
