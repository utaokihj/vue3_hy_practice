<template>
  <HeaderBar>
    <template #right><p>{{ suckFixed }}</p></template>
  </HeaderBar>
  <div class="box"></div>
  <div class="suckTop" ref="suckTopRef" :class="suckFixed ? 'fixed' : ''">suck top box</div>
  <div class="list" :class="suckFixed ? 'top' : ''">
    <div class="masonry" @mousewheel="mouseWheel">
      <div class="column">
        <div class="item" v-for="v in imgsData1" :key="v.intro">
          <van-image :src="v.src"></van-image>
          <p>{{ v.intro }}</p>
        </div>
      </div>
      <div class="column">
        <div class="item" v-for="v in imgsData2" :key="v.intro">
          <van-image :src="v.src"></van-image>
          <p>{{ v.intro }}</p>
        </div>
      </div>
      <div class="column">
        <div class="item" v-for="v in imgsData3" :key="v.intro">
          <van-image :src="v.src"></van-image>
          <p>{{ v.intro }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted, nextTick, onUnmounted } from 'vue'
import { useStore } from 'vuex'

import HeaderBar from '@/components/common/headerbar/HeaderBar'

export default {
  components: {
    HeaderBar
  },
  setup () {
    const store = useStore()

    // waterfall
    const state = reactive({
      imgsData: [],
      imgsData1: [],
      imgsData2: [],
      imgsData3: []
    })
    state.imgsData = store.getters.getImgsData
    const i = ref(0)
    while (i.value < state.imgsData.length) {
      state.imgsData1.push(state.imgsData[i.value++])
      if (i.value < state.imgsData.length) state.imgsData2.push(state.imgsData[i.value++])
      if (i.value < state.imgsData.length) state.imgsData3.push(state.imgsData[i.value++])
    }

    // suck top
    const suckTopRef = ref(null)
    const suckState = reactive({
      offsetTop: 0,
      offsetHeight: 0,
      suckFixed: false
    })
    /**
     *
     */
    onMounted(() => {
      nextTick(() => {
        suckState.offsetTop = suckTopRef.value.offsetTop
        suckState.offsetHeight = suckTopRef.value.offsetHeight
        console.log(`top -- ${suckState.offsetTop}; height -- ${suckState.offsetHeight}`)
        window.addEventListener('scroll', handleScroll)
      })
    })
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))
    const handleScroll = () => {
      const scrollTop = window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
      // console.log(`scrollTop -- ${scrollTop}`)
      suckState.suckFixed = scrollTop > (suckState.offsetTop - suckState.offsetHeight - 4)
      // console.log(suckState)
    }

    const mouseWheel = e => {
      console.log('mouse wheel: ', e)
    }

    return {
      ...toRefs(state),
      ...toRefs(suckState),
      i,
      suckTopRef,
      handleScroll,
      mouseWheel
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 300px;
  background: var(--color-background);
  margin-top: 88px;
}
.suckTop {
  width: 100%;
  height: 80px;
  display: grid;
  place-items: center;
  background: #cbe4b3;
}
.fixed {
  widows: 100%;
  position: fixed;
  top: 88px;
  left: 0;
  right: 0;
  z-index: 99;
}
.list {
  margin-top: 20px;
  .masonry {
    display: flex;
    flex-direction: row;
    width: 710px;
    margin-left: 20px;
    .column {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 6px;
      .item {
        width: 100%;
        border: 2px solid rgba(89, 175, 2, .6);
        border-radius: 8px;
        box-sizing: border-box;
        text-align: center;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
    }
  }
}
.top {
  margin-top: 102px;
}
</style>
