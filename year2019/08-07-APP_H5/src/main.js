// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api/api.js'
import http from './api/http.js'
import components from './api/components.js'
Vue.use(components)//全局注册组件
import './assets/css/overall.css'//公共样式
Vue.prototype.$api = api//全局注册api
Vue.prototype.$http = http//全局注册axios请求
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
