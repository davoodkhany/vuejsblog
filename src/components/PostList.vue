<template>
  <div class="mb-4 card">
    <a href="#!"
      ><img
        class="card-img-top"
        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
        alt="..."
    /></a>
    <div class="card-body">
      <div class="small text-muted">January 1, 2021</div>
      <h2 class="card-title h4">{{ title }}</h2>
      <p class="card-text">{{ body }}</p>
      <router-link  class="btn btn-primary" :to="{ path:`/singleblog/${id}`}">Read more →</router-link>
  
    </div>
  </div>
</template>


<script>
import { reactive, computed, toRefs } from "vue";
import {  useRouter } from "vue-router";
export default {
  props: {
    post: {
      type: Object,
    },
  },

  setup(props) {
    const { title, body, id } = reactive(props.post);

    
   
    
   
    return {
      title,
      body,
      id,
    };
  },
};
</script>