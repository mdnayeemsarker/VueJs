<template>
    <div id="onlinefriends">
        <h2>Online Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <h6 v-if="friend.status">{{ friend.name }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineFriends',
    data() {
        return {
            friends: [
                {name: 'A',status: true},
                {name: 'B',status: false},
                {name: 'C',status: true},
                {name: 'D',status: false},
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
