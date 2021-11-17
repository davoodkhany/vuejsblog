<template>
  <my-nav :page="currentPage" @changePage="currentPage = $event"></my-nav>
  <keep-alive>

    <component :is="currentPage"></component>
    
  </keep-alive>

  <my-footer></my-footer>
</template>

<script>
import Nav from "./components/layouts/TheNav.vue";
import Footer from "./components/layouts/TheFooter.vue";

import { defineAsyncComponent } from "vue";

export default {
  components: {
    "my-nav": Nav,
    "my-footer": Footer,
    'home': defineAsyncComponent(() => import("./components/pages/HomePage.vue")),
    'contact': defineAsyncComponent(() =>
      import("./components/pages/ContactPage.vue")
    ),
    'about': defineAsyncComponent(() => import("./components/pages/AboutPage.vue"))
  },
  data() {
    return {
      currentPage: "home",
    };
  },
};
</script>


<style scoped>
.card_shop .flex_column_table {
  background: white;
  padding: 20px;
  border-radius: 24px;
}

</style>