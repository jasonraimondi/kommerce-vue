export default {

  getProducts (cb) {
    // var products
    //
    this.$resource('http://larakommerce.app/api/products').get().then(function (res) {
      products = res.data
    })
    //
    cb(products)
  }

}
