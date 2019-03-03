<template>
  <div class="wrapper">
    <side-bar></side-bar>
    <div class='main-panel'>
      <nav-bar></nav-bar>
      <div class='content'>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);

export default {
  name: 'Admin',
  methods: {

  },
  components: {
    sideBar: () => import('@/components/Sidebar'),
    navBar: () => import('@/components/Navbar'),
  },
  mounted() {
    Vue.loadScript('/js/popper.min.js')
      .then(() => {
        Vue.loadScript('/js/bootstrap-material-design.min.js')
          .then(() => {
            Vue.loadScript('/js/material-dashboard.min.js');
            Vue.loadScript('/js/jasny-bootstrap.min.js');
            Vue.loadScript('/js/sweetalert2.js');
          });
      });
  },
};
</script>

<style lang='scss'>
.main-panel {
  min-height: 100%;
}
</style>
