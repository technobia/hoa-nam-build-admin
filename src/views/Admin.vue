<template>
  <div id='administrator'>
    <h1>hello admin</h1>
    <button class='btn btn-sm btn-danger' @click='onSignOut'>Logout</button>
  </div>
</template>

<script>
import { logout } from '@/services/apiGateway';

export default {
  name: 'Admin',
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

<style lang='scss'>
@import '../assets/admin/material-dashboard.scss';
</style>
