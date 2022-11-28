<template>
  <div id="app">
    <!-- In case of reactive -->
    <!-- {{ state.message }} -->
    <!-- Not need to use "state." -->
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
// Vue which is from version 2.7 already has composition api
// import { reactive, toRefs } from "@vue/composition-api";
import { reactive, toRefs } from "vue";
export default {
  setup() {
    // Define state by using reactive
    const state = reactive({
      message: 'Hello Wold'
    })
    return {
      // Change reactive to ref
      ...toRefs(state),
    }
  }
}
</script>