const state = {
  diet: [],
  question_1: [
    { id: 1, name: 'question_1', value: 'lorem_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'question_1', value: 'ipsum_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'question_1', value: 'dolor_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'question_1', value: 'amet_1', title: 'Lorem ipsum dolor sit amet' }
  ],
  question_2: [
    { id: 1, name: 'question_2', value: 'lorem_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'question_2', value: 'ipsum_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'question_2', value: 'dolor_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'question_2', value: 'amet_2', title: 'Lorem ipsum dolor sit amet' }

  ],
  question_3: [
    { id: 1, name: 'question_3', value: 'lorem_3', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'question_3', value: 'ipsum_3', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'question_3', value: 'dolor_3', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'question_3', value: 'amet_3', title: 'Lorem ipsum dolor sit amet' }
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
  question_1: state => {
    return state.question_1
  },
  question_2: state => {
    return state.question_2
  },
  question_3: state => {
    return state.question_3
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
