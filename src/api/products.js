import { ProductResource } from './resources.js'

export default {
  getProducts () {
    return ProductResource.get()
  }
}
