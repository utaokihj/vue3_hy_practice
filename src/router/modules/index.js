export const indexRoutes = [
  {
    path: '/waterfall',
    name: 'Waterfall',
    meta: { showTabbar: false, title: 'waterfall' },
    component: () => import('@/views/index/waterfall')
  }
]
