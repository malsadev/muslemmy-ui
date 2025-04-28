import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'
import AdminRegistration from './components/AdminRegistration.vue'
import SignIn from './components/SignIn.vue'
import App from './App.vue'

const routes = [
//   { path: '/', component: App },
  { path: '/AdminRegistration', component: AdminRegistration },
  { path: '/SignIn', component: SignIn },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;