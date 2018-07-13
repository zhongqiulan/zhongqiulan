// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n/i18n'
// import Vuex from 'vuex'
import store from './store'
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
/* eslint-disable*/
new Vue({
  el: '#app',
  store,//store对象
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
