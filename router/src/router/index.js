import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: Contact
    },
    {
      path: '/profile/:user_id',
      name: 'profile',
      component: Profile
    },
  ]
})
