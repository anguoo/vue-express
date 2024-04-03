import { createRouter, createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/user',
    component: () => import('../views/user/user.vue')
  },
  {
    path: '/announcement',
    component: () => import('../views/announcement/announcement.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
