<template>
  <v-card min-height="530">
    <v-toolbar>
      <v-layout align-center justify-space-around>
        <h2>TEAMS</h2>
        <div>
          <input type="text" placeholder="Search Team" v-model="search">
        </div>
      </v-layout>
    </v-toolbar>

    <v-list>
      <v-list-tile v-for="team in getSearch" :key="team.name">
        <v-list-tile-content>
          <v-list-tile-title class="text-xs-center blue lighten-5">
            <router-link :to="'/team/t:'+ team.name">{{team.name}}</router-link>
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
      currentTeam: []
    };
  },
  created() {},
  computed: {
    teams() {
      return this.$store.state.teams;
    },
    getSearch: function() {
      this.currentTeam = this.teams.filter(team => {
        return (
          team.name.toLowerCase().match(this.search.toLowerCase()) ||
          this.search.length === 0
        );
      });
      return this.currentTeam;
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}
</style>


