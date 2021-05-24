<template>
  <v-container class="my-4">
    <div>
      <h1 class="text-center text-capitalize caption my-2">
        this are your Todos
      </h1>
      <div>
        <AddTodo class="py-4" />
      </div>
    </div>
    <div class="todos">
      <div class="todo" v-for="todo in alltodos" :key="todo.id">
        {{ todo.title }}
        <div class="mt-4">
          <v-icon @click="deleteTodo(todo.id)" large mb-10px>{{
            icons.mdiDelete
          }}</v-icon>
        </div>
      </div>

      <!-- <h1 class="text-center text-capitalize caption my-2">
        this is the home page
      </h1>
      <v-row dense wrap>
        <v-col
          xs12
          sm6
          md4
          lg3
          class="text-xs-center ma-3"
          v-for="todo in alltodos"
          :key="todo.id"
        >
          <v-card gutters>
            <v-card-text class="todo">
              {{ todo.title }}
            </v-card-text>
            <v-card-action>
              <v-btn>delete</v-btn>
            </v-card-action>
          </v-card>
          <v-divider></v-divider>
        </v-col>
      </v-row> -->
    </div>
  </v-container>
</template>

<script>
import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";
import AddTodo from "../components/AddTodo";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["alltodos"]),
  created() {
    this.fetchTodos();
  },

  components: {
    AddTodo,
  },
  data: () => ({
    icons: {
      mdiAccount,
      mdiPencil,
      mdiShareVariant,
      mdiDelete,
    },
  }),
};
</script>
<style scoped>
.todo {
  background: #41b883;
  text-align: center;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  border: 1px solid #ccc;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
</style>
