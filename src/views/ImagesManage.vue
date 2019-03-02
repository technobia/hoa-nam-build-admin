<template>
  <div class='row'>
    <div class='col-lg-3'>
      <uploader></uploader>
    </div>
    <div class='col-lg-9'>
      <div class='text-center py-5' v-if='loading'>
        <span class='spinner-border spinner-border-lg text-primary'></span>
      </div>

      <div class="card mt-0" v-if='!loading'>
        <div class="card-body">
          <button class='btn btn-primary btn-round m-0' @click='onRefresh'><i class='fa fa-refresh'></i>&nbsp;&nbsp;Refresh list</button>
          <hr>
          <div class="table-responsive">
            <table class="table table-shopping">
              <tbody>
              <tr v-for='(item, index) in collections' :key='index'>
                <td>
                  <div class="img-container">
                    <img :src='item.url' alt="...">
                  </div>
                </td>
                <td>{{item.name}}</td>
                <td>{{item.url}}</td>
                <td class="td-actions">
                  <button type="button" rel="tooltip" data-placement="left" title="Remove item" class="btn btn-link">
                    <i class="material-icons">close</i>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagesManage',
  data() {
    return {
      img: null,
    };
  },
  computed: {
    loading() {
      return this.$store.state.images.loading;
    },
    collections() {
      return this.$store.state.images.collections;
    },
  },
  components: {
    uploader: () => import('@/components/Uploader'),
  },
  methods: {
    onRefresh() {
      this.$store.dispatch('getImages');
    },
  },
  mounted() {
    this.$store.dispatch('getImages');
    this.$store.commit('setUploadSuccess', false);
  },
};
</script>

<style>
.table-shopping .img-container {
  width: auto;
  text-align: center;
}
.table-shopping .img-container img {
  height: 75px;
  width: auto;
}
</style>
