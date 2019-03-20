<template>
  <div>
    <div class="card mt-0">
      <div class="card-header card-header-tabs card-header-rose">
        <div class="nav-tabs-navigation">
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs" data-tabs="tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#homepage" data-toggle="tab">
                  Trang chủ <div class="ripple-container"></div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutUs" data-toggle="tab">
                  Giới thiệu <div class="ripple-container"></div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services" data-toggle="tab">
                  Dịch vụ <div class="ripple-container"></div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" data-toggle="tab">
                  Liên hệ <div class="ripple-container"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane active" id="homepage">
            <div class='row'>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.call_for_action_text }'>
                  <label class="bmd-label-floating">Call for actions</label>
                  <input type="text"
                         class="form-control"
                         :value='data.call_for_action_text'
                         @input='e => updateField("call_for_action_text", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.call_for_action_button }'>
                  <label class="bmd-label-floating">Call for actions button</label>
                  <input type="text"
                         class="form-control"
                         :value='data.call_for_action_button'
                         @input='e => updateField("call_for_action_button", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.our_services_text }'>
                  <label class="bmd-label-floating">Our services text</label>
                  <input type="text"
                         class="form-control"
                         :value='data.our_services_text'
                         @input='e => updateField("our_services_text", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.our_services_info }'>
                  <label class="bmd-label-floating">Our services info</label>
                  <input type="text"
                         class="form-control"
                         :value='data.our_services_info'
                         @input='e => updateField("our_services_info", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.home_latest_projects }'>
                  <label class="bmd-label-floating">Home latest projects</label>
                  <input type="text"
                         class="form-control"
                         :value='data.home_latest_projects'
                         @input='e => updateField("home_latest_projects", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.about_us_title }'>
                  <label class="bmd-label-floating">About us text</label>
                  <input type="text"
                         class="form-control"
                         :value='data.about_us_title'
                         @input='e => updateField("about_us_title", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.about_us_readmore_button }'>
                  <label class="bmd-label-floating">About us button</label>
                  <input type="text"
                         class="form-control"
                         :value='data.about_us_readmore_button'
                         @input='e => updateField("about_us_readmore_button", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.about_us_info }'>
                  <label class="bmd-label-floating">About us info</label>
                  <input type="text"
                         class="form-control"
                         :value='data.about_us_info'
                         @input='e => updateField("about_us_info", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.about_us_suggest }'>
                  <label class="bmd-label-floating">About us suggest</label>
                  <input type="text"
                         class="form-control"
                         :value='data.about_us_suggest'
                         @input='e => updateField("about_us_suggest", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.slogan }'>
                  <label class="bmd-label-floating">Slogan</label>
                  <input type="text"
                         class="form-control"
                         :value='data.slogan'
                         @input='e => updateField("slogan", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.footer_about_us }'>
                  <label class="bmd-label-floating">Footer about us</label>
                  <input type="text"
                         class="form-control"
                         :value='data.footer_about_us'
                         @input='e => updateField("footer_about_us", e.target.value)'/>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="aboutUs">
            <div class='row'>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.about_us_heading }'>
                  <label class="bmd-label-floating">About us heading</label>
                  <input type="text"
                         class="form-control"
                         :value='data.about_us_heading'
                         @input='e => updateField("about_us_heading", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group is-filled">
                  <label class="bmd-label-floating">About us part 1</label>
                  <ckeditor :editor="editor.type"
                            :value='data.about_us_part_1 || ""'
                            :config='editor.config'
                            @input='value => updateField("about_us_part_1", value)'></ckeditor>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group is-filled">
                  <label class="bmd-label-floating">About us part 2</label>
                  <ckeditor :editor="editor.type"
                            :value='data.about_us_part_2 || ""'
                            :config='editor.config'
                            @input='value => updateField("about_us_part_2", value)'></ckeditor>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="services">
            <div class='row'>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.service_heading }'>
                  <label class="bmd-label-floating">Service heading</label>
                  <input type="text"
                         class="form-control"
                         :value='data.service_heading'
                         @input='e => updateField("service_heading", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-12'>
                <div class="form-group bmd-form-group is-filled">
                  <label class="bmd-label-floating">Service body</label>
                  <ckeditor :editor="editor.type"
                            :value='data.service_body || ""'
                            :config='editor.config'
                            @input='value => updateField("service_body", value)'></ckeditor>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="contact">
            <div class='row'>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.contact_us_heading }'>
                  <label class="bmd-label-floating">Contact us heading</label>
                  <input type="text"
                         class="form-control"
                         :value='data.contact_us_heading'
                         @input='e => updateField("contact_us_heading", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.contact_us_address }'>
                  <label class="bmd-label-floating">Address</label>
                  <input type="text"
                         class="form-control"
                         :value='data.contact_us_address'
                         @input='e => updateField("contact_us_address", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.contact_us_phone }'>
                  <label class="bmd-label-floating">Phone</label>
                  <input type="text"
                         class="form-control"
                         :value='data.contact_us_phone'
                         @input='e => updateField("contact_us_phone", e.target.value)'/>
                </div>
              </div>
              <div class='col-sm-6'>
                <div class="form-group bmd-form-group" :class='{ "is-filled": data.contact_us_email }'>
                  <label class="bmd-label-floating">Email</label>
                  <input type="text"
                         class="form-control"
                         :value='data.contact_us_email'
                         @input='e => updateField("contact_us_email", e.target.value)'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <button type="submit" class="btn btn-fill btn-rose" @click='onSave' :disabled='loading'>
          Save <span class='spinner-border spinner-border-sm' v-if='loading'></span>
        </button>
        <span class='label text-success small ml-3' v-if='updated'><strong>Updated successfully!</strong></span>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'Homepage',
  data() {
    return {
      editor: {
        type: ClassicEditor,
        config: {
          toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        },
      },
    };
  },
  computed: {
    data() {
      return this.$store.state.admin.homepage;
    },
    loading() {
      return this.$store.state.admin.homepageLoading;
    },
    updated() {
      return this.$store.state.admin.homepageUpdated;
    },
  },
  methods: {
    updateField(path, text) {
      this.$store.commit('updateHomepageField', { path, text });
    },
    onSave() {
      this.$store.dispatch('setHomepage');
    },
  },
  mounted() {
    this.$store.dispatch('getHomepage');
  },
};
</script>

<style>
.card .card-body .bmd-form-group {
  margin-top: 20px;
}

.ck-editor__editable {
  min-height: 250px;
}
</style>
