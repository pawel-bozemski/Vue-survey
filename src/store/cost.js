const state = {
  cost: [],
  cost_1: [
    { id: 1, name: 'cost_1', value: 'yes1', title: 'Tak' },
    { id: 2, name: 'cost_1', value: 'no1', title: 'Nie' },
    { id: 3, name: 'cost_1', value: 'never1', title: 'Nie byłem/am postawiona nigdy w takiej sytuacji' }
  ],
  cost_2: [
    { id: 1, name: 'cost_2', value: 'yes2', title: 'Tak' },
    { id: 2, name: 'cost_2', value: 'no2', title: 'Nie' },
    { id: 3, name: 'cost_2', value: 'never2', title: 'Nie byłem/am postawiona nigdy w takiej sytuacji' }
  ],
  cost_3: [
    { id: 1, name: 'cost_3', value: 'yes3', title: 'Tak' },
    { id: 2, name: 'cost_3', value: 'no3', title: 'Nie' }
  ]
}

const mutations = {
  'SET_COST' (state, cost) {
    state.cost = cost
  }
}
const actions = {
  setCost: ({ commit }, cost) => {
    commit('SET_COST', cost)
  }
}

const getters = {
  cost: state => {
    return state.cost
  },
  cost_1: state => {
    return state.cost_1
  },
  cost_2: state => {
    return state.cost_2
  },
  cost_3: state => {
    return state.cost_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
