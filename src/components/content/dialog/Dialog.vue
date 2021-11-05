<template>
  <teleport to='#dialog'>
    <div v-if="dialogShow">
      <div class="dialog" @click="modalClick('modal')">
      </div>
      <div class="content" :class="{ 'content--isActive': dialogShow === true }">
        <p>title</p>
        <p @click="modalClick">close</p>
      </div>
    </div>
  </teleport>
</template>

<script>
import { watch, watchEffect } from 'vue'

export default {
  emits: ['modalClick'],
  props: {
    dialogShow: Boolean,
    modalClose: {
      type: Boolean,
      default: false
    }
  },
  /**
   * lost in your mind. never let me go
   * Am I losing my mind.
   * if this night is now forever, at least we're together
   * i know i'm not alone
   * anywhere whenever, apart from just
   */
  setup (props, { emit }) {
    const modalClick = (type) => {
      const { modalClose } = props
      if (type && type === 'modal') {
        modalClose === true ? emit('modalClick', false) : emit('modalClick', true)
      } else emit('modalClick', false)
    }

    watch(
      () => props.dialogShow,
      (newVal, oldVal) => {
        console.log('watch child: ', newVal)
      },
      { immediate: true }
    )

    watchEffect(() => {
      console.log('watchEffect child: ', props.dialogShow)
    })

    return {
      modalClick
    }
  }
}
</script>

<style lang="less" scoped>
.dialog {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
// @mixin middle{
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// }
@keyframes dialog-animate {
  0%{
    top: -100%;
    opacity: 0;
  }
  25% {
    top: 50%;
    opacity: 1;
  }
  50% {
    top: 38%;
    opacity: 1;
  }
  75% {
    top: 42%;
    opacity: 1;
  }
  100%{
    top: 40%;
    opacity: 1;
  }
}
.content {
  width: 50%;
  height: 300px;
  background: var(--color-background-full);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 9999;
  position: fixed;
  top: -50%;
  left: 25%;
  // position: absolute;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // margin: auto;
  p {
    color: var(--color-text);
    background: #fff;
    width: 180px;
    height: 70px;
    border-radius: 10px;
    display: grid;
    place-items: center;
  }

  &--isActive{
    animation-name: dialog-animate;
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.21, 0.85, 1, 1);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    // animation: animate 0.5s cubic-bezier(0.21, 0.85, 1, 1) 1 forwards;
  }
}
</style>
