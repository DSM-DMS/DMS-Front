// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
<<<<<<< HEAD
Vue.prototype.$axios.defaults.baseURL = 'http://dsm2015.cafe24.com:3001'
=======
>>>>>>> 21969eef6400a946685fd7fe242c65ae08496d84

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
