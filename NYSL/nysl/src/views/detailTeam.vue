<template>
  <v-container>
    <v-toolbar dark class="light-green--text text--lighten-2">
      <v-layout justify-center>
        <v-toolbar-title class="display-1">{{currentTeam.name}}</v-toolbar-title>
      </v-layout>
    </v-toolbar>

    <v-card dark>
      <v-layout xs12 md6 justify-center>
        <v-flex xs5 class="logo my-2">
          <v-img :src="currentTeam.logo"></v-img>
        </v-flex>
      </v-layout>
      <v-layout id="Oinfo" justify-center>
        <v-flex xs12 md6>
          <v-list class="mx-3 mb-2">
            <v-list-tile class="blue-grey darken-2">
              <v-list-tile-content>
                <v-list-tile-title class="text-xs-center blue-grey darken-2">Colors:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center blue-grey darken-2">{{getTeam.colors}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile class="blue-grey darken-2">
              <v-list-tile-content>
                <v-list-tile-title class="text-xs-center blue-grey darken-2">League's Pos:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center blue-grey darken-2">{{getTeam.pos}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile class="blue-grey darken-2">
              <v-list-tile-content wrap>
                <v-list-tile-title class="text-xs-center blue-grey darken-2">Ubication:</v-list-tile-title>
                <v-list-tile-sub-title
                  class="text-xs-center blue-grey darken-2"
                >{{getTeam.Location}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex class="text-xs-center">
          <iframe :src="getTeam.maps"></iframe>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card dark>
      <v-toolbar>
        <v-layout>
          <v-flex class="text-xs-center headline light-green--text text--lighten-2">SQUAD</v-flex>
        </v-layout>
      </v-toolbar>
      <v-layout justify-center>
        <v-flex xs8>
          <v-carousel hide-delimiters height="270">
            <v-carousel-item v-for="(player,i) in getTeam.players" :key="i">
              <v-card>
                <router-link :to="'../player:'+player.name">
                  <v-img :src="player.src" aspect-ratio="1"></v-img>
                </router-link>
                <v-card-title class="layout row justify-space-around caption">
                  <v-flex align-center>{{player.name}}</v-flex>
                  <v-flex align-center>{{player.pos}}</v-flex>
                </v-card-title>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id.split(":").pop(),
      currentTeam: {}
    };
  },
  created() {},

  computed: {
    getTeams() {
      return this.$store.getters.getTeams;
    },
    getTeam: function() {
      if (this.getTeams) {
        let result = this.getTeams.filter(team => team.name == this.id);
        this.currentTeam = result[0];

        return this.currentTeam;
      }
      return (this.currentTeam = {});
    }
  }
};
</script>
<style scoped>
.v-list {
  border: 2px solid black;
  padding: 0;
}
.map {
  text-align: center;
}
.logo {
  overflow: hidden;
}
</style>


