const state = {
  heart: []
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
