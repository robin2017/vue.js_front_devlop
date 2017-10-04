<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{$route.params.username}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am Robin'
      }
    }
  }
</script>


<style>

</style>
