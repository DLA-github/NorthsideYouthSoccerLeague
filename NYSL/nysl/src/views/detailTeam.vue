<template>
  <v-card>
    <v-toolbar flat>
      <v-layout justify-center>
        <v-toolbar-title>{{currentTeam.name}}</v-toolbar-title>
      </v-layout>
    </v-toolbar>

    <v-content>
      <v-layout xs12 justify-center>
        <v-card flat>
          <v-layout justify-center align-center>
            <v-flex xs5>
              <v-img :src="currentTeam.logo"></v-img>
            </v-flex>
          </v-layout>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="text-xs-center">Color de la equipación principal:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center">{{currentTeam.colors}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="text-xs-center">Posición actual en la Liga:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center">{{currentTeam.pos}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content wrap>
                <v-list-tile-title class="text-xs-center">Ubicación Estadio:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center">{{currentTeam.Location}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-flex xs10 class="pl-4">
            <iframe
              :src="currentTeam.maps"
              width="300"
              height="200"
              frameborder="0"
              style="border:0"
              allowfullscreen
            >Maps</iframe>
          </v-flex>
        </v-card>
      </v-layout>

      <v-carousel>
        <v-carousel-item v-for="(player,i) in currentTeam.players" :key="i" :src="player.src"></v-carousel-item>
      </v-carousel>
    </v-content>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id.split(":").pop(),
      currentTeam: {}
    };
  },
  created() {
    let result = this.teams.filter(team => team.name == this.id);
    this.currentTeam = result[0];
    console.log(this.currentTeam.players);
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
};
</script>

