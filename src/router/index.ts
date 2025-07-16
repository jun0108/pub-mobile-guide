import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('~/pages/index.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('~/pages/example/index.vue')
  },
  {
    path: '/example/button',
    name: 'example-button',
    component: () => import('~/pages/example/Button.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router