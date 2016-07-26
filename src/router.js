import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardPage from './pages/dashboard/index.vue'
import ProductPage from './pages/ProductPage.vue'
import ProductList from './pages/product/list.vue'
import ProductShow from './pages/product/show.vue'
import ProductEdit from './pages/product/edit.vue'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  '/dashboard': {
    name: 'dashboard',
    component: DashboardPage
  },
  '/product': {
    name: 'product',
    component: ProductPage,
    subRoutes: {
      '/': {
        name: 'product.list',
        component: ProductList
      },
      '/:id': {
        name: 'product.show',
        component: ProductShow
      },
      '/:id/edit': {
        name: 'product.edit',
        component: ProductEdit
      }
    }
  }
})

router.alias({
  '': '/dashboard'
})

export default router
