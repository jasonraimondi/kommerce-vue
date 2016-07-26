<template>
  <div>
    <!-- the input field -->
    <input type="text"
           class="lk-typeahead-form"
           placeholder="Search For Product"
           autocomplete="off"
           v-model="query"
           @keydown.down="down"
           @keydown.up="up"
           @keydown.enter="hit"
           @keydown.esc="reset"
           @input="update"/>

    <!-- the list -->
    <ul v-show="hasItems" class="lk-typeahead-results">
      <li v-for="item in items" :class="activeClass($index)" v-link="{ name: 'product.show', params: {id: item.id} }">
        <a>{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import VueTypeahead from 'vue-typeahead'

  export default {

    extends: VueTypeahead,

    data () {
      return {
        src: '//larakommerce.app/api/products',
        limit: 15,
        minChars: 3,
        queryParamName: 'q'
      }
    },

    methods: {

      goToPage (item) {
        this.$router.go({name: 'product.show', params: {id: item.id}})
      },

      onHit (item) {
        console.log(item)
      }
    }
  }
</script>

<style lang="scss">
  .lk-typeahead-form {
    margin: 0;
  }

  .lk-typeahead-results {
    width: 100%;
    background-color: white;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #e6e6e6;

    li {
      margin: 0;
      padding: 0;
      color: inherit;

      &:hover {
        background-color: #e6e6e6;
      }
    }
  }
</style>
