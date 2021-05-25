<template>
  <div class="about my-6">
    <h1
      class="
        subheading
        grey--text
        text--bold text-uppercase text-center text-decoration-underline
      "
    >
      This is an about page
    </h1>
    <div class="about">
      <!-- <div class="bout">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        eum magni minus quam velit, aspernatur ea repellat at. Corrupti iste
        distinctio eum optio at corporis, quia eveniet! Aspernatur, laboriosam
        ratione.
      </div> -->
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
<style scoped>
.about {
  justify-content: center;
  border: red;
}
</style>
