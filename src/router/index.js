import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'aboutUs',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'aContactUs',
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/team',
      name: 'OurTeam',
      component: () => import('../views/OurTeam.vue')
    },

  ]
})

export default router
