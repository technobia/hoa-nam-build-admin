<template>
  <div>
    <div class="card mt-0">
      <div class="card-body">
        <div class='row'>
          <div class='col-sm-6'>
            <div class="form-group" :class='{ "is-filled": data.call_for_action_text }'>
              <label class="bmd-label-floating">Call for actions</label>
              <input type="text"
                     class="form-control"
                     :value='data.call_for_action_text'
                     @input='e => updateField("call_for_action_text", e.target.value)'/>
            </div>
          </div>
          <div class='col-sm-6'>
            <div class="form-group" :class='{ "is-filled": data.call_for_action_button }'>
              <label class="bmd-label-floating">Call for actions button</label>
              <input type="text"
                     class="form-control"
                     :value='data.call_for_action_button'
                     @input='e => updateField("call_for_action_button", e.target.value)'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='card'>
      <div class='card-body'>
        <div class='row'>
          <div class='col-sm-6'>
            <div class="form-group" :class='{ "is-filled": data.our_services_text }'>
              <label class="bmd-label-floating">Our services text</label>
              <input type="text"
                     class="form-control"
                     :value='data.our_services_text'
                     @input='e => updateField("our_services_text", e.target.value)'/>
            </div>
          </div>
          <div class='col-sm-6'>
            <div class="form-group" :class='{ "is-filled": data.our_services_button }'>
              <label class="bmd-label-floating">Our services button</label>
              <input type="text"
                     class="form-control"
                     :value='data.our_services_button'
                     @input='e => updateField("our_services_button", e.target.value)'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='card'>
      <div class='card-body'>
        <div class='row'>
          <div class='col-sm-6'>
            <div class="form-group" :class='{ "is-filled": data.about_us_title }'>
              <label class="bmd-label-floating">About us text</label>
              <input type="text"
                     class="form-control"
                     :value='data.about_us_title'
                     @input='e => updateField("about_us_title", e.target.value)'/>
            </div>
          </div>
          <div class='col-sm-6'>
            <div class="form-group" :class='{ "is-filled": data.about_us_readmore_button }'>
              <label class="bmd-label-floating">About us button</label>
              <input type="text"
                     class="form-control"
                     :value='data.about_us_readmore_button'
                     @input='e => updateField("about_us_readmore_button", e.target.value)'/>
            </div>
          </div>
          <div class='col-sm-12'>
            <div class="form-group" :class='{ "is-filled": data.about_us_info }'>
              <label class="bmd-label-floating">About us info</label>
              <input type="text"
                     class="form-control"
                     :value='data.about_us_info'
                     @input='e => updateField("about_us_info", e.target.value)'/>
            </div>
          </div>
          <div class='col-sm-12'>
            <div class="form-group" :class='{ "is-filled": data.about_us_suggest }'>
              <label class="bmd-label-floating">About us suggest</label>
              <input type="text"
                     class="form-control"
                     :value='data.about_us_suggest'
                     @input='e => updateField("about_us_suggest", e.target.value)'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='card'>
      <div class='card-body'>
        <div class='row'>
          <div class='col-sm-12'>
            <div class="form-group" :class='{ "is-filled": data.slogan }'>
              <label class="bmd-label-floating">Slogan</label>
              <input type="text"
                     class="form-control"
                     :value='data.slogan'
                     @input='e => updateField("slogan", e.target.value)'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='card'>
      <div class='card-body'>
        <div class='row'>
          <div class='col-sm-12'>
            <div class="form-group" :class='{ "is-filled": data.footer_about_us }'>
              <label class="bmd-label-floating">Footer about us</label>
              <input type="text"
                     class="form-control"
                     :value='data.footer_about_us'
                     @input='e => updateField("footer_about_us", e.target.value)'/>
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
export default {
  name: 'Homepage',
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
