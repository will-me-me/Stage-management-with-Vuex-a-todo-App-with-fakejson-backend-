<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "todos",
  computed: mapGetters(["alltodos"]),
};
</script>
