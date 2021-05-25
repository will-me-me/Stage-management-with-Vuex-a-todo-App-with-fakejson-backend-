<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <v-form class="px-3">
        <v-text-field
          v-model="title"
          label="AddTodo"
          :rules="todoInputRule"
          required
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn class="success mx-0 mt-3" depressed @click="onSubmit">
          <span>Submit</span>
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data: () => ({
    title: "",
    todoInputRule: [(value) => value.length >= 5 || "Minimum 5 characters"],
  }),
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
</style>
