import { createApp } from 'vue'
import App from './App.vue'
// import CompositionApi from '@vue/composition-api' //Add new

// Define app
const app = createApp(App)

// Inject CompositionApi plugin but don't need to import it
// Vue which is from version 2.7 already has composition api
// FYI: https://www.npmjs.com/package/@vue/composition-api
// app.use(CompositionApi) // Add new

// Amount app like below
// <div id="app">
//   <div id="app">
//   </div>
// </div>
app.mount('#app')