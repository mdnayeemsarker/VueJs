<template>
    <div id="allposts">
        <h2>All Posts</h2> <hr>
        <input type="text" v-model="inputText">
        <div v-for="post in filterposts" :key="post.id">
            <h5>Post id: {{ post.id }} | Post userid: {{ post.userId }}</h5>
            <h4>Post title: {{ post.title }}</h4>
            <span>Post body: {{ post.body }}</span> <hr>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AllPosts',
    data() {
        return {
            posts: [],
            inputText: '',
        }
    },
    computed:{
        filterposts(){
            return this.posts.filter( post => {
                return post.title.match(this.inputText)
            })
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
            this.posts = response.data
        })
        .catch(error => {
            console.log(error)
        })
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
