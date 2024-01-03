var app = new Vue({
    el: '#app', 
    data:{
       log: {
        x: 0,
        y: 0,
       }
    },
    methods: {
        Event(e){
            console.log(e);
        },
        over(event){
            this.log.x = event.offsetX,
            this.log.y = event.offsetY
        }
    },
})