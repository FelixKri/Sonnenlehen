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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/House.vue')
    },
    {
      path: '/contact',
      name: 'Kontakt',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    {
      path: '/sights',
      name: 'Sights',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Sights.vue')
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
      path: '/gallery',s
      name: 'gallery',
      component: () => import('./views/Gallery.vue')
    }
  ]
})
