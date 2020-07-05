import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
    path: '/survey/page1',
    name: 'page1',
    component: Page1
  },
  {
    path: '/survey/page2',
    name: 'page2',
    component: Page2
  },
  {
    path: '/survey/page3',
    name: 'page3',
    component: Page3
  },
  {
    path: '/survey/interview',
    name: 'interview',
    component: Interview
  },
  {
    path: '/survey/results',
    name: 'results',
    component: Results
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
