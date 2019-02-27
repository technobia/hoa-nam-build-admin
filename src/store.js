import Vue from 'vue';
import Vuex from 'vuex';
import admin from './store/admin';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
  },
  strict: process.env.NODE_ENV !== 'production',
});
