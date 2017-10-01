/**
 * Created by robin on 2017/10/1.
 */
var Home = Vue.extend({
    template: '#home',
    data: function() {
        return {
            msg: 'Hello, vue router!'
        }
    }
});

var News = Vue.extend({
    template: '#news'
});

var Message = Vue.extend({
    template: '#message'
});

var About = Vue.extend({
    template: '#about'
});

// 添加一个组件构造器
var NewsDetail = Vue.extend({
    template: '#newsDetail'
});

var router = new VueRouter();
router.redirect({
    '/': '/home'
});

router.map({
    '/home': {
        component: Home,
        //key2:在路由器对象中给组件定义子路由
        subRoutes: { //这是关键字，将map转化为组件
            '/news': {
                name: 'news',
                component: News,
                subRoutes: {
                    'detail/:id':{
                        name: 'detail',
                        component: NewsDetail
                    }
                }
            },
            '/message': {
                component: Message
            }
        }
    },
    '/about': {
        component: About
    }
});

var App = Vue.extend({});
router.start(App, '#app');