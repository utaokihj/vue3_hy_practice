<template>
  <HeaderBar />
  <canvas id="myChart" class="canvas-box"></canvas>
</template>

<script>
import F2 from '@antv/f2'
import { reactive, toRefs, onMounted } from 'vue'

import HeaderBar from '@/components/common/headerbar/HeaderBar'

export default {
  components: {
    HeaderBar
  },
  setup () {
    const states = reactive({
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
    })

    onMounted(() => {
      initChart()
    })

    const changeData = (chart) => {
      setTimeout(() => {
        for (const key in states.data) {
          states.data[key].sold -= 50
        }
        chart.changeData(states.data)
      }, 3000)
    }

    const initChart = () => {
      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      })
      chart.source(states.data)
      // 创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position('genre*sold').color('genre')

      // 改成二维坐标散点
      // chart.point().position('genre*sold').color('#face15')

      // 再来个折线
      // chart.line().position('genre*sold').color('#ffee15')

      // 只有 Visual Cue，Coordinate 如何变动呢
      // chart.coord('polar')
      // // 如果觉得观感不佳，还可以做更详细的配置
      // chart.source(states.data, {
      //   sold: {
      //     min: 0,
      //     max: 500
      //   }
      // })

      chart.render()

      changeData(chart)
    }

    return {
      ...toRefs(states),
      initChart,
      changeData
    }
  }
}
</script>

<style lang="less" scoped>
.canvas-box {
  width: 96%;
  height: 520px;
  margin-top: 108px;
  margin-left: 2%;
  // background-color: var(--color-background);
  border: 1px solid var(--color-background);
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
