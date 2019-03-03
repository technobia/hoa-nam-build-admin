<template>
  <div>
    <div class="fileinput fileinput-new text-center" data-provides="fileinput">
      <div class="fileinput-new thumbnail">
        <img src="../assets/img/image_placeholder.jpg" alt="...">
      </div>
      <div class="fileinput-preview fileinput-exists thumbnail"></div>
      <div>
        <span class="btn btn-rose btn-round btn-file" :class='{ disabled: loading }'>
          <span class="fileinput-new">Select image</span>
          <span class="fileinput-exists">Change</span>
          <input type="file" name="..." ref='file' />
        </span>
        <a href="#pablo" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput" ref='btnRemove' :class='{ disabled: loading }'>
          <i class="fa fa-times"></i> Remove
        </a>
        <button class='btn btn-success btn-round fileinput-exists' @click='onUploadImage' :disabled='loading'>
          <span v-if='!loading'><i class='fa fa-plus'></i> Add</span>
          <span class='spinner-border spinner-border-sm' v-if='loading'></span>
        </button>
      </div>
      <div v-if='uploadSuccess' class='text-center'>
        <span class='small text-success'><strong>Upload successfully!</strong></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Uploader',
  data() {
    return {
      file: [],
    };
  },
  computed: {
    loading() {
      return this.$store.state.images.uploading;
    },
    uploadSuccess() {
      return this.$store.state.images.uploadSuccess;
    },
  },
  watch: {
    uploadSuccess(val, oldVal) {
      if (val && !oldVal) {
        this.file = [];
        this.$refs.btnRemove.click();
        this.$emit('after-uploaded');
      }
    },
  },
  methods: {
    onUploadImage() {
      const file = this.$refs.file.files[0];
      this.$store.dispatch('upload', {
        file,
        name: file.name,
      });
    },
  },
};
</script>
