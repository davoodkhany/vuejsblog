<template>
    <h2>About Page</h2>

    <ShowFormData :name="form.name" :family="form.family" @reset="resetHandler"  />
    <form @submit.prevent="changeData">
        <input type="text" v-model="form.name" >
        <!-- {{ title }} -->
        <input type="text" v-model="form.family">
        <button type="submit">Submit</button>
    </form>

</template>

<script>
import {ref,reactive,computed, toRefs, watch} from 'vue'
import ShowFormData from '../ShowFormData.vue';
export default {
    setup() {
        const form = reactive({
            name: "",
            family: ""
        });
        const { name } = toRefs(form);
        watch(name, function (newVal, oldVal) {
            console.log(newVal, oldVal);
        });
        // function changeData() {
        //    console.log(form);
        // }
        // const title = computed({
        //     get : () => form.name ,
        //     set : (val) => form.name = 'new' + val 
        // })
        //     title.value = "ali"


       function resetHandler(){
            form.name = "";
            form.family = ""
        }
        
        return {
            form,
            // changeData,
            // title,
            resetHandler
        };
    },
    components: { ShowFormData }
}
</script>