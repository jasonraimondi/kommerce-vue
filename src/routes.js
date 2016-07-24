import Vue from 'vue';
import VueRouter from 'vue-router';

import DashboardPage from './views/dashboard/index.vue';
import Product from './views/product/Product.vue';
import ProductList from './views/product/list.vue';
import ProductShow from './views/product/show.vue';
import ProductEdit from './views/product/edit.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  history: false
});

router.map({
  '/dashboard': {
    name: 'dashboard',
    component: Vue.component('DashboardPage', DashboardPage)
  },
  '/product': {
    name: 'product',
    component: Vue.component('Product', Product),
    subRoutes: {
      '/': {
        name: 'product.list',
        component: Vue.component('ProductList', ProductList)
      },
      '/:id': {
        name: 'product.show',
        component: Vue.component('ProductShow', ProductShow)
      },
      '/:id/edit': {
        name: 'product.edit',
        component: Vue.component('ProductEdit', ProductEdit)
      }
    }
  }
});

router.alias({
  '': '/dashboard'
});

export default router;
