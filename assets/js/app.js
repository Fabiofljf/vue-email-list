const app = new Vue({
    el: '#app',
    data: {
        emails: [],
    },
    methods: {},
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                //console.log(this);
                //console.log(response);
                //console.log(response.data.response);
                for (let index = 0; index < 10; index++) {
                    this.emails.push(response.data.response)
                }
            })
    }
})