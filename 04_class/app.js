var app = new Vue({
    el: '#app', 
    data:{
        dollar: 5,
    },
    methods: {
        Calculation(data){
            this.dollar += data
        }
    },
})