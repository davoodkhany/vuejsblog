<template>
  <Navbar></Navbar>
  <Headerblog></Headerblog>
  <Content></Content>
  <Footerblog></Footerblog>
</template>


<script>
import Navbar from "./components/Navbar-bog.vue";
import Headerblog from "./components/Header-blog.vue";
import Content from "./components/Content.vue";
import Footerblog from "./components/Footer-blog.vue";

export default {
  components:{
    Navbar,
    Headerblog,
    Content,
    Footerblog,
  },
 data(){
   return{

   }
 }
}

</script>