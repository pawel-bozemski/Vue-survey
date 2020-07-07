import Vue from 'vue'
import Vuex from 'vuex'
import interview from './interview'
import diet from './diet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    interview,
    diet
  }
})
