import Vue from 'vue'
import Router from 'vue-router'

import Base from './layouts/Base'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Base,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home'),
          meta: { title: 'Home' }
        }
      ]
    }
  ]
})
