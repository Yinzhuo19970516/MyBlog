// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Routes from './routes'
import VueRouter from 'vue-router'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './directives'
import './components'
import store from './store'



Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令
Vue.directive("rainbow",{
  bind(el,binding){
    el.style.color = "#"+ Math.random().toString(16).slice(2,8);
  }
})

//自定义过滤器  全局
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})

Vue.filter("snippet",function(value){
  return value.slice(0,100)+"......";
})

//创建路由

const router = new VueRouter({
	routes: Routes,
	mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})