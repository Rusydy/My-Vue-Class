import Vue from 'vue'
// import Accordion from './components/Accordion'
// import List from './components/List'

window.axios = require('axios')

new Vue({
    el: '#app',

    components: {
        
    },

    mounted: function () {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data)
            .catch(error => this.posts = [{title: 'No posts found.'}])
            .finally(() => console.log('Data loading complete.'))

    },

    data: {
        posts: null,
    }
})