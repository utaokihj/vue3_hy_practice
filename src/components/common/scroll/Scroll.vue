<template>
  <div class="wrapper" ref="wrapperRef">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated } from 'vue'

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
    },
    imgRefresh: {
      type: Boolean,
      default: true
    }
  },
  setup (props, context) {
    const scroll = ref(null)
    const wrapperRef = ref(null)

    onMounted(() => {
      const { probeType, pullUpLoad, imgRefresh } = props
      // console.log('wrapperRef: ', wrapperRef.value)

      /* create BScroll object */
      scroll.value = new BScroll(wrapperRef.value, {
        click: true,
        probeType,
        pullUpLoad,
        // 当下拉距离顶部30px，派发下拉刷新事件; 回弹留在顶部的距离
        pullDownRefresh: { threshold: 30, stop: 0 },
        bounceTime: 1000, // 回弹时间
        useTransition: false
      })
      if (imgRefresh === true) methods.handleImgsLoad()

      /* monitor scroll position */
      if (probeType === 2 || probeType === 3) {
        scroll.value.on('scroll', (position) => {
          context.emit('scroll', position)
        })
      }

      /* monitor scroll to bottom */
      if (pullUpLoad) {
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

    onUpdated(() => {
      const { imgRefresh } = props
      if (imgRefresh === true) methods.handleImgsLoad()
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
      },

      handleImgsLoad () {
        const img = wrapperRef.value.getElementsByTagName('img')
        let count = 0
        if (img.length) {
          const timer = setInterval(() => {
            if (count === length) {
              scroll.value.refresh()
              clearInterval(timer)
            } else if (img[count].complete) count++
          }, 20)
        }
      }
    }

    return {
      wrapperRef,
      ...methods
    }
  }
}
</script>
