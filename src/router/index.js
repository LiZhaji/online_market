import Vue from 'vue'
import Router from 'vue-router'

import homepage from '../views/homepage'
import article from '../views/article'
import blog from '../views/blog'
import products from '../views/products'
import detail from '../views/detail'
import shopcar from "../views/shopcar";
import personal from "../views/personal";
import pay from "../views/pay";
import activity from "../views/activity";
import login from '../views/login'
import register from '../views/register'
import dialog from '../views/personal-dialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: homepage
    },
    {
      path: '/article',
      component: article
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/products',
      component: products
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/personal-dialog',
      component: dialog
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    }
  ]
})
