<template>
  <my-header></my-header>

  <button class="btn btn-danger" @click="ShowModals">ShowModal</button>

  <ShowModal :active="ActiveModal" @CloseModal="CloseModal"></ShowModal>

  <!-- Page content-->
  <div class="container">
    <div class="row">
      <!-- Blog entries-->
      <post-list></post-list>
      <sidebar></sidebar>
    </div>
  </div>
</template>


<script>
import Header from "./../layouts/TheHeader.vue";
import Sidebar from "./../layouts/TheSidebar.vue";
import PostList from "./../PostList.vue";
import mixin from "./../mixin/mixins"

export default {
     mixins: [mixin],
  components: {
    "my-header": Header,
    PostList,
    Sidebar,
  },

 
  
};
</script>