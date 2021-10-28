<template>
  <p>partyEducation</p>
  <Test @testClick="testClick" />
</template>

<script>
import Test from '@/components/common/Test'

export default {
  components: {
    Test
  },
  setup () {
    const testClick = value => {
      console.log(value)
    }
    return {
      testClick
    }
  }
}
</script>
