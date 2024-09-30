import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [{
  path: '/',
  component: HomeView,
  meta: {
    title: "首页"
  }
}, {
  path: '/about',
  component: AboutView,
  meta: {
    title: "关于我们"
  }
}, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFoundView,
  meta: {
    title: "404"
  }
}, {
  path: '/login',
  component: LoginView,
  meta: {
    title: "登录"
  }
}]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
