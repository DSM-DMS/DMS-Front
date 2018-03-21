import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import Survey from '@/components/survey/survey-index'
import Manage from '@/components/manage/manage'
import adminAccount from '@/components/adminAccount'
import adminDelete from '@/components/adminDelete'
import studentDelete from '@/components/studentDelete'
import facilityFailure from '@/components/facilityFailure/facilityFailure'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
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
      path: '/adminAccount',
      name: 'adminAccount',
      component: adminAccount
    },
    {
      path: '/adminDelete',
      name: 'adminDelete',
      component: adminDelete
    },
    {
      path: '/studentDelete',
      name: 'studentDelete',
      component: studentDelete
    },
    {
      path: '/facility',
      name: 'facility',
      component: facilityFailure
    },
    {
      path: '/post/:category',
      name: 'manage',
      component: Manage
    }
  ]
})
