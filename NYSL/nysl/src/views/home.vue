<template>
  <!--eslint-disabled-->

  <v-container min-height="530">
    <v-toolbar color="light-green lighten-2">
      <v-layout justify-center>
        <v-toolbar-title class="display-1">Welcome</v-toolbar-title>
      </v-layout>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card dark>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h2 class="text-xs-center">Content Info</h2>
        </v-flex>
      </v-layout>
      <v-layout row justify-center class="mt-2">
        <v-flex xs9 md6 class="text-xs-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, quae quasi corporis incidunt, maiores voluptates necessitatibus eos quis tempora nihil molestias exercitationem deserunt eius recusandae odio autem, non quo.</p>
        </v-flex>
      </v-layout>
    </v-card>
    <v-divider></v-divider>
    <v-card class="next" dark>
      <v-toolbar class="layout row justify-center">
        <v-toolbar-title
          class="text-xs-center light-green--text text--lighten-2 headline"
        >Upcoming Matches</v-toolbar-title>
      </v-toolbar>

      <v-layout justify-center v-for="match in currentmatch" :key="match" class="pa-3">
        <v-list-tile-title class="text-xs-center grey lighten-1">
          <router-link :to="'/match:' + match">{{match}}</router-link>
        </v-list-tile-title>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    //...mapActions(["loadData"])
  },
  computed: {
    getLeague() {
      return this.$store.getters.getLeague;
    },
    ...mapState(["info", "currentmatch"])
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.v-list__tile__title {
  border-radius: 20px;
  width: 70%;
}
</style>
