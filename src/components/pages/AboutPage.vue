<template>
    <h2>About Page</h2>
    <form @submit.prevent="changeData">
        <input type="text" v-model="form.name" >
        {{ title }}
        <input type="text" v-model="form.family">
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import {ref,reactive,computed} from 'vue'
export default {
    setup(){

        const form = reactive({
            name:'',
            family:''
        })

        function changeData() {
           console.log(form);
        }

        const title = computed({
            get : () => form.name ,
            set : (val) => form.name = 'new' + val 
        })

            title.value = "ali"

        return {
            form,
            changeData,
            title
        }



    }
}
</script>