const state = {
  psych: [],
  psych_1: [
    { id: 1, name: 'psych_1', value: 'daily1', title: 'Tak, codziennie' },
    { id: 2, name: 'psych_1', value: 'weekly1', title: 'Tak, kilka razy w tygodniu' },
    { id: 3, name: 'psych_1', value: 'monthly1', title: 'Tak, kilka razy w miesiącu' },
    { id: 4, name: 'psych_1', value: 'yearly1', title: 'Tak, raz w miesiącu lub rzadziej' },
    { id: 5, name: 'psych_1', value: 'none1', title: 'Nie, nigdy' }
  ],
  psych_2: [
    { id: 1, name: 'psych_2', value: 'daily2', title: 'Tak, codziennie' },
    { id: 2, name: 'psych_2', value: 'weekly2', title: 'Tak, kilka razy w tygodniu' },
    { id: 3, name: 'psych_2', value: 'monthly2', title: 'Tak, kilka razy w miesiącu' },
    { id: 4, name: 'psych_2', value: 'yearly2', title: 'Tak, raz w miesiącu lub rzadziej' },
    { id: 5, name: 'psych_2', value: 'none2', title: 'Nie, nigdy' }
  ],
  psych_3: [
    { id: 1, name: 'psych_3', value: 'low', title: 'Mniej niż 7 godzin' },
    { id: 2, name: 'psych_3', value: 'optimal', title: '7-9 godzin' },
    { id: 3, name: 'psych_3', value: 'high', title: '10 godzin i więcej' }
  ]
}

const mutations = {
  'SET_PSYCH' (state, psych) {
    state.psych = psych
  }
}
const actions = {
  setPsych: ({ commit }, psych) => {
    commit('SET_PSYCH', psych)
  }
}

const getters = {
  psych: state => {
    return state.psych
  },
  psych_1: state => {
    return state.psych_1
  },
  psych_2: state => {
    return state.psych_2
  },
  psych_3: state => {
    return state.psych_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
