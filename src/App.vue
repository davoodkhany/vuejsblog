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

  created() {
    this.getData("todo.json");
  },

  methods: {

    todoadd(value) {
      axios.post("https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app/todo.json",{value})

      this.todos.push({ id: Date.now(), Content: value });
    },

    deleteToDo(value) {
      // axios.delete("https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app/todo.json",value)
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.error(err); 
      // })
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
        getData() {
      axios
        .get(
          `https://vuejs-ca936-default-rtdb.europe-west1.firebasedatabase.app/todo.json`
        )
        .then(({ data }) => {
        if(data != null) {
          let todo = Object.entries(data).map(([id, value]) => {

            return {
              id,
              Content: value.value

            };
          });
          this.todos = todo;
        }
        })
        
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>


