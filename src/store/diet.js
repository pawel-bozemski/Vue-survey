const state = {
  diet: [],
  diet_1: [
    { id: 1, name: 'diet_1', value: 'lorem_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'diet_1', value: 'ipsum_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'diet_1', value: 'dolor_1', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'diet_1', value: 'amet_1', title: 'Lorem ipsum dolor sit amet' }
  ],
  diet_2: [
    { id: 1, name: 'diet_2', value: 'lorem_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'diet_2', value: 'ipsum_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'diet_2', value: 'dolor_2', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'diet_2', value: 'amet_2', title: 'Lorem ipsum dolor sit amet' }

  ],
  diet_3: [
    { id: 1, name: 'diet_3', value: 'lorem_3', title: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'diet_3', value: 'ipsum_3', title: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'diet_3', value: 'dolor_3', title: 'Lorem ipsum dolor sit amet' },
    { id: 4, name: 'diet_3', value: 'amet_3', title: 'Lorem ipsum dolor sit amet' }
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
