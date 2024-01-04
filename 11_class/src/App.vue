<template>
  <div>
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>{{ title }}</h3>
    <AllFriends/>
    <OnlineFriends/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'

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
    AllFriends,
    OnlineFriends,
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
