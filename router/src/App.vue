<template>
  <div id="app">
    <img src="./assets/logo.png" height="50" width="50">
    <router-view/>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
    name: 'App',
    comments: {
        NavBar
    },
    components: { NavBar }
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
