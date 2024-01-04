<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name: 'HookPart',
    data() {
        return {
            title: 'Hook Part'
        }
    },
    methods:{
    },
    beforeCreate(){
        alert('before Create');
    },
    created(){
        alert('created');
    },
    beforeMount(){
        alert('beforeMount');
    },
    mounted(){
        alert('mounted');
    }
}
</script>

<style scoped>

</style>
