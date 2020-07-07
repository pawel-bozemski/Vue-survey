const state = {
  diet: []
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
