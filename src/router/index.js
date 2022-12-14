import Vue from 'vue'
import VueRouter from 'vue-router'

let HomeView = () => import('@/views/home/HomeView');
let CartView = () => import('@/views/cart/CartView');

import Detail from './detail';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  Detail
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
