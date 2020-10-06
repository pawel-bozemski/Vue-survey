const state = {
  prevention: [],
  prevention_1: [
    { id: 1, name: 'prevention_1', value: 'yes1', title: 'Tak' },
    { id: 2, name: 'prevention_1', value: 'no1', title: 'Nie' }
  ],
  prevention_2: [
    { id: 1, name: 'prevention_2', value: 'yes2', title: 'Tak' },
    { id: 2, name: 'prevention_2', value: 'no2', title: 'Nie' }
  ],
  prevention_3: [
    { id: 1, name: 'prevention_3', value: 'yes3', title: 'Tak' },
    { id: 2, name: 'prevention_3', value: 'no3', title: 'Nie' }
  ],
  prevention_4: [
    { id: 1, name: 'prevention_4', value: 'weekly', title: 'Raz w miesiącu lub częściej' },
    { id: 2, name: 'prevention_4', value: 'monthly', title: 'Kilka razy w roku' },
    { id: 3, name: 'prevention_4', value: 'yearly', title: 'Raz w roku' },
    { id: 4, name: 'prevention_4', value: 'almostNever', title: 'Rzadziej niż raz w roku' },
    { id: 5, name: 'prevention_4', value: 'never', title: 'Nigdy' }
  ]

}

const mutations = {
  'SET_PREVENTION' (state, prevention) {
    state.prevention = prevention
  }
}
const actions = {
  setPrevention: ({ commit }, prevention) => {
    commit('SET_PREVENTION', prevention)
  }
}

const getters = {
  prevention: state => {
    return state.prevention
  },
  prevention_1: state => {
    return state.prevention_1
  },
  prevention_2: state => {
    return state.prevention_2
  },
  prevention_3: state => {
    return state.prevention_3
  },
  prevention_4: state => {
    return state.prevention_4
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
