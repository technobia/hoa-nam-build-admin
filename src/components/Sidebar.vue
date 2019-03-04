<template>
  <div class='sidebar' data-color='rose' data-background-color='black'>
    <div class='sidebar-wrapper'>
      <ul class='nav'>
        <li class="nav-item" :class='{ active: getActiveLink("/homepage") }'>
          <router-link class="nav-link" to="/homepage">
            <i class="material-icons">dashboard</i>
            <p>Quản lý nội dung</p>
          </router-link>
        </li>
        <li class="nav-item" :class='{ active: getActiveLink("/projects") }'>
          <router-link class="nav-link" to="/projects">
            <i class="material-icons">list</i>
            <p>Dự án</p>
          </router-link>
        </li>
        <li class="nav-item" :class='{ active: getActiveLink("/images") }'>
          <router-link class="nav-link" to="/images">
            <i class="material-icons">images</i>
            <p>Hình ảnh</p>
          </router-link>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='javascript:void(0);' @click='onSignOut'>
            <i class='material-icons'>exit_to_app</i>
            <p>Logout</p>
          </a>
        </li>
      </ul>
    </div>
    <div class='sidebar-background'></div>
  </div>
</template>

<script>
import { logout } from '@/services/auth';

export default {
  name: 'Sidebar',
  methods: {
    onSignOut() {
      logout()
        .then(() => {
          this.$router.push('/login');
        });
    },
    getActiveLink(url) {
      return this.$route.fullPath === url;
    },
  },
};
</script>

<style lang='scss' scoped>
.sidebar {
  .sidebar-background {
    background-image: url('../assets/img/sidebar-1.jpg');
  }
}
</style>
