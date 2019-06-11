<template>
  <!--eslint-disabled-->

  <v-content min-height="530">
    <v-toolbar>
      <v-layout justify-center>
        <v-toolbar-title>HOME</v-toolbar-title>
      </v-layout>
    </v-toolbar>
    <v-layout row xs12 wrap>
      <v-flex fluid>
        <h2 class="text-xs-center">Content Info</h2>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs9 class="text-xs-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, quae quasi corporis incidunt, maiores voluptates necessitatibus eos quis tempora nihil molestias exercitationem deserunt eius recusandae odio autem, non quo.</p>
      </v-flex>
    </v-layout>

    <v-card class="next">
      <v-toolbar-title class="text-xs-center headline">Upcoming Matches</v-toolbar-title>
      <v-list>
        <v-list-tile v-for="match in currentMatch" :key="match">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center blue lighten-5">
              <router-link :to="'/match' + match">{{match}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      currentMatch: []
    };
  },
  created() {
    //let now = new Date();
    let first = true;
    let now = Date.parse("Jun 22, 2019");
    this.league.map(a => {
      let date = Date.parse(a.date);
      if (now < date && first == true) {
        first = false;
        this.currentMatch = a.confrontation;
        return;
      }
    });
  },
  computed: {
    league() {
      return this.$store.state.league;
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
