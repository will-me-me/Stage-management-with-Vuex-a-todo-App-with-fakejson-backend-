<template>
  <v-app v-bind:style="{ 'background-image': 'url(' + image + ')' }">
    <div class="about my-6">
      <h1
        class="
          subheading
          grey--text
          text--bold text-uppercase text-center text-decoration-underline
        "
      >
        This is an about this Project
      </h1>
      <div class="about">
        <v-expansion-panels focusable inset popout>
          <v-expansion-panel v-for="(item, i) in 3" :key="i">
            <v-expansion-panel-header>
              About The Project</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p class="text-capitalize overline">
                this is a simple Todo app created using Vue.js and Vuitify.Vuex
                is used in this application for stage management where one is
                able to add a todo, delete and filter the number of todos in the
                Ui.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "todos",
  data: () => ({
    image: "will2.jpg",
  }),
  computed: mapGetters(["alltodos"]),
};
</script>
<style scoped>
.about {
  justify-content: center;
  border: red;
}
</style>
