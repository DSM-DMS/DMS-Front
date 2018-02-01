import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/container/Main'
import Apply from '@/container/Apply'
import Post from '@/container/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/apply/:category',
      name: 'apply',
      component: Apply
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/post/:category',
      name: 'post',
      component: Post
    }]
})
