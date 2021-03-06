import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../views/Layout";
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path     : '',
    component: Layout,
    children : [
      {
        path     : '/',
        name     : 'home',
        component: Home,
        meta:{
          title:'Home page'
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})
export default router
