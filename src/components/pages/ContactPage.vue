<template>
    <h2>Contact Page</h2>
</template>


<script>

    import {useRoute} from 'vue-router';    


  
    export default{
    created(){
        console.log(this.$route.params);    
    }

    // setup(){
    //     const router = useRoute();
    //     console.log(router.params);
    // }
    }

</script>