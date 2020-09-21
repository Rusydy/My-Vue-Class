new Vue({
    el: '#app',

    data: {
        price: 100,
    },

    methods: {
        moneyFormat: function(price) {
            return `$${price}.00`
        }
    },

    computed: {
        tax: function () {
            return this.price * 0.1
        },

        total: function () {
            return parseInt(this.price) + this.tax
        }
    }
})