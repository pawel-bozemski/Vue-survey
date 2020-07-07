const state = {
  interview: []
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
