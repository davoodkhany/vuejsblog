<template>
    <h2>About Page</h2>
    <h1>{{name.firstName}}</h1>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
    setup(){

        const name = reactive({
            firstName:'davood',
            lastName: 'khany'
        })
        setTimeout(() => {
            name.firstName = 'ali'
        }, 2000);

        return {
            name
        }



    }
}
</script>