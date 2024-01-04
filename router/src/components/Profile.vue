<template>
  <div class="Profile">
    <h1>This is Profile component where user id is ( {{userId }} )</h1>
    <button @click="About">About</button>
    <button @click="Contact">Contact</button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      userId: this.$route.params.user_id
    }
  },
  methods:{
    updateId(){
      this.userId = this.$route.params.user_id
    },
    About(){
      this.$router.push( {name: 'about'} )
    },
    Contact(){
      this.$router.push( {name: 'contact-us'} )
    },
    Back(){

    },
    Fowerd(){

    },
  },
  watch:{
    $route: 'updateId'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
