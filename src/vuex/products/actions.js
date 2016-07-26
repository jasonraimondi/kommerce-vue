import products from '../../api/products.js'
import * as types from '../mutation-types.js'

export const getAllProducts = ({dispatch}) => {
  products.getProducts().then(response => {
    if (!response.ok) {
      return dispatch(types.RECEIVE_PRODUCTS)
    }
    dispatch(types.RECEIVE_PRODUCTS, {tagList: response.data})
  }, response => {
    dispatch(types.RECEIVE_PRODUCTS)
  })
}
