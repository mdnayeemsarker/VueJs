<template>
    <div id="offlinefriends">
        <h2>Offline Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <h6 v-if="!friend.status">{{ friend.name }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OfflineFriends',
    props: ['friends'],
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
#h6 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0180ff;
}
</style>
