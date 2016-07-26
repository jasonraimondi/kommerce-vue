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
    ready () {
      allProducts
    },
    components: {
      ProductSearch
    },
    vuex: {
      getters: {
        // note that you're passing the function itself, and not the value 'getProducts()'
        allProducts: getProducts
      }
    }
  }
</script>
