/* 创建组件构造器  */
var Home = Vue.extend({
    template: '#home'
});

var About = Vue.extend({
    template: '#about'
});

/* 创建路由器  */
var router = new VueRouter();

/* 创建路由映射  <===>  全局注册  */
router.map({
    '/home': {
        component: Home
    },
    '/about': {
        component: About
    }
});
/* 设置默认页面 */
router.redirect({
    '/': '/home'
});

/* 启动路由  */
var App = Vue.extend({});
router.start(App, '#app');

