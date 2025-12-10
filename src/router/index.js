import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/courses',
    name: 'CoursesView',
    component: () => import('@/views/CoursesView.vue')
  },
  {
    path: '/facilities',
    name: 'FacilitiesView',
    component: () => import('@/views/FacilitiesView.vue')
  },
  {
    path: '/careers',
    name: 'CareersView',
    component: () => import('@/views/CareersView.vue')
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('@/views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router