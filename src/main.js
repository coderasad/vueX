import Vue from 'vue'
import "bootstrap";
import '../src/sass/app.scss'
import App from './App.vue'
import router from './router'
import store from './store'
const moment = require('moment');


window.axios = require('axios');

Vue.config.productionTip = false

Vue.filter('diffForHumans', function (value) {
  if (!value){
    return ''
  }
  return moment(value).fromNow();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
