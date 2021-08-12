import Vue from 'vue'
import router from './router/routes'
import store from './store'
require('./bootstrap');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    this.setupPageTitle()
  },
  methods:{
    setupPageTitle() {
      document.title = 'Admin Panel'; /// add to i18n
    },
  }
}).$mount('#app')
