<template>
  <article>

    {{ allProducts | json }}

    <product-search></product-search>
    <router-view></router-view>
  </article>
</template>

<script>
  import ProductSearch from '../components/ProductSearch.vue'
  import { getProducts } from '../vuex/products/getters.js'

  export default {
    name: 'ProductPage',

    components: {
      ProductSearch
    },
    vuex: {
      getters: {
        allProducts: getProducts
      }
    }
  }
</script>
