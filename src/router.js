import { createWebHistory, createRouter } from 'vue-router'

import AdminRegistration from './components/AdminRegistration.vue'
import SignIn from './components/SignIn.vue'
// import App from './App.vue'
import SiteSetup from './components/SiteSetup.vue'
import UserProfile from './components/UserProfile.vue'
import HomeFeed from './components/HomeFeed.vue'
import CreatePost from './components/Post/CreatePost.vue'
import CreateCommunity from './components/Community/CreateCommunity.vue'
import Communities from './components/Community/Communities.vue'
import { UserService } from './services/UserService'

// https://router.vuejs.org/guide/advanced/navigation-guards.html#Per-Route-Guard
// redirects
// https://router.vuejs.org/guide/essentials/redirect-and-alias.html
const routes = [
//   { path: '/', component: App },
  { path: '/', component: HomeFeed },
  { path: '/AdminRegistration', component: AdminRegistration },
  { path: '/SignIn', component: SignIn },
  { path: '/SiteSetup', component: SiteSetup},
  { path: '/users/:username', component: UserProfile },
  { path: '/CreatePost', 
    component: CreatePost,
    meta: {requriesAuth: true}, },
  { path: '/CreateCommunity',
    component: CreateCommunity,
    meta: {requriesAuth: true}, },
  { path: '/Communities', component: Communities },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  

  if (to.meta.requriesAuth && !UserService.Instance.auth()) {
    return {  
      path: '/SignIn',
      query: { redirect: to.fullPath }
     }

  }
})

export default router;