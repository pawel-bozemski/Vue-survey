import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Page1 from '../components/pages/Page1'
import Page2 from '../components/pages/Page2'
import Page3 from '../components/pages/Page3'
import Interview from '../components/Interview'
import Results from '../components/Results'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3
  },
  {
    path: '/interview',
    name: 'interview',
    component: Interview
  },
  {
    path: '/results',
    name: 'results',
    component: Results
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
