<template>
  <article>
    <product-search></product-search>
    <router-view></router-view>
  </article>
</template>

<script>
  import ProductSearch from '../layout/components/search.vue';

  export default {
    components: {
      ProductSearch
    }
  };
</script>
