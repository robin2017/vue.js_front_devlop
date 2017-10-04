<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg2 }}</h1>

    <button v-on:click="onClickMe">click!</button>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'hello from component a!',
        msg2: 'hello,robin'
      }
    },
    props:['msgfromfather'],
    methods: {
      onClickMe: function () {
        this.$emit('child-tell-me-something',this.msg)

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
