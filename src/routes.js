// default
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// pages
import NotFound from '@/pages/404'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/shop/:id',
      name: 'product',
      component: Product
    }
  ]
})