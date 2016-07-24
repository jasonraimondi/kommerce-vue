<template>

  <div class="lk-wrapper">
    <side-bar></side-bar>
    <section class="lk-content">
      <router-view></router-view>
    </section>
  </div>

</template>

<script>
  import store from '../../vuex/store.js'
  import SideBar from './components/sidebar.vue'

  export default{
    components: {
      SideBar
    },
    store
  }

</script>
