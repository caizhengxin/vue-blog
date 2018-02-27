<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    body {
        margin: 0;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    a:hover {
        text-decoration: none;
        outline: none;
    }

    ul li{
        list-style: none;
    }

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    .display-none {
        display: none;
    }

    .display-block {
        display: block;
    }
</style>
