<template>
  <div class="header-bar">
    <div class="left" @click="back">
      <slot name="left">
        <van-icon name="arrow-left" v-show="leftIsShow"></van-icon>
      </slot>
    </div>
    <div class="center">
      <slot name="center">
        <p>{{ centerTitle ? centerTitle : route.meta.title }}</p>
      </slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'HeaderBar',
  props: {
    leftIsShow: {
      type: Boolean,
      default: true
    },
    centerTitle: String
  },
  setup (props) {
    const router = useRouter()
    const route = useRoute()

    const back = () => {
      if (props.leftIsShow) router.go(-1)
    }
    return {
      route,
      back
    }
  }
}
</script>

<style lang="less" scoped>
.header-bar {
  display: flex;
  width: 100%;
  height: 88px;
  line-height: 88px;
  box-shadow: 0 2px 2px rgba(100, 100, 100, .1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: #fff;
  .left, .right {
    width: 120px;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>
