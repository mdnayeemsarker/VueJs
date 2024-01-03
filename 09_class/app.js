var app = new Vue({
    el: '#app', 
    data:{
        name: true,
        age: true,
    },
    methods: {
        ShoeName(){
            this.name = !this.name;
        },
        ShoeAge(){
            this.age = !this.age;
        },
    },
})