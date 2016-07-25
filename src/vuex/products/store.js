import shop from '../../api/products.js'

import { RECEIVE_PRODUCTS } from '../mutation-types.js'

export const getAllProducts = ({ dispatch }) => {
  shop.getProducts(products => {
    dispatch(RECEIVE_PRODUCTS, products)
  })
}
