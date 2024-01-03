var app = new Vue({
    el: '#app', 
    data:{
       name: 'Nayeem'
    },
    methods: {
        NameChangeKeyUp(event){
            this.name = event.target.value
        },   
        NameChangeKeyPress(event){
            this.name = event.target.value
        }     
    },
})