/**
 * Created by robin on 2017/10/1.
 */
//1、创建组件构造器
var MyComponent = Vue.extend({
    template: '<p>this is a component</p>'
});
//2、全局注册
Vue.component('my-component',MyComponent);

//1,2、注册+定义
Vue.component('my-simple-component',{
    template: '<p>this is a simple component</p>'
});

//3、组件关联
var vm = new Vue({
    el: '#app'
});
