import Vue from 'vue'
// Vue.js 插件
// 这里使用了 vue-router，先运行 npm install vue-router –save 进行安装 import VueRouter from 'vue-router'
// 组件
import Main from './components/Main.vue'
import Login from './components/Login.vue'
Vue.use(VueRouter)
var router = new VueRouter({ })
router.map({   '/': {
  name: 'main',
  component: Main  },
  '/login': {
    name: 'login',
    component: Login  }
})
var App = Vue.extend({
})
router.start(App, '#app')


