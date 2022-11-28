<template>
  <div id="app">
    <!-- Showing state.message from setup() -->
    {{ state.message }}
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    // Set message
    const state = reactive({
      message: 'Hello Wold'
    })
    // return message to template
    return {
      state,
    }
  }
}
</script>