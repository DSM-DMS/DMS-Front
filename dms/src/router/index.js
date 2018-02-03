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
      component: Main
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
  ]
})
