<template>
  <div class="container">
    <div class="row">
        
        {{ data.body }}          
        
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./layouts/TheSidebar.vue";
import axios from "axios";
export default {
  components: {
    sidebar: TheSidebar,
  },

data(){
  return{
    data:[]
  }
},
  created() {
    let postId = this.$route.params;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId.id}`)
      .then(({ data }) => {
        let date = {
          body: data.body,
          id: data.id,
          title: data.title,
          userId: data.userId,
        };

        return this.data = date;
      });
      
  },
};
</script>


