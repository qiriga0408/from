import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'element-ui/lib/theme-chalk/index.css';
// import './ElementUI';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import './util/reset.css'

import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)

import axios from 'axios'
Vue.prototype.$axios = axios



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
