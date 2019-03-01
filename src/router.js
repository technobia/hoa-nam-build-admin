import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase/app';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'admin',
      component: () => import('./views/Admin'),
      meta: { requireAuth: true },
      redirect: { path: '/homepage' },
      children: [
        {
          path: '/homepage',
          name: 'Homepage',
          component: () => import('./views/Homepage'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login'),
    },
    {
      path: '*',
      redirect: { path: '/' },
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
