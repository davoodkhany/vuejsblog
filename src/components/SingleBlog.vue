<template>
  <div class="container">
    <div class="row">
      {{ data.body }}

      <ul>
        <li>
          <router-link to="/singleblog/5">post 5</router-link>
        </li>
        <li>
          <router-link to="/singleblog/6">post 6</router-link>
        </li>
        <li>
          <router-link to="/singleblog/7">post 7</router-link>
        </li>
      </ul>

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

  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getData(this.$route);
    // this.getData(this.$route.params)
  },
  watch: {
    $route(newRoute) {
      this.getData(newRoute);
    },
  },

  methods: {
    getData(route) {
      const postId = route.params.id;
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(({ data }) => {
          let date = {
            body: data.body,
            id: data.id,
            title: data.title,
            userId: data.userId,
          };
          return (this.data = date);
        })
        .catch( err =>{
          const {status} = err.response

          if(status == 404) {

           return this.$route.push('/404')

          }

          console.log(err);
        });
    },
  },
};
</script>


