import Vue from 'vue'
import VueRouter from 'vue-router'

let HomeView = () => import('@/views/home/HomeView');
let DetailView = ()=>import('@/views/detail/DetailView');

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
    path: '/detail/:iid',
    name: 'detail',
    component: DetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
