const state = {
  heart: [],
  heart_1: [
    { id: 1, name: 'question_1', value: 'lorem_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'question_1', value: 'ipsum_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'question_1', value: 'dolor_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'question_1', value: 'amet_1', title: 'Lorem ipsum dolor sit amet' }
  ],
  heart_2: [
    { id: 1, name: 'question_2', value: 'lorem_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'question_2', value: 'ipsum_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'question_2', value: 'dolor_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'question_2', value: 'amet_2', title: 'Lorem ipsum dolor sit amet' }

  ]
}

const mutations = {
  'SET_HEART' (state, heart) {
    state.heart = heart
  }
}
const actions = {
  setHeart: ({ commit }, heart) => {
    commit('SET_HEART', heart)
  }
}

const getters = {
  heart: state => {
    return state.heart
  },
  heart_1: state => {
    return state.heart_1
  },
  heart_2: state => {
    return state.heart_2
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
