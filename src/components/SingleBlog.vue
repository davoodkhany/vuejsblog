<template>
      <div class="container">
    <div class="row">
    
      
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>

    import TheSidebar from "./layouts/TheSidebar.vue";
    import axios from "axios"
    export default {

        components:{
            sidebar:TheSidebar
        }
        
        created(){

            axios.get('')
        }
        
    }

</script>


