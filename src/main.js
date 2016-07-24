import './sass/app.scss';

import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router.js';
import store from './vuex/store.js';
import { sync } from 'vuex-router-sync';

Vue.use(VueResource);

sync(store, router);

router.start(App, '#lk-app');
