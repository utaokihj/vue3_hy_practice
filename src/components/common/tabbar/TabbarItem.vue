<template>
  <div class="tabbar-item" @click="itemClick" :style="activeStyle">
    <van-image class="icon-img" :src="isActive ? itemData.iconActive : itemData.icon"></van-image>
    <span>{{ itemData.name }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'TabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#FF3B14'
    },
    itemData: Object
  },
  /**
      1、props 要先声明才能取值，attrs 不用先声明
      2、props 声明过的属性，attrs 里不会再出现
      3、props 不包含事件，attrs 包含
      4、props 支持 string 以外的类型，attrs 只有 string 类型
      setup (props, context) {
        console.log('props: ', { ...props })
        console.log('context attrs: ', { ...context.attrs })
        return {}
      }
   */
  setup (props) {
    const route = useRoute()
    const router = useRouter()

    const isActive = computed(() => route.path === props.path)
    const activeStyle = computed(() => isActive.value ? { color: props.activeColor } : {})

    const itemClick = () => {
      if (props.path === route.path) return
      router.push(props.path)
    }

    return {
      isActive,
      activeStyle,
      itemClick
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 118px;
  font-size: 28px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon-img {
    width: 52px;
    height: 52px;
  }
  span {
    padding-top: 10px;
  }
}
</style>
