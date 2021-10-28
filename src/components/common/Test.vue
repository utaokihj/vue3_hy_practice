<template>
  <p @click="testClick">Test click</p>
</template>

<script>
export default {
  setup (props, context) {
    const methods = {
      testClick () {
        context.emit('testClick', 'value')
      }
    }
    return {
      ...methods
    }
  }
}
</script>
