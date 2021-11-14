<template>
    <h2>About Page</h2>
    <h1 @click="changeLastName('ali')">{{name.firstName}}</h1>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
    setup(){

        const name = reactive({
            firstName:'davood',
            lastName: 'khany'
        })

        function changeLastName(names){
            name.firstName = names
        }

        return {
            name,
            changeLastName
        }



    }
}
</script>