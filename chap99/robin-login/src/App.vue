<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>

    <router-link to="/login">请登录</router-link>
    <router-link to="/main">进入main页面</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
import Hello from './components/Hello'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    Login
  }
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
