export const jsPracticeRoute = [
  {
    path: '/typeof',
    name: 'Typeof',
    meta: { showTabbar: false, title: 'typeof' },
    component: () => import('@/views/jsPractice/typeof')
  }, {
    path: '/algorithm',
    name: 'Algorithm',
    meta: { showTabbar: false, title: 'algorithm' },
    component: () => import('@/views/jsPractice/algorithm')
  }
]
