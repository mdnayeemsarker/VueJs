<template>
  <div>
      <nav>
          <ul>
              <li> <router-link to="/">Home</router-link> </li>
              <li> <router-link to="about">About</router-link> </li>
              <li> <router-link :to="{name: 'contact-us'}">Contact</router-link> </li>
          </ul>
      </nav>
      <button @click="About">Back</button>
      <button @click="Contact">Fowerd</button>
      <div>
        <ul><li v-for="(id, index) in userIds" :key="{index}"><router-link :to="{name:'profile', params:{user_id:id}}">Profile {{id}}</router-link></li></ul>
      </div>
  </div>
  </template>

  <script>
  export default {
      name: 'NavBar',
      data(){
          return{
            userIds: ['1', '2', '3', '4', '5', '6', '7']
          }
      },
      methods:{
        Back(){
          this.$router.go(-1)
        },
        Fowerd(){
          this.$router.go(1)
        },
      }
  }
  </script>

  <style scoped>
  nav {
      text-align: center;
  }

  nav ul {
      padding: 0;
  }

  nav li {
      margin: 0;
      padding: 8px;
      display: inline-block;
      list-style-type: none;
  }
  a.router-link-exact-active{
    color: #fa0505;
  }
  </style>
