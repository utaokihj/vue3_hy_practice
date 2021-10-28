export const indexRoutes = [
  {
    path: '/waterfall',
    name: 'Waterfall',
    meta: { showTabbar: false, title: 'waterfall' },
    component: () => import('@/views/index/waterfall')
  }, {
    path: '/suckTop',
    name: 'SuckTop',
    meta: { showTabbar: false, title: 'suckTop' },
    component: () => import('@/views/index/suckTop')
  }
]
