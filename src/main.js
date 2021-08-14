import Vue from 'vue'
import router from './router/routes'
import store from './state/store'
require('./bootstrap');
import AuthRepository from "@/repositories/AuthRepository";

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  router,
  store,
  created() {
    this.setupPageTitle()
    this.prepareApplication()
    window.events.$on(
      'boot', () => this.prepareApplication(true)
    )
  },
  methods:{
    setupPageTitle() {
      document.title = 'Admin Panel'; /// add to i18n
    },
    prepareApplication(keepLoading = false) {
      if (AuthRepository.isLoggedIn()) {
          this.$store.dispatch('auth/getAccount').then(() => {
              this.appReady()
          }).catch(exception => {
              this.unAuthenticated();
          })
      } else {
          this.unAuthenticated();
      }
    },
    appReady() {
      this.$store.dispatch('app/boot').then(data => {
          AuthRepository.coordinateAuthPath();
      }).catch(e => {
          this.unAuthenticated();
      });
    },
    unAuthenticated() {
      AuthRepository.unAuthenticated();
      if (this.$route.path.substring(0, 6) !== "/auth/") {
          this.$router.push({
              path: '/auth/login'
          });
      }
    }
  }
}).$mount('#app')
