<template>
    <my-header></my-header>
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
  import Header from './../layouts/Header.vue';
  import Sidebar from './../layouts/Sidebar.vue';
  import PostList from './../PostList.vue'

export default {
    components : {
        'my-header' : Header ,
        PostList,
        Sidebar,
    }
}
</script>