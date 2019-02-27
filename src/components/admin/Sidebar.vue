<template>
  <div class='sidebar' data-color='primary' data-background-color='black'>
    <div class='sidebar-wrapper'>
      <ul class='nav'>
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
import { logout } from '@/services/apiGateway';

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
    background-image: url('../../assets/admin/img/sidebar-1.jpg');
  }
}
</style>
