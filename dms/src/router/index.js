import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/container/Main'
import Post from '@/container/Post'
import Login from '@/container/Login'

import Apply from '@/container/Apply'
import StayApplyLeft from '@/components/StayApply/StayApplyLeft'
import StayApplyRight from '@/components/StayApply/StayApplyRight'
import ExtensionApplyLeft from '@/components/ExtensionApply/ExtensionApplyLeft'
import ExtensionApplyRight from '@/components/ExtensionApply/ExtensionApplyRight'

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
      path: '/apply',
      name: 'apply',
      component: Apply,
      meta: { requiresAuth: true },
      children: [
        {
          name: 'applyStay',
          path: 'stay',
          components: {
            left: StayApplyLeft,
            right: StayApplyRight
          }
        },
        {
          name: 'applyExtension',
          path: 'extension',
          components: {
            left: ExtensionApplyLeft,
            right: ExtensionApplyRight
          }
        }
      ]
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
    if (to.meta.scroll !== {} && to.meta.scroll) {
      return { selector: to.meta.scroll.selector }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
