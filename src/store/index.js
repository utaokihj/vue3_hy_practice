import { createStore } from 'vuex'

export default createStore({
  state: {
    imgsData: [
      { src: require('@/assets/images/index/k1.jpeg'), intro: 'Consequatur in ipsa absapiente enim. Accusantium' },
      { src: require('@/assets/images/index/k2.jpeg'), intro: 'Fugiat deserunt doloremque' },
      { src: require('@/assets/images/index/k3.jpg'), intro: 'Quas et fugaeos ducimus reprehenderit necessitati' },
      { src: require('@/assets/images/index/k7.png'), intro: 'a' },
      { src: require('@/assets/images/index/k8.png'), intro: 's' },
      { src: require('@/assets/images/index/k4.jpg'), intro: 'd' },
      { src: require('@/assets/images/index/k5.png'), intro: 'f' },
      { src: require('@/assets/images/index/k6.png'), intro: 'b' },
      { src: require('@/assets/images/index/k7.png'), intro: 'n' },
      { src: require('@/assets/images/index/k8.png'), intro: 'm' },
      { src: require('@/assets/images/index/k7.png'), intro: 'i' },
      { src: require('@/assets/images/index/k8.png'), intro: 'qw' },
      { src: require('@/assets/images/index/k6.png'), intro: 'bg' },
      { src: require('@/assets/images/index/k7.png'), intro: 'na' },
      { src: require('@/assets/images/index/k8.png'), intro: 'qwww' },
      { src: require('@/assets/images/index/k6.png'), intro: 'bgqw' },
      { src: require('@/assets/images/index/k7.png'), intro: 'naqw' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getImgsData (state) {
      return state.imgsData
    }
  },
  modules: {
  }
})
