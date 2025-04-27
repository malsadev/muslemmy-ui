import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'
import AdminRegistration from './components/AdminRegistration.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: App },
  { path: '/AdminRegistration', component: AdminRegistration },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})