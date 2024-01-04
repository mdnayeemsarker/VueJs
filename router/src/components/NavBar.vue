<template>
  <div>
      <nav>
          <ul>
              <li> <router-link to="/">Home</router-link> </li>
              <li> <router-link to="about">About</router-link> </li>
              <li> <router-link :to="{name: 'contact-us'}">Contact</router-link> </li>
          </ul>
      </nav>
  </div>
  </template>

  <script>
  export default {
      name: 'NavBar',
      data(){
          return{

          }
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
  </style>
