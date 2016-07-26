import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config'

Vue.use(VueResource)

// Vue.http.options.crossOrigin = true
// Vue.http.options.credentials = true

export const ProductResource = Vue.resource(API_ROOT + 'products{/id}')
