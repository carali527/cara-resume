import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory('/cara-resume/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
