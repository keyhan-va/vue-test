import Vue from 'vue'
import VueRouter from 'vue-router'

import PanelComponent from "../views/pages/Panel.vue";
import StandardComponentContainer from '../views/pages/partials/containers/standard.vue';
import LoginComponent from '../views/pages/auth/Login.vue';
import HomeComponent from "../views/pages/home/Home.vue";

import store from '../state/store'
import guest from './middleware/guest';
import auth from './middleware/auth';
import middlewarePipeline from './middlewarePipeline';


Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/admin/home'},

  {
    path: '/auth/login',
    name: 'auth.login',
    component: LoginComponent
  },

  {
    path: '/admin/',
    name: 'admin.index',
    redirect: '/admin/home/',
    component: PanelComponent,
    children: [
      {path: '/', redirect: '/admin/home'},
      {
        path: '',
        component: StandardComponentContainer,
        children: [
            {
              path: 'home',
              name: 'home',
              component: HomeComponent
            }
        ]
      },

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  return new Promise(async (resolve) => {
    if ((to.meta.routePermission && !store.state.auth.account.is_superAdmin)) {
      let itemsProcessed = 0;
      let show = false;
      const permissions = store.state.permission.permissions;
      permissions.forEach(function (item) {
        show = show || permissions.includes(item);
        itemsProcessed++;
        if (itemsProcessed === permissions.length && !show ) {
          return next(from);
         }
      })
    }
    resolve();
  }).then(() => {
    if (to.path.substring(0, 7) === "/admin/") {
      to.meta.middleware = [auth];
    }
    if (to.path.substring(0, 6) === "/auth/") {
      to.meta.middleware = [guest];
    }
    if (!to.meta.middleware) {
      return next()
    }
    const middleware = to.meta.middleware
    const context = {to,from,next,store}
    return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
    })
  });
})

export default router
