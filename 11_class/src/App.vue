<template>
  <div>
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>{{ title }}</h3>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'Learn by MD NAYEEM SARKER'
    }
  },
  components: {
    HelloWorld,
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
