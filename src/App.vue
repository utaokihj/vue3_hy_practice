<template>
  <router-view/>

  <main-tabbar v-if="route.meta.showTabbar == true"></main-tabbar>
</template>

<script>
import { useRoute } from 'vue-router'
import MainTabbar from '@/components/common/tabbar/MainTabbar'

export default {
  components: {
    MainTabbar
  },
  setup () {
    const route = useRoute()
    return {
      route
    }
  }
}
</script>

<style lang="less">
@import url('./assets/styles/app');

#app {
  color: var(--color-text);
}
</style>
