<template>
  <div id="app">
    <!-- Not need to use "state." -->
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
// Vue which is from version 2.7 already has composition api
// import { ref } from "@vue/composition-api";
import { ref } from "vue";
export default {
  setup() {
    // Set message by using ref
    const message = ref('Hello World')
    
    return {
      message
    }
  }
}
</script>