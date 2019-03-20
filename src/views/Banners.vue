<template>
  <div class="page-categories">
    <ul class="nav nav-pills nav-pills-rose nav-pills-icons p-0">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home">
          Trang chủ
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#aboutUs">
          Giới thiệu
        </a>
      </li>
    </ul>
    <div v-if='loading' class='py-5 text-center'><span class='spinner-border spinner-border-lg text-rose'></span></div>
    <div class="tab-content tab-space tab-subcategories" v-if='!loading'>
      <div class="tab-pane active" id="home">
        <div class='row'>
          <div class='col-lg-6'>
            <div class='card'>
              <div class="card-header card-header-rose card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">image</i>
                </div>
                <h4 class="card-title">Banner trang chủ <span class='small text-success'>(1920px x 550px)</span></h4>
              </div>
              <div class='card-body'>
                <button class='btn btn-success' @click='showModal("banner-form-modal", "home-banner")'>
                  <i class='material-icons'>add</i>&nbsp;Add
                </button>
                <table class="table table-shopping">
                  <colgroup>
                    <col width='100px'>
                    <col>
                  </colgroup>
                  <tbody>
                  <tr v-for='item in homeBanners' :key='item.id'>
                    <td class='text-center'>
                      <div class="img-container">
                        <img :src='item.img' alt="...">
                      </div>
                    </td>
                    <td>{{item.heading}}</td>
                    <td>{{item.title}}</td>
                    <td>
                      <div class='d-flex justify-content-end'>
                        <button class="btn btn-link px-0" @click='onDeleteBanner(item)'>
                          <i class="material-icons">close</i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class='col-lg-6'>
            <div class='card'>
              <div class="card-header card-header-rose card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">image</i>
                </div>
                <h4 class="card-title">Đối tác <span class='small text-success'>(163px x 86px)</span></h4>
              </div>
              <div class='card-body'>
                <button class='btn btn-success' @click='showModal("banner-form-modal", "client")'>
                  <i class='material-icons'>add</i>&nbsp;Add
                </button>
                <table class="table table-shopping">
                  <colgroup>
                    <col width='100px'>
                    <col>
                  </colgroup>
                  <tbody>
                  <tr v-for='item in clientBanners' :key='item.id'>
                    <td class='text-center'>
                      <div class="img-container">
                        <img :src='item.img' alt="...">
                      </div>
                    </td>
                    <td>{{item.heading}}</td>
                    <td>{{item.title}}</td>
                    <td>
                      <div class='d-flex justify-content-end'>
                        <button class="btn btn-link px-0" @click='onDeleteBanner(item)'>
                          <i class="material-icons">close</i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="aboutUs">
        <div class='row'>
          <div class='col-lg-6'>
            <div class='card'>
              <div class="card-header card-header-rose card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">image</i>
                </div>
                <h4 class="card-title">Giới thiệu <span class='small text-success'>(750px x 320px)</span></h4>
              </div>
              <div class='card-body'>
                <button class='btn btn-success' @click='showModal("banner-form-modal", "about_us")'>
                  <i class='material-icons'>add</i>&nbsp;Add
                </button>
                <table class="table table-shopping">
                  <colgroup>
                    <col width='100px'>
                    <col>
                  </colgroup>
                  <tbody>
                  <tr v-for='item in aboutUsBanners' :key='item.id'>
                    <td class='text-center'>
                      <div class="img-container">
                        <img :src='item.img' alt="...">
                      </div>
                    </td>
                    <td>{{item.heading}}</td>
                    <td>{{item.title}}</td>
                    <td>
                      <div class='d-flex justify-content-end'>
                        <button class="btn btn-link px-0" @click='onDeleteBanner(item)'>
                          <i class="material-icons">close</i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <banner-form-modal modalName='banner-form-modal' v-on:on-submit='onSubmitModal' :data='modalData'></banner-form-modal>
  </div>
</template>

<script>
export default {
  name: 'Banners',
  components: {
    BannerFormModal: () => import('@/components/BannerFormModal'),
  },
  data() {
    return {
      modalType: '',
      modalData: null,
    };
  },
  computed: {
    loading() {
      return this.$store.state.banner.loading;
    },
    collections() {
      return this.$store.state.banner.collections;
    },
    homeBanners() {
      return this.collections.filter(o => o.type === 'home-banner');
    },
    clientBanners() {
      return this.collections.filter(o => o.type === 'client');
    },
    aboutUsBanners() {
      return this.collections.filter(o => o.type === 'about_us');
    },
  },
  methods: {
    showModal(modal, type) {
      this.modalType = type;
      this.$root.$emit('bv::show::modal', modal);
    },
    onSubmitModal(data) {
      this.$store.dispatch('saveBanner', { ...data, type: this.modalType });
    },
    onDeleteBanner(item) {
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this data!',
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
            text: 'Your data is safe :)',
            type: 'error',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false,
          }).catch(swal.noop);
        } else {
          this.$store.dispatch('deleteBanner', item.id);
          swal({
            title: 'Deleted!',
            text: 'Your imaginary file has been deleted.',
            type: 'success',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false,
          }).then(() => {
            this.$store.dispatch('getBannerData');
          }).catch(swal.noop);
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch('getBannerData');
  },
};
</script>
