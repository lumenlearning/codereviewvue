import { createWebHistory, createRouter } from 'vue-router';

import Summary from '@/views/Summary.vue';

const routes = [
  {
    path: '/',
    name: 'Summary',
    component: Summary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
