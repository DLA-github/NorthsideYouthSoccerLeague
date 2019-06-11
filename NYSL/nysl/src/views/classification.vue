<template>
  <v-card min-height="530">
    <v-toolbar>
      <v-layout justify-center>
        <router-link to="/class">|| Standing |</router-link>
        <router-link to="/class/sched">| Schedule |</router-link>
        <router-link to="/class/res">| Results ||</router-link>
      </v-layout>
    </v-toolbar>

    <v-list>
      <v-list-tile v-for="pos in standing" :key="pos.name">
        <v-list-tile-content>
          <v-list-tile-title class="text-xs-center blue lighten-5">
            <router-link :to="'/team/t:'+ pos.name">{{pos.pos}}.-{{pos.name}}</router-link>
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
      standing: []
    };
  },
  created() {
    this.standing = this.teams.sort((a, b) => {
      return a.pos - b.pos;
    });
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
};
</script>

