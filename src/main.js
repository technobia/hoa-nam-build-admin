import Vue from 'vue';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import App from './App.vue';
import router from './router';
import store from './store';
import './connectDb';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

let app = null;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
