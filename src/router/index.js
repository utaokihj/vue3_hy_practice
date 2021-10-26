import { createRouter, createWebHistory } from 'vue-router'
import { indexRoutes } from './modules/index'

const routes = [
  {
    path: '/',
    name: 'index',
    meta: { showTabbar: true },
    redirect: { path: '/index' }
  }, {
    path: '/index',
    name: 'Index',
    meta: { showTabbar: true },
    component: () => import('@/views/index/index')
  }, {
    path: '/partyEducation',
    name: 'PartyEducation',
    meta: { showTabbar: true },
    component: () => import('@/views/partyEducation/index')
  }, {
    path: '/partyHome',
    name: 'PartyHome',
    meta: { showTabbar: true },
    component: () => import('@/views/partyHome/index')
  }, {
    path: '/profile',
    name: 'Profile',
    meta: { showTabbar: true },
    component: () => import('@/views/profile/index')
  },
  ...indexRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
