import { createRouter, createWebHistory } from "vue-router";
import routes from './routes';

const router = createRouter({
  // base: '/vin-car-decode',
  history: createWebHistory('/vin-car-decode/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0, behavior: 'smooth' };
    }
  },
});


// router.beforeEach(async (to, from, next) => {
//   NProgress.start();
//   store.commit("TOGGLE_ASIDE", false);
//   if(to.meta?.title){
//     store.commit('setTitle', to.meta?.title)
//   }

//   if (to.name == 'dashboard') {
//     store.commit('setArea', 'user')
//   }
//   if (to.name == 'team-dashboard') {
//     store.commit('setArea', 'team')

//   }

//   // if (localStorage.getItem('api_token') && !store.getters.user?.id) {
//   //   await getUser()
//   // }

//   if (!to.meta.middleware) {
//     return next();
//   }
//   const middleware = to.meta.middleware;

//   const context = {
//     to,
//     from,
//     next,
//     store,
//   };
//   return middleware[0]({
//     ...context,
//     nextMiddleware: middlewarePipeline(context, middleware, 1),
//   });
// });

// router.afterEach((to, from) => {
//   NProgress.done();
//   if (userpilot){
//     userpilot.reload();
//   }
  
//   // useSeo(to)

//   // next()
// });

export default router;
