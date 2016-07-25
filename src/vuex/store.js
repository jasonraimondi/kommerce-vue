import Vue from 'vue'
import Vuex from 'vuex'
import products from './products/store.js'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
