<template>
 
  <my-header></my-header>

  <button class="btn btn-danger" @click="ShowModals">ShowModal</button>

    <button class="btn btn-green" @click="RouterAbout">RouterAbout</button>

  <ShowModal :active="ActiveModal" @CloseModal="CloseModal"></ShowModal>



  <!-- Page content-->
  <div class="container">
    <div class="row">
      <!-- Blog entries-->
      <PostList></PostList>
      <sidebar></sidebar>
    </div>

  </div>
</template>



<script>
import Header from "./../layouts/TheHeader.vue";
import Sidebar from "./../layouts/TheSidebar.vue";
import PostList from "./../PostListItem.vue";
// import mixin from "./../mixin/mixins";
import ShowModal from "./../ShowModal.vue"
import ModalHook from './../../hook/ModalHook'
import {useRouter} from 'vue-router'
export default {
  
  // mixins: [mixin],

  components: {
    "my-header": Header,
    PostList,
    Sidebar,
    ShowModal
    
  },
  setup(){
    const [ActiveModal,ShowModals, CloseModal] = ModalHook();
    
    const router = useRouter();

    function RouterAbout(){
      router.push('/about')
    }

    return {
      ActiveModal,CloseModal,ShowModals,RouterAbout
    }
  }
};
</script>