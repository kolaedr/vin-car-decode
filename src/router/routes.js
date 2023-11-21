const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchVin.vue'),
    meta: {
      title: 'Search'
    }
  },
  
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('../views/NotFound.vue'),
  //   meta: {
  //     title: 'Not Found'
  //   }
  // }
]

export default routes
