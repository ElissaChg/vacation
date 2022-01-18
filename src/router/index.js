import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ActivityList from '@/views/ActivityList'
import ActivityDetail from '@/views/ActivityDetail'
import FoodList from '@/views/FoodList'
import FoodDetail from '@/views/FoodDetail'
import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/activity',
    name: 'ActivityList',
    component: ActivityList,
  },
  {
    path: '/activity/:id',
    name: 'ActivityDetail',
    component: ActivityDetail,
  },
  {
    path: '/food',
    name: 'FoodList',
    component: FoodList,
  },
  {
    path: '/food/:id',
    name: 'FoodDetail',
    component: FoodDetail,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
