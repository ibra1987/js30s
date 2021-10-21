<template>
  <div
    class="w-full flex flex-row justify-between items-center py-4 px-2 rounded"
  >
    <div class="flex flex-row justify-start items-center text-sm">
      <div
        class="
          rounded-full
          flex
          items-center
          border border-sec
          bg-yellow-50
          justify-center
          h-8
          w-8
          cursor-pointer
        "
      >
        img
      </div>

      <div class="flex flex-col justify-start items-centerpy-2 mx-4">
        <span
          class="block text-center w-full text-secondary text-sm cursor-pointer"
        >
          Full Name that is long enought to stretch the div
        </span>
        <span class="block text-center w-full text-secondary text-xs">
          Software Engineer
        </span>
      </div>
    </div>
    <div class="text-xs mx-4">
      <span class="text-secondary"> {{ today }} </span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const today = ref(moment().fromNow())

    return { today }
  },
}
</script>

<style></style>
