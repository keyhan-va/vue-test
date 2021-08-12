import Vue from "vue";

import './views/assets/styles/app.scss';
import DisableAutocomplete from 'vue-disable-autocomplete';
Vue.use(DisableAutocomplete);



Vue.component('Button', require('./views/components/form/Button').default);