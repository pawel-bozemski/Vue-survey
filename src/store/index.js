import Vue from 'vue'
import Vuex from 'vuex'
import interview from './interview'
import diet from './diet'
import drugs from './drugs'
import psych from './psych'
import sport from './sport'
import health from './health'
import prevention from './prevention'
import doctor from './doctor'
import cost from './cost'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    interview,
    diet,
    drugs,
    psych,
    sport,
    health,
    prevention,
    doctor,
    cost
  }
})
