<template>
  <v-card dark min-height="530">
    <v-toolbar>
      <v-layout xs12 align-center justify-space-around>
        <v-flex class="text-xs-center headline light-green--text text--lighten-2">TEAMS</v-flex>
        <v-flex>
          <v-text-field label="Search" outline color="light-green lighten-2 ml-1" v-model="search"></v-text-field>
        </v-flex>
      </v-layout>
    </v-toolbar>

    <v-list class="mx-5">
      <v-list-tile v-for="team in getSearch" :key="team.name">
        <v-list-tile-content>
          <v-list-tile-title class="text-xs-center grey lighten-1">
            <router-link :to="'/team/t:'+ team.name" class="black--text">{{team.name}}</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      currentTeam: [],
      componentKey: 0
    };
  },
  created() {
    this.$store.dispatch("loadData");
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  },
  computed: {
    getTeams() {
      return this.$store.getters.getTeams;
    },
    getSearch: function() {
      if (this.getTeams) {
        this.currentTeam = this.getTeams.filter(team => {
          return (
            team.name.toLowerCase().match(this.search.toLowerCase()) ||
            this.search.length === 0
          );
        });

        return this.currentTeam;
      }
      return (this.currentTeam = []);
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}

.v-list__tile__title {
  border: 1px solid black;
  border-radius: 20px;
}
</style>


