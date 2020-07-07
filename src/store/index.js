import Vue from 'vue'
import Vuex from 'vuex'
import interview from './interview'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    interview
  }
})
