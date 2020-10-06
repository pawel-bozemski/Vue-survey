const state = {
  doctor: [],
  doctor_1: [
    { id: 1, name: 'doctor_1', value: 'halfYear1', title: 'Mniej niż 6 miesięcy temu' },
    { id: 2, name: 'doctor_1', value: 'year1', title: '6 - 12 miesięcy temu' },
    { id: 3, name: 'doctor_1', value: 'moreYear1', title: 'Dawniej niż rok temu' },
    { id: 4, name: 'doctor_1', value: 'never1', title: 'Nigdy' }
  ],
  doctor_2: [
    { id: 1, name: 'doctor_2', value: 'halfYear2', title: 'Mniej niż 6 miesięcy temu' },
    { id: 2, name: 'doctor_2', value: 'year2', title: '6 - 12 miesięcy temu' },
    { id: 3, name: 'doctor_2', value: 'moreYear2', title: 'Dawniej niż rok temu' },
    { id: 4, name: 'doctor_2', value: 'never2', title: 'Nigdy' }
  ],
  doctor_3: [
    { id: 1, name: 'doctor_3', value: 'halfYear3', title: 'Mniej niż 6 miesięcy temu' },
    { id: 2, name: 'doctor_3', value: 'year3', title: '6 - 12 miesięcy temu' },
    { id: 3, name: 'doctor_3', value: 'moreYear3', title: 'Dawniej niż rok temu' },
    { id: 4, name: 'doctor_3', value: 'never3', title: 'Nigdy' }
  ]
}

const mutations = {
  'SET_DOCTOR' (state, doctor) {
    state.doctor = doctor
  }
}
const actions = {
  setDoctor: ({ commit }, doctor) => {
    commit('SET_DOCTOR', doctor)
  }
}

const getters = {
  doctor: state => {
    return state.doctor
  },
  doctor_1: state => {
    return state.doctor_1
  },
  doctor_2: state => {
    return state.doctor_2
  },
  doctor_3: state => {
    return state.doctor_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
