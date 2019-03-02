import Vue from 'vue';
import Vuex from 'vuex';
import admin from './store/admin';
import images from './store/images';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
    images,
  },
  strict: process.env.NODE_ENV !== 'production',
});
