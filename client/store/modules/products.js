import plans from '../../api/plans'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    plans.getPlans(plans => {
      commit(types.RECEIVE_PLANS, { plans })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PLANS] (state, { plans }) {
    state.all = plans
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
