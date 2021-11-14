<template>
  <alert>
    <h4 class="alert-heading">Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within
      an alert works with this kind of content.
    </p>
    <template #temp>
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </template>
    <template #title="aa">
      <h2>{{ aa.item }}</h2>
    </template>
  </alert>
  <!-- <alert>
         <h4 class="alert-heading">Hell Roocket!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </alert>
    <alert>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci itaque vero asperiores expedita quas laboriosam, libero delectus labore excepturi. Corporis eligendi ad laborum repudiandae dolor quis minus ea voluptatem.</p>
    </alert> -->

  <div class="col-lg-8">
    <div v-if="!loading">
      <!-- Featured blog post-->
      <post :post="posts[0]"></post>
      <!-- Nested row for non-featured blog posts-->
      <div class="row">
        <div
          class="col-lg-6"
          v-for="(postGroup, index) in posts.slice(1)"
          :key="index"
        >
          <!-- Blog post-->
          <post v-for="post in postGroup" :key="post.id" :post="post"></post>
        </div>
      </div>
    </div>
    <div v-else>loading</div>
    <pagination
      :currentPage="page.current"
      :totalPage="page.totalPage"
      @pagechanged="changePage"
    ></pagination>
  </div>
</template>

<style lang="scss" scoped >
.col-lg-8 {
  background-color: red;
}
</style>

<script>
import Post from "./PostList.vue";
import axios from "axios";
import _ from "underscore";
import Pagination from "./PaginationBlog.vue";
import Alert from "./AlertShow.vue";

export default {
  components: {
    Post,
    Pagination,
    Alert,
  },
  data() {
    return {
      posts: null,
      loading: false,
      page: {
        current: 1,
        totalPage: 0,
      },
    };
  },
  created() {
    this.getPostData(1);
  },
  methods: {
    changePage(page) {
      this.getPostData(page);
    },
    getPostData(page = 1) {
      this.loading = true;
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`
        )
        .then((res) => {
          this.loading = false;
          this.posts = res.data;
          let mainPost = this.posts.shift();

          this.posts = [mainPost, ..._.chunk(this.posts, 2)];
          this.page.current = page;
          this.page.totalPage = parseInt(
            parseInt(res.headers["x-total-count"]) / 9
          );
          console.log(this.page);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>