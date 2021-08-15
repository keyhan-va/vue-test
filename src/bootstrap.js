import Vue from "vue";

import './views/assets/styles/app.scss';
import Form from "./core/Form";
import ajax from './core/Ajax';

import DisableAutocomplete from 'vue-disable-autocomplete';
Vue.use(DisableAutocomplete);


Vue.component('Form', require('./core/Form').default);
Vue.component('Button', require('./views/components/form/Button').default);
Vue.component('navigation', require('./views/components/navbar/navigation').default);
Vue.component('UserMenu', require('./views/components/navbar/UserMenu').default);
Vue.component('BaseMenu', require('./views/components/navbar/BaseMenu').default);

Vue.directive('click-outside', require('./views/directives/ClickOutside.js').default);


window.axios = ajax;
window.Form = Form;
window.events = new Vue();