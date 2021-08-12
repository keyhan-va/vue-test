import Vue from 'vue'
import router from './router'
import store from './store'

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
