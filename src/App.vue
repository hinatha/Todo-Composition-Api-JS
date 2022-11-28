<template>
  <div id="app">
    <!-- Set getListLength from state -->
    <!-- <h1>Todoリスト {{ state.getListLength }}</h1> -->

    <!-- Set getListLength from function -->
    <h1>Todoリスト {{ getListLength }}</h1>
    <!-- "state.todo" in v-model is synchronized with the form input value -->
    <input v-model="state.todo"><br>
    <!-- Call addTodo method by click event -->
    <button @click="addTodo">追加</button>
    <ul>
      <!-- Display state.todos with index as key -->
      <!-- Call removeTodo method with index as an argument  -->
      <li v-for="(todo, index) in state.todos" :key="index">
        {{ todo }} <span @click="removeTodo(index)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
// Vue which is from version 2.7 already has composition api
// FYI: https://www.npmjs.com/package/@vue/composition-api
// import { reactive } from "@vue/composition-api";
import { reactive, computed } from "vue";
export default {
  // Composition api can define function inside setup()
  setup() {
    const state = reactive({
      todo: '',
      todos: [],
      // Set getListLength by using reactive
      // getListLength: computed(() => state.todos.length)
    })

    const addTodo = () => {
      // Add form value to todo list
      state.todos.push(state.todo)
      // Make form value empty
      state.todo = ''
    }

    // splice(index: position of starting to remove, 1: the number of removing)
    const removeTodo = index => state.todos.splice(index,1)
    
    // Define getListLength as function
    const getListLength = computed(() => state.todos.length)
    
    return {
      state,
      addTodo,
      removeTodo,
      getListLength // Function of getListLength 
    }
  }
}
</script>