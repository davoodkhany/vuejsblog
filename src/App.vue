<template>
  <my-nav></my-nav>
  <router-view></router-view>

                   

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