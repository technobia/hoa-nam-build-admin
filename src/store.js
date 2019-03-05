import Vue from 'vue';
import Vuex from 'vuex';
import admin from './store/admin';
import images from './store/images';
import projects from './store/projects';
import banner from './store/banner';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
    images,
    projects,
    banner,
  },
  strict: process.env.NODE_ENV !== 'production',
});
