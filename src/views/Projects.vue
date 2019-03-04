<template>
  <div>
    <button class='btn btn-round btn-success' @click='openForm = true'><i class='fa fa-plus mr-2'></i>Add new</button>
    <div class="card mt-1">
      <div class="card-body">
        <span class='spinner-border spinner-border-sm' v-if='loading'></span>
        <div class="table-responsive" v-if='!loading'>
          <table class="table">
            <thead>
            <tr>
              <th width='100px'>Preview</th>
              <th>Name</th>
              <th>Type</th>
              <th>Number of Images</th>
              <th class="text-right">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='item in collections' :key='item.id'>
              <td><img :src='item.img' style='max-height: 50px;'></td>
              <td>{{item.name}}</td>
              <td>
                <span class='badge badge-success' v-if='item.type === "success"'>Đã hoàn thành</span>
                <span class='badge badge-warning' v-if='item.type === "pending"'>Đang thi công</span>
              </td>
              <td>{{item.images.length || 0}}</td>
              <td class="td-actions text-right">
                <button type="button" rel="tooltip" class="btn btn-success btn-link" @click='onOpenModal(item)'>
                  <i class="material-icons">edit</i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-danger btn-link" @click='onDelete(item)'>
                  <i class="material-icons">close</i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <b-modal v-model='openForm' size='lg' hide-header>
      <div class="form-group bmd-form-group is-filled">
        <label>Project name</label>
        <input type="text"
               class="form-control"
               :value='modalData.name'
               @input='e => updateField("name", e.target.value)' />
      </div>
      <div class='form-group bmd-form-group is-filled'>
        <label>Type</label>
        <div class="checkbox-radios">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input"
                     type="radio"
                     name="type"
                     value="success"
                     :checked='modalData.type === "success"'
                     @change='e => updateField("type", e.target.value)'> Đã hoàn thành
              <span class="circle">
                      <span class="check"></span>
                    </span>
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input"
                     type="radio"
                     name="type"
                     value="pending"
                     :checked='modalData.type === "pending"'
                     @change='e => updateField("type", e.target.value)'> Đang xây dựng
              <span class="circle">
                      <span class="check"></span>
                    </span>
            </label>
          </div>
        </div>
      </div>
      <div class="form-group bmd-form-group is-filled">
        <label>Information</label>
        <ckeditor :editor="editor.type" v-model="modalData.info" :config='editor.config'></ckeditor>
      </div>
      <div class="form-group bmd-form-group is-filled">
        <label>Description</label>
        <ckeditor :editor="editor.type" v-model="modalData.description" :config='editor.config'></ckeditor>
      </div>
      <div class="form-group bmd-form-group is-filled">
        <label>Image URL</label>
        <input type="text"
               class="form-control"
               :value='modalData.img'
               @input='e => updateField("img", e.target.value)' />
      </div>
      <div><label><strong>Images slider</strong></label></div>
      <button class='btn btn-sm btn-success'
              @click='onAddImage'>
        Add Image
      </button>
      <div v-if='modalData.images !== "undefined"'>
        <div class='form-group'
             v-for='(img, imgIndex) in modalData.images'
             :key='imgIndex'>
          <label>Image URL #{{imgIndex + 1}}</label>
          <button class='btn btn-danger btn-sm ml-3' @click='onRemoveImage(imgIndex)'><fa class='fa fa-close'></fa></button>
          <input type="text"
                 class="form-control"
                 :value='img'
                 @input='e => updateField(`images.${imgIndex}`, e.target.value)' />
        </div>
      </div>
      <div slot="modal-footer">
        <span class='text-danger small' v-if='modalError'>{{modalError}}</span>
        <button type="button"
                class="btn btn-link btn-success"
                @click='onSaveModal'
                :disabled='adding'>
          Save
        </button>
        <button type="button"
                class="btn btn-danger btn-link"
                @click='onCloseModal'>
          Cancel
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'Projects',
  data() {
    return {
      openForm: false,
      modalData: {},
      modalError: '',
      editor: {
        type: ClassicEditor,
        config: {
          toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        },
      },
    };
  },
  computed: {
    collections() {
      return this.$store.state.projects.collections;
    },
    loading() {
      return this.$store.state.projects.loading;
    },
    adding() {
      return this.$store.state.projects.adding;
    },
  },
  methods: {
    updateField(path, value) {
      this.modalData = set(this.modalData, path, value);
    },
    onOpenModal(data) {
      this.openForm = true;
      this.modalError = '';
      if (data) {
        this.modalData = cloneDeep(data);
      } else {
        this.modalData = {};
      }
    },
    onCloseModal() {
      this.openForm = false;
      this.modalData = {};
    },
    onSaveModal() {
      if (this.validateForm()) {
        if (this.modalData.id) {
          this.$store.dispatch('updateProject', this.modalData);
        } else {
          this.$store.dispatch('addProject', this.modalData);
        }
        this.onCloseModal();
      } else {
        this.modalError = 'Please enter all the fields';
      }
    },
    validateForm() {
      return !['img', 'name', 'type', 'description'].some(key => !this.modalData[key]);
    },
    onDelete(data) {
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
          this.$store.dispatch('deleteProject', data.id);
          swal({
            title: 'Deleted!',
            text: 'Your imaginary file has been deleted.',
            type: 'success',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false,
          }).catch(swal.noop);
        }
      });
    },
    onAddImage() {
      const images = cloneDeep(this.modalData.images) || [];
      images.push('');
      this.$set(this.modalData, 'images', images);
    },
    onRemoveImage(index) {
      this.modalData.images.splice(index, 1);
    },
  },
  mounted() {
    this.$store.dispatch('getProjects');
    this.formModal = $('#formModal');
  },
};
</script>

<style>
.ck-editor__editable {
  min-height: 250px;
}
</style>
