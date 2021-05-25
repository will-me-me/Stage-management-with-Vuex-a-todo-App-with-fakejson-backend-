<template>
  <div>
    filter Todos
    <!-- <v-select
      v-model="select"
      filled
      rounded
      persistent-hint
      return-object
      single-line
      :items="items"
      item.value="Num"
      @change="filterTodos($event)"
    >
    </v-select> -->
    <select name="" id="" @change="filterTodos">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "filterTodos",
  data: () => ({
    select: "",
    items: [" 200 ", " 100 ", " 50", " 20", "  10", " 5"],
  }),
  methods: mapActions(["filterTodos"]),
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
