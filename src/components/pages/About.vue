<template>
    <h2>About Page</h2>
    <form @submit.prevent="changeData">
        <input type="text" v-model="form.name" >
        <input type="text" v-model="form.family">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
    setup(){

        const form = reactive({
            name:'',
            family:''
        })


        function changeData() {
           
           console.log(form);
            
        }

        return {
            form,
            changeData
        }



    }
}
</script>