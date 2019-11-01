// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'font-awesome/css/font-awesome.min.css'

import "@/assets/css/googlefonts.css";
import "babel-polyfill";

import Vue from 'vue'

import Vuex from 'vuex';
Vue.use(Vuex);
import store from '@/store';
store.install(Vuex);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import App from './App'
import VCharts from 'v-charts'
Vue.use(VCharts)
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

// import echarts from 'echarts';
// Vue.prototype.$echarts = echarts 

// import Vuetree from 'vue-simple-tree'
// Vue.use(Vuetree)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
