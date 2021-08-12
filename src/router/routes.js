import Vue from 'vue'
import VueRouter from 'vue-router'

import PanelComponent from "../views/pages/Panel.vue";
import StandardComponentContainer from '../views/pages/partials/containers/standard.vue';
import LoginComponent from '../views/pages/auth/Login.vue';
import HomeComponent from "../views/pages/home/Home.vue";



Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/admin/home'},

  {
    path: '/auth/login',
    name: 'auth.login',
    component: LoginComponent
  },

  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/home',
    component: PanelComponent,
    children: [
      {path: '/', redirect: '/admin/'},
      {
        path: '',
        component: StandardComponentContainer,
        children: [
            {
              path: '/home',
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

export default router
