<template>
  <div>
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>{{ title }}</h3>
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
    <OfflineFriends :friends="friends"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'
import OfflineFriends from './components/OfflineFriends.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'Learn by MD NAYEEM SARKER',
      friends: [
        {name: 'A',status: true},
        {name: 'B',status: false},
        {name: 'C',status: true},
        {name: 'D',status: false},
        {name: 'E',status: true}
      ]
    }
  },
  components: {
    HelloWorld,
    NavBar,
    AllFriends,
    OnlineFriends,
    OfflineFriends,
  },
  methods:{
    deleteFriend(payload){
      // console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
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
