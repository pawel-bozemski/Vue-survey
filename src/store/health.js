const state = {
  health: [],
  health_1: [
    { id: 1, name: 'health_1', value: 'yes', title: 'Tak' },
    { id: 2, name: 'health_1', value: 'no', title: 'Nie' }
  ],
  health_2: [
    { id: 1, name: 'health_2', value: 'hipertension', title: 'Nadciśnienie' },
    { id: 2, name: 'health_2', value: 'diabetes', title: 'Cukrzyca' },
    { id: 3, name: 'health_2', value: 'pochp', title: 'Przewlekła obturacyjna choroba płuc (POChP)' },
    { id: 4, name: 'health_2', value: 'allergy', title: 'Alergia lub astma' },
    { id: 5, name: 'health_2', value: 'depresion', title: 'Depresja' },
    { id: 6, name: 'health_2', value: 'cancer', title: 'Choroba nowotworowa' },
    { id: 7, name: 'health_2', value: 'joints', title: 'Choroba stawów' },
    { id: 8, name: 'health_2', value: 'neurological', title: 'Choroba neurologiczna' }
  ],
  health_3: [
    { id: 1, name: 'health_2', value: 'headPain', title: 'Ból pleców / Ból głowy' },
    { id: 2, name: 'health_2', value: 'chestPain', title: 'Ból w klatce piersiowej / Zgaga' },
    { id: 3, name: 'health_2', value: 'insomnia', title: 'Drętwienie kończyn / Bezsenność' },
    { id: 4, name: 'health_2', value: 'sleepy', title: 'Zaparcia / Senność w ciągu dnia' },
    { id: 5, name: 'health_2', value: 'thirst', title: 'Nadmierne pragnienie / Niewyraźne widzenie' },
    { id: 6, name: 'health_2', value: 'psychExhaust', title: 'Nietrzymanie moczu / Psychiczne, emocjonalne lub fizyczne wyczerpanie pracą' },
    { id: 7, name: 'health_2', value: 'memoryLoss', title: 'Zaburzenia pamięci' }
  ]
}

const mutations = {
  'SET_HEALTH' (state, health) {
    state.health = health
  }
}
const actions = {
  setHealth: ({ commit }, health) => {
    commit('SET_HEALTH', health)
  }
}

const getters = {
  health: state => {
    return state.health
  },
  health_1: state => {
    return state.health_1
  },
  health_2: state => {
    return state.health_2
  },
  health_3: state => {
    return state.health_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
