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
        { id: 1, Content: "Test", done: true },
        { id: 2, Content: "davood", done: true },
        { id: 3, Content: "Test", done: true },
      ],
    };
  },

  created() {
    this.getData('todo.json')
  },


  methods: {

    getData(){
        axios
      .get(
        `https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app/todo.json`
      )
      .then(({ data }) => {
        let todo = Object.entries(data).map(([id, Content]) => {
          return {
            id,
            Content: Content.todo.text,
            done: Content.todo.done,
          };
        });
        this.todos = todo;
      })
      .catch((err) => {
        console.error(err);
      });
    },

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


