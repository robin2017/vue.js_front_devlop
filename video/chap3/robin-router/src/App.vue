<template>
  <div id="app">
    <p>导航 ：
      <!--设置导航-->
      <router-link to="/">首页</router-link>
      <router-link :to="{name:'robin-hi',params:{username:'robin robin'}}">Hi页面</router-link>
      <router-link to="/hi/hi1">Hi1页面</router-link>
      <router-link to="/hi/hi2">Hi2页面</router-link>
    </p>
    <img src="./assets/logo.png">
    <!--导航内容渲染-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
