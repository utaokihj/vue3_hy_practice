<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    // 是否实时侦测监听   0是默认不侦测的，1是确定不侦测，2是手指在滑动侦测，惯性部分不侦测，3是只要滑动就侦测
    probeType: {
      type: Number,
      default: 0
    },
    // 是否实现下拉到底部后执行其它操作
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const scroll = ref(null)
    const wrapper = ref(null)

    onMounted(() => {
      // console.log('wrapper: ', wrapper.value)

      /* create BScroll object */
      scroll.value = new BScroll(wrapper.value, {
        click: true,
        probeType: props.probeType,
        pullUpLoad: props.pullUpLoad,
        // 当下拉距离顶部30px，派发下拉刷新事件; 回弹留在顶部的距离
        pullDownRefresh: { threshold: 30, stop: 0 },
        bounceTime: 1000, // 回弹时间
        useTransition: false
      })

      /* monitor scroll position */
      if (props.probeType === 2 || props.probeType === 3) {
        scroll.value.on('scroll', (position) => {
          context.emit('scroll', position)
        })
      }

      /* monitor scroll to bottom */
      if (props.pullUpLoad) {
        scroll.value.on('pullingUp', () => {
          context.emit('pullingUp')
          console.log('monitor scroll to bottom')
        })
      }

      /* pull down */
      scroll.value.on('pullingDown', () => {
        context.emit('pullingDown')
      })
    })

    const methods = {
      /* back to top */
      scrollTo (x, y, time = 500) {
        scroll.value && scroll.value.scrollTo(x, y, time)
      },

      /* pull up to load more */
      finishPullUp () {
        scroll.value && scroll.value.finishPullUp()
      },

      /* pull down to refresh */
      finishPullDown () {
        scroll.value && scroll.value.finishPullDown()
      },

      /* refresh */
      refresh () {
        scroll.value && scroll.value.refresh()
        console.log('refresh')
      },

      getScrollY () {
        return scroll.value ? scroll.value.y : 0
      }
    }

    return {
      wrapper,
      ...methods
    }
  }
}
</script>
