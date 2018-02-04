import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/container/Main'
import Apply from '@/container/Apply'
import Post from '@/container/Post'
import Survey from '@/container/Survey'
import Login from '@/container/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'apply',
          meta: { scroll: { x: 0, y: 0, selector: '#apply-wrapper' } }
        },
        {
          path: 'notice',
          meta: { scroll: { x: 0, y: 0, selector: '#post-wrapper' } }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/apply/survey',
      name: 'surveyList',
      component: Survey,
      meta: { requiresAuth: true }
    },
    {
      path: '/apply/survey/:id',
      name: 'surveyDetail',
      component: Apply,
      meta: { requiresAuth: true }
    },
    {
      path: '/apply/:category',
      name: 'apply',
      component: Apply,
      meta: { requiresAuth: true }
    },
    {
      path: '/post/:category',
      name: 'post',
      component: Post,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to.hash)
    if (to.meta.scroll !== {} && to.meta.scroll) {
      console.log(to.meta.scroll)
      return { selector: to.meta.scroll.selector }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
