<template>
  <teleport to='#dialog'>
    <div class="dialog" @click="modalClick">
    </div>
    <div class="content">
      <p>title</p>
      <p @click="modalClick">close</p>
    </div>
  </teleport>
</template>

<script>
export default {
  setup (props, context) {
    const modalClick = () => {
      context.emit('modalClick', false)
    }

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
  z-index: 999;
}
.content {
  width: 50%;
  height: 300px;
  background: var(--color-background);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  p {
    color: var(--color-text);
    background: #fff;
    width: 180px;
    height: 70px;
    border-radius: 10px;
    display: grid;
    place-items: center;
  }
}
</style>
