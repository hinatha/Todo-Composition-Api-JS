<template>
  <div id="app">
    <!-- Set getListLength from computed property -->
    <h1>Todoリスト {{ getListLength }}</h1>
    <!-- The data in v-model is synchronized with the form input value -->
    <input v-model="todo"><br>
    <!-- Call addTodo method by click event -->
    <button @click="addTodo">追加</button>
    <ul>
      <!-- Display todos with index as key -->
      <!-- Call removeTodo method with index as an argument  -->
      <li v-for="(todo, index) in todos" :key="index">{{ todo }} <span @click="removeTodo(index)">X</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  // Set form empty todo and todo list(todos)
  data() {
    return {
      todo: '',
      todos:[]
    }
  },
  methods: {
    addTodo() {
      // Add todo to todos in data()
      this.todos.push(this.todo)
      // Change to empty todo in form
      this.todo = ''
    },
    removeTodo(index) {
      // splice(index: position of starting to remove, 1: the number of removing)
      this.todos.splice(index, 1)
    }
  },
  computed: {
    getListLength() {
      // Return the list length of todo list
      return this.todos.length
    }
  },
}
</script>
