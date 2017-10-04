<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>

    <p>child tells me : {{childWords}}</p>

    </br>---------------子组件如下--------------</br>

    <child-a msgfromfather="you die!"
             v-on:child-tell-me-something="listenToMyBoy"></child-a>

  </div>
</template>

<script>
  import Store from './store/store'
  import ChildA from './components/ChildComponentA'
  console.log(Store)
  export default {
    //和new Vue写法不一样
    data: function () {
      return {
        title: 'this is a todo list',
        items: Store.fetch(),
        newItem:'',
        childWords:''
      }
    },
    //和new Vue写法一样
    components: {ChildA},
    //和new Vue写法一样
    watch: {
      items: {
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },

    //和new Vue写法一样
    methods: {
      toggleFinish: function(item){
        item.isFinished = !item.isFinished
      },
      addNew: function () {
        this.items.push({
          label:this.newItem,
          isFinished: false
        })
        this.newItem = ''
      },
      listenToMyBoy: function (msg) {
        this.childWords = msg
      }
    }
  }
</script>


<style>
  .finished {
    color: red;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
