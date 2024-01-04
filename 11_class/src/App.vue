<template>
  <div>
    <NavBar/>
    <h3>{{ title }}</h3>
    <AllPosts/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AllPosts from './components/AllPosts.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'Learn by MD NAYEEM SARKER',
    }
  },
  components: {
    NavBar,
    AllPosts,
  },
  methods:{
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
