<template>
    <div>
        <p>{{ item.title }}</p>
        <button @click=" toggle = ! toggle ">Details</button>
        <p v-if="toggle">{{ item.description }}</p>
    </div>
</template>

<script>
    export default {
        name: "Accordion",

        props: ['item'],

        data: function (){
            return {
                toggle: false
            }
        }
    }
</script>