import { createApp } from 'vue'
import App from './App.vue'
// import CompositionApi from '@vue/composition-api' //Add new

// Define app
const app = createApp(App)

// Inject CompositionApi plugin but don't need to import it
// This Vue version already has composition api
// app.use(CompositionApi) // Add new

// Amount app like below
// <div id="app">
//   <div id="app">
//   </div>
// </div>
app.mount('#app')
