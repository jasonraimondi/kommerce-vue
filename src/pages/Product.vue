<template>
  <article>
    <p>The count is {{ counterValue }}</p>
    <product-search></product-search>
    <router-view></router-view>
  </article>
</template>

<script>
  import ProductSearch from '../components/ProductSearch.vue'

  export default {
    components: {
      ProductSearch
    }
  }
</script>
