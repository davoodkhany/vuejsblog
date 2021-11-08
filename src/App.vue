<template>
        <my-nav :page="currentPage" @changePage="currentPage = $event"></my-nav>

        <component :is="currentPage"></component>

        <my-footer></my-footer>

        

</template>

<script>

  import Nav from './components/layouts/Nav.vue';
  import Footer from './components/layouts/Footer.vue';

  import Home from './components/pages/Home.vue'
  import Contact from './components/pages/Contact.vue'
  import About from './components/pages/About.vue'


  export default {
    components : {
      'my-nav' :Nav,
      'my-footer' : Footer,
      Home,
      Contact,
      About
    },
    data() {
      return {
        currentPage : 'home'
      }
    }
  }
</script>

<style>
.card_shop .flex_column_table{
    background: white;
    padding: 20px;
    border-radius: 24px;
}

</style>