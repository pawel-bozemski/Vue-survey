import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Diet from '../components/pages/Diet'
import Drugs from '../components/pages/Drugs'
import Psych from '../components/pages/Psych'
import Sport from '../components/pages/Sport'
import Health from '../components/pages/Health'
import Prevention from '../components/pages/Prevention'
import Doctor from '../components/pages/Doctor'
import Cost from '../components/pages/Cost'
import Interview from '../components/Interview'
import ResultsDiet from '../components/results/ResultsDiet'
import ResultsDrugs from '../components/results/ResultsDrugs'
import ResultsPsych from '../components/results/ResultsPsych'
import ResultsSport from '../components/results/ResultsSport'
import ResultsHealth from '../components/results/ResultsHealth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/diet',
    name: 'Diet',
    component: Diet
  },
  {
    path: '/cost',
    name: 'cost',
    component: Cost
  },
  {
    path: '/health',
    name: 'health',
    component: Health
  },
  {
    path: '/prevention',
    name: 'prevention',
    component: Prevention
  },
  {
    path: '/sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/drugs',
    name: 'drugs',
    component: Drugs
  },
  {
    path: '/psych',
    name: 'Psych',
    component: Psych
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: Doctor
  },

  {
    path: '/interview',
    name: 'interview',
    component: Interview
  },
  {
    path: '/resultsdiet',
    name: 'resultsdiet',
    component: ResultsDiet
  },
  {
    path: '/resultsdrugs',
    name: 'resultsdrugs',
    component: ResultsDrugs
  },
  {
    path: '/resultspsych',
    name: 'resultspsych',
    component: ResultsPsych
  },
  {
    path: '/resultssport',
    name: 'resultssport',
    component: ResultsSport
  },
  {
    path: '/resultshealth',
    name: 'resultshealth',
    component: ResultsHealth
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
