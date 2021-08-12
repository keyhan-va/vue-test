import Vue from "vue";

import './views/assets/styles/app.scss';
import Form from "./core/Form";
import ajax from './core/Ajax';

import DisableAutocomplete from 'vue-disable-autocomplete';
Vue.use(DisableAutocomplete);


Vue.component('Form', require('./core/Form').default);
Vue.component('Button', require('./views/components/form/Button').default);


window.axios = ajax;
window.Form = Form;