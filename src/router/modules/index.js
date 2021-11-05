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
  }, {
    path: '/cssPractice',
    name: 'CssPractice',
    meta: { showTabbar: false, title: 'cssPractice' },
    component: () => import('@/views/index/cssPractice')
  }, {
    path: '/visualization',
    name: 'Visualization',
    meta: { showTabbar: false, title: 'mobile visualization' },
    component: () => import('@/views/index/visualization')
  }
]
