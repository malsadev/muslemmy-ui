import { createWebHistory, createRouter } from 'vue-router'

import AdminRegistration from './components/AdminRegistration.vue'
import SignIn from './components/SignIn.vue'
// import App from './App.vue'
import SiteSetup from './components/SiteSetup.vue'


// redirects
// https://router.vuejs.org/guide/essentials/redirect-and-alias.html
const routes = [
//   { path: '/', component: App },
  { path: '/AdminRegistration', component: AdminRegistration },
  { path: '/SignIn', component: SignIn },
  { path: '/SiteSetup', component: SiteSetup}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;