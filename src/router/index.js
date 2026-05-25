import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'albums',
      component: () => import('@/views/AlbumsView.vue'),
    },
    {
      path: '/albums/:id',
      name: 'album-detail',
      component: () => import('@/views/AlbumDetailView.vue'),
      props: true,
    },
  ],
})

export default router
