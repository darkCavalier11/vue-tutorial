var app = new Vue({
    el: '#app', // all childeren of #app id only get data and methods etc not its sibling or parents
    data: {
      message: 'Hello Vue!',
      name: 'Sumit'
    },
    methods: {
        greet: function(time){
            return this.name + ' Good ' + time
        }
    }
  })

