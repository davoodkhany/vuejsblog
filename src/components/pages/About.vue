<template>
    <h2>About Page</h2>
    <h1>{{name}}</h1>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){

        const name = ref('hi davood')
            setTimeout(() => {
                console.log('run')
                name.value = "hi ali"
                console.log('run');
            }, 2000);

        return {
            name
        }



    }
}
</script>