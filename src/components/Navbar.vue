<template>
  <div>
    <v-toolbar flat class="teal lighten-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>This is a ToDo app</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-x transition="fab-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" depressed color="grey dark">
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn depressed>menu</v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="teal lighten-2">
      <v-row column align-center>
        <v-col class="my-5 mx-5">
          <v-subheader headlight bold text class="text-uppercase white--text"
            >MyToDO</v-subheader
          >
        </v-col>
        <v-col> </v-col>
      </v-row>
      <v-list dense rounded>
        <v-list-item-group color="">
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <!-- <v-icon left class="white--text">{{ link.icon }}</v-icon> -->
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="dark--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdidashboard", text: "Dashboard", route: "/" },
      { icon: "mdiquiz", text: "About", route: "/About" },
    ],
  }),
};
</script>

<style></style>
