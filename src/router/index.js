import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import NovelDetails from '../components/NovelDetails.vue'
import Author from '../components/Author'
import Read from '../components/Read'
import Paypal from '../components/Paypal'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { title: 'روايات وحكايات' },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/novel-details/:novel_slug',
    name: 'NovelDetails',
    component: NovelDetails,
    meta: { title: 'روايات وحكايات' },
  },
  {
    path: '/author/:author_slug',
    name: 'Author',
    component: Author,
    meta: { title: 'روايات وحكايات' },
  },
  {
    path: '/read/:novel_slug',
    name: 'Read',
    component: Read,
    meta: { title: 'روايات وحكايات' },
  },
  {
    path: '/paypal/:novel_slug',
    name: 'Paypal',
    component: Paypal,
    meta: { title: 'روايات وحكايات' },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
