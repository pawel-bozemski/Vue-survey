const state = {
  health: {
    health_1: '',
    health_2: [],
    health_3: []
  },
  health_1: [
    { id: 1, name: 'health_1', value: 'yes', title: 'Tak' },
    { id: 2, name: 'health_1', value: 'no', title: 'Nie' }
  ],
  health_2: [
    { id: 1, name: 'health_2', value: 'hipertension', title: 'Nadciśnienie' },
    { id: 2, name: 'health_2', value: 'diabetes', title: 'Cukrzyca' },
    { id: 3, name: 'health_2', value: 'pochp', title: 'Przewlekła obturacyjna choroba płuc' },
    { id: 4, name: 'health_2', value: 'allergy', title: 'Alergia lub astma' },
    { id: 5, name: 'health_2', value: 'depresion', title: 'Depresja' },
    { id: 6, name: 'health_2', value: 'cancer', title: 'Choroba nowotworowa' },
    { id: 7, name: 'health_2', value: 'joints', title: 'Choroba stawów' },
    { id: 8, name: 'health_2', value: 'neurological', title: 'Choroba neurologiczna' },
    { id: 9, name: 'health_2', value: 'heart', title: 'Choroby serca' }

  ],
  health_3: [
    { id: 1, name: 'health_3', value: 'back', title: 'Ból pleców' },
    { id: 2, name: 'health_3', value: 'head', title: 'Ból głowy' },
    { id: 3, name: 'health_3', value: 'chest', title: 'Ból w klatce piersiowej' },
    { id: 4, name: 'health_3', value: 'burn', title: 'Zgaga' },
    { id: 5, name: 'health_3', value: 'arms', title: 'Drętwienie kończyn' },
    { id: 6, name: 'health_3', value: 'insomnia', title: 'Bezsenność' },
    { id: 7, name: 'health_3', value: 'constipation', title: 'Zaparcia' },
    { id: 8, name: 'health_3', value: 'sleepy', title: 'Senność w ciagu dnia' },
    { id: 9, name: 'health_3', value: 'thirst', title: 'Nadmierne pragnienie' },
    { id: 10, name: 'health_3', value: 'blured', title: 'Niewyraźne widzenie' },
    { id: 11, name: 'health_3', value: 'urea', title: 'Nietrzymanie moczu' },
    { id: 12, name: 'health_3', value: 'psych', title: 'Psychiczne, emocjonalne lub fizyczne wyczerpanie pracą' },
    { id: 13, name: 'health_3', value: 'memory', title: 'Zaburzenia pamięci' }
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
