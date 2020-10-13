const state = {
  interview: {
    gender: '',
    age: '',
    location: ''
  },
  gender: [
    { id: 1, name: 'gender', value: 'female', title: 'Kobieta', checked: true },
    { id: 2, name: 'gender', value: 'male', title: 'Mężczyzna', checked: false }
  ],
  age: [
    { id: 1, name: 'age', value: '18-24', title: '18-24' },
    { id: 2, name: 'age', value: '25-34', title: '25-34' },
    { id: 3, name: 'age', value: '35-44', title: '35-44' },
    { id: 4, name: 'age', value: '45-54', title: '45-54' },
    { id: 5, name: 'age', value: '55-64', title: '55-64' },
    { id: 6, name: 'age', value: '65', title: '65+' }
  ],
  location: [
    { id: 1, name: 'location', value: 'cottage', title: 'wieś' },
    { id: 2, name: 'location', value: 'city19k', title: 'miasto do 19 tys. mieszkańców' },
    { id: 3, name: 'location', value: 'city20k', title: 'miasto 20-49 tys. mieszkańców' },
    { id: 4, name: 'location', value: 'city50k', title: 'miasto 50-99 tys. mieszkańców' },
    { id: 5, name: 'location', value: 'city100k', title: 'miasto 100-199 tys. mieszkańców' },
    { id: 6, name: 'location', value: 'city200k', title: 'miasto 200-499 mieszkańców' },
    { id: 7, name: 'location', value: 'city500k', title: 'miasto 500 + tys. mieszkańców' }
  ]
}

const mutations = {
  'SET_INTERVIEW' (state, interview) {
    state.interview = interview
  }
}
const actions = {
  setInterview: ({ commit }, interview) => {
    commit('SET_INTERVIEW', interview)
  }
}

const getters = {
  interview: state => {
    return state.interview
  },
  gender: state => {
    return state.gender
  },
  age: state => {
    return state.age
  },
  location: state => {
    return state.location
  },
  education: state => {
    return state.education
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
