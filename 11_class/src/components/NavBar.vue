<template>
<div>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
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
nav a{
    text-decoration: none;
}
</style>
