import { RECEIVE_PRODUCTS } from '../mutation-types.js'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_PRODUCTS] (state, products) {
    console.log(products)
    state.all = products
  }
}

export default {
  state,
  mutations
}
