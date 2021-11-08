<template>
  <p>typeof</p>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'

import { typeCheckFn } from '@/utils/common'

export default {
  setup () {
    const state = reactive({
      type: {
        number: 1, // [object Number]
        string: '123', // [object String]
        boolean: true, // [object Boolean]
        und: undefined, // [object Undefined]
        nul: null, // [object Null]
        obj: { a: 1 }, // [object Object]
        array: [1, 2, 3], // [object Array]
        date: new Date(), // [object Date]
        error: new Error(), // [object Error]
        reg: /a/g, // [object RegExp]
        func: function a () {} // [object Function]
      }
    })

    const typeCheck = function () {
      for (let i = 0; i < arguments.length; i++) {
        console.log(Object.prototype.toString.call(arguments[i]))
      }
    }

    onMounted(() => {
      console.log(typeCheckFn(Math))
      // console.log(Object.prototype.toString.call(Math)) // [object Math]
      // console.log(Object.prototype.toString.call(JSON)) // [object JSON]

      for (const key in state.type) {
        typeCheck(state.type[key])
      }
    })

    return {
      ...toRefs(state),
      typeCheck
    }
  }
}
</script>
