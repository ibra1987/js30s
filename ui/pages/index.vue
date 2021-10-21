<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full py-12 flex flex-col justify-center items-center">
      <Content />
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex"
import {computed } from "@nuxtjs/composition-api"

export default {
  layout: 'default',
  // OR

  setup(){

    const users = computed(()=> )


  }
}
</script>
