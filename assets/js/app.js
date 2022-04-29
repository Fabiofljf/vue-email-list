const app = new Vue({
    el: '#app',
    data: {
        email: ''
    },
    methods: {},
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                //console.log(this);
                //console.log(response);
                //console.log(response.data.response);
                this.email = response.data.response
            })
    }
})