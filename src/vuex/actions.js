// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// we can pull those two parameters using the ES6 destructuring feature

export const fetchProduct = function ({ dispatch, state }) {
  dispatch('FETCH_PRODUCT_LIST', 1)
}
