<template>

  <article>

    <h1>{{ counterValue }}</h1>

    <div class="row lk-list-product-header hide-for-small-only">
      <div class="medium-2 columns" v-for="(name, showTitle) in show" v-if="showTitle">
        <span class="lk-list-product-title">{{ name }}</span>
      </div>
    </div>

    <a class="lk-list-product-link" v-for="product in products" v-link="{ name: 'product.show', params: { id: product.id }}">
      <div class="row">
        <div class="medium-2 columns" v-for="(name, showTitle) in show" v-if="showTitle">
          <span class="lk-list-product-title show-for-small-only">{{ name }}</span>
          <span>{{ product[name] }}</span>
        </div>
      </div>
    </a>
  </article>

</template>

<script>
  export default {

    name: 'ProductList',

    data () {
      return {
        products: [],
        show: {
          'name': true,
          'quantity': true,
          'unitPrice': false,
          'isInventoryRequired': false,
          'isPriceVisible': true,
          'isActive': false,
          'isVisible': false,
          'isTaxable': true,
          'isShippable': true,
          'areAttachmentsEnabled': false
        }
      }
    },

    methods: {
      fetch () {
        this.$resource('http://larakommerce.app/api/products').get().then(function (res) {
          this.products = res.data
        })
      }
    },

    route: {
      data () {
        this.fetch()
      }
    }

  }
</script>
