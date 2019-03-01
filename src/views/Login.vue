<template>
  <div class="off-canvas-sidebar">
    <div class="wrapper wrapper-full-page">
      <div class="page-header login-page header-filter" filter-color="black">
        <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
              <form class="form" @submit='onSubmit'>
                <div class="card card-login">
                  <div class="card-header card-header-rose text-center">
                    <h4 class="card-title">Login</h4>
                  </div>
                  <div class="card-body ">
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">face</i>
                          </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username..." required v-model='username'>
                      </div>
                    </span>
                    <span class="bmd-form-group">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">lock_outline</i>
                          </span>
                        </div>
                        <input type="password" class="form-control" placeholder="Password..." required v-model='password'>
                      </div>
                    </span>
                  </div>
                  <div class="card-footer justify-content-center">
                    <button type='submit' class="btn btn-rose btn-link btn-lg" :disabled='loading'>
                      Lets Go <span class='spinner-border spinner-border-sm' v-if='loading'></span>
                    </button>
                  </div>
                </div>
              </form>
              <div class='alert alert-danger' v-if='error'>{{error}}</div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <div class="copyright float-right">
              &copy; {{year}}, made with <i class="material-icons">favorite</i> by
              <a href="https://crystsoft.asia" target="_blank">Crystsoft Asia</a> for a better web.
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/services/auth';

export default {
  name: 'Login',
  data() {
    return {
      year: new Date().getFullYear(),
      username: '',
      password: '',
      error: null,
      loading: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.loading = true;
      login(this.username, this.password)
        .then(() => {
          this.loading = false;
          this.$router.push('/homepage');
        })
        .catch((error) => {
          this.loading = false;
          this.error = error.message;
        });
    },
  },
};
</script>

<style lang='scss' scoped>
.login-page {
  background-image: url('../assets/img/login.jpg'); background-size: cover; background-position: top center;
}
</style>
