const state = {
  drugs: [],
  drugs_1: [
    { id: 1, name: 'drugs_1', value: 'everyday1', title: 'Codziennie' },
    { id: 2, name: 'drugs_1', value: 'weekly1', title: 'Kilka razy w tygodniu' },
    { id: 3, name: 'drugs_1', value: 'monthly1', title: 'Kilka razy w miesiącu' },
    { id: 4, name: 'drugs_1', value: 'yearly1', title: 'Raz w miesiącu lub rzadziej' },
    { id: 5, name: 'drugs_1', value: 'never1', title: 'Nigdy' }
  ],
  drugs_2: [
    { id: 1, name: 'drugs_2', value: 'everyday2', title: 'Tak, codziennie lub prawie codziennie' },
    { id: 2, name: 'drugs_2', value: 'sometimes2', title: 'Tak, okazjonalnie' },
    { id: 3, name: 'drugs_2', value: 'past2', title: 'Nie, ale w przeszłości paliłem/am' },
    { id: 4, name: 'drugs_2', value: 'never2', title: 'Raz w miesiącu lub rzadziej' }
  ],
  drugs_3: [
    { id: 1, name: 'drugs_3', value: 'everyday3', title: 'Tak, codziennie lub prawie codziennie' },
    { id: 2, name: 'drugs_3', value: 'sometimes3', title: 'Tak, okazjonalnie' },
    { id: 3, name: 'drugs_3', value: 'past3', title: 'Nie, ale w przeszłości paliłem/am' },
    { id: 4, name: 'drugs_3', value: 'never3', title: 'Raz w miesiącu lub rzadziej' }
  ]
}

const mutations = {
  'SET_DRUGS' (state, drugs) {
    state.drugs = drugs
  }
}
const actions = {
  setDrugs: ({ commit }, drugs) => {
    commit('SET_DRUGS', drugs)
  }
}

const getters = {
  drugs: state => {
    return state.drugs
  },
  drugs_1: state => {
    return state.drugs_1
  },
  drugs_2: state => {
    return state.drugs_2
  },
  drugs_3: state => {
    return state.drugs_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
