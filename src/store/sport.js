const state = {
  sport: [],
  sport_1: [
    { id: 1, name: 'sport_1', value: 'none1', title: 'Nie wychodzę z domu/ Nie spaceruję z powodów zdrowotnych' },
    { id: 2, name: 'sport_1', value: '30min', title: '30 – 60 minut' },
    { id: 3, name: 'sport_1', value: '1hour', title: '1 – 2 godzin' },
    { id: 4, name: 'sport_1', value: 'coupleHours', title: 'Powyżej 2 godzin' }
  ],
  sport_2: [
    { id: 1, name: 'sport_2', value: 'none2', title: 'Nie uprawiam żadnego sportu' },
    { id: 2, name: 'sport_2', value: '4monthly', title: 'Mniej niż 4 godziny miesięcznie' },
    { id: 3, name: 'sport_2', value: '1weekly', title: 'Około 1-1,5 godziny tygodniowo' },
    { id: 4, name: 'sport_2', value: '2weekly', title: 'Co najmniej 2 godziny tygodniowo i więcej' }
  ],
  sport_3: [
    { id: 1, name: 'sport_3', value: 'good', title: 'Bardzo dobry i dobry' },
    { id: 2, name: 'sport_3', value: 'average', title: 'Przeciętny (Ani dobry, ani zły)' },
    { id: 3, name: 'sport_3', value: 'bad', title: 'Bardzo zły i zły' }
  ]
}

const mutations = {
  'SET_SPORT' (state, sport) {
    state.sport = sport
  }
}
const actions = {
  setSport: ({ commit }, sport) => {
    commit('SET_SPORT', sport)
  }
}

const getters = {
  sport: state => {
    return state.sport
  },
  sport_1: state => {
    return state.sport_1
  },
  sport_2: state => {
    return state.sport_2
  },
  sport_3: state => {
    return state.sport_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
