import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Dongtai from '../components/dongtai/dongtai'
import Remen from '../components/remen/remen'
import Faxian from '../components/faxian/faxian'

import Shop from '../components/shop/shop'
import Discount from '../components/discount/discount'
import Personal from '../components/personal/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: "dongtai"
        },
        {
          name: "dongtai",
          path: 'dongtai',
          component: Dongtai
        },
        {
          name: "remen",
          path: 'remen',
          component: Remen
        },
        {
          name: "faxian",
          path: 'faxian',
          component: Faxian
        }
      ]
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/discount',
      component: Discount
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
