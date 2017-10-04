import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入开发目录下的Hello.vue组件
import Hi from '@/components/Hi' //引入开发目录下的Hello.vue组件
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    },
    {
      path: '/hi',
      name: 'robin-hi',
      component: Hi,
      beforeEnter:(to,from,next)=> {
        console.log('我进入了params模板');
        console.log("robin1=to==",to);
        console.log('robin2=from==',from);
        next();
      },
      children:[
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
      ]
    }
  ]
})
