<template>
  <div class='sidebar' data-color='primary' data-background-color='black'>
    <div class='sidebar-wrapper'>
      <ul class='nav'>
        <li class="nav-item">
          <router-link class="nav-link" to="/homepage">
            <i class="material-icons">dashboard</i>
            <p>Trang chủ</p>
          </router-link>
        </li>
        <li class="nav-item">
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
