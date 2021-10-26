<template>
  <HeaderBar :centerTitle="centerTitle" />
  <Scroll class="scroll">
    <p>1. multi-column 方式</p>
    <div class="masonry">
      <div class="masonry-item" v-for="(v, i) in imgsArr" :key="v.intro">
        <van-image class="img" :src="v.src"></van-image>
        <p class="title">{{ i }} - {{ v.intro }}</p>
      </div>
    </div>

    <p>2. grid 方式</p>
    <div class="masonry2">
      <img class="masonry2-img" v-for="v in imgsArr" :key="v.intro" :src="v.src" ref='masonry2ImgRef' alt="">
    </div>

    <p class="title-way">3. flex 方式</p>
    <div class="masonry3">
      <div class="column">
        <img class="item" v-for="v in data1" :key="v.intro" :src="v.src" alt="">
      </div>
      <div class="column">
        <img class="item" v-for="v in data2" :key="v.intro" :src="v.src" alt="">
      </div>
      <div class="column">
        <img class="item" v-for="v in data3" :key="v.intro" :src="v.src" alt="">
      </div>
    </div>
  </Scroll>
</template>

<script>
import { reactive, ref, toRefs, onMounted } from 'vue'

import HeaderBar from '@/components/common/headerbar/HeaderBar'
import Scroll from '@/components/common/scroll/Scroll'

export default {
  components: {
    HeaderBar,
    Scroll
  },
  setup () {
    const centerTitle = ref('waterfall')
    const imgsArr = ref([
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
    ])

    const masonry2ImgRef = ref(null)
    onMounted(() => {
      Array.from(masonry2ImgRef.value).forEach((img, index) => {
        // const src = img.getAttribute('url')
        const image = new Image()
        // image.src = src
        const width = img.width
        image.onload = function () {
          const w = image.width
          const h = image.height
          const height = Math.round(h * width / w)
          // img.src = src
          img.style.gridRowEnd = `span ${~~(height / 10)}`
        }
      })
    })

    const masonry3Data = reactive({
      data1: [],
      data2: [],
      data3: [],
      i: 0
    })
    while (masonry3Data.i < imgsArr.value.length) {
      masonry3Data.data1.push(imgsArr.value[masonry3Data.i++])
      if (masonry3Data.i < imgsArr.value.length) masonry3Data.data2.push(imgsArr.value[masonry3Data.i++])
      if (masonry3Data.i < imgsArr.value.length) masonry3Data.data3.push(imgsArr.value[masonry3Data.i++])
    }

    return {
      ...toRefs(masonry3Data),
      centerTitle,
      imgsArr,
      masonry2ImgRef
    }
  }
}
</script>

<style lang="less" scoped>
.scroll {
  height: calc(100vh - 88px);
  overflow: hidden;
  background: var(--color-background);
  margin-top: 88px;
}
.title-way {
  margin-top: 40px;
}
/**
  multi-column实现(从上往下，从左至右):
    column-count 设置共有几列
    column-width 设置每列宽度，列数由总宽度和每列宽度计算得出
    column-gap 设置列与列之间的间距
 */
 .masonry {
   column-count: 3;
   column-gap: 20px;
   margin-top: 40px;
   padding-bottom: 40px;
   &-item {
     border: 2px solid rgba(89, 175, 2, .6);
     background: #fff;
     border-radius: 10px;
     color: #049b04;
     margin-bottom: 20px;
     break-inside: avoid;
     .img {
       width: 100%;
     }
     .title {
       text-align: center;
     }
   }
 }

 .masonry2 {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   column-gap: 10px;
   row-gap: 10px;
   grid-auto-rows: auto;
   .masonry2-img {
     width: 100%;
     height: 100%;
     grid-row-start: auto;
   }
 }

 .masonry3 {
   display: flex;
   flex-direction: row;
   .column {
     display: flex;
     flex-direction: column;
     flex: 1;
     padding: 0 4px;
     .item {
       margin-bottom: 10px;
       width: 100%;
     }
   }
 }
</style>
