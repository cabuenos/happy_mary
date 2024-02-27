import { createRouter, createWebHistory } from 'vue-router'

import {international} from '../main';

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

router.beforeEach((to, from, next) => {
  international.global.locale = localStorage.getItem('language') || 'es'
  // international.locale = localStorage.getItem('language') || 'en'
  return next()
})



export default router
