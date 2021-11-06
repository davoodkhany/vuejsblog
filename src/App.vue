<template>
  <Header></Header>
  <main>
    <Alert>
      <h4 class="alert-heading">Well done!</h4>

      
      <template v-slot:description>
            <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      </template>


        <template v-slot:title>
            <h2>Title Davood</h2>
        </template>

    </Alert>

    <AddToDo @todoadd="todoadd"></AddToDo>

    <ToDo
      :todos="todos"
      @delete="deleteToDo"
      @update="updateToDo"
      v-if="!loding"
    ></ToDo>

    <div v-else>Loding</div>
  </main>
</template>


<script>
import Header from "./components/Header.vue";
import AddToDo from "./components/AddToDo.vue";
import ToDo from "./components/ToDo.vue";
import axios from "./Api/apiAxios";
import Alert from "./components/Alert.vue";

export default {
  components: {
    Header,
    AddToDo,
    ToDo,
    Alert,
  },

  data() {
    return {
      todos: [
        { id: 1, Content: "Test" },
        { id: 2, Content: "davood" },
        { id: 3, Content: "Test" },
      ],

      loding: false,
    };
  },

  created() {
    this.getData("todo.json");
  },

  methods: {
    todoadd(value) {
      axios
        .post("/todo.json", { value })
        .then((res) => {
          this.getData("todo.json");
          // this.todos.push({ id: Date.now(), Content: value });
        })
        .catch((err) => {
          console.error(err);
        });
    },

    deleteToDo(value) {
      axios
        .delete("/todo.json", value)
        .then((res) => {
          this.todos = this.todos.filter((todo) => todo.id != value);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    updateToDo(id, value) {
      axios
        .put(`/${id}.json`, { todo: { id: id, value: value } })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });

      // this.todos = this.todos.map((todo) => {
      //   if (todo.id == id) {
      //     return {
      //       ...id,
      //       Content:todo.value,
      //     };
      //   } else {
      //     return todo;
      //   }
      // });
    },
    getData() {
      this.loding = true;
      axios
        .get(`/todo.json`)
        .then(({ data }) => {
          if (data != null) {
            this.loding = false;
            let todo = Object.entries(data).map(([id, value]) => {
              return {
                id,
                Content: value.value,
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


