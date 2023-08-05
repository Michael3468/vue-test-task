import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/price',
      name: 'price',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
    {
      path: '/halls',
      name: 'halls',
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/DummyView.vue'), // TODO: change
    },
  ],
});

export default router;
