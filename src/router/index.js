import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [{
  path: '/',
  component: HomeView
}, {
  path: '/about',
  component: AboutView
}, {
  path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView
}, {
  path: '/login',
  component: LoginView
}]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
