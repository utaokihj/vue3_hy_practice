<template>
    <Scroll class="scroll" ref="scrollRef" @pullingDown="pullingDown">
      <p class="text-item" v-for="(v, i) in listData" :key="v.iconName">
        <i class="iconfont item-icon" :class="v.iconName"></i>
        <span>{{ i }}</span>
      </p>
    </Scroll>
</template>

<script>
import { ref } from 'vue'

import Scroll from '@/components/common/scroll/Scroll'

export default {
  components: {
    Scroll
  },
  setup (props, context) {
    const list = ref([
      { iconName: 'icon-mianxingxueqiao', text: '雪橇' },
      { iconName: 'icon-mianxinggouhuo', text: '篝火' },
      { iconName: 'icon-mianxingyoulun', text: '游轮' },
      { iconName: 'icon-mianxingshoubiao', text: '手表' },
      { iconName: 'icon-mianxingzhinanzhen', text: '指南针' },
      { iconName: 'icon-mianxingshatanyi', text: '沙滩椅' },
      { iconName: 'icon-mianxingmingxinpian', text: '明信片' },
      { iconName: 'icon-mianxingreqiqiu', text: '热气球' },
      { iconName: 'icon-mianxinggaotie', text: '高铁' },
      { iconName: 'icon-mianxingmotianlun', text: '摩天轮' },
      { iconName: 'icon-mianxingxiangjipaizhao', text: '相机' },
      { iconName: 'icon-mianxinglupaizhishipai', text: '指示牌' },
      { iconName: 'icon-mianxingditu', text: '地图' },
      { iconName: 'icon-mianxingxiarilengyin', text: '夏日冷饮' },
      { iconName: 'icon-mianxingdaoyu', text: '岛屿' },
      { iconName: 'icon-mianxingchonglangban', text: '冲浪板' },
      { iconName: 'icon-mianxingbingbao', text: '冰堡' }
    ])
    const listData = ref([...list.value, ...list.value])

    const loading = ref(false)
    const scrollRef = ref(null)
    const pullingDown = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        scrollRef.value.refresh()
      }, 3000)
      console.log('pulling down refresh (index)')
      scrollRef.value.finishPullDown() // execute only one time without this code
    }

    return {
      list,
      listData,
      scrollRef,
      pullingDown
    }
  }
}
</script>

<style lang="less" scoped>
.scroll {
  height: calc(100vh - 118px);
  overflow: hidden;
  background: rgba(89, 175, 2, .2);
}
.text-item {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  .item-icon {
    font-size: 50px;
    padding-left: 50px;
  }
  span {
    padding-left: 20px;
    color: #049b04;
  }
}

</style>
