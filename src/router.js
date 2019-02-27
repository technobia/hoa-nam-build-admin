import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase/app';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { requireAuth: true },
      component: () => import('./views/Admin'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authentication)) {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
