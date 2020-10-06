const state = {
  diet: [],
  diet_1: [
    { id: 1, name: 'diet_1', value: 'zdrowe', title: 'Skomponowane pod kątem zdrowego odżywiania' },
    { id: 2, name: 'diet_1', value: 'bezmiesne', title: 'Bezmięsne' },
    { id: 3, name: 'diet_1', value: 'miesne', title: 'Mięsne, wysokobiałkowe' },
    { id: 4, name: 'diet_1', value: 'lowCarb', title: 'Unikam ryżu, makaronów i innych węglowodanów' },
    { id: 5, name: 'diet_1', value: 'lowSalt', title: 'Tylko z odrobiną soli lub wcale' }
  ],
  diet_2: [
    { id: 1, name: 'diet_2', value: 'everyday2', title: 'Codziennie' },
    { id: 2, name: 'diet_2', value: 'weekly2', title: 'Kilka razy w tygodniu' },
    { id: 3, name: 'diet_2', value: 'monthly2', title: 'Kilka razy w miesiącu' },
    { id: 4, name: 'diet_2', value: 'yearly2', title: 'Raz w miesiącu lub rzadziej' },
    { id: 5, name: 'diet_2', value: 'never2', title: 'Nigdy' }
  ],
  diet_3: [
    { id: 1, name: 'diet_3', value: 'everyday3', title: 'Codziennie' },
    { id: 2, name: 'diet_3', value: 'weekly3', title: 'Kilka razy w tygodniu' },
    { id: 3, name: 'diet_3', value: 'monthly3', title: 'Kilka razy w miesiącu' },
    { id: 4, name: 'diet_3', value: 'yearly3', title: 'Raz w miesiącu lub rzadziej' },
    { id: 5, name: 'diet_3', value: 'never3', title: 'Nigdy' }
  ]
}

const mutations = {
  'SET_DIET' (state, diet) {
    state.diet = diet
  }
}
const actions = {
  setDiet: ({ commit }, diet) => {
    commit('SET_DIET', diet)
  }
}

const getters = {
  diet: state => {
    return state.diet
  },
  diet_1: state => {
    return state.diet_1
  },
  diet_2: state => {
    return state.diet_2
  },
  diet_3: state => {
    return state.diet_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
