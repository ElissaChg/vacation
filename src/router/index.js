import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ActivityList from '@/views/ActivityList'
import ActivityDetail from '@/views/ActivityDetail'
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
