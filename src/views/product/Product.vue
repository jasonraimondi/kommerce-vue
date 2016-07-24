<template>
  <article>
    <product-search></product-search>
    <router-view></router-view>
  </article>
</template>

<script>
  import Breadcrumbs from '../layout/components/breadcrumbs.vue'
  import ProductSearch from '../layout/components/search.vue'

  export default{
    components: {
      ProductSearch,
      Breadcrumbs
    }
  }
</script>
