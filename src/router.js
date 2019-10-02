import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/house',
      name: 'house',
      component: () => import('./views/House.vue')
    },
    {
      path: '/contact',
      name: 'Kontakt',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/sights',
      name: 'Sights',
      component: () => import('./views/Sights.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('./views/Pricing.vue')
    },
    {
      path: '/availiability',
      name: 'availiability',
      component: () => import('./views/Availiability.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('./views/Gallery.vue')
    }
  ]
})
