import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueResource from 'vue-resource';
import { apiHost } from '../config.js';


Vue.use(BootstrapVue);

Vue.use(VueResource);
// API main root
Vue.http.options.root = apiHost;

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
