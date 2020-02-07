import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import PayingUser from '../pages/PayingUser'
import FreeUser from '../pages/FreeUser'
import AccessDenied from '../pages/AccessDenied'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: PayingUser,
      meta: {
        requiresAuth: true,
        role: ['x-admin']
      }
    },
    {
      path: '/user',
      name: 'user',
      component: FreeUser,
      meta: {
        requiresAuth: true,
        role: ['x-user']
      }
    },
    {
      path: '/accessdenied',
      name: 'AccessDenied',
      component: AccessDenied,
      meta: {
        requiresAuth: false
      }
    }
  ]
})
