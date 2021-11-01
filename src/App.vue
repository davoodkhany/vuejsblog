<template>
        <Header></Header>      

        <main>
          <AddToDo></AddToDo>
          <ToDo :todos="todos" ></ToDo>
        </main>
  

</template>



<script>
import Header from "./components/Header.vue";
import AddToDo from "./components/AddToDo.vue";
import ToDo from "./components/ToDo.vue";
  export default {
    components:{
    Header,
    AddToDo,
    ToDo
    },
    data(){
      return{
        todos:[
          {id:1, Content:'Test'},
          {id:2, Content:'davood'},
          {id:3, Content:'Test'}
        ]
      }
    }
  }

</script>


