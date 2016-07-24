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
  import SideBar from './components/sidebar.vue';
  import TopBar from './components/topbar.vue';

  export default {
    components: {
      SideBar, TopBar
    }
  };
</script>