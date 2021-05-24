<template>
  <v-app class="teal lighten-4">
    <v-main class="mx-1 mb-4">
      <Navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
