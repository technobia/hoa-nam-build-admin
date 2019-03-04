<template>
  <div>
    <button class='btn btn-round btn-success' @click='onOpenModal'><i class='fa fa-plus mr-2'></i>Add new</button>
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
              <th>Description</th>
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
              <td>{{item.description}}</td>
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

    <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <i class="material-icons">clear</i>
            </button>
          </div>
          <div class="modal-body">
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
              <label>Description</label>
              <textarea type="text"
                        class="form-control"
                        rows='5'
                        :value='modalData.description'
                        @input='e => updateField("description", e.target.value)'></textarea>
            </div>
            <div class="form-group bmd-form-group is-filled">
              <label>Image URL</label>
              <input type="text"
                     class="form-control"
                     :value='modalData.img'
                     @input='e => updateField("img", e.target.value)' />
            </div>
          </div>
          <div class="modal-footer">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'Projects',
  data() {
    return {
      modalData: {},
      modalError: '',
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
    updateField(field, value) {
      this.modalData[field] = value;
    },
    onOpenModal(data) {
      this.formModal.modal('show');
      this.modalError = '';
      if (data) {
        this.modalData = cloneDeep(data);
      }
    },
    onCloseModal() {
      this.formModal.modal('hide');
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
  },
  mounted() {
    this.$store.dispatch('getProjects');
    this.formModal = $('#formModal');
  },
};
</script>
