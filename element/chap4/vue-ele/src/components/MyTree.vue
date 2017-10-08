<template>

  <el-tree
    :data="data2"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps">
  </el-tree>
  <!--<button v-on:onclick="btnTest">测试按钮</button>-->
  <!--<button @click="btnTest">登陆</button>-->
</template>
<script>
  import Soft from '../utils/software'
  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '主菜单',
          children: [{
            id: 4,
            label: '态势处理',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }]
          }]
        }, {
          id: 2,
          label: '情报处理',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods:{
      btnTest :function () {
        console.log('===btn onclick===')
        var data = Soft.doAjax({})

        console.log(' methodd:data == '+data)
      }
    }
  };
</script>
<style>

</style>
