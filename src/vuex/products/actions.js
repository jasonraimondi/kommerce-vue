import shop from '../../api/products.js'
import * as types from '../mutation-types.js'

export const getAllProducts = ({ dispatch }) => {
  shop.getProducts(products => {
    dispatch(types.RECEIVE_PRODUCTS, products)
  })
}
