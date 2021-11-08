<template>
  <Scroll class="scroll">
    <p class="title" v-for="v in list" :key="v.title" @click="listClick(v.path)">
      {{ v.title }}
      <van-icon name="arrow" />
    </p>
  </Scroll>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import Scroll from '@/components/common/scroll/Scroll'

export default {
  components: {
    Scroll
  },
  setup () {
    const router = useRouter()
    const state = reactive({
      list: [
        { title: 'typeof', path: '/typeof' },
        { title: 'algorithm', path: '/algorithm' }
      ]
    })

    const listClick = path => {
      router.push({ path })
    }

    return {
      ...toRefs(state),
      listClick
    }
  }
}
</script>

<style lang="less" scoped>
.scroll {
  height: calc(100vh - 118px);
  overflow: hidden;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 690px;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid rgba(89, 175, 2, .2);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .van-icon {
      color: rgba(89, 175, 2, .6);
    }
  }
  // .title:before {
  //   position: absolute;
  //   content: '';
  //   width: 0;
  //   height: 0;
  //   right: 32px;
  //   border-top: 16px solid transparent;
  //   border-bottom: 16px solid transparent;
  //   border-left: 16px solid var(--color-text);
  // }
}
</style>
