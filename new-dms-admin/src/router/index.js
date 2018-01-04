import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import Survey from '@/components/survey/survey-index'
import Manage from '@/components/manage/manage'
import adminAccount from '@/components/adminAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    },
    {
      path: '/adminAccount',
      name: 'adminAccount',
      component: adminAccount
    }
  ]
})
