import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Survey from '@/components/survey/survey-index'
import Manage from '@/components/manage/manage'

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
=======
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
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
  }]
>>>>>>> 21969eef6400a946685fd7fe242c65ae08496d84
})
