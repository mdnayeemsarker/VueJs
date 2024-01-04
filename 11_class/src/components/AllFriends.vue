<template>
    <div id="allfriends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <h6>{{ friend.name }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    data() {
        return {
            friends: [
                {name: 'A',status: true},
                {name: 'B',status: true},
                {name: 'C',status: true},
                {name: 'D',status: true},
                {name: 'E',status: true}
            ]
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
