<template>
  <Header></Header>

  <main>
    <AddToDo @todoadd="todoadd"></AddToDo>
    <ToDo :todos="todos" @delete="deleteToDo" @update="updateToDo"></ToDo>
  </main>
</template>



<script>
import Header from "./components/Header.vue";
import AddToDo from "./components/AddToDo.vue";
import ToDo from "./components/ToDo.vue";
import axios from "axios";

export default {
  components: {
    Header,
    AddToDo,
    ToDo,
  },

  data() {
    return {
      todos: [
        { id: 1, Content: "Test" },
        { id: 2, Content: "davood" },
        { id: 3, Content: "Test" },
      ],
    };
  },
  
  created(){ 
    axios.get("",params)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err); 
    })
  },

  methods: {

    todoadd(value) {
      this.todos.push({ id: Date.now(), Content: value });
    },


    deleteToDo(value) {
      this.todos = this.todos.filter((todo) => todo.id != value);
    },

    updateToDo(id, Content) {
      this.todos = this.todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...id,
            Content,
          };
        } else {
          return todo;
        }
      });
    },
  },
};
</script>


