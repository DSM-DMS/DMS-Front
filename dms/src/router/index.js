import Vue from 'vue'

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
