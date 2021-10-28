<template>
  <div id="tabbar">
    <TabbarItem
      v-for="v in tabbarData"
      :key="v.name"
      :path="v.path"
      :activeColor="v.activeColor"
      :itemData="v"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

import TabbarItem from './TabbarItem.vue'

export default {
  components: {
    TabbarItem
  },
  setup () {
    const tabbarData = ref([
      {
        name: 'index',
        path: '/index',
        activeColor: '#FF3B14',
        icon: require('@/assets/images/tabbar/home.png'),
        iconActive: require('@/assets/images/tabbar/homeActive.png')
      }, {
        name: 'partyEducation',
        path: '/partyEducation',
        activeColor: '#FF3B14',
        icon: require('@/assets/images/tabbar/partyEducation.png'),
        iconActive: require('@/assets/images/tabbar/partyEducationActive.png')
      }, {
        name: 'partyHome',
        path: '/partyHome',
        activeColor: '#FF3B14',
        icon: require('@/assets/images/tabbar/party.png'),
        iconActive: require('@/assets/images/tabbar/partyActive.png')
      }, {
        name: 'profile',
        path: '/profile',
        activeColor: '#FF3B14',
        icon: require('@/assets/images/tabbar/profile.png'),
        iconActive: require('@/assets/images/tabbar/profileActive.png')
      }
    ])
    return {
      tabbarData
    }
  }
}
</script>

<style lang="less" scoped>
#tabbar {
  display: flex;
  background-color: #f4f4f4;
  box-shadow: 0 -6px 8px rgba(100, 100, 100, .3);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
</style>
