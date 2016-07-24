import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  products: []
}

// Create an object storing various mutations. We will write the mutation
const mutations = {

  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  FETCH_PRODUCT_LIST (state, amount) {
    state.count = state.count + amount
  }}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
