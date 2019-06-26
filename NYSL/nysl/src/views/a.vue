<template>
  <!--eslint-disabled-->

  <v-container min-height="530">
    <v-toolbar flat>
      <v-layout justify-center>
        <v-toolbar-title>HOME</v-toolbar-title>
      </v-layout>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card flat>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h2 class="text-xs-center">Content Info</h2>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs9 md6 class="text-xs-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, quae quasi corporis incidunt, maiores voluptates necessitatibus eos quis tempora nihil molestias exercitationem deserunt eius recusandae odio autem, non quo.</p>
        </v-flex>
      </v-layout>
    </v-card>
    <v-divider></v-divider>
    <v-card class="next" flat>
      <v-toolbar-title class="text-xs-center headline">Upcoming Matches</v-toolbar-title>
      <v-list>
        <v-list-tile v-for="match in journey" :key="match">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center blue lighten-5">
              <router-link :to="'/match' + match">{{match}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  created() {
    this.$store.dispatch("loadData");
  },
  methods: {},
  computed: {
    journey() {
      console.log(this.$store.getters.currentMatch);
      return this.$store.getters.currentMatch;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
