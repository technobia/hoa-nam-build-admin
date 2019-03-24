<template>
  <div class='row'>
    <div class='col-lg-3'>
      <uploader v-on:after-uploaded='onAfterUploaded'></uploader>
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
                <td class="td-actions d-flex">
                  <button type="button" rel="tooltip" data-placement="left" title="Remove item" class="btn btn-link" @click='onClickDelete(item)'>
                    <i class="material-icons">close</i>
                  </button>
                  <button class='btn btn-link' @click='copyToClipboard(item.url)' title='Copy to clipboard'>
                    <i class='material-icons'>file_copy</i>
                  </button>
                </td>
                <td>
                  <div class="img-container">
                    <img :src='item.url' alt="...">
                  </div>
                </td>
                <td>{{item.name}}</td>
                <td>{{item.url}}</td>
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
    onClickDelete(item) {
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
      }).then((willDelete) => {
        if (willDelete.dismiss === 'cancel') {
          swal({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            type: 'error',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false,
          }).catch(swal.noop);
        } else {
          this.$store.dispatch('deleteImage', { fullpath: item.name, id: item.id });
          swal({
            title: 'Deleted!',
            text: 'Your imaginary file has been deleted.',
            type: 'success',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false,
          }).then(() => {
            this.onRefresh();
          }).catch(swal.noop);
        }
      });
    },
    onAfterUploaded() {
      this.onRefresh();
    },
    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
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
