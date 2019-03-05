<template>
  <b-modal id='banner-form-modal' title='Adding banner item' ref='bannerFormModal' @shown='shown'>
    <form method="#" action="#">
      <div class="form-group">
        <label>Heading</label>
        <input type="text" class="form-control" v-model='data.heading'>
      </div>
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model='data.title'>
      </div>
      <div class="form-group">
        <label>Image URL</label>
        <input type="text" class="form-control" v-model='data.img'>
      </div>
    </form>
    <div slot='modal-footer'>
      <button class='btn btn-link btn-danger' @click='hideModal'>Cancel</button>&nbsp;
      <button class='btn btn-success' @click='onSave'>Save</button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'BannerFormModal',
  props: {
    modalName: String,
  },
  data() {
    return {
      data: {
        heading: '',
        title: '',
        img: '',
      },
    };
  },
  methods: {
    hideModal() {
      this.$root.$emit('bv::hide::modal', this.modalName);
    },
    onSave() {
      this.hideModal();
      this.$emit('on-submit', this.data);
    },
    shown() {
      this.data = {
        heading: '',
        title: '',
        img: '',
      };
    },
  },
};
</script>
