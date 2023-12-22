const routes = [
  {
    path: '/vin-car-decode/',
    name: 'home',
    redirect: {name: 'search'},
    component: () => import('../views/HomePage.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/vin-car-decode/search',
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
