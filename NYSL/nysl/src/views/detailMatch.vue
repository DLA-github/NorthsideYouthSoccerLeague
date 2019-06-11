<template>
  <v-card min-height="530">
    <v-toolbar>
      <v-layout justify-center>
        <v-toolbar-title>{{teamA.name}}-{{teamB.name}}</v-toolbar-title>
      </v-layout>
    </v-toolbar>

    <v-layout xs12 justify-center align-center class="pa-3">
      <v-flex xs3>
        <router-link :to="'/team/t:'+ teamA.name">
          <v-img :src="teamA.logo"></v-img>
        </router-link>
      </v-flex>
      <v-flex xs8 class="text-xs-center">VS</v-flex>
      <v-flex xs3>
        <router-link :to="'/team/t:'+ teamB.name">
          <v-img :src="teamB.logo"></v-img>
        </router-link>
      </v-flex>
    </v-layout>
    <v-layout xs12 justify-center align-center class="pl-2 pr-4">
      <v-flex xs1.5>
        <span>{{teamA.name}}</span>
      </v-flex>
      <v-flex xs8 class="text-xs-center"></v-flex>
      <v-flex xs1.5>
        <span>{{teamB.name}}</span>
      </v-flex>
    </v-layout>

    <v-layout row xs10 justify-center class="pa-4">
      <span>Hora del partido:{{teamA.timeMatch}}</span>
    </v-layout>
    <v-card flat>
      <v-layout row xs10 justify-center wrap>
        <v-card-title>{{teamA.Location}}</v-card-title>
        <div class="map">
          <iframe
            :src="teamA.maps"
            width="300"
            height="200"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </v-layout>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      teamA: {},
      teamB: {},
      id: this.$route.params.id,
      object: {}
    };
  },
  created() {
    let teams = this.id.split("-");
    let a = teams[0].split(":").pop();
    let b = teams[1];
    let result1 = this.teams.filter(team => team.name == a);
    this.teamA = result1[0];
    let result2 = this.teams.filter(team => team.name == b);
    this.teamB = result2[0];
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
};
</script>

