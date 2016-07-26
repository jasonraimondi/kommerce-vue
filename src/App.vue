<template>
  <article>

    <top-bar></top-bar>

    <div class="lk-wrapper">
      <side-bar></side-bar>

      <section class="lk-content">
        <router-view></router-view>
      </section>
    </div>

  </article>
</template>

<script>
  import SideBar from './components/SideBar.vue'
  import TopBar from './components/TopBar.vue'
  import store from './vuex/store.js'

  export default {
    store,
    name: 'Base',
    components: {
      SideBar, TopBar
    }
  }
</script>
