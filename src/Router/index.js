import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Pages/Home'
import About from '@/components/Pages/About'
import Contact from '@/components/Pages/Contact'
import Sample from '@/components/Pages/Sample'
import Test from '@/components/Pages/Test'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
]


const router = new VueRouter({
    routes
  })
  
  export default router