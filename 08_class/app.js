var app = new Vue({
    el: '#app', 
    data:{
        name: 'My Name nayeem',
    },
    methods: {
        General(e){
            console.log('General');
        },
        Ctrl(e){
            console.log('Ctrl');
        },
        Alt(e){
            console.log('Alt');
        },
       
    },
})