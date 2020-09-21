new Vue({
    el: '#app',

    data: {
        price: 100,
    },

    computed: {
        tax: function () {
            return this.price * 0.1
        },

        taxFormatted: function() {
            return `$${this.tax}`
        },

        total: function () {
            return parseInt(this.price) + this.tax
        },

        totalFormatted: function() {
            return `$${this.total}`
        }
    }
})