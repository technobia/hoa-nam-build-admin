import Vue from 'vue';
import Router from 'vue-router';
import { auth } from '@/connectDb';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
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
        {
          path: '/images',
          name: 'ImagesManage',
          component: () => import('./views/ImagesManage'),
        },
        {
          path: '/projects',
          name: 'Projects',
          component: () => import('./views/Projects'),
        },
        {
          path: '/banners',
          name: 'Banners',
          component: () => import('./views/Banners'),
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
  if (to.matched.some(record => record.meta.requireAuth)) {
    const currentUser = auth.currentUser;
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
