var app = new Vue({
    el: '#app', 
    data:{
        name: 'This is my vue class',
        no: 'No',
    },
    methods: {
        MyAge(age){
            return `${this.name} ${this.no} ${age}`
        }
    },
})