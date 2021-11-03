<template>
  <HeaderBar />
  <div class="btn-box">
    <p
      v-for="(v, i) in 7"
      :key="i"
      :class="{'btn3': i === 2 }"
      @click="btnClick(i)"
    >
        {{ i === 0 ? '' : 'button-' }}{{ i === 0 ? 'click me' : i + 1 }}
    </p>
  </div>

  <div class="loop-container">
    <div class="ul">
      <div class="li" v-for="(v, i) in studentsAdd" :key="i">{{ v }}</div>
    </div>
  </div>

  <p class="ways-title"><i class="iconfont icon-mianxingditu"></i> background-clip:text配合color实现渐变文字</p>
  <div class="shining-box">
    <p class="shining">'Meander' will be happy</p>
  </div>

  <p class="ways-title"><i class="iconfont icon-mianxingditu"></i> backdrop-filter 毛玻璃背景</p>
  <div class="ground-glass">
    <div class="frosted-glass">
      <h1 class="title">shinyi</h1>
    </div>
  </div>

  <Dialog :dialogShow="dialogShow" :modalClose="modalClose" @modalClick="closeDialog" />
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from 'vue'

import HeaderBar from '@/components/common/headerbar/HeaderBar'
import Dialog from '@/components/content/dialog/Dialog'

export default {
  components: {
    HeaderBar,
    Dialog
  },
  setup () {
    const states = reactive({
      students: [
        '小刘同学加入了凹凸实验室',
        '小邓同学加入了凹凸实验室',
        '小李同学加入了凹凸实验室',
        '小王同学加入了凹凸实验室'
      ],
      modalClose: true
    })
    // states.students.concat(states.students[0])
    const studentsAdd = computed(() => [...states.students, states.students[0]])

    const dialogShow = ref(false)
    const btnClick = i => {
      if (i === 0) dialogShow.value = true
    }
    const closeDialog = val => {
      dialogShow.value = val
    }
    watch(() => dialogShow.value, (newVal, oldVal) => {
      console.log('watch fa: ', newVal)
    })

    return {
      ...toRefs(states),
      studentsAdd,

      dialogShow,
      btnClick,
      closeDialog
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box {
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, 20%);
  margin-top: 88px;
  p {
    width: 120px;
    height: 50px;
    font-size: 16px;
    // border: 1px solid rgba(0, 0, 0, .4);
    display: grid;
    place-items: center;
    box-shadow: 6px 6px 10px gray;
    margin-top: 20px;
  }
  .btn3 {
    box-shadow: inset 6px 6px 10px gray;
    // box-shadow: inset 1px 1px 10px rgba(0, 0, 0, .6);
  }
}
.btn-box:after {
  content: '';
  width: 20%;
}

@mixin middle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@keyframes scroll{
  0%{
    transform: translate(0, 0)
  }
  100%{
    transform: translate(0, -160px)
  }
}
.loop-container{
  @include middle;
  width: 440px;
  height: 80px;
  background: var(--color-background);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
  margin-left: 16px;
  .ul{
    animation-name: scroll;
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    // animation: scroll 8s linear infinite; Animation attribute abbreviation
  }
  .li{
    width: 100%;
    line-height: 80px;
    vertical-align: bottom;
    color: var(--color-text);
    text-align: center;
  }
}

.shining-box {
  width: 100%;
  height: 100px;
  display: grid;
  place-items: center;
  background-color: #000;
  margin-top: 20px;
  border-radius: 6px;
}
.shining {
  font-size: 26px;
  font-family: Lato, sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 100%);
  background-size: 80%;
  background-repeat: no-repeat;
  // below two lines create text gradient effect
  color: transparent;
  background-clip: text;
  animation: shining 3s linear infinite;
}

@keyframes shining {
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
}

/* 毛玻璃 */
.ways-title {
  margin-top: 40px;
}
.ground-glass {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: url('../../assets/images/flower.jpg'); // shinyi
  background: url(https://i.loli.net/2019/11/17/GAYyzeKsiWjP5qO.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  margin-top: 20px;
}
.frosted-glass {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
    0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
    0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  transition: 0.5s ease;

  &:hover {
    box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
      0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
      0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
  }
  .title {
    padding-left: 0.375em;
    font-size: 26px;
    font-family: Lato, sans-serif;
    font-weight: 200;
    letter-spacing: 0.75em;
    color: white;

    @media (max-width: 640px) {
      font-size: 26px;
    }
  }
}
</style>
