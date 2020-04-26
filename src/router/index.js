import Vue from 'vue'
import Router from 'vue-router'
import Customer from '@/components/Customer'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customer',
      component:Customer
    },
    {
      path: '/about',
      name: 'About',
      component:About
    }
  ]
})
