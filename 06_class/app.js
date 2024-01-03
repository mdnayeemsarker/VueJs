var app = new Vue({
    el: '#app', 
    data:{
       name: 'Nayeem'
    },
    methods: {
        NameChange(event){
            this.name = event.target.value
        }     
    },
})