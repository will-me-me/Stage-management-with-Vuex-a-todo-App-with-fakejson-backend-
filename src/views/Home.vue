<template>
  <v-container class="my-4">
    <div>
      <h1 class="text-center text-capitalize caption my-2">
        this are your Todos
      </h1>
      <div>
        <AddTodo class="py-4" />
        <filterTodo class="py-2" />
      </div>
    </div>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> =Incomplete </span>
      <span> <span class="complete-box"></span> =Complete </span>
    </div>
    <div class="todos">
      <div
        v-bind="{ 'is-complete': todo.completed }"
        @dblclick="onDblclick(todo)"
        class="todo"
        v-for="todo in alltodos"
        :key="todo.id"
      >
        {{ todo.title }}
        <div class="mt-4">
          <v-icon large mb-10px @click="deleteTodo(todo.title)" color="white">
            {{ icons.mdiDelete }}</v-icon
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";
import AddTodo from "../components/AddTodo";
import filterTodo from "../components/filterTodo";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "UpdateTodo"]),
    onDblclick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.UpdateTodo(updTodo);
    },
  },
  computed: mapGetters(["alltodos"]),
  created() {
    this.fetchTodos();
  },

  components: {
    AddTodo,
    filterTodo,
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
.legend {
  display: flex;
  justify-content: space-around;

  margin-bottom: 1rem;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #354952;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
</style>
